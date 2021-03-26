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
                            <p><b>Вопрос:</b></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <ul class="collection with-header z-depth-1">
                    <li class="collection-header"><h4>Тесты</h4></li>
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

                        $select_quests = $link->query("SELECT name, private, del, is_blocked,table_ID, is_start FROM list WHERE creator ='$user_uid'");
                        while ($r = $select_quests->fetch()) {
                            if ($r['giper'] == "true" || $r['table_ID'] == $questName) {
                                continue;
                            }

                            $myTestIsEmpty = false;

                            if ($r['del'] != 'true') {
                                $TestIsEmpty = false;
                                echo "<li class='collection-item' >";
                                echo "<div>";

                                echo "<i class='material-icons style='margin: 0px 10px 0px 5px;'";
                                if ($r['is_blocked'] == 'true') {
                                    echo "'>warning</i> Заблокирован ";
                                } else echo "'>check</i>";

                                echo $r['name'];
                                echo "<div class='switch right'><label>";

                                if ($r['is_blocked'] != 'true') {
                                    echo "<input type='checkbox'>";
                                } else {
                                    echo "<input disabled type='checkbox'>";
                                }
                                echo "<span class='lever'></span></label></div>";

                                if ($r['private'] == 'false') {
                                    echo "<label style='margin: 10px;'>Публичный</label>";
                                } else {
                                    echo "<label style='margin: 10px;'>Приватный</label>";
                                }
                                echo "</div></li>";
                            }
                        }

                        echo "<li class='collection-item'>";
                        echo "<form>
<div class='row'>
                          <div class='col s11'>
                            <label for='balloons'>Number of balloons to order (multiples of 10):</label>
                            <input id='balloons' type='number' name='balloons' step='10' min='0' max='100' required>
                            <span class='validity'></span>
                          </div>
                          <div>
                            <input type='submit'>
                          </div></div>
                          
                        </form>";
                        echo "</li>";
                        
                        echo "<li class='collection-item'>";
                        echo "<div>Сохранить</div>";
                        echo "</li>";

                        if ($myTestIsEmpty == true) {
                            echo "<li class='collection-item'>";
                            echo "<div>Вы еще не создавали тесты</div>";
                            echo "</li>";
                        }
                    ?>

                </ul>
            </div>
        </div> <!-- /row center -->
    </div>
</main>
<!--footer-->
<?php
    include($folderRoot . "inc/z_footer.php");
?>
</body>
</html>