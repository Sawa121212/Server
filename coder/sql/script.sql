USE [SUBD_MGOU]
GO
/****** Object:  Table [dbo].[kafedra]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[kafedra](
	[id_kaf] [numeric](18, 0) NOT NULL,
	[name_kaf] [varchar](256) NULL,
	[tel] [nvarchar](50) NULL,
	[title] [nvarchar](150) NULL,
	[pic] [image] NULL,
	[del] [int] NULL,
 CONSTRAINT [PK_kafedra] PRIMARY KEY CLUSTERED 
(
	[id_kaf] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[kafedra_doljn]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[kafedra_doljn](
	[id_doljn] [int] NOT NULL,
	[name] [nvarchar](255) NULL,
 CONSTRAINT [PK_kafedra_doljn] PRIMARY KEY CLUSTERED 
(
	[id_doljn] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[kafedra_napr]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[kafedra_napr](
	[id_kafedra] [int] NULL,
	[name_napr] [char](255) NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[kafedra_predmets]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[kafedra_predmets](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_predmets] [int] NULL,
	[id_kafedra] [int] NULL,
 CONSTRAINT [PK_kafedra_predmets] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[kafedra_rel_sotr]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[kafedra_rel_sotr](
	[id_kaf] [int] NULL,
	[id_sotr] [int] NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[kafedra_sotr]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[kafedra_sotr](
	[id_kafedra] [int] NULL,
	[id_sotr] [int] NOT NULL,
	[name] [nvarchar](50) NULL,
	[surname] [nvarchar](50) NULL,
	[sec_surn] [nvarchar](50) NULL,
	[addr] [nvarchar](500) NULL,
	[doljn] [int] NULL,
	[tel] [nvarchar](50) NULL,
	[sot_tel] [nvarchar](50) NULL,
	[foto] [nvarchar](50) NULL,
 CONSTRAINT [PK_kafedra_sotr] PRIMARY KEY CLUSTERED 
(
	[id_sotr] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[predmets]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[predmets](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](150) NOT NULL,
	[comment] [nvarchar](255) NULL,
	[del] [int] NOT NULL,
	[gak] [int] NULL,
 CONSTRAINT [PK_predmets] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[predmets_razdel]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[predmets_razdel](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](150) NULL,
	[id_predmets] [int] NULL,
 CONSTRAINT [PK_predmets_razdel] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[raspis_aud_fond]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[raspis_aud_fond](
	[korpus] [nvarchar](50) NULL,
	[etaj] [nvarchar](50) NULL,
	[n_aud] [nvarchar](50) NULL,
	[kol_mest] [int] NULL,
	[proektor] [nvarchar](50) NULL,
	[lab_obor] [nvarchar](50) NULL,
	[id_aud_fond] [int] IDENTITY(1,1) NOT NULL,
	[addr] [nvarchar](50) NULL,
	[nomer] [int] NULL,
 CONSTRAINT [PK_raspis_aud_fond] PRIMARY KEY CLUSTERED 
(
	[id_aud_fond] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[raspis_baza]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[raspis_baza](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[r_k] [nvarchar](20) NULL,
	[r_gr] [int] NULL,
	[r_pgr] [int] NULL,
	[id_aud_fond] [int] NULL,
	[id_ych_plan] [int] NULL,
	[id_zan_tip] [int] NULL,
	[id_day] [int] NULL,
	[id_nedel] [int] NULL,
	[id_para] [int] NULL,
	[fio1] [nvarchar](50) NULL,
	[subject] [nvarchar](2000) NULL,
	[datetimein] [datetime] NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[raspis_baza_1]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[raspis_baza_1](
	[id] [int] NOT NULL,
	[r_k] [nvarchar](20) NULL,
	[r_gr] [int] NULL,
	[r_pgr] [int] NULL,
	[id_aud_fond] [int] NULL,
	[id_ych_plan] [int] NULL,
	[id_zan_tip] [int] NULL,
	[id_day] [int] NULL,
	[id_nedel] [int] NULL,
	[id_para] [int] NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[raspis_baza_2009_2010]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[raspis_baza_2009_2010](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[r_k] [nvarchar](20) NULL,
	[r_gr] [int] NULL,
	[r_pgr] [int] NULL,
	[id_aud_fond] [int] NULL,
	[id_ych_plan] [int] NULL,
	[id_zan_tip] [int] NULL,
	[id_day] [int] NULL,
	[id_nedel] [int] NULL,
	[id_para] [int] NULL,
	[fio1] [nvarchar](50) NULL,
	[subject] [nvarchar](2000) NULL,
	[datetimein] [datetime] NULL,
 CONSTRAINT [PK_raspis_baza] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[raspis_dat_sokr]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[raspis_dat_sokr](
	[name] [nvarchar](50) NULL,
	[id] [int] NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[raspis_dat_ych]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[raspis_dat_ych](
	[dat] [datetime] NULL,
	[den] [nvarchar](50) NULL,
	[nom] [int] NULL,
	[odd] [nvarchar](50) NULL,
	[denid] [int] NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[raspis_dat_ych_2009_2010]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[raspis_dat_ych_2009_2010](
	[dat] [datetime] NULL,
	[den] [nvarchar](50) NULL,
	[nom] [int] NULL,
	[odd] [nvarchar](50) NULL,
	[denid] [int] NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[raspis_dat_ych1]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[raspis_dat_ych1](
	[dat] [datetime] NULL,
	[den] [nvarchar](20) NULL,
	[nom] [int] NULL,
	[odd] [nvarchar](10) NULL,
	[denid] [int] NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[raspis_fs]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[raspis_fs](
	[id] [int] NOT NULL,
	[name] [nvarchar](70) NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[raspis_korp]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[raspis_korp](
	[id] [int] NULL,
	[name] [nvarchar](50) NULL,
	[name_kr] [nvarchar](50) NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[raspis_para]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[raspis_para](
	[id] [int] NOT NULL,
	[num] [int] NULL,
	[num_text] [nvarchar](50) NULL,
	[tim] [nvarchar](50) NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[raspis_pps]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[raspis_pps](
	[kaf] [nvarchar](255) NULL,
	[fam] [nvarchar](255) NULL,
	[nam] [nvarchar](255) NULL,
	[otch] [nvarchar](255) NULL,
	[post] [nvarchar](255) NULL,
	[id_pps] [int] IDENTITY(1,1) NOT NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[raspis_pps1]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[raspis_pps1](
	[kaf] [nvarchar](255) NULL,
	[fam] [nvarchar](255) NULL,
	[nam] [nvarchar](255) NULL,
	[otch] [nvarchar](255) NULL,
	[post] [nvarchar](255) NULL,
	[id_pps] [int] NOT NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[raspis_test]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[raspis_test](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[txt] [nvarchar](50) NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[raspis_ych_plan]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[raspis_ych_plan](
	[spec] [nvarchar](255) NULL,
	[course1] [nvarchar](255) NULL,
	[fac] [nvarchar](255) NULL,
	[k] [nvarchar](255) NULL,
	[fs] [nvarchar](255) NULL,
	[course] [nvarchar](255) NULL,
	[s] [nvarchar](10) NULL,
	[subject] [nvarchar](400) NULL,
	[st] [int] NULL,
	[gr] [int] NULL,
	[pgr] [int] NULL,
	[lek] [int] NULL,
	[lek_pot] [nvarchar](255) NULL,
	[lab_zan] [int] NULL,
	[lab_pot] [nvarchar](255) NULL,
	[prak_zan] [int] NULL,
	[prak_pot] [nvarchar](255) NULL,
	[it_kontr] [nvarchar](255) NULL,
	[kontr_p] [nvarchar](255) NULL,
	[fio1] [nvarchar](255) NULL,
	[fio2] [nvarchar](255) NULL,
	[start] [datetime] NULL,
	[end] [datetime] NULL,
	[id] [int] IDENTITY(2262,1) NOT NULL,
 CONSTRAINT [PK__raspis_ych_plan___164F3FA9] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[raspis_ych_plan_2009_2010]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[raspis_ych_plan_2009_2010](
	[spec] [nvarchar](255) NULL,
	[course1] [nvarchar](255) NULL,
	[fac] [nvarchar](255) NULL,
	[k] [nvarchar](255) NULL,
	[fs] [nvarchar](255) NULL,
	[course] [nvarchar](255) NULL,
	[s] [nvarchar](10) NULL,
	[subject] [nvarchar](400) NULL,
	[st] [int] NULL,
	[gr] [int] NULL,
	[pgr] [int] NULL,
	[lek] [int] NULL,
	[lek_pot] [nvarchar](255) NULL,
	[lab_zan] [int] NULL,
	[lab_pot] [nvarchar](255) NULL,
	[prak_zan] [int] NULL,
	[prak_pot] [nvarchar](255) NULL,
	[it_kontr] [nvarchar](255) NULL,
	[kontr_p] [nvarchar](255) NULL,
	[fio1] [nvarchar](255) NULL,
	[fio2] [nvarchar](255) NULL,
	[start] [datetime] NULL,
	[end] [datetime] NULL,
	[id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_raspis_ych_plan] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[raspis_ych_plan_old]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[raspis_ych_plan_old](
	[spec] [nvarchar](255) NULL,
	[k] [nvarchar](255) NULL,
	[s] [float] NULL,
	[subject] [nvarchar](255) NULL,
	[st] [float] NULL,
	[gr] [float] NULL,
	[pgr] [float] NULL,
	[lek] [float] NULL,
	[lek_pot] [nvarchar](255) NULL,
	[lab_zan] [float] NULL,
	[prak_zan] [float] NULL,
	[prak_pot] [nvarchar](255) NULL,
	[it_kontr] [nvarchar](255) NULL,
	[kontr_p] [nvarchar](255) NULL,
	[fio1] [nvarchar](255) NULL,
	[fio2] [nvarchar](255) NULL,
	[start] [datetime] NULL,
	[end] [datetime] NULL,
	[fs] [int] NULL,
	[course] [int] NULL,
	[id] [int] NOT NULL,
	[id_prepod1] [int] NULL,
	[id_prepod2] [int] NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[raspis_ych_plan2]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[raspis_ych_plan2](
	[spec] [nvarchar](255) NULL,
	[k] [nvarchar](255) NULL,
	[fs] [int] NULL,
	[course] [nvarchar](255) NULL,
	[s] [int] NULL,
	[subject] [nvarchar](255) NULL,
	[st] [int] NULL,
	[gr] [int] NULL,
	[pgr] [int] NULL,
	[lek] [int] NULL,
	[lek_potok] [nvarchar](255) NULL,
	[lab_zan] [int] NULL,
	[prak_zan] [int] NULL,
	[prak_pot] [nvarchar](255) NULL,
	[it_kontr] [nvarchar](255) NULL,
	[kontr_p] [nvarchar](255) NULL,
	[fio1] [nvarchar](255) NULL,
	[fio2] [nvarchar](255) NULL,
	[start] [datetime] NULL,
	[end] [datetime] NULL,
	[id] [int] NOT NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[raspis_zan_tip]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[raspis_zan_tip](
	[id] [int] NOT NULL,
	[name] [nvarchar](50) NULL,
	[kr_name] [nvarchar](50) NULL,
	[id_tip] [int] NULL,
	[kr_kr_name] [nvarchar](50) NULL
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[kafedra_predmets]  WITH NOCHECK ADD  CONSTRAINT [FK_kafedra_predmets_predmets] FOREIGN KEY([id_predmets])
REFERENCES [dbo].[predmets] ([id])
GO
ALTER TABLE [dbo].[kafedra_predmets] CHECK CONSTRAINT [FK_kafedra_predmets_predmets]
GO
ALTER TABLE [dbo].[predmets_razdel]  WITH NOCHECK ADD  CONSTRAINT [FK_predmets_razdel_predmets] FOREIGN KEY([id_predmets])
REFERENCES [dbo].[predmets] ([id])
GO
ALTER TABLE [dbo].[predmets_razdel] CHECK CONSTRAINT [FK_predmets_razdel_predmets]
GO
/****** Object:  StoredProcedure [dbo].[MGOU_aud_ins]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[MGOU_aud_ins]
AS
declare @k nvarchar(20)
declare @n int
declare @t int

set @k='Лумумба'
set @t=1
set @n=100
while(@n<400)
begin
	INSERT INTO MGOU_aud
           (korpus,number,[type])
    VALUES
           (CAST(@k as nvarchar(20)),CAST(@n as nvarchar(20)),CAST(@t as nvarchar(20)))
set @n=@n+1
if(@n=150) set @n=200
if(@n=250) set @n=300
if(@n=350) set @n=400
end

GO
/****** Object:  StoredProcedure [dbo].[mk_raspis]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO










-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[mk_raspis]
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
		set @txt='</td>'--'<hr><a title="Распечатать" href=raspis_print.php?id='+cast(@id as nvarchar)+'><img border=0 src=printer.gif></a>'
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
			set @txt='<img title="+" src="add.gif" onclick="if(window.open(''mk_raspis_new.php?i='+RTRIM(@i)+'&j='+RTRIM(@j)+'&n='+RTRIM(@nedel)+'&id='+RTRIM(@id)+'&csp='+RTRIM(@csp)+'&fs='+RTRIM(@fs)+'&course='+RTRIM(@course)+'&sem='+RTRIM(@sem)+''','''',''top=200,left=450,height=400,width=560,status=no,toolbar=no,scrollbars=yes,resizable=yes'')==1) subm2('+cast(@id as nvarchar)+');">'
		   end else begin
			if(@r_gr<>'0') set @para=@para+', '+@r_gr+' гр.'
			if(@r_pgr<>'0') set @para=@para+', '+@r_pgr+' подгр.'
			INSERT INTO #tmp (txt) VALUES (@para)
			set @txt='<img title="-" src="del.gif"'
			if(rtrim(@id_baza)<>0)  set @txt=@txt+' onclick=if(podtvdel())subm10('+RTRIM(cast(@id_baza as nvarchar))+')'
			set @txt=@txt+'>'
			set @txt1='<br><img title="#" src="edit.jpg"'
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
				set @txt='<img title="+" src="add.gif" onclick="if(window.open(''mk_raspis_new.php?i='+RTRIM(@i)+'&j='+RTRIM(@j)+'&n='+RTRIM(@nedel)+'&id='+RTRIM(@id)+'&csp='+RTRIM(@csp)+'&fs='+RTRIM(@fs)+'&course='+RTRIM(@course)+'&sem='+RTRIM(@sem)+''','''',''top=200,left=450,height=400,width=560,status=no,toolbar=no,scrollbars=yes,resizable=yes'')==1) subm2();">'
				if(rtrim(@c2_str1)<>'') set @para1='<font size=-3 color=#cccccc>'+rtrim(@c2_str1)+'</font>'
			  end else
			  begin
				set @txt='<img title="-" src="del.gif"'
				if(rtrim(@id_baza1)<>0)  set @txt=@txt+'onclick=subm11('+RTRIM(cast(@id_baza1 as nvarchar))+')'
				set @txt=@txt+'>'				
/*			set @txt=@txt+'<br><img title="#" src="edit.jpg"'
			if(rtrim(@id_baza1)<>0)  set @txt=@txt+' onclick=subm16('+RTRIM(cast(@id_baza1 as nvarchar))+')'
			set @txt=@txt+'>'
*/
			set @txt1='<br><img title="#" src="edit.jpg"'
			if(rtrim(@id_baza1)<>0)  set @txt1=@txt1+' onclick="if(window.open(''mk_raspis_new_edit.php?i='+RTRIM(@i)+'&j='+RTRIM(@j)+'&n='+RTRIM(@nedel)+'&id='+RTRIM(@id)+'&csp='+RTRIM(@csp)+'&fs='+RTRIM(@fs)+'&course='+RTRIM(@course)+'&sem='+RTRIM(@sem)+''','''',''top=200,left=450,height=400,width=560,status=no,toolbar=no,scrollbars=yes,resizable=yes'')==1) subm2();"'
			set @txt1=@txt1+'>'		
			  end
			  INSERT INTO #tmp (txt) VALUES (@para1)
			end

			if(@nedel=2)
			begin
			  if(rtrim(@para2)=@pari_net) begin
				set @txt='<img title="+" src="add.gif" onclick="if(window.open(''mk_raspis_new.php?i='+RTRIM(@i)+'&j='+RTRIM(@j)+'&n='+RTRIM(@nedel)+'&id='+RTRIM(@id)+'&csp='+RTRIM(@csp)+'&fs='+RTRIM(@fs)+'&course='+RTRIM(@course)+'&sem='+RTRIM(@sem)+''','''',''top=200,left=450,height=400,width=560,status=no,toolbar=no,scrollbars=yes,resizable=yes'')==1) subm2();">'
				if(rtrim(@c2_str2)<>'') set @para2='<font size=-3 color=#cccccc>'+rtrim(@c2_str2)+'</font>'
			  end else
			  begin
				set @txt='<img title="-" src="del.gif"'
				if(rtrim(@id_baza2)<>0)  set @txt=@txt+'onclick=if(podtvdel())subm11('+RTRIM(cast(@id_baza2 as nvarchar))+')'
				set @txt=@txt+'>'	
/*
			set @txt=@txt+'<br><img title="#" src="edit.jpg"'
			if(rtrim(@id_baza2)<>0)  set @txt=@txt+' onclick=subm16('+RTRIM(cast(@id_baza2 as nvarchar))+')'
			set @txt=@txt+'>'							
*/
			set @txt1='<br><img title="#" src="edit.jpg"'
			if(rtrim(@id_baza2)<>0)  set @txt1=@txt1+' onclick="if(window.open(''mk_raspis_new_edit.php?i='+RTRIM(@i)+'&j='+RTRIM(@j)+'&n='+RTRIM(@nedel)+'&id='+RTRIM(@id)+'&csp='+RTRIM(@csp)+'&fs='+RTRIM(@fs)+'&course='+RTRIM(@course)+'&sem='+RTRIM(@sem)+''','''',''top=200,left=450,height=400,width=560,status=no,toolbar=no,scrollbars=yes,resizable=yes'')==1) subm2();"'
			set @txt1=@txt1+'>'		
			  end		
			  INSERT INTO #tmp (txt) VALUES (@para2)
			end

			if(@nedel=3)
				if(rtrim(@para1)<>rtrim(@para2))
				begin
					set @txt='<img title="+" src="add.gif" onclick="if(window.open(''mk_raspis_new.php?i='+RTRIM(@i)+'&j='+RTRIM(@j)+'&n='+RTRIM(@nedel)+'&id='+RTRIM(@id)+'&csp='+RTRIM(@csp)+'&fs='+RTRIM(@fs)+'&course='+RTRIM(@course)+'&sem='+RTRIM(@sem)+''','''',''top=200,left=450,height=400,width=560,status=no,toolbar=no,scrollbars=yes,resizable=yes'')==1) subm2();">'
					if(rtrim(@c2_str1)<>'' and rtrim(@para1)=@pari_net ) set @para1='<font size=-3 color=#cccccc>'+rtrim(@c2_str1)+'</font>'
					if(rtrim(@c2_str2)<>'' and rtrim(@para2)=@pari_net ) set @para2='<font size=-3 color=#cccccc>'+rtrim(@c2_str2)+'</font>'
					INSERT INTO #tmp (txt) VALUES ('<font size=-2>'+rtrim(@para1)+'</font><sup>*</sup>')
					INSERT INTO #tmp (txt) VALUES ('<hr><font size=-2>'+rtrim(@para2)+'</font><sup>**</sup>')							
				end
				else
				begin
					if(rtrim(@para1)=@pari_net and rtrim(@para2)=@pari_net)
					begin
						set @txt='<img title="+" src="add.gif" onclick="if(window.open(''mk_raspis_new.php?i='+RTRIM(@i)+'&j='+RTRIM(@j)+'&n='+RTRIM(@nedel)+'&id='+RTRIM(@id)+'&csp='+RTRIM(@csp)+'&fs='+RTRIM(@fs)+'&course='+RTRIM(@course)+'&sem='+RTRIM(@sem)+''','''',''top=200,left=450,height=400,width=560,status=no,toolbar=no,scrollbars=yes,resizable=yes'')==1) subm2();">'
						if(rtrim(@c2_str1)<>'' or rtrim(@c2_str2)<>'')
							if(rtrim(@c2_str1)<>rtrim(@c2_str2))
							begin
								set @para='<font size=-3 color=#cccccc>'+rtrim(@c2_str1)+'</font><sup>*</sup><hr><font size=-3 color=#cccccc>'+rtrim(@c2_str2)+'</font><sup>**</sup>'
							end else set @para='<font size=-3 color=#cccccc>'+rtrim(@c2_str1)+'</font>'
					end
					if(rtrim(@para1)<>@pari_net and rtrim(@para2)<>@pari_net)
					begin
						set @txt='<img title="-" src="del.gif"'
						if(rtrim(@id_baza1)<>0)  set @txt=@txt+' onclick=if(podtvdel())subm11('+RTRIM(cast(@id_baza1 as nvarchar))+')'
						set @txt=@txt+'>'	
/*	
			set @txt=@txt+'<br><img title="#" src="edit.jpg"'
			if(rtrim(@id_baza1)<>0)  set @txt=@txt+' onclick=subm16('+RTRIM(cast(@id_baza1 as nvarchar))+')'
			set @txt=@txt+'>'						
*/
			set @txt1='<br><img title="#" src="edit.jpg"'
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

										










GO
/****** Object:  StoredProcedure [dbo].[raspis_print1]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO











-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[raspis_print1]  ---------------------  расписание для преподавателей
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













GO
/****** Object:  StoredProcedure [dbo].[raspis_print2]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO






























-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[raspis_print2]  ---------------------  расписание для Студентов очников
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
	select distinct @tim=tim from raspis_para where num=@idpara
	set @txt='<td width=80'+@rowtmstr+' align=center><font size=-2>'+@tim+'</font>'
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
set @txt='</table><font size=-1>Диспетчер УМО____________________ Начальник УМО____________________ Декан факультета____________________ </font>'
insert into #tmp (txt) values(@txt)

select txt from #tmp order by num asc

drop table #tmp
drop table #tmp1
drop table #tmp2
drop table #tmp3

END


































GO
/****** Object:  StoredProcedure [dbo].[raspis_print2a]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
















-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[raspis_print2a]  ---------------------  расписание для Студентов заочников
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
	declare @denstr nvarchar(100)
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
	declare @idnedel int
	declare @roundgrpgr int
	declare @rowtm int
	declare @rowtmstr nvarchar(30)
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

	select @year_learn=cast(datepart(year,min(start)) as nvarchar)+'-'+cast(datepart(year,max([end])) as nvarchar) from raspis_ych_plan
	set @year_learn='2010-2011'

	select @otd=[name] from raspis_fs where id=@fs
	set @fsnedel=''
	--if(@fs<>1 and @fs<>3) set @fsnedel=cast(@nedel1 as nvarchar)+'-'+cast(@nedel2 as nvarchar)+' недели '

	set @txt='<font size=-2>УТВЕРЖДАЮ:<br>Зам. директора по учебной работе  ЧПИ МГОУ<br> _________________________ Н.А. Скворцов<br>«_______» _______________________ '+cast(datepart(year,getdate()) as nvarchar)+' г.</font>
<center><b>Расписание занятий на период зачетно-экзаменационной сессии</b><br>с '
insert into #tmp (txt) values(@txt)

	select @txt='<ins><b>'+(cast(datepart(day,min(start)) as nvarchar)+'.'+
		cast(datepart(month,min(start)) as nvarchar)+'.</b></ins> по ')
			from raspis_ych_plan
			where raspis_ych_plan.s=@semestr
				and k=@spec+'-'+cast(@course as nvarchar)+@fs_str
insert into #tmp (txt) values(@txt)

	select @txt='<ins><b>'+(cast(datepart(day,max([end])) as nvarchar)+'.'+
		cast(datepart(month,max([end])) as nvarchar)+'.</b></ins> ')
			from raspis_ych_plan
			where raspis_ych_plan.s=@semestr
				and k=@spec+'-'+cast(@course as nvarchar)+@fs_str
insert into #tmp (txt) values(@txt)

	set @txt=' '+@year_learn+' учебного года<br><b>курс  <ins>'+cast(@course as nvarchar)+'</ins> отделение <ins>'+@otd+'</ins>   специальность  <ins>'+@spec+'</ins></b>
</center>'
insert into #tmp (txt) values(@txt)


select @kolgrmax=max(gr),@kolpgrmax=max(pgr) from raspis_ych_plan where k=@spec+'-'+cast(@course as nvarchar)+@fs_str
set @i=1
set @grstr=''
if(@kolgrmax=2 and @kolpgrmax=3)begin
 while(@i<=@kolgrmax)
 begin
	set @grstr=@grstr+'<td colspan=6 align=center width=43%>группа '+cast(@i as nvarchar)+'</td>'
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
<tr align=center><td rowspan=2 width=20>&nbsp;<td rowspan=2 width=80 align=center>Время'
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

set @idnedel=@nedel1
while(@idnedel<=@nedel2) --- Цикл для недели _начало
begin
 set @idday=0
 set @idday_end=7
 while(@idday<@idday_end) ---Цикл для дней недели _начало
 begin
  set @iic=1
  set @txt=''
  set @denstr=''
  select @denstr=[name] from raspis_dat_sokr where id=(@idday+1)
  select @i=cast(datepart(day,dat) as nvarchar) from raspis_dat_ych where denid=@idday and nom=@idnedel
  if(@i<10) begin
    set @denstr=@denstr+'<br>&nbsp;<br>0'+cast(@i as nvarchar)+'.'
  end else
    set @denstr=@denstr+'<br>&nbsp;<br>'+cast(@i as nvarchar)+'.'
  select @i=cast(datepart(month,dat) as nvarchar) from raspis_dat_ych where denid=@idday and nom=@idnedel
  if(@i<10) begin
    set @denstr=@denstr+'<br>0'+cast(@i as nvarchar)+'.'
  end else 
    set @denstr=@denstr+'<br>'+cast(@i as nvarchar)+'.'
  select @i=cast(datepart(year,dat) as nvarchar) from raspis_dat_ych where denid=@idday and nom=@idnedel
  set @denstr=@denstr+'<br>'+cast(@i as nvarchar)

  set @idpara_begin=1
  set @idpara_end=9
  set @idpara=@idpara_begin

set @iicc=1
set @iiiccc=1
set @iic=1
while(@idpara<@idpara_end)
begin --- Цикл для пар _начало

set @rowtm=0
/*
	select distinct @tim=tim from raspis_para where num=@idpara
	set @txt='<td width=80 align=center><font size=-2>'+@tim+'</font>'
	insert into #tmp1 (txt) values(@txt)
*/
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
				and raspis_ych_plan.s=@semestr
				and raspis_baza.id_nedel=@idnedel
			order by '<b>'+raspis_ych_plan.subject+'</b> <font size=-2>('+raspis_zan_tip.kr_name+') '+raspis_ych_plan.fio1+'</font>'
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
	set @odd_old=@odd
	set @odd1=@odd
	set @pgrstr1=@parastr1+@datychplan11+@datychplan12+','+@audstr1
	fetch next from cur into @parastr1,@audstr1,@paragr1,@parapgr1,@odd,@datychplan11,@datychplan12
	set @odd1=@odd
	if(@odd_old<>@odd) set @odd1=''
	if(@pgrstr1<>@pgrstr1_old)begin
	  if(@ic>1) set @txt1=@txt1+'<hr>' 
	  if(@fs=1 or @fs=3)begin
	   set @txt1=@txt1+@odd1+@pgrstr1
	  end else set @txt1=@txt1+@pgrstr1
	  set @pgrstr1_old=@pgrstr1
	  set @ic=@ic+1
	  set @iic=@iic+1
	  set @iiiccc=@iiiccc+1
	end
end
close cur
deallocate cur
--set @txt=@txt+@txt1
if(rtrim(@txt1)='') set @txt=''
if(rtrim(@txt1)<>'' and @ic>1) begin
 insert into #tmp3 (txt) values(rtrim(@txt))
 --insert into #tmp3 (txt) values(rtrim(@txt1))
	if(len(@txt1)>100) begin
		insert into #tmp3 (txt) values(substring(rtrim(@txt1),0,100))
	if(len(@txt1)>300)begin
		insert into #tmp3 (txt) values(substring(rtrim(@txt1),100,200))
		insert into #tmp3 (txt) values(substring(rtrim(@txt1),200,len(@txt1)))
	end else begin
		insert into #tmp3 (txt) values(substring(rtrim(@txt1),100,len(@txt1)))
	end
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
				and raspis_ych_plan.s=@semestr
				and raspis_baza.id_nedel=@idnedel
			order by '<b>'+raspis_ych_plan.subject+'</b> <font size=-2>('+raspis_zan_tip.kr_name+') '+raspis_ych_plan.fio1+'</font>'
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
	set @pgrstr1=@parastr1+@datychplan11+@datychplan12+','+@audstr1
	fetch next from cur into @parastr1,@audstr1,@paragr1,@parapgr1,@odd,@datychplan11,@datychplan12
	set @odd1=@odd
	if(@odd_old<>@odd) set @odd1=''
	if(@pgrstr1<>@pgrstr1_old)begin
	  if(@ic>1) set @txt1=@txt1+'<hr>'
	  if(@fs=1 or @fs=3)begin
	   set @txt1=@txt1+@odd1+@pgrstr1
	  end else set @txt1=@txt1+@pgrstr1
	  set @pgrstr1_old=@pgrstr1
	  set @ic=@ic+1
	  set @iic=@iic+1
	  set @iiiccc=@iiiccc+1
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
				and raspis_ych_plan.s=@semestr
				and raspis_baza.id_nedel=@idnedel
			order by '<b>'+raspis_ych_plan.subject+'</b> <font size=-2>('+raspis_zan_tip.kr_name+') '+raspis_ych_plan.fio1+'</font>'
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
	set @pgrstr1=@parastr1+@datychplan11+@datychplan12+','+@audstr1
	fetch next from cur into @parastr1,@audstr1,@paragr1,@parapgr1,@odd,@datychplan11,@datychplan12
	set @odd1=@odd
	if(@odd_old<>@odd) set @odd1=''
	if(@pgrstr1<>@pgrstr1_old)begin
	  if(@ic>1) set @txt1=@txt1+'<hr>' 
	  if(@fs=1 or @fs=3)begin
	   set @txt1=@txt1+@odd1+@pgrstr1
	  end else set @txt1=@txt1+@pgrstr1
	  set @pgrstr1_old=@pgrstr1
	  set @ic=@ic+1
	  set @iic=@iic+1
	  set @iiiccc=@iiiccc+1
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

	select distinct @tim=tim from raspis_para where num=@idpara
	set @txt='<td width=80 '+@rowtmstr+' align=center><font size=-2>'+@tim+'</font>'
	insert into #tmp1 (txt) values(@txt)

set @idpara=@idpara+1
if(@idpara<9)begin
	insert into #tmp3 (txt) values('<tr>')
	--if(@iiic=1)set @iicc=@iicc+1
end

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
 delete from #tmp3

end --- Цикл для пар _конец

if(@iiiccc>1)begin
	set @txt='<tr><td rowspan='+cast((@iicc-1+(@idpara_end-@idpara_begin)) as nvarchar)+
' width=30 align=center border=ffffff>'+rtrim(@denstr)
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
 set @idnedel=@idnedel+1

end --- Цикл для недели _конец
set @txt='</table><font size=-1>Диспетчер УМО____________________ Начальник УМО____________________ Декан факультета____________________</font> '
insert into #tmp (txt) values(@txt)

select txt from #tmp order by num asc

drop table #tmp
drop table #tmp1
drop table #tmp2
drop table #tmp3

END


















GO
/****** Object:  StoredProcedure [dbo].[raspis_print3]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO












-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[raspis_print3] --- printing aud fond
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













GO
/****** Object:  StoredProcedure [dbo].[raspis_prov2]    Script Date: 09.02.2019 13:51:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[raspis_prov2]
	 @idnedel int,
	 @idday int,
	 @idpara int,
	 @r_k nvarchar(20)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	declare @kol int
	declare @koldaytomonth int
	declare @idmonth int
	declare @idyear int
set @kol=0
set dateformat dmy;

select @idmonth=datepart(month,dat),@idyear=datepart(year,dat) from raspis_dat_ych where denid=@idday and nom=@idnedel
set @koldaytomonth=DATEDIFF(dd,'01.'+cast(@idmonth as nvarchar)+'.'+cast(@idyear as nvarchar), DATEADD(mm, 1, '01.'+cast(@idmonth as nvarchar)+'.'+cast(@idyear as nvarchar)))

-- Проверка на группу,поток
select * from raspis_baza where r_k=@r_k
 and id_day=@idday
 and id_para=@idpara
 and
 ( 
			-- проверка на очников
    (r_k like '%д-%' and id_nedel=@idnedel)
  or
			-- проверка заочников вечерников
	((r_k like '%з-%' or r_k like '%зс-%' or r_k like '%в-%')
	  and id_nedel in (
			select nom 
			from raspis_dat_ych 
			where denid=@idday 
				and dat>=cast('01.'+(cast(@idmonth as nvarchar)+'.'+cast(@idyear as nvarchar)) as datetime)
				and dat<=cast(cast(@koldaytomonth as nvarchar)+'.'+(cast(@idmonth as nvarchar)+'.'+cast(@idyear as nvarchar)) as datetime)
					  )
 ) 
)
END



GO
