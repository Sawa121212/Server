<?php
  //session_start();
//ini_set('error_reporting',E_ALL);
//ini_set('display_errors',1);
//ini_set('display_startup_errors',1);
?>
<?php
# Соединямся с БД
$link = mysqli_connect("localhost", "id8435427_sanek22cs", "Sanek22cs");
mysqli_select_db($link, "accounts");//устанавливаем текущую активную базу данных ($database_name, $link_identifier)

if(!$link) echo 'Невозможно установить соединение с базой данных.';
else echo "connected";

/*
	require 'libs/rb.php';
	R::setup( 'mysql:host=127.0.0.1;dbname=redbeen','sa', '' );

	if ( !R::testconnection() )
	{
		exit ('Невозможно установить соединение с базой данных.');
	}
*/
	//session_start();
?>