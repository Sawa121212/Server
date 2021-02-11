<?php
    $folderRootCount = 2;
    include("../inc/functions/func_folderRoot.php");
    include($folderRoot . "inc/functions/func_SESSION.php");

    require $folderRoot . 'conn/db.php';
    $file_name = basename(__FILE__);
    $data = $_POST;
    $testIsChecked = false;
?>


<!DOCTYPE html>
<html lang="ru">
<head>
    <? include($folderRoot . "inc/z_head.php"); ?>
    <title>Редактирование</title>
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

                    if (!empty($arr_url['query'])) {
                        if (empty($_SESSION['getUrl'])) {
                            $_SESSION['getUrl'] = $arr_url['query'];
                        }
                    } else {
                        $arr_url['query'] = $_SESSION['getUrl'];
                        $_SESSION['getUrl'] = null;
                    }

                    $mod = 'open'; // default open

                    // выбераем режим работы
                    if (stristr($arr_url['query'], 'open_db=') == TRUE) {
                        $mod = 'open';
                    } else if (stristr($arr_url['query'], 'delete_db=') == TRUE) {
                        $mod = 'delete';
                    } else if (stristr($arr_url['query'], 'close_db=') == TRUE) {
                        $mod = 'close';
                    }
                    $questName = str_replace($mod . '_db=', '', $arr_url['query']);

                    //устанавливаем текущую активную базу данных
                    include($folderRoot . "inc/functions/func_connectToDB_Tables.php");

                    // проверяем, не удалена ли или не заблокирована ли данная БД
                    $checkDB = $link->query("SELECT name, creator, is_start FROM list WHERE table_ID ='$questName'");
                    $arrayDB = $checkDB->fetch(\PDO::FETCH_ASSOC);
                    while ($array = $checkDB->fetch(\PDO::FETCH_ASSOC)) {
                        if ($_SESSION['usertype'] != 1) {
                            if ($array['creator'] != $_SESSION['uid']) {
                                header('Location: ' . $folderRoot . 'tool/mybase.php');
                                exit;
                            }
                        }
                    }

                    echo "<h3 align='center'>Редактирование</h3>";

                    // delete
                    if ($mod == 'delete') {
                        echo "<div class='row'>
                        <form class='col s12' style='width: 70%;' form action='" . $_SERVER['PHP_SELF'] . "' method='POST'>
                            <div class='row'>
                                <div class='input-field col s12 m12'>
                                    <p>Вы действительно хотите удалить тему:</p>
                                    <p><b>" . $arrayDB['name'] . " ?</b></p>
                                    <p><b>Восстановить будет невозможно!</b></p>
                                </div>
                                <div class='input-field col s6 m3'>
                                    <button class='btn darken-2  z-depth-2' type='submit' name='delete'>
                                        <i class='material-icons left'>delete_forever</i>
                                        Удалить
                                    </button>
                                </div>
                                 <div class='input-field col s6 m3'>
                                    <button class='btn darken-2  z-depth-2 red' type='submit' name='cancel'>Отмена</button>
                                </div>                                
                            </div>
                        </form>
                    </div>";
                    } // open / close
                    else if ($mod == 'open' || $mod == 'close') {
                        $change = $mod == "open" ? 'открыть' : 'закрыть';
                        $changeIcon = $mod == "open" ? 'lock_open' : 'lock_outline';
                        echo "<div class='row'>
                        <form class='col s12' style='width: 70%;' form action='" . $_SERVER['PHP_SELF'] . "' method='POST'>
                            <div class='row'>
                                <div class='input-field col s12 m12'>
                                    <p>Вы действительно хотите " . $change . " тему:</p>
                                    <p><b>" . $arrayDB['name'] . " ?</b></p>
                                    <p><b>Вы можете вернуть состояние обратно в любой момент!</b></p>
                                </div>
                                <div class='input-field col s6 m3'>
                                    <button class='btn darken-2  z-depth-2' type='submit' name='open'>
                                        <i class='material-icons left'>" . $changeIcon . "</i>
                                        " . $change . "
                                    </button>
                                </div>
                                <div class='input-field col s6 m3'>
                                    <button class='btn darken-2  z-depth-2 red' type='submit' name='cancel'>
                                        <i class='material-icons left'>cancel</i>Отмена
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>";
                    }

                    // cancel
                    if (isset($data['cancel'])) {
                        header('Location: ' . $folderRoot . 'tool/mybase.php');
                        exit;
                    }

                    // open/close
                    if (isset($data['open']) || isset($data['close'])) {
                        $change = $mod == "open" ? 'true' : 'false';

                        try {
                            $sqlOpenDB = "UPDATE list SET is_start='$change' WHERE table_ID ='$questName'";
                            $link->exec($sqlOpenDB);
                            header('Location: ' . $folderRoot . 'tool/mybase.php');
                            exit;
                        } catch (PDOException $e) {
                            $info_mod = $mod == "open" ? 'открытии' : 'закрытии';
                            echo "<span style='color: red;'>Ошибка при " . $info_mod . " темы: " . $e->getMessage() . "</span>";
                        }
                    }

                    // delete
                    if (isset($data['delete'])) {
                        try {
                            $sql_delete_row = "DELETE FROM list WHERE table_ID ='$questName'";
                            $link->exec($sql_delete_row);
                            try {
                                $sqlDropDB = "DROP TABLE $questName";
                                $link->exec($sqlDropDB);
                                header('Location: ' . $folderRoot . 'tool/mybase.php');
                                exit;
                            } catch (PDOException $e) {
                                echo "<span style='color: red;'>Ошибка в удалении теста: " . $e->getMessage() . "</span>";
                            }
                        } catch (PDOException $e) {
                            echo "<span style='color: red;'>Ошибка в удалении темы: " . $e->getMessage() . "</span>";
                        }
                    }
                ?>
            </div>
        </div>

        <?php

        ?>
        <div class="drag-target"></div>
    </div>
</main>

<?php
    // footer-->
    include($folderRoot . "inc/z_footer.php");
?>
</body>
</html>