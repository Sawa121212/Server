USE [subd]
GO
/****** Object:  StoredProcedure [dbo].[raspis_print1]    Script Date: 05/26/2019 17:06:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO











-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[raspis_print1]  ---------------------  расписание для преподавателей
	-- Add the parameters for the stored procedure here
	@pps nvarchar(400),
	@id_nedel1 int,
	@id_nedel2 int
AS
BEGIN
	declare @txt nvarchar(MAX)
	declare @txt1 nvarchar(MAX)
	declare @txt2 nvarchar(MAX)
	declare @strkaf nvarchar(400)
	declare @strfio nvarchar(400)
	declare @strmonth nvarchar(400)
	declare @idpara int
	declare @idday	int
	declare @iday int
	declare @idpage int
	declare @num int
	declare @id_ych_plan int
	declare @tim nvarchar(20)
	declare @subj nvarchar(50)
	declare @subjtip nvarchar(50)
	declare @k_otd_fak nvarchar(50)
	declare @gr nvarchar(50)
	declare @pgr nvarchar(50)
	declare @aud nvarchar(50)
	declare @strdop nvarchar(4000)
	declare @id_month int
	declare @id_year_b int
	declare @id_year_e int
	declare @denstr nvarchar(20)
	declare @dayint int
	declare @rasp2prepod nvarchar(max)
	declare @inedel int
	declare	@tim1 nvarchar(40)
	declare @tim2 nvarchar(70)
	declare @odd nvarchar(2)
	create table #tmp(txt nvarchar(4000), num int identity)
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
set dateformat dmy;
	
	set @strmonth	='----'
	set @strkaf		='----'
	set @strfio		='----'
	set @idpara		=1
	set @idday		=1

	select distinct @strkaf=kaf,@strfio=(rtrim(fam)+' '+substring(nam,1,1)+'.'+substring(otch,1,1)+'.') from raspis_pps where (ltrim(rtrim(fam))+' '+ltrim(rtrim(nam))+' '+ltrim(rtrim(otch)))=rtrim(@pps)
	select distinct @id_month=datepart(month,dat) from raspis_dat_ych where nom=@id_nedel1
	select distinct @id_year_b=datepart(year,dat) from raspis_dat_ych where nom=1
	select distinct @id_year_e=datepart(year,dat) from raspis_dat_ych where nom=40
	if(@id_month=1)	set @strmonth='Январь'
	if(@id_month=2)	set @strmonth='Февраль'
	if(@id_month=3)	set @strmonth='Март'
	if(@id_month=4)	set @strmonth='Апрель'
	if(@id_month=5)	set @strmonth='Май'
	if(@id_month=6)	set @strmonth='Июнь'
	if(@id_month=7)	set @strmonth='Июль'
	if(@id_month=8)	set @strmonth='Август'
	if(@id_month=9)	set @strmonth='Сентябрь'
	if(@id_month=10)set @strmonth='Октябрь'
	if(@id_month=11)set @strmonth='Ноябрь'
	if(@id_month=12)set @strmonth='Декабрь'
set @idpage=0
set @iday=0
--while(@idpage<7)
--begin
	set @txt='<center><b>Чебоксарский политехнический институт (филиал) ГОУ ВПО МГОУ</center>
<center>РАСПИСАНИЕ ЗАНЯТИЙ ПРЕПОДАВАТЕЛЯ</b></center>'
insert into #tmp (txt) values(@txt)
	set @txt='<center><b>кафедра:</b><ins> '+@strkaf+'</ins> <b>ФИО:</b><ins> '+@strfio+'</ins> <b>месяц:</b> <ins> '+@strmonth+'</ins> '+cast(@id_year_b as nvarchar)+'-'+cast(@id_year_e as nvarchar)+' <b>учебного года</b></center>'
	insert into #tmp (txt) values(@txt)
set @txt='
<table cellpading=0 cellspacing=0 align=center width=100% border=1 bordercolor="#fefefe">
<tr align=center>'
insert into #tmp (txt) values(@txt)
set @inedel=@id_nedel1
set @tim1='<td align=center>Время'
while(@inedel<=@id_nedel2)
begin
	select distinct @odd=odd from raspis_dat_ych where nom=@inedel
	set @txt='<td align=center>Дата'+@tim1+'<td align=center>'+@odd+' Дисциплина, вид занятия, курс-отд-фак, группа (подгруппа), ауд.'
	insert into #tmp (txt) values(@txt)
	set @inedel=@inedel+1
	set @tim1=''
end

set @idday=0
while(@idday<7)
begin
set @idpara=1
set @subj=''
set @subjtip=''
set @k_otd_fak=''
set @gr=''
set @pgr=''
set @aud=''

set @idpara=1
while(@idpara<9)
begin
	set @txt='<tr height=6 bordercolor="#dddddd">'
	insert into #tmp (txt) values(@txt)

set @inedel=@id_nedel1
while(@inedel<=@id_nedel2)
begin
	set @subj=''
	set @subjtip=''
	set @k_otd_fak=''
	set @gr=''
	set @pgr=''
	set @aud=''
	set @denstr=''
	set @strdop=''
	set @rasp2prepod=''
	set @txt=''
	set @txt1=''

	set @idpara=@idpara
	set @inedel=@inedel
	set @idday=@idday
	set @txt=''
	set @txt1=''
	set @txt2=''

	select distinct @tim=tim from raspis_para where num=@idpara
	select @denstr=[name] from raspis_dat_sokr where id=(@idday+1)
	select distinct @dayint=datepart(day,dat) from raspis_dat_ych where nom=@inedel and denid=@idday

	set @tim2='<td align=center width=80><font size=-3>'+@tim+'</font>&nbsp;'
	if(@inedel>@id_nedel1) set @tim2=''
	if @idpara=1 begin
		set @txt='<td width=1% rowspan=8 align=center valign=top>'+rtrim(@denstr)+'.<br>'+cast(@dayint as nvarchar)
		set @txt1=@tim2+'<td>'
	end else begin
		set @txt=@tim2+'<td>'
		set @txt1=''
	end
	if(rtrim(@txt)<>'') insert into #tmp (txt) values(@txt)
	if(rtrim(@txt1)<>'') insert into #tmp (txt) values(@txt1)
	insert into #tmp (txt) values('<font face="Arial, sans-serif" style="font-size: 6pt">')

declare cur cursor for
	select distinct raspis_ych_plan.subject, raspis_zan_tip.kr_name, raspis_ych_plan.k, 
		raspis_baza.r_gr, raspis_baza.r_pgr, (raspis_aud_fond.n_aud)
	 from raspis_baza,raspis_ych_plan,raspis_zan_tip,raspis_aud_fond
	 where id_day=@idday and id_para=@idpara and id_nedel=@inedel 
and (raspis_ych_plan.fio1=@strfio or (raspis_ych_plan.fio2=@strfio and raspis_baza.id_zan_tip=6)) 
and raspis_ych_plan.id=raspis_baza.id_ych_plan
		and raspis_zan_tip.id=raspis_baza.id_zan_tip and raspis_aud_fond.id_aud_fond=raspis_baza.id_aud_fond
     
open cur
fetch next from cur into @subj,@subjtip,@k_otd_fak,@gr,@pgr,@aud
while (@@FETCH_STATUS=0)
begin
  if(@k_otd_fak<>'') begin  -- //////// k_otd_fak<>'' _begin

	set @strdop=''
	set @strdop=rtrim(@subj)+', '+rtrim(@subjtip)+', '+rtrim(@k_otd_fak)+', '+rtrim(cast(@gr as nvarchar))+'-'+rtrim(cast(@pgr as nvarchar))+', '+rtrim(@aud)

	if(rtrim(@subj)<>'') insert into #tmp (txt) values(@strdop+'; ')

  end -- //////// k_otd_fak<>'' _end
	set @k_otd_fak=''
	fetch next from cur into @subj,@subjtip,@k_otd_fak,@gr,@pgr,@aud
end
close cur
deallocate cur
	insert into #tmp (txt) values('&nbsp; </font>')
	set @idpara=@idpara
	set @inedel=@inedel
	set @idday=@idday
	--insert into #tmp (txt) values('+'+cast(@idpara as nvarchar)+'+'+cast(@inedel as nvarchar)+'+'+cast(@idday as nvarchar)+'+')
set @inedel=@inedel+1
end
	set @idpara=@idpara+1
--insert into #tmp (txt) values('</tr>')
end
set @idday=@idday+1
end
set @txt='</table>'
insert into #tmp (txt) values(@txt)

select txt from #tmp

drop table #tmp

END













