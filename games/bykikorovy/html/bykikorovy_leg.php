<html>
<head>
            <meta charset="utf-8">       
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">

			<link rel="stylesheet"  href="fonts/SegoePrint/fonts.css">

		    <title>Быки коровы</title>
			<link rel="shortcut icon" type="image/png" href="../images/byk.png">
			<link rel="stylesheet" type="text/css" href="css/button.css" />
            <link rel="stylesheet" type="text/css" href="css/styleKorovka.css"/>
            <link rel="stylesheet" type="text/css" href="css/inputstyle.css"/>
            <link rel="stylesheet" type="text/css" href="../../css/button-warship.css"/>		
            <script type="text/javascript" src="script/scriptMymy_lite.js"></script>
        
        <style type="text/css">    
           * { margin: 0; padding: 0; }
           p { padding: 10px; }
           #left { position: absolute; left: 0; top: 0; width: 65%; height: 170%;}
           #right { position: absolute; right: 0; top: 0; width: 35%; height: 170%;} 
        </style>
</head>



<BODY ondragstart="return false;" ondrop="return false;" onmousedown="return true;" onclick="return true;">
    <div id="left">
        <div class="early_access_header12_29">
            <div class="sidebarOFF" id="TestMod">
                <form name="forma1">
                    <span style="color: red; font-size: 18px;">Тестовый режим - активен!
                    Число Бота:<input type="text" name="bot_number" size="4" maxlength="4"><br>
                    </span>
                </form>
            </div>

            <h2>Сложность: легкая<br></h2>

            <p></p>

            <span class="text-top" ><b>Правила игры</b></span><br>
            Компьютер задумывает четыре различные цифры из 0,1,2,...9. Цифры в загаданном числе без повтора!(Например: 0934)<br>
            Игрок делает ходы, чтобы узнать эти цифры и их порядок. Каждый ход состоит из четырёх цифр, 0 (ноль) может стоять на первом месте.<br>
            В ответ компьютер показывает число отгаданных цифр, стоящих на своих местах (число быков) и число отгаданных цифр, стоящих не на своих местах (число коров).<br>
            <p></p> 

            <span class="text-top" ><b>Пример</b></span><br>

            Компьютер задумал 0834. Игрок сделал ход 8134. Компьютер ответил: 2 быка (цифры 3 и 4) и 1 корова (цифра 8).

            <p></p>

        
            <div class="sidebarON" id="gamestart">
                    <a class="game_start" onclick="return startGame(forma1)">НАЧАТЬ ИГРУ</a>
            </div>

            <span style="color: red; font-size: 18px;" id="startInfo"></span>
            <p></p>



            <!-- Попроповать-->
            <div class="sidebarOFF" id="playerbutton">
                <form name="forma2">
                    <div class="back_div">
                        Введи число:<input type="text" name="number" size="4" maxlength="4">
                        <input type="button" value="Попроповать" onclick="Xod(forma2)"><br>
                    </div>
                </form>

                <p></p>
                <span>Количество ходов: </span>
                <input type="text" id="xodInfo" readonly size="11"><br/><br/> 
            </div>

            <!-- БД -->
            <div class="info_div_byk">
                <p></p>
                <h2>TOP 3 игрока в Быки коровы. Легко</h2>
                    <?php
                        include_once("../../TOP/Korovka/db_TOP3_kor_lite.php");
                    ?>
                <p></p>
            </div>

<br/>
            <!-- сохранение в  БД -->
            <div class="sidebarOFF" id="saveresult">
                <div class="info_div_byk">
                    <form action="../../TOP/Korovka/post_db_kor_lite.php" method="post"><br/>
                    <p>Поздравляем с победой! Вы можете сохранить ваш результат!<br/>
                        Для это введите ваш Ник и нажмите кнопку "Отправить".</p>
                        Введите ваш Ник<br/> 
                        <input type="text" name="usernik_lite" placeholder=""/><br/>        

                        <!--Введите счет<br/> Ваш счет<br/>-->
                         <input type="hidden" id="xodScore" name="score_lite" readonly/><br/>

                        <input type="hidden" name="date_lite" value="<?php echo date('Y-m-d') ?>" />
                        <input type="hidden" name="time_lite" value="<?php echo date('H:i:s') ?>"/> <br/>
                        <input type="submit" name="add" style="background-color: orange;" value="Отправить" /><br/>
                    </form>
                    <br/>
                </div>
            <p></p>
            </div>

        </div>
    </div>


    <div id="right">        
        <div class="early_access_header12_30">
                <table align=center style="border-spacing: 9px;">
                        <!-- ячейки style="border-collapse: collapse; " ><-->
                        <tr>		
                            <td align="center" >
                                <div class="early_access_infobox">
                                    <span style="color: red; "></span>&nbsp;<span id="info1_key">Пусто</span>&nbsp;&nbsp;<br>
                                    <span style="color: red; ">К</span></span><span id="info1_resultK">Пусто</span>
                                    <span style="color: red; ">&nbsp;Б</span><span id="info1_resultB">Пусто</span>
                                </div>
                            </td>

                            <td align="center">
                                <div class="early_access_infobox">
                                    <span style="color: red; "></span>&nbsp;<span id="info2_key">Пусто</span>&nbsp;&nbsp;<br>
                                    <span style="color: red; ">К</span></span><span id="info2_resultK">Пусто</span>
                                    <span style="color: red; ">&nbsp;Б</span><span id="info2_resultB">Пусто</span>
                                </div>
                            </td>
                        </tr>

                        <tr>		
                            <td align="center">
                                <div class="early_access_infobox">
                                    <span style="color: red; "></span>&nbsp;<span id="info3_key">Пусто</span>&nbsp;&nbsp;<br>
                                    <span style="color: red; ">К</span></span><span id="info3_resultK">Пусто</span>
                                    <span style="color: red; ">&nbsp;Б</span><span id="info3_resultB">Пусто</span>
                                </div>
                            </td>

                            <td align="center">
                                <div class="early_access_infobox">
                                    <span style="color: red; "></span>&nbsp;<span id="info4_key">Пусто</span>&nbsp;&nbsp;<br>
                                    <span style="color: red; ">К</span></span><span id="info4_resultK">Пусто</span>
                                    <span style="color: red; ">&nbsp;Б</span><span id="info4_resultB">Пусто</span>
                                </div>
                            </td>
                        </tr>

                        <tr>		
                            <td align="center">
                                <div class="early_access_infobox">
                                    <span style="color: red; "></span>&nbsp;<span id="info5_key">Пусто</span>&nbsp;&nbsp;<br>
                                    <span style="color: red; ">К</span></span><span id="info5_resultK">Пусто</span>
                                    <span style="color: red; ">&nbsp;Б</span><span id="info5_resultB">Пусто</span>
                                </div>
                            </td>

                            <td align="center">
                                <div class="early_access_infobox">
                                    <span style="color: red; "></span>&nbsp;<span id="info6_key">Пусто</span>&nbsp;&nbsp;<br>
                                    <span style="color: red; ">К</span></span><span id="info6_resultK">Пусто</span>
                                    <span style="color: red; ">&nbsp;Б</span><span id="info6_resultB">Пусто</span>
                                </div>
                            </td>
                        </tr>
                        <tr>		
                            <td align="center">
                                <div class="early_access_infobox">
                                    <span style="color: red; "></span>&nbsp;<span id="info7_key">Пусто</span>&nbsp;&nbsp;<br>
                                    <span style="color: red; ">К</span></span><span id="info7_resultK">Пусто</span>
                                    <span style="color: red; ">&nbsp;Б</span><span id="info7_resultB">Пусто</span>
                                </div>
                            </td>

                            <td align="center">
                                <div class="early_access_infobox">
                                    <span style="color: red; "></span>&nbsp;<span id="info8_key">Пусто</span>&nbsp;&nbsp;<br>
                                    <span style="color: red; ">К</span></span><span id="info8_resultK">Пусто</span>
                                    <span style="color: red; ">&nbsp;Б</span><span id="info8_resultB">Пусто</span>
                                </div>
                            </td>
                        </tr>

                        <tr>		
                            <td align="center">
                                <div class="early_access_infobox">
                                    <span style="color: red; "></span>&nbsp;<span id="info9_key">Пусто</span>&nbsp;&nbsp;<br>
                                    <span style="color: red; ">К</span></span><span id="info9_resultK">Пусто</span>
                                    <span style="color: red; ">&nbsp;Б</span><span id="info9_resultB">Пусто</span>
                                </div>
                            </td>
                            <td align="center">
                                <div class="early_access_infobox">
                                    <span style="color: red; "></span>&nbsp;<span id="info10_key">Пусто</span>&nbsp;&nbsp;<br>
                                    <span style="color: red; ">К</span></span><span id="info10_resultK">Пусто</span>
                                    <span style="color: red; ">&nbsp;Б</span><span id="info10_resultB">Пусто</span>

                                </div>
                            </td>
                        </tr>
                </table>

                <div class="back_div">
                    <a class="restart_game" href="bykikorovy_leg.php">Рестарт</a>
                    <a class="back_menu" href="../bykikorovy.html">Назад</a>
                    <a class="back_gamelist" href="../../index.html">На Главную страницу</a>
                </div>
        </div>
    </div>
</body>

</html>

