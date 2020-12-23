<?php
	session_start(); 
	require '../../login/db.php';
?>
	<!--<meta http-equiv="Content-Type" content="text/html; charset=utf-8">-->
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
	<meta http-equiv="Content-Language" content="ru">	

<style TYPE="text/css">
#vertical {
  width:15em;
  padding:0;
  margin:0 auto;
  list-style-type:none;
  font-size:1.4em;
  font-family:georgia, "times new roman", serif;
  }
#vertical_li {
  float:left;
  border:0.2em solid #eee;
  margin:0.1em;
  }
#vertical_li_a {
  text-decoration:none;
  color:#000;
  display:block;
  width:1.5em;
  height:1.5em;
  border-top:0.1em solid #000;
  height:auto;
  }
#vertical_li_a_em {
  font-style:normal;
  display:block;
  text-align:center;
  background:#fff;
  border-left:0.1em solid #000;
  border-right:0.1em solid #000;
  }
#vertical_li_a_em.nd {
  border-bottom:0.1em solid #000;
  }
#vertical_li_a:hover {
  background:#eee;
  }
#vertical_li_a:hover em {
  background:#eee;
  color:#800;
  }

 .raspis1{font-size:3 pixels}

</style>
<script>
function subm1(){
 print1.submit();
}
</script>
<form method="post" name="print1">
<?
include('../../login/conn_php.php');
include_once('../../login/raspis_config.php');

if (isset($_GET['pps'])) {  $pps = $_GET['pps'];} else $pps = '';
if (isset($_GET['nedel1'])) {  $nedel1 = $_GET['nedel1'];} else $nedel1 = '';
if (isset($_GET['nedel2'])) {  $nedel2 = $_GET['nedel2'];} else $nedel2 = '';


$sql = "exec raspis_print1 '" . $pps . "'," . $nedel1 . "," . $nedel2;
$que = mssql_query($sql, $link);
while ($rez = mssql_fetch_array($que))
  echo $rez['txt'];
 /*  намнбхрэ ID опеонднб
 declare @fio nvarchar(100)
declare @idpps int

declare cur cursor for
        select id_pps,(rtrim(fam)+' '+substring(nam,1,1)+'.'+substring(otch,1,1)+'.') as fio from raspis_pps
open cur
fetch next from cur into @idpps,@fio
while (@@FETCH_STATUS=0)
begin
        update raspis_ych_plan set id_prepod1=@idpps where fio1 like @fio
        update raspis_ych_plan set id_prepod2=@idpps where fio2 like @fio
        --select @idpps,@fio
        fetch next from cur into @idpps,@fio
end

close cur
deallocate cur
 */
?>

</form>
		<!--JavaScript at end of body for optimized loading-->
		<script type="text/javascript" src="materialize/js/materialize.min.js"></script>
</body>
</html>