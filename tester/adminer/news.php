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
    $file_name = basename(__FILE__);
    $data = $_POST;
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <? include($folderRoot . "inc/z_head.php"); ?>
    <title>Администрирование</title>
</head>
<body>
<!--left panel-->
<? include($folderRoot . "inc/z_rightPanel.php"); ?>

<!--index-->
<main>
    <div class="container">
        <br>
        <div class="row">
            <h3 align='center'>Новости</h3>
            <div class="row">
                <!--Добавить вопрос-->
                <div class='col s12 m12 lighten-1 z-depth-2' style='margin-bottom: .75em;'>
                    <form form action="<?php $_SERVER['PHP_SELF'] ?>" method="POST">
                        <h5 class="center">Добавление новостей</h5>
                        <?php
                            echo "<p><b>Заголовок:</b>
                            <input type='text' name='header' autocomplete='off' maxlength='500' placeholder='Текст (макс. 50 символов)'>
                            
                            <b>Текст:</b>
                            <textarea name='text' cols='40' rows='10' minlength='3' maxlength='500' placeholder='Текст (макс. 500 символов)' class='materialize-textarea'></textarea>
                            <span class='helper-text' data-error='wrong' data-success='right'></span><br>
                            
                            <p><b>Выберите тип:</b>
                            <p><label><input name='group_type' type='radio' value='1' checked /><span><i class='material-icons right'>info</i>Информация</span></label></p>
                            <p><label><input name='group_type' type='radio' value='2'/><span><i class='material-icons right'>build</i>Предупреждение</span></label></p>
                            <p><label><input name='group_type' type='radio' value='3'/><span><i class='material-icons right'>bug_report</i>Ошибка</span></label></p>";
                        ?>
                        <div class="row">
                            <div class="input-field col s12">
                                <button class='btn darken-2  z-depth-2' type='submit' name='add'>
                                    <i class='material-icons left'>add</i>Добавить новость
                                </button>
                            </div>
                        </div>
                        <?
                            $data = $_POST;
                            $dateTime = date("Y-m-d H:i:s");
                            $questionsBase = "tables";

                            //устанавливаем текущую активную базу данных
                            mysqli_select_db($link, $questionsBase);

                            if (isset($data['add'])) //если кликнули на button
                            {
                                $header = $data['header'];
                                $text = $data['text'];

                                if ($data['group_type'] == 1) $group_type = 'info';
                                elseif ($data['group_type'] == 2) $group_type = 'warning';
                                elseif ($data['group_type'] == 3) $group_type = 'error';

                                $sql_insert = "INSERT INTO news  SET
                                    header = '" . $header . "', 
                                    text = '" . $text . "', 
                                    date = '" . $dateTime . "', 
                                    mode = '" . $group_type . "'";

                                if (mysqli_query($link, $sql_insert)) {
                                    echo "<span style='color: green;'>Новость добавлена. </span>";
                                } else {
                                    echo "<span style='color: red;'>Ошибка в регистрации: " . mysqli_error($link) . "</span>";
                                }
                            }
                        ?>
                    </form>
                </div>
            </div>

            <div class="row">
                <div class="col s12 m6">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">Информация</span>
                            <p>На главной странице отображаются последние 5 новостей.</p>
                            <p>Для управления новостями будут отображаться последние 10 новостей.</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr>
            <div class="row">
                <?php
                    $select_news = mysqli_query($link, "SELECT * FROM news ORDER BY id DESC LIMIT 10;");
                    $newsIsEmpty = true;
                    while ($news = mysqli_fetch_array($select_news)) {
                        switch ($news['mode']) {
                            case 'info':
                                $checkedValue= "1";
                                break;
                            case 'warning':
                                $checkedValue= "2";
                                break;
                            case 'error':
                                $checkedValue= "3";
                                break;
                            default:
                                $checkedValue= "1";
                                break;
                        }

                        $newsIsEmpty = false;
                        echo "<ul class='collection with-header z-depth-1'>
                            <li class='collection-header lightcoral'><h5><p>Выберите тип:</p></h5>
                            
                            <p><label><input name='group_type' type='radio' value='1' ";
                                if($checkedValue == "1") echo 'checked';
                                echo "/><span><i class='material-icons right'>info</i>Информация</span></label></p>
                            <p><label><input name='group_type' type='radio' value='2' ";
                                if($checkedValue == "2") echo 'checked';
                                echo "/><span><i class='material-icons right'>build</i>Предупреждение</span></label></p>
                            <p><label><input name='group_type' type='radio' value='3' ";
                                if($checkedValue == "3") echo 'checked';
                                echo "/><span><i class='material-icons right'>bug_report</i>Ошибка</span></label></p>";

                            echo "<input type='text' name='header' autocomplete='off' maxlength='500' placeholder='Текст (макс. 50 символов)' value='" . $news['header'] . "'>
                            <span class='right white-text'>" . date("d.m.y H:i", strtotime($news['date'])) . "</span></li>";

                        echo "<li class='collection-item'>
                                  <textarea name='text' cols='40' rows='10' minlength='3' maxlength='500' placeholder='Текст (макс. 500 символов)' 
                                    class='materialize-textarea'>" . $news['text'] . "</textarea>
                              </li></ul>";
                    }
                    if ($newsIsEmpty == true) {
                        echo "<li class='collection-item'>";
                        echo "<div>Новостей нет</div>";
                        echo "</li></ul>";
                    }
                ?>
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