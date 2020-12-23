<?
    $servername = "localhost\sqlexpress";
    $username = "sa";
    $password = "GodMode1997";

    $link = mssql_connect($servername,  $username,  $password);
    mssql_select_db("subd", $link);//устанавливаем текущую активную базу данных ($database_name, $link_identifier)
    if(!$link) echo 'Невозможно установить соединение с базой данных.';
?>