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
    <title>Администраторы</title>
</head>
<body>
<!--left panel-->
<? include($folderRoot . "inc/z_rightPanel.php"); ?>

<body>

<!--index-->
<main>
    <div class="container ">
        <div class="row">

            <script>
                var num = 0;

                function openWin(id) {
                    if (num == 0) {
                        num++;
                        var win = document.createElement('div');
                        win.id = 'win';
                        win.className = "modal z-depth-5";
                        var win_content = document.createElement('div');
                        win.appendChild(win_content);
                        win_content.className = "modal-content";
                        var win_container = document.createElement('div');
                        win_content.appendChild(win_container);
                        win_container.className = "container";

                        var uuu = document.getElementById("UUU_" + id);
                        var login = uuu.getElementsByClassName('login')[0].innerText;
                        var Email = uuu.getElementsByClassName('Email')[0].innerText;
                        var second_name = uuu.getElementsByClassName('second_name')[0].innerText;
                        var first_name = uuu.getElementsByClassName('first_name')[0].innerText;
                        var patronymic = uuu.getElementsByClassName('patronymic')[0].innerText;

                        var second_nameInp = document.createElement('input');
                        second_nameInp.className = "text";
                        second_nameInp.type = "text";
                        second_nameInp.id = "second_name";
                        second_nameInp.name = "second_name";
                        second_nameInp.value = second_name;
                        win_container.appendChild(second_nameInp);

                        document.write = "====";
                        var first_nameInp = document.createElement('input');
                        first_nameInp.className = "text";
                        first_nameInp.value = first_name;
                        win_container.appendChild(first_nameInp);

                        var patronymicInp = document.createElement('input');
                        patronymicInp.className = "text";
                        patronymicInp.value = patronymic;
                        win_container.appendChild(patronymicInp);

                        var logInp = document.createElement('input');
                        logInp.className = "text";
                        logInp.value = login;
                        win_container.appendChild(logInp);

                        var EmailInp = document.createElement('input');
                        EmailInp.class = "text";
                        EmailInp.value = Email;
                        win_container.appendChild(EmailInp);

                        //выход
                        var ExitInp = document.createElement('a');
                        ExitInp.className = "btn blue darken-2  z-depth-2";
                        ExitInp.innerHTML = "Сохранить";
                        ExitInp.href = 'javascript:closeWin();';
                        win_container.appendChild(ExitInp);
                        //выход
                        var ExitInp = document.createElement('a');
                        ExitInp.className = "btn red darken-1  z-depth-2";
                        ExitInp.innerHTML = "Выход";
                        ExitInp.href = 'javascript:closeWin();';
                        win_container.appendChild(ExitInp);

                        document.getElementsByTagName('body')[0].appendChild(win);
                    }
                }

                function closeWin() {
                    document.getElementById('win').remove();
                    num = 0;
                }
            </script>

            <?php
                echo "<h3 align='center'>Администраторы</h3>";
                if ($_SESSION['usertype'] == 1) {
                    $select = mysqli_query($link, "SELECT id,login, email, second_name, first_name, patronymic, usertype FROM users where usertype=1 ORDER BY first_name");

                    //Обрабатывает ряд результата запроса
                    $num = 1;
                    echo "<ul class='collection'>";
                    while ($r = mysqli_fetch_array($select)) {
                        echo "<li class='collection-item avatar' id='UUU_" . $r['id'] . "'>
                            <i class ='material-icons circle'>account_circle</i>
                            <span class='title'><h5>";
                        if ($r['usertype'] == 1) {
                            echo "Администратор";
                        } else if ($r['usertype'] == 2) {
                            echo "Редактор";
                        } else if ($r['usertype'] == 3) {
                            echo "Пользователь";
                        }
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