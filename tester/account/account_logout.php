<?php
    session_start();
    $folderRootCount = 2;
    include("../inc/functions/func_folderRoot.php");
?>
<?php
    require $folderRoot . 'conn/db.php';
    unset($_SESSION['logged_user']);

    unset($_SESSION['second_name']);
    unset($_SESSION['first_name']);
    unset($_SESSION['patronymic']);
    unset($_SESSION['login']);
    unset($_SESSION['email']);
    $_SESSION['usertype'] = 4;
    $_SESSION['theme'] = 0;
    $_SESSION['uid'] = 0;


    header('Location: ' . $folderRoot . 'index.php'); ?>
