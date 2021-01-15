<?php
  session_start();
  require '../conn/db.php';
  $file_name = basename(__FILE__);
  
include("../inc/functions/headerFirstFolder.php");
include("../inc/alertStyle.php");
  $data = $_POST;
?>
<!DOCTYPE html>
<html>
<head>	
  <title>Редакторы</title>
</head>
<body>

  <!--index-->
<div class="container ">
  <br>
  <div class="row"> 
<?php
  echo "<h3 align='center'>Редакторы</h3>";

 if ($_SESSION['usertype'] == 1)
  {

  $select= mysqli_query($link, "SELECT id,login, email, second_name, first_name, patronymic, usertype FROM users where usertype=2 ORDER BY first_name"); 

  //Обрабатывает ряд результата запроса
  $num = 1;
  echo "<ul class='collection'>";
    while ($r= mysqli_fetch_array($select)) {
        echo "<li class='collection-item avatar' id='UUU_".$r['id']."'>
        <i class ='material-icons circle'>account_circle</i>
        <span class='title'><h5>";
          if($r['usertype'] == 1){echo "Администратор";};
          if($r['usertype'] == 2){echo "Редактор";};
          if($r['usertype'] == 3){echo "Преподаватель";};
          if($r['usertype'] == 4){echo "Студент";};
        echo "</h5></span>".
        "<span class='second_name'>".$r['second_name']."</span>&nbsp;
        <span class='first_name'>".$r['first_name']."</span>&nbsp;     
        <span class='patronymic'>".$r['patronymic']."</span><br/>".
          "Логин: <span class='login'>".$r['login']."</span><br/>
          Email: <span class='Email'>".$r['email']."</span><br>".
          "</li>";
        $num++;
    }
    if($num == 1)
    {
      echo "<li class='collection-item avatar lighten-2'>
      <span class='title'><h5 align='center'>Нет зарегистрированных пользователей</h5></span></li>";
      echo "<br><li class='collection-item avatar' align='center'>
      <a href='../account/account_signup.php' class='btn-large blue darken-2  z-depth-2'>
      Зарегистрировать аккаунт</a></li>";     
    }

    echo "</ul>";
  //mysqli_close($conn_hard);// закрываем подключение к БД.
 
  }
  //Войти-->
  if ($_SESSION['usertype'] == 2 || $_SESSION['usertype'] == 3 || $_SESSION['usertype'] == 4)
  {
    echo "<div align='center' style='color:red;'><b><i class ='material-icons'>warning</i>У вас нет доступа к данной операции</b></div><br/>";          
  }
?>
  </div>  <!-- /row center -->
</div>



  <!--  Scripts-->
  <script src="../materialize/js/jquery-2.1.1.min.js"></script>
  <script src="../materialize/js/materialize.min-v2.js"></script>
  <script src="../materialize/js/materialize.min.js"></script>
  <script src="../materialize/js/init.js"></script>
  <script src="../materialize/js/plugins.min.js"></script>
   

<div class="sidenav-overlay"></div><div class="drag-target"></div>

</body>
</html>