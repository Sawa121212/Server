/****** Сценарий для команды SelectTopNRows среды SSMS  ******/

DELETE FROM raspis_dat_ych 
declare @dat datetime = '20180903'

declare @nom int = 1
declare @denid int = 0

WHILE(@dat<='20190701')
BEGIN
	INSERT INTO raspis_dat_ych VALUES (@dat, datename(dw, @dat ), @nom, 
	CASE (@nom+1)%2 WHEN 1 THEN '*' ELSE '**' END, @denid)
	
	set @denid=@denid+1
	IF(@denid=7)
	BEGIN
		set @denid=0
		set @nom=@nom+1
	END
	set @dat=DATEADD(day,1,@dat)
END