<?php
	session_start(); 
	require 'login/db.php';

include('login/conn_php.php');
?>
<html>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<head>
	<!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="materialize/css/materialize.min.css"  media="screen,projection"/>

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>    

	
	<!--<meta http-equiv="Content-Type" content="text/html; charset=utf-8">-->
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
	<meta http-equiv="Content-Language" content="ru">	
	<meta content="text/css">	
	<META HTTP-EQUIV="Expires" CONTENT="0">	
	<!--<LINK href="..\..\css\main.css" rel="stylesheet" type="text/css">-->
</head>
<body>
  <div class="container">
    <form method=post name=formq>
      <script language="JavaScript">

      function subm(op){
        formq['newt'].value=op;
        formq.submit();
      };
      </script>

      <?
      if (isset($_POST['fs'])) {  $fs = $_POST['fs'];} else $fs = '';
      if (isset($_POST['budj'])) {  $budj = $_POST['budj'];} else $budj = '';
      if (isset($_POST['newt'])) {  $newt = $_POST['newt'];} else $newt = '';

      echo "<input type=hidden name=newt value=''>";

      echo "Форма: <select name=fs onchange='subm(1);'><option></option>";
      $sql = "select id_fs,name from abit_fs order by id_fs";
      $que = mssql_query($sql, $link);
      while ($rez = mssql_fetch_array($que))
      {
        if ($rez['id_fs'] == $fs) { echo "<option selected value='" . $rez['id_fs'] . "'>" . $rez['name'] . "</option>";}
        else  echo "<option value='" . $rez['id_fs'] . "'>" . $rez['name'] . "</option>";
      }
      echo "</select>";
      echo " Бюджет/договор: <select name=budj onchange='subm(1);'><option></option>";
      $sql = "select distinct budjet from dist_test_logins group by budjet";
      $que = mssql_query($sql, $link);
      while ($rez = mssql_fetch_array($que))
      {
        if ($rez['budjet'] == $budj) {
          echo "<option selected value='" . $rez['budjet'] . "'>" . $rez['budjet'] . "</option>";
        } else
          echo "<option value='" . $rez['budjet'] . "'>" . $rez['budjet'] . "</option>";
      }
      echo "</select>";

      $kkol = 0;
      echo "<br>";
      $sql = "SELECT  distinct rtrim(ltrim(adress)) as adress
      FROM         dist_test_logins
      WHERE   
      budjet='" . $budj . "'
      and id_fs='" . $fs . "' 
      order by adress";
      $que = mssql_query($sql, $link);
      while ($rez = mssql_fetch_array($que))
      {
        $sql1 = "SELECT    count(dist_test_logins.fio)as kol
        FROM  dist_test_logins
        WHERE   
          dist_test_logins.budjet='" . $budj . "'
          and dist_test_logins.id_fs='" . $fs . "'
          and adress like '%" . $rez['adress'] . "%'";
        $que1 = mssql_query($sql1, $link);
        $rez1 = mssql_fetch_array($que1);
        $addr = $rez['adress'];
      //echo "<br>".$sql1."---".$rez1['kol'];
        if (trim($addr) == '')
        {
          $addr = '<small>Нет данных</small>';
          $kkol = $kkol + $rez1['kol'];
        } 
        else {  echo "<br><font size=+2>" . $addr . "</font> (<b>" . $rez1['kol'] . "</b>)";}
      }
      echo "<br><font size=+2><small>Нет данных</small></font> (<b>" . $kkol . "</b>)";

      ?>
    </form>
</div>

		<!--JavaScript at end of body for optimized loading-->
		<script type="text/javascript" src="materialize/js/materialize.min.js"></script>
</body>
</html>