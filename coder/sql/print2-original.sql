USE [subd]
GO
/****** Object:  StoredProcedure [dbo].[raspis_print2]    Script Date: 05/11/2019 11:12:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO






























-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[raspis_print2]  ---------------------  расписание для Студентов очников
	-- Add the parameters for the stored procedure here
	@course int,
	@fs int,
	@spec nvarchar(15),
	@semestr nvarchar(1),
	@nedel1 int,
	@nedel2 int
AS
BEGIN
	declare @txt nvarchar(MAX)
	declare @idpara int
	declare @idday	int
	declare @kolgrmax int
	declare @kolpgrmax int
	declare @fs_str nvarchar(3)
	declare @otd nvarchar(40)
	declare @fsnedel nvarchar(50)
	declare @grstr nvarchar(MAX)
	declare @pgrstr nvarchar(MAX)
	declare @i int
	declare @j int
	declare @ii int
	declare @denstr nvarchar(10)
	declare @tim nvarchar(20)
	declare @parastr nvarchar(2000)
	declare @audstr nvarchar(1000)
	declare @parastr1 nvarchar(2000)
	declare @audstr1 nvarchar(1000)
	declare @parastr2 nvarchar(2000)
	declare @audstr2 nvarchar(1000)
	declare @parastr1p nvarchar(2000)
	declare @audstr1p nvarchar(1000)
	declare @parastr2p nvarchar(2000)
	declare @audstr2p nvarchar(1000)
	declare @k int
	declare @paragr int
	declare @parapgr int
	declare @paragr1 int
	declare @parapgr1 int
	declare @paragr2 int
	declare @parapgr2 int
	declare @pgrstr1 nvarchar(MAX)
	declare @pgrstr2 nvarchar(MAX)
	declare @paragr1p int
	declare @parapgr1p int
	declare @paragr2p int
	declare @parapgr2p int
	declare @pgrstr1p nvarchar(MAX)
	declare @pgrstr2p nvarchar(MAX)
	declare @datychplan11 nvarchar(20)
	declare @datychplan12 nvarchar(20)
	declare @datychplan21 nvarchar(20)
	declare @datychplan22 nvarchar(20)
	declare @datychplan11p nvarchar(20)
	declare @datychplan12p nvarchar(20)
	declare @datychplan21p nvarchar(20)
	declare @datychplan22p nvarchar(20)
	declare @datychplan1 nvarchar(20)
	declare @datychplan2 nvarchar(20)
	declare @pgrstr_1 nvarchar(MAX)
	declare @pgrstr_2 nvarchar(MAX)
	declare @parastr_1 nvarchar(2000)
	declare @parastr_2 nvarchar(2000)
	declare @audstr_1 nvarchar(1000)
	declare @audstr_2 nvarchar(1000)
	declare @paragr_1 int
	declare @paragr_2 int
	declare @parapgr_1 int
	declare @parapgr_2 int
	declare @strdop1 nvarchar(2000)
	declare @strdop2 nvarchar(2000)
	declare @odd nvarchar(2)
	declare @odd_old nvarchar(2)
	declare @odd1 nvarchar(2)
	declare @pgrstr1_old nvarchar(MAX)
	declare @ic int
	declare @iic int
	declare @iicc int
	declare @iiiccc int
	declare @iiic int
	declare @txt1 nvarchar(MAX)
	declare @rowspan int
	declare @idpara_end int
	declare @idpara_begin int
	declare @idday_end int
	declare @roundgrpgr int
	declare @rowtm int
	declare @rowtmstr nvarchar(30)
	declare @idday_notnull int
	declare @idpara_notnull int
	declare @idpara_counternotnull int
	declare @year_learn nvarchar(100)
	declare @start_non_first nvarchar(50)

	create table #tmp(txt nvarchar(4000), num int identity)
	create table #tmp1(txt nvarchar(4000), num int identity)
	create table #tmp2(txt nvarchar(4000), num int identity)
	create table #tmp3(txt nvarchar(4000), num int identity)
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
set dateformat dmy;
	
			set @fs_str=''
			if(@fs=1) set @fs_str='д'
			if(@fs=2) set @fs_str='з'
			if(@fs=3) set @fs_str='в'
			if(@fs=4) set @fs_str='зс'
			if(@fs=5) set @fs_str='звв'	
			if(@fs=11) set @fs_str='дэ'	
			if(@fs=31) set @fs_str='вэ'	
	
	set @start_non_first='30.8' -- date start ych plan first nedel

	select @year_learn=cast(datepart(year,min(start)) as nvarchar)+'-'+cast(datepart(year,max([end])) as nvarchar) from raspis_ych_plan

	select @otd=[name] from raspis_fs where id=@fs
	set @fsnedel=''
	--if(@fs<>1 and @fs<>3) set @fsnedel=cast(@nedel1 as nvarchar)+'-'+cast(@nede'l2 as nvarchar)+' недели '

	set @txt='<font size=-2>УТВЕРЖДАЮ:<br>Зам. директора по учебной работе  ЧПИ МГОУ<br> _________________________ Н.А. Скворцов<br>«_______» _______________________ '+cast(datepart(year,getdate()) as nvarchar)+' г.</font>
<center><ins><b>РАСПИСАНИЕ ЗАНЯТИЙ</b></ins><br>на период '
insert into #tmp (txt) values(@txt)
	set @txt=rtrim(ltrim(@fsnedel))+cast(@semestr as nvarchar)+' семестр '+@year_learn+' учебного года<br><b>КУРС  <ins>'+cast(@course as nvarchar)+'</ins> ОТДЕЛЕНИЕ <ins>'+@otd+'</ins>   СПЕЦИАЛЬНОСТЬ  <ins>'+@spec+'</ins></b>
</center>'
insert into #tmp (txt) values(@txt)


select @kolgrmax=max(gr),@kolpgrmax=max(pgr) from raspis_ych_plan where k=@spec+'-'+cast(@course as nvarchar)+@fs_str
set @i=1
set @grstr=''

if(@kolgrmax=2 and @kolpgrmax=3)begin
 while(@i<=@kolgrmax)
 begin
	set @grstr=@grstr+'<td colspan=6 align=center width=50%>группа '+cast(@i as nvarchar)+'</td>'
	set @i=@i+1
 end
end else begin
 while(@i<=@kolgrmax)
 begin
	set @grstr=@grstr+'<td colspan='+cast((round(@kolpgrmax/@kolgrmax,0)*2) as nvarchar)+' align=center>группа '+cast(@i as nvarchar)+'</td>'
	set @i=@i+1
 end
end
set @txt='
<table cellpading=0 cellspacing=0 align=center width=100% border=1 class=raspis1 bordercolor="#cccccc">
<tr align=center><td rowspan=2 width=30>&nbsp;<td rowspan=2 width=30 align=center>Время'
insert into #tmp (txt) values(@txt)
set @txt=@grstr+'</tr>'
insert into #tmp (txt) values(@txt)
set @i=1
set @pgrstr=''
insert into #tmp (txt) values('<tr>')
if(@kolgrmax=2 and @kolpgrmax=3)begin
 while(@i<=@kolpgrmax)
 begin
	set @pgrstr='<td colspan=4 align=center width=33%>подгруппа '+cast(@i as nvarchar)+'</td>'
	insert into #tmp (txt) values(@pgrstr)
	set @i=@i+1
 end
end else begin
 while(@i<=@kolpgrmax)
 begin
	set @pgrstr='<td colspan=2 align=center>подгруппа '+cast(@i as nvarchar)+'</td>'
	insert into #tmp (txt) values(@pgrstr)
	set @i=@i+1
 end
end
insert into #tmp (txt) values('</tr>')

set @idday_notnull=0
set @idday=0
set @idday_end=7
if(@fs=1 or @fs=3) set @idday_end=6
while(@idday<@idday_end) ---Цикл для дней недели _начало
begin
	set @pgrstr=''
	set @pgrstr1=''
	set @pgrstr2=''
	set @parastr=''
	set @audstr=''
	set @paragr=''
	set @parapgr=''
	set @parastr1=''
	set @audstr1=''
	set @paragr1=''
	set @parapgr1=''
	set @parastr2=''
	set @audstr2=''
	set @paragr2=''
	set @parapgr2=''
	set @datychplan11=''
	set @datychplan12=''
	set @datychplan21=''
	set @datychplan22=''
	set @rowspan=10
	select @denstr=[name] from raspis_dat_sokr where id=(@idday+1)

set @idpara_notnull=0
set @idpara_counternotnull=0
set @idpara_begin=1
if(@fs=3)begin
 if(@idday<>5) set @idpara_begin=7
end
set @idpara_end=9
set @idpara=@idpara_begin
set @iicc=1
while(@idpara<@idpara_end)
begin --- Цикл для пар _начало
set @iiiccc=1
set @rowtm=0
	set @pgrstr1=''
	set @pgrstr1_old=''
	set @datychplan11=''
	set @datychplan12=''
	set @datychplan21=''
	set @datychplan22=''
	set @datychplan11p=''
	set @datychplan12p=''
	set @datychplan21p=''
	set @datychplan22p=''
	set @pgrstr=''
	set @pgrstr1=''
	set @pgrstr1_old=''
	set @odd=''
	set @odd_old=''
	set @pgrstr2=''
	set @pgrstr1p=''
	set @pgrstr2p=''
	set @parastr=''
	set @audstr=''
	set @paragr=''
	set @parapgr=''
	set @parastr1=''
	set @audstr1=''
	set @paragr1=''
	set @parapgr1=''
	set @parastr2=''
	set @audstr2=''
	set @paragr2=''
	set @parapgr2=''
	set @parastr1p=''
	set @audstr1p=''
	set @paragr1p=''
	set @parapgr1p=''
	set @parastr2p=''
	set @audstr2p=''
	set @paragr2p=''
	set @parapgr2p=''
	set @txt=''
	set @iiic=1
	if(@kolgrmax=2 and @kolpgrmax=3)begin
	  set @txt='<td colspan=12 align=center>&nbsp;'
	end else set @txt='<td colspan='+cast((@kolpgrmax*2) as nvarchar)+' align=center>&nbsp;'
 if(@fs=1 or @fs=3) begin
 declare cur cursor for
	select '<b>'+raspis_ych_plan.subject+'</b> <font size=-2>('+raspis_zan_tip.kr_name+') '+raspis_ych_plan.fio1+'</font>',
			raspis_aud_fond.n_aud,
			raspis_baza.r_gr,
			raspis_baza.r_pgr,
			raspis_dat_ych.odd,
case
	when cast(datepart(day,raspis_ych_plan.start) as nvarchar)+'.'+cast(datepart(month,raspis_ych_plan.start) as nvarchar)=@start_non_first then '(1.9'
	else '('+cast(datepart(day,raspis_ych_plan.start) as nvarchar)+'.'+cast(datepart(month,raspis_ych_plan.start) as nvarchar)
end,
			' - '+cast(datepart(day,raspis_ych_plan.[end]) as nvarchar)+'.'+cast(datepart(month,raspis_ych_plan.[end]) as nvarchar)+'.'+cast(datepart(year,raspis_ych_plan.[end]) as nvarchar)+')'
			from raspis_baza,raspis_zan_tip,raspis_aud_fond ,raspis_ych_plan,raspis_dat_ych
			where raspis_baza.id_zan_tip=raspis_zan_tip.id and raspis_aud_fond.id_aud_fond=raspis_baza.id_aud_fond
				and raspis_ych_plan.k=@spec+'-'+cast(@course as nvarchar)+@fs_str
				and raspis_baza.r_gr=0
				and raspis_baza.r_pgr=0
				and raspis_baza.id_day=@idday
				and raspis_baza.id_para=@idpara
				--and raspis_dat_ych.odd=@odd
				and raspis_dat_ych.denid=raspis_baza.id_day
				and raspis_dat_ych.nom=raspis_baza.id_nedel
				and raspis_ych_plan.id=raspis_baza.id_ych_plan
				and raspis_ych_plan.start<=raspis_dat_ych.dat and raspis_dat_ych.dat<=raspis_ych_plan.[end]
				and raspis_ych_plan.s=@semestr
			order by raspis_ych_plan.start,'<b>'+raspis_ych_plan.subject+'</b> <font size=-2>('+raspis_zan_tip.kr_name+') '+raspis_ych_plan.fio1+'</font>'
 end else begin
 declare cur cursor for
	select '<b>'+raspis_ych_plan.subject+'</b> <font size=-2>('+raspis_zan_tip.kr_name+') '+raspis_ych_plan.fio1+'</font>',
			raspis_aud_fond.n_aud,
			raspis_baza.r_gr,
			raspis_baza.r_pgr,
			raspis_dat_ych.odd,
			'',
			''
			from raspis_baza,raspis_zan_tip,raspis_aud_fond ,raspis_ych_plan,raspis_dat_ych
			where raspis_baza.id_zan_tip=raspis_zan_tip.id and raspis_aud_fond.id_aud_fond=raspis_baza.id_aud_fond
				and raspis_ych_plan.k=@spec+'-'+cast(@course as nvarchar)+@fs_str
				and raspis_baza.r_gr=0
				and raspis_baza.r_pgr=0
				and raspis_baza.id_day=@idday
				and raspis_baza.id_para=@idpara
				--and raspis_dat_ych.odd=@odd
				and raspis_dat_ych.denid=raspis_baza.id_day
				and raspis_dat_ych.nom=raspis_baza.id_nedel
				and raspis_ych_plan.id=raspis_baza.id_ych_plan
				and raspis_ych_plan.start<=raspis_dat_ych.dat and raspis_dat_ych.dat<=raspis_ych_plan.[end]
				--and raspis_ych_plan.s=@semestr
				and raspis_baza.id_nedel>=@nedel1
				and raspis_baza.id_nedel<=@nedel2
			order by '<b>'+raspis_ych_plan.subject+'</b> <font size=-2>('+raspis_zan_tip.kr_name+') '+raspis_ych_plan.fio1+'</font>'
 end
--		order by '('+cast(datepart(day,raspis_ych_plan.start) as nvarchar)+'.'+cast(datepart(month,raspis_ych_plan.start) as nvarchar) desc 
open cur
set @odd_old=''
set @pgrstr1_old=''
set @odd=''
set @odd1=''
set @ic=1
set @iic=1
set @txt1=''
fetch next from cur into @parastr1,@audstr1,@paragr1,@parapgr1,@odd,@datychplan11,@datychplan12
set @pgrstr1_old=@pgrstr1
set @odd_old=@odd
set @odd1=@odd
while (@@FETCH_STATUS=0)
begin
--------------- @i - номер группы
--------------- @k - номер подгруппы
	--set @pgrstr1_old=@parastr1+@datychplan11+@datychplan12+','+@audstr1--' гр.:'+cast(@paragr1 as nvarchar)+' подгр.:'+cast(@parapgr1 as nvarchar)
	set @odd_old=@odd
	set @odd1=@odd
	set @pgrstr1=@parastr1+@datychplan11+@datychplan12+','+@audstr1--' гр.:'+cast(@paragr1 as nvarchar)+' подгр.:'+cast(@parapgr1 as nvarchar)
	fetch next from cur into @parastr1,@audstr1,@paragr1,@parapgr1,@odd,@datychplan11,@datychplan12
	set @odd1=@odd
	if(@odd_old<>@odd) set @odd1=''
	if(@pgrstr1<>@pgrstr1_old)begin
	  if(@ic>1) set @txt1=@txt1+'<hr>' --insert into #tmp (txt) values('<hr>')
	  if(@fs=1 or @fs=3)begin
	   set @txt1=@txt1+@odd1+@pgrstr1--insert into #tmp (txt) values(@odd+@pgrstr1)
	  end else set @txt1=@txt1+@pgrstr1
	  set @pgrstr1_old=@pgrstr1
	  set @ic=@ic+1
	  set @iic=@iic+1
	  set @iiiccc=@iiiccc+1
	set @idpara_notnull=@idpara_notnull+1
	end
end
close cur
deallocate cur
--set @txt=@txt+@txt1
if(rtrim(@txt1)='') set @txt=''
if(rtrim(@txt1)<>'' and @ic>1) begin
	insert into #tmp3 (txt) values(rtrim(@txt))
	if(len(@txt1)>100) begin
		insert into #tmp3 (txt) values(substring(rtrim(@txt1),0,100))
		insert into #tmp3 (txt) values(substring(rtrim(@txt1),100,200))
		insert into #tmp3 (txt) values(substring(rtrim(@txt1),300,len(@txt1)))
	end else
	begin
		insert into #tmp3 (txt) values(rtrim(@txt1))
	end
	--set @iicc=@iicc+1
	set @iiic=@iiic+1
	set @rowtm=@rowtm+1
	--insert into #tmp1 (txt) values('<tr><td>&nbsp;')
end
	set @i=1
set @ic=1
set @iic=1
set @txt=''
	while(@i<=@kolgrmax) -- цикл для групп _начало
	begin
	set @datychplan11=''
	set @datychplan12=''
	set @datychplan21=''
	set @datychplan22=''
	set @datychplan11p=''
	set @datychplan12p=''
	set @datychplan21p=''
	set @datychplan22p=''
	set @pgrstr=''
	set @pgrstr1=''
	set @pgrstr1_old=''
	set @odd=''
	set @odd_old=''
	set @pgrstr2=''
	set @pgrstr1p=''
	set @pgrstr2p=''
	set @parastr=''
	set @audstr=''
	set @paragr=''
	set @parapgr=''
	set @parastr1=''
	set @audstr1=''
	set @paragr1=''
	set @parapgr1=''
	set @parastr2=''
	set @audstr2=''
	set @paragr2=''
	set @parapgr2=''
	set @parastr1p=''
	set @audstr1p=''
	set @paragr1p=''
	set @parapgr1p=''
	set @parastr2p=''
	set @audstr2p=''
	set @paragr2p=''
	set @parapgr2p=''
	set @txt=''
 if(@fs=1 or @fs=3) begin
	declare cur cursor for
	select '<b>'+raspis_ych_plan.subject+'</b> <font size=-2>('+raspis_zan_tip.kr_name+') '+raspis_ych_plan.fio1+'</font>',
			raspis_aud_fond.n_aud,
			raspis_baza.r_gr,
			raspis_baza.r_pgr,
			raspis_dat_ych.odd,
case
	when cast(datepart(day,raspis_ych_plan.start) as nvarchar)+'.'+cast(datepart(month,raspis_ych_plan.start) as nvarchar)=@start_non_first then '(1.9'
	else '('+cast(datepart(day,raspis_ych_plan.start) as nvarchar)+'.'+cast(datepart(month,raspis_ych_plan.start) as nvarchar)
end,
			' - '+cast(datepart(day,raspis_ych_plan.[end]) as nvarchar)+'.'+cast(datepart(month,raspis_ych_plan.[end]) as nvarchar)+'.'+cast(datepart(year,raspis_ych_plan.[end]) as nvarchar)+')'
			from raspis_baza,raspis_zan_tip,raspis_aud_fond ,raspis_ych_plan,raspis_dat_ych
			where raspis_baza.id_zan_tip=raspis_zan_tip.id and raspis_aud_fond.id_aud_fond=raspis_baza.id_aud_fond
				and raspis_ych_plan.k=@spec+'-'+cast(@course as nvarchar)+@fs_str
				and raspis_baza.r_gr=@i
				and raspis_baza.r_pgr=0
				and raspis_baza.id_day=@idday
				and raspis_baza.id_para=@idpara
				--and raspis_dat_ych.odd=@odd
				and raspis_dat_ych.denid=raspis_baza.id_day
				and raspis_dat_ych.nom=raspis_baza.id_nedel
				and raspis_ych_plan.id=raspis_baza.id_ych_plan
				and raspis_ych_plan.start<=raspis_dat_ych.dat and raspis_dat_ych.dat<=raspis_ych_plan.[end]
				and raspis_ych_plan.s=@semestr
			order by raspis_ych_plan.start,'<b>'+raspis_ych_plan.subject+'</b> <font size=-2>('+raspis_zan_tip.kr_name+') '+raspis_ych_plan.fio1+'</font>'
 end else begin
	declare cur cursor for
	select '<b>'+raspis_ych_plan.subject+'</b> <font size=-2>('+raspis_zan_tip.kr_name+') '+raspis_ych_plan.fio1+'</font>',
			raspis_aud_fond.n_aud,
			raspis_baza.r_gr,
			raspis_baza.r_pgr,
			raspis_dat_ych.odd,
			'',
			''
			from raspis_baza,raspis_zan_tip,raspis_aud_fond ,raspis_ych_plan,raspis_dat_ych
			where raspis_baza.id_zan_tip=raspis_zan_tip.id and raspis_aud_fond.id_aud_fond=raspis_baza.id_aud_fond
				and raspis_ych_plan.k=@spec+'-'+cast(@course as nvarchar)+@fs_str
				and raspis_baza.r_gr=@i
				and raspis_baza.r_pgr=0
				and raspis_baza.id_day=@idday
				and raspis_baza.id_para=@idpara
				--and raspis_dat_ych.odd=@odd
				and raspis_dat_ych.denid=raspis_baza.id_day
				and raspis_dat_ych.nom=raspis_baza.id_nedel
				and raspis_ych_plan.id=raspis_baza.id_ych_plan
				and raspis_ych_plan.start<=raspis_dat_ych.dat and raspis_dat_ych.dat<=raspis_ych_plan.[end]
				--and raspis_ych_plan.s=@semestr
				and raspis_baza.id_nedel>=@nedel1
				and raspis_baza.id_nedel<=@nedel2
			order by '<b>'+raspis_ych_plan.subject+'</b> <font size=-2>('+raspis_zan_tip.kr_name+') '+raspis_ych_plan.fio1+'</font>'
 end
--		order by '('+cast(datepart(day,raspis_ych_plan.start) as nvarchar)+'.'+cast(datepart(month,raspis_ych_plan.start) as nvarchar) desc 
open cur
set @odd_old=''
set @odd=''
set @odd1=''
	if(@kolgrmax=2 and @kolpgrmax=3)begin
		set @txt='<td colspan=6 align=center>&nbsp;'
	end else set @txt='<td colspan='+cast((@kolpgrmax/@kolgrmax*2) as nvarchar)+' align=center>&nbsp;'
set @txt1=''
set @pgrstr1_old=@pgrstr1
set @odd_old=@odd
set @odd1=@odd
fetch next from cur into @parastr1,@audstr1,@paragr1,@parapgr1,@odd,@datychplan11,@datychplan12
set @ic=1
while (@@FETCH_STATUS=0)
begin
--------------- @i - номер группы
--------------- @k - номер подгруппы
	set @odd_old=@odd
	set @odd1=@odd
	set @pgrstr1=@parastr1+@datychplan11+@datychplan12+','+@audstr1--+' гр.:'+cast(@paragr1 as nvarchar)+' подгр.:'+cast(@parapgr1 as nvarchar)
	fetch next from cur into @parastr1,@audstr1,@paragr1,@parapgr1,@odd,@datychplan11,@datychplan12
	set @odd1=@odd
	if(@odd_old<>@odd) set @odd1=''
	if(@pgrstr1<>@pgrstr1_old)begin
	  if(@ic>1) set @txt1=@txt1+'<hr>' --insert into #tmp (txt) values('<hr>')
	  if(@fs=1 or @fs=3)begin
	   set @txt1=@txt1+@odd1+@pgrstr1--insert into #tmp (txt) values(@odd+@pgrstr1)
	  end else set @txt1=@txt1+@pgrstr1
	  set @pgrstr1_old=@pgrstr1
	  set @ic=@ic+1
	  set @iic=@iic+1
	  set @iiiccc=@iiiccc+1
	set @idpara_notnull=@idpara_notnull+1
	end

end
close cur
deallocate cur
insert into #tmp2 (txt) values(@txt)
insert into #tmp2 (txt) values(@txt1)
set @i=@i+1
end -- цикл для групп _конец
set @txt=''
set @txt1=''
if(@iic>1)
begin
 if(@iiic>1)begin
	 if(@rowtm>0)begin
		insert into #tmp3 (txt) values('<tr>')
	 end
	 if(@rowtm=0)insert into #tmp3 (txt) values('<tr><td>&nbsp;')	
	 --insert into #tmp3 (txt) values('<tr><td>&nbsp;')
	set @iicc=@iicc+1
 end
 set @iiic=@iiic+1
 set @rowtm=@rowtm+1
 declare cur cursor for
	select txt
		from #tmp2
	order by num asc
 open cur
 fetch next from cur into @txt
 while (@@FETCH_STATUS=0)
 begin
	insert into #tmp3 (txt) values(@txt)
	fetch next from cur into @txt
 end
 close cur
 deallocate cur
end
delete from #tmp2
	set @i=1
	set @txt=''
	set @txt1=''
	set @ic=1
	set @iic=1
	while(@i<=@kolgrmax) -- цикл для групп _начало
	begin
	set @pgrstr1=''
	set @pgrstr1_old=''
	set @k=1	
	set @roundgrpgr=round(@kolpgrmax/@kolgrmax,0)
	if(@kolgrmax=2 and @kolpgrmax=3)begin
		set @roundgrpgr=2
		if(@i=2)set @roundgrpgr=1
	end
	while(@k<=@roundgrpgr) -- цикл для подгрупп _начало
	begin
	set @datychplan11=''
	set @datychplan12=''
	set @datychplan21=''
	set @datychplan22=''
	set @datychplan11p=''
	set @datychplan12p=''
	set @datychplan21p=''
	set @datychplan22p=''
	set @pgrstr=''
	set @pgrstr1=''
	set @pgrstr1_old=''
	set @odd=''
	set @odd_old=''
	set @pgrstr2=''
	set @pgrstr1p=''
	set @pgrstr2p=''
	set @parastr=''
	set @audstr=''
	set @paragr=''
	set @parapgr=''
	set @parastr1=''
	set @audstr1=''
	set @paragr1=''
	set @parapgr1=''
	set @parastr2=''
	set @audstr2=''
	set @paragr2=''
	set @parapgr2=''
	set @parastr1p=''
	set @audstr1p=''
	set @paragr1p=''
	set @parapgr1p=''
	set @parastr2p=''
	set @audstr2p=''
	set @paragr2p=''
	set @parapgr2p=''
	--set @txt=''
 if(@fs=1 or @fs=3) begin
 declare cur cursor for
	select '<b>'+raspis_ych_plan.subject+'</b> <font size=-2>('+raspis_zan_tip.kr_name+') '+raspis_ych_plan.fio1+'</font>',
			raspis_aud_fond.n_aud,
			raspis_baza.r_gr,
			raspis_baza.r_pgr,
			raspis_dat_ych.odd,
case
	when cast(datepart(day,raspis_ych_plan.start) as nvarchar)+'.'+cast(datepart(month,raspis_ych_plan.start) as nvarchar)=@start_non_first then '(1.9'
	else '('+cast(datepart(day,raspis_ych_plan.start) as nvarchar)+'.'+cast(datepart(month,raspis_ych_plan.start) as nvarchar)
end,
			' - '+cast(datepart(day,raspis_ych_plan.[end]) as nvarchar)+'.'+cast(datepart(month,raspis_ych_plan.[end]) as nvarchar)+'.'+cast(datepart(year,raspis_ych_plan.[end]) as nvarchar)+')'
			from raspis_baza,raspis_zan_tip,raspis_aud_fond ,raspis_ych_plan,raspis_dat_ych
			where raspis_baza.id_zan_tip=raspis_zan_tip.id and raspis_aud_fond.id_aud_fond=raspis_baza.id_aud_fond
				and raspis_ych_plan.k=@spec+'-'+cast(@course as nvarchar)+@fs_str
				and raspis_baza.r_gr=@i
				and raspis_baza.r_pgr=@k
				and raspis_baza.id_day=@idday
				and raspis_baza.id_para=@idpara
				--and raspis_dat_ych.odd=@odd
				and raspis_dat_ych.denid=raspis_baza.id_day
				and raspis_dat_ych.nom=raspis_baza.id_nedel
				and raspis_ych_plan.id=raspis_baza.id_ych_plan
				and raspis_ych_plan.start<=raspis_dat_ych.dat and raspis_dat_ych.dat<=raspis_ych_plan.[end]
				and raspis_ych_plan.s=@semestr
			order by raspis_ych_plan.start,'<b>'+raspis_ych_plan.subject+'</b> <font size=-2>('+raspis_zan_tip.kr_name+') '+raspis_ych_plan.fio1+'</font>'
 end else begin
 declare cur cursor for
	select '<b>'+raspis_ych_plan.subject+'</b> <font size=-2>('+raspis_zan_tip.kr_name+') '+raspis_ych_plan.fio1+'</font>',
			raspis_aud_fond.n_aud,
			raspis_baza.r_gr,
			raspis_baza.r_pgr,
			raspis_dat_ych.odd,
			'',
			''
			from raspis_baza,raspis_zan_tip,raspis_aud_fond ,raspis_ych_plan,raspis_dat_ych
			where raspis_baza.id_zan_tip=raspis_zan_tip.id and raspis_aud_fond.id_aud_fond=raspis_baza.id_aud_fond
				and raspis_ych_plan.k=@spec+'-'+cast(@course as nvarchar)+@fs_str
				and raspis_baza.r_gr=@i
				and raspis_baza.r_pgr=@k
				and raspis_baza.id_day=@idday
				and raspis_baza.id_para=@idpara
				--and raspis_dat_ych.odd=@odd
				and raspis_dat_ych.denid=raspis_baza.id_day
				and raspis_dat_ych.nom=raspis_baza.id_nedel
				and raspis_ych_plan.id=raspis_baza.id_ych_plan
				and raspis_ych_plan.start<=raspis_dat_ych.dat and raspis_dat_ych.dat<=raspis_ych_plan.[end]
				--and raspis_ych_plan.s=@semestr
				and raspis_baza.id_nedel>=@nedel1
				and raspis_baza.id_nedel<=@nedel2
			order by '<b>'+raspis_ych_plan.subject+'</b> <font size=-2>('+raspis_zan_tip.kr_name+') '+raspis_ych_plan.fio1+'</font>'
 end
--		order by '('+cast(datepart(day,raspis_ych_plan.start) as nvarchar)+'.'+cast(datepart(month,raspis_ych_plan.start) as nvarchar) desc 
open cur
set @odd_old=''
set @odd=''
set @odd1=''
set @pgrstr1_old=@pgrstr1
set @odd_old=@odd
set @odd1=@odd
	if(@kolgrmax=2 and @kolpgrmax=3)begin
		set @txt='<td align=center colspan=4>&nbsp;'
	end else set @txt='<td align=center colspan=2>&nbsp;'
set @txt1=''
fetch next from cur into @parastr1,@audstr1,@paragr1,@parapgr1,@odd,@datychplan11,@datychplan12
set @ic=1
while (@@FETCH_STATUS=0)
begin
--------------- @i - номер группы
--------------- @k - номер подгруппы
	set @odd_old=@odd
	set @odd1=@odd
	set @pgrstr1=@parastr1+@datychplan11+@datychplan12+','+@audstr1--' гр.:'+cast(@paragr1 as nvarchar)+' подгр.:'+cast(@parapgr1 as nvarchar)
	fetch next from cur into @parastr1,@audstr1,@paragr1,@parapgr1,@odd,@datychplan11,@datychplan12
	set @odd1=@odd
	if(@odd_old<>@odd) set @odd1=''
	if(@pgrstr1<>@pgrstr1_old)begin
	  if(@ic>1) set @txt1=@txt1+'<hr>' --insert into #tmp (txt) values('<hr>')
	  if(@fs=1 or @fs=3)begin
	   set @txt1=@txt1+@odd1+@pgrstr1--insert into #tmp (txt) values(@odd+@pgrstr1)
	  end else set @txt1=@txt1+@pgrstr1
	  set @pgrstr1_old=@pgrstr1
	  set @ic=@ic+1
	  set @iic=@iic+1
	  set @iiiccc=@iiiccc+1
	set @idpara_notnull=@idpara_notnull+1
	end
end
close cur
deallocate cur
--set @txt=@txt+@txt1

insert into #tmp2 (txt) values(@txt)
insert into #tmp2 (txt) values(@txt1)

		set @k=@k+1
	end -- цикл для подгрупп _конец
		set @i=@i+1
	end -- цикл для групп _конец

if(@iic>1 or @iiiccc=1)
begin
 if(@iiic>1)begin
	 if(@rowtm>0)begin
		insert into #tmp3 (txt) values('<tr>')
	 end
	 if(@rowtm=0)insert into #tmp3 (txt) values('<tr><td>&nbsp;')
	 set @iicc=@iicc+1
 end
 set @iiic=@iiic+1
 set @rowtm=@rowtm+1
 declare cur cursor for
	select txt
		from #tmp2
	order by num asc
 open cur
 fetch next from cur into @txt
 while (@@FETCH_STATUS=0)
 begin
	insert into #tmp3 (txt) values(@txt)
	fetch next from cur into @txt
 end
 close cur
 deallocate cur
end
delete from #tmp2

set @rowtmstr=''
if(@rowtm>1) set @rowtmstr=' rowspan='+cast(@rowtm as nvarchar)

if(@idpara_notnull>0)begin  --- _start
	--время пар
	select distinct @tim=tim from raspis_para where num=@idpara
	set @txt='<td width=80'+@rowtmstr+' align=center ><font face="Arial, sans-serif" style="font-size: 9pt">'+@tim+'</font>'
	insert into #tmp1 (txt) values(@txt)
end --- _finish

set @idpara=@idpara+1

--if(@idpara<9)
	insert into #tmp3 (txt) values('<tr>')

if(@idpara_notnull>0)begin  --- _start
 declare cur cursor for
	select txt
		from #tmp3
	order by num asc
 open cur
 fetch next from cur into @txt
 while (@@FETCH_STATUS=0)
 begin
	insert into #tmp1 (txt) values(@txt)
	fetch next from cur into @txt
 end
 close cur
 deallocate cur
end --- _finish

delete from #tmp3

--insert into #tmp (txt) values('<tr><td>'+cast(@idpara_notnull as nvarchar))

if(@idpara_notnull>0) begin
  set @idpara_counternotnull=@idpara_counternotnull+@rowtm
  set @idpara_notnull=0
end

	if(@idpara_counternotnull>0) set @idday_notnull=@idday_notnull+1
end --- Цикл для пар _конец


--if(@iiiccc>=1)begin
if(@idpara_counternotnull>0)begin
	set @txt='<tr><td rowspan='+cast((@idpara_counternotnull+1) as nvarchar)+
' width=30 align=center border=ffffff>'+rtrim(@denstr)+'&nbsp;'
	insert into #tmp (txt) values(@txt)
 declare cur cursor for
	select txt
			from #tmp1
		order by num asc
open cur
fetch next from cur into @txt
while (@@FETCH_STATUS=0)
begin
	insert into #tmp (txt) values(@txt)
	fetch next from cur into @txt
end
close cur
deallocate cur

end

delete from #tmp1

set @idday=@idday+1


end --- Цикл для дней недели _конец
set @txt='</table><p></p><p></p><font size=-1>Диспетчер УМО____________________ Начальник УМО____________________ Декан факультета____________________ </font>'
insert into #tmp (txt) values(@txt)

select txt from #tmp order by num asc

drop table #tmp
drop table #tmp1
drop table #tmp2
drop table #tmp3

END


































