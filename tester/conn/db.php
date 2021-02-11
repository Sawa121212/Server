<?php
    # Соединямся с БД
    $servername = "localhost";
    $username = "id8435427_sanek22cs";
    $password = "Sanek22cs";
    $database = "accounts";
    try {
        $link = new PDO("mysql:host=$servername;dbname=$database", $username, $password);

        // set the PDO error mode to exception
        $link->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //echo "Connected successfully";
    } catch (PDOException $e) {
        echo "Подключение не удалось: " . $e->getMessage();
    }
?>
