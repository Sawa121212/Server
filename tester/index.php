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
    if($_SESSION['usertype'] == 1 || $_SESSION['usertype'] == 2)
    {    
      echo "
      <!-- Расписание:--> 
      <div class='row center'>
        <h5 class='header col s12 light center'><b>Расписание</b></h5>

          <div class='col s12 m5 offset-m1 center-align lighten-1 z-depth-3' style='margin-right:10px; margin-bottom:20px;'>
            <div class='icon-block'>
              <h2 class='center light-blue-text'><i class='material-icons'>edit</i></h2>
              <h5 class='center'>Создать расписание</h5>
              <p class='light'>Информация</p>";
              echo "<br/><a href='mk_raspis.php' class='btn blue darken-2 z-depth-2'>
                Составить</a>     
            <br/><br/>
            </div>
          </div>";

      echo "
      <!-- Учебный план--> 
          <div class='col s12 m5 center-align lighten-1 z-depth-3' style='margin-right:10px; margin-bottom:20px;'>
            <div class='icon-block'>
              <h2 class='center light-blue-text'><i class='material-icons'>line_style</i></h2>
              <h5 class='center'>Учебный план</h5>
              <p class='light'>Информация</p>";
              echo "<br/><a href='mk_raspis_edit.php' class='btn blue darken-2 z-depth-2'>
              Посмотреть</a>     
            <br/><br/>
            </div>
          </div>
        </div><!-- row-->";
      }

      //Расписание преподавателей
      echo "<h5 class='header col s12 light center'><b>Посмотреть</b></h5>
      <div class='row center'>
        <div class='col s12 m3 offset-m1 center-align lighten-1 z-depth-3' style='margin-right:10px; margin-bottom:20px;'>
          <div class='icon-block'>
            <h2 class='center light-blue-text'><i class='material-icons'>business_center</i></h2>
            <h5 class='center'>Расписание преподавателей</h5>
            <p class='light'>Информация</p>";
            echo "<br/><a href='mk_raspis_print_prepod.php' class='btn blue darken-2 z-depth-2'>
            Посмотреть</a>
            
          <br/><br/>
          </div>
        </div>";        

        //Расписание студентов
        echo "<div class='col s12 m3 center-align lighten-1 z-depth-3' style='margin-right:10px; margin-bottom:20px;'>
          <div class='icon-block'>
            <h2 class='center light-blue-text'><i class='material-icons'>school</i></h2>
            <h5 class='center'>Расписание студентов</h5>
            <p class='light'>Информация</p>";
            echo "<br/><a href='mk_raspis_print_students.php' class='btn blue darken-2 z-depth-2'>
            Посмотреть</a>
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

<?php  //include("inc/footer.php");?>
  
</body>
</html>