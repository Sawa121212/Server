<?
include('../../login/conn_php.php');
//include('../../login/secury.php');
//79278453378 - Tihonov S.
//89373721395 - Pavlov V.S.
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<head>
        <meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
        <meta http-equiv="Content-Language" content="ru">
        <meta content="text/css">
        <META HTTP-EQUIV="Expires" CONTENT="0">
        <LINK href="../../css/main.css" rel="stylesheet" type="text/css">
        <title>Создание расписания</title>
</head>
<html>

<script language="JavaScript">

function sendquery(c)
{
                if(c==1) var url="aj_rasp_aud.php?aud_id="+raspisa.raud.value+"&r_id="+raspisa.rid.value+"&potok="+raspisa.potok.value+"&i="+raspisa.i.value+"&j="+raspisa.j.value+"&nedel="+raspisa.nedel.value;
                if(c==2) var url="aj_rasp_gr.php?potok="+raspisa.potok.value+"&r_id="+raspisa.rid.value+"&aud_id="+raspisa.raud.value+"&i="+raspisa.i.value+"&j="+raspisa.j.value+"&nedel="+raspisa.nedel.value+"&fs="+raspisa.fs.value;
                raspisa.idpr.value=c;

             if (window.XMLHttpRequest)
               {
                    req = new XMLHttpRequest();
               }
               else if (window.ActiveXObject)
               {
                    req = new ActiveXObject("Microsoft.XMLHTTP");
               }
            if (req)
               {
                    req.onreadystatechange = onResponseReady;
                    req.open("GET", url, true);
                    req.send();
               }
}
function onResponseReady()
{
        if(req.readyState == 4)
        {
            if(req.status==200)
            {
                var response = req.responseText;
                var result = response.toString();
                if(raspisa.idpr.value==2) document.getElementById('blockgr').innerHTML=result;
                if(raspisa.idpr.value==1){ document.getElementById('blockaud').innerHTML=result; raspisa.idpr.value=2;sendquery(2);}
           }
       }

}
function subm(newt){
raspisa['newt'].value=newt;
raspisa.submit();
};

</script>

<?
echo "<body><form name='raspisa' method='post'>";
if(isset($_POST['newt'])){$newt=$_POST['newt'];}else $newt='0';
if(isset($_GET['i'])){$i=$_GET['i'];}else $i='0';
if(isset($_GET['j'])){$j=$_GET['j'];}else $j='0';
if(isset($_GET['id'])){$id=$_GET['id'];}else $id='0';
if(isset($_GET['n'])){$nedel=$_GET['n'];}else $nedel='0';
if(isset($_GET['csp'])){$csp=$_GET['csp'];}else $csp='0';
if(isset($_GET['fs'])){$fs=$_GET['fs'];}else $fs='0';
if(isset($_GET['course'])){$course=$_GET['course'];}else $course='0';
if(isset($_GET['sem'])){$sem=$_GET['sem'];}else $sem='0';

if (isset($_POST['rtip'])){$rtip=$_POST['rtip'];}else{$rtip='';};
if (isset($_POST['raud'])){$raud=$_POST['raud'];}else{$raud='';};
if (isset($_POST['potok'])){$potok=$_POST['potok'];}else{$potok='';};
if (isset($_POST['potok1'])){$potok1=$_POST['potok1'];}else{$potok1='';};
if (isset($_POST['fio1'])){$fio1=$_POST['fio1'];}else $fio1='';
if (isset($_POST['subject'])){$subject=$_POST['subject'];}else $subject='';
if (isset($_POST['kolwo1'])){$kol=$_POST['kolwo1'];}else $kol='0';

if ($id=='0'||$id=='') if(isset($_POST['rid'])){$id=$_POST['rid'];}else{$id='0';};
if ($i=='0') if(isset($_POST['i'])){$i=$_POST['i'];}else $i='0';
if ($j=='0') if(isset($_POST['j'])){$j=$_POST['j'];}else $j='0';
if ($nedel=='0') if(isset($_POST['nedel'])){$nedel=$_POST['nedel'];}else $nedel='0';
if ($sem=='0') if(isset($_POST['sem'])){$sem=$_POST['sem'];}else $sem='0';

$fstr='';
if($fs==1) $fstr='д';
if($fs==2) $fstr='з';
if($fs==3) $fstr='в';
if($fs==4) $fstr='зс';
if($fs==5) $fstr='звв';
if($fs==11) $fstr='дэ';
if($fs==31) $fstr='вэ';

include_once('../../login/raspis_config.php');

$r=explode("-", $potok);
$r_k=$r[0].'-'.$r[1];
if($r[0]=='') $r_k='';
$r_gr=$r[0];
$r_pgr=$r[1];
if($r_gr=='') $r_gr='0';
if($r_pgr=='') $r_pgr='0';

$r1=explode("-", $potok1);
$r_kurs1=$r1[1];
$r_k1=$r1[0].'-'.$r1[1];
if($r1[0]=='') $r_k1='';
$r_gr1=$r1[2];
$r_pgr1=$r1[3];
if($r_gr1=='') $r_gr1='0';
if($r_pgr1=='') $r_pgr1='0';


echo "<input type='hidden' name='newt' value='".$newt."'>";
echo "<input type='hidden' name='i' value='".$i."'>";
echo "<input type='hidden' name='j' value='".$j."'>";
echo "<input type='hidden' name='nedel' value='".$nedel."'>";
echo "<input type='hidden' name='rid' value='".$id."'>";
echo "<input type='hidden' name='fs' value='".$fs."'>";
echo "<input type='hidden' name='idpr' value=''>";
echo "<input type='hidden' name='sem' value='".$sem."'>";

$nedel1=$nedel;
$nedel2allsem='';

//echo '.'.$fs.'.';
//if(date('m.Y')=='3.2010')echo "<font color=red size=+2>Прошу проверить на блокировку у очников и заочников, и на норм.ввода расписания ! !</font>";
//echo "<font color=red size=+2>Идут техн. работы ! !</font>";
if($fs==1||$fs==3){
$odd='';
if($nedel==1) $odd="and raspis_dat_ych.odd='*'";
if($nedel==2) $odd="and raspis_dat_ych.odd='**'";
 $sql="select top 1 raspis_dat_ych.nom as nom
from raspis_dat_ych,raspis_ych_plan
where
(raspis_dat_ych.dat>=raspis_ych_plan.start and raspis_dat_ych.dat<=raspis_ych_plan.[end])
".$odd."
and raspis_ych_plan.id='".$id."'";
 $que=mssql_query($sql,$link);
 $rez=mssql_fetch_array($que);
 $nedel1=$rez['nom'];

           if($nedel==1){ $nedel2allsem=1; }
           if($nedel==2){ $nedel2allsem=2; }
           if($nedel==3){ $nedel2allsem=3; }

      if($nedel1>1) {$nedel=$nedel1;}
     // echo $nedel.'-'.$nedel1.'-'.$nedel2allsem;
}
 //echo $nedel.'-'.$nedel1.'-'.$nedel2allsem.'-'.$r_k;

if($newt=='0'){
$week=array('Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье');
echo  "<h2>Создать расписание на: <ins>";
$sql="select RTRIM(fio1) as fio1, RTRIM(fio2) as fio2, rtrim(subject) as subject from ".$table_ych_plan." where id=".$id;
$que=mssql_query($sql,$link);
$rez=mssql_fetch_array($que);
$fioall=$rez['fio1'];//." ".$rez['fio2'];
$fio1=$rez['fio1']; $fio2=$rez['fio2']; $subject=$rez['subject'];
echo $week[$j].' '.$i.' пару для '.$fioall.'</ins>';
echo "</h2>";
echo "<input type='hidden' name='fio1' value='".$fio1."'>";
echo "<input type='hidden' name='subject' value='".$subject."'>";
echo  "<table width='100%' border='0' cellspacing='0' cellpadding='1' class='tabl1'>";
echo  "<tr><td colspan='2'>&nbsp;</td></tr>";
//                                                 Тип занятия
$sq="select name,id from raspis_zan_tip order by id";
$qu=mssql_query($sq,$link);
echo  "<tr><td align='right'>";
echo  "&nbsp;Тип занятия:&nbsp;";
echo  "</td><td align='left'><select name='rtip' onchange=subm(0)><option value=''>...</option>";
while($re=mssql_fetch_array($qu))
        if($re['id']==$rtip){echo "<option selected value='".$re['id']."'>".$re['name']."</option>";}else
                echo "<option value='".$re['id']."'>".$re['name']."</option>";
echo  "</select></td></tr>";

//                                                 КурсФО-ФакПоток-Группа #1
$sql="select distinct k
 from ".$table_ych_plan."
 where k='".trim($csp)."-".$course.$fstr."'
 order by k";
echo  "<tr><td align='right'>";
echo  "&nbsp;КурсФО-ФакПоток-Группа-Подгруппа:&nbsp;";
echo  "</td><td align='left'><select name='potok' onchange=subm(0);><option value=''>...</option>";
$rest = mssql_query($sql, $link);
if($rtip!='')
 while ($row = mssql_fetch_array($rest)) {
        $sq="select max(gr) as grmax, max(pgr) as pgrmax from ".$table_ych_plan." where k='".$row['k']."'";
        $qu=mssql_query($sq,$link);
        $re=mssql_fetch_array($qu);
        $grmax=$re['grmax'];
        $pgrmax=ceil($re['pgrmax']/$grmax);
        if("0-0"==$potok){ echo "<option selected value='0-0'>".$row["k"]."</option>";}else echo "<option value='0-0'>".$row["k"]."</option>";
 if($rtip!='1')
  for($ik=1;$ik<=$grmax;$ik++)
      if($rtip=='3'){
       for($jk=1;$jk<=$pgrmax;$jk++)
           if(($ik.'-'.$jk)==$potok) {echo "<option selected value='".$ik."-".$jk."'>" . $row["k"].'-'.$ik.'-'.$jk. "</option>";
           }else echo "<option value='".$ik."-".$jk."'>" . $row["k"].'-'.$ik.'-'.$jk."</option>";
      }else{
           if(($ik."-0")==$potok) {echo "<option selected value='".$ik."-0'>" . $row["k"].'-'.$ik. "</option>";
           }else echo "<option value='".$ik."-0'>" . $row["k"].'-'.$ik."</option>";
       if($rtip=='4'||$rtip=='5')
        for($jk=1;$jk<=$pgrmax;$jk++)
           if(($ik."-".$jk)==$potok) {echo "<option selected value='".$ik."-".$jk."'>" . $row["k"].'-'.$ik.'-'.$jk. "</option>";
           }else echo "<option value='".$ik."-".$jk."'>" . $row["k"].'-'.$ik.'-'.$jk."</option>";
      }
 };
echo  "</select><br><div id=blockgr>";
###############################################################################################################
####                   ПОИСК СОВПАДЕНИЯ ПЛАНА_begin
###############################################################################################################
$strbussy='';
$strbussydop='';

// проверка на одинаковость_начало
// $nedel1=fmod($nedel,2); if($nedel1==0) {$nedel1=2;}else $nedel1=1;
$sq="select count(id_ych_plan) as kol,id_ych_plan
 from raspis_baza
 where
  id_day='".$j."'
  and id_para='".$i."'
  and id_nedel='".$nedel."'
  GROUP BY id_ych_plan";
$qu=mssql_query($sq,$link);
$re=mssql_fetch_array($qu);
$kolplan=$re['kol'];
if($kolplan==1){
  $sq1="select (subject+' - '+fio1+' '+fio2) as ych from raspis_ych_plan where id='".$re['id_ych_plan']."'";
  $qu1=mssql_query($sq1,$link);
  $re1=mssql_fetch_array($qu1);
  $strbussydop=' /'.$re1['ych'].'/ ';
}
if($kolplan>0) $strbussy .=' /группа занята/ ';

 $sq="select count(id) as kol
 from raspis_baza
 where
  id_day='".$j."'
  and id_para='".$i."'
  and id_nedel='".$nedel."'
  and id_aud_fond='".$aud_id."'";
 $qu=mssql_query($sq,$link);
 $re=mssql_fetch_array($qu);
 $kolplan=$re['kol'];
 if($kolplan>0) $strbussy .=' /аудитория занята/ ';

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
 if($kolplan>0) $strbussy .=' /преподаватель занят/ ';
// проверка на одинаковость_конец

$sq="select max(k) as k,max(st) as st,max(gr) as gr,max(pgr) as pgr from raspis_ych_plan where k='".$csp."-".$course.$fstr."'";
//echo $sq;
$qu=mssql_query($sq,$link);
$re=mssql_fetch_array($qu);

$sq1="select kol_mest from raspis_aud_fond where id_aud_fond='".$aud_id."'";
$qu1=mssql_query($sq1,$link);
$re1=mssql_fetch_array($qu1);
$str1='';$str2='';
$clr='color=000000';
$statusred='';
$plan_err='';

if($r_gr!='0'&&$r_gr!=''){ $kolst=ceil($re['st']/$re['gr']);}else $kolst=$re['st'];
if($r_pgr!='0'&&$r_pgr!=''){ $kolst=ceil($re['st']/$re['pgr']);}
if($kolplan>0) { // имеется совпадения
   $clr="color=ff0000";
   $strbussy .=' /совпадение плана/ ';
}
if($strbussy!='') $strbussy .=$strbussydop.'<br>';
$plan_err  = "<font size=-2 ".$clr.">";
$plan_err .= $strbussy;
$plan_err .= "</font>";

//if(trim($re['k'])!='')         $str2=''.$re['k'].';';
//$str1=$str1.$str2;$str2='';
if(trim($re['st'])!='')                 $str2=" ".$kolst." студ.;";
$str1=$str1.$str2;$str2='';
if(trim($r_gr)!=''&&trim($r_gr)!='0')         $str2= " ".$r_gr.' гр.;';
$str1=$str1.$str2;$str2='';
if(trim($r_pgr)!='')         $str2= " ".$r_pgr.' подгр.;';
$str1.=$str2;
$plan_err .= substr($str1,0,strlen($str1)-1);
echo $plan_err;
###############################################################################################################
####                   ПОИСК СОВПАДЕНИЯ ПЛАНА_end
###############################################################################################################
echo "</div></td></tr>";
//////////////////////////////////////////////////////        КурсФО-ФакПоток-Группа #2
if($rtip==1) $sql="select distinct lek_pot as pot from ".$table_ych_plan." where ".$table_ych_plan.".id='".$id."' and lek_pot is not null and rtrim(lek_pot)<>''";
if($rtip==2) $sql="select distinct prak_pot as pot from ".$table_ych_plan." where ".$table_ych_plan.".id='".$id."' and prak_pot is not null and rtrim(prak_pot)<>''";
if($rtip==3) $sql="select distinct lab_pot as pot from ".$table_ych_plan." where ".$table_ych_plan.".id='".$id."' and lab_pot is not null and rtrim(lab_pot)<>''";
$rest=mssql_query($sql,$link);
echo  "<tr><td align='right'>";
echo  "&nbsp;в потоке с:&nbsp;";
//echo "<font color=red>Просьба пока в поток не ставить.</font>";
echo  "</td><td align='left'>";
if($rtip!='')
 $row = mssql_fetch_array($rest);

      $r2=explode(" ", $row['pot']);
      $kol=count($r2);
      echo "<input type=hidden name=kolwo1 value='".$kol."'>";
      for($in=0;$in<=($kol-1);$in++) if(trim($r2[$in])!=''){  /// cycle_begin
       echo "<select name='potok".($in+1)."'><option value=''>...</option>";
        $sq="select max(gr) as grmax, max(pgr) as pgrmax from ".$table_ych_plan." where k='".$r2[$in]."'";
        $qu=mssql_query($sq,$link);
        $re=mssql_fetch_array($qu);
        $grmax=$re['grmax'];
        $pgrmax=ceil($re['pgrmax']/$grmax);
        echo "<option value='".$r2[$in]."-0-0'>".$r2[$in]."</option>";
 if($rtip!='1')
  for($ik=1;$ik<=$grmax;$ik++)
      if($rtip=='3'){
        for($jk=1;$jk<=$pgrmax;$jk++) echo "<option value='".$r2[$in]."-".$ik."-".$jk."'>" . $r2[$in]."-".$ik."-".$jk."</option>";
      }else{
        echo "<option value='".$r2[$in]."-".$ik."-0'>" . $r2[$in].'-'.$ik."</option>";
       if($rtip=='4'||$rtip=='5')
        for($jk=1;$jk<=$pgrmax;$jk++)
          echo "<option value='".$r2[$in]."-".$ik."-".$jk."'>" . $r2[$in].'-'.$ik.'-'.$jk."</option>";
      }
     echo  "</select><br>";
      } /// cycle_end

echo "<div id=blockgr></div></td></tr>";
//////////////////////////////////////////////////////    Аудитория
$sq="select n_aud,id_aud_fond
from raspis_aud_fond
where
id_aud_fond not in
(select distinct id_aud_fond from raspis_baza where id_day='".$j."' and id_nedel='".$nedel."' and id_para='".$i."')
or id_aud_fond=74 or id_aud_fond=75 or id_aud_fond=86 or id_aud_fond=87 or id_aud_fond=88
order by korpus,n_aud";       // выборка незанятых удиторий, Спартак и манеж выводим в любом случае
//echo $sq;
$qu=mssql_query($sq,$link);
echo  "<tr><td align='right'>";
echo  "&nbsp;Аудитория:&nbsp;";
echo  "</td><td align='left'><select name='raud' onchange=sendquery(1)><option value=''>...</option>";
while($re=mssql_fetch_array($qu))
  if(trim($re['n_aud'])!='')
   if($re['id_aud_fond']==$raud){ echo "<option selected value='".$re['id_aud_fond']."'>".$re['n_aud']."</option>";}else
           echo "<option value='".$re['id_aud_fond']."'>".$re['n_aud']."</option>";
echo  "</select><br><div id='blockaud'></div></td></tr>";

echo "<tr><td>&nbsp;<td>&nbsp;</tr>";
echo "<tr><td align=right><input type=button onclick=subm(1) value='Далее'> ";
echo "<td><input type=button onclick=\"window.opener.subm2(".$id.");window.close();\" value='Отмена'></tr>";
};

if($newt=='1'){
        echo "<input type='hidden' name=rtip value='".$rtip."'>";
        echo "<input type='hidden' name=potok value='".$potok."'>";
        echo "<input type='hidden' name=potok1 value='".$potok1."'>";
        echo "<input type='hidden' name=raud value='".$raud."'>";
        echo "<center>Обновление базы, подождите ... ";
        echo "<img src='progress.gif'></center>";
        //echo $potok.'....'.$potok1;
  if($id!='0'){
   if($rtip!=''){
   if(trim($potok)!=''){
   if($raud!=''){
		   $sql0_dop=''; // для дневников и вечерников а для остальных переменная будет пустая
           if($nedel2allsem==3) $sql0_dop=" or raspis_baza.id_nedel in(
			select id_nedel from raspis_baza where id_day='".$j."' and id_para='".$i."' and id_aud_fond='".$raud."' and id_nedel in
			(
			select distinct raspis_dat_ych.nom 
			from raspis_ych_plan,raspis_dat_ych 
			where raspis_dat_ych.dat>=raspis_ych_plan.start 
			and raspis_dat_ych.dat<=raspis_ych_plan.[end] 
			and raspis_ych_plan.id='".$id."'
			)
		   )";
           if($nedel2allsem==1) $sql0_dop=" or raspis_baza.id_nedel in(
			select id_nedel from raspis_baza where id_day='".$j."' and id_para='".$i."' and id_aud_fond='".$raud."' and id_nedel in
			(
			select distinct raspis_dat_ych.nom 
			from raspis_ych_plan,raspis_dat_ych 
			where raspis_dat_ych.dat>=raspis_ych_plan.start 
			and raspis_dat_ych.dat<=raspis_ych_plan.[end] 
			and raspis_ych_plan.id='".$id."'
			and raspis_dat_ych.odd='*'
			)
		   )";
           if($nedel2allsem==2) $sql0_dop=" or raspis_baza.id_nedel in(
			select id_nedel from raspis_baza where id_day='".$j."' and id_para='".$i."' and id_aud_fond='".$raud."' and id_nedel in
			(
			select distinct raspis_dat_ych.nom 
			from raspis_ych_plan,raspis_dat_ych 
			where raspis_dat_ych.dat>=raspis_ych_plan.start 
			and raspis_dat_ych.dat<=raspis_ych_plan.[end] 
			and raspis_ych_plan.id='".$id."'
			and raspis_dat_ych.odd='**'
			)
		   )";   
      $sql="select raspis_baza.r_k as r_k,raspis_baza.r_gr as r_gr,raspis_baza.r_pgr as r_pgr,raspis_ych_plan.fio1 as fio1,raspis_ych_plan.subject as subject
       from raspis_baza,raspis_ych_plan
       where (raspis_baza.id_nedel='".$nedel."' ".$sql0_dop.") and raspis_baza.id_day='".$j."' and raspis_baza.id_para='".$i."'
      and raspis_baza.id_ych_plan=raspis_ych_plan.id
and
raspis_baza.r_k='".$csp."-".$course.$fstr."'
and(
(
 raspis_baza.r_gr='".($r_gr+0)."'
 and raspis_baza.r_pgr='".($r_pgr+0)."'
)
or(
 raspis_baza.r_gr=0
 and raspis_baza.r_pgr=0
)
or(
 raspis_baza.r_gr='".($r_gr+0)."'
 and raspis_baza.r_pgr=0
)
or(
 '".($r_gr+0)."'=0 and '".($r_pgr+0)."'=0
)
)       ";// защита групп  //       and r_k='".$csp."-".$course.$fstr."' and (r_gr='".($r_gr+0)."' and r_pgr='".($r_pgr+0)."')
     // echo $sql;
      $que1=mssql_query($sql,$link);
      $sql="select raspis_baza.r_k as r_k,raspis_baza.r_gr as r_gr,raspis_baza.r_pgr as r_pgr,raspis_ych_plan.fio1 as fio1,raspis_ych_plan.subject as subject
      from raspis_baza,raspis_ych_plan
      where raspis_baza.id_ych_plan=raspis_ych_plan.id
      and (raspis_baza.id_nedel='".$nedel."' ".$sql0_dop.") and raspis_baza.id_day='".$j."' and raspis_baza.id_para='".$i."' and raspis_baza.id_aud_fond='".$raud."'";// защита аудиторий
      $que2=mssql_query($sql,$link);
      $sql="select raspis_baza.r_k as r_k,raspis_baza.r_gr as r_gr,raspis_baza.r_pgr as r_pgr,raspis_ych_plan.fio1 as fio1,raspis_ych_plan.subject as subject
      from raspis_baza,raspis_ych_plan
      where raspis_baza.id_ych_plan=raspis_ych_plan.id
      and (raspis_baza.id_nedel='".$nedel."' ".$sql0_dop.") and raspis_baza.id_day='".$j."' and raspis_baza.id_para='".$i."' and raspis_ych_plan.fio1='".$fio1."'";// защита преподавателей
      $que3=mssql_query($sql,$link);

      $strq1='';$strq2='';$strq2='';
      $erra1='';$erra2='';$erra3='';
      $strq11='';$strq12='';$strq12='';
      $erra11='';$erra12='';$erra13='';
      $iq=0; // защита на блокировку

      // $kol - кол-во параллельных возможных потоков
   if(trim($kol)!=''&&$kol!='0'&&$kol!=0){
      for($in=0;$in<=($kol-1);$in++){  /// cycle_potok2_begin
        if (isset($_POST['potok'.($in+1)])){$potok1=$_POST['potok'.($in+1)];}else{$potok1='';};
        if(trim($potok1)!=''){   // open_potok2
         $r3=explode("-", $potok1);
         $r_k3=$r3[0].'-'.$r3[1];
         if($r3[0]=='') $r_k3='';
         $r_gr3=$r3[2];
         $r_pgr3=$r3[3];
         if($r_gr3=='') $r_gr3='0';
         if($r_pgr3=='') $r_pgr3='0';

      $sql="select raspis_baza.r_k as r_k,raspis_baza.r_gr as r_gr,raspis_baza.r_pgr as r_pgr,raspis_ych_plan.fio1 as fio1,raspis_ych_plan.subject as subject
      from raspis_baza,raspis_ych_plan
      where raspis_baza.id_ych_plan=raspis_ych_plan.id
  and
raspis_baza.r_k='".$r_k3."'
and(
(
 raspis_baza.r_gr='".($r_gr3+0)."'
 and raspis_baza.r_pgr='".($r_pgr3+0)."'
)
or(
 raspis_baza.r_gr=0
 and raspis_baza.r_pgr=0
)
or(
 raspis_baza.r_gr='".($r_gr3+0)."'
 and raspis_baza.r_pgr=0
)
or(
 '".($r_gr3+0)."'=0 and '".($r_pgr3+0)."'=0
)
)
      and (id_nedel='".$nedel."' ".$sql0_dop.") and id_day='".$j."' and id_para='".$i."'";// защита групп
      $que11=mssql_query($sql,$link);
      $sql="select raspis_baza.r_k as r_k,raspis_baza.r_gr as r_gr,raspis_baza.r_pgr as r_pgr,raspis_ych_plan.fio1 as fio1,raspis_ych_plan.subject as subject
      from raspis_baza,raspis_ych_plan
      where raspis_baza.id_ych_plan=raspis_ych_plan.id
      and (id_nedel='".$nedel."' ".$sql0_dop.") and id_day='".$j."' and id_para='".$i."' and id_aud_fond='".$raud."'";// защита аудиторий
      $que12=mssql_query($sql,$link);
      $sql="select raspis_baza.r_k as r_k,raspis_baza.r_gr as r_gr,raspis_baza.r_pgr as r_pgr,raspis_ych_plan.fio1 as fio1,raspis_ych_plan.subject as subject
      from raspis_baza,raspis_ych_plan
      where raspis_baza.id_ych_plan=raspis_ych_plan.id
      and (id_nedel='".$nedel."' ".$sql0_dop.") and id_day='".$j."' and id_para='".$i."' and raspis_ych_plan.fio1='".$fio1."'";// защита преподавателей
      $que13=mssql_query($sql,$link);

      while($rez=mssql_fetch_array($que11)){
        if($rez['r_gr']!='0') $grpgr=$rez['r_gr'].' гр.,';
        if($rez['r_pgr']!='0') $grpgr .=' '.$rez['r_pgr'].' подгр.,';
        $strq11 =$rez['r_k'].','.$grpgr.' '.$rez['subject'].'('.$rez['fio1'].'); ';
        $iq++;
        $erra11 ='группу';
      }
      while($rez=mssql_fetch_array($que12)){
        if($rez['r_gr']!='0') $grpgr=$rez['r_gr'].' гр.,';
        if($rez['r_pgr']!='0') $grpgr .=' '.$rez['r_pgr'].' подгр.,';
        $strq12 =$rez['r_k'].','.$grpgr.' '.$rez['subject'].'('.$rez['fio1'].'); ';
        $iq++;
        $erra12 ='аудиторию';
      }
      while($rez=mssql_fetch_array($que13)){
        if($rez['r_gr']!='0') $grpgr=$rez['r_gr'].' гр.,';
        if($rez['r_pgr']!='0') $grpgr .=' '.$rez['r_pgr'].' подгр.,';
        $strq13 =$rez['r_k'].','.$grpgr.' '.$rez['subject'].'('.$rez['fio1'].'); ';
        $iq++;
        $erra13 ='преподавателя';
      }
      }                           // close_potok2
       }  /// cycle_potok2_end
   }
      while($rez=mssql_fetch_array($que1)){
        if($rez['r_gr']!='0') $grpgr=$rez['r_gr'].' гр.,';
        if($rez['r_pgr']!='0') $grpgr .=' '.$rez['r_pgr'].' подгр.,';
        $strq1 =$rez['r_k'].','.$grpgr.' '.$rez['subject'].'('.$rez['fio1'].'); ';
        $iq++;
        $erra1 ='группу';
      }
      while($rez=mssql_fetch_array($que2)){
        if($rez['r_gr']!='0') $grpgr=$rez['r_gr'].' гр.,';
        if($rez['r_pgr']!='0') $grpgr .=' '.$rez['r_pgr'].' подгр.,';
        $strq2 =$rez['r_k'].','.$grpgr.' '.$rez['subject'].'('.$rez['fio1'].'); ';
        $iq++;
        $erra2 ='аудиторию';
      }
      while($rez=mssql_fetch_array($que3)){
        if($rez['r_gr']!='0') $grpgr=$rez['r_gr'].' гр.,';
        if($rez['r_pgr']!='0') $grpgr .=' '.$rez['r_pgr'].' подгр.,';
        $strq3 =$rez['r_k'].','.$grpgr.' '.$rez['subject'].'('.$rez['fio1'].'); ';
        $iq++;
        $erra3 ='преподавателя';
      }
	  //echo $sql;
      if($raud==74||$raud==75||$raud==86) $iq=0; /////////////   Снятие блокировки с аудиторий манеж, спартак, ПОО
      if($iq==0){
        if($nedel2allsem!=''){     ////////  ОЧНИКАМ ввод расписание
           $sql="select distinct raspis_dat_ych.nom from raspis_ych_plan,raspis_dat_ych where raspis_dat_ych.dat>=raspis_ych_plan.start and raspis_dat_ych.dat<=raspis_ych_plan.[end] and raspis_ych_plan.id='".$id."'";
           if($nedel2allsem==1) $sql="select distinct raspis_dat_ych.nom from raspis_ych_plan,raspis_dat_ych where raspis_dat_ych.dat>=raspis_ych_plan.start and raspis_dat_ych.dat<=raspis_ych_plan.[end] and raspis_ych_plan.id='".$id."' and raspis_dat_ych.odd='*'";
           if($nedel2allsem==2) $sql="select distinct raspis_dat_ych.nom from raspis_ych_plan,raspis_dat_ych where raspis_dat_ych.dat>=raspis_ych_plan.start and raspis_dat_ych.dat<=raspis_ych_plan.[end] and raspis_ych_plan.id='".$id."' and raspis_dat_ych.odd='**'";
           $que=mssql_query($sql,$link);
           $ins2baza1=0;
           $ins2baza2=0;
           while($rez=mssql_fetch_array($que)){
             $sq="insert into raspis_baza (r_k,r_gr,r_pgr,id_aud_fond,id_ych_plan,id_zan_tip,id_day,id_nedel,id_para,fio1,subject) values('".$csp."-".$course.$fstr."','".$r_gr."','".$r_pgr."','".$raud."','".$id."','".$rtip."','".$j."','".$rez['nom']."','".$i."','".$fio1."','".$subject."')";
             $qu=mssql_query($sq,$link);
             if($qu) $ins2baza1++;

                  if($r_k1!=''){

      for($in=0;$in<=($kol-1);$in++){  /// cycle_begin
        if (isset($_POST['potok'.($in+1)])){$potok1=$_POST['potok'.($in+1)];}else{$potok1='';};
        if(trim($potok1)!=''){
         $r3=explode("-", $potok1);
         $r_k3=$r3[0].'-'.$r3[1];
         if($r3[0]=='') $r_k3='';
         $r_gr3=$r3[2];
         $r_pgr3=$r3[3];
         if($r_gr3=='') $r_gr3='0';
         if($r_pgr3=='') $r_pgr3='0';
                         $sql__="select distinct id from raspis_ych_plan where k='".$r_k3."' and subject='".$subject."' and fio1='".$fio1."' and s='".$sem."'";
                         $que__=mssql_query($sql__,$link);
                         $rez__=mssql_fetch_array($que__);
                       if($rez__['id']!=''){
                                    $sq__="insert into raspis_baza (r_k,r_gr,r_pgr,id_aud_fond,id_ych_plan,id_zan_tip,id_day,id_nedel,id_para,fio1,subject) values('".$r_k3."','".$r_gr3."','".$r_pgr3."','".$raud."','".$rez__['id']."','".$rtip."','".$j."','".$rez['nom']."','".$i."','".$fio1."','".$subject."')";
                                    $qu__=mssql_query($sq__,$link);
                                    if($qu__) $ins2baza2++;
                       }
        }
      } /// cycle_end
                  }

           }
         if($ins2baza1>0){
                echo "<script>
                alert('Внесение данных прошло успешно. Кол-во недель: ".$ins2baza1.", в потоке недель: ".$ins2baza2."');
                window.opener.subm2(".$id.");
                window.close();
                </script>";
         }else{
                echo "<script>
                alert('Ошибка! Данные не внеслись, обратитесь в службу поддержки.');
                window.opener.subm2(".$id.");
                window.close();
                </script>";
         }
        }else{           ////////  ЗАОЧНИКАМ ввод расписание
         $sq="insert into raspis_baza (r_k,r_gr,r_pgr,id_aud_fond,id_ych_plan,id_zan_tip,id_day,id_nedel,id_para,fio1,subject) values('".$csp."-".$course.$fstr."','".$r_gr."','".$r_pgr."','".$raud."','".$id."','".$rtip."','".$j."','".$nedel."','".$i."','".$fio1."','".$subject."')";
         $qu1=mssql_query($sq,$link);
         $qu__1=1;

                  if($r_k1!=''){     // create parallel potoks
      for($in=0;$in<=($kol-1);$in++){  /// cycle_begin
        if (isset($_POST['potok'.($in+1)])){$potok1=$_POST['potok'.($in+1)];}else{$potok1='';};
        if(trim($potok1)!=''){
         $r3=explode("-", $potok1);
         $r_k3=$r3[0].'-'.$r3[1];
         if($r3[0]=='') $r_k3='';
         $r_gr3=$r3[2];
         $r_pgr3=$r3[3];
         if($r_gr3=='') $r_gr3='0';
         if($r_pgr3=='') $r_pgr3='0';
                         $sql__="select distinct id from raspis_ych_plan where k='".$r_k3."' and subject='".$subject."' and fio1='".$fio1."' and s='".$sem."'";
                         $que__=mssql_query($sql__,$link);
                         $rez__=mssql_fetch_array($que__);
                       if($rez__['id']!=''){
                                    $sq__="insert into raspis_baza (r_k,r_gr,r_pgr,id_aud_fond,id_ych_plan,id_zan_tip,id_day,id_nedel,id_para,fio1,subject) values('".$r_k3."','".$r_gr3."','".$r_pgr3."','".$raud."','".$rez__['id']."','".$rtip."','".$j."','".$nedel."','".$i."','".$fio1."','".$subject."')";
                                    $qu__=mssql_query($sq__,$link);
                                    if($qu__) $ins2baza2++;
                       }
        }
      } /// cycle_end
                  }

         if($qu1&&$qu__1){
                echo "<script>
                alert('Внесение данных прошло успешно.');
                //window.returnValue='1';
                window.opener.subm2(".$id.");
                window.close();
                </script>";
         }else{
                echo "<script>
                alert('Ошибка! Данные не внеслись, обратитесь в службу поддержки.');
                //window.returnValue='1';
                window.opener.subm2(".$id.");
                window.close();
                </script>";
         }
        }
      }else{
        echo "<script>        ";
        if($erra1!='') echo "alert('Ошибка ввода на ".$erra1."! ".$strq1."');";
        if($erra2!='') echo "alert('Ошибка ввода на ".$erra2."! ".$strq2."');";
        if($erra3!='') echo "alert('Ошибка ввода на ".$erra3."! ".$strq3."');";
        if($erra11!='') echo "alert('Ошибка ввода на ".$erra11."! ".$strq11."');";
        if($erra12!='') echo "alert('Ошибка ввода на ".$erra12."! ".$strq12."');";
        if($erra13!='') echo "alert('Ошибка ввода на ".$erra13."! ".$strq13."');";
        echo "          subm('0'); </script>";
      };

   }else echo "<script>        alert('Аудитория не выбрана');                  subm('0'); </script>";
   }else echo "<script>        alert('Поток/Группа не выбрана');        subm('0'); </script>";
   }else echo "<script>        alert('Тип занятия не выбран');          subm('0'); </script>";
  }else {
        echo "<script>
                //if (window.showModalDialog(\"dialog_con_edt.html\", form, \"dialogWidth:400px; dialogHeight:200px; center:yes; status:0\")==1)
                alert('Ошибка! Неверный ID \"".$id."\", обратитесь в службу поддержки.');
                //window.returnValue='1';
                window.opener.subm2(".$id.");
                window.close();
        </script>";
  }
}
mssql_close($link);
?>
</form>
</body>
</html>