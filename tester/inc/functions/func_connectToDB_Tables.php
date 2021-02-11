<?php
    $questionsBase = "tables";
    //устанавливаем текущую активную базу данных
    try {
        $link = new PDO("mysql:host=$servername;dbname=$questionsBase", $username, $password);
        $link->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        echo "Подключение не удалось: " . $e->getMessage();
        exit();
    }
?>