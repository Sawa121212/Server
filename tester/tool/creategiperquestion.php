<?php
    $folderRoot = "";
    $link = "";
    include("../inc/functions/func_folderRoot.php");
    include($folderRoot . "inc/functions/func_SESSION.php");
    CancelIsLogout($folderRoot);

    require $folderRoot . 'conn/db.php';
    $file_name = basename(__FILE__);
    $data = $_POST;

    $dateTime = date("Y-m-d H:i:s");
    $questionsBase = "tables";
    $user_uid = $_SESSION['uid'];
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
        <br>
        <div class="row">
            <h3 align='center'>Редактирование</h3>

            <div class="row">
                <div class="col s12">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <h5 align="center">Гипертесты</h5>
                            <p><b>Гипертест - это набор тестов из уже созданных вами. Вы выбираете какие тесты включать
                                  и количество вопросов от них.</b></p>
                            <p><b>Вопросы выбираются случайным образом.</b></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <ul class="collection with-header z-depth-1">
                    <li class="collection-header"><h4>Доступные тесты</h4></li>
                    <form form action="<?php $_SERVER['PHP_SELF'] ?>" method="POST">
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


                            // Мои тесты
                            $myTestIsEmpty = true;
                            $myTestCount = 0;

                            $select_quests = $link->query("SELECT name, private, del, is_blocked,table_ID, is_start, giper FROM list WHERE creator ='$user_uid'");
                            $testsIdList = array();
                            $QuestsCountOnTest = array();

                            while ($r = $select_quests->fetch()) {
                                if ($r['giper'] == 'true' || $r['table_ID'] == $questName || $r['private'] == 'true') {
                                    continue;
                                }

                                $myTestIsEmpty = false;

                                if ($r['del'] != 'true' || $r['is_blocked'] != 'true') {
                                    $table_IDOnList = $r['table_ID'];

                                    $questionsCount = $link->query("SELECT id, question FROM $table_IDOnList");
                                    if ($questionsCount->rowCount() == 0) continue;

                                    // массив table_ID доступных тестов
                                    array_push($testsIdList, $r['table_ID']);
                                    array_push($QuestsCountOnTest, $questionsCount->rowCount());

                                    $myTestCount++;
                                    $TestIsEmpty = false;
                                    echo "<li class='collection-item' >";

                                    echo "<i class='material-icons' style='margin: 0px 10px 0px 5px;'>check</i>";

                                    echo $r['name'];

                                    // checkbox
                                    echo "<div class='switch right'><label>";
                                    echo "<input type='checkbox' id='checkbox" . $myTestCount . "' name='checkbox" . $myTestCount . "' onclick='ClickChecBoxEvent(" . $myTestCount . ")'>";
                                    echo "<span class='lever'></span></label></div>";


                                    echo "<div class='hidden' id='questionCountRow" . $myTestCount . "'>
                                        <label for='balloons'>Количество вопросов (максимум " . $questionsCount->rowCount() . "):</label>
                                        <input type='number' id='answerCount" . $myTestCount . "' name='answerCount' min='1' max='" . $questionsCount->rowCount() . "' value='1'>
                                        <span class='validity'></span>
                                      </div>";

                                    echo "</li>";

                                }
                            }

                            echo "<li class='collection-item'>";
                            echo "
                                <div class='input-field col s12 m10'>
                                    <p class='red-text' id='errorText'>";

                            /////////////////////////////////////////////////////////////
                            if (isset($data['saveSettings'])) {
                                $errors = false;
                                for ($i = 0; $i < $myTestCount; $i++) {
                                    if ($data["checkbox" . $i . ""] == 'true') {
                                        if ($QuestsCountOnTest[$i] >= $data["checkbox" . $i . ""] || $QuestsCountOnTest[$i] != 0) {
                                            echo "Good-" . $i . " ";
                                        } else {
                                            echo "Введите корректные данные";
                                            $errors = true;
                                            break;
                                        }
                                    }
                                    else
                                    {
                                       echo "checkbox" . $i . " - dis ";
                                    }
                                }
                                if (!$errors) {
                                }
                            }

                            echo "</p>
                                </div>
                                <div class='input-field col s12 m2'>
                                    <button class='btn darken-2  z-depth-2' type='submit' name='saveSettings'>
                                        <i class='material-icons left'>edit</i>
                                        Сохранить
                                    </button>                                
                              </div>";

                            echo "</li>";

                            if ($myTestIsEmpty == true) {
                                echo "<li class='collection-item'>";
                                echo "<div>Вы еще не создавали тесты</div>";
                                echo "</li>";
                            }
                        ?>
                    </form>
                </ul>
            </div>

            <div class="row">
                <div class="col s12">
                    <div class="card grey darken-1">
                        <div class="card-content white-text">
                            <p><b>К "доступным" входят только следующие тесты:</b></p>
                            <p>- Не заблокированные</p>
                            <p>- Публичные</p>
                            <p>- Если в тесте имеется хотя бы 1 вопрос</p>
                            <p>- Если тест является обычным (не гипертест)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> <!-- /row center -->
    </div>
</main>
<!--footer-->
<?php
    include($folderRoot . "inc/z_footer.php");
?>

<script>
    function ClickChecBoxEvent(num) {
        // Get the checkbox
        var checkboxName = "checkbox" + num.toString();
        var checkBox = document.getElementById(checkboxName);

        // Get the output
        var divName = "questionCountRow" + num.toString();

        // If the checkbox is checked, display the output text
        if (checkBox.checked === true) {
            document.getElementById(divName).className = 'row';
        } else {
            document.getElementById(divName).className = 'hidden';
        }
    }
</script>
</body>
</html>