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
    //Составить
      echo "
      <!-- Расписание:-->
      <div class='row center'>
        <h5 class='header col s12 light center'><b>Расписание</b></h5>

          <div class='col s12 m5 offset-m1 center-align lighten-1 z-depth-3' style='margin-right:10px; margin-bottom:20px;'>
            <div class='icon-block'>
              <h2 class='center light-blue-text'><i class='material-icons'>edit</i></h2>
              <h5 class='center'>Раскодировать код</h5>
              <p class='light'>Используя данную функцию, Вы соглашаетесь что: вы не сумели самостоятельно.
              Я сдался (надеюсь мотивирует еще 1 попытку решить самостоятельно) </p>";
              echo "<br/><a href='raskoder.php' class='btn blue darken-2 z-depth-2'>
                Согласен</a>
            <br/><br/>
            </div>
          </div>";

      echo "
      <!-- Учебный план-->
          <div class='col s12 m5 center-align lighten-1 z-depth-3' style='margin-right:10px; margin-bottom:20px;'>
            <div class='icon-block'>
              <h2 class='center light-blue-text'><i class='material-icons'>line_style</i></h2>
              <h5 class='center'>Создать код</h5>
              <p class='light'>Надеемся выйдет, хи</p>";
              echo "<br/><a href='#' class='btn blue darken-2 z-depth-2'>
              скоро</a>
            <br/><br/>
            </div>
          </div>
        </div><!-- row-->";
    ?>
    </div><!-- class="section"-->
  </div><!-- class="container"-->

<?php  //include("inc/footer.php");?>

</body>
</html>