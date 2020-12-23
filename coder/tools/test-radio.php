<!DOCTYPE html>
<html>
<head>
    <!--<link href="img/icon" rel="stylesheet">-->
	<!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="materialize/css/materialize.min.css" media="screen,projection"/>
    <link type="text/css" rel="stylesheet" href="materialize/css/style.css" media="screen,projection">

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>    

	
	<!--<meta http-equiv="Content-Type" content="text/html; charset=utf-8">-->
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
	<meta http-equiv="Content-Language" content="ru">	
	<meta content="text/css">	
	<META HTTP-EQUIV="Expires" CONTENT="0">	

  <title>Тест Radio</title>
</head>
<body>
<div class="container">
<?php
 echo "<input  onclick='subm2();'  type='radio' class='browser-default'> ";
 echo "<input  onclick='subm2();'  type='radio' class='browser-default'>";
 echo "<input  onclick='subm2();'  type='radio' class='browser-default'> ";

echo "<br><hr><br>";
$nedel = 1;

 echo "<label><input  onclick='subm2();'  type='radio' class='with-gap'";
                if ($nedel == 1) { echo "checked"; };
                echo " name ='nedel' value='1'><span>*&nbsp;&nbsp;&nbsp;</span></label>";

                echo "<label><input  onclick='subm2();'  type='radio' class='with-gap'";

                if ($nedel == 2) { echo "checked";};
                echo " name ='nedel' value='2'><span>**&nbsp;&nbsp;&nbsp;</span></label>";
                echo "<label><input  onclick='subm2();'  type='radio' class='with-gap'";

                if ($nedel == 3) { echo "checked";};
                echo " name ='nedel' value='3'><span>без звезд&nbsp;&nbsp;&nbsp;</span></label>";
 ?>
</div>
   <!--  Scripts-->
   <script src="materialize/js/jquery-2.1.1.min.js"></script>
  <script src="materialize/js/materialize.min-v2.js"></script>
  <script src="materialize/js/materialize.min.js"></script>
  <script src="materialize/js/init.js"></script>
  

  <div class="sidenav-overlay"></div><div class="drag-target"></div>

</body>
</html>