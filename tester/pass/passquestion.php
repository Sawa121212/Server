<?php
    $folderRoot = "";
    $link = "";
    $folderRootCount = 2;
    include("../inc/functions/func_folderRoot.php");
    include($folderRoot . "inc/functions/func_SESSION.php");
    require $folderRoot . 'conn/db.php';
    $file_name = basename(__FILE__);

    include($folderRoot . "inc/alertStyle.php");
    $data = $_POST;
    $testIsChecked = false;
?>


<!DOCTYPE html>
<html lang="ru">
<head>
    <? include($folderRoot . "inc/z_head.php"); ?>
    <title>Тестирование</title>
</head>
<body>
<!--left panel-->
<? include($folderRoot . "inc/z_rightPanel.php"); ?>

<!--index-->
<main>
    <div class="container">
        <div class="section">
            <div class="row">
                <?php
                    $url = $_SERVER['REQUEST_URI'];
                    $arr_url = parse_url($url);
                    $questName = str_replace('db=', '', $arr_url['query']);

                    //устанавливаем текущую активную базу данных
                    include($folderRoot . "inc/functions/func_connectToDB_Tables.php");

                    // проверяем, не удалена ли или не заблокирована ли данная БД
                    $checkDB = $link->query("SELECT id, del, is_blocked,creator FROM list WHERE table_ID ='$questName'");
                    $arrayDBBlocked = $checkDB->fetch(\PDO::FETCH_ASSOC);
                    if ($arrayDBBlocked['del'] == 'true' || $arrayDBBlocked['is_blocked'] == 'true') {
                        /// ToDo: зделать Приватный доступ
                        header('Location: ' . $folderRoot . 'index.php');
                        exit;
                    }

                    $select_table = $link->query("SELECT id, question, answers, apply FROM $questName");

                    echo "<h3 align='center'>Создание вопросов</h3>";
                    $questID = 1;

                    echo "<p>Количество вопросов: <b>" . $select_table->rowCount() . "</b></p>";
                    // массив правильных ответов
                    $applyArray = array();
                    $applyArray = array_values($applyArray);

                    echo "<form action='" . $_SERVER['PHP_SELF'] . "'  method='POST' name='test_form'>";
                    //while ($r_pytn = mysqli_fetch_array($select)) {
                    while ($r_pytn = $select_table->fetch(\PDO::FETCH_ASSOC)) {
                        $radioValue = 1;
                        echo "<p><b>" . $questID . ". " . $r_pytn['question'] . "<span id='questApply" . $questID . "' style='color:red;'></span></b></p>";
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
                        $applyArray[] = $r_pytn['apply'];
                        $questID++;
                        echo "<br>";
                    }
                    echo "</form>";

                ?>
                <div class="row">
                    <div class="input-field col s12">
                        <!--Проверить ответы-->
                        <?php
                            echo "<br><p><b>Правельных ответов: <span id='applysQuestion'>0</span></b></p>";

                            echo "<input type='button' class='btn blue darken-2  z-depth-2' onclick='Testing(test_form)' name='do_checkApplay' value='Завершить тест'><br><br>";
                            echo "<a class='btn blue darken-2  z-depth-2' href='" . $file_name ."?". $arr_url['query'] . "' value='Пройти заново'>Пройти заново</a>";
                        ?>
                    </div>
                    </form><br>
                </div> <!-- /row center -->
            </div>

            <script>
                <?php echo "var applys = new Array();
                    applys = [";
                for ($i = 0; $i < $select_table->rowCount(); $i++) {
                    echo "[" . $applyArray[$i];
                    if ($i + 1 != $select_table->rowCount()) echo "], ";
                }
                echo "]];\r";
                ?>

                function Testing(obj) {
                    var applyQuestion = 0;

                    for (var i = 0; i < applys.length; i++) {
                        var currentIndex = i + 1;

                        // проверяем количество ответов разделяя строку
                        var split_array = applys[i].toString().split(',');

                        if (split_array.length < 2) {
                            var id = currentIndex.toString() + applys[i].toString();

                            var rad = document.getElementsByName('group' + currentIndex.toString().trim());

                            var checkedCount = 0;
                            for (var index = 0; index < rad.length; index++) {
                                if (rad[index].checked) {
                                    checkedCount++;
                                    if (index + 1 == applys[currentIndex - 1]) {
                                        applyQuestion++;
                                    }
                                    var indexRdBtn = index + 1;
                                    var name = currentIndex.toString() + indexRdBtn.toString();
                                    document.getElementById(name).className = 'answer-notapply';
                                }
                            }
                            var questApplyId = 'questApply' + currentIndex.toString();
                            if (checkedCount == 0) {
                                document.getElementById(questApplyId).textContent = ' * На данный вопрос вы не дали ответ';
                            }
                            document.getElementById(id).className = 'answer-apply';
                        } else {
                            var applyQuest_OnCount = 0;
                            var checkedCount = 0;
                            for (var j = 0; j < split_array.length; j++) {
                                var id = currentIndex.toString() + split_array[j].toString().trim();

                                var rad = document.getElementsByName('group' + currentIndex.toString());

                                for (var index = 0; index < rad.length; index++) {
                                    if (rad[index].checked) {
                                        if (index + 1 == split_array[j]) {
                                            applyQuest_OnCount++;
                                        } else {
                                            document.getElementById(currentIndex.toString() + indexRdBtn.toString()).className = 'answer-notapply';
                                        }
                                        var indexRdBtn = index + 1;
                                        checkedCount++;
                                    }
                                    document.getElementById(id).className = 'answer-apply';
                                }
                            }
                            if (applyQuest_OnCount == split_array.length && checkedCount == split_array.length) {
                                applyQuestion++;
                            }
                            if (applyQuest_OnCount == 0) {
                                document.getElementById('questApply' + currentIndex.toString()).textContent = ' * На данный вопрос вы не дали ответ';
                            }
                        }
                    }

                    document.getElementById('applysQuestion').textContent = applyQuestion.toString();
                }
            </script>

            <div class="drag-target"></div>
        </div>
</main>

<?php
    // footer-->
    include($folderRoot . "inc/z_footer.php");
?>
</body>
</html>