<?php
    $folderRoot = "";
    $link = "";
    $answers = array();
    include("../inc/functions/func_folderRoot.php");
    include($folderRoot . "inc/functions/func_SESSION.php");
    require $folderRoot . 'conn/db.php';
    include($folderRoot . "inc/functions/func_captcha.php");
    $file_name = basename(__FILE__);
    
    include($folderRoot . "inc/z_head.php");
    $data = $_POST; ?>

<?php
    // Регистрироваться могут только не вошедшие в аккаунт и Регистрировать может только Админ
    if ($_SESSION['usertype'] != 1) {
        if (isset($_SESSION['logged_user'])) {
            header('Location: ' . $folderRoot . 'index.php');
            exit;
        }
    }
?>

<!DOCTYPE html>
<html lang="ru" xmlns="http://www.w3.org/1999/html">
<head>
    <?php include($folderRoot . "inc/z_head.php"); ?>
    <title>Регистрация</title>
</head>
<body>
<!--left panel-->
<?php include($folderRoot . "inc/z_rightPanel.php"); ?>

<!--index-->
<main>
    <div class="container section" align="center">
        <div class="row" align="center">
            <h3>Регистрация</h3>
            
            <form style="width: 70%;" form action="<?php $_SERVER['PHP_SELF'] ?>" method="POST">
                <div class="row">
                    <div class="input-field col s12">
                        <!--Табельный номер-->
                        <i class="material-icons prefix">account_circle</i>
                        <input class="text" type="text" id="table_id" name="tabel_id"
                               value="<?php echo @$data['tabel_id']; ?>" maxlength="6">
                        <label for="table_id">Табельный номер</label>
                    </div>
                    <div class="input-field col s12">
                        <!--Фамилия-->
                        <i class="material-icons prefix">account_circle</i>
                        <input class="text" type="text" id="second_name" name="second_name"
                               value="<?php echo @$data['second_name']; ?>">
                        <label for="second_name">Фамилия</label>
                    </div>
                    <div class="input-field col s12">
                        <!--Имя-->
                        <i class="material-icons prefix">account_circle</i>
                        <input class="validate" type="text" id="first_name" name="first_name"
                               value="<?php echo @$data['first_name']; ?>">
                        <label for="first_name">Имя</label>
                    </div>
                    
                    <div class="row">
                        <div class="input-field col s12">
                            <!--Отчество-->
                            <i class="material-icons prefix">account_circle</i>
                            <input class="text" type="text" id="patronymic" name="patronymic"
                                   value="<?php echo @$data['patronymic']; ?>">
                            <label for="patronymic">Отчество</label>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="input-field col s12">
                            <!--Логин-->
                            <i class="material-icons prefix">assignment_ind</i>
                            <input type="text" id="nickname" class="nickname" name="login"
                                   value="<?php echo @$data['login']; ?>">
                            <label for="nickname">Логин</label>
                        </div>
                        
                        <div class="input-field col s12">
                            <!--Email-->
                            <i class="material-icons prefix">mail</i>
                            <input type="email" id="email" class="validate" name="email"
                                   value="<?php echo @$data['email']; ?>">
                            <label for="email">Email</label>
                        </div>
                    </div>
                    
                    <div class="row">
                        <!--Пароль-->
                        <div class="input-field col s12">
                            <i class="material-icons prefix">lock</i>
                            <input type="password" id="password" class="password" name="password"
                                   value="<?php echo @$data['password']; ?>">
                            <label for="password">Пароль</label>
                        </div>
                        
                        <!--Повтор Пароль-->
                        <div class="input-field col s12">
                            <i class="material-icons prefix">lock</i>
                            <input type="password" id="password_2" class="password" name="password_2"
                                   value="<?php echo @$data['password_2']; ?>">
                            <label for="password_2">Повторите пароль</label>
                        </div>
                    </div>
                    
                    <div class="row">
                        <!--Выберите пользователя-->
                        <div class="input-field col s12">
                            <p><b>Выберите роль:</b></p>
                        </div>
                        
                        <!--Администратор-->
                        <?php
                            if ($_SESSION['usertype'] == 1) {
                                echo "<div class='input-field col s12 m4'>
                                <p>
                                  <label>
                                    <input class='with-gap' name='usertype' type='radio' value=1 />
                                    <span>Администратор</span>
                                  </label>
                                </p>
                              </div>";
                            }
                            
                            //<!--Редактор-->
                            if ($_SESSION['usertype'] == 1 || $_SESSION['usertype'] == 2) {
                                echo "<div class='input-field col s12 m4'>
                                    <p>
                                      <label>
                                        <input class='with-gap' name='usertype' type='radio' value='2'/>
                                        <span>Редактор</span>
                                      </label>
                                    </p>
                                  </div>";
                            }
                        ?>
                        
                        <!--Пользователь-->
                        <div class="input-field col s12 m4">
                            <p>
                                <label>
                                    <input class="with-gap" name="usertype" type="radio" value=3 />
                                    <span>Пользователь</span>
                                </label>
                            </p>
                        </div>
                    </div>
                    
                    <!--captcha-->
                    <div class="row">
                        <div class="input-field col s3 m12">
                            <?php captcha_show($folderRoot); ?>
                        </div>
                        <div class="input-field col s4 m12">
                            <input type="text" id="captcha" class="text" autocomplete="off">
                            <label for="captcha">Введите код с картинки</label>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="input-field col s12">
                            <!--Зарегистрировать-->
                            <button class='btn darken-2  z-depth-2' type='submit' name='do_signup'>
                                Зарегистрироваться
                            </button>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="input-field col s12">
                            <!--Вывод -->
                            <?php
                                //если кликнули на button
                                if (isset($data['do_signup'])) {
                                    //проверка капчи
                                    if ($_SESSION['captcha'] != array_search(mb_strtolower($_POST['captcha']), $answers)) {
                                        $errors[] = 'Ответ на captcha указан не верно!';
                                    }
                                    
                                    // проверка формы на пустоту полей
                                    $errors = array();
                                    if (trim($data['tabel_id']) == '') {
                                        $errors[] = "<h5>Введите табельный номер</h5>";
                                    }
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
                                    if (trim($data['patronymic']) == '') {
                                        $errors[] = "<h5>Введите Отчество</h5>";
                                    }
                                    if ($data['password'] == '') {
                                        $errors[] = "<h5>Введите пароль</h5>";
                                    }
                                    if ($data['password_2'] != $data['password']) {
                                        $errors[] = "<h5>Повторный пароль введен не верно!</h5>";
                                    }
                                    
                                    //проверка на существование одинакового логина
                                    # проверяем, не сущестует ли пользователя с таким именем
                                    $get_tabel_id = $link->query("SELECT * FROM users WHERE tabelID='" . $_POST['tabel_id'] . "'");
                                    //$get_tabel_id = mysqli_query($link, "SELECT * FROM users WHERE tabelID='" . $_POST['tabel_id'] . "'");
                                    if ($get_tabel_id->rowCount() != 0) {
                                        $errors[] = "Пользователь с таким табельным номером уже существует";
                                    }
                                    if (strlen($_POST['tabel_id']) > 6) {
                                        $errors[] = "Табельный номер должен быть не больше 6 символов";
                                    }
                                    
                                    $get_login = $link->query("SELECT * FROM users WHERE login='" . $_POST['login'] . "'");
                                    //$get_login = mysqli_query($link, "SELECT * FROM users WHERE login='" . $_POST['login'] . "'");
                                    if ($get_login->rowCount() != 0) {
                                        $errors[] = "Пользователь с таким логином уже существует";
                                    }
                                    # проверям логин
                                    if (!preg_match("/^[a-zA-Z0-9]+$/", $_POST['login'])) {
                                        $errors[] = "Логин может состоять только из букв английского алфавита и цифр";
                                    }
                                    if (strlen($_POST['login']) < 3 or strlen($_POST['login']) > 30) {
                                        $errors[] = "Логин должен быть не меньше 3-х символов и не больше 30";
                                    }
                                    
                                    
                                    //проверка на существование одинакового email
                                    //$get_email = mysqli_query($link, "SELECT * FROM users WHERE email='" . mysqli_real_escape_string($link, $_POST['email']) . "'");
                                    $get_email = $link->query("SELECT * FROM users WHERE email='" . $_POST['email'] . "'");
                                    if ($get_email->rowCount() != 0) {
                                        $errors[] = "Пользователь с таким email уже существует";
                                    }
                                    
                                    if (empty($errors)) {
                                        $login = $_POST['login'];
                                        // пароль нельзя хранить в открытом виде, мы его шифруем
                                        // Убераем лишние пробелы и делаем двойное шифрование
                                        $password = sha1(sha1(trim($_POST['password'])));
                                        
                                        $tabel_id = strip_tags(trim($_POST['tabel_id']));
                                        $first_name = strip_tags(trim($_POST['first_name']));
                                        $second_name = strip_tags(trim(_POST['second_name']));
                                        $patronymic = strip_tags(trim($_POST['patronymic'])); // отчество
                                        $email = strip_tags(trim($_POST['email']));
                                        $usertype = $_POST['usertype'];
                                        $u_uid = sha1(time());
                                        
                                        $result = mysqli_query($link, "INSERT INTO users SET
                                            login='" . $login . "',
                                            password='" . $password . "',
                                            first_name='" . $first_name . "',
                                            second_name='" . $second_name . "',
                                            patronymic='" . $patronymic . "',
                                            email='" . $email . "',
                                            tabelID = '" . $tabel_id . "',
                                            uid = '" . $u_uid . "',
                                            usertype='" . $usertype . "' ");
                                        
                                        
                                        if ($result) {
                                            echo "<span style='color:blue;'>Пользователь зарегистрирован.</span></br>";
                                            /* Перенаправление браузера */
                                            header("Location: account_accesssignup.php");
                                            /* Убедиться, что код ниже не выполнится после перенаправления .*/
                                            exit;
                                        } else {
                                            echo "<span style='color:red;'>Ошибка в регистрации! Данные не добавлены.</span></br>";
                                        }
                                    } else {
                                        echo '<div id="errors" style="color:red;">' . array_shift($errors)->__toString() . '</div><hr>';
                                    }
                                }
                            ?>
                        </div>
                    </div>
                </div>
            </form>
        
        </div> <!-- /row center -->
    </div>
</main>

<!--footer-->
<?php
    include($folderRoot . "inc/z_footer.php");
?>

</body>
</html>