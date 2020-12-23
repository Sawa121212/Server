<html>
        <head>
            <title>Пятнашки</title>
			<link rel="shortcut icon" type="image/gif" href="../images/pytnashki.png">
            <link rel="stylesheet" type="text/css" href="css/style.css">
			<link rel="stylesheet" type="text/css" href="css/button.css" />
			<link rel="stylesheet" type="text/css" href="../css/button-warship.css " />
			<link rel="stylesheet" type="text/css" href="css/pytnashkiButtonstyle.css" />
			<link rel="stylesheet" type="text/css" href="../bykikorovy/css/buttonBack.css" />
			<link rel="stylesheet" type="text/css" href="../css/zagalovokStyle.css" />
			
			<link rel="stylesheet" type="text/css" href="../bykikorovy/html/css/inputstyle.css"/>

            <script type="text/javascript" src="script/script.js"></script>
        </head>
        <BODY ondragstart="return false;" ondrop="return false;" onmousedown="return true;" onclick="return true;">
<p></p>
<div class="content-white">    	    
    <div class="early_header_pyatnashki"> 
     <form name="forma5">
		<h1 align="center" color="crimson">Пятнашки</h1>	

		<h1 align="center" color="green" id="InfoGame">Начнем?</h1>
		
		<span id="startbutton" class="sidebarON" align="center">
				<a  style='text-align: center;' class="endBuildP1" onclick="return startgame()">НАЧАТЬ ИГРУ</a>
		</span>

		<span id="starttable" class="sidebarOFF">
			<table align="center" cellpadding="4" cellspacing="2" style='vertical-align: bottom;' style="border-collapse: collapse;">
				<tr>
					<th><span><a  class="buttons_good" id="b1" href="javascript://" onclick="return myButton(1)">Пусто</a></span></th>
					<th><a  class="buttons_good" id="b2" href="javascript://" onclick="return myButton(2)">Пусто</a></th>
					<th><a  class="buttons_good" id="b3" href="javascript://" onclick="return myButton(3)">Пусто</a></th>
					<th><a  class="buttons_good" id="b4" href="javascript://" onclick="return myButton(4)">Пусто</a></th>
				</tr>
				<tr>
					<th><a  class="buttons_good" id="b5" href="javascript://" onclick="return myButton(5)">Пусто</a></th>
					<th><a  class="buttons_good" id="b6" href="javascript://" onclick="return myButton(6)">Пусто</a></th>
					<th><a  class="buttons_good" id="b7" href="javascript://" onclick="return myButton(7)">Пусто</a></th>
					<th><a  class="buttons_good" id="b8" href="javascript://" onclick="return myButton(8)">Пусто</a></th>
				</tr>
				<tr>
					<th><a  class="buttons_good" id="b9" href="javascript://" onclick="return myButton(9)">Пусто</a></th>
					<th><a  class="buttons_good" id="b10" href="javascript://" onclick="return myButton(10)">Пусто</a></th>
					<th><a  class="buttons_good" id="b11" href="javascript://" onclick="return myButton(11)">Пусто</a></th>
					<th><a  class="buttons_good" id="b12" href="javascript://" onclick="return myButton(12)">Пусто</a></th>
				</tr>
				<tr>
					<th><a  class="buttons_good" id="b13" href="javascript://" onclick="return myButton(13)">Пусто</a></th>
					<th><a  class="buttons_good" id="b14" href="javascript://" onclick="return myButton(14)">Пусто</a></th>
					<th><a  class="buttons_good" id="b15" href="javascript://" onclick="return myButton(15)">Пусто</a></th>
					<th><a  class="buttons_good" id="b16" href="javascript://" onclick="return myButton(16)">Пусто</a></th>
				</tr>
			</table>
		</span>
	 </form>
<br/>
	 <span>Количество ходов: </span>
                <input type="text" id="xodInfo" readonly size="11"><br/><br/> 
	</div>
	
	<p></p>

	<div class="early_header_pyatnashki_table">
		<div class="sidebarOFF" id="restartButton">
			<div class="back_div" id="restartButton">			
				<button id="reset" style="vertical-align: middle; background-color: #008CBA;width: 210px;
				line-height: 40px;font-size: 16px;color:white; border: 1px solid  #008CBA;" onclick="return restart()">НОВАЯ ИГРА</button>
				<br/>
				<br/>
			</div>
		</div>

			<div class="header-h1">
				<a class="back_gamelistred" href="../index.html" >Назад</a>
			</div>
			
			<span id="testButton" class="sidebarOFF" align="center">
				<div class="info_div">
					<p style='color: red;'>Тестовый режим - АКТИВЕН!</p>
					<a  style='text-align: center;' class="endBuildP1" onclick="return testButtonEnd()">Завершить игру</a>
				</div>
			</span>
			
		
	</div>

<br/>

	<div class="early_header_pyatnashki_table">
		<div class="back_div">
			<div class="sidebarON" id="saveresultInfo">
				<p style='font-size: 17px;'>Вы можете сохранить ваш результат только после завершения игры</p>
			</div>
			<!-- сохранение в  БД -->
			
			<div class="sidebarOFF" id="saveresult">
				<div class="info_div_byk">
					<form action="../TOP/Pyatnaski/post_db_pyatnaski.php" method="post"><br/>
					<p>Поздравляем с победой! Вы можете сохранить ваш результат!<br/>
						Для это введите ваш Ник и нажмите кнопку "Отправить".</p>
						Введите ваш Ник<br/> 
						<input type="text" name="usernik_lite" placeholder=""/><br/>        

						<!--Введите счет<br/> Ваш счет<br/>-->
						<input type="hidden" id="xodScore" name="score_lite"/><br/>

						<input type="hidden" name="date_lite" value="<?php echo date('Y-m-d') ?>" />
						<input type="hidden" name="time_lite" value="<?php echo date('H:i:s') ?>"/> <br/>
						<input type="submit" name="add" style="background-color: orange;" value="Отправить" /><br/>
					</form>
					<br/>
				</div>				
			</div>
		</div>
	</div>




<br/>
	<div class="early_header_pyatnashki2">
		<div class="back_div">
			 <!-- БД -->
			 
                <p></p>
                <h2>TOP 3 игрока в Пятнашки</h2>
                    <?php
                        include_once("../TOP/Pyatnaski/db_TOP3_pyatnaski.php");
                    ?>
				<p></p>
				<br/>
            
		</div>
	</div>
	
</div>      
        </body>
    </html>
