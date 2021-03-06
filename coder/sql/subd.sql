USE SUBD
GO
/****** Object:  Table [dbo].[abit_fs]    Script Date: 02.03.2019 13:30:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[abit_fs](
	[id_fs] [int] IDENTITY(1,1) NOT NULL,
	[litera] [char](3) NULL,
	[name] [char](50) NULL,
	[fs] [char](50) NULL,
	[fs_w] [char](50) NULL,
	[fs_r] [char](50) NULL,
	[litra] [char](3) NULL,
	[otdelenie] [nvarchar](50) NULL,
	[id_otdelenie] [int] NULL,
 CONSTRAINT [PK_abit_fs] PRIMARY KEY CLUSTERED 
(
	[id_fs] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[dist_test_logins]    Script Date: 02.03.2019 13:30:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[dist_test_logins](
	[spec] [nvarchar](50) NULL,
	[course] [nvarchar](20) NULL,
	[shifr] [nvarchar](50) NULL,
	[budjet] [nvarchar](50) NULL,
	[fio] [nvarchar](50) NOT NULL,
	[date_birth] [nvarchar](50) NULL,
	[adress] [nvarchar](50) NULL,
	[prim] [nvarchar](1000) NULL,
	[id_fs] [int] NULL,
	[id_osn] [int] NULL,
	[mail] [nvarchar](50) NULL,
	[id] [int] IDENTITY(1,1) NOT NULL,
	[code_spec] [nvarchar](50) NULL,
	[pwd] [nvarchar](50) NULL,
	[id_who_mod] [int] NULL,
	[when_mod] [nvarchar](50) NULL,
	[pol] [int] NULL,
	[selo] [int] NULL,
	[now_edit] [int] NULL,
 CONSTRAINT [PK_dist_test_logins_2] PRIMARY KEY CLUSTERED 
(
	[fio] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[price1]    Script Date: 02.03.2019 13:30:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[price1](
	[code_spec] [nvarchar](50) NOT NULL,
	[spec] [nvarchar](80) NOT NULL,
	[lit] [char](1) NULL,
	[to_pay] [nvarchar](50) NULL,
	[form_stud] [char](1) NULL,
	[fakult] [int] NULL,
	[id_spec] [int] IDENTITY(1,1) NOT NULL,
	[ekz_list] [char](2) NULL,
	[id_stud] [int] NULL,
	[zakr] [int] NULL,
	[code] [nvarchar](10) NULL,
	[napr] [nvarchar](50) NULL,
	[title_napr] [nvarchar](150) NULL,
	[del] [int] NULL,
	[bak] [int] NULL,
 CONSTRAINT [IX_price1] UNIQUE NONCLUSTERED 
(
	[code_spec] ASC,
	[id_stud] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[price1] ADD  CONSTRAINT [DF_price1_to_pay]  DEFAULT ((0)) FOR [to_pay]
GO
ALTER TABLE [dbo].[price1] ADD  CONSTRAINT [DF_price1_zakr]  DEFAULT ((0)) FOR [zakr]
GO
