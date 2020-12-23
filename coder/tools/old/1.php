<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <!--<link href="img/icon" rel="stylesheet">-->
	<!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="materialize/css/materialize.min.css" media="screen,projection"/>
    <link type="text/css" rel="stylesheet" href="materialize/css/style.css" media="screen,projection">

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>    

	
	<!--<meta http-equiv="Content-Type" content="text/html; charset=utf-8">-->
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
	<meta http-equiv="Content-Language" content="ru">	
	<meta content="text/css">	
	<META HTTP-EQUIV="Expires" CONTENT="0">	
</head>
<body>

      <!--ПК Выподающее Меню -->
      <ul id="dropdown1" class="dropdown-content">
        <li><a href="mk_raspis_print_prepod.php">Для преподавателей</a></li><li class="divider"></li>
        <li><a href="mk_raspis_print_students.php">Для студентов</a></li><li class="divider"></li>
        <li><a href="mk_raspis_print_aud.php">Аудиторных фондов</a></li>
      </ul>
      <!--Мобильное Выподающее Меню -->
      <ul id="dropdown2" class="dropdown-content blue lighten-5">
        <li><a href="mk_raspis_print_prepod.php">Для преподавателей</a></li><li class="divider"></li>
        <li><a href="mk_raspis_print_students.php">Для студентов</a></li><li class="divider"></li>
        <li><a href="mk_raspis_print_aud.php">Аудиторных фондов</a></li>
      </ul>
     

  <nav class="blue darken-3" role="navigation">
    <div class="nav-wrapper container">
    <a id="logo-container" href="#" class="brand-logo"><!--<img src="img/UMO.jpg" alt="">-->Logotipe</a>      

      <!-- ПК Меню -->
      <ul class="right hide-on-med-and-down">
        <li><a href="#">Главная страница</a></li>
        <li><a href="#">sass1</a></li>
        <li><a href="#">sass2</a></li>
        <!-- Dropdown Trigger -->
        <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Печать расписания<i class="material-icons right">arrow_drop_down</i></a></li> 
      </ul>

      <!-- Мобильное Меню -->
      <ul id="nav-mobile" class="sidenav">
        <li class ="blue darken-3 z-depth-1" style="padding: 0 32px; "><span style="font-size: 18px;">Меню</span></li>
        <li><a href="#">Главная страница</a></li>
        <li><a href="#">sass1</a></li><li class="divider"></li>
        <li><a href="#">sass2</a></li><li class="divider"></li>
        <li><a class="dropdown-trigger" href="#!" data-target="dropdown2">Печать расписания<i class="material-icons right">arrow_drop_down</i></a></li>
        <li class="divider"></li>
      </ul>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
  </nav>
  
  <!--index-->
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br><br>
      <h1 class="header center orange-text">Starter Template</h1>
      <div class="row center">
        <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
        <br>
        <?php
            echo "<table width='80%' cellspacing='0' cellpadding='1' border='0' class='tabl1' align='center'>";            
            echo "<tr><td width='40%'  align='right'>Факультет:&nbsp;</td><td width='40%' align='left'></td></tr>";            
            echo "<tr><td width='40%' align='right'>Форма обучения:</td><td width='40%'></td></tr>";
            echo "</td></tr>";
            echo "<tr><td width='40%'  align='right'>Литера специальности:&nbsp;</td><td width='40%' align='left'><input type='text' size='3' name='lit' tabindex='2'></td></tr>";
           
            echo "<tr><td width='40%' align='center'><input type='hidden' name='new' value='2'>
            <button class='btn blue darken-2 waves-effect waves-light z-depth-2' type='submit' value='Ввод данных'>Ввод данных<i class='material-icons left'>border_color</i></button></td>";
            echo "<td width='40%' align='center'>
            <button class='btn red darken-1 waves-effect waves-light z-depth-2' type='reset' value='Отмена'>Очистить<i class='material-icons left'>close</i></button></td></tr></table>";
        
            echo "<hr size='2px' width='95%'>";
            ?>
      </div>
      <div class="row center">
        <a href="#" id="download-button" class="btn-large waves-effect waves-light blue darken-3">Get Started</a>
      </div>
      <br><br>

    </div>
  </div>


  <div class="container">
    <div class="section">

      <!--   Icon Section   -->
      <div class="row">
        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">flash_on</i></h2>
            <h5 class="center">Speeds up development</h5>

            <p class="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components.
               Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>
            <h5 class="center">User Experience Focused</h5>

            <p class="light">By utilizing elements and principles of Material Design, we were able to create a framework that
               incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive 
               system across all platforms allow for a more unified user experience.</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>
            <h5 class="center">Easy to work with</h5>

            <p class="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
          </div>
        </div>
      </div>

    </div>
    <br><br>
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
  <script src="materialize/js/jquery-2.1.1.min.js"></script>
  <script src="materialize/js/materialize.js"></script>
  <script src="materialize/js/init.js"></script>

  

<div class="sidenav-overlay"></div><div class="drag-target"></div>

</body></html>