<?php
  if (empty($_SESSION['second_name'])){  $_SESSION['second_name'] = "ошибка"; }
  if (empty($_SESSION['first_name'])){  $_SESSION['first_name'] = "ошибка"; }
  if (empty($_SESSION['patronymic'])){  $_SESSION['patronymic'] = "ошибка"; }
  if (empty($_SESSION['login'])){  $_SESSION['login'] = "ошибка"; }
  if (empty($_SESSION['email'])){  $_SESSION['email'] = "ошибка"; }
  if (empty($_SESSION['usertype'])){  $_SESSION['usertype'] = 4; }
  if (empty($_SESSION['thema'])){  $_SESSION['thema'] = 0; }
?>
<head>
	<!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <?php
    /*if($_SESSION['thema'] == 33)
    {
      echo "<link type='text/css' rel='stylesheet' href='../materialize/css/materialize.min.black.css' media='screen,projection'/>";
    }
    else
    {*/
      echo "<link type='text/css' rel='stylesheet' href='../materialize/css/materialize.min.css' media='screen,projection'/>";
    //}
	?>
    <link type="text/css" rel="stylesheet" href="../materialize/css/style.css" media="screen,projection">

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>


	<!--<meta http-equiv="Content-Type" content="text/html; charset=utf-8">-->
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
	<meta http-equiv="Content-Language" content="ru">
	<meta content="text/css">
	<META HTTP-EQUIV="Expires" CONTENT="0">
</head>

<body>
      <!--ПК Выподающее Меню Входа-->
      <ul id="dropdown3" class="dropdown-content">
        <li><a href="../account_login.php">Войти<i class="material-icons left Tiny">airplay</i></a></li><li class="divider"></li>
      </ul>
      <!--ПК Выподающее Меню Выхода-->
      <ul id="dropdown_logoning" class="dropdown-content">
        <li><a href="../account_profile.php">Профиль<i class="material-icons left Tiny">account_box</i></a></li><li class="divider"></li>
        <li><a href="../account_logout.php">Выйти<i class="material-icons left Tiny">exit_to_app</i></a></li></a></li><li class="divider"></li>
      </ul>

  <!--Navbar -->
  <?php
    if($_SESSION['thema'] == 1)
    {
      echo "<nav class='nav-extended darken-3' style='background:#202020;' role='navigation'>";
    }
    else
    {
      echo "<nav class='nav-extended blue darken-3' role='navigation'>";
    }
  ?>
    <div class="nav-wrapper  z-depth-2">
      <a href="#" class="brand-logo"></a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger right"><i class="material-icons">menu</i></a>

      <!--ПК Меню -->
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="../index.php">Главная страница</a></li>

         <!--Регистрация-->
        <?php
          if ($_SESSION['usertype'] == 1)
          {
            echo "<li><a href='../account_signup.php'>Регистрация</a></li>
				<li><a href='account_index.php'>Аккаунты</a></li>";
          }
        ?>

        <!--Аккаунт-->
        <?php if (isset ($_SESSION['logged_user']) ) :
            echo "<li><a class='dropdown-button' href='#!' data-target='dropdown_logoning'>";
            echo $_SESSION['login'];
            echo "<i class ='material-icons left'>account_circle</i></a></li>";
          ?>
          <?php else :
            echo "<li><a class='dropdown-button' href='#!' data-target='dropdown3'> &nbsp;Аккаунт<i class ='material-icons left'>account_circle</i></a></li>";
          ?>
          <?php endif;?>
      </ul>

	   <!--Плавающее Меню -->
	  <?php
    echo "<ul class='tabs tabs-transparent'>
    <li class='tab'><a onclick='javascript:document.location.href=\"index.php\"' href='#'><i class ='material-icons' style='line-height: 47px;'>home</i></a></li>";

		/*if ($_SESSION['usertype'] == 1 || $_SESSION['usertype'] == 2)
		{
			echo "<li class='tab'><a onclick='javascript:document.location.href=\"../mk_raspis.php\"' href='#'"; if($file_name == "mk_raspis.php"){ echo "class='active'";}	echo ">Составить расписание</a></li>
					<li class='tab'><a onclick='javascript:document.location.href=\"../mk_raspis_edit.php\"' href='#'"; if($file_name == "mk_raspis_edit.php"){ echo "class='active'";}	echo ">Учебный план</a></li>";
		}
	  echo "
		<li class='tab'><a onclick='javascript:document.location.href=\"../mk_raspis_print_prepod.php\"' href='#'"; if($file_name == "mk_raspis_print_prepod.php"){ echo "class='active'";}	echo ">Расписание преподавателей</a></li>
		<li class='tab'><a onclick='javascript:document.location.href=\"../mk_raspis_print_students.php\"' href='#'"; if($file_name == "mk_raspis_print_students.php"){ echo "class='active'";}	echo ">Расписание студентов</a></li>
		<li class='tab'><a onclick='javascript:document.location.href=\"../mk_raspis_print_aud.php\"' href='#'"; if($file_name == "mk_raspis_print_aud.php"){ echo "class='active'";}	echo ">Аудиторный фонд</a></li>
		*/
		echo "</ul>";
	  ?>
    </div>

  </nav>

  <!--Мобильное Меню -->
  <ul class="sidenav" id="mobile-demo">
    <ul class ="blue darken-3 z-depth-1">
      <div class="row">               <!--Аккаунт-->
        <div class="input-field col s3">
          <li><i class ="material-icons left medium">account_circle</i></li>
        </div>
        <div class="input-field col s9">
          <?php if (isset ($_SESSION['logged_user']) )
            {
              echo "<li><a href='../account_profile.php' style='font-size: 18px; color: white;'>" . $_SESSION['login'] ."</a></li>
                    <li><a href='../account_profile.php' style='font-size: 13px; color: white;'>";
                    if($_SESSION['usertype'] == 1){echo "Администратор";};
                    if($_SESSION['usertype'] == 2){echo "Редактор";};
                    if($_SESSION['usertype'] == 3){echo "Преподаватель";};
                    if($_SESSION['usertype'] == 4){echo "Студент";};
              echo "</a>
                    <a href='../account_logout.php' style='font-size: 14px; color: white;'>Выйти</a></li>";
            }
            else
            {
              echo "<li><a href='../account_login.php' style='font-size: 14px; color: white;'>Войти</a></li>";
            }
          ?>
        </div>
      </div>
    </ul>


    <li><a href="../index.php">Главная страница<i class="material-icons left Tiny">chevron_right</i></a></li>
      <li class="divider"></li>

      <!--
    <li><a href="../mk_raspis_print_prepod.php">Расписание преподавателей<i class="material-icons left Tiny">chevron_right</i></a></li>
      <li class="divider"></li>
    <li><a href="../mk_raspis_print_students.php">Расписание студентов<i class="material-icons left Tiny">chevron_right</i></a></li>
      <li class="divider"></li>
    <li><a href="../mk_raspis_print_aud.php">Аудиторный фонд<i class="material-icons left Tiny">chevron_right</i></a></li>
      <li class="divider"></li>
-->
    <!--Регистрация-->
    <?php if ($_SESSION['usertype'] == 1 || $_SESSION['usertype'] == 2)
    {
      echo "<li><a href='../mk_raspis.php'>Создать расписание<i class='material-icons left Tiny'>chevron_right</i></a></li><li class='divider'></li>";
      echo "<li><a href='../mk_raspis_edit.php'>Учебный план<i class='material-icons left Tiny'>chevron_right</i></a></li><li class='divider'></li>";
      echo "<li><a href='../account_signup.php'>Регистрация</a></li><li class='divider'></li>";
      echo "<li><a href='../accounteditor/account_index.php'>Аккаунты</a></li>";
    }
    ?>
  </ul><!--//Мобильное Меню -->


</body>
  <!--  Scripts-->
  <script src="../materialize/js/jquery-2.1.1.min.js"></script>
  <script src="../materialize/js/materialize.min-v2.js"></script>
  <script src="../materialize/js/materialize.min.js"></script>
  <script src="../materialize/js/init.js"></script>