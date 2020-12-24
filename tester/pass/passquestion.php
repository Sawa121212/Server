<?php
session_start();
require '../conn/db.php';
$file_name = basename(__FILE__);

include("../inc/headerFirstFolder.php");

$data = $_POST;
$testIsChecked = false;
?>

<!DOCTYPE html>
<html>

<head>
  <title>Вопросник</title>
</head>

<body>

  <!--index-->
  <div class="container">
    <br>
    <div class="row">
      <?php
      //устанавливаем текущую активную базу данных ($database_name, $link_identifier)
      mysqli_select_db($link, "id8435427_checkers");
      $select = mysqli_query($link, "SELECT id, question, answers, apply FROM quest_csharp");

      echo "<h3 align='center'>Создание вопросов</h3>";
      $questID = 1;

      echo "Количество вопросов: " . mysqli_num_rows($select) . "<br><br>";

      // массив правильных ответов
      $applyArray = array();
      $applyArray = array_values($applyArray);

      echo "<form action='" . $_SERVER['PHP_SELF'] . "'  method='POST'>";
      //echo "<form class='col s12' style='width: 95%;' form action=". $_SERVER['PHP_SELF']. " method='POST'>";
      while ($r_pytn = mysqli_fetch_array($select)) {
        $radioValue = 1;
        echo "<p><b>" . $questID . ". " . $r_pytn['question'] . "</b></p>";
        $answersArray = explode("\r", $r_pytn['answers']);
        foreach ($answersArray as $value) {
          echo "<p><label><input class='with-gap' name='group" . $questID . "' type='radio' value='" . $radioValue . "'/><span id='" . $questID . $radioValue . "'>" . $value . "</span></label></p>";
          $radioValue++;
        }
        $applyArray[] =  $r_pytn['apply'];
        $questID++;
      }

      //Войти-->
      // if ($_SESSION['usertype'] == 2 || $_SESSION['usertype'] == 3 || $_SESSION['usertype'] == 4)
      // {
      //   echo "<div align='center' style='color:red;'><b><i class ='material-icons'>warning</i>У вас нет доступа к данной операции</b></div><br/>";          
      // }
      ?>
      <div class="row">
        <div class="input-field col s12">
          <!--Проверить ответы-->
          <?php
            echo "<button class='btn blue darken-2  z-depth-2' type='submit' value='Закончить тест' name='do_checkApplay'>Закончить тест</button>";
            echo "<button class='btn blue darken-2  z-depth-2' type='submit' value='Пройти заново' name='do_refreshPage'>Пройти заново</button>";
          ?>
        </div>
        </form><br>

        <?php
        if (isset($_POST['do_refreshPage']))
        {
          $testIsChecked = false;
          header("Refresh:0");
        }
        if (isset($_POST['do_checkApplay']))
        {
          $testIsChecked = true;
          $applyQuestion = 0;
          for ($i = 0; $i < mysqli_num_rows($select); $i++) {
            if ($_POST["group" . strval($i + 1) . ""] == $applyArray[$i]) {
              //echo $_POST["group" . strval($i + 1) . ""];
              $applyQuestion++;
            }
          }
          echo "<br><p><b>Правельных ответов: " . $applyQuestion . "</b></p>";
        }

        ?>
      </div> <!-- /row center -->
    </div>
    <!--  Scripts-->
    <script src="../materialize/js/jquery-2.1.1.min.js"></script>
    <script src="../materialize/js/materialize.min-v2.js"></script>
    <script src="../materialize/js/materialize.min.js"></script>
    <script src="../materialize/js/init.js"></script>
    <script src="../materialize/js/plugins.min.js"></script>


    <div class="sidenav-overlay"></div>
    <div class="drag-target"></div>

</body>

</html>