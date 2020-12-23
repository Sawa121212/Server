<?php
session_start();
require 'conn/db.php';

$data = $_POST;

$file_name = basename(__FILE__);

include("inc/header.php");
include("inc/alertStyle.php");

?>

<!DOCTYPE html>
<html>

<head>
  <title>Регистрация</title>
</head>

<body>

  <!--index-->
  <div class="container ">
    <br>
    <div class="row" align="center">
      <h3>Регистрация</h3>

      <form class="col s12" style="width: 95%;" form action="<?php $_SERVER['PHP_SELF'] ?>" method="POST">
        <div class="row">
          <div class="input-field col s12 m6">
            <!--Фамилия-->
            <i class="material-icons prefix">account_circle</i>
            <input class="text" type="text" id="second_name" name="second_name" value="<?php echo @$data['second_name']; ?>">
            <label for="second_name">Фамилия</label>
          </div>
          <div class="input-field col s12 m6">
            <!--Имя-->
            <i class="material-icons prefix">account_circle</i>
            <input class="validate" type="text" id="first_name" name="first_name" value="<?php echo @$data['first_name']; ?>">
            <label for="first_name">Имя</label>
          </div>

          <div class="row">
            <div class="input-field col s12 m6">
              <!--Отчество-->
              <i class="material-icons prefix">account_circle</i>
              <input class="text" type="text" id="patronymic" name="patronymic" value="<?php echo @$data['patronymic']; ?>">
              <label for="patronymic">Отчество</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12 m6">
              <!--Логин-->
              <i class="material-icons prefix">assignment_ind</i>
              <input type="text" id="nickname" class="nickname" name="login" value="<?php echo @$data['login']; ?>">
              <label for="nickname">Логин</label>
            </div>

            <div class="input-field col s12 m6">
              <!--Email-->
              <i class="material-icons prefix">mail</i>
              <input type="email" id="email" class="validate" name="email" value="<?php echo @$data['email']; ?>">
              <label for="email">Email</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12 m6">
              <!--Пароль-->
              <i class="material-icons prefix">lock</i>
              <input type="password" id="password" class="password" name="password" value="<?php echo @$data['password']; ?>">
              <label for="password">Пароль</label>
            </div>
            <div class="input-field col s12 m6">
              <!--Пароль-->
              <i class="material-icons prefix">lock</i>
              <input type="password" id="password_2" class="password" name="password_2" value="<?php echo @$data['password_2']; ?>">
              <label for="password_2">Повторите пароль</label>
            </div>
          </div>

          <div class="row">
            <!--Выберите пользователя-->
            <div class="input-field col s12 m4">
              <p>
                <label>
                  <p><b>Выберите тип пользователя:</b></p>
                </label>
              </p>
            </div>

            <!--Администратор-->
            <?php if ($_SESSION['usertype'] == 1) :
              echo "<div class='input-field col s6 m2'>
                    <p>
                      <label>
                        <input class='with-gap' name='usertype' type='radio' value=1 />
                        <span>Администратор</span>
                      </label>
                    </p>
                  </div>"; ?>
            <?php endif; ?>

            <!--Редактор-->
            <?php if ($_SESSION['usertype'] == 1 || $_SESSION['usertype'] == 2) :
              echo "<div class='input-field col s6 m2'>
                    <p>
                      <label>
                        <input class='with-gap' name='usertype' type='radio' value='2'/>
                        <span>Редактор</span>
                      </label>
                    </p>
                  </div>"; ?>
            <?php endif; ?>

            <!--Преподаватель-->
            <div class="input-field col s6 m2">
              <p>
                <label>
                  <input class="with-gap" name="usertype" type="radio" value=3 />
                  <span>Преподаватель</span>
                </label>
              </p>
            </div>
            <!--Студент-->
            <div class="input-field col s6 m2">
              <p>
                <label>
                  <input class="with-gap" name="usertype" type="radio" value=4 checked />
                  <span>Студент</span>
                </label>
              </p>
            </div>
          </div>

          <div class="row">
            <!--captcha-->
            <div class="input-field col s6">
              <?php captcha_show(); ?>
            </div>
            <div class="input-field col s4">
              <input type="text" id="captcha" class="text">
              <label for="captcha">captcha</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <!--Зарегистрировать-->
              <!--Зарегистрировать-->
              <button class='btn blue darken-2  z-depth-2' type='submit' value='Зарегистрировать' name='do_signup'>Зарегистрироваться</button>


            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <!--Вывод -->
              <?php
              function captcha_show()
              {
                $questions = array(
                  1 => "<img src='conn/captcha/1.png' alt='captcha' class='z-depth-2'>",
                  2 => "<img src='conn/captcha/2.png' alt='captcha' class='z-depth-2'>",
                  3 => "<img src='conn/captcha/3.png' alt='captcha' class='z-depth-2'>",
                  4 => "<img src='conn/captcha/4.png' alt='captcha' class='z-depth-2'>",
                  5 => "<img src='conn/captcha/5.png' alt='captcha' class='z-depth-2'>"
                );
                $num = mt_rand(1, count($questions));
                $_SESSION['captcha'] = $num;
                echo $questions[$num];
              }

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
                $get_login = mysqli_query($link, "SELECT COUNT(id) FROM users WHERE login='" . $_POST['login'] . "'");
                if ($get_login) {
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
                $get_email = mysqli_query($link, "SELECT COUNT(id) FROM users WHERE email='" . mysqli_real_escape_string($link, $_POST['email']) . "'");
                if ($get_email) {
                  $errors[] = "Пользователь с таким email уже существует в базе данных";
                }


                if (empty($errors)) {
                  $login = $_POST['login'];
                  //$password = $_POST['password']; 
                  //пароль нельзя хранить в открытом виде, мы его шифруем
                  # Убераем лишние пробелы и делаем двойное шифрование
                  $password = SHA1(SHA1(trim($_POST['password'])));

                  $first_name = $_POST['first_name'];
                  $second_name = $_POST['second_name'];
                  $patronymic = $_POST['patronymic']; // отчество
                  $email = $_POST['email'];
                  $usertype = $_POST['usertype'];

                  $result = mysqli_query($link, "INSERT INTO users SET 
                    login='" . $login . "',
                    password='" . $password . "',
                    first_name='" . $first_name . "',
                    second_name='" . $second_name . "',
                    patronymic='" . $patronymic . "',
                    email='" . $email . "',
                    usertype='" . $usertype . "' ");

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

    </div> <!-- /row center -->
  </div>

  <!--footer-->
  <?php  //include("inc/footer.php");
  ?>


  <!--  Scripts-->
  <script src="materialize/js/jquery-2.1.1.min.js"></script>
  <script src="materialize/js/materialize.min-v2.js"></script>
  <script src="materialize/js/materialize.min.js"></script>
  <script src="materialize/js/init.js"></script>


  <div class="sidenav-overlay"></div>
  <div class="drag-target"></div>

</body>

</html>