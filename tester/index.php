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
  <title>Главная страница</title>
</head>

<body>

  <!--index-->
  <div class="container">
    <div class="section">
      <h3 align="center">Главная страница</h3>

      <?php
      //Составить Расписание

      echo "<!-- Расписание:-->\n<div class='row center'>";
      if ($_SESSION['usertype'] == 1 || $_SESSION['usertype'] == 2) {
      }

      //Расписание преподавателей
      echo "<h5 class='header col s12 light center'><b>Средство тестирования</b></h5>";

      echo "<div class='row center'>
        <div class='col s12 m3 offset-m1 center-align lighten-1 z-depth-3' style='margin-right:10px; margin-bottom:20px;'>
          <div class='icon-block'>
            <h2 class='center light-blue-text'><i class='material-icons'>business_center</i></h2>
            <h5 class='center'>Создать тест</h5>
            <p class='light'>Информация</p>";
      echo "<br/><a href='create/createquestion.php' class='btn blue darken-2 z-depth-2'>
            Создать</a>
            
          <br/><br/>
          </div>
        </div>";

      //Расписание студентов
      echo "<div class='col s12 m3 center-align lighten-1 z-depth-3' style='margin-right:10px; margin-bottom:20px;'>
          <div class='icon-block'>
            <h2 class='center light-blue-text'><i class='material-icons'>school</i></h2>
            <h5 class='center'>Пройти тесты</h5>
            <p class='light'>Информация</p>";
      echo "<br/><a href='pass/passquestion.php' class='btn blue darken-2 z-depth-2'>
            Пройти</a>
          <br/><br/>
        </div>
        </div><!--flexbox-->";

      //Аудиторный фонд
      echo "<div class='col s12 m3 center-align lighten-1 z-depth-3'>
          <div class='icon-block'>
            <h2 class='center light-blue-text'><i class='material-icons'>meeting_room</i></h2>
            <h5 class='center'>Аудиторный фонд</h5>
            <p class='light'>Информация</p>";
      echo "<br/><a href='mk_raspis_print_aud.php' class='btn blue darken-2 z-depth-2'>
            Посмотреть</a>
          <br/><br/>
        </div>
        </div><!--flexbox-->
        </div><!-- row-->";
      ?>
    </div><!-- class="section"-->
  </div><!-- class="container"-->

  <?php  //include("inc/footer.php");

  
  ?>

</body>

</html>