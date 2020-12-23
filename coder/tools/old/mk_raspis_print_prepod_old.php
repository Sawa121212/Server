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
 print1.submit();
}
function subm2(){
 print1.newt.value=1;
 print1.submit();
}
function subm3(op){
 print1.newt.value=2;
 print1.op.value=op;
 print1.submit();
}
function subm4(op){
 print1.newt.value=3;
 print1.op.value=op;
 print1.submit();
}
function subm5(op){
 print1.newt.value=4;
 print1.op.value=op;
 print1.submit();
}
</script>
<form method="post" name="print1">
<?
include('../../login/conn_php.php');
include_once('../../login/raspis_config.php');

if(isset($_POST['kaf'])){$kaf=$_POST['kaf'];}else $kaf='';
if(isset($_POST['prepod'])){$prepod=$_POST['prepod'];}else $prepod='';
if(isset($_POST['dolj'])){$dolj=$_POST['dolj'];}else $dolj='';
if(isset($_POST['nedel1'])){$nedel1=$_POST['nedel1'];}else $nedel1='';
if(isset($_POST['nedel2'])){$nedel2=$_POST['nedel2'];}else $nedel2='';
if(isset($_POST['newt'])){$newt=$_POST['newt'];}else $newt='';
if(isset($_POST['op'])){$op=$_POST['op'];}else $op='';

echo "<input type=hidden name=newt value='".$newt."'>";
echo "<input type=hidden name=op value='".$op."'>";

$rm=array('Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь');

echo "<h2>Печать расписания для преподавателей</h2><br>";
echo "<li>Выберите кафедру<li>Выберите дату<br><br>";
echo "<center>";
/*$sql="select substring(k,PATINDEX('%-%',k)+1,LEN(k)-PATINDEX('%-%',k)) as kaf
 from raspis_ych_plan group by substring(k,PATINDEX('%-%',k)+1,LEN(k)-PATINDEX('%-%',k))
 order by substring(k,PATINDEX('%-%',k)+1,LEN(k)-PATINDEX('%-%',k))";*/
$sql="select kaf from raspis_pps group by kaf order by kaf";
$que=mssql_query($sql,$link);
echo "<select name=kaf onchange='subm1()'>";
echo "<option value=''>...</option>";
while($rez=mssql_fetch_array($que))
 if($kaf==$rez['kaf']) {echo "<option selected value='".$rez['kaf']."'>".$rez['kaf']."</option>";}else echo "<option value='".$rez['kaf']."'>".$rez['kaf']."</option>";
echo "</select>";
 /*
$im=1;
echo "<select name=month onchange='subm1()'>";
echo "<option value=''>...</option>";
while($im<13){
 if($month==$im){ echo "<option selected value='".$im."'>".$rm[$im-1]."</option>";}else  echo "<option value='".$im."'>".$rm[$im-1]."</option>";
 $im++;
}
echo "</select>";
$iy=2008;
echo "<select name=year onchange='subm1()'>";
echo "<option value=''>...</option>";
while($iy<2011){
 if($year==$iy){ echo "<option selected value='".$iy."'>".$iy."</option>";}else  echo "<option value='".$iy."'>".$iy."</option>";
 $iy++;
}
echo "</select>";*/
$ined=1;
echo "<select name=nedel1 onchange='subm1()'>";
echo "<option value=''>...</option>";
while($ined<53){
 $sql="select (cast(datepart(day,dat) as nvarchar)+'.'+cast(datepart(month,dat) as nvarchar)+'.'+cast(datepart(year,dat) as nvarchar)) as dat1 from raspis_dat_ych where (denid=0 or denid=6) and nom='".$ined."' order by denid";
 $que=mssql_query($sql,$link);
 $rez=mssql_fetch_array($que);
 $datall=$rez['dat1'];
 //$rez=mssql_fetch_array($que);
 //$datall .= '-'.$rez['dat1'];
 if($nedel1==$ined){ echo "<option selected value='".$ined."'>".$datall."</option>";}else  echo "<option value='".$ined."'>".$datall."</option>";
 $ined++;
}
echo "</select>";
$ined=1;
echo "<select name=nedel2 onchange='subm1()'>";
echo "<option value=''>...</option>";
while($ined<53){
 $sql="select (cast(datepart(day,dat) as nvarchar)+'.'+cast(datepart(month,dat) as nvarchar)+'.'+cast(datepart(year,dat) as nvarchar)) as dat1 from raspis_dat_ych where (denid=0 or denid=6) and nom='".$ined."' order by denid";
 $que=mssql_query($sql,$link);
 $rez=mssql_fetch_array($que);
 //$datall=$rez['dat1'];
 $rez=mssql_fetch_array($que);
 $datall = $rez['dat1'];
 if($nedel2==$ined){ echo "<option selected value='".$ined."'>".$datall."</option>";}else  echo "<option value='".$ined."'>".$datall."</option>";
 $ined++;
}
echo "</select>";
echo "</center>";

$ii=1;
if($kaf!=''){
$sql="select kaf,fam,nam,otch,post,id_pps
from raspis_pps
where kaf='".$kaf."'
 order by (fam+' '+nam+' '+otch)";
$que=mssql_query($sql,$link);
echo "<br><table width=100% border=1 align=center>";
echo "<tr bgcolor='#22ff22' align=center><td width=5>№<td>ФИО<td width=300>Действие</tr>";
 echo "<tr onclick='bgcolor=\"#ff0000\"'><td width=5><td>
 <input type=text name=up1 value='".$kaf."' size=10>
 <input type=text name=up2 value='' size=10>
 <input type=text name=up3 value='' size=10>
 <input type=text name=up4 value='' size=20>
 <input type=text name=up5 value='' size=10>
 <td align=center><input type=button value='Добавить' onclick='subm4(".$rez['id_pps'].")'>";
while($rez=mssql_fetch_array($que)){
 echo "<tr onclick='bgcolor=\"#ff0000\"'><td width=5>".$ii.") <td width=100%>
 <input type=text name=ed1_".$rez['id_pps']." value='".$rez['kaf']."' size=10>
 <input type=text name=ed2_".$rez['id_pps']." value='".$rez['fam']."' size=10>
 <input type=text name=ed3_".$rez['id_pps']." value='".$rez['nam']."' size=10>
 <input type=text name=ed4_".$rez['id_pps']." value='".$rez['otch']."' size=20>
 <input type=text name=ed5_".$rez['id_pps']." value='".$rez['post']."' size=10>
 <td align=center width=300>
 <input type=button value='Изменить' onclick='subm3(".$rez['id_pps'].")'>
 <input type=button value='Распечатать' onclick=\"window.open('mk_raspis_print1.php?pps=".trim($rez['fam'])." ".trim($rez['nam'])." ".trim($rez['otch'])."&nedel1=".$nedel1."&nedel2=".$nedel2."')\">
 <input type=button value='Удалить' onclick='if(confirm(\"Удалить?\")==1) subm5(".$rez['id_pps'].")'>
 </tr>";
 $ii++;
}
};
echo "</table>";

if($newt==2){
 $id=$_POST['op'];
 $ed1=$_POST['ed1_'.$id];
 $ed2=$_POST['ed2_'.$id];
 $ed3=$_POST['ed3_'.$id];
 $ed4=$_POST['ed4_'.$id];
 $ed5=$_POST['ed5_'.$id];
 $sql="update raspis_pps set kaf='".$ed1."',fam='".$ed2."',nam='".$ed3."',otch='".$ed4."',post='".$ed5."' where id_pps='".$id."'";
 $que=mssql_query($sql,$link);
 if($que){
echo "<script>alert('Обновление прошло успешно');subm2();</script>";
}else
echo "<script>alert('Ошибка обновления');subm2();</script>";
}
if($newt==3){
 $id=$_POST['op'];
 $up1=$_POST['up1'];
 $up2=$_POST['up2'];
 $up3=$_POST['up3'];
 $up4=$_POST['up4'];
 $up5=$_POST['up5'];
 $sql="insert into raspis_pps (kaf,fam,nam,otch,post) values('".$up1."','".$up2."','".$up3."','".$up4."','".$up5."')";
 $que=mssql_query($sql,$link);
 if($que){
echo "<script>alert('Добавление прошло успешно');subm2();</script>";
}else
echo "<script>alert('Ошибка добавления');subm2();</script>";
}
if($newt==4){
 $id=$_POST['op'];
 $sql="delete from raspis_pps where id_pps='".$id."'";
 $que=mssql_query($sql,$link);
 if($que){
echo "<script>alert('Удаление прошло успешно');subm2();</script>";
}else
echo "<script>alert('Ошибка удаления');subm2();</script>";
}
?>

</form>