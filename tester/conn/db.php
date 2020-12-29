<?php
# Соединямся с БД
$link = mysqli_connect("localhost", "id8435427_sanek22cs", "Sanek22cs");
if (!$link) echo "Невозможно установить соединение с базой данных.";

$database = "accounts";
mysqli_select_db($link, $database); //устанавливаем текущую активную базу данных


//session_start();
?>