<?php
	session_start(); 
	require 'login/db.php';
?>
<!DOCTYPE html>
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

  <title>Главная страница</title>
</head>
<body>
<div class="container ">
  <br>

<?php if ( isset ($_SESSION['logged_user']) ) : ?>
	Авторизован! <br/>
	Привет, <?php echo $_SESSION['logged_user']->login; ?>!<br/>
	<a href="account_logout.php">Выйти</a>

<?php else : ?>
  Вы не авторизованы<br/>
<a href="account_login.php">Авторизация</a>
<a href="account_signup.php">Регистрация</a>
<?php endif; ?>


</div>
  <!--  Scripts-->
  <script src="materialize/js/jquery-2.1.1.min.js"></script>
  <script src="materialize/js/materialize.min-v2.js"></script>
  <script src="materialize/js/materialize.min.js"></script>
  <script src="materialize/js/init.js"></script>
  <script src="materialize/js/plugins.min.js"></script>

</body></html>