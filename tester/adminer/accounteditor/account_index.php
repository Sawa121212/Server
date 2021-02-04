<?php
    $folderRootCount = 2;
    session_start();
    include("../inc/functions/func_folderRoot.php");

    require $folderRoot . 'conn/db.php';
    $file_name = basename(__FILE__);

    include($folderRoot . "inc/alertStyle.php");
    $data = $_POST;
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <? include($folderRoot . "inc/z_head.php"); ?>
    <title>Аккаунты</title>
</head>
<body>
<!--left panel-->
<? include($folderRoot . "inc/z_rightPanel.php"); ?>

<body>

<!--index-->
<div class="container">
    <div class="section" align="center">
        <h3>Аккаунты</h3>

        <div class="row">
            <?php echo "<br/><a href='../../account/account_signup.php' class='btn blue darken-2 z-depth-2'>
          Зарегистрировать аккаунт</a>";
            ?>
        </div>
        <br />
        <!--   Icon Section   -->
        <div class="row">
            <div class="col s12 m3 l3 offset-m1 offset-l1 lighten-1 z-depth-3"
                 style="margin-right:45px; margin-bottom:20px;">
                <div class="icon-block">
                    <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>
                    <h5 class="center">Редакторы</h5>
                    <p class="light">Информация</p>
                    <?php echo "<br/><a href='account_redaktors.php' class='btn blue darken-2 z-depth-2'>
              Посмотреть</a>";
                    ?>
                    <br /><br />
                </div>
            </div>

            <div class="col s12 m3 l3 lighten-1 z-depth-3" style="margin-right:45px; margin-bottom:20px;">
                <div class="icon-block">
                    <h2 class="center light-blue-text"><i class="material-icons">flash_on</i></h2>
                    <h5 class="center">Пользователи</h5>
                    <p class="light">Информация</p>
                    <?php echo "<br/><a href='account_teachers.php' class='btn blue darken-2 z-depth-2'>
              Посмотреть</a>";
                    ?>
                    <br /><br />
                </div>
            </div>

            <div class="col s12 m3 l3 lighten-1 z-depth-3" style="margin-right:45px; margin-bottom:20px;">
                <div class="icon-block">
                    <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>
                    <h5 class="center">Администраторы</h5>
                    <p class="light">Информация</p>
                    <?php echo "<br/><a href='account_administrators.php' class='btn blue darken-2 z-depth-2'>
              Посмотреть</a>";
                    ?>
                    <br /><br />
                </div>
            </div>
        </div><!-- class="row"-->

        <br>

    </div><!-- class="section"-->
</div>

<!--footer-->
<?php
    include($folderRoot . "inc/z_footer.php");
?>

</body>

</html>