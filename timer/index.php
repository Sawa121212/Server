<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>Таймер обратного отсчета</title>

    <!-- Файлы CSS -->
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" />

    <!--[if lt IE 9]>
          <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->

    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Timer</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>

    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type='text/css' rel='stylesheet' href='../materialize/css/materialize.min.css' media='screen,projection' />
    <link rel="stylesheet" type="text/css" href="../qb/qb.css" media="all">

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />


    <!--<meta http-equiv="Content-Type" content="text/html; charset=utf-8">-->
    <meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
    <meta http-equiv="Content-Language" content="ru">
    <meta content="text/css">
    <META HTTP-EQUIV="Expires" CONTENT="0">



    <title>Таймер</title>
</head>

<body>
    <div class="conteiner center">
        <br>
        <div id="timer" class="vis">
            <h4 style="color: white;">До операции "Я дома" осталось:</h4><br>
            <script src="script.js"></script>
            <script src="timer.min.js"></script>
        </div>

    </div>
    <footer class="page-footer" style="background-color: #2b303a;">
        <div class="conteiner center">
            <h4>Таймер</h4>
            <br>

<!-------------==========================================================----------------------------->
<span style="color: gold; font-size: 45 px;"> <b>
    <a style="color:yellow;" link href="https://www.google.com/maps/dir/56.1026234,47.2619298/%D0%BA%D0%B2%D0%B2%D1%83/@50.2092085,34.1466564,5z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x40f04e4a43d6c1db:0x59f4106347fff965!2m2!1d38.9619748!2d45.0128657">
    Я тут был 25.08.2019 Всем привет !!!!!!!!!!!!!! -- Увал 1</a></b></span>
<br>
<span style="color: gold;"> <b><a style="color:gold; font-size: 20px;" link href="#">
    Я тут был 05.10.2019 Всем привет ! Cалам! -- Увал 4
</a></b></span><br>
<?php
        /*if (isset($_POST['do_signup']) )
        {
            if ( $_POST['password'] == '' ){ echo "<div id='errors' style='color:red;'><h5>Введите имя</h5></div>";}
            else
            {
                if ( $_POST['password'] == "tanya" || $_POST['password'] == "таня" ||
                    $_POST['password'] == "Tanya" || $_POST['password'] == "Таня")
                { 
                    echo "<a class='quickbox' href='img/tut.jpg' title='тут'>
                        <img src='' alt=''>Война
                    </a>";
                }
                else if ( $_POST['password'] == "dima" || $_POST['password'] == "дима" ||
                        $_POST['password'] == "Dima" || $_POST['password'] == "Дима" ||
                            $_POST['password'] == "pasha" || $_POST['password'] == "Паша" || $_POST['password'] == "Павел")
                { 
                    echo "<a class='quickbox' href='img/work.jpg' title='тут'>
                        <img src='' alt=''>Удачи на работе
                    </a>";
                }
                else if ( $_POST['password'] == "dima" || $_POST['password'] == "дима" ||
                        $_POST['password'] == "Dima" || $_POST['password'] == "Дима" ||
                            $_POST['password'] == "pasha" || $_POST['password'] == "Паша" || $_POST['password'] == "Павел")
                { 
                    echo "<a class='quickbox' href='img/medik.jpg' title='тут'>
                        <img src='' alt=''>Приветики! Удаачи в учебе!
                    </a>";
                }
                else if ( $_POST['password'] == "angela" || $_POST['password'] == "Анжела" ||
                $_POST['password'] == "Анжелика" || $_POST['password'] == "анжелика" )
                { 
                    echo "<a class='quickbox' href='img/klever.jpg' title='тут'>
                        <img src='' alt=''>Как там моя кружка =)
                    </a>";
                }
                else 
                {
                    echo "<a class='quickbox' href='img/img.jpg' title='тут'>
                        <img src='' alt=''>Удачи!
                    </a>";
                }
                
                    $servername_lite = "localhost";
                    $username_lite = "id8435427_sanek22cs";// имя пользователя см. рис. 2 
                    $password_lite = "Sanek22cs";// пароль к БД, при необходимости его можно изменить см. рис. 2 
                    $database_lite = "id8435427_checkers";// имя БД рис. 2 
                    $db_table_lite = "users"; // имя таблицы с  которой будем работать  
                
                    // Create connection
                    $conn_add = mysqli_connect($servername_lite, $username_lite, $password_lite, $database_lite);
                
                    // Check connection
                    if (!$conn_add) {
                        die("<span style='color: red;'>Не удалось подключиться к серверу: " . mysqli_connect_error()) . "</span><p></p>";
                    } 
                    else{
                    //echo "<span style='color: green;'>Успешное подключение к серверу</span><br/>";
                    } 
                    if (!$db_table_lite) {
                        die("<span style='color: red;'>Не удалось подключиться к БД: " . mysqli_connect_error()) . "</span><p></p>";
                    } 
                    else{
                    //echo "<span style='color: green;'>Успешное подключение к БД</span><br/>";
                    }
                    
                     //работа с массивом POST 
                    $usernik_post = $_POST['REMOTE_ADDR'];
                    echo $usernik_post;
                    //$_SERVER["REMOTE_ADDR"];
                    $date_post = $_POST['date_lite'];
                    $time_post = $_POST['time_lite'];
            
                    if(empty($usernik_post)) 
                    {
                        echo ":)";
                    }
                    else
                    {
                        // создание строки запроса
                        $mysqliquery = mysqli_query($conn_add, 
                            "INSERT INTO users(name, date, time)
                            VALUES ('$usernik_post','$date_post', '$time_post')
                        ");
            
                        // выполняем запрос
                        $result = mysqli_query($conn_add, $mysqliquery); 
                        if(!$result)
                        {
                            //echo "<span style='color:blue;'>Не забудь нажать на пасхалку</span></br>";
                        }
                        else
                        {
                            echo "<span style='color:red;'>Ошибка! Данные не добавлены.</span></br>";
                        }
                        
                    }

            }
        }*/
        ?>


<form class="col s12" style="width: 95%;" form action="<?php $_SERVER['PHP_SELF'] ?>" method="POST">
    <div class="container ">
        <div class="row">
                  <!--<div class="input-field col s12 m4">
                    <p for="password_2">Введите свое имя</p>
                  </div>
                  <div class="input-field col s12 m5">
                    <i class ="material-icons prefix">lock</i>
                    <!--<input type="text" id="password" class="text" name="password" value="-->
                    <?php echo @$data['password']; ?><!--"                    <label for="password">Имя</label>-->
                    
                    <input type="hidden" name="date_lite" value="<?php echo date('Y-m-d') ?>" />
					<input type="hidden" name="time_lite" value="<?php echo date('H:i:s') ?>"/>
                  </div>
                  
        <div class="row">
          <div class="input-field col s12">   <!--Зарегистрировать-->
            <!--<button class='btn blue darken-2  z-depth-2' type='submit' name='do_signup'>Попробовать</button>-->
          </div>
        <!--</div>-->
        </div>
        
        
    </div>        
</form>
<?php
//

//echo "<br> REMOTE_ADDR - " . $_SERVER["REMOTE_ADDR"] .    "<br> HTTP_CLIENT_IP - " . $_SERVER['HTTP_CLIENT_IP'] .     "<br> HTTP_X_FORWARDED_FOR" . $_SERVER['HTTP_X_FORWARDED_FOR'];
?>


            <br>

            <a href="../index.php" class="btn blue darken-3 large">Назад</a>
    </footer>

    <!-- JavaScript -->
    <script src="materialize/js/jquery-2.1.1.min.js"></script>
    <script src="materialize/js/materialize.min.js"></script>
    <script src="qb/qb.js"></script>


</body>

</html>