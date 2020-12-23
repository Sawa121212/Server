<?php
  //session_start(); 
?>
<?php 
# Соединямся с БД
$link = mysql_connect("localhost", "sa", "GodMode1997");
mysql_select_db("accounts", $link);//устанавливаем текущую активную базу данных ($database_name, $link_identifier)

if(!$link) echo 'Невозможно установить соединение с базой данных.';

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