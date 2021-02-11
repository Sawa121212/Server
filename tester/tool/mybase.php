<?php
    $folderRootCount = 2;

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
            <div class='row'>
                <form class="col s12" form action="<?php $_SERVER['PHP_SELF'] ?>" method="POST">
                    <div class="row">
                        <div class="col s12 m12 lighten-1 z-depth-3">
                            <div class="icon-block">
                                <h5 class="center">Создать тест</h5>
                                <p class="light">После создания теста доступ к нему будет закрыт. Откройте доступ после
                                                 добавления вопросов.</p>
                                <input id="test_name" name="test_name" type="text" class="validate">
                                <label for="test_name">Название темы теста</label>
                            </div>
                            <div class="input-field col s6 m3">
                                <p>
                                    <label>
                                        <input id="test_privet" name="test_privet" type="checkbox" />
                                        <span>Приватный доступ</span>
                                    </label>
                                </p>
                            </div>
                            <div class="input-field col s6 m3 right">
                                <!--Проверить ответы-->
                                <button class='btn darken-2  z-depth-2' type='submit' name='create'>
                                    <i class='material-icons left'>library_add</i>
                                    Создать тест
                                </button>
                            </div>

                            <?
                                $dateTime = date("Y-m-d H:i:s");
                                $questionsBase = "tables";
                                $user_uid = $_SESSION['uid'];

                                //устанавливаем текущую активную базу данных
                                include($folderRoot . "inc/functions/func_connectToDB_Tables.php");

                                if (isset($data['create'])) {
                                    if ($data['test_name'] != "") {
                                        $tabel_zagalovok = $data['test_name'];
                                        $table_ID = "quest_" . sha1(time());
                                        $tabel_privet = isset($data['test_privet']) ? "true" : "false";

                                        ////////////////////////////
                                        try {
                                            $sql_insert = "INSERT INTO list  SET
                                                name = '" . $tabel_zagalovok . "', 
                                                creator = '" . $user_uid . "', 
                                                table_ID = '" . $table_ID . "', 
                                                date = '" . $dateTime . "', 
                                                private = '" . $tabel_privet . "'";
                                            $link->exec($sql_insert);
                                            echo "<span style='color: green;'>Тест зарегистрирован. </span>";
                                        } catch (PDOException $e) {
                                            echo "<span style='color: red;'>Ошибка в регистрации теста: " . $e->getMessage() . "</span>";
                                        }
                                        ////////////////////////////
                                        try {
                                            $sql_create = "CREATE TABLE " . $table_ID . " (
                                                id INT(10) AUTO_INCREMENT PRIMARY KEY,
                                                question VARCHAR(300),
                                                answers VARCHAR(1000),
                                                apply VARCHAR(100));";
                                            $link->exec($sql_create);
                                            echo "<span style='color: green;'>Тест создан. </span>";
                                        } catch (PDOException $e) {
                                            echo "<span style='color: red;'>Ошибка в создании теста: " . $e->getMessage() . "</span>";
                                        }
                                    }
                                }
                            ?>
                        </div>
                    </div>
                </form>
            </div>
            <hr>
            <div class="row">
                <ul class="collection with-header z-depth-1">
                    <li class="collection-header"><h4>Мои тесты</h4></li>
                    <?php
                        // Мои тесты
                        $myTestIsEmpty = true;

                        $select_quests = $link->query("SELECT name, private, del, is_blocked,table_ID, is_start FROM list WHERE creator ='$user_uid'");
                        while ($r = $select_quests->fetch()) {
                            $myTestIsEmpty = false;

                            if ($r['del'] != 'true') {
                                $TestIsEmpty = false;
                                echo "<li class='collection-item' >";
                                echo "<div>";

                                echo "<i class='material-icons style='margin: 0px 10px 0px 5px;'";
                                if ($r['is_start'] == 'false') {
                                    echo "'>lock</i>";
                                } else echo "'>check</i>";

                                echo $r['name'] . "<a class='tooltipped right' href='";
                                if ($r['is_blocked'] != 'true') {
                                    echo $folderRoot . "pass/passquestion.php?db=" . $r['table_ID'];
                                } else {
                                    echo "#!";
                                }

                                //title
                                $titleBlocked = $r['is_blocked'] != 'true' ? "Пройти тест" : "Заблокирован";
                                echo "' data-position='bottom' data-tooltip='" . $titleBlocked . "' class='secondary-content'>";

                                // icon is_blocked
                                $isBlockedIcon = $r['is_blocked'] != 'true' ? "'>send" : "red'>warning";
                                echo "<i class='material-icons " . $isBlockedIcon . "</i></a>";


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
                                $isStarted = $r['is_start'] == 'true' ? "close" : "open";
                                echo "<a href='" . $folderRoot . "tool/edit.php?" . $isStarted . "close_db=" . $r['table_ID'];

                                //lock title
                                $titleLocked = $r['is_start'] == 'true' ? "Закрыть для прохождения" : "Открыть для прохождения";
                                echo "' title='" . $titleLocked . "' class='secondary-content'>";

                                // icon lock
                                $LockedIcon = $r['is_start'] != 'true' ? "lock_open" : "lock_outline";
                                echo "<i class='material-icons' style='margin: 0px 10px 0px 10px;'>" . $LockedIcon . "</i></a>";

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