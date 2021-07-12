<?php
    $folderRoot = "";
    $link = "";
    require $folderRoot . 'conn/db.php';
    $deviceUser = get_current_user();
    include("inc/functions/func_folderRoot.php");
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <?php include($folderRoot . "inc/z_head.php"); ?>
</head>
<body>

<script>
    $.getJSON("http://jsonip.com/?callback=?", function (data) {
        console.log(data);
        alert(data.ip);
    });
</script>
<!--index-->
<main>
    <form action="<?php $_SERVER['PHP_SELF'] ?>" method="POST">
        <div class="container section center">
            <?php


                function getIp() {
                    $keys = [
                            'HTTP_CLIENT_IP',
                            'HTTP_X_FORWARDED_FOR',
                            'REMOTE_ADDR'
                    ];
                    foreach ($keys as $key) {
                        if (!empty($_SERVER[$key])) {
                            $ip = trim(end(explode(',', $_SERVER[$key])));
                            if (filter_var($ip, FILTER_VALIDATE_IP)) {
                                return $ip;
                            }
                        }
                    }
                }

                $ip = getIp();
                // выведем IP клиента на экран
                echo 'ip = ' . $ip;


                $userName = $_ENV["COMPUTERNAME"];
                $infoText = "Я тебя не узнал <br> :( Ну ничего страшного))";

                if (!empty($_SESSION['guest_firstName'])) {
                    $userName = $_SESSION['guest_firstName'];
                    $userFIO = $_SESSION['guest_FIO'];

                    $infoText = "Да да да! Я тебя узнал <b>" . $userFIO . "</b>!";
                }
            ?>
            <div class="row">
                <img src="img/hello/happy.png" alt="">
            </div>
            <h3 class="center-align">Привет, <?php echo $userName; ?></h3><br><br>
            <p><?php echo $infoText; ?></p><br>
            <p>Рад тебя видеть! Здесь ты видимо в первый раз!</p>
            <p>Ты можешь зарегистрироваться или сразу на главную страницу!</p>

            <div class="row">
            </div>

            <div class="row">
                <button class="btn blue darken-2 waves-effect waves-light z-depth-2" type="submit"
                        name="do_reg">Зарегистртроваться<i class="material-icons left">save</i></button>
            </div>
            <div class="row">
                <button class="btn blue darken-2 waves-effect waves-light z-depth-2" type="submit"
                        name="do_index">Главная страница<i class="material-icons left">home</i></button>
            </div>

            <div class="row">
            </div>

            <div class="bottom-sheet">
                <img src="img/hello/boombox.png" alt="">
                <img src="img/hello/bored.png" alt="">
                <img src="img/hello/csgoChat_128_chickendance.png" alt="">
                <img src="img/hello/csgoChat_128_hugs.png" alt="">
                <img src="img/hello/dance.png" alt="">
            </div>

        </div><!-- class="container"-->
    </form>
</main>

<?php
    // Зарегистртроваться
    if (isset($_POST['do_reg'])) {
        try {
            itsFirstConnect($link, $deviceUser);

            $_SESSION['guest_tabel'] = "";
            $_SESSION['guest_firstName'] = "";
            $_SESSION['guest_secondName'] = "";
            $_SESSION['guest_patronymic'] = "";
            $_SESSION['guest_firstConnect'] = "";
            $_SESSION['guest_FIO'] = "";

            header('Location: ' . $folderRoot . 'account/account_signup.php');
            exit;
        } catch (PDOException $e) {
            echo "<span style='color: red;'>Ошибка: " . $e->getMessage() . "</span>";
        }
    }

    // Зарегистртроваться
    if (isset($_POST['do_index'])) {
        try {
            itsFirstConnect($link, $deviceUser);

            $_SESSION['guest_tabel'] = "";
            $_SESSION['guest_firstName'] = "";
            $_SESSION['guest_secondName'] = "";
            $_SESSION['guest_patronymic'] = "";
            $_SESSION['guest_firstConnect'] = "";
            $_SESSION['guest_FIO'] = "";
            header('Location: ' . $folderRoot . 'index.php');
            exit;
        } catch (PDOException $e) {
            echo "<span style='color: red;'>Ошибка: " . $e->getMessage() . "</span>";
        }
    }

    function itsFirstConnect($bd_link, $deviceUserID)
    {
        if (!empty($_SESSION['guest_firstName'])) {
            $resultUpdate = "UPDATE tabels SET first_connect = 'true' where tabel  ='" . $deviceUserID . "' ";
            $bd_link->exec($resultUpdate);
        } else {
            $result_reg = "INSERT INTO tabels SET 
                       first_connect  = 'true', 
                       tabel  ='" . get_current_user() . "', 
                       first_name = '" . get_current_user() . "',
                       second_name = '',
                       patronymic = ''";
            $bd_link->exec($result_reg);
        }
    }

?>
<div class="sidenav-overlay" style="display: none; opacity: 0;"></div>
<div class="drag-target"></div>

</body>
</html>