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
    <title>Создание темы</title>
</head>
<body>
<!--left panel-->
<? include($folderRoot . "inc/z_rightPanel.php"); ?>

<!--index-->
<main>
    <div class="container">
        <br>
        <div class="row">
            <h3 align='center'>Мои темы</h3>
            <div class="row">
                <form class="col s12" style="width: 70%;" form action="<?php $_SERVER['PHP_SELF'] ?>" method="POST">
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="test_name" name="first_name" type="text" class="validate">
                            <label for="test_name">Название темы теста</label>
                        </div>
                        <div class="input-field col s3">
                            <p>
                                <label>
                                    <input id="test_privet" name="test_privet" type="checkbox" />
                                    <span>Приватный доступ</span>
                                </label>
                            </p>
                        </div>
                        <div class="input-field col s3">
                            <!--Проверить ответы-->
                            <button class='btn darken-2  z-depth-2' type='submit' name='create'>Создать тест
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <?
                $data = $_POST;

                $questionsBase = "tables";
                //устанавливаем текущую активную базу данных
                mysqli_select_db($link, $questionsBase);
                $user_uid = $_SESSION['uid'];

                if (isset($data['create'])) //если кликнули на button
                {
                    $tabel_zagalovok = $data['test_name'];

                    $table_ID = sha1(time());
                    $tabel_privet = $data['test_privet'];

                    $sql_insert = "INSERT INTO list  SET
                    name = '" . $tabel_zagalovok . "', 
                    creator = '" . $user_uid . "', 
                    table_ID = '" . $user_uid . "', 
                    private = '" . $tabel_privet . "'";

                    if (mysqli_query($link, $sql_insert)) {
                        echo "Тест зарегистрирован.";
                    } else {
                        echo "Ошибка в регистрации теста: " . mysqli_error($link);
                    }
                    //////////////////////////////////////////////////////
                    $tableName = "quest" . sha1(time());

                    $sql_create = "CREATE TABLE '" . $tableName . "' (
                                id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                                question VARCHAR(200) NOT NULL,
                                answers VARCHAR(500) NOT NULL,
                                apply VARCHAR(500) NOT NULL)";

                    if (mysqli_query($link, $sql_create)) {
                        echo "Тест создан.";
                    } else {
                        echo "Ошибка в создании теста: " . mysqli_error($link);
                    }

                }
                //
            ?>
            <hr>
            <div class="row">
                <ul class="collection with-header">
                    <li class="collection-header"><h4>Мои тесты</h4></li>
                    <?php
                        $select_quests = mysqli_query($link, "SELECT name, private FROM list WHERE creator ='$user_uid'");
                        $myTestIsEmpty = true;
                        while ($r = mysqli_fetch_array($select_quests)) {
                            $myTestIsEmpty = false;
                            echo "<li class='collection-item'>";
                            echo "<div>" . $r['name'] . "<a href='#!' class='secondary-content'>";
                            if ($r['private'] == false) {
                                echo "Публичный";
                            } else {
                                echo "Приватный";
                            }
                            echo "<i class='material-icons'>send</i></a></div>";
                            echo "</li>";
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