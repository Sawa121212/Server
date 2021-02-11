<?php
    session_start();
    $folderRootCount = 2;

    include("../inc/functions/func_folderRoot.php");
    include($folderRoot . "inc/functions/func_SESSION.php");

    if (!($_SESSION['usertype'] == 1)) {
        header('Location: ' . $folderRoot . 'account/account_login.php');
        exit;
    }
    require $folderRoot . 'conn/db.php';
    $data = $_POST;

    $questionsBase = "tables";
    //устанавливаем текущую активную базу данных
    mysqli_select_db($link, $questionsBase);
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
        <h3 align='center'>Управление тестами</h3>
        <div class="row">
            <ul class="collection with-header z-depth-1">
                <li class="collection-header"><h4>Все тесты</h4></li>
                <?php
                    // Мои тесты
                    $select_quests = mysqli_query($link, "SELECT * FROM list");
                    $myTestIsEmpty = true;
                    while ($r = mysqli_fetch_array($select_quests)) {
                        $myTestIsEmpty = false;

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

                    if ($myTestIsEmpty == true) {
                        echo "<li class='collection-item'>";
                        echo "<div>Пользователи еще не создавали тесты</div>";
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