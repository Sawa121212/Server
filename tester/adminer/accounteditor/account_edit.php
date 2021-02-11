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
    <title>Редактирование</title>
</head>
<body>
<!--left panel-->
<? include($folderRoot . "inc/z_rightPanel.php"); ?>

<body>

<!--index-->
<main>
    <div class="container ">
        <br>
        <div class="row" align="center">
            <h3>Редактирование аккаунта</h3>

            <?php
                $newSaveID = $_SESSION['saveID'];
                $selectID = mysqli_query($link, "SELECT id, login, password, email, second_name, first_name, patronymic, usertype 
                                        FROM users where id = $newSaveID");
                $accountID = mysqli_fetch_array($selectID);
            ?>
            <form class="col s12" style="width: 95%;" form action="<?php $_SERVER['PHP_SELF'] ?>" method="POST">
                <div class="row">
                    <div class="input-field col s6">      <!--Фамилия-->
                        <i class="material-icons prefix">account_circle</i>
                        <input class="text" type="text" id="second_name" name="second_name"
                               value="<?php echo @$accountID['second_name']; ?>">
                        <label for="second_name">Фамилия</label>
                    </div>
                    <div class="input-field col s6">      <!--Имя-->
                        <i class="material-icons prefix">account_circle</i>
                        <input class="validate" type="text" id="first_name" name="first_name"
                               value="<?php echo @$accountID['first_name']; ?>">
                        <label for="first_name">Имя</label>
                    </div>

                    <div class="row">
                        <div class="input-field col s6">    <!--Отчество-->
                            <i class="material-icons prefix">account_circle</i>
                            <input class="text" type="text" id="patronymic" name="patronymic"
                                   value="<?php echo @$accountID['patronymic']; ?>">
                            <label for="patronymic">Отчество</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s6">     <!--Логин-->
                            <i class="material-icons prefix">assignment_ind</i>
                            <input type="text" id="nickname" class="nickname" name="login"
                                   value="<?php echo @$accountID['login']; ?>">
                            <label for="nickname">Логин</label>
                        </div>

                        <div class="input-field col s6">   <!--Email-->
                            <i class="material-icons prefix">mail</i>
                            <input type="email" id="email" class="validate" name="email"
                                   value="<?php echo @$accountID['email']; ?>">
                            <label for="email">Email</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s6"><!--Пароль-->
                            <i class="material-icons prefix">lock</i>
                            <input type="password" id="password" class="password" name="password"
                                   value="<?php echo @$data['password']; ?>">
                            <label for="password">Пароль</label>
                        </div>
                        <div class="input-field col s6"><!--Пароль-->
                            <i class="material-icons prefix">lock</i>
                            <input type="password" id="password_2" class="password" name="password_2"
                                   value="<?php echo @$data['password_2']; ?>">
                            <label for="password_2">Повторите пароль</label>
                        </div>
                    </div>

                    <div class="row">       <!--Выберите пользователя-->
                        <div class="input-field col s3">
                            <p>
                                <label>
                            <p>Выберите тип пользователя:</p>
                            </label>
                            </p>
                        </div>

                                            <!--Администратор-->
                        <?php if ($_SESSION['usertype'] == 1):
                            echo "<div class='input-field col s3'>
                    <p>
                      <label>
                        <input class='with-gap' name='usertype' type='radio' value=1 />
                        <span>Администратор</span>
                      </label>
                    </p>
                  </div>"; ?>
                        <?php endif; ?>

                                            <!--Редактор-->
                        <?php if ($_SESSION['usertype'] == 1 || $_SESSION['usertype'] == 2):
                            echo "<div class='input-field col s3'>
                    <p>
                      <label>
                        <input class='with-gap' name='usertype' type='radio' value=2 />
                        <span>Редактор</span>
                      </label>
                    </p>
                  </div>"; ?>
                        <?php endif; ?>

                                            <!--Преподаватель-->
                        <div class="input-field col s3">
                            <p>
                                <label>
                                    <input class="with-gap" name="usertype" type="radio" value=3/>
                                    <span>Преподаватель</span>
                                </label>
                            </p>
                        </div>
                                            <!--Студент-->
                        <div class="input-field col s3">
                            <p>
                                <label>
                                    <input class="with-gap" name="usertype" type="radio" value=4 checked />
                                    <span>Студент</span>
                                </label>
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">   <!--Зарегистрироваться-->
                            <button class='btn blue darken-2 z-depth-2'
                                    type='submit' value='Зарегистрироваться' name='do_signup'>Зарегистрироваться
                            </button>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">   <!--Вывод -->
                            <?php
                                //если кликнули на button
                                if (isset($data['do_signup'])) {
                                    //проверка капчи
                                    $answers = array(
                                            1 => '2by33',
                                            2 => 'n32f9',
                                            3 => 'b4q61',
                                            4 => 'rn5y3',
                                            5 => 'gpx3t'
                                    );
                                    if ($_SESSION['captcha'] != array_search(mb_strtolower($_POST['captcha']), $answers)) {
                                        $errors[] = 'Ответ на captcha указан не верно!';
                                    }

                                    // проверка формы на пустоту полей
                                    $errors = array();
                                    if (trim($data['login']) == '') {
                                        $errors[] = "<h5>Введите логин</h5>";
                                    }
                                    if (trim($data['email']) == '') {
                                        $errors[] = "<h5>Введите Email</h5>";
                                    }
                                    if (trim($data['first_name']) == '') {
                                        $errors[] = "<h5>Введите Имя</h5>";
                                    }
                                    if (trim($data['second_name']) == '') {
                                        $errors[] = "<h5>Введите Фамилию</h5>";
                                    }
                                    if ($data['password'] == '') {
                                        $errors[] = "<h5>Введите пароль</h5>";
                                    }
                                    if ($data['password_2'] != $data['password']) {
                                        $errors[] = "<h5>Повторный пароль введен не верно!</h5>";
                                    }

                                    //проверка на существование одинакового логина
                                    # проверяем, не сущестует ли пользователя с таким именем
                                    $get_login = mysqli_query("SELECT COUNT(id) FROM users WHERE login='" . mysqli_real_escape_string($_POST['login']) . "'");
                                    if (mysqli_result($get_login, 0) > 0) {
                                        $errors[] = "Пользователь с таким логином уже существует в базе данных";
                                    }
                                    # проверям логин
                                    if (!preg_match("/^[a-zA-Z0-9]+$/", $_POST['login'])) {
                                        $errors[] = "Логин может состоять только из букв английского алфавита и цифр";
                                    }
                                    if (strlen($_POST['login']) < 3 or strlen($_POST['login']) > 30) {
                                        $errors[] = "Логин должен быть не меньше 3-х символов и не больше 30";
                                    }


                                    //проверка на существование одинакового email
                                    $get_email = mysqli_query("SELECT COUNT(id) FROM users WHERE email='" . mysqli_real_escape_string($_POST['email']) . "'");
                                    if (mysqli_result($get_email, 0) > 0) {
                                        $errors[] = "Пользователь с таким email уже существует в базе данных";
                                    }


                                    if (empty($errors)) {
                                        $login = $_POST['login'];
                                        $password = md5(md5(trim($_POST['password'])));

                                        $first_name = $_POST['first_name'];
                                        $second_name = $_POST['second_name'];
                                        $patronymic = $_POST['patronymic']; // отчество
                                        $email = $_POST['email'];
                                        $usertype = $_POST['usertype'];

                                        $result = mysqli_query("INSERT INTO users SET 
                                                                    login='" . $login . "',
                                                                    password='" . $password . "',
                                                                    first_name='" . $first_name . "',
                                                                    second_name='" . $second_name . "',
                                                                    patronymic='" . $patronymic . "',
                                                                    email='" . $email . "',
                                                                    usertype='" . $usertype . "'
                                                                    ");
                                        if ($result) {
                                            echo "<span style='color:blue;'>Данные добавлены.</span></br>";
                                        } else {
                                            echo "<span style='color:red;'>Ошибка! Данные не добавлены.</span></br>";
                                        }

                                    } else {
                                        echo '<div id="errors" style="color:red;">' . array_shift($errors) . '</div><hr>';
                                    }
                                }
                            ?>
                        </div>
                    </div>
                </div>
            </form>

        </div>  <!-- /row center -->
    </div>
</main>

<!--footer-->
<?php
    include($folderRoot . "inc/z_footer.php");
?>
</body>
</html>