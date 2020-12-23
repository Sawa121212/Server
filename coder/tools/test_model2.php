<?php
  session_start();
  require '../login/db.php';

  $data = $_POST;
?>
<!DOCTYPE html>
<head>
    <!--<link href="img/icon" rel="stylesheet">-->
	<!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="../materialize/css/materialize.min.css" media="screen,projection"/>
    <link type="text/css" rel="stylesheet" href="../materialize/css/style.css" media="screen,projection">

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>    

	
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<!--<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">-->
	<meta http-equiv="Content-Language" content="ru">	
	<meta content="text/css">	
	<META HTTP-EQUIV="Expires" CONTENT="0">	

  <title>Регистрация</title>
</head>
<body>

      <!--Мобильное Выподающее Меню Печати -->
      <ul id="dropdown1" class="dropdown-content blue lighten-5">
        <?php 
          if ($_SESSION['usertype'] == 1 || $_SESSION['usertype'] == 2){
            echo "<li><a href='mk_raspis_print_aud.php'>Аудиторных фондов</a></li>
            <li><a href='mk_raspis_print_prepod.php'>Для преподавателей</a></li><li class='divider'></li>";
          }
        ?>
        <li><a href="mk_raspis_print_students.php">Для студентов</a></li><li class="divider"></li>        
      </ul>
      <!--ПК Выподающее Меню Печати-->
      <ul id="dropdown2" class="dropdown-content" class="margin-top: 60px;">
      <?php 
        if ($_SESSION['usertype'] == 1 || $_SESSION['usertype'] == 2)
        {
            echo "<li><a href='mk_raspis_print_aud.php'>Аудиторных фондов</a></li>
                  <li><a href='mk_raspis_print_prepod.php'>Для преподавателей</a></li><li class='divider'></li>";
        }
      ?>
        <li><a href="mk_raspis_print_students.php">Для студентов</a></li><li class="divider"></li> 
      </ul>
      <!--ПК Выподающее Меню Входа-->
      <ul id="dropdown3" class="dropdown-content">  
        <li><a href="account_login.php">Войти</a></li><li class="divider"></li>  
        <li><a href="account_signup.php">Регистрация</a></li><li class="divider"></li>        
      </ul>
      <!--ПК Выподающее Меню Выхода-->
      <ul id="dropdown_logoning" class="dropdown-content">  
        <li><a href="account_profile.php">Профиль</a></li><li class="divider"></li> 
        <li><a href="account_logout.php">Выйти</a></li><li class="divider"></li>  
      </ul>

  <!--Navbar -->   
  <nav class="nav-extended blue darken-3">
    <div class="nav-wrapper  z-depth-2">
      <a href="#" class="brand-logo">Logo</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger right"><i class="material-icons">menu</i></a>

      <!--ПК Меню --> 
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="index.php">Главная страница</a></li>
        <li><a href="edit_spec.php">Факультеты</a></li>
        <li><a href="search_spec.php">Специальности</a></li>        
        
        <!-- Dropdown Trigger -->
        <li><a class="dropdown-button" href="#!" data-target="dropdown2">Печать расписания<i class="material-icons right">arrow_drop_down</i></a></li>

        <!--Регистрация-->
        <?php 
          if ($_SESSION['usertype'] == 1 || $_SESSION['usertype'] == 2)
          {
            echo "<li><a href='account_signup.php'>Регистрация</a></li>";
            if ($_SESSION['usertype'] == 1)
            {
              echo "<li><a href='accounteditor/account_index.php'>Аккаунты</a></li>";
            }
          }
        ?>

        <!--Аккаунт-->
        <?php if (isset ($_SESSION['logged_user']) ) :
            echo "<li><a class='dropdown-button' href='#!' data-target='dropdown_logoning'>";
            echo $_SESSION['login'];
            echo "<i class ='material-icons left'>account_circle</i></a></li>"; 
          ?>
          <?php else :
            echo "<li><a class='dropdown-button' href='#!' data-target='dropdown3'>Аккаунт<i class ='material-icons left'>account_circle</i></a></li>";
          ?>
          <?php endif;?>          
      </ul>
    </div>

    <!--Плавающее Меню -->
    <?php if ($_SESSION['usertype'] == 1 || $_SESSION['usertype'] == 2):
          echo "<div class='nav-content z-depth-2'>
          <ul class='tabs tabs-transparent'>
            <li class='tab disabled'><a class='active' href='#'>Составить расписание:</a></li>
            <li class='tab'><a onclick='javascript:document.location.href='mk_raspis.php'' href='#'>Для преподавателей</a></li>
            <li class='tab'><a onclick='javascript:document.location.href='mk_raspis_for_students.php'' href='#'>Для студентов</a></li>
            <li class='tab'><a href='#test2'>Test 2</a></li>
            <li class='tab'><a href='#test4'>Test 4</a></li>
          </ul>
        </div>";?>
    <?php endif;?>
    
  </nav>

  <!--Мобильное Меню -->
  <ul class="sidenav" id="mobile-demo">
    <ul class ="blue darken-3 z-depth-1">
      <div class="row">               <!--Аккаунт-->
        <div class="input-field col s3">  
          <li><i class ="material-icons left medium">account_circle</i></li>
        </div>
        <div class="input-field col s9">  
          <?php if (isset ($_SESSION['logged_user']) ) :
            echo "<li><a href='account_profile.php' style='font-size: 18px; color: white;'>" . $_SESSION['login'] ."</a></li>
                  <li><a href='account_profile.php' style='font-size: 13px; color: white;'>";
                  if($_SESSION['usertype'] == 1){echo "Администратор";};
                  if($_SESSION['usertype'] == 2){echo "Редактор";};
                  if($_SESSION['usertype'] == 3){echo "Преподаватель";};
                  if($_SESSION['usertype'] == 4){echo "Студент";};
            echo "</a>
                   <a href='account_logout.php' style='font-size: 14px; color: white;'>Выйти</a></li> ";
          ?>
          <?php else :
            echo "<li><a href='account_login.php' style='font-size: 14px; color: white;'>Войти</a></li>
                  <li><a href='account_signup.php' style='font-size: 14px; color: white;'>Регистрация</a></li> ";
          ?>
          <?php endif;?>         
        </div>
      </div>
    </ul>  
    
    <li><a href="index.php">Главная страница<i class="material-icons left Tiny">chevron_right</i></a></li><li class="divider"></li>
    <li><a href="edit_spec.php">Факультеты<i class="material-icons left Tiny">chevron_right</i></a></li><li class="divider"></li>
    <li><a href="search_spec.php">Специальности<i class="material-icons left Tiny">chevron_right</i></a></li><li class="divider"></li>
    <!-- Dropdown Trigger -->
    <li><a class="dropdown-button" href="#!" data-target="dropdown1">Печать расписания<i class="material-icons left">arrow_right</i></a></li>
    <!--Регистрация-->
    <?php if ($_SESSION['usertype'] == 1 || $_SESSION['usertype'] == 2):
      echo "<li><a href='account_signup.php'>Регистрация</a></li>";
      echo "<li><a href='accounteditor/account_index.php'>Аккаунты</a></li>";?>
    <?php endif;?>
    <li class="divider"></li>
  </ul>
  
  <!--index-->
<div class="container ">
  <br>
  <div class="row" align="center">
  <h3>Регистрация</h3>
    
    <form class="col s12" style="width: 95%;" form action="<?php $_SERVER['PHP_SELF'] ?>" method="POST">
      <div class="row">
        <div class="input-field col s12 m6">      <!--Фамилия-->
          <i class ="material-icons prefix">account_circle</i>
          <input class="text" type="text" id="second_name" name="second_name" value="<?php echo @$data['second_name']; ?>">
          <label for="second_name">Фамилия</label>
        </div>
        <div class="input-field col s12 m6">      <!--Имя-->
          <i class ="material-icons prefix">account_circle</i>
          <input class="validate" type="text" id="first_name" name="first_name" value="<?php echo @$data['first_name']; ?>">
          <label for="first_name">Имя</label>
        </div>

        <div class="row">
          <div class="input-field col s12 m6">    <!--Отчество-->
            <i class ="material-icons prefix">account_circle</i>
            <input class="text" type="text" id="patronymic" name="patronymic" value="<?php echo @$data['patronymic']; ?>">
            <label for="patronymic">Отчество</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12 m6">     <!--Логин-->
            <i class ="material-icons prefix">assignment_ind</i>
            <input type="text" id="nickname" class="nickname" name="login" value="<?php echo @$data['login']; ?>">
            <label for="nickname">Логин</label>
          </div>
         
          <div class="input-field col s12 m6">   <!--Email-->
              <i class ="material-icons prefix">mail</i>
              <input type="email" id="email" class="validate" name="email" value="<?php echo @$data['email']; ?>">
              <label for="email">Email</label>
            </div>
        </div>

        <div class="row">
          <div class="input-field col s12 m6"><!--Пароль-->
            <i class ="material-icons prefix">lock</i>
            <input type="password" id="password" class="password" name="password" value="<?php echo @$data['password']; ?>">
            <label for="password">Пароль</label>
          </div>
          <div class="input-field col s12 m6"><!--Пароль-->
            <i class ="material-icons prefix">lock</i>
            <input type="password" id="password_2" class="password" name="password_2" value="<?php echo @$data['password_2']; ?>">
            <label for="password_2">Повторите пароль</label>
          </div>
        </div>

        <div class="row">       <!--Выберите пользователя-->
          <div class="input-field col s12 m4">
              <p>
                <label>
                  <p><b>Выберите тип пользователя:</b></p>
                </label>
              </p>
            </div>
            
            <!--Администратор-->
            <?php if ($_SESSION['usertype'] == 1):
            echo "<div class='input-field col s6 m2'>
                    <p>
                      <label>
                        <input class='with-gap' name='usertype' type='radio' value=1 />
                        <span>Администратор</span>
                      </label>
                    </p>
                  </div>";?>
            <?php endif;?>

            <!--Редактор-->
            <?php if ($_SESSION['usertype'] == 1 || $_SESSION['usertype'] == 2):
            echo "<div class='input-field col s6 m2'>
                    <p>
                      <label>
                        <input class='with-gap' name='usertype' type='radio' value=2 />
                        <span>Редактор</span>
                      </label>
                    </p>
                  </div>";?>
            <?php endif;?>

          <!--Преподаватель-->  
          <div class="input-field col s6 m2">
            <p>
              <label>
                <input class="with-gap" name="usertype" type="radio"  value=3/>
                <span>Преподаватель</span>
              </label>
            </p>
          </div>
          <!--Студент-->
          <div class="input-field col s6 m2">
            <p>
              <label>
                <input class="with-gap" name="usertype" type="radio" value=4 checked/>
                <span>Студент</span>
              </label>
            </p>             
          </div>
        </div>    

        <div class="row">  
          <div class="input-field col s6">   <!--captcha-->
            <?php //captcha_show(); ?>
          </div>
          <div class="input-field col s4">   <!--captcha-->                               
            <input type="text" id="captcha" class="text">
            <label for="captcha">captcha</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">   <!--Зарегистрироваться-->
          <!--Зарегистрироваться-->
          <?php echo "<button class='btn blue darken-2 waves-effect waves-light z-depth-2' 
            type='submit' value='Зарегистрироваться' name='do_signup'>Зарегистрироваться</button>";
            ?>

          <?php if ($_SESSION['usertype'] == 1 || $_SESSION['usertype'] == 2):
            echo "<button class='btn blue darken-2 waves-effect waves-light z-depth-2' 
            type='submit' value='Зарегистрироваться' name='do_signup'>Зарегистрироваться</button>";?>
          <?php endif;?> 

          <!--Войти-->
          <?php if ($_SESSION['usertype'] != 1 || $_SESSION['usertype'] != 2) : ?>
            Вы авторизованы, однако у вас нет доступа к данной операции.<br/>
            Вы можете <a href="account_logout.php">Выйти</a> и войти в другой аккаунт.<br/>
          <?php else : echo "Вы не авторизованы. У вас нет доступа к данной операции. Войдите в аккаунт.<br/><br/>
          <button class='btn blue darken-2 waves-effect waves-light z-depth-2' type='submit' value='Войти'>Войти</button>";?>
          <?php endif; ?>

          <?php if (isset ($_SESSION['logged_user']) ) :
            ?>
          <?php endif;?> 
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">   <!--Вывод -->
          <?php
            //если кликнули на button
            if ( isset($data['do_signup']) )
            {
              //проверка капчи
              $answers = array(
                1 => '2by33',
                2 => 'n32f9',
                3 => 'b4q61',
                4 => 'rn5y3',
                5 => 'gpx3t'
              );
              
              // проверка формы на пустоту полей
              $errors = array();
              //if ( trim($data['login']) == '' ){  $errors[] = "<h5>Введите логин</h5>";}              
              if ( trim($data['email']) == '' ){  $errors[] = "<h5>Введите Email</h5>";}              
              //if ( trim($data['first_name']) == '' ){ $errors[] = "<h5>Введите Имя</h5>";}
              //if ( trim($data['second_name']) == '' ){  $errors[] = "<h5>Введите Фамилию</h5>";}
              //if ( $data['password'] == '' ){ $errors[] = "<h5>Введите пароль</h5>";}
              //if ( $data['password_2'] != $data['password'] ){  $errors[] = "<h5>Повторный пароль введен не верно!</h5>";}

              //проверка на существование одинакового логина
              # проверяем, не сущестует ли пользователя с таким именем
               /* $get_login = mysql_query("SELECT COUNT(id) FROM users WHERE login='".mysql_real_escape_string($_POST['login'])."'");
                if(mysql_result($get_login, 0) > 0)
                {
                  $errors[] = "Пользователь с таким логином уже существует в базе данных";
                }
                # проверям логин
                if(!preg_match("/^[a-zA-Z0-9]+$/",$_POST['login']))
                {
                    $errors[] = "Логин может состоять только из букв английского алфавита и цифр";
                }
                if(strlen($_POST['login']) < 3 or strlen($_POST['login']) > 30)
                {
                    $errors[] = "Логин должен быть не меньше 3-х символов и не больше 30";
                }*/

      
              //проверка на существование одинакового email
              $get_email = mysql_query("SELECT COUNT(id) FROM users WHERE email='".mysql_real_escape_string($_POST['email'])."'");
              if(mysql_result($get_email, 0) > 0)
              {
                $errors[] = "Пользователь с таким email уже существует в базе данных";
              }


              if ( empty($errors) )
              {
                $login = $_SESSION['login'];
                //$password = $_POST['password']; 
                //пароль нельзя хранить в открытом виде, мы его шифруем
                # Убераем лишние пробелы и делаем двойное шифрование
                $password = md5(md5(trim($_POST['password'])));

                $first_name = $_POST['first_name'];
                $second_name = $_POST['second_name'];
                $patronymic = $_POST['patronymic']; // отчество
                $email = $_POST['email'];
                $usertype = $_POST['usertype'];

                /*$result =mysql_query("INSERT INTO users SET 
                login='".$login."',
                password='".$password."',
                first_name='".$first_name."',
                second_name='".$second_name."',
                patronymic='".$patronymic."',
                email='".$email."',
                usertype='".$usertype."'
                ");*/

                $result =mysql_query("UPDATE users SET 
                email='".$email."'
                where login='".$login."'
                ");

                if($result)
                {
                    echo "<span style='color:blue;'>Данные добавлены.</span></br>";
                }
                else
                {
                    echo "<span style='color:red;'>Ошибка! Данные не добавлены.</span></br>";
                }
               
              }
              else
              {
                echo '<div id="errors" style="color:red;">' .array_shift($errors). '</div><hr>';
              }
            }
          ?>
          </div>
        </div>
      </div>
    </form>

  </div>  <!-- /row center -->
</div>


  <!--footer-->
  <footer class="page-footer grey darken-4">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Company Bio</h5>
          <p class="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Settings</h5>
          <ul>
            <li><a class="white-text" href="#!">Link 1</a></li>
            <li><a class="white-text" href="#!">Link 2</a></li>
            <li><a class="white-text" href="#!">Link 3</a></li>
            <li><a class="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Connect</h5>
          <ul>
            <li><a class="white-text" href="#!">Link 1</a></li>
            <li><a class="white-text" href="#!">Link 2</a></li>
            <li><a class="white-text" href="#!">Link 3</a></li>
            <li><a class="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      Made by <a class="orange-text text-lighten-3" href="http://materializecss.com/">Materialize</a>
      </div>
    </div>
  </footer>


  <!--  Scripts-->
  <script src="../materialize/js/jquery-2.1.1.min.js"></script>
  <script src="../materialize/js/materialize.min-v2.js"></script>
  <script src="../materialize/js/materialize.min.js"></script>
  <script src="../materialize/js/init.js"></script>
  <script src="../materialize/js/plugins.min.js"></script>
   

<div class="sidenav-overlay"></div><div class="drag-target"></div>

</body>
</html>