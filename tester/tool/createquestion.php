<?php
    session_start();
    $folderRootCount = 2;
    include("../inc/functions/func_folderRoot.php");
    include($folderRoot . "inc/functions/func_SESSION.php");
    CancelIsLogout($folderRoot);

    require $folderRoot . 'conn/db.php';
    $file_name = basename(__FILE__);

    include($folderRoot . "inc/alertStyle.php");
    $data = $_POST;
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <? include($folderRoot . "inc/z_head.php"); ?>
    <title>Редактирование</title>
</head>
<body>
<!--left panel-->
<? include($folderRoot . "inc/z_rightPanel.php"); ?>


<!--index-->
<main>
    <div class="container">
        <div class="row">
            <h3 align='center'>Редактирование</h3>
        </div>

        <div class="row">
            <h5 align="center">Редактируйте и добавляйте вопросы</h5>

            <div class="infoText">
                <div class="infoTextZag">
                    <p><b>Пример</b></p>
                </div>
                <p>Выбери все фрукты и ягоды, которые красного цвета.</p>
                <p>Клубника</p>
                <p>Абрикос</p>
                <p>Банан</p>
                <p>Вишня</p>
                <p>Малина</p>
                <p>Ананас</p>
            </div>

            <!--Добавить вопрос-->
            <div class='col s12 m12 lighten-1 z-depth-2' style='margin-bottom: .75em;'>
                <form form action="<?php $_SERVER['PHP_SELF'] ?>" method="POST">
                    <?php
                        $questionCount = 0;
                        echo "<p><b>Вопрос:</b>
                    <input type='text' name='question' autocomplete='off'>
                    
                    <b>Варианты ответа:</b>
                    <textarea name='answers' cols='40' rows='10' minlength='3' maxlength='500' placeholder='Текст (макс. 500 символов)' class='materialize-textarea'></textarea>
                    <span class='helper-text' data-error='wrong' data-success='right'></span><br>
                    
                    <p><b>Правельные ответы:</b>
                    <input type='text' name='applys' autocomplete='off'>
                    <span class='helper-text' data-error='wrong' data-success='right'>Если несколько номеров ответа, пишите их через запятые</span>";
                    ?>
                    <div class="row">
                        <div class="input-field col s12">
                            <button class='btn darken-2  z-depth-2' type='submit' name='add'>
                                <i class='material-icons left'>add</i>Добавить вопрос
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <br>

            <div class="row">
                <ul class="collection with-header z-depth-1">
                    <?php
                        $url = $_SERVER['REQUEST_URI'];
                        $arr_url = parse_url($url);

                        if (!empty($arr_url['query'])) {
                            if (empty($_SESSION['getUrl'])) {
                                $_SESSION['getUrl'] = $arr_url['query'];
                            }
                        } else {
                            $arr_url['query'] = $_SESSION['getUrl'];
                            $_SESSION['getUrl'] = null;
                        }

                        $questName = str_replace('edit_db=', '', $arr_url['query']);

                        //устанавливаем текущую активную базу данных
                        mysqli_select_db($link, "tables");

                        // проверяем, не удалена ли или не заблокирована ли данная БД
                        $checkDB = mysqli_query($link, "SELECT id, del, is_blocked,creator FROM list WHERE table_ID ='$questName'");
                        $arrayDBBlocked = mysqli_fetch_array($checkDB);
                        /// ToDo: cделать доступ
                        if ($arrayDBBlocked['creator'] != $_SESSION['uid'] || $arrayDBBlocked['del'] == 'true') {
                            /// ToDo: зделать Приватный доступ
                            header('Location: ' . $folderRoot . 'index.php');
                            exit;
                        }
                        $select = mysqli_query($link, "SELECT id, question, answers, apply FROM $questName");

                        // zagalovok
                        echo "<li class='collection-header'><h5>Ваши вопросы</h5>";
                        echo "<p>Количество вопросов: <b>" . mysqli_num_rows($select) . "</b></p></li>";

                        // массив правильных ответов
                        $applyArray = array();
                        $applyArray = array_values($applyArray);

                        $questID = 1;
                        echo "<form action='" . $_SERVER['PHP_SELF'] . "'  method='POST' name='test_form" . $questID . "'>";
                        echo "<li class='collection-item' >";
                        while ($r_pytn = mysqli_fetch_array($select)) {
                            echo "<div class='col s12 m12 lighten-1 z-depth-2' style='margin-bottom: .75em;'>";
                            $radioValue = 1;
                            echo "<div class='col s12 m12 lighten-1 z-depth-2' style='margin-bottom: .75em;margin-top: .75em;'>
                                    <p><b>" . $questID . ". " . $r_pytn['question'] . "
                                    <span id='questApply" . $questID . "' style='color:red;'>
                                  </span></b></p>";
                            $answersArray = explode("\r\n", $r_pytn['answers']);

                            foreach ($answersArray as $value) {
                                if ($value != "" || !empty($value)) {
                                    echo "<p><label><input class='with-gap' name='group" . $questID . "' type='";
                                    if (count(explode(",", $r_pytn['apply'])) > 1) {
                                        echo "checkbox";
                                    } else {
                                        echo "radio";
                                    }
                                    echo "' value='" . $radioValue . "'/>
                                    <span id='" . $questID . $radioValue . "'>" . $value . "</span></label>
                                    </p>";
                                    $radioValue++;
                                }
                            }
                            echo "</div>";

                            echo "<br><p><b>Вопрос:</b>
                                  <input type='text' name='question" . $r_pytn['apply'] . "' autocomplete='off' value='" . $r_pytn['question'] . "'>";

                            echo "<p><b>Варианты ответа:</b><br>";
                            echo "<textarea name='answers" . $r_pytn['apply'] . "' cols='40' rows='10' minlength='3' maxlength='500' 
                            placeholder='Текст (макс. 500 символов)' class='materialize-textarea'>";
                            print_r($r_pytn['answers']);
                            echo "</textarea>";

                            echo "<p><b>Правельные ответы:</b><br>
                              <input type='text' name='applys" . $r_pytn['apply'] . "' autocomplete='off' value='" . $r_pytn['apply'] . "'>";

                            $applyArray[] = $r_pytn['apply'];
                            $questID++;

                            // Удалить вопрос
                            echo "<p><button class='btn darken-2 z-depth-2 red' type='submit' name='deleteAnswer' value='" . $r_pytn['id'] . "'>
                                    <i class='material-icons left'>delete</i>Удалить вопрос
                                </button></p>";

                            echo "</div>";
                        }

                        echo "</li>";

                        // Сохранить / Отмена
                        echo "<div class='row'>
                                <div class='input-field col s6 m3'>
                                    <button class='btn darken-2 z-depth-2' type='submit' name='save'>
                                        <i class='material-icons left'>save</i>Сохранить
                                    </button>
                                </div>
                                <div class='input-field col s6 m3'>
                                    <button class='btn darken-2  z-depth-2 red' type='submit' name='cancel'>
                                        <i class='material-icons left'>cancel</i>Отмена
                                    </button>
                                </div>
                            </div>";
                        echo "</form>";
                    ?>
            </div>
        </div> <!-- /row center -->
    </div>
</main>


<?php
    // cancel
    if (isset($data['cancel'])) {
        $_SESSION['getUrl'] = null;
        header('Location: ' . $folderRoot . 'tool/mybase.php');
        exit;
    }

    // save
    if (isset($data['save'])) {
        $question = $_POST['question'];
        $answers = $_POST['answers'];
        $applys = $_POST['applys'];

        $sql_add_row = "INSERT INTO '$questName' SET
        question= '" . $question . "',
        answers='" . $answers . "',
        apply='" . $applys . "' ";

        if (mysqli_query($link, $sql_add_row)) {
            $_SESSION['getUrl'] = null;
            header("Location: 'createquestion.php?" . $arr_url['query'] . "'");
            exit;
        }
    }

    // Add
    if (isset($data['add'])) {
        $question = $_POST['question'];
        $answers = $_POST['answers'];
        $applys = str_replace(' ', '', $_POST['applys']);

        $sql_add_row = "INSERT INTO " . $questName . " SET
        question= '" . $question . "',
        answers='" . $answers . "',
        apply='" . $applys . "' ";

        if (mysqli_query($link, $sql_add_row)) {
            header("Location: createquestion.php?" . $arr_url['query'] . "");
            exit;
        } else {
            echo "<span style='color: red;'>Ошибка</span>";
        }
    }

    // delete
    if (isset($data['deleteAnswer'])) {
        $btn = $data['deleteAnswer'];

        $sql_delete_row = "DELETE FROM " . $questName . " WHERE id = '$btn'";

        if (mysqli_query($link, $sql_delete_row)) {
            header("Location: createquestion.php?" . $arr_url['query'] . "");
            exit;
        } else {
            echo "<span style='color: red;'>Ошибка при удалении вопроса</span>";
        }
    }
?>
<!--footer-->
<?php
    include($folderRoot . "inc/z_footer.php");
?>

</body>
</html>