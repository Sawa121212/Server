<?php
session_start();
require '../conn/db.php';
$file_name = basename(__FILE__);

include("../inc/headerFirstFolder.php");
include("../inc/alertStyle.php");

$data = $_POST;
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
      $answerCount = 2;
      echo "Количество вариантов ответа: " . $answerCount . "<br><br>";

      echo "<form action='" . $_SERVER['PHP_SELF'] . "'  method='POST'>";

      $questionCount = 0;

      echo "<p><b>Вопрос:</b><br><input type='text' name='question'></p>";
      echo "<p><b>Варианты ответа:</b><br></p>
                <input type='text' name='answer1'>";
      echo "<br><input type='text' name='answer2'>";

      if (isset($_POST['do_AddAnswer'])) {
        echo "<br><input type='text' name='answer" . strlen(++$answerCount) . "'></p>";
      }
      ?>

      <div class="row">
        <div class="input-field col s12">
          <!--Проверить ответы-->
          <?php
          echo "<button class='btn blue darken-2  z-depth-2' type='submit' value='Пройти заново' name='do_AddAnswer'>Добавить вариант ответа</button>";
          ?>
        </div>
        </form><br>

        <?php


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