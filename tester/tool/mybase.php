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
    <title>Тесты</title>
</head>
<body>
<!--left panel-->
<? include($folderRoot . "inc/z_rightPanel.php"); ?>

<!--index-->
<main>
    <div class="container">
        <br>
        <div class="row">
            <h3 align='center'>Тесты</h3>
            <div class="row">
                <form class="col s12" style="width: 70%;" form action="<?php $_SERVER['PHP_SELF'] ?>" method="POST">
                    <div class="row">
                        <div class="input-field col s12 m12">
                            <input id="test_name" name="test_name" type="text" class="validate">
                            <label for="test_name">Название темы теста</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s6 m3">
                            <p>
                                <label>
                                    <input id="test_privet" name="test_privet" type="checkbox" />
                                    <span>Приватный доступ</span>
                                </label>
                            </p>
                        </div>
                        <div class="input-field col s6 m3">
                            <!--Проверить ответы-->
                            <button class='btn darken-2  z-depth-2' type='submit' name='create'>
                                <i class='material-icons left'>library_add</i>
                                Создать тест
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <?
                $data = $_POST;
                $dateTime = date("Y-m-d H:i:s");
                $questionsBase = "tables";

                //устанавливаем текущую активную базу данных
                mysqli_select_db($link, $questionsBase);
                $user_uid = $_SESSION['uid'];

                if (isset($data['tool'])) //если кликнули на button
                {
                    $tabel_zagalovok = $data['test_name'];

                    $table_ID = "quest_" . sha1(time());

                    if (isset($data['test_privet'])) {
                        $tabel_privet = 'true';
                    } else $tabel_privet = 'false';

                    $sql_insert = "INSERT INTO list  SET
                    name = '" . $tabel_zagalovok . "', 
                    creator = '" . $user_uid . "', 
                    table_ID = '" . $table_ID . "', 
                    date = '" . $dateTime . "', 
                    private = '" . $tabel_privet . "'";

                    if (mysqli_query($link, $sql_insert)) {
                        echo "<span style='color: green;'>Тест зарегистрирован. </span>";
                    } else {
                        echo "<span style='color: red;'>Ошибка в регистрации теста: " . mysqli_error($link)."</span>";
                    }

                    //////////////////////////////////////////////////////
                    mysqli_select_db($link, $questionsBase);
                    $sql_create = "CREATE TABLE ". $table_ID." (
                                id INT(10) AUTO_INCREMENT PRIMARY KEY,
                                question VARCHAR(200),
                                answers VARCHAR(500),
                                apply VARCHAR(500));";

                    if (mysqli_query($link, $sql_create)) {
                        echo "<span style='color: green;'>Тест создан. </span>";
                    } else {
                        echo "<span style='color: red;'>Ошибка в создании теста: " . mysqli_error($link)."</span>";
                    }
                }
            ?>
            <hr>
            <div class="row">
                <ul class="collection with-header">
                    <li class="collection-header"><h4>Мои тесты</h4></li>
                    <?php
                        // Мои тесты
                        $select_quests = mysqli_query($link, "SELECT name, private, del, is_blocked,table_ID, is_start FROM list WHERE creator ='$user_uid'");
                        $myTestIsEmpty = true;
                        while ($r = mysqli_fetch_array($select_quests)) {
                            $myTestIsEmpty = false;

                            if ($r['del'] != 'true') {
                                $TestIsEmpty = false;
                                echo "<li class='collection-item'>";
                                echo "<div>";

                                echo "<i class='material-icons style='margin: 0px 10px 0px 5px;'";
                                if ($r['is_start'] == 'false') {
                                    echo "'>lock</i>";
                                } else echo "'>check</i>";

                                echo $r['name'] . "<a href='";
                                if ($r['is_blocked'] != 'true') {
                                    echo $folderRoot . "pass/passquestion.php?db=" . $r['table_ID'];
                                } else {
                                    echo "#!";
                                }
                                //title
                                echo "' title='";
                                if ($r['is_blocked'] != 'true') {
                                    echo "Пройти тест";
                                } else {
                                    echo "Заблокирован";
                                }
                                echo "' class='secondary-content'>";


                                // icon is_blocked
                                echo "<i class='material-icons ";
                                if ($r['is_blocked'] != 'true') {
                                    echo "'>send";
                                } else {
                                    echo "red'>warning";
                                }
                                echo "</i></a>";


                                /// edit
                                // edit btn
                                echo "<a href='";
                                echo $folderRoot . "tool/createquestion.php?edit_db=" . $r['table_ID'];
                                //edit title
                                echo "' title='Редактировать' class='secondary-content'>";
                                // icon edit
                                echo "<i class='material-icons' style='margin: 0px 10px 0px 10px;'>edit</i></a>";


                                /// delete
                                // del btn
                                echo "<a href='";
                                echo $folderRoot . "tool/edit.php?delete_db=" . $r['table_ID'];
                                //del title
                                echo "' title='Удалить' class='secondary-content'>";
                                // icon del
                                echo "<i class='material-icons '>delete_forever</i></a>";

                                /// lock
                                // lock btn
                                echo "<a href='";
                                if ($r['is_start'] == 'true') {
                                    echo $folderRoot . "tool/edit.php?close_db=" . $r['table_ID'];
                                } else {
                                    echo $folderRoot . "tool/edit.php?open_db=" . $r['table_ID'];
                                }

                                //lock title
                                echo "' title='";
                                if ($r['is_start'] == 'true') {
                                    echo "Закрыть для прохождения";
                                } else {
                                    echo "Открыть для прохождения";
                                }
                                echo "' class='secondary-content'>";
                                // icon lock
                                echo "<i class='material-icons style='margin: 0px 10px 0px 10px;'";
                                if ($r['is_start'] != 'true') {
                                    echo "'>lock_open";
                                } else {
                                    echo "'>lock_outline";
                                }
                                echo "</i></a>";

                                if ($r['private'] == 'false') {
                                    echo "<label style='margin: 10px;'>Публичный</label>";
                                } else {
                                    echo "<label style='margin: 10px;'>Приватный</label>";
                                }

                                echo "</div></li>";
                            }
                        }

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