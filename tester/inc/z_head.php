    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <?php
        if ($_SESSION['theme'] == 1) {
            echo "<link type='text/css' rel='stylesheet' href='" . $folderRoot . "materialize/css/materialize.dark.css' media='screen,projection'/>";
        } else {
            echo "<link type='text/css' rel='stylesheet' href='" . $folderRoot . "materialize/css/materialize.css' media='screen,projection'/>";
        }
    ?>
    <link type="text/css" rel="stylesheet" href=" <? echo $folderRoot ?>materialize/css/style.css"
          media="screen,projection">

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="Content-Language" content="ru">
    <meta content="text/css">
    <META HTTP-EQUIV="Expires" CONTENT="0">

<!--  Scripts-->
<script src="<? echo $folderRoot ?>materialize/js/jquery-2.1.1.min.js"></script>
<script src="<? echo $folderRoot ?>materialize/js/materialize.js"></script>
<script src="<? echo $folderRoot ?>materialize/js/init.js"></script> <!--  Всплювающее меню -->
