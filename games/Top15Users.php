<html>

        <head>
            <meta charset="utf-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1">			

            <title>Результаты</title>
			<link rel="shortcut icon" type="image/png" href="images/kubokTop3.png">
            <link rel="stylesheet" type="text/css" href="css/style.css">
            <link rel="stylesheet" type="text/css" href="css/button.css" />
            <link rel="stylesheet" type="text/css" href="css/button-warship.css"/>
            <link rel="stylesheet" type="text/css" href="bykikorovy/css/buttonBack.css" />	
            <link rel="stylesheet" type="text/css" href="css/tablestyle.css"/>
            
            <!-- Bootstrap CSS -->
  <link href="css/bootstrap-4/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="css/zagalovokStyle.css" />

        </head>

<body>



<div class="content-white">
<br>
    <div class="header-h1 header-h1-dark">
        <h1>Результаты всех игр</h1><br>
    </div>

    <div class="header-h1">
        <a class="back_gamelistred" href="index.html" >Назад</a>
    </div>

<!--    <div class="info_div">
        <form action="TOP/Korovka/post_db_kor_lite.php" method="post">
<br/>
            Введите ваш Ник <br /> 
            <input type="text" name="usernik_lite" placeholder=""/><br />        

            Введите счет <br /> 
            <input type="text" name="score_lite"/><br/>

            <input type="hidden" name="date_lite" value="<?php echo date('Y-m-d') ?>" />
            <input type="hidden" name="time_lite" value="<?php echo date('H:i:s') ?>"/> <br />
            <input type="submit" name="add" style="background-color: orange;"  value="Зарегистрироваться" /> 
        </form>
<p></p>
</div>-->
    <div class="header-h1 header-h1-dark">
        <img align="center" src="images/mesta123.jpg" width=500px height=240px alt="">
    </div>

<br />

	<div class="info_div">
        <p></p>
        <h2>TOP 15 игроков в Быки коровы. Легко</h2>
	    <?php
	        include_once("TOP/Korovka/db_TOP15_kor_lite.php");
        ?>
        <p></p>
	</div>
 <br />

 <div class="info_div">
        <p></p>
        <h2>TOP 15 игроков в Быки коровы. Тяжело</h2>
	    <?php
	        include_once("TOP/Korovka/db_TOP15_kor_hard.php");
        ?>
        <p></p>
</div> 

<br/>
<div class="info_div">
        <p></p>
        <h2>TOP 15 игроков в Пятнашки</h2>
	    <?php
	        include_once("TOP/Pyatnaski/db_TOP15_pyatnaski.php");
        ?>
        <p></p>
	</div>
 <br />

</div> 
    </body>
</html>