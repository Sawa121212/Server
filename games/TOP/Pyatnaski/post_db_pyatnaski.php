<html>
        <head>
            <meta charset="utf-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1">			

            <title>Сохранение</title>
			<link rel="shortcut icon" type="image/png" href="../../images/kubok.png">
            <link rel="stylesheet" type="text/css" href="../../css/style.css">
            <link rel="stylesheet" type="text/css" href="../../css/button.css" />
            <link rel="stylesheet" type="text/css" href="../../css/button-warship.css"/>	
            <link rel="stylesheet" type="text/css" href="../../css/tablestyle.css"/>
            
            <!-- Bootstrap CSS -->
            <link href="../../css/bootstrap-4/bootstrap.min.css" rel="stylesheet">
            <link rel="stylesheet" type="text/css" href="../../css/zagalovokstyle.css" />

        </head>

<body>
    <div class="content-white">
    <br>
        <div class="header-h1 header-h1-dark">
            <h1>Сохранение результата</h1><br>
        </div>
        
        <div class="header-h1 header-h1-dark">
        <br/>
            <img align="center" src="../../images/kubok.jpg" width=250px height=300px alt="ПОЗДРАВЛЯЕМ!"><br/>
        
        <div class="header-h1 header-h1-dark">
            <a align="center" class="back_gamelist1" href="../../pyatnashki_css/pyatnashki_css.php">Назад</a><br/>
        </div>

<?php
$TESTMODE = true;

    $servername_lite = "localhost";
    $username_lite = "id8435427_god";// имя пользователя см. рис. 2 
    $password_lite = "GodMode";// пароль к БД, при необходимости его можно изменить см. рис. 2 
    $database_lite = "id8435427_topusers";// имя БД рис. 2 
    $db_table_lite = "toppyatnaski"; // имя таблицы с  которой будем работать  

    // Create connection
    $conn_add = mysqli_connect($servername_lite, $username_lite, $password_lite, $database_lite);

    // Check connection
    if (!$conn_add) {
        die("<span style='color: red;'>Не удалось подключиться к серверу: " . mysqli_connect_error()) . "</span><p></p>";
    } 
    else{
    echo "<span style='color: green;'>Успешное подключение к серверу</span><br/>";
    } 
    if (!$db_table_lite) {
        die("<span style='color: red;'>Не удалось подключиться к БД: " . mysqli_connect_error()) . "</span><p></p>";
    } 
    else{
    echo "<span style='color: green;'>Успешное подключение к БД</span><br/>";
    }

if($TESTMODE == true){ echo"Тестовый режим - АКТИВЕН!</br>"; var_dump($_POST);}

///////// 
     

    if(isset($_POST['add']))
    {
        //работа с массивом POST 
        $usernik_post = trim($_POST['usernik_lite']);
        $score_post = trim($_POST['score_lite']);
        $date_post = $_POST['date_lite'];
        $time_post = $_POST['time_lite'];

        if(empty($usernik_post) || empty($score_post)) 
        {
            echo "<br/><br/><span style='color: red;'> Ошибка! Проверьте свой логин и пароль!</span><br/>";
        }
        else
        {
            // создание строки запроса
            $mysqliquery = mysqli_query($conn_add, 
                "INSERT INTO toppyatnaski(usernik, score, date, time)
                VALUES ('$usernik_post', $score_post, '$date_post', '$time_post')
            ");

            // выполняем запрос
            $result = mysqli_query($conn_add, $mysqliquery); 
            if(!$result)
            {
                echo "<span style='color:blue;'>Данные добавлены.</span></br>";
                echo "<br/>Вы сохрнили свой результат под Именем - $usernik_post со счетом - $score_post<br/>";
                echo "Ваш результат будет учтен.<br/>";
            }
            else
            {
                echo "<span style='color:red;'>Ошибка! Данные не добавлены.</span></br>";
            }
            
        }

        // закрываем подключение
        mysqli_close($conn_add);
    }
?>
</div>        
</body>
</html>