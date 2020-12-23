<?
header('Content-type: "text/html; charset=windows-1251"');

include('../../login/conn_php.php');
include_once('../../login/raspis_config.php');

$aud_id=$_GET['aud_id'];
$potok=$_GET['potok'];
$r_id=$_GET['r_id'];
$i=$_GET['i'];
$j=$_GET['j'];
$nedel=$_GET['nedel'];

$r=explode("_", $potok);
$r_k=$r[0];
$r_gr=$r[1];
$r_pgr=$r[2];
if($r_gr=='') $r_gr='0';

// проверка на одинаковость_начало
$sq="select id from raspis_baza where (r_k='".$r_k."' or id_aud_fond='".$aud_id."') and id_day='".$j."' and id_para='".$i."' and id_nedel='".$nedel."'";
$qu=mssql_query($sq,$link);
$kolplan=mssql_num_rows($qu);
// проверка на одинаковость_конец

$sq="select korpus,etaj,kol_mest,proektor,lab_obor from raspis_aud_fond where id_aud_fond='".$aud_id."'";
$qu=mssql_query($sq,$link);
$re=mssql_fetch_array($qu);
$sq1="select max(st) as st,max(gr) as gr,max(pgr) as pgr from raspis_ych_plan where k='".$r_k."'";
$qu1=mssql_query($sq1,$link);
$re1=mssql_fetch_array($qu1);
$str1='';$str2='';
$clr='';
$statusred='';

if($r_gr!='0'){ $kolst=round($re1['st']/$re1['gr']);}else $kolst=$re1['st'];

if($kolst>$re['kol_mest']) { //кол-во мест не удовлетворяется
   $clr="color=ff0000";
   $statusred='kol-vo mest ne ras4itano na group/subgroup<br>';
}
if($kolplan>0) { // имеется совпадения
   $clr="color=ff0000";
   $statusred='sovpadenie plana<br>';
}
echo "<font size=-2 ".$clr.">";
       echo $statusred;
echo "</font>";
if(trim($re['korpus'])!='')         $str2='korpus '.$re['korpus'].';';
$str1=$str1.$str2;$str2='';
if(trim($re['etaj'])!='')                 $str2=" ".$re['etaj']." etaj;";
$str1=$str1.$str2;$str2='';
if(trim($re['kol_mest'])!='')         $str2= " ".$re['kol_mest'].' mest;';
$str1=$str1.$str2;$str2='';
if(trim($re['proektor'])!='')         $str2= " projector:".$re['proektor'].';';
$str1=$str1.$str2;$str2='';
if(trim($re['lab_obor'])!='')         $str2= " laboratornoe oborudovanie:".$re['lab_obor'].';';
$str1.=$str2;
echo substr($str1,0,strlen($str1)-1);


/* raspis_baza table
id        int        Unchecked
r_k        nvarchar(20)        Checked
r_gr        int        Checked
r_pgr        int        Checked
id_aud_fond        int        Checked
id_ych_plan        int        Checked
id_zan_tip        int        Checked
id_day        int        Checked
id_nedel        int        Checked
id_para        int        Checked*/
?>