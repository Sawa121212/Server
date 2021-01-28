<?php
    session_start();
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
    <title>Вопросник</title>
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

                    $questionsBase = "tables";
                    //устанавливаем текущую активную базу данных
                    mysqli_select_db($link, $questionsBase);

                    // проверяем, не удалена ли или не заблокирована ли данная БД
                    $checkDB = mysqli_query($link, "SELECT del, is_blocked FROM list WHERE table_ID ='$questName'");
                    $arrayDBBlocked = mysqli_fetch_array($checkDB);
                    if ($arrayDBBlocked['del'] == 'true' || $arrayDBBlocked['is_blocked'] == 'true') {
                        /// ToDo: зделать Приватный доступ
                        header('Location: ' . $folderRoot . 'index.php');
                        exit;
                    }

                    //устанавливаем текущую активную базу данных ($database_name, $link_identifier)
                    //mysqli_select_db($link, "id8435427_checkers");
                    $select = mysqli_query($link, "SELECT id, question, answers, apply FROM $questName");

                    echo "<h3 align='center'>Редактирование</h3>";


                    ?>
                </div>
            </div>

            <div class="drag-target"></div>
        </div>
</main>

<?php
    // footer-->
    include($folderRoot . "inc/z_footer.php");
?>
</body>
</html>