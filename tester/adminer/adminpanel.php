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
    <title>Админ панель</title>
</head>
<body>
<!--left panel-->
<? include($folderRoot . "inc/z_rightPanel.php"); ?>

<!--index-->
<main>
    <div class="container">
        <br>
        <div class="row">
            <h3 align='center'>Админ панель</h3>
            <div class="row">
                <ul class="collection with-header z-depth-1">
                    <li class="collection-header"><h4>Администрирование</h4></li>
                    <li class="collection-item">
                        <div>Зарегистрировать аккаунт<a href="<? echo $folderRoot . "account/account_signup.php";?>" class="secondary-content"><i class="material-icons">send</i></a></div>
                    </li>
                    <li class="collection-item">
                        <div>Аккаунты<a href="accounteditor/account_index.php" class="secondary-content"><i class="material-icons">send</i></a></div>
                    </li>
                    <li class="collection-item">
                        <div>Управление новостями<a href="<? echo $folderRoot . "adminer/news.php";?>" class="secondary-content"><i class="material-icons">send</i></a></div>
                    </li>
                    <li class="collection-item">
                        <div>Управление тестами<a href="<? echo $folderRoot . "adminer/tests.php";?>" class="secondary-content"><i class="material-icons">send</i></a></div>
                    </li>
                    <li class="collection-item">
                        <div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div>
                    </li>
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