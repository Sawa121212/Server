<?php
    $folderRootCount = 2;
    session_start();
    include("../inc/functions/func_folderRoot.php");
    include($folderRoot . "inc/functions/func_captcha.php");

    require $folderRoot . 'conn/db.php';
    $file_name = basename(__FILE__);

    include($folderRoot . "inc/alertStyle.php");
    $data = $_POST;
    $errors = array();
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <? include($folderRoot . "inc/z_head.php"); ?>
    <title>Профиль</title>
</head>
<body>
<!--left panel-->
<? include($folderRoot . "inc/z_rightPanel.php"); ?>

<!--index-->
<main>
    <div class="container ">
        <br>
        <div class="row" align="center">
            <h3><i class="material-icons small">person</i>Профиль</h3>
        </div>
        <!--   Icon Section   -->
        <div class="row">
            <ul class="collection" style="width: 100%;">
                <li class="collection-item avatar">
                    <i class="material-icons circle blue darken-3">account_circle</i>
                    <span class="title"><h6><b>ФИО</b></h6></span>
                    <?php echo "<p>";
                        echo $_SESSION['second_name'] . "&nbsp";
                        echo $_SESSION['first_name'] . "&nbsp";
                        echo $_SESSION['patronymic'];
                        echo "</p>";
                    ?>
                    <a class="secondary-content btn blue modal-trigger" href="#modalFIO"><i
                                class="material-icons">create</i></a>
                </li>
                <!-- FIO Modal -->
                <div id="modalFIO" class="modal">
                    <div class="modal-content">
                        <h4>Редактирование</h4>
                        <p>Введите данные</p>
                    </div>

                    <div class="modal-footer">
                        <div class="section">
                            <form action="<?php $_SERVER['PHP_SELF'] ?>" method='post'>
                                <ul class="collection" style="width: 100%;">
                                    <li class="collection-item avatar">
                                        <i class="material-icons circle blue darken-3 right">account_circle</i>
                                        <span class="title "><h6><b>ФИО</b></h6></span>
                                        <br>

                                        <div class="row">
                                            <div class="input-field col s12 m6">      <!--Фамилия-->
                                                <i class="material-icons prefix">account_circle</i>
                                                <input class="text" type="text" id="second_name" name="second_name"
                                                       value="<?php echo @$_SESSION['second_name']; ?>">
                                                <label for="second_name">Фамилия</label>
                                            </div>
                                            <div class="input-field col s12 m6">      <!--Имя-->
                                                <i class="material-icons prefix">account_circle</i>
                                                <input class="validate" type="text" id="first_name" name="first_name"
                                                       value="<?php echo @$_SESSION['first_name']; ?>">
                                                <label for="first_name">Имя</label>
                                            </div>

                                            <div class="row">
                                                <div class="input-field col s12 m6">    <!--Отчество-->
                                                    <i class="material-icons prefix">account_circle</i>
                                                    <input class="text" type="text" id="patronymic" name="patronymic"
                                                           value="<?php echo @$_SESSION['patronymic']; ?>">
                                                    <label for="patronymic">Отчество</label>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col s5 m5">   <!--captcha-->
                                                    <?php captcha_show(); ?>
                                                </div><!--/col-->

                                                <div class="input-field col s5 m4">   <!--captcha-->
                                                    <input type="text" id="captcha" class="text">
                                                    <label for="captcha">captcha</label>
                                                </div><!--/col-->
                                            </div><!--/row-->

                                            <div class="row center-align">
                                                <div class="col s11 m6"><!--Изменить-->
                                                    <button class='btn blue darken-2 waves-effect waves-light z-depth-2'
                                                            type='submit' name="do_editFIO">Изменить<i
                                                                class='material-icons left'>border_color</i></button>
                                                </div><!--/col-->

                                                <div class="col s11 m6"><!--Отмена-->
                                                    <button class='modal-close btn red darken-1 waves-effect waves-light z-depth-2'>
                                                        Отмена<i class='material-icons left'>close</i></button>
                                                </div><!--/col-->
                                            </div><!--/row center-->

                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div><!--/modal-footer-->
                </div><!-- /modal1 -->
                <?php
                    //если кликнули на button
                    if (isset($data['do_editFIO'])) {
                        //проверка капчи
                        if ($num != array_search(mb_strtolower($_POST['captcha']), $answers)) {
                            $errors[] = 'Ответ на captcha указан не верно!';
                        }
                        if (trim($data['first_name']) == '') {
                            $errors[] = "<h5>Введите Имя</h5>";
                        }
                        if (trim($data['second_name']) == '') {
                            $errors[] = "<h5>Введите Фамилию</h5>";
                        }
                        if (trim($data['patronymic']) == '') {
                            $errors[] = "<h5>Введите Отчество</h5>";
                        }

                        if (empty($errors)) {
                            $login = $_SESSION['login'];
                            $first_name = $_POST['first_name'];
                            $second_name = $_POST['second_name'];
                            $patronymic = $_POST['patronymic']; // отчество

                            $result = mysqli_query($link, "UPDATE users SET first_name='" . $first_name . "', second_name='" . $second_name . "', patronymic='" . $patronymic . "' 
                where login='" . $login . "' ");

                            if ($result) {
                                echo "<div align='center' style='color:blue; font-size:20px;'><br> 
                  <a class='btn blue' href='account_profile.php'>Данные изменены. Обновите страницу</a></div></br>";
                                $_SESSION['second_name'] = $data['second_name'];
                                $_SESSION['first_name'] = $data['first_name'];
                                $_SESSION['patronymic'] = $data['patronymic'];
                            } else {
                                echo "<div align='center' style='color:red; font-size:20px;'>Ошибка! Данные не изменены.</div></br>";
                            }
                        } else {
                            echo '<div align="center" id="errors" style="color:red; font-size:20px;">' . array_shift($errors) . '</div><hr>';
                        }
                    }
                ?>

                <li class="collection-item avatar">
                    <i class="material-icons circle green">account_circle</i>
                    <span class="title"><h6><b>Логин</b></h6></span>
                    <?php echo "<p>";
                        echo $_SESSION['login'];
                        echo "</p>";
                    ?>
                    <a class="secondary-content btn blue modal-trigger" href="#modalLogin"><i
                                class="material-icons">create</i></a>
                </li>
                <!-- FIO Modal -->
                <div id="modalLogin" class="modal">
                    <div class="modal-content">
                        <h4>Редактирование</h4>
                        <p>Введите данные</p>
                    </div>

                    <div class="modal-footer">
                        <div class="section">
                            <form action="<?php $_SERVER['PHP_SELF'] ?>" method='post'>
                                <ul class="collection" style="width: 100%;">
                                    <li class="collection-item avatar">
                                        <i class="material-icons circle green">account_circle</i>
                                        <span class="title"><h6><b>Логин</b></h6></span>
                                        <br>

                                        <div class="row">
                                            <div class="input-field col s12 m6">     <!--Логин-->
                                                <i class="material-icons prefix">assignment_ind</i>
                                                <input type="text" id="nickname" class="nickname" name="login"
                                                       value="<?php echo @$_SESSION['login']; ?>">
                                                <label for="nickname">Логин</label>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col s5 m5">   <!--captcha-->
                                                <?php captcha_show(); ?>
                                            </div><!--/col-->

                                            <div class="input-field col s5 m4">   <!--captcha-->
                                                <input type="text" id="captcha" class="text">
                                                <label for="captcha">captcha</label>
                                            </div><!--/col-->
                                        </div><!--/row-->

                                        <div class="row center-align">
                                            <div class="col s11 m6"><!--Изменить-->
                                                <button class='btn blue darken-2 waves-effect waves-light z-depth-2'
                                                        type='submit' name="do_editLogin">Изменить<i
                                                            class='material-icons left'>border_color</i></button>
                                            </div><!--/col-->

                                            <div class="col s11 m6"><!--Отмена-->
                                                <button class='modal-close btn red darken-1 waves-effect waves-light z-depth-2'>
                                                    Отмена<i class='material-icons left'>close</i></button>
                                            </div><!--/col-->
                                        </div><!--/row center-->

                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div><!--/modal-footer-->
                </div><!-- /modal1 -->
                <?php
                    //если кликнули на button
                    if (isset($data['do_editLogin'])) {
                        //проверка капчи

                        if ($num != array_search(mb_strtolower($_POST['captcha']), $answers)) {
                            $errors[] = 'Ответ на captcha указан не верно!';
                        }
                        if (trim($data['login']) == '') {
                            $errors[] = "<h5>Введите логин</h5>";
                        }

                        //проверка на существование одинакового логина
                        // проверяем, не сущестует ли пользователя с таким именем
                        $get_login = mysqli_query($link, "SELECT COUNT(id) FROM users WHERE login='" . mysqli_real_escape_string($link, $_POST['login']) . "'");
                        if ($get_login > 0) {
                            $errors[] = "Пользователь с таким логином уже существует в базе данных";
                        }
                        // проверям логин
                        if (!preg_match("/^[a-zA-Z0-9]+$/", $_POST['login'])) {
                            $errors[] = "Логин может состоять только из букв английского алфавита и цифр";
                        }
                        if (strlen($_POST['login']) < 3 or strlen($_POST['login']) > 30) {
                            $errors[] = "Логин должен быть не меньше 3-х символов и не больше 30";
                        }

                        if (empty($errors)) {
                            $login = $_SESSION['login'];
                            $new_login = $_POST['login'];


                            $result = mysqli_query($link, "UPDATE users SET login='" . $new_login . "' where login='" . $login . "' ");

                            if ($result) {
                                echo "<div align='center' style='color:blue; font-size:20px;'><br> 
                  <a class='btn blue' href='account_profile.php'>Данные изменены. Обновите страницу</a></div></br>";
                                $_SESSION['login'] = $data['login'];
                            } else {
                                echo "<div align='center' style='color:red; font-size:20px;'>Ошибка! Данные не изменены.</div></br>";
                            }
                        } else {
                            echo '<div align="center" id="errors" style="color:red; font-size:20px;">' . array_shift($errors) . '</div><hr>';
                        }
                    }
                ?>

                <li class="collection-item avatar">
                    <i class="material-icons circle">how_to_reg</i>
                    <span class="title"><h6><b>Тип пользователя</b></h6></span>
                    <?php echo "<p>";
                        if ($_SESSION['usertype'] == 1) {
                            echo "Администратор";
                        };
                        if ($_SESSION['usertype'] == 2) {
                            echo "Редактор";
                        };
                        if ($_SESSION['usertype'] == 3) {
                            echo "Преподаватель";
                        };
                        if ($_SESSION['usertype'] == 4) {
                            echo "Студент";
                        };
                        echo "</p>";
                    ?>
                </li>

                <li class="collection-item avatar">
                    <i class="material-icons circle orange">mail</i>
                    <span class="title"><h6><b>Email</b></h6></span>
                    <?php echo "<p>";
                        echo $_SESSION['email'];
                        echo "</p>";
                    ?>
                    <a class="secondary-content btn blue modal-trigger" href="#modalEmail"><i
                                class="material-icons">create</i></a>
                </li>
                <!-- Email Modal -->
                <div id="modalEmail" class="modal">
                    <div class="modal-content">
                        <h4>Редактирование</h4>
                        <p>Введите данные</p>
                    </div>

                    <div class="modal-footer">
                        <div class="section">
                            <form action="<?php $_SERVER['PHP_SELF'] ?>" method='post'>
                                <ul class="collection" style="width: 100%;">
                                    <li class="collection-item avatar">
                                        <i class="material-icons circle green">mail</i>
                                        <span class="title"><h6><b>Email</b></h6></span>
                                        <br>

                                        <div class="row center-align">
                                            <div class="input-field col s11 m6 offset-m2">   <!--Email-->
                                                <i class="material-icons prefix">mail</i>
                                                <input type="email" id="email" class="validate" name="email"
                                                       value="<?php echo @$_SESSION['email']; ?>">
                                                <label for="email">Email</label>
                                            </div><!--/row-->
                                        </div><!--/row-->

                                        <div class="row">
                                            <div class="col s5 m5">   <!--captcha-->
                                                <?php captcha_show(); ?>
                                            </div><!--/col-->

                                            <div class="input-field col s5 m4">   <!--captcha-->
                                                <input type="text" id="captcha" class="text">
                                                <label for="captcha">captcha</label>
                                            </div><!--/col-->
                                        </div><!--/row-->

                                        <div class="row center-align">
                                            <div class="col s11 m6"><!--Изменить-->
                                                <button class='btn blue darken-2 waves-effect waves-light z-depth-2'
                                                        type='submit' name="do_editEmail">Изменить<i
                                                            class='material-icons left'>border_color</i></button>
                                            </div><!--/col-->

                                            <div class="col s11 m6"><!--Отмена-->
                                                <button class='modal-close btn red darken-1 waves-effect waves-light z-depth-2'>
                                                    Отмена<i class='material-icons left'>close</i></button>
                                            </div><!--/col-->
                                        </div><!--/row center-->

                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div><!--/modal-footer-->
                </div><!-- /modal1 -->
                <?php
                    //если кликнули на button
                    if (isset($data['do_editEmail'])) {
                        //проверка капчи
                        $answers = array(
                                1 => '2by33',
                                2 => 'n32f9',
                                3 => 'b4q61',
                                4 => 'rn5y3',
                                5 => 'gpx3t'
                        );
                        if ($num != array_search(mb_strtolower($_POST['captcha']), $answers)) {
                            $errors[] = 'Ответ на captcha указан не верно!';
                        }
                        if (trim($data['email']) == '') {
                            $errors[] = "<h5>Введите Email</h5>";
                        }
                        $get_email = mysqli_query($link, "SELECT COUNT(id) FROM users WHERE email='" . mysqli_real_escape_string($link, $_POST['email']) . "'");

                        if (!$get_email) {
                            $errors[] = "Пользователь с таким email уже существует в базе данных";
                        }

                        if (empty($errors)) {
                            $login = $_SESSION['login'];
                            $password = SHA1(SHA1(trim($_POST['password']))); //Убераем лишние пробелы и делаем двойное шифрование
                            $email = $_POST['email'];

                            $result = mysqli_query($link, "UPDATE users SET email='" . $email . "' where login='" . $login . "' ");

                            if ($result) {
                                echo "<div align='center' style='color:blue; font-size:20px;'><br> 
                  <a class='btn blue' href='account_profile.php'>Данные изменены</a></div></br>";
                                $_SESSION['email'] = $data['email'];
                            } else {
                                echo "<div align='center' style='color:red; font-size:20px;'>Ошибка! Email не изменен.</div></br>";
                            }
                        } else {
                            echo '<div align="center" id="errors" style="color:red; font-size:20px;">' . array_shift($errors) . '</div><hr>';
                        }
                    }
                ?>

                <li class="collection-item avatar">
                    <i class="material-icons circle red">vpn_key</i>
                    <span class="title"><h6><b>Пароль</b></h6></span>
                    <p>зашифрован</p>
                    <!--<a class="secondary-content btn blue modal-trigger" href="#modal1"><i class="material-icons">create</i></a>-->
                </li>

                <!--Тема оформления-->
                <li class="collection-item avatar">
                    <i class="material-icons circle black">palette</i>
                    <span class="title"><h6><b>Тема оформления</b></h6></span>
                    <form action="<?php $_SERVER['PHP_SELF'] ?>" method='post'>
                        <p>
                            <label>
                                <input class="with-gap" name="group1" value="0"
                                       type="radio" <?php if ($_SESSION['thema'] == "0") echo "checked" ?> />
                                <span>Светлая тема</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input class="with-gap" name="group1" value="1"
                                       type="radio" <?php if ($_SESSION['thema'] == "1") echo "checked" ?> />
                                <span>Темная тема</span>
                            </label>
                        </p>

                        <?php
                            //если кликнули на button
                            if (isset($data['do_editThema'])) {
                                $thema1 = $_POST['group1'];
                                $result_rep = mysqli_query($link, "UPDATE users SET b_thema='" . $thema1 . "' where login='" . $_SESSION['login'] . "' ");
                                $_SESSION['thema'] = $thema1;

                                if ($result_rep) {
                                    echo "<div align='center' style='color:blue; font-size:20px;'><br> 
                                            <a class='btn blue' href='account_profile.php'>Данные изменены. Обновите страницу</a></div></br>";
                                }
                            }
                        ?>
                        <br>
                        <button class="btn blue darken-2 waves-effect waves-light z-depth-2" type="submit"
                                name="do_editThema">Применить<i class="material-icons left">create</i></button>

                </li>

            </ul>

        </div>  <!-- /row center -->
    </div>
</main>

<!--footer-->
<?php
    echo "==============================================================";
    include($folderRoot . "inc/z_footer.php");
?>

</body>
</html>