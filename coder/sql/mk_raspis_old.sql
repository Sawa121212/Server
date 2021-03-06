USE [subd]
GO
/****** Object:  StoredProcedure [dbo].[mk_raspis]    Script Date: 05/02/2019 20:07:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO










-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[mk_raspis]
	@csp nvarchar(15),
	@fs int,
	@course int,
	@sem nvarchar(1),
	@nedel int,
	@predm int
	AS
BEGIN

	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	set dateformat dmy

	create table #tmp(id int identity, txt nvarchar(2500))

    -- Insert statements for procedure here
	
	declare @subj nvarchar(50), @dat nvarchar(50), @fio1 nvarchar(50), @fio2 nvarchar(50), @id int, @txt nvarchar(2500), @sch int
	declare @dam nvarchar(15),@dam1 nvarchar(15),@dma int,@i int,@j int
	declare @txt1 nvarchar(2000)
	declare @it_kontr nvarchar(20)
	declare @podsubj nvarchar(30)
	declare @raspis_start datetime,@raspis_end datetime,@raspis_date datetime
	declare @raspis_start_main datetime,@raspis_end_main datetime
	declare @para nvarchar(600)
	declare @para_id_tip int
	declare @para_id_aud int
	declare @para_k nvarchar(20)
	declare @para_gr int
	declare @para_pgr int
	declare @r_gr nvarchar(200)
	declare @r_pgr nvarchar(200)
	declare @id_baza int
	declare @para1 nvarchar(200)
	declare @r_gr1 nvarchar(200)
	declare @r_pgr1 nvarchar(200)
	declare @id_baza1 int
	declare @para2 nvarchar(200)
	declare @r_gr2 nvarchar(200)
	declare @r_pgr2 nvarchar(200)
	declare @id_baza2 int
	declare @ncsp nvarchar(50)
	declare @pari_net nvarchar(60)
	declare @cellheight nvarchar(10)
	declare @cellwidth nvarchar(10)
	declare @c2_fio1 nvarchar(60)
	declare @c2_naud nvarchar(10)
	declare @c2_rk nvarchar(15)
	declare @c2_rgr nvarchar(10)
	declare @c2_rpgr nvarchar(10)
	declare @c2_str nvarchar(2000)
	declare @c2_str1 nvarchar(2000)
	declare @c2_str2 nvarchar(2000)
	declare @fs_str nvarchar(3)
	declare @raspis_start_str nvarchar(15)
	declare @raspis_end_str nvarchar(15)
	declare @kolgrmax int
	declare @kolpgrmax int
	declare @strtmp nvarchar(4000)
	declare @grtmp int
	declare @pgrtmp int

		set @txt='<table border="1">'
		set @pari_net='<font color=gray>Пары нет</font>'
		set @cellheight='130'
		set @cellwidth ='140'
		INSERT INTO #tmp (txt) VALUES (@txt)

			set @fs_str=''
			if(@fs=1) set @fs_str='д'
			if(@fs=2) set @fs_str='з'
			if(@fs=3) set @fs_str='в'
			if(@fs=4) set @fs_str='зс'
			if(@fs=5) set @fs_str='звв'
			if(@fs=11)set @fs_str='дэ'
			if(@fs=31)set @fs_str='вэ'

select @kolgrmax=max(gr),@kolpgrmax=max(pgr)
from raspis_ych_plan 
where k=@csp+'-'+cast(@course as nvarchar)+@fs_str

	-- Цикл по предметам

	set @sch=1
	select @raspis_start_main=min(dat) from raspis_dat_ych
	--set @raspis_start_main=CAST('31-08-'+CAST(DATEPART(yy, @raspis_start_main) as nvarchar) as datetime)
	select @raspis_end_main=max([end]) from raspis_ych_plan
	set @raspis_date=@raspis_start_main+7*@nedel-7
	--select distinct @ncsp=ltrim(RTRIM(code)) from price1 where (del<>1) and code=@csp
if(@fs<>1 and @fs<>3)
begin
	declare cur
		cursor for 
				select distinct [subject], raspis_ych_plan.id, fio1, fio2,it_kontr,start,[end]
				from raspis_ych_plan,raspis_dat_ych
				where
			     raspis_ych_plan.start<=raspis_dat_ych.dat
				and raspis_ych_plan.[end]>=raspis_dat_ych.dat
				and raspis_dat_ych.nom=@nedel
				and raspis_ych_plan.s=@sem
				--and ltrim(rtrim(fac))=rtrim(ltrim(@csp))
				--and course=@course
				--and fs=@fs
				and ltrim(rtrim(raspis_ych_plan.k))=(@csp+'-'+cast(@course as nvarchar)+rtrim(@fs_str))
				and (raspis_ych_plan.id=@predm or @predm=0)
end
else
begin
	declare cur
		cursor for 
				select distinct [subject], raspis_ych_plan.id, fio1, fio2,it_kontr,start,[end]
				from raspis_ych_plan,raspis_dat_ych
				where
			     raspis_ych_plan.start<=raspis_dat_ych.dat
				and raspis_ych_plan.[end]>=raspis_dat_ych.dat
				and raspis_ych_plan.s=@sem
				--and ltrim(rtrim(fac))=rtrim(ltrim(@csp))
				--and course=@course
				--and fs=@fs
				and ltrim(rtrim(raspis_ych_plan.k))=(@csp+'-'+cast(@course as nvarchar)+rtrim(@fs_str))
				and (raspis_ych_plan.id=@predm or @predm=0)
end
	open cur
	fetch next from cur into @subj, @id, @fio1, @fio2, @it_kontr, @raspis_start, @raspis_end
	WHILE @@FETCH_STATUS=0
	BEGIN
		if (@fio1 is null)
		BEGIN
			set @fio1='---'
		END
		if (@fio2 is null)
		BEGIN
			set @fio2=''
		END
			ELSE
		BEGIN
			set @fio2=','+@fio2
		END
		set @podsubj=''
		if(@it_kontr is not null)
		begin
			set @podsubj=' ('+@it_kontr+')'
		end 
--if((@raspis_start>=(@raspis_date))and(@raspis_end<=(@raspis_date+7)))
--begin
		set @txt='<tr align=center><td>№</td><td>Дисциплина<br>Преподаватель</td>'
		INSERT INTO #tmp (txt) VALUES (@txt)
		set @txt=''
		set @txt1=''

	declare cur1 cursor  for 
		select dat FROM raspis_dat_ych WHERE nom=@nedel order by denid
	open cur1
	fetch next from cur1 into @dat
	while @@FETCH_STATUS=0
	BEGIN
		set @dma=datepart(mm,@dat)
		select @dam=RTRIM(month_name) from month_spec where cast(id_month as int)=@dma
		set @dma=datepart(dw,@dat)-1
		if @dma=0 set @dma=7
--		select @dam1=RTRIM(dayweek_name) from day_week where cast(id_dayweek as int)=@dma
		select @dam1=RTRIM(den) from raspis_dat_ych where dat=@dat
		set @txt1='<td>'+ltrim (RTRIM(cast(@dam1 as nvarchar))) -- День недели
		if(@fs<>1 and @fs<>3)begin
			set @txt1=@txt1+'<br>'+ltrim (RTRIM(cast(datepart(dd,@dat) as nvarchar)))+' '+ltrim(RTRIM(cast(@dam as nvarchar)))+' '+ltrim (RTRIM(cast(datepart(yyyy,@dat) as nvarchar)))+'</td>'
			-- Дата дня недели
		end
		INSERT INTO #tmp (txt) VALUES (@txt1)
		fetch next from cur1 into @dat
	END
	close cur1
	deallocate cur1
		set	@raspis_start_str=cast(datepart(day,@raspis_start) as nvarchar)+'.'+cast(datepart(month,@raspis_start) as nvarchar)+'.'+cast(datepart(year,@raspis_start) as nvarchar)
		set	@raspis_end_str=cast(datepart(day,@raspis_end) as nvarchar)+'.'+cast(datepart(month,@raspis_end) as nvarchar)+'.'+cast(datepart(year,@raspis_end) as nvarchar)
		set @txt='<tr><td valign=top>'+CAST(@sch as nvarchar(30))+'.</td><td valign=top align=center width=150>'+@subj+@podsubj+'<br>-<br>'+@fio1+' '+@fio2+'<br>'+@raspis_start_str+'<br> - <br>'+@raspis_end_str
		INSERT INTO #tmp (txt) VALUES (@txt)
		set @txt='</td>'--'<hr><a title="Распечатать" href=raspis_print.php?id='+cast(@id as nvarchar)+'><img border=0 src=img/printer.gif></a>'
		INSERT INTO #tmp (txt) VALUES (@txt)
	-- Таблица в ячейке .начало
		set @j=0
		--select @raspis_start=start,@raspis_end=[end] from raspis_ych_plan where id=@id
		set @raspis_date=@raspis_start_main+7*@nedel-7
	while(@j<7)
	begin ---------- Дни недели
	  if(@fs<>1 and @fs<>3) -- ячейка для Заочная форма обучения
	  begin
		if((@raspis_start<=(@raspis_date+@j))and(@raspis_end>=(@raspis_date+@j)))
		Begin
	    INSERT INTO #tmp (txt) VALUES ('<td valign=top><table border=1 bordercolor=white width='+@cellwidth+'>')
		set @i=1
		while(@i<9)
		begin    ---------- Пары
			select @dam=tim from raspis_para where num=@i
			set @txt='<tr><td bordercolor=black width=10><font color=red>'+cast(@i as nvarchar)+'.</font></td><td bordercolor=black width=20>'+replace(@dam,' - ','<br>')+'</td>'
			INSERT INTO #tmp (txt) VALUES (@txt)
			set @para=''
			set @r_gr='0'
			set @r_pgr='0'
			set @id_baza=0
			 select @para=(rtrim(raspis_zan_tip.name)+',<br>'+cast(raspis_aud_fond.n_aud as nvarchar)+',<br> '+cast(raspis_ych_plan.k as nvarchar)),
				@r_gr=cast(raspis_baza.r_gr as nvarchar),
				@r_pgr=cast(raspis_baza.r_pgr as nvarchar),
				@id_baza=raspis_baza.id
				 from raspis_baza,raspis_aud_fond,raspis_zan_tip,raspis_ych_plan
				 where id_day=@j and id_para=@i and id_nedel=@nedel
					 and raspis_baza.id_ych_plan=@id
					 and raspis_baza.id_aud_fond=raspis_aud_fond.id_aud_fond
					 and raspis_zan_tip.id=raspis_baza.id_zan_tip
					 and raspis_ych_plan.id=raspis_baza.id_ych_plan

			set @c2_str=''
			declare cur2 cursor  for 
				select raspis_baza.fio1,raspis_aud_fond.n_aud,raspis_ych_plan.k,raspis_baza.r_gr,raspis_baza.r_pgr
				 from raspis_baza,raspis_aud_fond,raspis_zan_tip,raspis_ych_plan
				 where id_day=@j and id_para=@i and id_nedel=@nedel
					 and raspis_baza.id_aud_fond=raspis_aud_fond.id_aud_fond
					 and raspis_zan_tip.id=raspis_baza.id_zan_tip
					 and raspis_baza.r_k=(@csp+'-'+cast(@course as nvarchar)+rtrim(@fs_str))
					 and raspis_ych_plan.id=raspis_baza.id_ych_plan
			open cur2
			fetch next from cur2 into @c2_fio1,@c2_naud,@c2_rk,@c2_rgr,@c2_rpgr
			while @@FETCH_STATUS=0
			BEGIN
				set @c2_str=@c2_str+cast(@c2_naud as nvarchar)+', '+cast(@c2_rk as nvarchar)+' '+cast(@c2_rgr as nvarchar)+'-'+cast(@c2_rpgr as nvarchar)+'<br>'
				fetch next from cur2 into @c2_fio1,@c2_naud,@c2_rk,@c2_rgr,@c2_rpgr
			END
			close cur2
			deallocate cur2

			if(rtrim(@para)='') set @para=@pari_net
			set @txt=''
			set @txt1=''
			INSERT INTO #tmp (txt) VALUES ('<td bordercolor=black align=center width="100%" height='+@cellheight+'>
<div id="'+cast(@id as nvarchar)+'_'+cast(@nedel as nvarchar)+'_'+cast(@j as nvarchar)+'_'+cast(@i as nvarchar)+'" 
onclick=subm3("'+cast(@id as nvarchar)+'_'+cast(@nedel as nvarchar)+'_'+cast(@j as nvarchar)+'_'+cast(@i as nvarchar)+'") 
onmouseout=subm31("'+cast(@id as nvarchar)+'_'+cast(@nedel as nvarchar)+'_'+cast(@j as nvarchar)+'_'+cast(@i as nvarchar)+'")
>')
		   if(rtrim(@para)=@pari_net) begin
			if(@r_gr<>'0') set @para=@para+', '+@r_gr+' гр.'
			if(@r_pgr<>'0') set @para=@para+', '+@r_pgr+' подгр.'
			if(rtrim(@c2_str)<>'') set @para='<font size=-3 color=#cccccc>'+rtrim(@c2_str)+'</font>'
/*
---------------- ячейка без пары ТИП ЗАНЯТИЯ.
			insert into #tmp (txt) values ('<select name="tipzan_'+cast(@id as nvarchar)+'_'+cast(@nedel as nvarchar)+'_'+cast(@j as nvarchar)+'_'+cast(@i as nvarchar)+'"><option value=""></option>')
declare cur2 cursor  for 
	select id,[kr_kr_name] from raspis_zan_tip order by id
open cur2
fetch next from cur2 into @grtmp,@strtmp
while @@FETCH_STATUS=0
BEGIN
	insert into #tmp (txt) values ('<option value="'+cast(@grtmp as nvarchar)+'">'+rtrim(@strtmp)+'</option>')
	fetch next from cur2 into @grtmp,@strtmp
END
close cur2 
deallocate cur2
			insert into #tmp (txt) values ('</select><br>')
---------------- ячейка без пары КУРС.
			insert into #tmp (txt) values ('<select name="kurs_'+cast(@id as nvarchar)+'_'+cast(@nedel as nvarchar)+'_'+cast(@j as nvarchar)+'_'+cast(@i as nvarchar)+'"><option value=""></option><option value="0-0">'+@csp+'-'+cast(@course as nvarchar)+@fs_str+'</option>')
set @grtmp=1
set @pgrtmp=1
while(@grtmp<=@kolgrmax)begin
	set @pgrtmp=1
	while(@pgrtmp<=@kolpgrmax)begin
		insert into #tmp (txt) values ('<option value="'+cast(@grtmp as nvarchar)+'-'+cast(@pgrtmp as nvarchar)+'">'+@csp+'-'+cast(@course as nvarchar)+@fs_str+'-'+cast(@grtmp as nvarchar)+'-'+cast(@pgrtmp as nvarchar)+'</option>')
		set @pgrtmp=@pgrtmp+1
	end
	set @grtmp=@grtmp+1
end
			insert into #tmp (txt) values ('</select><br>')
---------------- ячейка без пары ПОТОК(и).
--- with lections
select @strtmp=lek_pot
from raspis_ych_plan 
where id=@id
select @grtmp=count(Items) from Split(@strtmp,' ')
set @pgrtmp=1
	while(@pgrtmp<=@grtmp)begin
			insert into #tmp (txt) values ('<select name="pot'+cast(@pgrtmp as nvarchar)+'_'+cast(@id as nvarchar)+'_'+cast(@nedel as nvarchar)+'_'+cast(@j as nvarchar)+'_'+cast(@i as nvarchar)+'"><option value=""></option>')
declare cur2 cursor  for 
	select Items from Split(@strtmp,' ') where id=@pgrtmp
open cur2
fetch next from cur2 into @strtmp
while @@FETCH_STATUS=0
BEGIN
	insert into #tmp (txt) values ('<option value="'+rtrim(@strtmp)+'">'+rtrim(@strtmp)+'</option>')
	fetch next from cur2 into @strtmp
END
close cur2
deallocate cur2
			insert into #tmp (txt) values ('</select><br>')
		set @grtmp=@grtmp+1
	end
--primer:	SELECT * FROM dbo.Split(@splitStr,',')
---------------- ячейка без пары АУДИТОИИ.
			insert into #tmp (txt) values ('<select name="aud_'+cast(@id as nvarchar)+'_'+cast(@nedel as nvarchar)+'_'+cast(@j as nvarchar)+'_'+cast(@i as nvarchar)+'"><option value=""></option>')
declare cur2 cursor  for 
	select id_aud_fond,n_aud from raspis_aud_fond order by n_aud
open cur2
fetch next from cur2 into @grtmp,@strtmp
while @@FETCH_STATUS=0
BEGIN
	insert into #tmp (txt) values ('<option value="'+cast(@grtmp as nvarchar)+'">'+rtrim(@strtmp)+'</option>')
	fetch next from cur2 into @grtmp,@strtmp
END
close cur2
deallocate cur2
			insert into #tmp (txt) values ('</select><br>')
*/
			INSERT INTO #tmp (txt) VALUES (@para)
			set @txt='<img title="+" src="img/add.gif" onclick="if(window.open(''mk_raspis_new.php?i='+RTRIM(@i)+'&j='+RTRIM(@j)+'&n='+RTRIM(@nedel)+'&id='+RTRIM(@id)+'&csp='+RTRIM(@csp)+'&fs='+RTRIM(@fs)+'&course='+RTRIM(@course)+'&sem='+RTRIM(@sem)+''','''',''top=200,left=450,height=400,width=560,status=no,toolbar=no,scrollbars=yes,resizable=yes'')==1) subm2('+cast(@id as nvarchar)+');">'
		   end else begin
			if(@r_gr<>'0') set @para=@para+', '+@r_gr+' гр.'
			if(@r_pgr<>'0') set @para=@para+', '+@r_pgr+' подгр.'
			INSERT INTO #tmp (txt) VALUES (@para)
			set @txt='<img title="-" src="img/del.gif"'
			if(rtrim(@id_baza)<>0)  set @txt=@txt+' onclick=if(podtvdel())subm10('+RTRIM(cast(@id_baza as nvarchar))+')'
			set @txt=@txt+'>'
			set @txt1='<br><img title="#" src="img/edit.jpg"'
			if(rtrim(@id_baza)<>0)  set @txt1=@txt1+' onclick="if(window.open(''mk_raspis_new_edit.php?i='+RTRIM(@i)+'&j='+RTRIM(@j)+'&n='+RTRIM(@nedel)+'&id='+RTRIM(@id)+'&csp='+RTRIM(@csp)+'&fs='+RTRIM(@fs)+'&course='+RTRIM(@course)+'&sem='+RTRIM(@sem)+''','''',''top=200,left=450,height=400,width=560,status=no,toolbar=no,scrollbars=yes,resizable=yes'')==1) subm2('+cast(@id as nvarchar)+');"'
			set @txt1=@txt1+'>'
		   end
			INSERT INTO #tmp (txt) VALUES ('</div></td><td><a name='+cast(@id as nvarchar)+'></a>')
			INSERT INTO #tmp (txt) VALUES (@txt)
			if(@txt1<>'') INSERT INTO #tmp (txt) VALUES (@txt1)
			INSERT INTO #tmp (txt) VALUES ('</td></tr>')
			set @i=@i+1
		end
		INSERT INTO #tmp (txt) VALUES ('</table></td>')
		End else
		Begin
			INSERT INTO #tmp (txt) VALUES ('<td>&nbsp;</td>')
		End
	  end else
	  begin  -- ячейка для Очной и Вечерней форм обучений
		set @i=1
	    INSERT INTO #tmp (txt) VALUES ('<td valign=top><table border=1 bordercolor=white width='+@cellwidth+'>')
		while(@i<9)
		begin
			select @dam=tim from raspis_para where num=@i
			set @txt='<tr><td bordercolor=black width=10><font color=red>'+cast(@i as nvarchar)+'.</font></td><td bordercolor=black width=20>'+replace(@dam,' - ','<br>')+'</td>'
			INSERT INTO #tmp (txt) VALUES (@txt)
			set @para=''
			set @r_gr='0'
			set @r_pgr='0'
			set @id_baza=0
			set @para1=''
			set @r_gr1='0'
			set @r_pgr1='0'
			set @id_baza1=0
			set @para2=''
			set @r_gr2='0'
			set @r_pgr2='0'
			set @id_baza2=0
			set @c2_str=''
			set @c2_str1=''
			set @c2_str2=''

			 select top 1 @para1=(rtrim(raspis_zan_tip.name)+',<br>'+cast(raspis_aud_fond.n_aud as nvarchar)+',<br> '+cast(raspis_ych_plan.k as nvarchar)+' '+cast(raspis_baza.r_gr as nvarchar)+'-'+cast(raspis_baza.r_pgr as nvarchar)),@id_baza1=raspis_baza.id
				 from raspis_baza,raspis_aud_fond,raspis_zan_tip,raspis_ych_plan,raspis_dat_ych
				 where raspis_baza.id_day=@j and raspis_baza.id_para=@i and raspis_baza.id_nedel=raspis_dat_ych.nom
					 and raspis_baza.id_ych_plan=@id
					 and raspis_baza.id_aud_fond=raspis_aud_fond.id_aud_fond
					 and raspis_zan_tip.id=raspis_baza.id_zan_tip
					 and raspis_dat_ych.dat>=raspis_ych_plan.start
					 and raspis_dat_ych.dat<=raspis_ych_plan.[end]
					 and raspis_ych_plan.s=@sem
					 and raspis_ych_plan.id=raspis_baza.id_ych_plan
					 and raspis_dat_ych.denid=raspis_baza.id_day
					 and raspis_dat_ych.odd='*'

			 select top 1 @para2=(rtrim(raspis_zan_tip.name)+',<br>'+cast(raspis_aud_fond.n_aud as nvarchar)+',<br> '+cast(raspis_ych_plan.k as nvarchar)+' '+cast(raspis_baza.r_gr as nvarchar)+'-'+cast(raspis_baza.r_pgr as nvarchar)),@id_baza2=raspis_baza.id
				 from raspis_baza,raspis_aud_fond,raspis_zan_tip,raspis_ych_plan,raspis_dat_ych
				 where raspis_baza.id_day=@j and raspis_baza.id_para=@i and raspis_baza.id_nedel=raspis_dat_ych.nom
					 and raspis_baza.id_ych_plan=@id
					 and raspis_baza.id_aud_fond=raspis_aud_fond.id_aud_fond
					 and raspis_zan_tip.id=raspis_baza.id_zan_tip
					 and raspis_dat_ych.dat>=raspis_ych_plan.start
					 and raspis_dat_ych.dat<=raspis_ych_plan.[end]
					 and raspis_ych_plan.s=@sem
					 and raspis_ych_plan.id=raspis_baza.id_ych_plan
					 and raspis_dat_ych.denid=raspis_baza.id_day
					 and raspis_dat_ych.odd='**'

			set @c2_str1=''
			declare cur2 cursor  for 
				select distinct raspis_baza.fio1,raspis_aud_fond.n_aud,raspis_ych_plan.k,raspis_baza.r_gr,raspis_baza.r_pgr
				 from raspis_baza,raspis_aud_fond,raspis_zan_tip,raspis_ych_plan,raspis_dat_ych
				 where raspis_baza.id_day=@j and raspis_baza.id_para=@i and raspis_baza.id_nedel=raspis_dat_ych.nom
					 and raspis_baza.id_aud_fond=raspis_aud_fond.id_aud_fond
					 and raspis_zan_tip.id=raspis_baza.id_zan_tip
					 and raspis_dat_ych.dat>=raspis_ych_plan.start
					 and raspis_dat_ych.dat<=raspis_ych_plan.[end]
					 and raspis_ych_plan.s=@sem
					 and raspis_ych_plan.id=raspis_baza.id_ych_plan
					 and raspis_dat_ych.denid=raspis_baza.id_day
					 and raspis_dat_ych.odd='*'
					 and raspis_baza.r_k like (@csp+'-'+cast(@course as nvarchar)+rtrim(@fs_str))
			open cur2
			fetch next from cur2 into @c2_fio1,@c2_naud,@c2_rk,@c2_rgr,@c2_rpgr
			while @@FETCH_STATUS=0
			BEGIN
				set @c2_str1=@c2_str1+cast(@c2_naud as nvarchar)+', '+cast(@c2_rk as nvarchar)+' '+cast(@c2_rgr as nvarchar)+'-'+cast(@c2_rpgr as nvarchar)+'<br>'
				fetch next from cur2 into @c2_fio1,@c2_naud,@c2_rk,@c2_rgr,@c2_rpgr
			END
			close cur2
			deallocate cur2
	
			set @c2_str2=''
			declare cur2 cursor  for 
				select distinct raspis_baza.fio1,raspis_aud_fond.n_aud,raspis_ych_plan.k,raspis_baza.r_gr,raspis_baza.r_pgr
				 from raspis_baza,raspis_aud_fond,raspis_zan_tip,raspis_ych_plan,raspis_dat_ych
				 where raspis_baza.id_day=@j and raspis_baza.id_para=@i and raspis_baza.id_nedel=raspis_dat_ych.nom
					 and raspis_baza.id_aud_fond=raspis_aud_fond.id_aud_fond
					 and raspis_zan_tip.id=raspis_baza.id_zan_tip
					 and raspis_dat_ych.dat>=raspis_ych_plan.start
					 and raspis_dat_ych.dat<=raspis_ych_plan.[end]
					 and raspis_ych_plan.s=@sem
					 and raspis_ych_plan.id=raspis_baza.id_ych_plan
					 and raspis_dat_ych.denid=raspis_baza.id_day
					 and raspis_dat_ych.odd='**'
					 and raspis_baza.r_k like (@csp+'-'+cast(@course as nvarchar)+rtrim(@fs_str))
			open cur2
			fetch next from cur2 into @c2_fio1,@c2_naud,@c2_rk,@c2_rgr,@c2_rpgr
			while @@FETCH_STATUS=0
			BEGIN
				set @c2_str2=@c2_str2+cast(@c2_naud as nvarchar)+', '+cast(@c2_rk as nvarchar)+' '+cast(@c2_rgr as nvarchar)+'-'+cast(@c2_rpgr as nvarchar)+'<br>'
				fetch next from cur2 into @c2_fio1,@c2_naud,@c2_rk,@c2_rgr,@c2_rpgr
			END
			close cur2
			deallocate cur2

			if(rtrim(@para1)='') set @para1=@pari_net
			if(rtrim(@para2)='') set @para2=@pari_net
			if(rtrim(@para1)='' or rtrim(@para2)='') set @para=@pari_net
			if(rtrim(@para1)='' and rtrim(@para2)='') set @para=@pari_net

			if(rtrim(@para1)<>'' and rtrim(@para2)<>'' and rtrim(@para1)=rtrim(@para2))	set @para=rtrim(@para1)
			set @txt=''
			set @txt1=''
			INSERT INTO #tmp (txt) VALUES ('</td><td><a name='+cast(@id as nvarchar)+'></a>')

			INSERT INTO #tmp (txt) VALUES ('<td bordercolor=black align=center width="100%" height='+@cellheight+'>')

			if(@nedel=1)
			begin			
			  if(rtrim(@para1)=@pari_net) begin
				set @txt='<img title="+" src="img/add.gif" onclick="if(window.open(''mk_raspis_new.php?i='+RTRIM(@i)+'&j='+RTRIM(@j)+'&n='+RTRIM(@nedel)+'&id='+RTRIM(@id)+'&csp='+RTRIM(@csp)+'&fs='+RTRIM(@fs)+'&course='+RTRIM(@course)+'&sem='+RTRIM(@sem)+''','''',''top=200,left=450,height=400,width=560,status=no,toolbar=no,scrollbars=yes,resizable=yes'')==1) subm2();">'
				if(rtrim(@c2_str1)<>'') set @para1='<font size=-3 color=#cccccc>'+rtrim(@c2_str1)+'</font>'
			  end else
			  begin
				set @txt='<img title="-" src="img/del.gif"'
				if(rtrim(@id_baza1)<>0)  set @txt=@txt+'onclick=subm11('+RTRIM(cast(@id_baza1 as nvarchar))+')'
				set @txt=@txt+'>'				
/*			set @txt=@txt+'<br><img title="#" src="img/edit.jpg"'
			if(rtrim(@id_baza1)<>0)  set @txt=@txt+' onclick=subm16('+RTRIM(cast(@id_baza1 as nvarchar))+')'
			set @txt=@txt+'>'
*/
			set @txt1='<br><img title="#" src="img/edit.jpg"'
			if(rtrim(@id_baza1)<>0)  set @txt1=@txt1+' onclick="if(window.open(''mk_raspis_new_edit.php?i='+RTRIM(@i)+'&j='+RTRIM(@j)+'&n='+RTRIM(@nedel)+'&id='+RTRIM(@id)+'&csp='+RTRIM(@csp)+'&fs='+RTRIM(@fs)+'&course='+RTRIM(@course)+'&sem='+RTRIM(@sem)+''','''',''top=200,left=450,height=400,width=560,status=no,toolbar=no,scrollbars=yes,resizable=yes'')==1) subm2();"'
			set @txt1=@txt1+'>'		
			  end
			  INSERT INTO #tmp (txt) VALUES (@para1)
			end

			if(@nedel=2)
			begin
			  if(rtrim(@para2)=@pari_net) begin
				set @txt='<img title="+" src="img/add.gif" onclick="if(window.open(''mk_raspis_new.php?i='+RTRIM(@i)+'&j='+RTRIM(@j)+'&n='+RTRIM(@nedel)+'&id='+RTRIM(@id)+'&csp='+RTRIM(@csp)+'&fs='+RTRIM(@fs)+'&course='+RTRIM(@course)+'&sem='+RTRIM(@sem)+''','''',''top=200,left=450,height=400,width=560,status=no,toolbar=no,scrollbars=yes,resizable=yes'')==1) subm2();">'
				if(rtrim(@c2_str2)<>'') set @para2='<font size=-3 color=#cccccc>'+rtrim(@c2_str2)+'</font>'
			  end else
			  begin
				set @txt='<img title="-" src="img/del.gif"'
				if(rtrim(@id_baza2)<>0)  set @txt=@txt+'onclick=if(podtvdel())subm11('+RTRIM(cast(@id_baza2 as nvarchar))+')'
				set @txt=@txt+'>'	
/*
			set @txt=@txt+'<br><img title="#" src="img/edit.jpg"'
			if(rtrim(@id_baza2)<>0)  set @txt=@txt+' onclick=subm16('+RTRIM(cast(@id_baza2 as nvarchar))+')'
			set @txt=@txt+'>'							
*/
			set @txt1='<br><img title="#" src="img/edit.jpg"'
			if(rtrim(@id_baza2)<>0)  set @txt1=@txt1+' onclick="if(window.open(''mk_raspis_new_edit.php?i='+RTRIM(@i)+'&j='+RTRIM(@j)+'&n='+RTRIM(@nedel)+'&id='+RTRIM(@id)+'&csp='+RTRIM(@csp)+'&fs='+RTRIM(@fs)+'&course='+RTRIM(@course)+'&sem='+RTRIM(@sem)+''','''',''top=200,left=450,height=400,width=560,status=no,toolbar=no,scrollbars=yes,resizable=yes'')==1) subm2();"'
			set @txt1=@txt1+'>'		
			  end		
			  INSERT INTO #tmp (txt) VALUES (@para2)
			end

			if(@nedel=3)
				if(rtrim(@para1)<>rtrim(@para2))
				begin
					set @txt='<img title="+" src="img/add.gif" onclick="if(window.open(''mk_raspis_new.php?i='+RTRIM(@i)+'&j='+RTRIM(@j)+'&n='+RTRIM(@nedel)+'&id='+RTRIM(@id)+'&csp='+RTRIM(@csp)+'&fs='+RTRIM(@fs)+'&course='+RTRIM(@course)+'&sem='+RTRIM(@sem)+''','''',''top=200,left=450,height=400,width=560,status=no,toolbar=no,scrollbars=yes,resizable=yes'')==1) subm2();">'
					if(rtrim(@c2_str1)<>'' and rtrim(@para1)=@pari_net ) set @para1='<font size=-3 color=#cccccc>'+rtrim(@c2_str1)+'</font>'
					if(rtrim(@c2_str2)<>'' and rtrim(@para2)=@pari_net ) set @para2='<font size=-3 color=#cccccc>'+rtrim(@c2_str2)+'</font>'
					INSERT INTO #tmp (txt) VALUES ('<font size=-2>'+rtrim(@para1)+'</font><sup>*</sup>')
					INSERT INTO #tmp (txt) VALUES ('<hr><font size=-2>'+rtrim(@para2)+'</font><sup>**</sup>')							
				end
				else
				begin
					if(rtrim(@para1)=@pari_net and rtrim(@para2)=@pari_net)
					begin
						set @txt='<img title="+" src="img/add.gif" onclick="if(window.open(''mk_raspis_new.php?i='+RTRIM(@i)+'&j='+RTRIM(@j)+'&n='+RTRIM(@nedel)+'&id='+RTRIM(@id)+'&csp='+RTRIM(@csp)+'&fs='+RTRIM(@fs)+'&course='+RTRIM(@course)+'&sem='+RTRIM(@sem)+''','''',''top=200,left=450,height=400,width=560,status=no,toolbar=no,scrollbars=yes,resizable=yes'')==1) subm2();">'
						if(rtrim(@c2_str1)<>'' or rtrim(@c2_str2)<>'')
							if(rtrim(@c2_str1)<>rtrim(@c2_str2))
							begin
								set @para='<font size=-3 color=#cccccc>'+rtrim(@c2_str1)+'</font><sup>*</sup><hr><font size=-3 color=#cccccc>'+rtrim(@c2_str2)+'</font><sup>**</sup>'
							end else set @para='<font size=-3 color=#cccccc>'+rtrim(@c2_str1)+'</font>'
					end
					if(rtrim(@para1)<>@pari_net and rtrim(@para2)<>@pari_net)
					begin
						set @txt='<img title="-" src="img/del.gif"'
						if(rtrim(@id_baza1)<>0)  set @txt=@txt+' onclick=if(podtvdel())subm11('+RTRIM(cast(@id_baza1 as nvarchar))+')'
						set @txt=@txt+'>'	
/*	
			set @txt=@txt+'<br><img title="#" src="edit.jpg"'
			if(rtrim(@id_baza1)<>0)  set @txt=@txt+' onclick=subm16('+RTRIM(cast(@id_baza1 as nvarchar))+')'
			set @txt=@txt+'>'						
*/
			set @txt1='<br><img title="#" src="img/edit.jpg"'
			if(rtrim(@id_baza1)<>0)  set @txt1=@txt1+' onclick="if(window.open(''mk_raspis_new_edit.php?i='+RTRIM(@i)+'&j='+RTRIM(@j)+'&n='+RTRIM(@nedel)+'&id='+RTRIM(@id)+'&csp='+RTRIM(@csp)+'&fs='+RTRIM(@fs)+'&course='+RTRIM(@course)+'&sem='+RTRIM(@sem)+''','''',''top=200,left=450,height=400,width=560,status=no,toolbar=no,scrollbars=yes,resizable=yes'')==1) subm2();"'
			set @txt1=@txt1+'>'		
					end	
					INSERT INTO #tmp (txt) VALUES (rtrim(@para))						
				end

			INSERT INTO #tmp (txt) VALUES ('</td><td>')
			INSERT INTO #tmp (txt) VALUES (@txt)
			if(@txt1<>'') INSERT INTO #tmp (txt) VALUES (@txt1)
			INSERT INTO #tmp (txt) VALUES ('</td></tr>')
			set @i=@i+1
		end
		INSERT INTO #tmp (txt) VALUES ('</table></td>')
	  end
		set @j=@j+1
	end
		INSERT INTO #tmp (txt) VALUES ('</tr>')
	-- Таблица в ячейке .конец

		set @sch=@sch+1
--end
		fetch next from cur into @subj, @id, @fio1, @fio2, @it_kontr, @raspis_start, @raspis_end
	END
	close cur
	deallocate cur
	
	-- Создаем HTML код
	set @txt='</table>'
	INSERT INTO #tmp (txt) VALUES (@txt)
	
	SET NOCOUNT OFF;
	select txt from #tmp order by id
	SET NOCOUNT ON;
	drop table #tmp
	SET NOCOUNT OFF;
END

										










