<meta name="description" content="Проверь себя">

<!-- Favicons-->
<link rel="apple-touch-icon-precomposed" href="images/favicon/apple-touch-icon-152x152.png">
<meta name="msapplication-TileColor" content="#FFFFFF">
<!--  Android 5 Chrome Color-->
<meta name="theme-color" content="#EE6E73">


<link rel="shortcut icon" href="<?php echo $folderRoot ?>img/icon.png" type="image/png">
<!--Import Google Icon Font-->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<!-- CSS-->
<link href="<?php echo $folderRoot ?>materialize/css/prism.css" rel="stylesheet">
<!--Black Theme-->
<?php
    if ($_SESSION['theme'] == 1) {
        echo "<link type='text/css' rel='stylesheet' href='" . $folderRoot . "materialize/css/ghpages-materialize-dark.css' media='screen,projection'>";
    } else {
        echo "<link type='text/css' rel='stylesheet' href='" . $folderRoot . "materialize/css/ghpages-materialize.css' media='screen,projection'>";
    }
?>


<link type="text/css" rel="stylesheet" href="<?php echo $folderRoot ?>materialize/css/style.css"
      media="screen,projection">

<!--Let browser know website is optimized for mobile-->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="msapplication-tap-highlight" content="no">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Content-Language" content="ru">
<meta content="text/css">
<META HTTP-EQUIV="Expires" CONTENT="0">
<title>Тестирование</title>

