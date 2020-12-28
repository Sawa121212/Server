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

      echo "<p>Количество вопросов: <b>" . mysqli_num_rows($select) . "</b></p>";
      // массив правильных ответов
      $applyArray = array();
      $applyArray = array_values($applyArray);

      echo "<form action='" . $_SERVER['PHP_SELF'] . "'  method='POST' name='test_form'>";
      //echo "<form class='col s12' style='width: 95%;' form action=". $_SERVER['PHP_SELF']. " method='POST'>";
      while ($r_pytn = mysqli_fetch_array($select)) {
        $radioValue = 1;
        echo "<p><b>" . $questID . ". " . $r_pytn['question'] . "<span id='questApply". $questID ."'></span></b></p>";
        $answersArray = explode("\r", $r_pytn['answers']);
        foreach ($answersArray as $value) {
          echo "<p><label><input class='with-gap' name='group" . $questID . "' type='radio' value='" . $radioValue . "'/>
                      <span id='" . $questID . $radioValue . "'>" . $value . "</span>
                </label></p>";
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
          echo "<br><p><b>Правельных ответов: <span id='applysQuestion'>0</span></b></p>";

          //echo "<button class='btn blue darken-2  z-depth-2' type='submit' value='Закончить тест' name='do_checkApplay'>Закончить тест</button>";
          echo "<input type='button' class='btn blue darken-2  z-depth-2' onclick='Testing(test_form)' name='do_checkApplay' value='Завершить тест'><br><br>";
          echo "<button class='btn blue darken-2  z-depth-2' type='submit' value='Пройти заново' name='do_refreshPage'>Пройти заново</button>";
          ?>
        </div>
        </form><br>
      </div> <!-- /row center -->
    </div>

    <!--  Scripts-->
    <script src="../materialize/js/jquery-2.1.1.min.js"></script>
    <script src="../materialize/js/materialize.min-v2.js"></script>
    <script src="../materialize/js/materialize.min.js"></script>
    <script src="../materialize/js/init.js"></script>
    <script src="../materialize/js/plugins.min.js"></script>

    <?php echo "<script>
      var applys = new Array();
      applys = [\n";

    for ($i = 0; $i < mysqli_num_rows($select); $i++) {
      echo $applyArray[$i];
      if ($i + 1 != mysqli_num_rows($select)) echo ",\r";
    }

    echo "];
      function Testing(obj) {
        var applyQuestion = 0; 

        for (var i = 0; i < applys.length; i++) {
          var currentIndex = i+1;
          var id = currentIndex.toString() + applys[i].toString();

          var radioBtnName = 'group' + currentIndex.toString();
          var rad=document.getElementsByName(radioBtnName);
          
          for (var index=0; index < rad.length; index++) {
            if (rad[index].checked) {
              if (index+1 == applys[currentIndex])
              {
                applyQuestion++;
              }
              var indexRdBtn = index + 1;
              var name = currentIndex.toString()+indexRdBtn.toString();              
              document.getElementById(name).className = 'answer-notapply';
            }
          }
          var questApplyId = questApply.toString() + currentIndex.toString();
          document.getElementById(questApplyId).textContent = 'На данный вопрос вы не дали ответ';

          document.getElementById(id).className = 'answer-apply';

        }
        document.getElementById('applysQuestion').textContent = applyQuestion.toString();
      }
      </script>";
    ?>

    <div class="sidenav-overlay"></div>
    <div class="drag-target"></div>

</body>

</html>