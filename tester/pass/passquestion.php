<?php
    $folderRoot = "";
    $link = "";
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
    <?php include($folderRoot . "inc/z_head.php"); ?>
    <title>Тестирование</title>
</head>
<body>
<!--left panel-->
<?php include($folderRoot . "inc/z_rightPanel.php"); ?>

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

                    echo "<ul class='collection with-header z-depth-1'>";
                    echo "<form action='" . $_SERVER['PHP_SELF'] . "'  method='POST' name='test_form'>";
                    while ($r_pytn = $select_table->fetch(\PDO::FETCH_ASSOC)) {
                        $radioValue = 1;
                        echo "<li class='collection-item'>";
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
                        echo "</li>";
                    }
                    echo "</form></ul>";

                ?>
                <div class="row">
                    <div class="input-field col s12">
                        <!--Проверить ответы-->
                        <?php
                            echo "<br><p><b>Правельных ответов: <span id='applysQuestion'>сначала завершите тест</span></b></p>";
                            echo "<a class='btn blue darken-2  z-depth-2' href='" . $file_name . "?" . $arr_url['query'] . "' value='Пройти заново'>Пройти заново</a><br><br>";
                            echo "<input type='button' class='btn blue darken-2 center-align z-depth-2' onclick='Testing(test_form)' id='do_checkApplay' name='do_checkApplay' value='Завершить тест'>";
                        ?>
                    </div>

                </div> <!-- /row center -->
            </div>
            </form><br>

            <script>
                <?php echo "var applys = new Array();
                    applys = [";
                for ($i = 0; $i < $select_table->rowCount(); $i++) {
                    echo "[" . $applyArray[$i];
                    if ($i + 1 != $select_table->rowCount()) echo "], ";
                }
                echo "]];\r";
                ?>
            </script>
            <script src="<?php echo $folderRoot ?>materialize/js/testChecker.js"></script>

            <div class="drag-target"></div>
        </div>
</main>

<?php
    // footer-->
    include($folderRoot . "inc/z_footer.php");
?>
</body>
</html>