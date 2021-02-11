<?php
    $folderRootCount = 3;
    session_start();
    include("../../inc/functions/func_folderRoot.php");

    require $folderRoot . 'conn/db.php';
    $file_name = basename(__FILE__);

    include($folderRoot . "inc/alertStyle.php");
    $data = $_POST;
?>
<?php
    if ($_SESSION['usertype'] != 1) {
        if (isset($_SESSION['logged_user'])) {
            header('Location: ' . $folderRoot . 'account/account_signup.php');
            exit;
        }
    }
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <? include($folderRoot . "inc/z_head.php"); ?>
    <title>Редакторы</title>
</head>
<body>
<!--left panel-->
<? include($folderRoot . "inc/z_rightPanel.php"); ?>

<body>

<!--index-->
<main>
    <div class="container ">
        <br>
        <div class="row">
            <?php
                echo "<h3 align='center'>Редакторы</h3>";

                if ($_SESSION['usertype'] == 1) {

                    $select = mysqli_query($link, "SELECT id,login, email, second_name, first_name, patronymic, usertype FROM users where usertype=2 ORDER BY first_name");

                    //Обрабатывает ряд результата запроса
                    $num = 1;
                    echo "<ul class='collection'>";
                    while ($r = mysqli_fetch_array($select)) {
                        echo "<li class='collection-item avatar' id='UUU_" . $r['id'] . "'>
                    <i class ='material-icons circle'>account_circle</i>
                    <span class='title'><h5>";
                        if ($r['usertype'] == 1) {
                            echo "Администратор";
                        };
                        if ($r['usertype'] == 2) {
                            echo "Редактор";
                        };
                        if ($r['usertype'] == 3) {
                            echo "Преподаватель";
                        };
                        if ($r['usertype'] == 4) {
                            echo "Студент";
                        };
                        echo "</h5></span>" .
                                "<span class='second_name'>" . $r['second_name'] . "</span>&nbsp;
                                <span class='first_name'>" . $r['first_name'] . "</span>&nbsp;     
                                <span class='patronymic'>" . $r['patronymic'] . "</span><br/>" .
                                "Логин: <span class='login'>" . $r['login'] . "</span><br/>
                                 Email: <span class='Email'>" . $r['email'] . "</span><br>" .
                                "</li>";
                        $num++;
                    }
                    if ($num == 1) {
                        echo "<li class='collection-item avatar lighten-2'>
                                <span class='title'><h5 align='center'>Нет зарегистрированных пользователей</h5></span></li>";
                        echo "<br><li class='collection-item avatar' align='center'>
                          <a href='" . $folderRoot . "account/account_signup.php' class='btn-large blue darken-2  z-depth-2'>
                          Зарегистрировать аккаунт</a></li>";
                    }

                    echo "</ul>";
                }
            ?>
        </div>  <!-- /row center -->
    </div>
</main>

<div class="sidenav-overlay"></div>
<div class="drag-target"></div>
<!--footer-->
<?php
    include($folderRoot . "inc/z_footer.php");
?>
</body>
</html>