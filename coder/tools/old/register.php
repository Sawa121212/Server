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

	
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />

	<!--<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">-->
	<meta http-equiv="Content-Language" content="ru">	
	<meta content="text/css">	
	<META HTTP-EQUIV="Expires" CONTENT="0">	

  <title>Регистрация</title>
</head>
<body>
<?php
mysql_set_charset('utf8');

// Страница регситрации нового пользователя

require 'db.php';

if(isset($_POST['submit']))

{

    $err = array();

    # проверям логин
    if(!preg_match("/^[a-zA-Z0-9]+$/",$_POST['login']))
    {
        $err[] = "Логин может состоять только из букв английского алфавита и цифр";
    }

    
    if(strlen($_POST['login']) < 3 or strlen($_POST['login']) > 30)
    {
        $err[] = "Логин должен быть не меньше 3-х символов и не больше 30";
    }

    
    # проверяем, не сущестует ли пользователя с таким именем
    $query = mysql_query("SELECT COUNT(user_id) FROM users WHERE user_login='".mysql_real_escape_string($_POST['login'])."'");
    if(mysql_result($query, 0) > 0)
    {
        $err[] = "Пользователь с таким логином уже существует в базе данных";
    }

    

    # Если нет ошибок, то добавляем в БД нового пользователя
    if(count($err) == 0)
    {        
        $login = $_POST['login'];
     
        # Убераем лишние пробелы и делаем двойное шифрование
        $password = md5(md5(trim($_POST['password'])));

        mysql_query("INSERT INTO users SET user_login='".$login."', user_password='".$password."'");
        header("Location: login.php");
        exit();
    }
    else
    {
        print "<b>При регистрации произошли следующие ошибки:</b><br>";
        foreach($err AS $error)
        {
            print $error."<br>";
        }
    }
}
?>




<form method="POST">
Логин <input name="login" type="text"><br>
Пароль <input name="password" type="password"><br>
<input name="submit" type="submit" value="Зарегистрироваться">

</form>



  <!--  Scripts-->
  <script src="materialize/js/jquery-2.1.1.min.js"></script>
  <script src="materialize/js/materialize.min-v2.js"></script>
  <script src="materialize/js/materialize.min.js"></script>
  <script src="materialize/js/init.js"></script>
  <script src="materialize/js/plugins.min.js"></script>
  

  

<div class="sidenav-overlay"></div><div class="drag-target"></div>

</body></html>