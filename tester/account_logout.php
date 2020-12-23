<?php
  session_start(); 
?>
<?php
	require 'conn/db.php';
	unset($_SESSION['logged_user']);

	unset($_SESSION['second_name']);
	unset($_SESSION['first_name']);
	unset($_SESSION['patronymic']);
	unset($_SESSION['login']);
	unset($_SESSION['email']);
	$_SESSION['usertype'] = 4;
	$_SESSION['thema'] = 0;
	

	header('Location: index.php');
?>
