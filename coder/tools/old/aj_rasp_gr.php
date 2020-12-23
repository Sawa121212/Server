<?
header('Content-type: "text/html; charset=windows-1251"');

include('../../login/conn_php.php');
include_once('../../login/raspis_config.php');

$r_id=$_GET['r_id'];
$potok=$_GET['potok'];
$aud_id=$_GET['aud_id'];
$i=$_GET['i'];
$j=$_GET['j'];
$nedel=$_GET['nedel'];
$fs=$_GET['fs'];
$strbussy='';
$strbussydop='';
$r=explode("_", $potok);
$r_k=$r[0];
$r_gr=$r[1];
$r_pgr=$r[2];
if($r_gr=='') $r_gr='0';

// проверка на одинаковость_начало
 $nedel1=fmod($nedel,2); if($nedel1==0) {$nedel1=2;}else $nedel1=1;
$sq="select count(id_ych_plan) as kol,id_ych_plan
 from raspis_baza
 where            
  and id_day='".$j."'
  and id_para='".$i."'
  and id_nedel='".$nedel."'";
$qu=mssql_query($sq,$link);
$re=mssql_fetch_array($qu);
$kolplan=$re['kol'];
if($kolplan==1){
  $sq1="select (subject+' - '+fio1+' '+fio2) as ych from raspis_ych_plan where id='".$re['id_ych_plan']."'";
  $qu1=mssql_query($sq1,$link);
  $re1=mssql_fetch_array($qu1);
  $strbussydop=' /'.$re1['ych'].'/ ';
}
if($kolplan>0) $strbussy .=' /group zanyata/ ';

if($kolplan==0){
 $sq="select count(id) as kol
 from raspis_baza
 where
  id_day='".$j."'
  and id_para='".$i."'
  and id_nedel='".$nedel."'
  and id_aud='".$aud_id."'";
 $qu=mssql_query($sq,$link);
 $re=mssql_fetch_array($qu);
 $kolplan=$re['kol'];
 if($kolplan>0) $strbussy .=' /auditoriya zanyata/ ';
}

if($kolplan==0){
 $sq="select count(id) as kol
 from raspis_baza
 where
  id_day='".$j."'
  and id_para='".$i."'
  and id_nedel='".$nedel."'
  and id_ych_plan='".$r_id."'";
 $qu=mssql_query($sq,$link);
 $re=mssql_fetch_array($qu);
 $kolplan=$re['kol'];
 if($kolplan>0) $strbussy .=' /prepodavatel zanyat/ ';
}
// проверка на одинаковость_конец

$sq="select max(k) as k,max(st) as st,max(gr) as gr,max(pgr) as pgr from raspis_ych_plan where k='".$r_k."'";
$qu=mssql_query($sq,$link);
$re=mssql_fetch_array($qu);

$sq1="select kol_mest from raspis_aud_fond where id_aud_fond='".$aud_id."'";
$qu1=mssql_query($sq1,$link);
$re1=mssql_fetch_array($qu1);
$str1='';$str2='';
$clr='000000';
$statusred='';

if($r_gr!='0'){ $kolst=floor($re['st']/$re['gr'])+1;}else $kolst=$re['st'];
if($kolplan>0) { // имеется совпадения
   $clr="color=ff0000";
   $strbussy .=' /sovpadenie plana/ ';
}
if($strbussy!='') $strbussy .=$strbussydop.'<br>';
echo "<font size=-2 ".$clr.">";
       echo $strbussy;
echo "</font>";

//if(trim($re['k'])!='')         $str2=''.$re['k'].';';
//$str1=$str1.$str2;$str2='';
if(trim($re['st'])!='')                 $str2=" ".$kolst." students;";
$str1=$str1.$str2;$str2='';
//if(trim($r_gr)!='0')         $str2= " ".$r_gr.' group;';
//$str1=$str1.$str2;$str2='';
if(trim($r_pgr)!='')         $str2= " ".$r_pgr.' subgroup;';
$str1.=$str2;
echo substr($str1,0,strlen($str1)-1);

?>