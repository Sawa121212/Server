<!DOCTYPE html>

<head>
    <!--<link href="img/icon" rel="stylesheet">-->
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="../materialize/css/materialize.min.css" media="screen,projection" />
    <link type="text/css" rel="stylesheet" href="../materialize/css/style.css" media="screen,projection">

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />


    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <!--<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">-->
    <meta http-equiv="Content-Language" content="ru">
    <meta content="text/css">
    <META HTTP-EQUIV="Expires" CONTENT="0">

    <title>Авторизация</title>
</head>

<body>

    <!--index-->
    <div class="container ">
        <br>
        <div class="row">

            <?php

            // Страница авторизации

            # Функция для генерации случайной строки
            function generateCode($length = 6)
            {
                $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHI JKLMNOPRQSTUVWXYZ0123456789";
                $code = "";
                $clen = strlen($chars) - 1;
                while (strlen($code) < $length) {
                    $code .= $chars[mt_rand(0, $clen)];
                }
                return $code;
            }

            # Соединямся с БД
            require 'db.php';
            //include ("db.php");

            if (isset($_POST['submit'])) {
                    # Вытаскиваем из БД запись, у которой логин равняеться введенному
                    $query = mysql_query("SELECT user_id, user_password FROM users WHERE user_login='" . mysql_real_escape_string($_POST['login']) . "' LIMIT 1");
                    $data = mysql_fetch_assoc($query);



                    # Соавниваем пароли

                    if ($data['user_password'] === md5(md5($_POST['password']))) {

                            # Генерируем случайное число и шифруем его

                            $hash = md5(generateCode(10));



                            if (!@$_POST['not_attach_ip']) {
                                    # Если пользователя выбрал привязку к IP
                                    # Переводим IP в строку
                                    $insip = ", user_ip=INET_ATON('" . $_SERVER['REMOTE_ADDR'] . "')";
                                }



                            # Записываем в БД новый хеш авторизации и IP
                            mysql_query("UPDATE users SET user_hash='" . $hash . "' " . $insip . " WHERE user_id='" . $data['user_id'] . "'");



                            # Ставим куки
                            setcookie("id", $data['user_id'], time() + 60 * 60 * 24 * 30);
                            setcookie("hash", $hash, time() + 60 * 60 * 24 * 30);

                            # Переадресовываем браузер на страницу проверки нашего скрипта
                            header("Location: check.php");
                            exit();
                        } else {

                            print "Вы ввели неправильный логин/пароль";
                        }
                }

            ?>

            <form method="POST">

                Логин <input name="login" type="text"><br>
                Пароль <input name="password" type="password"><br>
                Не прикреплять к IP(не безопасно) <input type="checkbox" name="not_attach_ip"><br>
                <input name="submit" type="submit" value="Войти">

                <a href="register.php">Регистрация</a>
            </form>



            <!--  Scripts-->
            <script src="../materialize/js/jquery-2.1.1.min.js"></script>
            <script src="../materialize/js/materialize.min-v2.js"></script>
            <script src="../materialize/js/materialize.min.js"></script>
            <script src="../materialize/js/init.js"></script>
            <script src="../materialize/js/plugins.min.js"></script>



        </div>
    </div>
    <div class="sidenav-overlay"></div>
    <div class="drag-target"></div>

</body>

</html> 