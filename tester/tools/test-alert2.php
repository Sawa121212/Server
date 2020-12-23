<!DOCTYPE html>

<head>
    <!--<link href="img/icon" rel="stylesheet">-->
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="materialize/css/materialize.min.css" media="screen,projection" />
    <!--<link type="text/css" rel="stylesheet" href="materialize/css/style.css" media="screen,projection">-->

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />


    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <!--<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">-->
    <meta http-equiv="Content-Language" content="ru">
    <meta content="text/css">
    <META HTTP-EQUIV="Expires" CONTENT="0">

    <title>Тест2 Alert()</title>
</head>

<body>
<?php
include("test-alert.php");
?>
   

    <div class="container">
        <div class="row">
            <div class="input-field col s6">
                <button class='btn blue darken-2 waves-effect waves-light z-depth-2' type='submit' onclick="GoodAlert()" value='Хорошо' id='btn1' name='btn1'>Хорошо</button>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <button class='btn blue darken-2 waves-effect waves-light z-depth-2' type='submit' onclick="BadAlert()" value='Плохо' id='BadAlert' name='btn2'>Плохо</button>
            </div>
        </div>
		
		<div class="row">
            <div class="input-field col s6">
                <button class='btn waves-light waves-teal' type='submit' onclick="#" value='Плохо' id='BadAlert' name='btn2'>Плохо</button><br>
            </div>
        </div>
		<div class="row">
            <div class="input-field col s6">
				 <a class="waves-effect waves-light btn" href="#">Wave</a>
            </div>
        </div>


        


    </div>

    <!--  Scripts-->
    <script src="materialize/js/jquery-2.1.1.min.js"></script>
    <script src="materialize/js/materialize.min-v2.js"></script>
    <script src="materialize/js/materialize.min.js"></script>
    <script src="materialize/js/init.js"></script>
    <script src="materialize/js/plugins.min.js"></script>
    <!-- <script src="materialize/js/jquery-1.9.1.min.js"></script>-->


    <div class="sidenav-overlay"></div>
    <div class="drag-target"></div>

</body>

</html>