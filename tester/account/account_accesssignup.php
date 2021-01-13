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
  <div class="container" align="center">
    <br>
    <div class="row" align="center">
      <div class="row">
        <span style='color:blue;'>Пользователь зарегистрирован.</span></br>
        <div class="input-field col s12">

          <!--Зарегистрировать-->
          <form style="width: 70%;" form action="<?php $_SERVER['PHP_SELF'] ?>" method="POST">
            <!-- <button class='btn blue darken-2  z-depth-2' type='submit' value='Войти' name='do_login'>Войти</button> -->
            <a  href='account_login.php' class='button'>Войти</a></li>
          </form>
        </div>
      </div>

      <?php
      // if (isset($_POST['do_login'])) {
      //   //если кликнули на button
      //   /* Перенаправление браузера на другую страницу в той же директории, что и
      //   изначально запрошенная */
      //   $host  = $_SERVER['HTTP_HOST'];
      //   $uri   = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
      //   $extra = 'account_login.php';
      //   $urlHost = $host . $uri."/".$extra;
      //   echo $urlHost;
        
      //   header("Location: http://$urlHost");
      //  // exit;
      //}
      ?>

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