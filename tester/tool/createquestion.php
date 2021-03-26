<?php
    $folderRoot = "";
    $link = "";
    include("../inc/functions/func_folderRoot.php");
    include($folderRoot . "inc/functions/func_SESSION.php");
    CancelIsLogout($folderRoot);

    require $folderRoot . 'conn/db.php';
    $file_name = basename(__FILE__);
    $data = $_POST;
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <? include($folderRoot . "inc/z_head.php"); ?>
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
            <div class="col s12">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <h5 align="center">Редактируйте и добавляйте вопросы</h5>
                        <p><b>Пример</b></p>
                        <p><b>Вопрос:</b></p>
                        <p>Выбери все фрукты и ягоды, которые красного цвета.</p>
                        <br>
                        <p><b>Варианты ответа:</b></p>
                        <p>1. Клубника</p>
                        <p>2. Абрикос</p>
                        <p>3. Банан</p>
                        <p>4. Малина</p>
                        <p>5. Ананас</p>
                        <br>
                        <p><b>Правильные ответы:</b></p>
                        <p>1,4</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <!--Добавить вопрос-->
            <div class='collection col s12 m12 lighten-1 z-depth-2' style='margin-bottom: .75em;'>
                <form form action="<?php $_SERVER['PHP_SELF'] ?>" method="POST">
                    <?php
                        $questionCount = 0;
                        echo "<p><b>Вопрос:</b>
                    <div class='input-field'>
                        <input type='text' id='input_text' name='question' maxlength='300' autocomplete='off' placeholder='(макс. 300 символов)' data-length='300' value='" . $_POST['question'] . "'>
                    </div>
                    
                    <b>Варианты ответа:</b>
                    <div class='input-field'>
                        <textarea name='answers' id='textarea2' cols='40' rows='10' minlength='3' maxlength='1000' placeholder='(макс. 1000 символов)' class='materialize-textarea' data-length='1000'>" . $_POST['answers'] . "</textarea>
                        <span class='helper-text' data-error='wrong' data-success='right'></span>
                    </div>
                    
                    <p><b>Правильные ответы:</b>                    
                    <input type='text' name='applys' id='applys' autocomplete='off' placeholder='(макс. 100 символов)' maxlength='100' data-length='100' value='" . $_POST['applys'] . "'>
                    <span class='helper-text' data-error='wrong' data-success='right'>Если несколько номеров ответа, пишите их через запятые</span>";
                    ?>
                    <div class="row">
                        <div class="input-field col s12">
                            <button class='btn darken-2  z-depth-2' type='submit' name='add'>
                                <i class='material-icons left'>add</i>Добавить вопрос
                            </button>
                        </div>
                    </div>

                    <?php
                        $url = $_SERVER['REQUEST_URI'];
                        $arr_url = parse_url($url);

                        if (!empty($arr_url['query'])) {
                            $_SESSION['getUrl'] = $arr_url['query'];
                        } else {
                            $arr_url['query'] = $_SESSION['getUrl'];
                            $_SESSION['getUrl'] = null;
                        }

                        $questName = str_replace('edit_db=', '', $arr_url['query']);

                        //устанавливаем текущую активную базу данных
                        include($folderRoot . "inc/functions/func_connectToDB_Tables.php");

                        // Add
                        if (isset($data['add'])) {
                            $question = strip_tags(trim($_POST['question']));
                            $answers = strip_tags(trim($_POST['answers']));
                            $applys = str_replace(' ', '', $_POST['applys']);

                            if ($question != "" && $answers != "" && $applys != "") {
                                try {
                                    $sql_add_row = "INSERT INTO " . $questName . " SET
                                        question= '" . $question . "',
                                        answers='" . $answers . "',
                                        apply='" . $applys . "' ";
                                    $link->exec($sql_add_row);
                                    header("Location: createquestion.php?" . $arr_url['query'] . "");
                                    exit;
                                } catch (PDOException $e) {
                                    echo "<span style='color: red;'>Ошибка: " . $e->getMessage() . "</span>";
                                }
                            } else {
                                echo "<span class='red-text'>Заполните данные</span>";
                            }
                        }
                    ?>
                </form>
            </div>

            <div class="row">
                <ul class="collection with-header lighten-1 z-depth-2">
                    <li class='collection-header'><h5>Ваши вопросы</h5>
                        <?php
                            // проверяем, не удалена ли или не заблокирована ли данная БД
                            $checkDB = $link->query("SELECT name, id, del, is_blocked,creator FROM list WHERE table_ID ='$questName'");
                            $arrayDBBlocked = $checkDB->fetch(\PDO::FETCH_ASSOC);
                            while ($array = $checkDB->fetch(\PDO::FETCH_ASSOC)) {
                                if ($_SESSION['usertype'] != 1) {
                                    if ($array['creator'] != $_SESSION['uid']) {
                                        header('Location: ' . $folderRoot . 'tool/mybase.php');
                                        exit;
                                    }
                                }
                            }

                            if ($arrayDBBlocked['creator'] != $_SESSION['uid']) {
                                /// ToDo: cделать Приватный доступ
                                header('Location: ' . $folderRoot . 'index.php');
                                exit;
                            }

                            $select = $link->query("SELECT id, question, answers, apply FROM $questName");
                            $lastID = $link->query("SELECT id FROM $questName order by id desc limit 1");
                            echo "<p>Количество вопросов: <b>" . $select->rowCount() . "</b></p></li>";

                            // массив правильных ответов
                            $applyArray = array();
                            $applyArray = array_values($applyArray);

                            $questID = 1;
                            echo "<li class='collection-item'>";

                            if ($select->rowCount() > 0) {
                                echo "<form action='" . $_SERVER['PHP_SELF'] . "'  method='POST' name='test_form" . $questID . "'>";

                                // вывод вопросов с ответами
                                while ($r_pytn = $select->fetch(\PDO::FETCH_ASSOC)) {
                                    echo "<div class='collection col s12 m12 lighten-2 z-depth-2' style='margin-bottom: .75em;'>";
                                    $radioValue = 1;
                                    echo "<div class='col s12 m12 lighten-1 ' style='margin-top: .60em;'>
                                    <p><b>" . $questID . ". " . $r_pytn['question'] . "
                                        <span id='questApply" . $questID . "' style='color:red;'></span></b>
                                    </p>";

                                    $answersArray = explode("\r\n", $r_pytn['answers']);
                                    foreach ($answersArray as $value) {
                                        if ($value != "" || !empty($value)) {
                                            echo "<p>
                                                <label>
                                                <input class='with-gap' name='group" . $questID . "' type='";
                                            if (count(explode(",", $r_pytn['apply'])) > 1) {
                                                echo "checkbox";
                                            } else {
                                                echo "radio";
                                            }
                                            echo "' value='" . $radioValue . "'>
                                                <span id='" . $questID . $radioValue . "'>" . $value . "</span>
                                                </label>
                                            </p>";
                                            $radioValue++;
                                        }
                                    }
                                    echo "</div>";

                                    echo "<ul class='collapsible expandable'>
                                        <li>
                                            <div class='collapsible-header lighten-1 z-depth-1'>
                                                <i class='material-icons'>chevron_right</i>Подробнее
                                            </div>";

                                    echo "<div class='collapsible-body'><p><b>Вопрос:</b>
                                  <input type='text' name='question" . $r_pytn['id'] . "' autocomplete='off' value='" . $r_pytn['question'] . "'>";

                                    echo "<p><b>Варианты ответа:</b><br>";
                                    echo "<textarea name='answers" . $r_pytn['id'] . "' cols='40' rows='10' minlength='3' maxlength='500' 
                            placeholder='Текст (макс. 500 символов)' class='materialize-textarea'>";
                                    print_r($r_pytn['answers']);
                                    echo "</textarea>";

                                    echo "<p><b>Правильные ответы:</b><br>
                              <input type='text' name='applys" . $r_pytn['id'] . "' autocomplete='off' value='" . $r_pytn['apply'] . "'>";

                                    $applyArray[] = $r_pytn['apply'];
                                    $questID++;

                                    echo "</div></li></ul>";

                                    echo "<p><button class='btn darken-2 z-depth-2 red' type='submit' name='deleteAnswer' value='" . $r_pytn['id'] . "'>
                                    <i class='material-icons left'>delete</i>Удалить вопрос
                                </button></p>";

                                    echo "</div>";
                                }

                                echo "</li>";

                                // Сохранить / Отмена
                                echo "<div class='row'>
                                <div class='input-field col s6 m3'>
                                    <button class='btn darken-2 z-depth-2' type='submit' name='saveAll'>
                                        <i class='material-icons left'>save</i>Сохранить
                                    </button>
                                </div>
                                <div class='input-field col s6 m3'>
                                    <button class='btn darken-2  z-depth-2 red' type='submit' name='cancel'>
                                        <i class='material-icons left'>cancel</i>Отмена
                                    </button>
                                </div>
                            </div>";


                                // cancel
                                if (isset($data['cancel'])) {
                                    $_SESSION['getUrl'] = null;
                                    header('Location: ' . $folderRoot . 'tool/mybase.php');
                                    exit;
                                }

                                // delete
                                if (isset($data['deleteAnswer'])) {
                                    $btn = $data['deleteAnswer'];

                                    try {
                                        $sql_delete_row = "DELETE FROM " . $questName . " WHERE id = '$btn'";
                                        $link->exec($sql_delete_row);
                                        header("Location: createquestion.php?" . $arr_url['query'] . "");
                                        exit;
                                    } catch (PDOException $e) {
                                        echo "<span style='color: red;'>Ошибка при удалении вопроса: " . $e->getMessage() . "</span>";
                                    }
                                }

                                // save
                                if (isset($data['saveAll'])) {
                                    $nextSelect = $link->query("SELECT id, question, answers, apply FROM $questName");
                                    while ($row = $nextSelect->fetch()) {
                                        $questionId = "question" . $row['id'];
                                        $answers = "answers" . $row['id'];
                                        $applys = "applys" . $row['id'];

                                        $question = strip_tags(trim($_POST["question" . $row['id']]));
                                        $answers = strip_tags(trim($_POST["answers" . $row['id']]));
                                        $applys = strip_tags(trim($_POST["applys" . $row['id']]));

                                        if ($question == null || $answers == null || $applys == null) {
                                            continue;
                                        }

                                        if ($question == $row['question'] && $answers == $row['answers'] && $applys == $row['apply']) {
                                            continue;
                                        }

                                        if ($question != "" && $answers != "" && $applys != "") {
                                            try {
                                                $sql_update_row = "UPDATE $questName SET
                                                question= '" . $question . "',
                                                answers='" . $answers . "',
                                                apply='" . $applys . "' 
                                                WHERE id = '" . $row['id'] . "'";
                                                $link->exec($sql_update_row);
                                            } catch (PDOException $e) {
                                                echo "<span style='color: red;'>Ошибка: " . $e->getMessage() . "</span>";
                                            }
                                        } else {
                                            echo "<p class='red'>Заполните поля вопроса</p>";
                                        }

                                        header("Location: " . $file_name . "?" . $arr_url['query'] . "");
                                        exit;
                                    }
                                }

                                echo "</form>";
                            }
                            else
                            {
                                echo "<p>Вы еще не добавляли вопросы</p>";
                            }
                        ?>
                    </li>
                </ul>
            </div>

            <div class="row">
                <form class="col s12" form action="<?php $_SERVER['PHP_SELF'] ?>" method="POST">
                    <div class="row">
                        <div class="collection col s12 m12 lighten-1 z-depth-3">
                            <div class="icon-block">
                                <h5 class="center">Редактирование названия темы</h5>
                                <input id="test_name" name="test_name" type="text" class="validate"
                                       value="<? echo $arrayDBBlocked['name'] ?>">
                                <label for="test_name">Название темы теста</label>
                            </div>
                            <div class="input-field col s6 m3 left">
                                <!--Проверить ответы-->
                                <button class='btn darken-2  z-depth-2' type='submit' name='editTestName'>
                                    <i class='material-icons left'>edit</i>
                                    Изменить
                                </button>
                            </div>

                            <?php
                                $user_uid = $_SESSION['uid'];

                                if (isset($data['editTestName'])) {
                                    if ($data['test_name'] != "") {
                                        $tabel_zagalovok = strip_tags(trim($data['test_name']));

                                        ////////////////////////////
                                        try {
                                            $sql_insert = "UPDATE list SET 
                                                name = '" . $tabel_zagalovok . "'
                                                WHERE table_ID = '" . $questName . "'";
                                            $link->exec($sql_insert);
                                            $arrayDBBlocked['name'] = $tabel_zagalovok;
                                            echo "<span style='color: green;'>Название темы изменено. Старое название отображается только сейчас.</span>";
                                        } catch (PDOException $e) {
                                            echo "<span style='color: red;'>Ошибка при переименовании теста: " . $e->getMessage() . "</span>";
                                        }
                                    }
                                }
                            ?>
                        </div>
                    </div>
                </form>
            </div> <!-- edit test name -->
        </div> <!-- content -->
    </div>
</main>

<!--footer-->
<?php
    include($folderRoot . "inc/z_footer.php");
?>

</body>
</html>