USE [subd]
GO
/****** Object:  StoredProcedure [dbo].[raspis_print3]    Script Date: 05/11/2019 09:07:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO












-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[raspis_print3] --- printing aud fond
	-- Add the parameters for the stored procedure here
	@korpus nvarchar(3),
	@etaj  nvarchar(3),
	@nedel1 int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	
	declare @txt nvarchar(MAX)
	declare @iday int
	declare @ipara int
	declare @i int
	declare @daystr nvarchar(25)
	declare @datstr nvarchar(25)
	declare @datstr1 nvarchar(25)
	declare @parastr nvarchar(25)
	declare @addr nvarchar(25)
	declare @korstr nvarchar(15)
	declare @n_aud nvarchar(15)
	declare @kol_mest int
	declare @fio nvarchar(50)
	declare @fio_old nvarchar(50)
	declare @fio1 nvarchar(50)
	declare @gr nvarchar(50)
	declare @id_aud_fond int
	declare @leng int

    -- Insert statements for procedure here
	
	create table #tmp(txt nvarchar(4000), num int identity)
set dateformat dmy;
select top 1 @korstr=cast(nomer as nvarchar),@addr=addr from raspis_aud_fond where korpus=@korpus
select @datstr=(cast(datepart(day,dat) as nvarchar)+'.'+cast(datepart(month,dat) as nvarchar)+'.'+cast(datepart(year,dat) as nvarchar)) from raspis_dat_ych where nom=@nedel1 and denid=0
select @datstr1=(cast(datepart(day,dat) as nvarchar)+'.'+cast(datepart(month,dat) as nvarchar)+'.'+cast(datepart(year,dat) as nvarchar))  from raspis_dat_ych where nom=@nedel1 and denid=6
set @txt='<html><head><title>Аудиторный фонд</title></head><body>'
insert into #tmp(txt) values(@txt)
set @txt='<center><b><font size=+1>Корпус № '+@korstr+' ('+@addr+' '+@etaj+' этаж) '+@datstr+'-'+@datstr1+'</font></b></center>'
insert into #tmp (txt) values(@txt)
set @txt='<table width=100% cellpadding=0 cellspacing=0 border=1><tr align=center width=100><td>&nbsp;<hr>&nbsp;<td height=70 width=50>&nbsp;<hr>Время'
insert into #tmp (txt) values(@txt)
set @i=1
set @txt=''
declare cur cursor for
 select n_aud,kol_mest from raspis_aud_fond where korpus=@korpus and etaj=rtrim(@etaj) order by n_aud
open cur
fetch next from cur into @n_aud,@kol_mest
while (@@FETCH_STATUS=0)
begin
	set @txt='<td height=70><b><font size=+1>'+@n_aud+'</font></b><hr>'+cast(@kol_mest as nvarchar)
	insert into #tmp (txt) values(@txt)
	fetch next from cur into @n_aud,@kol_mest
	set @i=@i+1
end
close cur
deallocate cur

set @txt=''
set @iday=1
while(@iday<8)
begin
	select @daystr=[name] from raspis_dat_sokr where id=@iday
	select @datstr=datepart(day,dat) from raspis_dat_ych where nom=@nedel1 and denid=(@iday-1)
	set @txt='<tr><td rowspan=9 align=center width=15>'+rtrim(@daystr)+'.<br>'+rtrim(@datstr)+'</td></tr>'
	insert into #tmp (txt) values(@txt)
	set @txt=''
	set @ipara=1
	while(@ipara<9)
	begin
		set @parastr=''
		select @parastr=tim from raspis_para where num=@ipara
		set @txt='<tr><td align=center><font face="Arial, sans-serif" style="font-size: 5pt">'+replace(rtrim(@parastr),' ','')+'</font>'
		insert into #tmp (txt) values(@txt)
		
		set @i=1
		set @txt=''
		set @n_aud=''
		set @kol_mest=0
		declare cur cursor for
		 select id_aud_fond,n_aud,kol_mest from raspis_aud_fond where korpus=@korpus and etaj=rtrim(@etaj) order by n_aud
		open cur
		fetch next from cur into @id_aud_fond,@n_aud,@kol_mest
		while (@@FETCH_STATUS=0)
		begin
			set @txt='<td valign=top cellpadding=0 cellspacing=0>'
			insert into #tmp (txt) values(@txt)

			declare cura cursor for
			 select distinct raspis_ych_plan.fio1,LEN(raspis_ych_plan.fio1) AS leng,raspis_ych_plan.k from raspis_baza,raspis_ych_plan where
				 raspis_baza.id_nedel=@nedel1
				and raspis_ych_plan.id=raspis_baza.id_ych_plan
				and raspis_baza.id_aud_fond=@id_aud_fond and raspis_baza.id_day=(@iday-1) and raspis_baza.id_para=@ipara
			open cura
			set @fio=''
			set @gr=''
			set @txt=''
			set @fio1=''
			set @fio_old=''
			fetch next from cura into @fio,@leng,@gr
			while (@@FETCH_STATUS=0)
			begin
				set @fio1=@fio
				--if(@fio=@fio_old) set @fio1=''
				--if(rtrim(@fio1)='') set @fio1='--'
				if((@leng-5)>0) set @leng=@leng-5
				set @txt=@txt+substring(@fio1,0,@leng+2)+' '+replace(rtrim(@gr),' ','')+';'
				--set @fio1=''
				--set @fio_old=@fio
				fetch next from cura into @fio,@leng,@gr
			end
			close cura
			deallocate cura
			set @i=@i+1
			insert into #tmp (txt) values('<b><font face="Arial, sans-serif" style="font-size: 5pt">'+@txt+'&nbsp;</font></b>')
		fetch next from cur into @id_aud_fond,@n_aud,@kol_mest
		end
		close cur
		deallocate cur
		insert into #tmp (txt) values('</td></tr>')		
		set @ipara=@ipara+1
	end
	set @iday=@iday+1
end

set @txt='</table>'
insert into #tmp (txt) values(@txt)
set @txt='</body></html>'
insert into #tmp(txt) values(@txt)

select txt from #tmp

drop table #tmp

END













