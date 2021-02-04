<?php
    $folderRootCount = 1;
    session_start();
    include("inc/functions/func_folderRoot.php");
    include($folderRoot . "inc/functions/func_SESSION.php");
    
    require $folderRoot . 'conn/db.php';
    $file_name = basename(__FILE__);
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <? include($folderRoot . "inc/z_head.php"); ?>
    <title>Главная страница</title>
</head>
<body>
<!--left panel-->
<? include($folderRoot . "inc/z_rightPanel.php"); ?>

<!--index-->
<main>
    <div class="container">
        <div class="section">
            <h3 align="center">Главная страница</h3>
            
            <div class="row">
                <ul class="collection with-header z-depth-1">
                    <li class="collection-header"><h4>Тесты</h4></li>
                    <?php
                        
                        $data = $_POST;
                        
                        $questionsBase = "tables";
                        //устанавливаем текущую активную базу данных
                        mysqli_select_db($link, $questionsBase);
                        $user_uid = $_SESSION['uid'];

                        $select_quests = mysqli_query($link, "SELECT name,table_ID, private, del, is_blocked, creator FROM list WHERE is_start ='true'");
                        $TestIsEmpty = true;
                        while ($r = mysqli_fetch_array($select_quests)) {
                            if ($r['del'] == 'false') {
                                if ($r['is_blocked'] == 'false') {
                                    $TestIsEmpty = false;
                                    echo "<li class='collection-item'>";

                                    // icon privat or YouDB
                                    $privatIcon = $r['private'] == 'true' ? "folder_special" : "folder";

                                    echo "<div><i class='material-icons'> ";
                                    if ($r['creator'] == $user_uid) {
                                        echo "folder_shared";
                                    } else {
                                        echo $privatIcon;
                                    }
                                    echo "</i>";

                                    // goToTest btn
                                    echo $r['name'] . "<a href='";
                                    if ($r['is_blocked'] != 'true') {
                                        echo $folderRoot . "pass/passquestion.php?db=" . $r['table_ID'];
                                    } else {
                                        echo "#!";
                                    }

                                    //title
                                    $titleBlocked = $r['is_blocked'] != 'true' ? "Пройти тест" : "Заблокирован";
                                    echo "' title='" . $titleBlocked . "' class='secondary-content'>";

                                    // icon is_blocked
                                    echo "<i class='material-icons ";
                                    if ($r['is_blocked'] != 'true') {
                                        echo "'>send";
                                    } else {
                                        echo "red'>block";
                                    }

                                    echo "</i></a></div>";
                                    echo "</li>";
                                }
                            }
                        }
                        if ($TestIsEmpty == true) {
                            echo "<li class='collection-item'>";
                            echo "<div>Пользователи еще не создавали тесты</div>";
                            echo "</li>";
                        }
                    ?>
                </ul>
            </div>

            <div class="row">
                <?php
                    $select_news = mysqli_query($link, "SELECT * FROM news ORDER BY id DESC LIMIT 5;");
                    $newsIsEmpty = true;
                    while ($news = mysqli_fetch_array($select_news)) {
                        switch ($news['mode']) {
                            case 'info':
                                $newsIcon = "info";
                                $newsColor = "blue";
                                break;
                            case 'warning':
                                $newsIcon = "build";
                                $newsColor = "orange";
                                break;
                            case 'error':
                                $newsIcon = "bug_report";
                                $newsColor = "red";
                                break;
                            default:
                                $newsIcon = "";
                                $newsColor = "";
                                break;
                        }

                        $newsIsEmpty = false;
                        echo "<ul class='collection with-header z-depth-1'>
                            <li class='collection-header " . $newsColor . "'><h5><i class='material-icons left'>" . $newsIcon . "</i>
                            " . $news['header'] . "<span class='right white-text'>" . date("d.m.y H:i", strtotime($news['date'])) . "</span></h5></li>";

                        echo "<li class='collection-item'>" . $news['text'] . "</li></ul>";
                    }
                    if ($newsIsEmpty == true) {
                        echo "<li class='collection-item'>";
                        echo "<div>Новостей нет</div>";
                        echo "</li></ul>";
                    }
                ?>
            </div>
        </div><!-- class="section"-->
    </div><!-- class="container"-->
</main>

<?php
    include($folderRoot . "inc/z_footer.php");
?>

</body>
</html>