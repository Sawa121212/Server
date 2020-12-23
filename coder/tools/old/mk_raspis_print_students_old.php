<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<head>
        <meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
        <meta http-equiv="Content-Language" content="ru">
        <meta content="text/css">
        <META HTTP-EQUIV="Expires" CONTENT="0">
        <LINK href="../../css/main.css" rel="stylesheet" type="text/css">
</head>
<html>
<body>

<script>
function subm1(){
 print2.submit();
}
function subm2(){
 print2.newt.value=1;
 print2.submit();
}
</script>
<form method="post" name="print2">
<?
include('../../login/conn_php.php');
//include('.../.../inc/secury.php');
include_once('../../login/raspis_config.php');

if(isset($_POST['course'])){$course=$_POST['course'];}else $course='';
if(isset($_POST['fs'])){$fs=$_POST['fs'];}else $fs='';
if(isset($_POST['spec'])){$red=$_POST['spec'];}else $red='';
if(isset($_POST['semestr'])){$semestr=$_POST['semestr'];}else $semestr='';
if(isset($_POST['nedel1'])){$nedel1=$_POST['nedel1'];}else $nedel1='';
if(isset($_POST['nedel2'])){$nedel2=$_POST['nedel2'];}else $nedel2='';
if(isset($_POST['newt'])){$newt=$_POST['newt'];}else $newt='';

echo "<input type=hidden name=newt value='".$newt."'>";

$rm=array('Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь');

echo "<h2>Печать расписания для студентов</h2><br>";
echo "<li>Выберите курс<li>Выберите форму обучения<li>Выберите специальность<li>Выберите семестр<li>Выберите начало семестра<li>Выберите окончание семестра<br><br>";
echo "<center>";

echo "<select name=course  onchange='subm1()'>";
echo "<option value=''>...</option>";
for($i=1;$i<7;$i++)
 if($i==$course) {echo "<option selected value='".$i."'>".$i."</option>";}else echo "<option value='".$i."'>".$i."</option>";
echo "</select>";

$sql_str="select DISTINCT litera, id_fs, RTRIM([name]) as nm from abit_fs  ORDER BY id_fs";
//echo  "</td><td align='left'><select onchange='raspis.submit();' name='fs'><option value=''>...</option>";
echo  " <select onchange='subm1()' name='fs'><option value=''>...</option>";
$rest = mssql_query($sql_str, $link);
 while ($row = mssql_fetch_array($rest)) {
 if ($fs==$row["id_fs"]){
  echo  "<option selected value='".$row["id_fs"]."'>" . $row["nm"] . "</option>";
  }else
  {
  echo  "<option value='".$row["id_fs"]."'>" . $row["nm"] . "</option>";
  };
 };
 if ($fs=='11'){
  echo  "<option selected value='11'>Очная / сессия</option>";
  }else
  {
  echo  "<option value='11'>Очная / сессия</option>";
  };
 if ($fs=='31'){
  echo  "<option selected value='31'>Вечерняя / сессия</option>";
  }else
  {
  echo  "<option value='31'>Вечерняя / сессия</option>";
  };   
echo  "</select>";

$sql_str="select DISTINCT fac from raspis_ych_plan order by fac";
echo  " <select onchange='subm1();' name='spec'><option value=''>...</option>";
$rest = mssql_query($sql_str, $link);
 while ($row = mssql_fetch_array($rest)) {
   if ($red==$row["fac"]){
     echo "<option selected value='".trim($row["fac"])."'>" . $row["fac"] . "</option>";
   }else
     echo  "<option value='".trim($row["fac"])."'>" . $row["fac"] . "</option>";
 };
echo  "</select>";

echo  " <select onchange='subm1();' name='semestr'><option value=''>...</option>";
$i=0;
while ($i<2) {
   $i++;
   if ($semestr==$i){ echo  "<option selected value='".$i."'>" . $i . "</option>"; }else  echo  "<option value='".$i."'>" . $i . "</option>";
};
if($fs!='1'&&$fs!='3')if($semestr=='у'){echo "<option selected value='у'>у</option>";} else echo "<option value='у'>у</option>";
echo "</select>";

echo "</td></tr>";
echo "&nbsp;&nbsp;&nbsp;&nbsp;";

if($fs!='1'&&$fs!='3'&&$fs!='')
{
  $ined=1;
  echo " <select name=nedel1 onchange='subm1()'>";
  echo "<option value=''>...</option>";
while($ined<53){
 $sql="select (cast(datepart(day,dat) as nvarchar)+'.'+cast(datepart(month,dat) as nvarchar)+'.'+cast(datepart(year,dat) as nvarchar)) as dat1 from raspis_dat_ych where denid=0 and nom='".$ined."' order by denid";
 $que=mssql_query($sql,$link);
 $rez=mssql_fetch_array($que);
 $datall=$rez['dat1'];
 //$rez=mssql_fetch_array($que);
 //$datall .= '-'.$rez['dat1'];
 if($nedel1==$ined)
 { 
  echo "<option selected value='".$ined."'>".$datall."</option>";
  }
  else  echo "<option value='".$ined."'>".$datall."</option>";
 $ined++;
}
echo "</select>";

$ined=1;
echo " <select name=nedel2 onchange='subm1()'>";
echo "<option value=''>...</option>";
while($ined<53){
 $sql="set dateformat dmy; select (cast(datepart(day,dat) as nvarchar)+'.'+cast(datepart(month,dat) as nvarchar)+'.'+cast(datepart(year,dat) as nvarchar)) as dat1 from raspis_dat_ych where denid=6 and nom>='".$nedel1."' and nom='".$ined."' order by denid";
 $que=mssql_query($sql,$link);
 $rez=mssql_fetch_array($que);
 $datall=$rez['dat1'];
 //$rez=mssql_fetch_array($que);
 //$datall .= '-'.$rez['dat1'];
 if(trim($datall)!='')
  if($nedel2==$ined){ echo "<option selected value='".$ined."'>".$datall."</option>";}else  echo "<option value='".$ined."'>".$datall."</option>";
 $ined++;
}
echo "</select>";
}
if($course!=''&&$fs!=''&&$red!=''){
//if($fs!='1'&&$fs!='3'){
// if($nedel!='')
echo " <input type=button value='Печать' onclick=\"window.open('mk_raspis_print2.php?course=".$course."&fs=".$fs."&spec=".$red."&semestr=".$semestr."&nedel1=".$nedel1."&nedel2=".$nedel2."')\">";
//}else
// echo " <input type=button value='Печать' onclick=\"window.open('mk_raspis_print2.php?course=".$course."&fs=".$fs."&spec=".$red."&semestr=".$semestr."')\">";
}
echo "</center>";
?>

</form>