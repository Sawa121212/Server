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

    $deviceUser = get_current_user();
    $query = $link->query("SELECT * FROM tabels WHERE tabel  ='$deviceUser'");
    $data = $query->fetch(\PDO::FETCH_ASSOC);

    if ($data['first_connect'] == "false") {
        $_SESSION['guest_tabel'] = $data['tabel'];
        $_SESSION['guest_firstName'] = $data['first_name'];
        $_SESSION['guest_secondName'] = $data['second_name'];
        $_SESSION['guest_patronymic'] = $data['patronymic'];
        $_SESSION['guest_firstConnect'] = $data['first_connect'];
        $_SESSION['guest_FIO'] = $data['second_name'] . " " . $data['first_name'] . " " . $data['patronymic'];

        header('Location: ' . $folderRoot . 'hello.php');
        exit;
    }

    if (empty($data['first_connect'])) {
        header('Location: ' . $folderRoot . 'hello.php');
        exit;
    }
?>