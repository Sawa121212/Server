/*--Задача 7. --*/
  
/*-- Коды игроков --*/
/*--  GameXod = 101 -- Код пустоты --*/
/*--  p1 = 66  -- Код игрока1 - X  --*/
/*--  p2 = 77  -- Код игрока2 - O  --*/
/*-- false  -- Код использования ячейки--*/
 
/*-- Код хода игрокоа --*/
var GameXod = 0;
 
 /*-- Для проверки на Выигрыш и Ничью --*/
var GameEnd = false;

 /*-- Для проверки на Ничью (максимум ходов = 9) --*/
var MaxXod = 0;
 
/*--------------------------------------- Иконки -------------------*/
	var icon = [];
	/*-- Стандартный фон --*/
	icon[0] = "images/start_picture.jpg";

/*-- Для проверки на Ничью (максимум ходов = 9) --*/
var win_bot_attack_code = 101;

var vybor_atacki_Centr = 0;
var vybor_atacki_Diag = 0;

/*-- Для проверки на Дилемму --*/
var dilemma_bot_zachita = false; /*З ащита */
var dilemma_bot_ataka = false; /* Атака */


/*-- Коды клеток, будет менятся взависимости от хода игрока --*/
	var GameXod_a1 = 101; var a1_active = true;
	var GameXod_a2 = 101; var a2_active = true;
	var GameXod_a3 = 101; var a3_active = true;
	
	var GameXod_b1 = 101; var b1_active = true;
	var GameXod_b2 = 101; var b2_active = true;
	var GameXod_b3 = 101; var b3_active = true;
	
	var GameXod_c1 = 101; var c1_active = true;
	var GameXod_c2 = 101; var c2_active = true;
	var GameXod_c3 = 101; var c3_active = true;

	var StartPlayerActive  = false;
	var StartBotActive = false;

/*-- StartPlayer --*/
function StartPlayer(){
	if (StartBotActive == false && StartPlayerActive == false){
		GameXod = 66;
			/*-- крестик и нолик обычные  image_X.src=icon[1 or 2]; --*/
			icon[1] = "images/X.jpg";
			icon[2] = "images/O.jpg";
			/*-- Выигрышные крестик и нолик  image_X.src=icon[3 or 4]; --*/
			icon[3] = "images/win_X.jpg";
			icon[4] = "images/win_O.jpg";
		StartPlayerActive = true;
		AllDeactive();
		var infoXodSp = document.getElementById("InfoXod");
		infoXodSp.innerHTML = "ИГРОК #1";
		
		var greenbutton1 = document.getElementById("StPl");
		greenbutton1.style.background = "green";
		StartPlayer_timer();
	}
	else { alert("Нельзя менять ход игры! При необходимости нажмите кнопку <<Начать сначала>>");}
}
function StartPlayer_timer() {
	window.StartPlayer_timerId = window.setInterval(StartPlayerInfo, 300);
}
function StartPlayerInfo() {
	/*alert('Первым идет ИГРОК, то есть ТЫ! ');*/
	window.clearInterval(window.StartPlayer_timerId);
	NextXodInfo();
}

/*-- StartBot --*/
function StartBot(){
	if (StartPlayerActive == false && StartBotActive == false){
		GameXod = 77;
			/*-- крестик и нолик обычные  image_X.src=icon[1 or 2]; --*/
			icon[2] = "images/X.jpg";
			icon[1] = "images/O.jpg";
			/*-- Выигрышные крестик и нолик  image_X.src=icon[3 or 4]; --*/
			icon[4] = "images/win_X.jpg";
			icon[3] = "images/win_O.jpg";
		StartBotActive = true; 
		AllDeactive();
		var infoXodSb = document.getElementById("InfoXod");
		infoXodSb.innerHTML = "BOT";
		
		var greenbutton2 = document.getElementById("StBot");
		greenbutton2.style.background = "green";
		StartBot_timer();
	}
	else { alert("Нельзя менять ход игры! При необходимости нажмите кнопку <<Начать сначала>>");}
}
function StartBot_timer() {
	window.StartBot_timerId = window.setInterval(StartBotInfo, 1000);
}
function StartBotInfo() {
	/*alert('Первым идет BOT');*/
	window.clearInterval(window.StartBot_timerId);
	NextXodInfo();
}

/*------------------------------- Сам МОЗГ игры --------------------------*/
	/*-- Ax --*/
function xod_a1(){
	var image = document.getElementById("image");
	if (a1_active == false){
		if (GameXod_a1 == 101){
			if (GameXod == 66){image_a1.src = icon[1]; GameXod_a1 = 66; GameXod = 77; a1_active = true; MaxXod++; CheckEnd();}
			else { alert("ERROR with a1");}
		}
	}
	else { alert("Эта ячейка уже используется или вы не выбрали кто идет первым!");}
	return false;
}
function xod_a2(){
	var image = document.getElementById("image");
	if (a2_active == false){
		if (GameXod_a2 == 101){
			if (GameXod == 66){image_a2.src = icon[1]; GameXod_a2 = 66; GameXod = 77; a2_active = true; MaxXod++; CheckEnd();}

			else { alert("ERROR with a2");}
		}
	}
	else { alert("Эта ячейка уже используется или вы не выбрали кто идет первым!");}
	return false;
}
function xod_a3(){
	var image = document.getElementById("image");
	if (a3_active == false){
		if (GameXod_a3 == 101){
			if (GameXod == 66){image_a3.src = icon[1]; GameXod_a3 = 66; GameXod = 77; a3_active = true; MaxXod++; CheckEnd();}
			else { alert("ERROR with a3");}
		}
	}
	else { alert("Эта ячейка уже используется или вы не выбрали кто идет первым!");}
	return false;
}
 
	/*-- Bx --*/
function xod_b1(){
	var image = document.getElementById("image");
	if (b1_active == false){
		if (GameXod_b1 == 101){
			if (GameXod == 66){image_b1.src = icon[1]; GameXod_b1 = 66; GameXod = 77; b1_active = true; MaxXod++; CheckEnd();}
			else { alert("ERROR with b1");}
		}
	}
	else { alert("Эта ячейка уже используется или вы не выбрали кто идет первым!");}
	return false;
}
function xod_b2(){
	var image = document.getElementById("image");
	if (b2_active == false){
		if (GameXod_b2 == 101){
			if (GameXod == 66){image_b2.src = icon[1]; GameXod_b2 = 66; GameXod = 77; b2_active = true; MaxXod++; CheckEnd();}
			else { alert("ERROR with b2");}
		}
	}
	else { alert("Эта ячейка уже используется или вы не выбрали кто идет первым!");}
	return false;
}
function xod_b3(){
	var image = document.getElementById("image");
	if (b3_active == false){
		if (GameXod_b3 == 101){
			if (GameXod == 66){image_b3.src = icon[1]; GameXod_b3 = 66; GameXod = 77; b3_active = true; MaxXod++; CheckEnd();}
			else { alert("ERROR with b3");}
		}
	}
	else { alert("Эта ячейка уже используется или вы не выбрали кто идет первым!");}
	return false;
}
  
	/*-- Cx --*/
function xod_c1(){
	var image = document.getElementById("image");
	if (c1_active == false){
		if (GameXod_c1 == 101){
			if (GameXod == 66){image_c1.src = icon[1]; GameXod_c1 = 66; GameXod = 77; c1_active = true; MaxXod++; CheckEnd();}
			else { alert("ERROR with c1");}
		}
	}
	else { alert("Эта ячейка уже используется или вы не выбрали кто идет первым!");}
	return false;
}
function xod_c2(){
	var image = document.getElementById("image");
	if (c2_active == false){
		if (GameXod_c2 == 101){
			if (GameXod == 66){image_c2.src = icon[1]; GameXod_c2 = 66; GameXod = 77; c2_active = true; MaxXod++; CheckEnd();}
			else { alert("ERROR with c2");}
		}
	}
	else { alert("Эта ячейка уже используется или вы не выбрали кто идет первым!");}
	return false;
}
function xod_c3(){
	var image = document.getElementById("image");
	if (c3_active == false){
		if (GameXod_c3 == 101){
			if (GameXod == 66){image_c3.src = icon[1]; GameXod_c3 = 66; GameXod = 77; c3_active = true; MaxXod++; CheckEnd();}
			else { alert("ERROR with c3");}
		}
	}
	else { alert("Эта ячейка уже используется или вы не выбрали кто идет первым!");}
	return false;
}
 /*------------------------------- Конец МОЗГА -------------------*/


/*-------------------------------- Проверка на выигрыш -------------*/
function CheckEnd() {	
	if		(GameXod_a1 == 66 && GameXod_a2 == 66 && GameXod_a3 == 66){image_a1.src = icon[3]; image_a2.src = icon[3]; image_a3.src = icon[3]; Player1Win_timer();}
	else if (GameXod_a1 == 77 && GameXod_a2 == 77 && GameXod_a3 == 77){image_a1.src = icon[4]; image_a2.src = icon[4]; image_a3.src = icon[4]; BotWin_timer();}
  
	else if (GameXod_b1 == 66 && GameXod_b2 == 66 && GameXod_b3 == 66){image_b1.src = icon[3]; image_b2.src = icon[3]; image_b3.src = icon[3]; Player1Win_timer();}
	else if (GameXod_b1 == 77 && GameXod_b2 == 77 && GameXod_b3 == 77){image_b1.src = icon[4]; image_b2.src = icon[4]; image_b3.src = icon[4]; BotWin_timer();}
  
	else if (GameXod_c1 == 66 && GameXod_c2 == 66 && GameXod_c3 == 66){image_c1.src = icon[3]; image_c2.src = icon[3]; image_c3.src = icon[3]; Player1Win_timer();}
	else if (GameXod_c1 == 77 && GameXod_c2 == 77 && GameXod_c3 == 77){image_c1.src = icon[4]; image_c2.src = icon[4]; image_c3.src = icon[4]; BotWin_timer();}
  
	else if (GameXod_a1 == 66 && GameXod_b1 == 66 && GameXod_c1 == 66){image_a1.src = icon[3]; image_b1.src = icon[3]; image_c1.src = icon[3]; Player1Win_timer();}
	else if (GameXod_a1 == 77 && GameXod_b1 == 77 && GameXod_c1 == 77){image_a1.src = icon[4]; image_b1.src = icon[4]; image_c1.src = icon[4]; BotWin_timer();}
  
	else if (GameXod_a2 == 66 && GameXod_b2 == 66 && GameXod_c2 == 66){image_a2.src = icon[3]; image_b2.src = icon[3]; image_c2.src = icon[3]; Player1Win_timer();}
	else if (GameXod_a2 == 77 && GameXod_b2 == 77 && GameXod_c2 == 77){image_a2.src = icon[4]; image_b2.src = icon[4]; image_c2.src = icon[4]; BotWin_timer();}
  
	else if (GameXod_a3 == 66 && GameXod_b3 == 66 && GameXod_c3 == 66){image_a3.src = icon[3]; image_b3.src = icon[3]; image_c3.src = icon[3]; Player1Win_timer();}
	else if (GameXod_a3 == 77 && GameXod_b3 == 77 && GameXod_c3 == 77){image_a3.src = icon[4]; image_b3.src = icon[4]; image_c3.src = icon[4]; BotWin_timer();}
  
	else if (GameXod_a1 == 66 && GameXod_b2 == 66 && GameXod_c3 == 66){image_a1.src = icon[3]; image_b2.src = icon[3]; image_c3.src = icon[3]; Player1Win_timer();}
	else if (GameXod_a1 == 77 && GameXod_b2 == 77 && GameXod_c3 == 77){image_a1.src = icon[4]; image_b2.src = icon[4]; image_c3.src = icon[4]; BotWin_timer();}
  
	else if (GameXod_a3 == 66 && GameXod_b2 == 66 && GameXod_c1 == 66){image_a3.src = icon[3]; image_b2.src = icon[3]; image_c1.src = icon[3]; Player1Win_timer();}
	else if (GameXod_a3 == 77 && GameXod_b2 == 77 && GameXod_c1 == 77){image_a3.src = icon[4]; image_b2.src = icon[4]; image_c1.src = icon[4]; BotWin_timer();}
	else if (GameEnd == false && MaxXod == 9){
		var infoXod9 = document.getElementById("InfoXod");
			infoXod9.innerHTML = "";
		var infoXod99 = document.getElementById("InfoTextXOdit");
			infoXod99.innerHTML = "";
	AllActive();
	var infoGameEnd3 = document.getElementById("InfoGameEnd");
	infoGameEnd3.innerHTML = "НИЧЬЯ"; 
		var buttonEndRefresh3 = document.getElementById("buttons_end_refresh");
	buttonEndRefresh3.style.textDecoration = "underline";
	window.NichyaId = window.setInterval(Nichya, 300);} 

	else  { NextXodInfo();}
  return false;
}

/*-------------------------------Инфо о выигрыше -------------------*/
function Player1Win_timer() {
	var infoXod11 = document.getElementById("InfoXod");
		infoXod11.innerHTML = "";
	var infoXod111 = document.getElementById("InfoTextXOdit");
		infoXod111.innerHTML = "";
	AllActive();
	var infoGameEnd1 = document.getElementById("InfoGameEnd");
	infoGameEnd1.innerHTML = "ВЫИГРАЛ ИГРОК #1";

	var buttonEndRefresh1 = document.getElementById("buttons_end_refresh");
	buttonEndRefresh1.style.textDecoration = "underline";
	
	window.Player1Win_timerId = window.setInterval(Player1Win, 300);
}
function BotWin_timer() {
	var infoXod22 = document.getElementById("InfoXod");
		infoXod22.innerHTML = "";
	var infoXod222 = document.getElementById("InfoTextXOdit");
		infoXod222.innerHTML = "";	
	AllActive();
	var infoGameEnd2 = document.getElementById("InfoGameEnd");
	infoGameEnd2.innerHTML = "ВЫИГРАЛ BOT"; 
		var buttonEndRefresh2 = document.getElementById("buttons_end_refresh");
	buttonEndRefresh2.style.textDecoration = "underline";
	
	window.BotWin_timerId = window.setInterval(BotWin, 300);
}
function Player1Win() {
	alert("ВЫИГРАЛ ИГРОК");
	window.clearInterval(window.Player1Win_timerId);
}
function BotWin() {
	alert("ВЫИГРАЛ BOT");
	window.clearInterval(window.BotWin_timerId);
}
function Nichya() {
	alert("НИЧЬЯ");
	window.clearInterval(window.NichyaId);
}


/*------------------------------- Дилемма о последнем ходе ---------------*/
function NextXodInfo() {
    if (GameXod == 66) { NextXodInfo_next();}
    else { BotLastXod_first(); }
    return false;
}

function BotLastXod_first() {/*-- Проверка выбора на последений ход = Защита или Атака --*/
    if (GameXod == 77) {
        /*-- Строки  - Защита --*/
        /*-- Ax --*/
        if (a1_active == false && GameXod_a2 == 66 && GameXod_a3 == 66 && GameXod_a1 == 101) { dilemma_bot_zachita = true; }
        else if (GameXod_a1 == 66 && a2_active == false && GameXod_a3 == 66 && GameXod_a2 == 101) { dilemma_bot_zachita = true; }
        else if (GameXod_a1 == 66 && GameXod_a2 == 66 && a3_active == false && GameXod_a3 == 101) { dilemma_bot_zachita = true; }

        /*-- Bx --*/
        else if (b1_active == false && GameXod_b2 == 66 && GameXod_b3 == 66 && GameXod_b1 == 101) { dilemma_bot_zachita = true; }
        else if (GameXod_b1 == 66 && b2_active == false && GameXod_b3 == 66 && GameXod_b2 == 101) { dilemma_bot_zachita = true; }
        else if (GameXod_b1 == 66 && GameXod_b2 == 66 && b3_active == false && GameXod_b3 == 101) { dilemma_bot_zachita = true; }

        /*-- Cx --*/
        else if (c1_active == false && GameXod_c2 == 66 && GameXod_c3 == 66 && GameXod_c1 == 101) { dilemma_bot_zachita = true; }
        else if (GameXod_c1 == 66 && c2_active == false && GameXod_c3 == 66 && GameXod_c2 == 101) { dilemma_bot_zachita = true; }
        else if (GameXod_c1 == 66 && GameXod_c2 == 66 && c3_active == false && GameXod_c3 == 101) { dilemma_bot_zachita = true; }

        /*-- Столбцы --*/
        /*-- Ay --*/
        else if (a1_active == false && GameXod_b1 == 66 && GameXod_c1 == 66 && GameXod_a1 == 101) { dilemma_bot_zachita = true; }
        else if (GameXod_a1 == 66 && b1_active == false && GameXod_c1 == 66 && GameXod_b1 == 101) { dilemma_bot_zachita = true; }
        else if (GameXod_a1 == 66 && GameXod_b1 == 66 && c1_active == false && GameXod_c1 == 101) { dilemma_bot_zachita = true; }

        /*-- By --*/
        else if (a2_active == false && GameXod_b2 == 66 && GameXod_c2 == 66 && GameXod_a2 == 101) { dilemma_bot_zachita = true; }
        else if (GameXod_a2 == 66 && b2_active == false && GameXod_c2 == 66 && GameXod_b2 == 101) { dilemma_bot_zachita = true; }
        else if (GameXod_a2 == 66 && GameXod_b2 == 66 && c2_active == false && GameXod_c2 == 101) { dilemma_bot_zachita = true; }

        /*-- Cx --*/
        else if (a3_active == false && GameXod_b3 == 66 && GameXod_c3 == 66 && GameXod_a3 == 101) { dilemma_bot_zachita = true; }
        else if (GameXod_a3 == 66 && b3_active == false && GameXod_c3 == 66 && GameXod_b3 == 101) { dilemma_bot_zachita = true; }
        else if (GameXod_a3 == 66 && GameXod_b3 == 66 && c3_active == false && GameXod_c3 == 101) { dilemma_bot_zachita = true; }

        /*-- Диагонали --*/
        /*-- A1+C3 --*/
        else if (a1_active == false && GameXod_b2 == 66 && GameXod_c3 == 66 && GameXod_a1 == 101) { dilemma_bot_zachita = true; }
        else if (GameXod_a1 == 66 && b2_active == false && GameXod_c3 == 66 && GameXod_b2 == 101) { dilemma_bot_zachita = true; }
        else if (GameXod_a1 == 66 && GameXod_b2 == 66 && c3_active == false && GameXod_c3 == 101) { dilemma_bot_zachita = true; }

        /*-- A3+C1 --*/
        else if (a3_active == false && GameXod_b2 == 66 && GameXod_c1 == 66 && GameXod_a3 == 101) { dilemma_bot_zachita = true; }
        else if (GameXod_a3 == 66 && b2_active == false && GameXod_c1 == 66 && GameXod_b2 == 101) { dilemma_bot_zachita = true; }
        else if (GameXod_a3 == 66 && GameXod_b2 == 66 && c1_active == false && GameXod_c1 == 101) { dilemma_bot_zachita = true; }
    }
    BotLastXod_second();
}

function BotLastXod_second() {/*-- Проверка выбора на последений ход = Защита или Атака --*/
    if (GameXod == 77) {
        /* --Проверка на последений ход = Атака-- */
        /*-- Строки --*/
        /*-- Ax --*/
             if (a1_active == false && GameXod_a2 == 77 && GameXod_a3 == 77 && GameXod_a1 == 101) { dilemma_bot_ataka = true; }
        else if (GameXod_a1 == 77 && a2_active == false && GameXod_a3 == 77 && GameXod_a2 == 101) { dilemma_bot_ataka = true; }
        else if (GameXod_a1 == 77 && GameXod_a2 == 77 && a3_active == false && GameXod_a3 == 101) { dilemma_bot_ataka = true; }

        /*-- Bx --*/
        else if (b1_active == false && GameXod_b2 == 77 && GameXod_b3 == 77 && GameXod_b1 == 101) { dilemma_bot_ataka = true; }
        else if (GameXod_b1 == 77 && b2_active == false && GameXod_b3 == 77 && GameXod_b2 == 101) { dilemma_bot_ataka = true; }
        else if (GameXod_b1 == 77 && GameXod_b2 == 77 && b3_active == false && GameXod_b3 == 101) { dilemma_bot_ataka = true; }

        /*-- Cx --*/
        else if (c1_active == false && GameXod_c2 == 77 && GameXod_c3 == 77 && GameXod_c1 == 101) { dilemma_bot_ataka = true; }
        else if (GameXod_c1 == 77 && c2_active == false && GameXod_c3 == 77 && GameXod_c2 == 101) { dilemma_bot_ataka = true; }
        else if (GameXod_c1 == 77 && GameXod_c2 == 77 && c3_active == false && GameXod_c3 == 101) { dilemma_bot_ataka = true; }

        /*-- Столбцы --*/
        /*-- Ay --*/
        else if (a1_active == false && GameXod_b1 == 77 && GameXod_c1 == 77 && GameXod_a1 == 101) { dilemma_bot_ataka = true; }
        else if (GameXod_a1 == 77 && b1_active == false && GameXod_c1 == 77 && GameXod_b1 == 101) { dilemma_bot_ataka = true; }
        else if (GameXod_a1 == 77 && GameXod_b1 == 77 && c1_active == false && GameXod_c1 == 101) { dilemma_bot_ataka = true; }

        /*-- By --*/
        else if (a2_active == false && GameXod_b2 == 77 && GameXod_c2 == 77 && GameXod_a2 == 101) { dilemma_bot_ataka = true; }
        else if (GameXod_a2 == 77 && b2_active == false && GameXod_c2 == 77 && GameXod_b2 == 101) { dilemma_bot_ataka = true; }
        else if (GameXod_a2 == 77 && GameXod_b2 == 77 && c2_active == false && GameXod_c2 == 101) { dilemma_bot_ataka = true; }

        /*-- Cx --*/
        else if (a3_active == false && GameXod_b3 == 77 && GameXod_c3 == 77 && GameXod_a3 == 101) { dilemma_bot_ataka = true; }
        else if (GameXod_a3 == 77 && b3_active == false && GameXod_c3 == 77 && GameXod_b3 == 101) { dilemma_bot_ataka = true; }
        else if (GameXod_a3 == 77 && GameXod_b3 == 77 && c3_active == false && GameXod_c3 == 101) { dilemma_bot_ataka = true; }

        /*-- Диагонали --*/
        /*-- A1+C3 --*/
        else if (a1_active == false && GameXod_b2 == 77 && GameXod_c3 == 77 && GameXod_a1 == 101) { dilemma_bot_ataka = true; }
        else if (GameXod_a1 == 77 && b2_active == false && GameXod_c3 == 77 && GameXod_b2 == 101) { dilemma_bot_ataka = true; }
        else if (GameXod_a1 == 77 && GameXod_b2 == 77 && c3_active == false && GameXod_c3 == 101) { dilemma_bot_ataka = true; }

        /*-- A3+C1 --*/
        else if (a3_active == false && GameXod_b2 == 77 && GameXod_c1 == 77 && GameXod_a3 == 101) { dilemma_bot_ataka = true; }
        else if (GameXod_a3 == 77 && b2_active == false && GameXod_c1 == 77 && GameXod_b2 == 101) { dilemma_bot_ataka = true; }
        else if (GameXod_a3 == 77 && GameXod_b2 == 77 && c1_active == false && GameXod_c1 == 101) { dilemma_bot_ataka = true; }
    }
    NextXodInfo_next();
}

/*----------------------------------------- Инфо о ходе -----------------*/
/*------------------------------- Проверяет чей ход сейчас ---------------*/
function NextXodInfo_next() {
	if (GameXod == 66){
		var infoXod1 = document.getElementById("InfoXod");
		infoXod1.innerHTML = "ИГРОК #1"; 
	}
	else if (GameXod == 77){
		var infoXod2 = document.getElementById("InfoXod");
        infoXod2.innerHTML = "BOT";

        if (dilemma_bot_ataka == true && dilemma_bot_zachita == true) { BotLastXod(); }
        else {
		    if (StartBotActive == false){ LastXod();}
            else if (StartBotActive == true) { BotLastXod();}
            }
	}
 return false;
}

/*-------------------- Активация всех кнопок -------------*/
function AllActive() {
	a1_active = true;
	a2_active = true;
	a3_active = true;
	
	b1_active = true;
	b2_active = true;
	b3_active = true;
	
	c1_active = true;
	c2_active = true;
	c3_active = true;
}

/*--------------------------- Деактивация всех кнопок ---------*/
function AllDeactive() {
	a1_active = false;
	a2_active = false;
	a3_active = false;
	
	b1_active = false;
	b2_active = false;
	b3_active = false;
	
	c1_active = false;
	c2_active = false;
	c3_active = false;
}

/*--------------------------------- BOT ---------------------------*/
function LastXod() {/*-- Проверка на последений ход = Защита --*/
	if (GameXod == 77){
	/*-- Строки --*/
		/*-- Ax --*/
			 if (a1_active == false && GameXod_a2 == 66 && GameXod_a3 == 66 && GameXod_a1 == 101){GameXod_a1 = 77; image_a1.src = icon[2]; GameXod = 66; a1_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a1 == 66 && a2_active == false && GameXod_a3 == 66 && GameXod_a2 == 101){GameXod_a2 = 77; image_a2.src = icon[2]; GameXod = 66; a2_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a1 == 66 && GameXod_a2 == 66 && a3_active == false && GameXod_a3 == 101){GameXod_a3 = 77; image_a3.src = icon[2]; GameXod = 66; a3_active = true; MaxXod++; CheckEnd();}
		
		/*-- Bx --*/
		else if (b1_active == false && GameXod_b2 == 66 && GameXod_b3 == 66 && GameXod_b1 == 101){GameXod_b1 = 77; image_b1.src = icon[2]; GameXod = 66; b1_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_b1 == 66 && b2_active == false && GameXod_b3 == 66 && GameXod_b2 == 101){GameXod_b2 = 77; image_b2.src = icon[2]; GameXod = 66; b2_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_b1 == 66 && GameXod_b2 == 66 && b3_active == false && GameXod_b3 == 101){GameXod_b3 = 77; image_b3.src = icon[2]; GameXod = 66; b3_active = true; MaxXod++; CheckEnd();}
		
		/*-- Cx --*/
		else if (c1_active == false && GameXod_c2 == 66 && GameXod_c3 == 66 && GameXod_c1 == 101){GameXod_c1 = 77; image_c1.src = icon[2]; GameXod = 66; c1_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_c1 == 66 && c2_active == false && GameXod_c3 == 66 && GameXod_c2 == 101){GameXod_c2 = 77; image_c2.src = icon[2]; GameXod = 66; c2_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_c1 == 66 && GameXod_c2 == 66 && c3_active == false && GameXod_c3 == 101){GameXod_c3 = 77; image_c3.src = icon[2]; GameXod = 66; c3_active = true; MaxXod++; CheckEnd();}
	
	/*-- Столбцы --*/
		/*-- Ay --*/
		else if (a1_active == false && GameXod_b1 == 66 && GameXod_c1 == 66 && GameXod_a1 == 101){GameXod_a1 = 77; image_a1.src = icon[2]; GameXod = 66; a1_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a1 == 66 && b1_active == false && GameXod_c1 == 66 && GameXod_b1 == 101){GameXod_b1 = 77; image_b1.src = icon[2]; GameXod = 66; b1_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a1 == 66 && GameXod_b1 == 66 && c1_active == false && GameXod_c1 == 101){GameXod_c1 = 77; image_c1.src = icon[2]; GameXod = 66; c1_active = true; MaxXod++; CheckEnd();}
		
		/*-- By --*/
		else if (a2_active == false && GameXod_b2 == 66 && GameXod_c2 == 66 && GameXod_a2 == 101){GameXod_a2 = 77; image_a2.src = icon[2]; GameXod = 66; a2_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a2 == 66 && b2_active == false && GameXod_c2 == 66 && GameXod_b2 == 101){GameXod_b2 = 77; image_b2.src = icon[2]; GameXod = 66; b2_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a2 == 66 && GameXod_b2 == 66 && c2_active == false && GameXod_c2 == 101){GameXod_c2 = 77; image_c2.src = icon[2]; GameXod = 66; c2_active = true; MaxXod++; CheckEnd();}

		/*-- Cx --*/
		else if (a3_active == false && GameXod_b3 == 66 && GameXod_c3 == 66 && GameXod_a3 == 101){GameXod_a3 = 77; image_a3.src = icon[2]; GameXod = 66; a3_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a3 == 66 && b3_active == false && GameXod_c3 == 66 && GameXod_b3 == 101){GameXod_b3 = 77; image_b3.src = icon[2]; GameXod = 66; b3_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a3 == 66 && GameXod_b3 == 66 && c3_active == false && GameXod_c3 == 101){GameXod_c3 = 77; image_c3.src = icon[2]; GameXod = 66; c3_active = true; MaxXod++; CheckEnd();}
		
	/*-- Диагонали --*/
		/*-- A1+C3 --*/
		else if (a1_active == false && GameXod_b2 == 66 && GameXod_c3 == 66 && GameXod_a1 == 101){GameXod_a1 = 77; image_a1.src = icon[2]; GameXod = 66; a1_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a1 == 66 && b2_active == false && GameXod_c3 == 66 && GameXod_b2 == 101){GameXod_b2 = 77; image_b2.src = icon[2]; GameXod = 66; b2_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a1 == 66 && GameXod_b2 == 66 && c3_active == false && GameXod_c3 == 101){GameXod_c3 = 77; image_c3.src = icon[2]; GameXod = 66; c3_active = true; MaxXod++; CheckEnd();}

		/*-- A3+C1 --*/
		else if (a3_active == false && GameXod_b2 == 66 && GameXod_c1 == 66 && GameXod_a3 == 101){GameXod_a3 = 77; image_a3.src = icon[2]; GameXod = 66; a3_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a3 == 66 && b2_active == false && GameXod_c1 == 66 && GameXod_b2 == 101){GameXod_b2 = 77; image_b2.src = icon[2]; GameXod = 66; b2_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a3 == 66 && GameXod_b2 == 66 && c1_active == false && GameXod_c1 == 101){GameXod_c1 = 77; image_c1.src = icon[2]; GameXod = 66; c1_active = true; MaxXod++; CheckEnd();}
		else {
			if (StartBotActive == false){ LastXod2();}
			else if (StartBotActive == true){ BotXod();}
		}
	}
}

function LastXod2(){
	/*---Защита доп. диагонали ТОЛЬКО ПРИ ЗАЩИТЕ -- */
			 if (GameXod_a2 == 66 && GameXod_b3 == 66 && a3_active == false){ GameXod_a3 = 77; image_a3.src = icon[2]; GameXod = 66; a3_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a2 == 66 && GameXod_b1 == 66 && a1_active == false){ GameXod_a1 = 77; image_a1.src = icon[2]; GameXod = 66; a1_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_b1 == 66 && GameXod_c2 == 66 && c1_active == false){ GameXod_c1 = 77; image_c1.src = icon[2]; GameXod = 66; c1_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_c2 == 66 && GameXod_b3 == 66 && c3_active == false){ GameXod_c3 = 77; image_c3.src = icon[2]; GameXod = 66; c3_active = true; MaxXod++; CheckEnd();}
		
	/*---Защита на коня ТОЛЬКО ПРИ ЗАЩИТЕ -- */
		else if (GameXod_a1 == 66 && GameXod_b3 == 66 && a1_active == false){ GameXod_a1 = 77; image_a1.src = icon[2]; GameXod = 66; a1_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_c1 == 66 && GameXod_b3 == 66 && a1_active == false){ GameXod_a1 = 77; image_a1.src = icon[2]; GameXod = 66; a1_active = true; MaxXod++; CheckEnd();}
		
		else if (GameXod_a1 == 66 && GameXod_c2 == 66 && a2_active == false){ GameXod_a2 = 77; image_a2.src = icon[2]; GameXod = 66; a2_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a3 == 66 && GameXod_c2 == 66 && a2_active == false){ GameXod_a2 = 77; image_a2.src = icon[2]; GameXod = 66; a2_active = true; MaxXod++; CheckEnd();}
		
		else if (GameXod_c1 == 66 && GameXod_a2 == 66 && a2_active == false){ GameXod_c2 = 77; image_c2.src = icon[2]; GameXod = 66; c2_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_c3 == 66 && GameXod_a2 == 66 && a2_active == false){ GameXod_c2 = 77; image_c2.src = icon[2]; GameXod = 66; c2_active = true; MaxXod++; CheckEnd();}

		else if (GameXod_a3 == 66 && GameXod_b1 == 66 && a2_active == false){ GameXod_b3 = 77; image_b3.src = icon[2]; GameXod = 66; b3_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_c3 == 66 && GameXod_b1 == 66 && a2_active == false){ GameXod_b3 = 77; image_b3.src = icon[2]; GameXod = 66; b3_active = true; MaxXod++; CheckEnd();}

		else {
			if (StartBotActive == false){ BotLastXod();}
			else if (StartBotActive == true){ BotXod();}
		}

}

/*-- Проверка на последений ход = Атака --*/
function BotLastXod() {
	if (GameXod == 77){
	/*-- Строки --*/
		/*-- Ax --*/
		if (a1_active == false && GameXod_a2 == 77 && GameXod_a3 == 77 && GameXod_a1 == 101){GameXod_a1 = 77; image_a1.src = icon[2]; GameXod = 66; a1_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a1 == 77 && a2_active == false && GameXod_a3 == 77 && GameXod_a2 == 101){GameXod_a2 = 77; image_a2.src = icon[2]; GameXod = 66; a2_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a1 == 77 && GameXod_a2 == 77 && a3_active == false && GameXod_a3 == 101){GameXod_a3 = 77; image_a3.src = icon[2]; GameXod = 66; a3_active = true; MaxXod++; CheckEnd();}

		/*-- Bx --*/
		else if (b1_active == false && GameXod_b2 == 77 && GameXod_b3 == 77 && GameXod_b1 == 101){GameXod_b1 = 77; image_b1.src = icon[2]; GameXod = 66; b1_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_b1 == 77 && b2_active == false && GameXod_b3 == 77 && GameXod_b2 == 101){GameXod_b2 = 77; image_b2.src = icon[2]; GameXod = 66; b2_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_b1 == 77 && GameXod_b2 == 77 && b3_active == false && GameXod_b3 == 101){GameXod_b3 = 77; image_b3.src = icon[2]; GameXod = 66; b3_active = true; MaxXod++; CheckEnd();}

		/*-- Cx --*/
		else if (c1_active == false && GameXod_c2 == 77 && GameXod_c3 == 77 && GameXod_c1 == 101){GameXod_c1 = 77; image_c1.src = icon[2]; GameXod = 66; c1_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_c1 == 77 && c2_active == false && GameXod_c3 == 77 && GameXod_c2 == 101){GameXod_c2 = 77; image_c2.src = icon[2]; GameXod = 66; c2_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_c1 == 77 && GameXod_c2 == 77 && c3_active == false && GameXod_c3 == 101){GameXod_c3 = 77; image_c3.src = icon[2]; GameXod = 66; c3_active = true; MaxXod++; CheckEnd();}

	/*-- Столбцы --*/
		/*-- Ay --*/
		else if (a1_active == false && GameXod_b1 == 77 && GameXod_c1 == 77 && GameXod_a1 == 101){GameXod_a1 = 77; image_a1.src = icon[2]; GameXod = 66; a1_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a1 == 77 && b1_active == false && GameXod_c1 == 77 && GameXod_b1 == 101){GameXod_b1 = 77; image_b1.src = icon[2]; GameXod = 66; b1_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a1 == 77 && GameXod_b1 == 77 && c1_active == false && GameXod_c1 == 101){GameXod_c1 = 77; image_c1.src = icon[2]; GameXod = 66; c1_active = true; MaxXod++; CheckEnd();}

		/*-- By --*/
		else if (a2_active == false && GameXod_b2 == 77 && GameXod_c2 == 77 && GameXod_a2 == 101){GameXod_a2 = 77; image_a2.src = icon[2]; GameXod = 66; a2_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a2 == 77 && b2_active == false && GameXod_c2 == 77 && GameXod_b2 == 101){GameXod_b2 = 77; image_b2.src = icon[2]; GameXod = 66; b2_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a2 == 77 && GameXod_b2 == 77 && c2_active == false && GameXod_c2 == 101){GameXod_c2 = 77; image_c2.src = icon[2]; GameXod = 66; c2_active = true; MaxXod++; CheckEnd();}

		/*-- Cx --*/
		else if (a3_active == false && GameXod_b3 == 77 && GameXod_c3 == 77 && GameXod_a3 == 101){GameXod_a3 = 77; image_a3.src = icon[2]; GameXod = 66; a3_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a3 == 77 && b3_active == false && GameXod_c3 == 77 && GameXod_b3 == 101){GameXod_b3 = 77; image_b3.src = icon[2]; GameXod = 66; b3_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a3 == 77 && GameXod_b3 == 77 && c3_active == false && GameXod_c3 == 101){GameXod_c3 = 77; image_c3.src = icon[2]; GameXod = 66; c3_active = true; MaxXod++; CheckEnd();}
		
	/*-- Диагонали --*/
		/*-- A1+C3 --*/
		else if (a1_active == false && GameXod_b2 == 77 && GameXod_c3 == 77 && GameXod_a1 == 101){GameXod_a1 = 77; image_a1.src = icon[2]; GameXod = 66; a1_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a1 == 77 && b2_active == false && GameXod_c3 == 77 && GameXod_b2 == 101){GameXod_b2 = 77; image_b2.src = icon[2]; GameXod = 66; b2_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a1 == 77 && GameXod_b2 == 77 && c3_active == false && GameXod_c3 == 101){GameXod_c3 = 77; image_c3.src = icon[2]; GameXod = 66; c3_active = true; MaxXod++; CheckEnd();}

		/*-- A3+C1 --*/
		else if (a3_active == false && GameXod_b2 == 77 && GameXod_c1 == 77 && GameXod_a3 == 101){GameXod_a3 = 77; image_a3.src = icon[2]; GameXod = 66; a3_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a3 == 77 && b2_active == false && GameXod_c1 == 77 && GameXod_b2 == 101){GameXod_b2 = 77; image_b2.src = icon[2]; GameXod = 66; b2_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a3 == 77 && GameXod_b2 == 77 && c1_active == false && GameXod_c1 == 101){GameXod_c1 = 77; image_c1.src = icon[2]; GameXod = 66; c1_active = true; MaxXod++; CheckEnd();}
		else {
		if (StartBotActive == false){ BotXod();}
		else if (StartBotActive == true){ LastXod();}
		}
	}
}



/*--------------------------Ходы  BOTа -----------------------*/
/*Случайное целое число в диапазоне, включая минимальное и максимальное для выбора хода*/
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function BotXod(){
	if(win_bot_attack_code == 101){
		if (a1_active == false && a2_active == false && a3_active == false && b1_active == false && b2_active == false && b3_active == false && c1_active == false && c2_active == false && c3_active == false){
			vybor_atacki_Centr = getRandomInRange(1, 3);
			switch (vybor_atacki_Centr) {
					case 1:
						bot_attack_B2_v1();
						break;
					case 2:
						bot_attack_B2_v2();
						break;
					default:
						BotXod_standart();
				}
		}
		else if (a1_active == false && a2_active == false && a3_active == false && b1_active == false && b2_active == false && b3_active == false && c1_active == false && c2_active == false && c3_active == false){
			//vybor_atacki_Diag = getRandomInRange(0, 1);
			vybor_atacki_Diag = 1;
			switch (vybor_atacki_Diag) {
					case 1:
						bot_attack_B2_v3();
						break;

					default:
						BotXod_standart();
				}
		}
		else{BotXod_standart();}
	}
	else if(win_bot_attack_code == 1){bot_attack_B2_v1();}
	else if(win_bot_attack_code == 2){bot_attack_B2_v2();}
	else if(win_bot_attack_code == 3){bot_attack_B2_v3();}
	else{ BotXod_standart();}
}


function bot_attack_B2_v1(){	
	/*--B2--*/
	/*1?__B2+b1+a1 */
	win_bot_attack_code = 1;
	if (a1_active == false && a2_active == false && a3_active == false && b1_active == false && b2_active == false && b3_active == false && c1_active == false && c2_active == false && c3_active == false){ GameXod_b2 = 77; image_b2.src = icon[2]; GameXod = 66; b2_active = true; MaxXod++; CheckEnd();}
	else if (GameXod_b2 == 77 && b1_active == false && b3_active == false && a3_active == false && c3_active == false && a1_active == false && c1_active == false  && (c2_active == true || a2_active == true)){GameXod_b1 = 77; image_b1.src = icon[2]; GameXod = 66; b1_active = true; MaxXod++; CheckEnd();}
	else if (GameXod_b2 == 77 && GameXod_b1 == 77 && a3_active == false && c3_active == false && a1_active == false && c1_active == false  && (c2_active == true || a2_active == true)){GameXod_a1 = 77; image_a1.src = icon[2]; GameXod = 66; a1_active = true; MaxXod++; CheckEnd();}
	else{ BotXod_standart();}
}
function bot_attack_B2_v2(){
	/*1?__B2+b1+a1 */
	win_bot_attack_code = 2;
		 if (a1_active == false && a2_active == false && a3_active == false && b1_active == false && b2_active == false && b3_active == false && c1_active == false && c2_active == false && c3_active == false){ GameXod_b2 = 77; image_b2.src = icon[2]; GameXod = 66; b2_active = true; MaxXod++; CheckEnd();}
	else if (GameXod_b2 == 77 && a2_active == false && a1_active == false && a3_active == false && c1_active == false && c3_active == false  && (b1_active == true || c2_active == true)){GameXod_a2 = 77; image_a2.src = icon[2]; GameXod = 66; a2_active = true; MaxXod++; CheckEnd();}
	else if (GameXod_b2 == 77 && GameXod_a2 == 77 && a1_active == false && c3_active == false && a1_active == false && c1_active == false  && (c2_active == true || a2_active == true)){GameXod_a3 = 77; image_a3.src = icon[2]; GameXod = 66; a3_active = true; MaxXod++; CheckEnd();}
	else{ BotXod_standart();}
}
function bot_attack_B2_v3(){
	/*C2+a3+c3 */
	win_bot_attack_code = 3;
		 if (a1_active == false && a2_active == false && a3_active == false && b1_active == false && b2_active == false && b3_active == false && c1_active == false && c2_active == false && c3_active == false){ GameXod_c2 = 77; image_c2.src = icon[2]; GameXod = 66; c2_active = true; MaxXod++; CheckEnd();}
	else if (GameXod_c2 == 77 && a3_active == false && b3_active == false && c3_active == false){ GameXod_a3 = 77; image_a3.src = icon[2]; GameXod = 66; a3_active = true; MaxXod++; CheckEnd();}
	else if (GameXod_c2 == 77 && GameXod_a3 == 77 && b3_active == false && c3_active == false){ GameXod_c3 = 77; image_c3.src = icon[2]; GameXod = 66; c3_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_c2 == 77 && (c3_active == true || b3_active == true) && b1_active == false && c1_active == false && a1_active == false){ GameXod_a1 = 77; image_a1.src = icon[2]; GameXod = 66; a1_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_c2 == 77 && GameXod_a1 == 77 && b1_active == false && c1_active == false){ GameXod_c1 = 77; image_c1.src = icon[2]; GameXod = 66; c1_active = true; MaxXod++; CheckEnd();}
	else{ BotXod_standart();}
}
function BotXod_standart(){	
	if (a1_active == false && a2_active == false && a3_active == false && b1_active == false && b2_active == false && b3_active == false && c1_active == false && c2_active == false && c3_active == false){ GameXod_c2 = 77; image_c2.src = icon[2]; GameXod = 66; c2_active = true; MaxXod++; CheckEnd();}
	else if (GameXod_c2 == 77 && (GameXod_a1 == 77 || GameXod_a3 == 77) && b2_active == false){ GameXod_b2 = 77; image_b2.src = icon[2]; GameXod = 66; b2_active = true; MaxXod++; CheckEnd();}

	/*C2+a1+c1 */
	else if (GameXod_c2 == 77 && a1_active == false){ GameXod_a1 = 77; image_a1.src = icon[2]; GameXod = 66; a1_active = true; MaxXod++; CheckEnd();}
	else if (GameXod_c2 == 77 && GameXod_a1 == 77 && c1_active == false){ GameXod_c1 = 77; image_c1.src = icon[2]; GameXod = 66; c1_active = true; MaxXod++; CheckEnd();}
	

	else {
			 if (GameXod_a1 == 101 && a1_active == false){ GameXod_a1 = 77; image_a1.src = icon[2]; GameXod = 66; a1_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a2 == 101 && a2_active == false){ GameXod_a2 = 77; image_a2.src = icon[2]; GameXod = 66; a2_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_a3 == 101 && a3_active == false){ GameXod_a3 = 77; image_a3.src = icon[2]; GameXod = 66; a3_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_b1 == 101 && b1_active == false){ GameXod_b1 = 77; image_b1.src = icon[2]; GameXod = 66; b1_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_b2 == 101 && b2_active == false){ GameXod_b2 = 77; image_b2.src = icon[2]; GameXod = 66; b2_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_b3 == 101 && b3_active == false){ GameXod_b3 = 77; image_b3.src = icon[2]; GameXod = 66; b3_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_c1 == 101 && c1_active == false){ GameXod_c1 = 77; image_c1.src = icon[2]; GameXod = 66; c1_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_c2 == 101 && c2_active == false){ GameXod_c2 = 77; image_c2.src = icon[2]; GameXod = 66; c2_active = true; MaxXod++; CheckEnd();}
		else if (GameXod_c3 == 101 && c3_active == false){ GameXod_c3 = 77; image_c3.src = icon[2]; GameXod = 66; c3_active = true; MaxXod++; CheckEnd();}
	}
}
