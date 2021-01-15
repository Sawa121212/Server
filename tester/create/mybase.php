<?php
    session_start();
    $folderRootCount = 2;

    include("../inc/functions/func_folderRoot.php");

    require $folderRoot . 'conn/db.php';
    $file_name = basename(__FILE__);

    include($folderRoot . "inc/alertStyle.php");
    $data = $_POST;
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <? include($folderRoot . "inc/z_head.php"); ?>
    <title>Создание темы</title>
</head>
<body>
<!--left panel-->
<? include($folderRoot . "inc/z_leftPanel.php"); ?>

<!--index-->
<div class="container">
    <br>
    <div class="row">
        <h3 align='center'>Мои темы</h3>
        <p>Выбери все фрукты и ягоды, которые красного цвета.</p>

        <? // устанавливаем текущую активную базу данных ($database_name, $link_identifier)
            // mysqli_select_db($link, "id8435427_checkers");
            // $select = mysqli_query($link, "SELECT id, question, answers, apply FROM quest_csharp");?>
        <form style="width: 70%;" form action="<?php $_SERVER['PHP_SELF'] ?>" method="POST">
            <?php
                $questionCount = 0;
                echo "<b>Вопрос, варианты ответа:</b><br>
        <textarea name='questionAndanswer' cols='40' rows='10' minlength='3' maxlength='500' placeholder='Текст (макс. 500 символов)' class='materialize-textarea'></textarea></p>
        <span class='helper-text' data-error='wrong' data-success='right'></span><br>
        <p><b>Правельные ответы:</b><br>
          <input type='text' name='applys' autocomplete='off'>
          <span class='helper-text' data-error='wrong' data-success='right'>Если несколько номеров ответа, пишите их через запятые</span>";
            ?>
            <p></p>
            <div class="row">
                <div class="input-field col s12">
                    <!--Проверить ответы-->
                    <button class='btn blue darken-2  z-depth-2' type='submit' name='do_AddAnswer'>Добавить вариант
                                                                                                   ответа
                    </button>
                    <a href="createquestion.php"> ddddd</a>
                </div>
            </div>
        </form>
        <br>


        <div class="row">
            <div class="infoText">
                <p><b>Здесь будет пример вашего вопроса:</b></p>
                <?php
                    if (isset($data['do_AddAnswer'])) { //если кликнули на button
                        $_SESSION['questionAndanswer'] = $_POST['questionAndanswer'];
                        $_SESSION['applys'] = $data['applys'];
                        echo "<p> Вопрос, ответы: " . $_SESSION['questionAndanswer'];
                        echo "<p> Првильные ответы: " . $_SESSION['applysQ'];
                    }
                ?>
            </div>
        </div>
    </div> <!-- /row center -->
</div>

<!--footer-->
<?php
    include($folderRoot . "inc/z_footer.php");
?>
</body>
</html>