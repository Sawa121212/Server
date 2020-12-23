/* м!!!!!!!!!!!!!!!м */
/* */
/* Кодировка:*/
/* 101 - пусто */
/* 44 - есть корабль*/
/* 33 - попал */
/* 0 - мимо */
/* 99 - убил*/
																			/* Для тестового режима*/
																			var TEST = ;
  /*--Для проверки на начала игры --*/
var gameStartUse = false;

/*--Для проверки Чей ход --*/
var gameXod = 0;

  /*--Для проверки на Завершение сборки --*/
var buildEndP1 = false;
var buildEndP2 = false;

  /*--Для проверки макс. кораблей --*/
  /*--**** = 1 --*/
  /*--*** = 2 --*/
  /*--**  = 3 --*/
  /*--* = 4 --*/
 /*-- Игрок 1 --*/  /*-- Игрок 2 --*/
var  SHIP4MAX = 1; var  SHIP4MAXP2 = 1;
var  SHIP3MAX = 2; var  SHIP3MAXP2 = 2;
var  SHIP2MAX = 3; var  SHIP2MAXP2 = 3;
var  SHIP1MAX = 4; var  SHIP1MAXP2 = 4;

var ship4Num = 0; var ship4NumP2 = 0;
var ship3Num = 0; var ship3NumP2 = 0;
var ship2Num = 0; var ship2NumP2 = 0;
var ship1Num = 0; var ship1NumP2 = 0;

/*--Для проверки попаданий (макс 20) --*/
var hitsPlayer1 = 0;
var hitsPlayer2 = 0;

/*--Для блокировки игры во время выигрыша --*/
var winner = false;


 /* ------------------------------------------------------------------- Иконки --------------------------------------------------*/
var icon = [5];
/*--Стандартный блок --*/
icon[0] = 'images/baseimg.jpg';
/*--корабли 1 и 2 игрока--*/
icon[1] = 'images/ship.jpg';
icon[2] = 'images/shipP2.jpg';
/*--мимио и попадание --*/
icon[3] = 'images/miss.jpg';
icon[4] = 'images/hit.jpg';
 /*--убит --*/
icon[5] = 'images/kill.jpg';

/*--------------------------Ходы -----------------------*/
/*Случайное целое число в диапазоне, включая минимальное и максимальное для выбора хода*/
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

 /*-------массивы ---------------*/
var active_block = new Array();
active_block = [
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
];
var active_blockP2 = new Array();
active_blockP2 = [
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
];

 /*-------1 Код блоков ---------------*/
var codeBlock = [];
codeBlock = [
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]
];

var codeBlockP2 = [];
codeBlockP2 = [
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101],
[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]
];

/*--------------------------------------------------------------------------------------------- Начальная функция --------------------*/
function checkMode(x, y){
if(gameStartUse == false && buildEndP1 == false && buildEndP2 == false && winner == false){ return pasteShip(x, y);}
if(gameStartUse == true && buildEndP1 == true && buildEndP2 == true && gameXod == 2){ return Shot(x, y);}
else
	{
		REDERRORPLAYER1();
	}
return false;
}
function checkModeP2(x, y){
if(gameStartUse == false && buildEndP1 == true && buildEndP2 == false && winner == false){return pasteShipP2(x, y);}
if(gameStartUse == true && buildEndP1 == true && buildEndP2 == true && gameXod == 1){return Shot(x, y);}
if(winner == true){/*-- Бездействие --*/}
else
	{
		REDERRORPLAYER2();

	}
return false;
}

/*--------------Выделение цветами таблицы-----------*/
/* Красный*/
function REDERRORPLAYER1()
{
	document.getElementById("table1").className = "early_access_header_redLeft";
	window.errorTable1_timerId = window.setInterval(REDERRORt1, 150);
	window.errorTable11_timerId = window.setInterval(REDERRORt11, 300);
}
function REDERRORt1()
{
	if(gameXod == 2 || buildEndP1 == true){document.getElementById("table1").className = "early_access_header_whiteLeft";}
	if((gameXod == 1 || buildEndP1 == false)){document.getElementById("table1").className = "early_access_header_greenLeft";}
	window.clearInterval(window.errorTable1_timerId);
}
function REDERRORt11()
{
	document.getElementById("table1").className = "early_access_header_redLeft";
	window.clearInterval(window.errorTable11_timerId);
	window.errorTable1_timerId = window.setInterval(REDERRORt1, 300);
}
function REDERRORp1()
{
	document.getElementById("table1").className = "early_access_header_redLeft";
	window.errorTable1_timerId = window.setInterval(REDERRORt1, 150);
	window.errorTable11_timerId = window.setInterval(REDERRORt11, 300);
}
function REDERRORPLAYER2()
{
	document.getElementById("table2").className = "early_access_header_redRight";
	window.errorTable2_timerId = window.setInterval(REDERRORt2, 150);
	window.errorTable22_timerId = window.setInterval(REDERRORt22, 300);
}
function REDERRORt2(){
	if(gameXod == 1 || buildEndP2 == true){document.getElementById("table2").className = "early_access_header_whiteRight";}
	if((gameXod == 2 || buildEndP2 == false)){document.getElementById("table2").className = "early_access_header_greenRight";}
	window.clearInterval(window.errorTable2_timerId);
}
function REDERRORt22(){
	document.getElementById("table2").className = "early_access_header_redRight";
	window.clearInterval(window.errorTable22_timerId);
	window.errorTable2_timerId = window.setInterval(REDERRORt2, 300);
}
/* Зеленый */
function SILVERPLAYER1()
{
	document.getElementById("table1").className = "early_access_header_greenLeft";
}
function SILVERPLAYER2()
{
	document.getElementById("table2").className = "early_access_header_greenRight";
}

 /* ----------------------------------------------------------------------------------------------------------------------------------*/
 /* ----------------------------------------------------------------------------------------  Стройка Эскадры Игрока 1 ---------------*/
 /* ----------------------------------------------------------------------------------------------------------------------------------*/
function pasteShip(x, y){/* Порядок проверки: 1, 4, 3, 2  */
    if (active_block[x][y] == false && codeBlock[x][y] == 101)
	{
		/* ------------------------------------------------------------------------------------ 1-ный корабль-------*/
        if(codeBlock[x-1][y-1]	== 101 &&
			codeBlock[x-1][y]	== 101 &&
			codeBlock[x-1][y+1]	== 101 &&
			codeBlock[x][y+1]	== 101 &&
			codeBlock[x+1][y+1]	== 101 &&
			codeBlock[x+1][y]	== 101 &&
			codeBlock[x+1][y-1]	== 101 &&
			codeBlock[x][y-1]	== 101 )
		{
				ship1Num++;
				active_block[x][y] = true;
				codeBlock[x][y] = 44;
				shipCounter();

				return pasteImage(x,y);
		}
		if(pasteShipBlocker(x,y) == true){
			/* ------------------------------------------------------------------------------------ 4-ной корабль---------*/
			if(codeBlock[x-3][y] == 44  || codeBlock[x+3][y] == 44 || codeBlock[x][y-3] == 44  || codeBlock[x][y+3] == 44){
				/*------------- 4-ной корабль налево или направо -------------------*/
				if(codeBlock[x][y-3] == 44  || codeBlock[x][y+3] == 44)
				{
					if((codeBlock[x][y+1] == 44 &&	codeBlock[x][y+2] == 44 &&	codeBlock[x][y+3] == 44 &&	codeBlock[x][y+4] == 101) || /*--4-ной корабль направо --*/
					(codeBlock[x][y-4] == 101 && codeBlock[x][y-3] == 44 && codeBlock[x][y-2] == 44 && codeBlock[x][y-1] == 44))		/*--4-ной корабль налево --*/
					{
						if(ship4Num < SHIP4MAX)
						{
							ship4Num++;	ship3Num--;
							active_block[x][y] = true;
							codeBlock[x][y] = 44;
							shipCounter();
						return pasteImage(x, y);
						}
					}
				}
				/*------------------- 4-ной корабль вверх или вниз -----------------------*/
				if(codeBlock[x-3][y] == 44  || codeBlock[x+3][y] == 44)
				{
					if((codeBlock[x-4][y]== 101 && codeBlock[x-3][y]== 44 && codeBlock[x-2][y]== 44 && codeBlock[x-1][y]== 44) ||	/*--4-ной корабль вверх --*/
					(codeBlock[x+1][y]== 44 && codeBlock[x+2][y]== 44 && codeBlock[x+3][y]== 44 && codeBlock[x+4][y]== 101))		/*-- 4-ной корабль вниз --*/
					{
						if(ship4Num < SHIP4MAX)
						{
							ship4Num++;	ship3Num--;
							active_block[x][y] = true;
							codeBlock[x][y] = 44;
							shipCounter();
							return pasteImage(x, y);
						}
					}
				}
			}

			/* ------------------------------------------------------------------------------------ 3-ной корабль---------*/
			if(codeBlock[x][y+2]== 44 || codeBlock[x][y-2] == 44 || codeBlock[x-2][y]== 44 || codeBlock[x+2][y]== 44){
				/*------------- 3-ной корабль направо или налево -------------------*/
				if(codeBlock[x][y+2]== 44 || codeBlock[x][y-2] == 44)
				{
					if((codeBlock[x][y+1]== 44 && codeBlock[x][y+2]== 44 && codeBlock[x][y+3]== 101) ||	/*--3-ной корабль направо --*/
					(codeBlock[x][y-3]== 101 && codeBlock[x][y-2]== 44 && codeBlock[x][y-1] == 44))		/*--3-ной корабль налево --*/
					{
							ship3Num++;	ship2Num--;
							active_block[x][y] = true;
							codeBlock[x][y] = 44;
							shipCounter();
						return pasteImage(x, y);
					}
				}
				/*------------------- 3-ной корабль вверх или вниз -----------------------*/
				if(codeBlock[x-2][y]== 44 || codeBlock[x+2][y]== 44)
				{
					if((codeBlock[x-3][y]== 101 && codeBlock[x-2][y]== 44 && codeBlock[x-1][y]== 44) ||	/*--3-ной корабль наверх --*/
					(codeBlock[x+1][y]== 44 && codeBlock[x+2][y]== 44 && codeBlock[x+3][y]== 101))			/*-- 3-ной корабль вниз --*/
					{

							ship3Num++;	ship2Num--;
							active_block[x][y] = true;
							codeBlock[x][y] = 44;
							shipCounter();
							return pasteImage(x, y);

					}
				}
			}

		   /* ----------------------------------------------------------------------------- 2-ной корабль -------------*/
		   if(codeBlock[x][y+1] == 44  || codeBlock[x][y-1] == 44 || codeBlock[x-1][y] == 44  || codeBlock[x+1][y] == 44){
			   /*------------------ 2-ной корабль направо или налево ----------------*/
			   if((codeBlock[x][y+1] == 44 && codeBlock[x][y+2] == 101 ) ||
			   (codeBlock[x][y-1] == 44 && codeBlock[x][y-2] == 101))
			   {
						ship2Num++;	ship1Num--;
						active_block[x][y] = true;
						codeBlock[x][y] = 44;
						shipCounter();
						return pasteImage(x, y);
				}
				/*------------------ 2-ной корабль наверх или вниз ----------------*/
				if((codeBlock[x-2][y] == 101 && codeBlock[x-1][y] == 44) ||
				(codeBlock[x+1][y] == 44 && codeBlock[x+2][y] == 101))
				{

						ship2Num++;	ship1Num--;
						active_block[x][y] = true;
						codeBlock[x][y] = 44;
						shipCounter();
						return pasteImage(x, y);

				}
			}
		}
    }

    else if (active_block[x][y] == true && codeBlock[x][y] == 44){
        deleteShip(x, y);
    }
	if (active_block[x][y] == true  && codeBlock[x][y] == 101){
		REDERRORPLAYER1();
	}
}


/*-------------------------------------------------------------------- Функция блокировки вставки корабля(зависит от счетчика) --------------*/
function pasteShipBlocker(x,y){
	/*сначала "Блокировка ставки блока в центр между короблей"  */
	if((codeBlock[x][y+1] == 44  && codeBlock[x][y-1] == 44) || (codeBlock[x-1][y] == 44  && codeBlock[x+1][y] == 44))
	{
		REDERRORPLAYER1();
		return false;
	}
	//сначала определим, какой это корабль
	if((codeBlock[x-5][y] == 101  || codeBlock[x+5][y] == 101 || codeBlock[x][y-5] == 101  || codeBlock[x][y+5] == 101) &&
	    (codeBlock[x-4][y] == 44  || codeBlock[x+4][y] == 44 || codeBlock[x][y-4] == 44  || codeBlock[x][y+4] == 44))
	{
		if(((codeBlock[x][y+1]== 44 && codeBlock[x][y+2]== 44 && codeBlock[x][y+3]== 44 && codeBlock[x][y+4]== 44 && codeBlock[x][y+5]== 101) ||	/*--4-ной корабль направо --*/
			(codeBlock[x][y-5]== 101 && codeBlock[x][y-4]== 44 && codeBlock[x][y-3]== 44 && codeBlock[x][y-2]== 44 && codeBlock[x][y-1]== 44) ||	/*--4-ной корабль налево --*/
			(codeBlock[x-5][y]== 101 && codeBlock[x-4][y]== 44 && codeBlock[x-3][y]== 44 && codeBlock[x-2][y]== 44 && codeBlock[x-1][y]== 44) ||	/*--4-ной корабль вверх --*/
			(codeBlock[x+1][y]== 44 && codeBlock[x+2][y]== 44 && codeBlock[x+3][y]== 44 && codeBlock[x+4][y]== 44 && codeBlock[x+5][y]== 101)) &&	/*-- 4-ной корабль вниз --*/
			(ship4Num == SHIP4MAX))
			{
				REDERRORPLAYER1();
				return false;
			}
	}

	if((codeBlock[x-4][y] == 101 || codeBlock[x+4][y] == 101 || codeBlock[x][y-4] == 101  || codeBlock[x][y+4] == 101) &&
	   (codeBlock[x][y+3]== 44 || codeBlock[x][y-3] == 44 || codeBlock[x-3][y]== 44 || codeBlock[x+3][y]== 44))
	{
		if(((codeBlock[x][y+1]== 44 && codeBlock[x][y+2]== 44 && codeBlock[x][y+3]== 44 && codeBlock[x][y+4]== 101) ||	/*--3-ной корабль направо --*/
			(codeBlock[x][y-4]== 101 && codeBlock[x][y-3]== 44 && codeBlock[x][y-2]== 44 && codeBlock[x][y-1]== 44) ||	/*--3-ной корабль налево --*/
			(codeBlock[x-4][y]== 101 && codeBlock[x-3][y]== 44 && codeBlock[x-2][y]== 44 && codeBlock[x-1][y]== 44) ||	/*--3-ной корабль вверх --*/
			(codeBlock[x+1][y]== 44 && codeBlock[x+2][y]== 44 && codeBlock[x+3][y]== 44 && codeBlock[x+4][y]== 101)) && /*-- 3-ной корабль вниз --*/
			(ship4Num == SHIP4MAX && ship3Num == SHIP3MAX))
			{
				REDERRORPLAYER1();
				return false;
			}
	}

	if((codeBlock[x][y+3]== 101 || codeBlock[x][y-3] == 101 || codeBlock[x-3][y]== 101 || codeBlock[x+3][y]== 101) &&
		(codeBlock[x][y+2]== 44 || codeBlock[x][y-2] == 44 || codeBlock[x-2][y]== 44 || codeBlock[x+2][y]== 44))
	{
		if(((codeBlock[x][y+1]== 44 && codeBlock[x][y+2]== 44 && codeBlock[x][y+3]== 101) ||	/*--2-ной корабль направо --*/
			(codeBlock[x][y-3]== 101 && codeBlock[x][y-2]== 44 && codeBlock[x][y-1]== 44) ||	/*--2-ной корабль налево --*/
			(codeBlock[x-3][y]== 101 && codeBlock[x-2][y]== 44 && codeBlock[x-1][y]== 44) ||	/*--2-ной корабль наверх --*/
			(codeBlock[x+1][y]== 44 && codeBlock[x+2][y]== 44 && codeBlock[x+3][y]== 101)) && 	/*-- 2-ной корабль вниз --*/
			(ship3Num == SHIP3MAX && ship4Num == SHIP4MAX))
			{
				REDERRORPLAYER1();
				return false;
			}
	}
	return true;
}

/*------------------------------------------------------------------------------------ Функция счета корабля(информация) --------------*/
// счетчик кораблей
function shipCounter(){
	var shipnum1G = document.getElementById("shipnum1G");
	var shipnum1R = document.getElementById("shipnum1R");
	var shipnum2G = document.getElementById("shipnum2G");
	var shipnum2R = document.getElementById("shipnum2R");
	var shipnum3G = document.getElementById("shipnum3G");
	var shipnum3R = document.getElementById("shipnum3R");
	var shipnum4G = document.getElementById("shipnum4G");
	var shipnum4R = document.getElementById("shipnum4R");
	////1
	if(ship1Num == SHIP1MAX){
		shipnum1G.innerHTML = ship1Num;
		shipnum1R.innerHTML = "";
	}
	else{
		shipnum1G.innerHTML = "";
		shipnum1R.innerHTML = ship1Num;
	}
	////2
	if(ship2Num == SHIP2MAX){
		shipnum2G.innerHTML = ship2Num;
		shipnum2R.innerHTML = "";
	}
	else{
		shipnum2G.innerHTML = "";
		shipnum2R.innerHTML = ship2Num;
	}
	////3
	if(ship3Num == SHIP3MAX){
		shipnum3G.innerHTML = ship3Num;
		shipnum3R.innerHTML = "";
	}
	else{
		shipnum3G.innerHTML = "";
		shipnum3R.innerHTML = ship3Num;
	}
	////4
	if(ship4Num == SHIP4MAX){
		shipnum4G.innerHTML = ship4Num;
		shipnum4R.innerHTML = "";
	}
	else{
		shipnum4G.innerHTML = "";
		shipnum4R.innerHTML = ship4Num;
	}
}
/*------------------------------------------------------------------------------------ Функции смен кртинок --------------*/
/*--------- Функция смены картинок 1 игрока на корабли --------------*/
function pasteImage(x, y){
if (x==5&&y==5){image_a55.src = icon[1];}
	else if (x==5&&y==6){image_a56.src = icon[1];}
	else if (x==5&&y==7){image_a57.src = icon[1];}
	else if (x==5&&y==8){image_a58.src = icon[1];}
	else if (x==5&&y==9){image_a59.src = icon[1];}
	else if (x==5&&y==10){image_a510.src = icon[1];}
	else if (x==5&&y==11){image_a511.src = icon[1];}
	else if (x==5&&y==12){image_a512.src = icon[1];}
	else if (x==5&&y==13){image_a513.src = icon[1];}
	else if (x==5&&y==14){image_a514.src = icon[1];}


	else if (x==6&&y==5){image_a65.src = icon[1];}
	else if (x==6&&y==6){image_a66.src = icon[1];}
	else if (x==6&&y==7){image_a67.src = icon[1];}
	else if (x==6&&y==8){image_a68.src = icon[1];}
	else if (x==6&&y==9){image_a69.src = icon[1];}
	else if (x==6&&y==10){image_a610.src = icon[1];}
	else if (x==6&&y==11){image_a611.src = icon[1];}
	else if (x==6&&y==12){image_a612.src = icon[1];}
	else if (x==6&&y==13){image_a613.src = icon[1];}
	else if (x==6&&y==14){image_a614.src = icon[1];}


	else if (x==7&&y==5){image_a75.src = icon[1];}
	else if (x==7&&y==6){image_a76.src = icon[1];}
	else if (x==7&&y==7){image_a77.src = icon[1];}
	else if (x==7&&y==8){image_a78.src = icon[1];}
	else if (x==7&&y==9){image_a79.src = icon[1];}
	else if (x==7&&y==10){image_a710.src = icon[1];}
	else if (x==7&&y==11){image_a711.src = icon[1];}
	else if (x==7&&y==12){image_a712.src = icon[1];}
	else if (x==7&&y==13){image_a713.src = icon[1];}
	else if (x==7&&y==14){image_a714.src = icon[1];}


	else if (x==8&&y==5){image_a85.src = icon[1];}
	else if (x==8&&y==6){image_a86.src = icon[1];}
	else if (x==8&&y==7){image_a87.src = icon[1];}
	else if (x==8&&y==8){image_a88.src = icon[1];}
	else if (x==8&&y==9){image_a89.src = icon[1];}
	else if (x==8&&y==10){image_a810.src = icon[1];}
	else if (x==8&&y==11){image_a811.src = icon[1];}
	else if (x==8&&y==12){image_a812.src = icon[1];}
	else if (x==8&&y==13){image_a813.src = icon[1];}
	else if (x==8&&y==14){image_a814.src = icon[1];}


	else if (x==9&&y==5){image_a95.src = icon[1];}
	else if (x==9&&y==6){image_a96.src = icon[1];}
	else if (x==9&&y==7){image_a97.src = icon[1];}
	else if (x==9&&y==8){image_a98.src = icon[1];}
	else if (x==9&&y==9){image_a99.src = icon[1];}
	else if (x==9&&y==10){image_a910.src = icon[1];}
	else if (x==9&&y==11){image_a911.src = icon[1];}
	else if (x==9&&y==12){image_a912.src = icon[1];}
	else if (x==9&&y==13){image_a913.src = icon[1];}
	else if (x==9&&y==14){image_a914.src = icon[1];}


	else if (x==10&&y==5){image_a105.src = icon[1];}
	else if (x==10&&y==6){image_a106.src = icon[1];}
	else if (x==10&&y==7){image_a107.src = icon[1];}
	else if (x==10&&y==8){image_a108.src = icon[1];}
	else if (x==10&&y==9){image_a109.src = icon[1];}
	else if (x==10&&y==10){image_a1010.src = icon[1];}
	else if (x==10&&y==11){image_a1011.src = icon[1];}
	else if (x==10&&y==12){image_a1012.src = icon[1];}
	else if (x==10&&y==13){image_a1013.src = icon[1];}
	else if (x==10&&y==14){image_a1014.src = icon[1];}


	else if (x==11&&y==5){image_a115.src = icon[1];}
	else if (x==11&&y==6){image_a116.src = icon[1];}
	else if (x==11&&y==7){image_a117.src = icon[1];}
	else if (x==11&&y==8){image_a118.src = icon[1];}
	else if (x==11&&y==9){image_a119.src = icon[1];}
	else if (x==11&&y==10){image_a1110.src = icon[1];}
	else if (x==11&&y==11){image_a1111.src = icon[1];}
	else if (x==11&&y==12){image_a1112.src = icon[1];}
	else if (x==11&&y==13){image_a1113.src = icon[1];}
	else if (x==11&&y==14){image_a1114.src = icon[1];}


	else if (x==12&&y==5){image_a125.src = icon[1];}
	else if (x==12&&y==6){image_a126.src = icon[1];}
	else if (x==12&&y==7){image_a127.src = icon[1];}
	else if (x==12&&y==8){image_a128.src = icon[1];}
	else if (x==12&&y==9){image_a129.src = icon[1];}
	else if (x==12&&y==10){image_a1210.src = icon[1];}
	else if (x==12&&y==11){image_a1211.src = icon[1];}
	else if (x==12&&y==12){image_a1212.src = icon[1];}
	else if (x==12&&y==13){image_a1213.src = icon[1];}
	else if (x==12&&y==14){image_a1214.src = icon[1];}


	else if (x==13&&y==5){image_a135.src = icon[1];}
	else if (x==13&&y==6){image_a136.src = icon[1];}
	else if (x==13&&y==7){image_a137.src = icon[1];}
	else if (x==13&&y==8){image_a138.src = icon[1];}
	else if (x==13&&y==9){image_a139.src = icon[1];}
	else if (x==13&&y==10){image_a1310.src = icon[1];}
	else if (x==13&&y==11){image_a1311.src = icon[1];}
	else if (x==13&&y==12){image_a1312.src = icon[1];}
	else if (x==13&&y==13){image_a1313.src = icon[1];}
	else if (x==13&&y==14){image_a1314.src = icon[1];}


	else if (x==14&&y==5){image_a145.src = icon[1];}
	else if (x==14&&y==6){image_a146.src = icon[1];}
	else if (x==14&&y==7){image_a147.src = icon[1];}
	else if (x==14&&y==8){image_a148.src = icon[1];}
	else if (x==14&&y==9){image_a149.src = icon[1];}
	else if (x==14&&y==10){image_a1410.src = icon[1];}
	else if (x==14&&y==11){image_a1411.src = icon[1];}
	else if (x==14&&y==12){image_a1412.src = icon[1];}
	else if (x==14&&y==13){image_a1413.src = icon[1];}
	else if (x==14&&y==14){image_a1414.src = icon[1];}

	cornerBlocked(x,y);
}

/*---------1 Функция удаления палубы 1 игрока --------------*/
function deleteShip(x, y){
	/*сначала "Блокировка удаления блока с центра коробля"  */
	if(!((codeBlock[x][y+1] == 44  && codeBlock[x][y-1] == 44) || (codeBlock[x-1][y] == 44  && codeBlock[x+1][y] == 44)))
	{
		//теперь определим, какой это корабль
		if(codeBlock[x-3][y] == 44  || codeBlock[x+3][y] == 44 || codeBlock[x][y-3] == 44  || codeBlock[x][y+3] == 44)
		{
			if((codeBlock[x][y+1] == 44 &&	codeBlock[x][y+2] == 44 &&	codeBlock[x][y+3] == 44) || /*--4-ной корабль направо --*/
				(codeBlock[x][y-3] == 44 && codeBlock[x][y-2] == 44 && codeBlock[x][y-1] == 44) ||	/*--4-ной корабль налево --*/
				(codeBlock[x-3][y]== 44 && codeBlock[x-2][y]== 44 && codeBlock[x-1][y]== 44) ||		/*--4-ной корабль вверх --*/
				(codeBlock[x+1][y]== 44 && codeBlock[x+2][y]== 44 && codeBlock[x+3][y]== 44))		/*-- 4-ной корабль вниз --*/
				{
					ship4Num--;	ship3Num++;
					shipCounter();
					return deleteImage(x, y);
				}
		}

		if(codeBlock[x][y+2]== 44 || codeBlock[x][y-2] == 44 || codeBlock[x-2][y]== 44 || codeBlock[x+2][y]== 44)
		{
			if((codeBlock[x][y+1]== 44 && codeBlock[x][y+2]== 44) ||	/*--3-ной корабль направо --*/
				(codeBlock[x][y-2]== 44 && codeBlock[x][y-1] == 44)||	/*--3-ной корабль налево --*/
				(codeBlock[x-2][y]== 44 && codeBlock[x-1][y]== 44) ||	/*--3-ной корабль наверх --*/
				(codeBlock[x+1][y]== 44 && codeBlock[x+2][y]== 44))		/*-- 3-ной корабль вниз --*/
				{
					ship3Num--;	ship2Num++;
					shipCounter();
					return deleteImage(x, y);
				}
		}

		if(codeBlock[x][y+1] == 44  || codeBlock[x][y-1] == 44 || codeBlock[x-1][y] == 44  || codeBlock[x+1][y] == 44)
		{
			if((codeBlock[x][y+1] == 44  || codeBlock[x][y-1] == 44) ||	/*--2-ной корабль направо или налево--*/
				(codeBlock[x-1][y] == 44 || codeBlock[x+1][y] == 44))/*--2-ной корабль наверх или вниз--*/
				{
					ship2Num--;	ship1Num++;
					shipCounter();
					return deleteImage(x, y);
				}
		}

		if(codeBlock[x-1][y-1]	== 101 && codeBlock[x-1][y]	== 101 && codeBlock[x-1][y+1] == 101 && /*--1-ной корабль --*/
		codeBlock[x][y+1] == 101 && codeBlock[x+1][y+1] == 101 &&
		codeBlock[x+1][y] == 101 && codeBlock[x+1][y-1]	== 101 && codeBlock[x][y-1]	== 101)
		{
			ship1Num--;
			shipCounter();
			return deleteImage(x, y);
		}
	}
	else{	REDERRORPLAYER1();return false;}
}
 /*-----------------------------------------------------------------1 Функция смены картинок 1 игрока на стандартные--------------*/
function deleteImage(x, y){
if (x==5&&y==5){image_a55.src = icon[0];}
else if (x==5&&y==6){image_a56.src = icon[0];}
else if (x==5&&y==7){image_a57.src = icon[0];}
else if (x==5&&y==8){image_a58.src = icon[0];}
else if (x==5&&y==9){image_a59.src = icon[0];}
else if (x==5&&y==10){image_a510.src = icon[0];}
else if (x==5&&y==11){image_a511.src = icon[0];}
else if (x==5&&y==12){image_a512.src = icon[0];}
else if (x==5&&y==13){image_a513.src = icon[0];}
else if (x==5&&y==14){image_a514.src = icon[0];}


else if (x==6&&y==5){image_a65.src = icon[0];}
else if (x==6&&y==6){image_a66.src = icon[0];}
else if (x==6&&y==7){image_a67.src = icon[0];}
else if (x==6&&y==8){image_a68.src = icon[0];}
else if (x==6&&y==9){image_a69.src = icon[0];}
else if (x==6&&y==10){image_a610.src = icon[0];}
else if (x==6&&y==11){image_a611.src = icon[0];}
else if (x==6&&y==12){image_a612.src = icon[0];}
else if (x==6&&y==13){image_a613.src = icon[0];}
else if (x==6&&y==14){image_a614.src = icon[0];}


else if (x==7&&y==5){image_a75.src = icon[0];}
else if (x==7&&y==6){image_a76.src = icon[0];}
else if (x==7&&y==7){image_a77.src = icon[0];}
else if (x==7&&y==8){image_a78.src = icon[0];}
else if (x==7&&y==9){image_a79.src = icon[0];}
else if (x==7&&y==10){image_a710.src = icon[0];}
else if (x==7&&y==11){image_a711.src = icon[0];}
else if (x==7&&y==12){image_a712.src = icon[0];}
else if (x==7&&y==13){image_a713.src = icon[0];}
else if (x==7&&y==14){image_a714.src = icon[0];}


else if (x==8&&y==5){image_a85.src = icon[0];}
else if (x==8&&y==6){image_a86.src = icon[0];}
else if (x==8&&y==7){image_a87.src = icon[0];}
else if (x==8&&y==8){image_a88.src = icon[0];}
else if (x==8&&y==9){image_a89.src = icon[0];}
else if (x==8&&y==10){image_a810.src = icon[0];}
else if (x==8&&y==11){image_a811.src = icon[0];}
else if (x==8&&y==12){image_a812.src = icon[0];}
else if (x==8&&y==13){image_a813.src = icon[0];}
else if (x==8&&y==14){image_a814.src = icon[0];}


else if (x==9&&y==5){image_a95.src = icon[0];}
else if (x==9&&y==6){image_a96.src = icon[0];}
else if (x==9&&y==7){image_a97.src = icon[0];}
else if (x==9&&y==8){image_a98.src = icon[0];}
else if (x==9&&y==9){image_a99.src = icon[0];}
else if (x==9&&y==10){image_a910.src = icon[0];}
else if (x==9&&y==11){image_a911.src = icon[0];}
else if (x==9&&y==12){image_a912.src = icon[0];}
else if (x==9&&y==13){image_a913.src = icon[0];}
else if (x==9&&y==14){image_a914.src = icon[0];}


else if (x==10&&y==5){image_a105.src = icon[0];}
else if (x==10&&y==6){image_a106.src = icon[0];}
else if (x==10&&y==7){image_a107.src = icon[0];}
else if (x==10&&y==8){image_a108.src = icon[0];}
else if (x==10&&y==9){image_a109.src = icon[0];}
else if (x==10&&y==10){image_a1010.src = icon[0];}
else if (x==10&&y==11){image_a1011.src = icon[0];}
else if (x==10&&y==12){image_a1012.src = icon[0];}
else if (x==10&&y==13){image_a1013.src = icon[0];}
else if (x==10&&y==14){image_a1014.src = icon[0];}


else if (x==11&&y==5){image_a115.src = icon[0];}
else if (x==11&&y==6){image_a116.src = icon[0];}
else if (x==11&&y==7){image_a117.src = icon[0];}
else if (x==11&&y==8){image_a118.src = icon[0];}
else if (x==11&&y==9){image_a119.src = icon[0];}
else if (x==11&&y==10){image_a1110.src = icon[0];}
else if (x==11&&y==11){image_a1111.src = icon[0];}
else if (x==11&&y==12){image_a1112.src = icon[0];}
else if (x==11&&y==13){image_a1113.src = icon[0];}
else if (x==11&&y==14){image_a1114.src = icon[0];}


else if (x==12&&y==5){image_a125.src = icon[0];}
else if (x==12&&y==6){image_a126.src = icon[0];}
else if (x==12&&y==7){image_a127.src = icon[0];}
else if (x==12&&y==8){image_a128.src = icon[0];}
else if (x==12&&y==9){image_a129.src = icon[0];}
else if (x==12&&y==10){image_a1210.src = icon[0];}
else if (x==12&&y==11){image_a1211.src = icon[0];}
else if (x==12&&y==12){image_a1212.src = icon[0];}
else if (x==12&&y==13){image_a1213.src = icon[0];}
else if (x==12&&y==14){image_a1214.src = icon[0];}


else if (x==13&&y==5){image_a135.src = icon[0];}
else if (x==13&&y==6){image_a136.src = icon[0];}
else if (x==13&&y==7){image_a137.src = icon[0];}
else if (x==13&&y==8){image_a138.src = icon[0];}
else if (x==13&&y==9){image_a139.src = icon[0];}
else if (x==13&&y==10){image_a1310.src = icon[0];}
else if (x==13&&y==11){image_a1311.src = icon[0];}
else if (x==13&&y==12){image_a1312.src = icon[0];}
else if (x==13&&y==13){image_a1313.src = icon[0];}
else if (x==13&&y==14){image_a1314.src = icon[0];}


else if (x==14&&y==5){image_a145.src = icon[0];}
else if (x==14&&y==6){image_a146.src = icon[0];}
else if (x==14&&y==7){image_a147.src = icon[0];}
else if (x==14&&y==8){image_a148.src = icon[0];}
else if (x==14&&y==9){image_a149.src = icon[0];}
else if (x==14&&y==10){image_a1410.src = icon[0];}
else if (x==14&&y==11){image_a1411.src = icon[0];}
else if (x==14&&y==12){image_a1412.src = icon[0];}
else if (x==14&&y==13){image_a1413.src = icon[0];}
else if (x==14&&y==14){image_a1414.src = icon[0];}

if(buildEndP1 == false){cornerUnblocked(x,y);}

if(buildEndP1 == true)
	{
		image_a55.src = icon[0];
		image_a56.src = icon[0];
		image_a57.src = icon[0];
		image_a58.src = icon[0];
		image_a59.src = icon[0];
		image_a510.src = icon[0];
		image_a511.src = icon[0];
		image_a512.src = icon[0];
		image_a513.src = icon[0];
		image_a514.src = icon[0];
		image_a65.src = icon[0];
		image_a66.src = icon[0];
		image_a67.src = icon[0];
		image_a68.src = icon[0];
		image_a69.src = icon[0];
		image_a610.src = icon[0];
		image_a611.src = icon[0];
		image_a612.src = icon[0];
		image_a613.src = icon[0];
		image_a614.src = icon[0];
		image_a75.src = icon[0];
		image_a76.src = icon[0];
		image_a77.src = icon[0];
		image_a78.src = icon[0];
		image_a79.src = icon[0];
		image_a710.src = icon[0];
		image_a711.src = icon[0];
		image_a712.src = icon[0];
		image_a713.src = icon[0];
		image_a714.src = icon[0];
		image_a85.src = icon[0];
		image_a86.src = icon[0];
		image_a87.src = icon[0];
		image_a88.src = icon[0];
		image_a89.src = icon[0];
		image_a810.src = icon[0];
		image_a811.src = icon[0];
		image_a812.src = icon[0];
		image_a813.src = icon[0];
		image_a814.src = icon[0];
		image_a95.src = icon[0];
		image_a96.src = icon[0];
		image_a97.src = icon[0];
		image_a98.src = icon[0];
		image_a99.src = icon[0];
		image_a910.src = icon[0];
		image_a911.src = icon[0];
		image_a912.src = icon[0];
		image_a913.src = icon[0];
		image_a914.src = icon[0];
		image_a105.src = icon[0];
		image_a106.src = icon[0];
		image_a107.src = icon[0];
		image_a108.src = icon[0];
		image_a109.src = icon[0];
		image_a1010.src = icon[0];
		image_a1011.src = icon[0];
		image_a1012.src = icon[0];
		image_a1013.src = icon[0];
		image_a1014.src = icon[0];
		image_a115.src = icon[0];
		image_a116.src = icon[0];
		image_a117.src = icon[0];
		image_a118.src = icon[0];
		image_a119.src = icon[0];
		image_a1110.src = icon[0];
		image_a1111.src = icon[0];
		image_a1112.src = icon[0];
		image_a1113.src = icon[0];
		image_a1114.src = icon[0];
		image_a125.src = icon[0];
		image_a126.src = icon[0];
		image_a127.src = icon[0];
		image_a128.src = icon[0];
		image_a129.src = icon[0];
		image_a1210.src = icon[0];
		image_a1211.src = icon[0];
		image_a1212.src = icon[0];
		image_a1213.src = icon[0];
		image_a1214.src = icon[0];
		image_a135.src = icon[0];
		image_a136.src = icon[0];
		image_a137.src = icon[0];
		image_a138.src = icon[0];
		image_a139.src = icon[0];
		image_a1310.src = icon[0];
		image_a1311.src = icon[0];
		image_a1312.src = icon[0];
		image_a1313.src = icon[0];
		image_a1314.src = icon[0];
		image_a145.src = icon[0];
		image_a146.src = icon[0];
		image_a147.src = icon[0];
		image_a148.src = icon[0];
		image_a149.src = icon[0];
		image_a1410.src = icon[0];
		image_a1411.src = icon[0];
		image_a1412.src = icon[0];
		image_a1413.src = icon[0];
		image_a1414.src = icon[0];
	}
}

/*------------------------------------------------------------------------------------ Блокировка и Разблокировка --------------*/
/*---------------- Блокировка углов --------------*/
function cornerBlocked(x,y){
    if (active_block[x-1][y+1] == false){active_block[x-1][y+1]= true;}/* верхний правый (1)*/
    if (active_block[x+1][y+1] == false){active_block[x+1][y+1]= true;}/* нижний правый (2)*/
    if (active_block[x+1][y-1] == false){active_block[x+1][y-1]= true;}/* нижний левый (3)*/
	if (active_block[x-1][y-1] == false){active_block[x-1][y-1]= true;}/* верхний левый (4)*/

	func_endBuildP1();
}

 /*---------------- Разблокировка --------------*/
 function cornerUnblocked(x,y){
	if (active_block[x+1][y+1] == true) { /* верхний правый (1)*/
        if (codeBlock[x-2][y]== 101 && codeBlock[x-2][y+1]== 101 && codeBlock[x-2][y+2]== 101 &&
            codeBlock[x-1][y+2]== 101 && codeBlock[x][y+2]== 101) {
            active_block[x-1][y+1] = false;
        }
    }
    if (active_block[x+1][y-1] == true) { /* нижний правый (2)*/
        if (codeBlock[x][y+2]== 101 && codeBlock[x+1][y+2]== 101 && codeBlock[x+2][y+2]== 101 &&
			codeBlock[x+2][y]== 101 && codeBlock[x+2][y+1]== 101) {
            active_block[x+1][y+1] = false;
        }
    }
	if (active_block[x-1][y-1] == true){ /* нижний левый (3)*/
        if (codeBlock[x+2][y-2]== 101 && codeBlock[x+2][y-1]== 101 && codeBlock[x+2][y]== 101 &&
            codeBlock[x][y-2]== 101 && codeBlock[x+1][y-2]== 101) {
            active_block[x+1][y-1] = false;
        }
    }
    if (active_block[x-1][y+1] == true){ /* верхний левый (4)*/
		if (codeBlock[x-2][y-2]== 101 && codeBlock[x-1][y-2]== 101 && codeBlock[x][y-2]== 101 &&
			codeBlock[x-2][y-1]== 101 && codeBlock[x-2][y]== 101) {
			active_block[x-1][y-1] = false;
		}
    }

	codeBlock[x][y]	= 101;
	active_block[x][y] = false;

	func_endBuildP1();
}
 /*----------------------------------------------------------------- Функция завершения сборки эскадры Игрока1--------------*/
function func_endBuildP1(){
	if(ship1Num == SHIP1MAX && ship2Num == SHIP2MAX && ship3Num == SHIP3MAX && ship4Num == SHIP4MAX)
	{		
		document.getElementById("sidebar").className = "btn-endBuild";
		SILVERPLAYER2();
	}
	else
	{
		document.getElementById("sidebar").className = "sidebarOFF";
	}
}
/* ----------------------------------------------------------------------------------------------------------------------------------*/
/* ----------------------------------------------------------------------------------------------------------------------------------*/
/* ----------------------------------------------------------------------------------------  Стройка Эскадры Игрока 2 ---------------*/
/* ----------------------------------------------------------------------------------------------------------------------------------*/
/* ----------------------------------------------------------------------------------------------------------------------------------*/

function pasteShipP2(x, y){/* Порядок проверки: 1, 4, 3, 2  */
    if (active_blockP2[x][y] == false && codeBlockP2[x][y] == 101)
	{
		/* ------------------------------------------------------------------------------------ 1-ный корабль-------*/
        if(codeBlockP2[x-1][y-1]== 101 &&
			codeBlockP2[x-1][y]	== 101 &&
			codeBlockP2[x-1][y+1] == 101 &&
			codeBlockP2[x][y+1]	== 101 &&
			codeBlockP2[x+1][y+1] == 101 &&
			codeBlockP2[x+1][y]	== 101 &&
			codeBlockP2[x+1][y-1] == 101 &&
			codeBlockP2[x][y-1]	== 101)
		{
				ship1NumP2++;
				active_blockP2[x][y] = true;
				codeBlockP2[x][y] = 44;
				shipCounterP2();

				return pasteImageP2(x,y);
		}
		if(pasteShipBlockerP2(x,y) == true){
			/* ------------------------------------------------------------------------------------ 4-ной корабль---------*/
			if(codeBlockP2[x-3][y] == 44  || codeBlockP2[x+3][y] == 44 || codeBlockP2[x][y-3] == 44  || codeBlockP2[x][y+3] == 44){
				/*------------- 4-ной корабль налево или направо -------------------*/
				if(codeBlockP2[x][y-3] == 44  || codeBlockP2[x][y+3] == 44)
				{
					if((codeBlockP2[x][y+1] == 44 &&	codeBlockP2[x][y+2] == 44 &&	codeBlockP2[x][y+3] == 44 &&	codeBlockP2[x][y+4] == 101) || /*--4-ной корабль направо --*/
					(codeBlockP2[x][y-4] == 101 && codeBlockP2[x][y-3] == 44 && codeBlockP2[x][y-2] == 44 && codeBlockP2[x][y-1] == 44))		/*--4-ной корабль налево --*/
					{
						if(ship4NumP2 < SHIP4MAXP2)
						{
							ship4NumP2++;	ship3NumP2--;
							active_blockP2[x][y] = true;
							codeBlockP2[x][y] = 44;
							shipCounterP2();
						return pasteImageP2(x, y);
						}
					}
				}
				/*------------------- 4-ной корабль вверх или вниз -----------------------*/
				if(codeBlockP2[x-3][y] == 44  || codeBlockP2[x+3][y] == 44)
				{
					if((codeBlockP2[x-4][y]== 101 && codeBlockP2[x-3][y]== 44 && codeBlockP2[x-2][y]== 44 && codeBlockP2[x-1][y]== 44) ||	/*--4-ной корабль вверх --*/
					(codeBlockP2[x+1][y]== 44 && codeBlockP2[x+2][y]== 44 && codeBlockP2[x+3][y]== 44 && codeBlockP2[x+4][y]== 101))		/*-- 4-ной корабль вниз --*/
					{
						if(ship4NumP2 < SHIP4MAXP2)
						{
							ship4NumP2++;	ship3NumP2--;
							active_blockP2[x][y] = true;
							codeBlockP2[x][y] = 44;
							shipCounterP2();
							return pasteImageP2(x, y);
						}
					}
				}
			}

			/* ------------------------------------------------------------------------------------ 3-ной корабль---------*/
			if(codeBlockP2[x][y+2]== 44 || codeBlockP2[x][y-2] == 44 || codeBlockP2[x-2][y]== 44 || codeBlockP2[x+2][y]== 44){
				/*------------- 3-ной корабль направо или налево -------------------*/
				if(codeBlockP2[x][y+2]== 44 || codeBlockP2[x][y-2] == 44)
				{
					if((codeBlockP2[x][y+1]== 44 && codeBlockP2[x][y+2]== 44 && codeBlockP2[x][y+3]== 101) ||	/*--3-ной корабль направо --*/
					(codeBlockP2[x][y-3]== 101 && codeBlockP2[x][y-2]== 44 && codeBlockP2[x][y-1] == 44))		/*--3-ной корабль налево --*/
					{
							ship3NumP2++;	ship2NumP2--;
							active_blockP2[x][y] = true;
							codeBlockP2[x][y] = 44;
							shipCounterP2();
						return pasteImageP2(x, y);
					}
				}
				/*------------------- 3-ной корабль вверх или вниз -----------------------*/
				if(codeBlockP2[x-2][y]== 44 || codeBlockP2[x+2][y]== 44)
				{
					if((codeBlockP2[x-3][y]== 101 && codeBlockP2[x-2][y]== 44 && codeBlockP2[x-1][y]== 44) ||	/*--3-ной корабль наверх --*/
					(codeBlockP2[x+1][y]== 44 && codeBlockP2[x+2][y]== 44 && codeBlockP2[x+3][y]== 101))			/*-- 3-ной корабль вниз --*/
					{

							ship3NumP2++;	ship2NumP2--;
							active_blockP2[x][y] = true;
							codeBlockP2[x][y] = 44;
							shipCounterP2();
							return pasteImageP2(x, y);

					}
				}
			}

		   /* ----------------------------------------------------------------------------- 2-ной корабль -------------*/
		   if(codeBlockP2[x][y+1] == 44  || codeBlockP2[x][y-1] == 44 || codeBlockP2[x-1][y] == 44  || codeBlockP2[x+1][y] == 44){
			   /*------------------ 2-ной корабль направо или налево ----------------*/
			   if((codeBlockP2[x][y+1] == 44 && codeBlockP2[x][y+2] == 101 ) ||
			   (codeBlockP2[x][y-1] == 44 && codeBlockP2[x][y-2] == 101))
			   {
						ship2NumP2++;	ship1NumP2--;
						active_blockP2[x][y] = true;
						codeBlockP2[x][y] = 44;
						shipCounterP2();
						return pasteImageP2(x, y);
				}
				/*------------------ 2-ной корабль наверх или вниз ----------------*/
				if((codeBlockP2[x-2][y] == 101 && codeBlockP2[x-1][y] == 44) ||
				(codeBlockP2[x+1][y] == 44 && codeBlockP2[x+2][y] == 101))
				{

						ship2NumP2++;	ship1NumP2--;
						active_blockP2[x][y] = true;
						codeBlockP2[x][y] = 44;
						shipCounterP2();
						return pasteImageP2(x, y);

				}
			}
		}
    }

    else if (active_blockP2[x][y] == true && codeBlockP2[x][y] == 44){
        deleteShipP2(x, y);
    }
	if (active_blockP2[x][y] == true && codeBlockP2[x][y] == 101){ // красный на пустой блокированный
		REDERRORPLAYER2();
	}
}
 /* ----------------------------------------------------------------------------------------------------------------------------------*/
 /*-------------------------------------------------------------------- Функция блокировки вставки корабля(зависит от счетчика) --------------*/
function pasteShipBlockerP2(x,y){
	/*сначала "Блокировка ставки блока в центр между короблей"  */
	if((codeBlockP2[x][y+1] == 44  && codeBlockP2[x][y-1] == 44) || (codeBlockP2[x-1][y] == 44  && codeBlockP2[x+1][y] == 44))
	{
		REDERRORPLAYER2();
		return false;
	}
	//сначала определим, какой это корабль
	if((codeBlockP2[x-5][y] == 101  || codeBlockP2[x+5][y] == 101 || codeBlockP2[x][y-5] == 101  || codeBlockP2[x][y+5] == 101) &&
	    (codeBlockP2[x+4][y] == 44  || codeBlockP2[x+4][y] == 44 || codeBlockP2[x][y-4] == 44  || codeBlockP2[x][y+4] == 44))
	{
		if(((codeBlockP2[x][y+1]== 44 && codeBlockP2[x][y+2]== 44 && codeBlockP2[x][y+3]== 44 && codeBlockP2[x][y+4]== 44 && codeBlockP2[x][y+5]== 101) ||	/*--4-ной корабль направо --*/
			(codeBlockP2[x][y-5]== 101 && codeBlockP2[x][y-4]== 44 && codeBlockP2[x][y-3]== 44 && codeBlockP2[x][y-2]== 44 && codeBlockP2[x][y-1]== 44) ||	/*--4-ной корабль налево --*/
			(codeBlockP2[x-5][y]== 101 && codeBlockP2[x-4][y]== 44 && codeBlockP2[x-3][y]== 44 && codeBlockP2[x-2][y]== 44 && codeBlockP2[x-1][y]== 44) ||	/*--4-ной корабль вверх --*/
			(codeBlockP2[x+1][y]== 44 && codeBlockP2[x+2][y]== 44 && codeBlockP2[x+3][y]== 44 && codeBlockP2[x+4][y]== 44 && codeBlockP2[x+5][y]== 101)) &&	/*-- 4-ной корабль вниз --*/
			(ship4NumP2 == SHIP4MAXP2))
			{
				REDERRORPLAYER2();
				return false;
			}
	}

	if((codeBlockP2[x+4][y] == 101 || codeBlockP2[x-4][y] == 101 || codeBlockP2[x][y-4] == 101  || codeBlockP2[x][y+4] == 101) &&
	   (codeBlockP2[x][y+3]== 44 || codeBlockP2[x][y-3] == 44 || codeBlockP2[x-3][y]== 44 || codeBlockP2[x+3][y]== 44))
	{
		if(((codeBlockP2[x][y+1]== 44 && codeBlockP2[x][y+2]== 44 && codeBlockP2[x][y+3]== 44 && codeBlockP2[x][y+4]== 101) ||	/*--3-ной корабль направо --*/
			(codeBlockP2[x][y-4]== 101 && codeBlockP2[x][y-3]== 44 && codeBlockP2[x][y-2]== 44 && codeBlockP2[x][y-1]== 44) ||	/*--3-ной корабль налево --*/
			(codeBlockP2[x-4][y]== 101 && codeBlockP2[x-3][y]== 44 && codeBlockP2[x-2][y]== 44 && codeBlockP2[x-1][y]== 44) ||	/*--3-ной корабль вверх --*/
			(codeBlockP2[x+1][y]== 44 && codeBlockP2[x+2][y]== 44 && codeBlockP2[x+3][y]== 44 && codeBlockP2[x+4][y]== 101)) && /*-- 3-ной корабль вниз --*/
			(ship4NumP2 == SHIP4MAXP2 && ship3NumP2 == SHIP3MAXP2))
			{
				REDERRORPLAYER2();
				return false;
			}
	}

	if((codeBlockP2[x][y+3]== 101 || codeBlockP2[x][y-3] == 101 || codeBlockP2[x-3][y]== 101 || codeBlockP2[x+3][y]== 101) &&
		(codeBlockP2[x][y+2]== 44 || codeBlockP2[x][y-2] == 44 || codeBlockP2[x-2][y]== 44 || codeBlockP2[x+2][y]== 44))
	{
		if(((codeBlockP2[x][y+1]== 44 && codeBlockP2[x][y+2]== 44 && codeBlockP2[x][y+3]== 101) ||	/*--2-ной корабль направо --*/
			(codeBlockP2[x][y-3]== 101 && codeBlockP2[x][y-2]== 44 && codeBlockP2[x][y-1]== 44) ||	/*--2-ной корабль налево --*/
			(codeBlockP2[x-3][y]== 101 && codeBlockP2[x-2][y]== 44 && codeBlockP2[x-1][y]== 44) ||	/*--2-ной корабль наверх --*/
			(codeBlockP2[x+1][y]== 44 && codeBlockP2[x+2][y]== 44 && codeBlockP2[x+3][y]== 101)) && 	/*-- 2-ной корабль вниз --*/
			(ship3NumP2 == SHIP3MAXP2 && ship4NumP2 == SHIP4MAXP2))
			{
				REDERRORPLAYER2();
				return false;
			}
	}
	return true;
}

/*------------------------------------------------------------------------------------ Функция счета корабля(информация) --------------*/
// счетчик кораблей Игрока 2
function shipCounterP2(){
	var shipnum1GP2 = document.getElementById("shipnum1GP2");
	var shipnum1RP2 = document.getElementById("shipnum1RP2");
	var shipnum2GP2 = document.getElementById("shipnum2GP2");
	var shipnum2RP2 = document.getElementById("shipnum2RP2");
	var shipnum3GP2 = document.getElementById("shipnum3GP2");
	var shipnum3RP2 = document.getElementById("shipnum3RP2");
	var shipnum4GP2 = document.getElementById("shipnum4GP2");
	var shipnum4RP2 = document.getElementById("shipnum4RP2");
	////1
	if(ship1NumP2 == SHIP1MAXP2){
		shipnum1GP2.innerHTML = ship1NumP2;
		shipnum1RP2.innerHTML = "";
	}
	else{
		shipnum1GP2.innerHTML = "";
		shipnum1RP2.innerHTML = ship1NumP2;
	}
	////2
	if(ship2NumP2 == SHIP2MAXP2){
		shipnum2GP2.innerHTML = ship2NumP2;
		shipnum2RP2.innerHTML = "";
	}
	else{
		shipnum2GP2.innerHTML = "";
		shipnum2RP2.innerHTML = ship2NumP2;
	}
	////3
	if(ship3NumP2 == SHIP3MAXP2){
		shipnum3GP2.innerHTML = ship3NumP2;
		shipnum3RP2.innerHTML = "";
	}
	else{
		shipnum3GP2.innerHTML = "";
		shipnum3RP2.innerHTML = ship3NumP2;
	}
	////4
	if(ship4NumP2 == SHIP4MAXP2){
		shipnum4GP2.innerHTML = ship4NumP2;
		shipnum4RP2.innerHTML = "";
	}
	else{
		shipnum4GP2.innerHTML = "";
		shipnum4RP2.innerHTML = ship4NumP2;
	}
}
/*------------------------------------------------------------------------------------ Функции смен кртинок --------------*/
/*--------- Функция смены картинок 2 игрока на корабли --------------*/
function pasteImageP2(x, y){
if (x==5&&y==5){image_b55.src = icon[2];}
	else if (x==5&&y==6){image_b56.src = icon[2];}
	else if (x==5&&y==7){image_b57.src = icon[2];}
	else if (x==5&&y==8){image_b58.src = icon[2];}
	else if (x==5&&y==9){image_b59.src = icon[2];}
	else if (x==5&&y==10){image_b510.src = icon[2];}
	else if (x==5&&y==11){image_b511.src = icon[2];}
	else if (x==5&&y==12){image_b512.src = icon[2];}
	else if (x==5&&y==13){image_b513.src = icon[2];}
	else if (x==5&&y==14){image_b514.src = icon[2];}


	else if (x==6&&y==5){image_b65.src = icon[2];}
	else if (x==6&&y==6){image_b66.src = icon[2];}
	else if (x==6&&y==7){image_b67.src = icon[2];}
	else if (x==6&&y==8){image_b68.src = icon[2];}
	else if (x==6&&y==9){image_b69.src = icon[2];}
	else if (x==6&&y==10){image_b610.src = icon[2];}
	else if (x==6&&y==11){image_b611.src = icon[2];}
	else if (x==6&&y==12){image_b612.src = icon[2];}
	else if (x==6&&y==13){image_b613.src = icon[2];}
	else if (x==6&&y==14){image_b614.src = icon[2];}


	else if (x==7&&y==5){image_b75.src = icon[2];}
	else if (x==7&&y==6){image_b76.src = icon[2];}
	else if (x==7&&y==7){image_b77.src = icon[2];}
	else if (x==7&&y==8){image_b78.src = icon[2];}
	else if (x==7&&y==9){image_b79.src = icon[2];}
	else if (x==7&&y==10){image_b710.src = icon[2];}
	else if (x==7&&y==11){image_b711.src = icon[2];}
	else if (x==7&&y==12){image_b712.src = icon[2];}
	else if (x==7&&y==13){image_b713.src = icon[2];}
	else if (x==7&&y==14){image_b714.src = icon[2];}


	else if (x==8&&y==5){image_b85.src = icon[2];}
	else if (x==8&&y==6){image_b86.src = icon[2];}
	else if (x==8&&y==7){image_b87.src = icon[2];}
	else if (x==8&&y==8){image_b88.src = icon[2];}
	else if (x==8&&y==9){image_b89.src = icon[2];}
	else if (x==8&&y==10){image_b810.src = icon[2];}
	else if (x==8&&y==11){image_b811.src = icon[2];}
	else if (x==8&&y==12){image_b812.src = icon[2];}
	else if (x==8&&y==13){image_b813.src = icon[2];}
	else if (x==8&&y==14){image_b814.src = icon[2];}


	else if (x==9&&y==5){image_b95.src = icon[2];}
	else if (x==9&&y==6){image_b96.src = icon[2];}
	else if (x==9&&y==7){image_b97.src = icon[2];}
	else if (x==9&&y==8){image_b98.src = icon[2];}
	else if (x==9&&y==9){image_b99.src = icon[2];}
	else if (x==9&&y==10){image_b910.src = icon[2];}
	else if (x==9&&y==11){image_b911.src = icon[2];}
	else if (x==9&&y==12){image_b912.src = icon[2];}
	else if (x==9&&y==13){image_b913.src = icon[2];}
	else if (x==9&&y==14){image_b914.src = icon[2];}


	else if (x==10&&y==5){image_b105.src = icon[2];}
	else if (x==10&&y==6){image_b106.src = icon[2];}
	else if (x==10&&y==7){image_b107.src = icon[2];}
	else if (x==10&&y==8){image_b108.src = icon[2];}
	else if (x==10&&y==9){image_b109.src = icon[2];}
	else if (x==10&&y==10){image_b1010.src = icon[2];}
	else if (x==10&&y==11){image_b1011.src = icon[2];}
	else if (x==10&&y==12){image_b1012.src = icon[2];}
	else if (x==10&&y==13){image_b1013.src = icon[2];}
	else if (x==10&&y==14){image_b1014.src = icon[2];}


	else if (x==11&&y==5){image_b115.src = icon[2];}
	else if (x==11&&y==6){image_b116.src = icon[2];}
	else if (x==11&&y==7){image_b117.src = icon[2];}
	else if (x==11&&y==8){image_b118.src = icon[2];}
	else if (x==11&&y==9){image_b119.src = icon[2];}
	else if (x==11&&y==10){image_b1110.src = icon[2];}
	else if (x==11&&y==11){image_b1111.src = icon[2];}
	else if (x==11&&y==12){image_b1112.src = icon[2];}
	else if (x==11&&y==13){image_b1113.src = icon[2];}
	else if (x==11&&y==14){image_b1114.src = icon[2];}


	else if (x==12&&y==5){image_b125.src = icon[2];}
	else if (x==12&&y==6){image_b126.src = icon[2];}
	else if (x==12&&y==7){image_b127.src = icon[2];}
	else if (x==12&&y==8){image_b128.src = icon[2];}
	else if (x==12&&y==9){image_b129.src = icon[2];}
	else if (x==12&&y==10){image_b1210.src = icon[2];}
	else if (x==12&&y==11){image_b1211.src = icon[2];}
	else if (x==12&&y==12){image_b1212.src = icon[2];}
	else if (x==12&&y==13){image_b1213.src = icon[2];}
	else if (x==12&&y==14){image_b1214.src = icon[2];}


	else if (x==13&&y==5){image_b135.src = icon[2];}
	else if (x==13&&y==6){image_b136.src = icon[2];}
	else if (x==13&&y==7){image_b137.src = icon[2];}
	else if (x==13&&y==8){image_b138.src = icon[2];}
	else if (x==13&&y==9){image_b139.src = icon[2];}
	else if (x==13&&y==10){image_b1310.src = icon[2];}
	else if (x==13&&y==11){image_b1311.src = icon[2];}
	else if (x==13&&y==12){image_b1312.src = icon[2];}
	else if (x==13&&y==13){image_b1313.src = icon[2];}
	else if (x==13&&y==14){image_b1314.src = icon[2];}


	else if (x==14&&y==5){image_b145.src = icon[2];}
	else if (x==14&&y==6){image_b146.src = icon[2];}
	else if (x==14&&y==7){image_b147.src = icon[2];}
	else if (x==14&&y==8){image_b148.src = icon[2];}
	else if (x==14&&y==9){image_b149.src = icon[2];}
	else if (x==14&&y==10){image_b1410.src = icon[2];}
	else if (x==14&&y==11){image_b1411.src = icon[2];}
	else if (x==14&&y==12){image_b1412.src = icon[2];}
	else if (x==14&&y==13){image_b1413.src = icon[2];}
	else if (x==14&&y==14){image_b1414.src = icon[2];}

	cornerBlockedP2(x,y);
}

/*---------1 Функция удаления палубы 1 игрока --------------*/
function deleteShipP2(x, y){
	/*сначала "Блокировка удаления блока с центра коробля"  */
	if(!((codeBlockP2[x][y+1] == 44  && codeBlockP2[x][y-1] == 44) || (codeBlockP2[x-1][y] == 44  && codeBlockP2[x+1][y] == 44)))
	{
		//теперь определим, какой это корабль
		if(codeBlockP2[x-3][y] == 44  || codeBlockP2[x+3][y] == 44 || codeBlockP2[x][y-3] == 44  || codeBlockP2[x][y+3] == 44)
		{
			if((codeBlockP2[x][y+1] == 44 &&	codeBlockP2[x][y+2] == 44 &&	codeBlockP2[x][y+3] == 44) || /*--4-ной корабль направо --*/
				(codeBlockP2[x][y-3] == 44 && codeBlockP2[x][y-2] == 44 && codeBlockP2[x][y-1] == 44) ||	/*--4-ной корабль налево --*/
				(codeBlockP2[x-3][y]== 44 && codeBlockP2[x-2][y]== 44 && codeBlockP2[x-1][y]== 44) ||		/*--4-ной корабль вверх --*/
				(codeBlockP2[x+1][y]== 44 && codeBlockP2[x+2][y]== 44 && codeBlockP2[x+3][y]== 44))		/*-- 4-ной корабль вниз --*/
				{
					ship4NumP2--; ship3NumP2++;
					shipCounterP2();
					return deleteImageP2(x, y);
				}
		}

		if(codeBlockP2[x][y+2]== 44 || codeBlockP2[x][y-2] == 44 || codeBlockP2[x-2][y]== 44 || codeBlockP2[x+2][y]== 44)
		{
			if((codeBlockP2[x][y+1]== 44 && codeBlockP2[x][y+2]== 44) ||	/*--3-ной корабль направо --*/
				(codeBlockP2[x][y-2]== 44 && codeBlockP2[x][y-1] == 44)||	/*--3-ной корабль налево --*/
				(codeBlockP2[x-2][y]== 44 && codeBlockP2[x-1][y]== 44) ||	/*--3-ной корабль наверх --*/
				(codeBlockP2[x+1][y]== 44 && codeBlockP2[x+2][y]== 44))		/*-- 3-ной корабль вниз --*/
				{
					ship3NumP2--;	ship2NumP2++;
					shipCounterP2();
					return deleteImageP2(x, y);
				}
		}

		if(codeBlockP2[x][y+1] == 44  || codeBlockP2[x][y-1] == 44 || codeBlockP2[x-1][y] == 44  || codeBlockP2[x+1][y] == 44)
		{
			if((codeBlockP2[x][y+1] == 44  || codeBlockP2[x][y-1] == 44) ||	/*--2-ной корабль направо или налево--*/
				(codeBlockP2[x-1][y] == 44 || codeBlockP2[x+1][y] == 44))/*--2-ной корабль наверх или вниз--*/
				{
					ship2NumP2--;	ship1NumP2++;
					shipCounterP2();
					return deleteImageP2(x, y);
				}
		}

		if(codeBlockP2[x-1][y-1] == 101 && codeBlockP2[x-1][y] == 101 && codeBlockP2[x-1][y+1] == 101 && /*--1-ной корабль --*/
		codeBlockP2[x][y+1] == 101 && codeBlockP2[x+1][y+1] == 101 &&
		codeBlockP2[x+1][y] == 101 && codeBlockP2[x+1][y-1]	== 101 && codeBlockP2[x][y-1] == 101)
		{
			ship1NumP2--;
			shipCounterP2();
			return deleteImageP2(x, y);
		}
	}
	else{ REDERRORPLAYER2();}
}
 /*----------------------------------------------------------------- Функция смены картинок 2 игрока на стандартные--------------*/
function deleteImageP2(x, y){
if (x==5&&y==5){image_b55.src = icon[0];}
else if (x==5&&y==6){image_b56.src = icon[0];}
else if (x==5&&y==7){image_b57.src = icon[0];}
else if (x==5&&y==8){image_b58.src = icon[0];}
else if (x==5&&y==9){image_b59.src = icon[0];}
else if (x==5&&y==10){image_b510.src = icon[0];}
else if (x==5&&y==11){image_b511.src = icon[0];}
else if (x==5&&y==12){image_b512.src = icon[0];}
else if (x==5&&y==13){image_b513.src = icon[0];}
else if (x==5&&y==14){image_b514.src = icon[0];}


else if (x==6&&y==5){image_b65.src = icon[0];}
else if (x==6&&y==6){image_b66.src = icon[0];}
else if (x==6&&y==7){image_b67.src = icon[0];}
else if (x==6&&y==8){image_b68.src = icon[0];}
else if (x==6&&y==9){image_b69.src = icon[0];}
else if (x==6&&y==10){image_b610.src = icon[0];}
else if (x==6&&y==11){image_b611.src = icon[0];}
else if (x==6&&y==12){image_b612.src = icon[0];}
else if (x==6&&y==13){image_b613.src = icon[0];}
else if (x==6&&y==14){image_b614.src = icon[0];}


else if (x==7&&y==5){image_b75.src = icon[0];}
else if (x==7&&y==6){image_b76.src = icon[0];}
else if (x==7&&y==7){image_b77.src = icon[0];}
else if (x==7&&y==8){image_b78.src = icon[0];}
else if (x==7&&y==9){image_b79.src = icon[0];}
else if (x==7&&y==10){image_b710.src = icon[0];}
else if (x==7&&y==11){image_b711.src = icon[0];}
else if (x==7&&y==12){image_b712.src = icon[0];}
else if (x==7&&y==13){image_b713.src = icon[0];}
else if (x==7&&y==14){image_b714.src = icon[0];}


else if (x==8&&y==5){image_b85.src = icon[0];}
else if (x==8&&y==6){image_b86.src = icon[0];}
else if (x==8&&y==7){image_b87.src = icon[0];}
else if (x==8&&y==8){image_b88.src = icon[0];}
else if (x==8&&y==9){image_b89.src = icon[0];}
else if (x==8&&y==10){image_b810.src = icon[0];}
else if (x==8&&y==11){image_b811.src = icon[0];}
else if (x==8&&y==12){image_b812.src = icon[0];}
else if (x==8&&y==13){image_b813.src = icon[0];}
else if (x==8&&y==14){image_b814.src = icon[0];}


else if (x==9&&y==5){image_b95.src = icon[0];}
else if (x==9&&y==6){image_b96.src = icon[0];}
else if (x==9&&y==7){image_b97.src = icon[0];}
else if (x==9&&y==8){image_b98.src = icon[0];}
else if (x==9&&y==9){image_b99.src = icon[0];}
else if (x==9&&y==10){image_b910.src = icon[0];}
else if (x==9&&y==11){image_b911.src = icon[0];}
else if (x==9&&y==12){image_b912.src = icon[0];}
else if (x==9&&y==13){image_b913.src = icon[0];}
else if (x==9&&y==14){image_b914.src = icon[0];}


else if (x==10&&y==5){image_b105.src = icon[0];}
else if (x==10&&y==6){image_b106.src = icon[0];}
else if (x==10&&y==7){image_b107.src = icon[0];}
else if (x==10&&y==8){image_b108.src = icon[0];}
else if (x==10&&y==9){image_b109.src = icon[0];}
else if (x==10&&y==10){image_b1010.src = icon[0];}
else if (x==10&&y==11){image_b1011.src = icon[0];}
else if (x==10&&y==12){image_b1012.src = icon[0];}
else if (x==10&&y==13){image_b1013.src = icon[0];}
else if (x==10&&y==14){image_b1014.src = icon[0];}


else if (x==11&&y==5){image_b115.src = icon[0];}
else if (x==11&&y==6){image_b116.src = icon[0];}
else if (x==11&&y==7){image_b117.src = icon[0];}
else if (x==11&&y==8){image_b118.src = icon[0];}
else if (x==11&&y==9){image_b119.src = icon[0];}
else if (x==11&&y==10){image_b1110.src = icon[0];}
else if (x==11&&y==11){image_b1111.src = icon[0];}
else if (x==11&&y==12){image_b1112.src = icon[0];}
else if (x==11&&y==13){image_b1113.src = icon[0];}
else if (x==11&&y==14){image_b1114.src = icon[0];}


else if (x==12&&y==5){image_b125.src = icon[0];}
else if (x==12&&y==6){image_b126.src = icon[0];}
else if (x==12&&y==7){image_b127.src = icon[0];}
else if (x==12&&y==8){image_b128.src = icon[0];}
else if (x==12&&y==9){image_b129.src = icon[0];}
else if (x==12&&y==10){image_b1210.src = icon[0];}
else if (x==12&&y==11){image_b1211.src = icon[0];}
else if (x==12&&y==12){image_b1212.src = icon[0];}
else if (x==12&&y==13){image_b1213.src = icon[0];}
else if (x==12&&y==14){image_b1214.src = icon[0];}


else if (x==13&&y==5){image_b135.src = icon[0];}
else if (x==13&&y==6){image_b136.src = icon[0];}
else if (x==13&&y==7){image_b137.src = icon[0];}
else if (x==13&&y==8){image_b138.src = icon[0];}
else if (x==13&&y==9){image_b139.src = icon[0];}
else if (x==13&&y==10){image_b1310.src = icon[0];}
else if (x==13&&y==11){image_b1311.src = icon[0];}
else if (x==13&&y==12){image_b1312.src = icon[0];}
else if (x==13&&y==13){image_b1313.src = icon[0];}
else if (x==13&&y==14){image_b1314.src = icon[0];}


else if (x==14&&y==5){image_b145.src = icon[0];}
else if (x==14&&y==6){image_b146.src = icon[0];}
else if (x==14&&y==7){image_b147.src = icon[0];}
else if (x==14&&y==8){image_b148.src = icon[0];}
else if (x==14&&y==9){image_b149.src = icon[0];}
else if (x==14&&y==10){image_b1410.src = icon[0];}
else if (x==14&&y==11){image_b1411.src = icon[0];}
else if (x==14&&y==12){image_b1412.src = icon[0];}
else if (x==14&&y==13){image_b1413.src = icon[0];}
else if (x==14&&y==14){image_b1414.src = icon[0];}

if(buildEndP2 == false && gameStartUse == false){cornerUnblockedP2(x,y);}
	
	if(buildEndP1 == true && buildEndP2 == true)
	{
		image_b55.src = icon[0];
		image_b56.src = icon[0];
		image_b57.src = icon[0];
		image_b58.src = icon[0];
		image_b59.src = icon[0];
		image_b510.src = icon[0];
		image_b511.src = icon[0];
		image_b512.src = icon[0];
		image_b513.src = icon[0];
		image_b514.src = icon[0];
		image_b65.src = icon[0];
		image_b66.src = icon[0];
		image_b67.src = icon[0];
		image_b68.src = icon[0];
		image_b69.src = icon[0];
		image_b610.src = icon[0];
		image_b611.src = icon[0];
		image_b612.src = icon[0];
		image_b613.src = icon[0];
		image_b614.src = icon[0];
		image_b75.src = icon[0];
		image_b76.src = icon[0];
		image_b77.src = icon[0];
		image_b78.src = icon[0];
		image_b79.src = icon[0];
		image_b710.src = icon[0];
		image_b711.src = icon[0];
		image_b712.src = icon[0];
		image_b713.src = icon[0];
		image_b714.src = icon[0];
		image_b85.src = icon[0];
		image_b86.src = icon[0];
		image_b87.src = icon[0];
		image_b88.src = icon[0];
		image_b89.src = icon[0];
		image_b810.src = icon[0];
		image_b811.src = icon[0];
		image_b812.src = icon[0];
		image_b813.src = icon[0];
		image_b814.src = icon[0];
		image_b95.src = icon[0];
		image_b96.src = icon[0];
		image_b97.src = icon[0];
		image_b98.src = icon[0];
		image_b99.src = icon[0];
		image_b910.src = icon[0];
		image_b911.src = icon[0];
		image_b912.src = icon[0];
		image_b913.src = icon[0];
		image_b914.src = icon[0];
		image_b105.src = icon[0];
		image_b106.src = icon[0];
		image_b107.src = icon[0];
		image_b108.src = icon[0];
		image_b109.src = icon[0];
		image_b1010.src = icon[0];
		image_b1011.src = icon[0];
		image_b1012.src = icon[0];
		image_b1013.src = icon[0];
		image_b1014.src = icon[0];
		image_b115.src = icon[0];
		image_b116.src = icon[0];
		image_b117.src = icon[0];
		image_b118.src = icon[0];
		image_b119.src = icon[0];
		image_b1110.src = icon[0];
		image_b1111.src = icon[0];
		image_b1112.src = icon[0];
		image_b1113.src = icon[0];
		image_b1114.src = icon[0];
		image_b125.src = icon[0];
		image_b126.src = icon[0];
		image_b127.src = icon[0];
		image_b128.src = icon[0];
		image_b129.src = icon[0];
		image_b1210.src = icon[0];
		image_b1211.src = icon[0];
		image_b1212.src = icon[0];
		image_b1213.src = icon[0];
		image_b1214.src = icon[0];
		image_b135.src = icon[0];
		image_b136.src = icon[0];
		image_b137.src = icon[0];
		image_b138.src = icon[0];
		image_b139.src = icon[0];
		image_b1310.src = icon[0];
		image_b1311.src = icon[0];
		image_a1312.src = icon[0];
		image_b1313.src = icon[0];
		image_b1314.src = icon[0];
		image_b145.src = icon[0];
		image_b146.src = icon[0];
		image_b147.src = icon[0];
		image_b148.src = icon[0];
		image_b149.src = icon[0];
		image_b1410.src = icon[0];
		image_b1411.src = icon[0];
		image_b1412.src = icon[0];
		image_b1413.src = icon[0];
		image_b1414.src = icon[0];
	}
}

/*------------------------------------------------------------------------------------ Блокировка и Разблокировка --------------*/
/*---------------- Блокировка углов --------------*/
function cornerBlockedP2(x,y){
    if (active_blockP2[x-1][y+1] == false){active_blockP2[x-1][y+1]= true;}/* верхний правый (1)*/
    if (active_blockP2[x+1][y+1] == false){active_blockP2[x+1][y+1]= true;}/* нижний правый (2)*/
    if (active_blockP2[x+1][y-1] == false){active_blockP2[x+1][y-1]= true;}/* нижний левый (3)*/
	if (active_blockP2[x-1][y-1] == false){active_blockP2[x-1][y-1]= true;}/* верхний левый (4)*/

	func_endBuildP2();
}

 /*---------------- Разблокировка --------------*/
 function cornerUnblockedP2(x,y){
	if (active_blockP2[x+1][y+1] == true) { /* верхний правый (1)*/
        if (codeBlockP2[x-2][y]== 101 && codeBlockP2[x-2][y+1]== 101 && codeBlockP2[x-2][y+2]== 101 &&
            codeBlockP2[x-1][y+2]== 101 && codeBlockP2[x][y+2]== 101) {
            active_blockP2[x-1][y+1] = false;
        }
    }
    if (active_blockP2[x+1][y-1] == true) { /* нижний правый (2)*/
        if (codeBlockP2[x][y+2]== 101 && codeBlockP2[x+1][y+2]== 101 && codeBlockP2[x+2][y+2]== 101 &&
			codeBlockP2[x+2][y]== 101 && codeBlockP2[x+2][y+1]== 101) {
            active_blockP2[x+1][y+1] = false;
        }
    }
	if (active_blockP2[x-1][y-1] == true){ /* нижний левый (3)*/
        if (codeBlockP2[x+2][y-2]== 101 && codeBlockP2[x+2][y-1]== 101 && codeBlockP2[x+2][y]== 101 &&
            codeBlockP2[x][y-2]== 101 && codeBlockP2[x+1][y-2]== 101) {
            active_blockP2[x+1][y-1] = false;
        }
    }
    if (active_blockP2[x-1][y+1] == true){ /* верхний левый (4)*/
		if (codeBlockP2[x-2][y-2]== 101 && codeBlockP2[x-1][y-2]== 101 && codeBlockP2[x][y-2]== 101 &&
			codeBlockP2[x-2][y-1]== 101 && codeBlockP2[x-2][y]== 101) {
			active_blockP2[x-1][y-1] = false;
		}
    }

	codeBlockP2[x][y]	= 101;
	active_blockP2[x][y] = false;

	func_endBuildP2();
}
 /*----------------------------------------------------------------- Функция завершения сборки эскадры Игрока2--------------*/
function func_endBuildP2(){
	if(ship1NumP2 == SHIP1MAXP2 && ship2NumP2 == SHIP2MAXP2 && ship3NumP2 == SHIP3MAXP2 && ship4NumP2 == SHIP4MAXP2)
	{
		document.getElementById("sidebarP2").className = "btn-endBuild";
	}
	else
	{
		document.getElementById("sidebarP2").className = "sidebarOFF";
	}
}
/*-------------------------------------------------------*/


/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------  БОЙ БОЙ БОЙ БОЙ БОЙ БОЙ БОЙ БОЙ --------------------*/
/*------------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------------------------------*/
function startgame(){
	buildEndP1 = true;
	if(TEST == false){deleteImage(0,0);} // на Тест
	document.getElementById("sidebar").className = "sidebarOFF";
}
function startgameP2(){
	buildEndP2 = true;
	if(TEST == false){deleteImageP2(0,0);} // на Тест
	document.getElementById("sidebarP2").className = "sidebarOFF";
	document.getElementById("gamestart").className = "sidebarON";
}
function startGame(){
	gameStartUse = true;
	document.getElementById("gamestart").className = "sidebarOFF";
	text_top1.innerHTML = "Идет игра";
	gameXod = getRandomInRange(1, 2);
	alert("Первым ходит Игрок №" +gameXod)
	if(gameXod == 2){SILVERPLAYER1(); document.getElementById("table2").className = "early_access_header_whiteRight";}
	if(gameXod == 1){SILVERPLAYER2(); document.getElementById("table1").className = "early_access_header_whiteLeft";}
	
}
/* ------------------------------------------------ Выстрел --------------------------------------*/
function Shot(x, y)
{
		if(gameXod == 1)
		{
			if(codeBlockP2[x][y] == 44)
			{
				codeBlockP2[x][y] = 33; //попал 			
				hitsPlayer1++;
				hitP2(x,y);
				killcheckP2(x,y);
				InfoGameEnd.innerHTML = '<h2 style="color:red">Игрок 1 попал</h2>';
				return winnerChecker();
			}
			if(codeBlockP2[x][y] == 101)
			{
				codeBlockP2[x][y] = 0;//мимо
				gameXod = 2;
				missedP2(x,y);
				InfoGameEnd.innerHTML = '<h2 style="color:red">Промах, ход Игрока 2</h2>';
				SILVERPLAYER1();
				document.getElementById("table1").className = "early_access_header_whiteLeft";
				return winnerChecker();
			}
			if(codeBlockP2[x][y] == 0 || codeBlockP2[x][y] == 33 || codeBlockP2[x][y] == 99) // /* 0 - мимо 33 - попал 99 - убил*/
			{
				REDERRORPLAYER2();
			}
		}
		if(gameXod == 2)
		{
			if(codeBlock[x][y] == 44)
			{
				codeBlock[x][y] = 33; //попал 
				hitsPlayer2++;
				hit(x,y);
				killcheck(x,y);
				InfoGameEnd.innerHTML = '<h2 style="color:red">Игрок 2 попал</h2>';
				return winnerChecker();
			}
			if(codeBlock[x][y] == 101)
			{
				codeBlock[x][y] = 0;//мимо
				gameXod = 1;
				missed(x,y);
				InfoGameEnd.innerHTML = '<h2 style="color:red">Промах, ход Игрока 1</h2>';
				document.getElementById("table2").className = "early_access_header_whiteRight";
				SILVERPLAYER2();
				return winnerChecker();
			}
			if(codeBlock[x][y] == 0 || codeBlock[x][y] == 33 || codeBlock[x][y] == 99) // /* 0 - мимо 33 - попал 99 - убил*/
			{
				REDERRORPLAYER1();
			}
		}

}

function hit(x,y)//попадание
{
		if (x==5&&y==5){image_a55.src = icon[4];}
	else if (x==5&&y==6){image_a56.src = icon[4];}
	else if (x==5&&y==7){image_a57.src = icon[4];}
	else if (x==5&&y==8){image_a58.src = icon[4];}
	else if (x==5&&y==9){image_a59.src = icon[4];}
	else if (x==5&&y==10){image_a510.src = icon[4];}
	else if (x==5&&y==11){image_a511.src = icon[4];}
	else if (x==5&&y==12){image_a512.src = icon[4];}
	else if (x==5&&y==13){image_a513.src = icon[4];}
	else if (x==5&&y==14){image_a514.src = icon[4];}


	else if (x==6&&y==5){image_a65.src = icon[4];}
	else if (x==6&&y==6){image_a66.src = icon[4];}
	else if (x==6&&y==7){image_a67.src = icon[4];}
	else if (x==6&&y==8){image_a68.src = icon[4];}
	else if (x==6&&y==9){image_a69.src = icon[4];}
	else if (x==6&&y==10){image_a610.src = icon[4];}
	else if (x==6&&y==11){image_a611.src = icon[4];}
	else if (x==6&&y==12){image_a612.src = icon[4];}
	else if (x==6&&y==13){image_a613.src = icon[4];}
	else if (x==6&&y==14){image_a614.src = icon[4];}


	else if (x==7&&y==5){image_a75.src = icon[4];}
	else if (x==7&&y==6){image_a76.src = icon[4];}
	else if (x==7&&y==7){image_a77.src = icon[4];}
	else if (x==7&&y==8){image_a78.src = icon[4];}
	else if (x==7&&y==9){image_a79.src = icon[4];}
	else if (x==7&&y==10){image_a710.src = icon[4];}
	else if (x==7&&y==11){image_a711.src = icon[4];}
	else if (x==7&&y==12){image_a712.src = icon[4];}
	else if (x==7&&y==13){image_a713.src = icon[4];}
	else if (x==7&&y==14){image_a714.src = icon[4];}


	else if (x==8&&y==5){image_a85.src = icon[4];}
	else if (x==8&&y==6){image_a86.src = icon[4];}
	else if (x==8&&y==7){image_a87.src = icon[4];}
	else if (x==8&&y==8){image_a88.src = icon[4];}
	else if (x==8&&y==9){image_a89.src = icon[4];}
	else if (x==8&&y==10){image_a810.src = icon[4];}
	else if (x==8&&y==11){image_a811.src = icon[4];}
	else if (x==8&&y==12){image_a812.src = icon[4];}
	else if (x==8&&y==13){image_a813.src = icon[4];}
	else if (x==8&&y==14){image_a814.src = icon[4];}


	else if (x==9&&y==5){image_a95.src = icon[4];}
	else if (x==9&&y==6){image_a96.src = icon[4];}
	else if (x==9&&y==7){image_a97.src = icon[4];}
	else if (x==9&&y==8){image_a98.src = icon[4];}
	else if (x==9&&y==9){image_a99.src = icon[4];}
	else if (x==9&&y==10){image_a910.src = icon[4];}
	else if (x==9&&y==11){image_a911.src = icon[4];}
	else if (x==9&&y==12){image_a912.src = icon[4];}
	else if (x==9&&y==13){image_a913.src = icon[4];}
	else if (x==9&&y==14){image_a914.src = icon[4];}


	else if (x==10&&y==5){image_a105.src = icon[4];}
	else if (x==10&&y==6){image_a106.src = icon[4];}
	else if (x==10&&y==7){image_a107.src = icon[4];}
	else if (x==10&&y==8){image_a108.src = icon[4];}
	else if (x==10&&y==9){image_a109.src = icon[4];}
	else if (x==10&&y==10){image_a1010.src = icon[4];}
	else if (x==10&&y==11){image_a1011.src = icon[4];}
	else if (x==10&&y==12){image_a1012.src = icon[4];}
	else if (x==10&&y==13){image_a1013.src = icon[4];}
	else if (x==10&&y==14){image_a1014.src = icon[4];}


	else if (x==11&&y==5){image_a115.src = icon[4];}
	else if (x==11&&y==6){image_a116.src = icon[4];}
	else if (x==11&&y==7){image_a117.src = icon[4];}
	else if (x==11&&y==8){image_a118.src = icon[4];}
	else if (x==11&&y==9){image_a119.src = icon[4];}
	else if (x==11&&y==10){image_a1110.src = icon[4];}
	else if (x==11&&y==11){image_a1111.src = icon[4];}
	else if (x==11&&y==12){image_a1112.src = icon[4];}
	else if (x==11&&y==13){image_a1113.src = icon[4];}
	else if (x==11&&y==14){image_a1114.src = icon[4];}


	else if (x==12&&y==5){image_a125.src = icon[4];}
	else if (x==12&&y==6){image_a126.src = icon[4];}
	else if (x==12&&y==7){image_a127.src = icon[4];}
	else if (x==12&&y==8){image_a128.src = icon[4];}
	else if (x==12&&y==9){image_a129.src = icon[4];}
	else if (x==12&&y==10){image_a1210.src = icon[4];}
	else if (x==12&&y==11){image_a1211.src = icon[4];}
	else if (x==12&&y==12){image_a1212.src = icon[4];}
	else if (x==12&&y==13){image_a1213.src = icon[4];}
	else if (x==12&&y==14){image_a1214.src = icon[4];}


	else if (x==13&&y==5){image_a135.src = icon[4];}
	else if (x==13&&y==6){image_a136.src = icon[4];}
	else if (x==13&&y==7){image_a137.src = icon[4];}
	else if (x==13&&y==8){image_a138.src = icon[4];}
	else if (x==13&&y==9){image_a139.src = icon[4];}
	else if (x==13&&y==10){image_a1310.src = icon[4];}
	else if (x==13&&y==11){image_a1311.src = icon[4];}
	else if (x==13&&y==12){image_a1312.src = icon[4];}
	else if (x==13&&y==13){image_a1313.src = icon[4];}
	else if (x==13&&y==14){image_a1314.src = icon[4];}


	else if (x==14&&y==5){image_a145.src = icon[4];}
	else if (x==14&&y==6){image_a146.src = icon[4];}
	else if (x==14&&y==7){image_a147.src = icon[4];}
	else if (x==14&&y==8){image_a148.src = icon[4];}
	else if (x==14&&y==9){image_a149.src = icon[4];}
	else if (x==14&&y==10){image_a1410.src = icon[4];}
	else if (x==14&&y==11){image_a1411.src = icon[4];}
	else if (x==14&&y==12){image_a1412.src = icon[4];}
	else if (x==14&&y==13){image_a1413.src = icon[4];}
	else if (x==14&&y==14){image_a1414.src = icon[4];}
	
	cornerMissed(x,y);
}
function kill(x,y)//уничтожение
{
		if (x==5&&y==5){image_a55.src = icon[5];}
	else if (x==5&&y==6){image_a56.src = icon[5];}
	else if (x==5&&y==7){image_a57.src = icon[5];}
	else if (x==5&&y==8){image_a58.src = icon[5];}
	else if (x==5&&y==9){image_a59.src = icon[5];}
	else if (x==5&&y==10){image_a510.src = icon[5];}
	else if (x==5&&y==11){image_a511.src = icon[5];}
	else if (x==5&&y==12){image_a512.src = icon[5];}
	else if (x==5&&y==13){image_a513.src = icon[5];}
	else if (x==5&&y==14){image_a514.src = icon[5];}


	else if (x==6&&y==5){image_a65.src = icon[5];}
	else if (x==6&&y==6){image_a66.src = icon[5];}
	else if (x==6&&y==7){image_a67.src = icon[5];}
	else if (x==6&&y==8){image_a68.src = icon[5];}
	else if (x==6&&y==9){image_a69.src = icon[5];}
	else if (x==6&&y==10){image_a610.src = icon[5];}
	else if (x==6&&y==11){image_a611.src = icon[5];}
	else if (x==6&&y==12){image_a612.src = icon[5];}
	else if (x==6&&y==13){image_a613.src = icon[5];}
	else if (x==6&&y==14){image_a614.src = icon[5];}


	else if (x==7&&y==5){image_a75.src = icon[5];}
	else if (x==7&&y==6){image_a76.src = icon[5];}
	else if (x==7&&y==7){image_a77.src = icon[5];}
	else if (x==7&&y==8){image_a78.src = icon[5];}
	else if (x==7&&y==9){image_a79.src = icon[5];}
	else if (x==7&&y==10){image_a710.src = icon[5];}
	else if (x==7&&y==11){image_a711.src = icon[5];}
	else if (x==7&&y==12){image_a712.src = icon[5];}
	else if (x==7&&y==13){image_a713.src = icon[5];}
	else if (x==7&&y==14){image_a714.src = icon[5];}


	else if (x==8&&y==5){image_a85.src = icon[5];}
	else if (x==8&&y==6){image_a86.src = icon[5];}
	else if (x==8&&y==7){image_a87.src = icon[5];}
	else if (x==8&&y==8){image_a88.src = icon[5];}
	else if (x==8&&y==9){image_a89.src = icon[5];}
	else if (x==8&&y==10){image_a810.src = icon[5];}
	else if (x==8&&y==11){image_a811.src = icon[5];}
	else if (x==8&&y==12){image_a812.src = icon[5];}
	else if (x==8&&y==13){image_a813.src = icon[5];}
	else if (x==8&&y==14){image_a814.src = icon[5];}


	else if (x==9&&y==5){image_a95.src = icon[5];}
	else if (x==9&&y==6){image_a96.src = icon[5];}
	else if (x==9&&y==7){image_a97.src = icon[5];}
	else if (x==9&&y==8){image_a98.src = icon[5];}
	else if (x==9&&y==9){image_a99.src = icon[5];}
	else if (x==9&&y==10){image_a910.src = icon[5];}
	else if (x==9&&y==11){image_a911.src = icon[5];}
	else if (x==9&&y==12){image_a912.src = icon[5];}
	else if (x==9&&y==13){image_a913.src = icon[5];}
	else if (x==9&&y==14){image_a914.src = icon[5];}


	else if (x==10&&y==5){image_a105.src = icon[5];}
	else if (x==10&&y==6){image_a106.src = icon[5];}
	else if (x==10&&y==7){image_a107.src = icon[5];}
	else if (x==10&&y==8){image_a108.src = icon[5];}
	else if (x==10&&y==9){image_a109.src = icon[5];}
	else if (x==10&&y==10){image_a1010.src = icon[5];}
	else if (x==10&&y==11){image_a1011.src = icon[5];}
	else if (x==10&&y==12){image_a1012.src = icon[5];}
	else if (x==10&&y==13){image_a1013.src = icon[5];}
	else if (x==10&&y==14){image_a1014.src = icon[5];}


	else if (x==11&&y==5){image_a115.src = icon[5];}
	else if (x==11&&y==6){image_a116.src = icon[5];}
	else if (x==11&&y==7){image_a117.src = icon[5];}
	else if (x==11&&y==8){image_a118.src = icon[5];}
	else if (x==11&&y==9){image_a119.src = icon[5];}
	else if (x==11&&y==10){image_a1110.src = icon[5];}
	else if (x==11&&y==11){image_a1111.src = icon[5];}
	else if (x==11&&y==12){image_a1112.src = icon[5];}
	else if (x==11&&y==13){image_a1113.src = icon[5];}
	else if (x==11&&y==14){image_a1114.src = icon[5];}


	else if (x==12&&y==5){image_a125.src = icon[5];}
	else if (x==12&&y==6){image_a126.src = icon[5];}
	else if (x==12&&y==7){image_a127.src = icon[5];}
	else if (x==12&&y==8){image_a128.src = icon[5];}
	else if (x==12&&y==9){image_a129.src = icon[5];}
	else if (x==12&&y==10){image_a1210.src = icon[5];}
	else if (x==12&&y==11){image_a1211.src = icon[5];}
	else if (x==12&&y==12){image_a1212.src = icon[5];}
	else if (x==12&&y==13){image_a1213.src = icon[5];}
	else if (x==12&&y==14){image_a1214.src = icon[5];}


	else if (x==13&&y==5){image_a135.src = icon[5];}
	else if (x==13&&y==6){image_a136.src = icon[5];}
	else if (x==13&&y==7){image_a137.src = icon[5];}
	else if (x==13&&y==8){image_a138.src = icon[5];}
	else if (x==13&&y==9){image_a139.src = icon[5];}
	else if (x==13&&y==10){image_a1310.src = icon[5];}
	else if (x==13&&y==11){image_a1311.src = icon[5];}
	else if (x==13&&y==12){image_a1312.src = icon[5];}
	else if (x==13&&y==13){image_a1313.src = icon[5];}
	else if (x==13&&y==14){image_a1314.src = icon[5];}


	else if (x==14&&y==5){image_a145.src = icon[5];}
	else if (x==14&&y==6){image_a146.src = icon[5];}
	else if (x==14&&y==7){image_a147.src = icon[5];}
	else if (x==14&&y==8){image_a148.src = icon[5];}
	else if (x==14&&y==9){image_a149.src = icon[5];}
	else if (x==14&&y==10){image_a1410.src = icon[5];}
	else if (x==14&&y==11){image_a1411.src = icon[5];}
	else if (x==14&&y==12){image_a1412.src = icon[5];}
	else if (x==14&&y==13){image_a1413.src = icon[5];}
	else if (x==14&&y==14){image_a1414.src = icon[5];}
}

function killP2(x,y)//уничтожение
{
		if (x==5&&y==5){image_b55.src = icon[5];}
	else if (x==5&&y==6){image_b56.src = icon[5];}
	else if (x==5&&y==7){image_b57.src = icon[5];}
	else if (x==5&&y==8){image_b58.src = icon[5];}
	else if (x==5&&y==9){image_b59.src = icon[5];}
	else if (x==5&&y==10){image_b510.src = icon[5];}
	else if (x==5&&y==11){image_b511.src = icon[5];}
	else if (x==5&&y==12){image_b512.src = icon[5];}
	else if (x==5&&y==13){image_b513.src = icon[5];}
	else if (x==5&&y==14){image_b514.src = icon[5];}


	else if (x==6&&y==5){image_b65.src = icon[5];}
	else if (x==6&&y==6){image_b66.src = icon[5];}
	else if (x==6&&y==7){image_b67.src = icon[5];}
	else if (x==6&&y==8){image_b68.src = icon[5];}
	else if (x==6&&y==9){image_b69.src = icon[5];}
	else if (x==6&&y==10){image_b610.src = icon[5];}
	else if (x==6&&y==11){image_b611.src = icon[5];}
	else if (x==6&&y==12){image_b612.src = icon[5];}
	else if (x==6&&y==13){image_b613.src = icon[5];}
	else if (x==6&&y==14){image_b614.src = icon[5];}


	else if (x==7&&y==5){image_b75.src = icon[5];}
	else if (x==7&&y==6){image_b76.src = icon[5];}
	else if (x==7&&y==7){image_b77.src = icon[5];}
	else if (x==7&&y==8){image_b78.src = icon[5];}
	else if (x==7&&y==9){image_b79.src = icon[5];}
	else if (x==7&&y==10){image_b710.src = icon[5];}
	else if (x==7&&y==11){image_b711.src = icon[5];}
	else if (x==7&&y==12){image_b712.src = icon[5];}
	else if (x==7&&y==13){image_b713.src = icon[5];}
	else if (x==7&&y==14){image_b714.src = icon[5];}


	else if (x==8&&y==5){image_b85.src = icon[5];}
	else if (x==8&&y==6){image_b86.src = icon[5];}
	else if (x==8&&y==7){image_b87.src = icon[5];}
	else if (x==8&&y==8){image_b88.src = icon[5];}
	else if (x==8&&y==9){image_b89.src = icon[5];}
	else if (x==8&&y==10){image_b810.src = icon[5];}
	else if (x==8&&y==11){image_b811.src = icon[5];}
	else if (x==8&&y==12){image_b812.src = icon[5];}
	else if (x==8&&y==13){image_b813.src = icon[5];}
	else if (x==8&&y==14){image_b814.src = icon[5];}


	else if (x==9&&y==5){image_b95.src = icon[5];}
	else if (x==9&&y==6){image_b96.src = icon[5];}
	else if (x==9&&y==7){image_b97.src = icon[5];}
	else if (x==9&&y==8){image_b98.src = icon[5];}
	else if (x==9&&y==9){image_b99.src = icon[5];}
	else if (x==9&&y==10){image_b910.src = icon[5];}
	else if (x==9&&y==11){image_b911.src = icon[5];}
	else if (x==9&&y==12){image_b912.src = icon[5];}
	else if (x==9&&y==13){image_b913.src = icon[5];}
	else if (x==9&&y==14){image_b914.src = icon[5];}


	else if (x==10&&y==5){image_b105.src = icon[5];}
	else if (x==10&&y==6){image_b106.src = icon[5];}
	else if (x==10&&y==7){image_b107.src = icon[5];}
	else if (x==10&&y==8){image_b108.src = icon[5];}
	else if (x==10&&y==9){image_b109.src = icon[5];}
	else if (x==10&&y==10){image_b1010.src = icon[5];}
	else if (x==10&&y==11){image_b1011.src = icon[5];}
	else if (x==10&&y==12){image_b1012.src = icon[5];}
	else if (x==10&&y==13){image_b1013.src = icon[5];}
	else if (x==10&&y==14){image_b1014.src = icon[5];}


	else if (x==11&&y==5){image_b115.src = icon[5];}
	else if (x==11&&y==6){image_b116.src = icon[5];}
	else if (x==11&&y==7){image_b117.src = icon[5];}
	else if (x==11&&y==8){image_b118.src = icon[5];}
	else if (x==11&&y==9){image_b119.src = icon[5];}
	else if (x==11&&y==10){image_b1110.src = icon[5];}
	else if (x==11&&y==11){image_b1111.src = icon[5];}
	else if (x==11&&y==12){image_b1112.src = icon[5];}
	else if (x==11&&y==13){image_b1113.src = icon[5];}
	else if (x==11&&y==14){image_b1114.src = icon[5];}


	else if (x==12&&y==5){image_b125.src = icon[5];}
	else if (x==12&&y==6){image_b126.src = icon[5];}
	else if (x==12&&y==7){image_b127.src = icon[5];}
	else if (x==12&&y==8){image_b128.src = icon[5];}
	else if (x==12&&y==9){image_b129.src = icon[5];}
	else if (x==12&&y==10){image_b1210.src = icon[5];}
	else if (x==12&&y==11){image_b1211.src = icon[5];}
	else if (x==12&&y==12){image_b1212.src = icon[5];}
	else if (x==12&&y==13){image_b1213.src = icon[5];}
	else if (x==12&&y==14){image_b1214.src = icon[5];}


	else if (x==13&&y==5){image_b135.src = icon[5];}
	else if (x==13&&y==6){image_b136.src = icon[5];}
	else if (x==13&&y==7){image_b137.src = icon[5];}
	else if (x==13&&y==8){image_b138.src = icon[5];}
	else if (x==13&&y==9){image_b139.src = icon[5];}
	else if (x==13&&y==10){image_b1310.src = icon[5];}
	else if (x==13&&y==11){image_b1311.src = icon[5];}
	else if (x==13&&y==12){image_b1312.src = icon[5];}
	else if (x==13&&y==13){image_b1313.src = icon[5];}
	else if (x==13&&y==14){image_b1314.src = icon[5];}


	else if (x==14&&y==5){image_b145.src = icon[5];}
	else if (x==14&&y==6){image_b146.src = icon[5];}
	else if (x==14&&y==7){image_b147.src = icon[5];}
	else if (x==14&&y==8){image_b148.src = icon[5];}
	else if (x==14&&y==9){image_b149.src = icon[5];}
	else if (x==14&&y==10){image_b1410.src = icon[5];}
	else if (x==14&&y==11){image_b1411.src = icon[5];}
	else if (x==14&&y==12){image_b1412.src = icon[5];}
	else if (x==14&&y==13){image_b1413.src = icon[5];}
	else if (x==14&&y==14){image_b1414.src = icon[5];}
}
/* Кодировка:*/
/* 101 - пусто */
/* 44 - есть корабль*/
/* 33 - попал */
/* 0 - мимо */
/* 99 - убил*/
function killcheck(x,y)//меняет рисунки попадания на уничтожение
{//строка 1952
	//направо и налево 4-ка, с постоянным смещением
	if((codeBlock[x][y-1] == 101 || codeBlock[x][y-1] == 0) && 
		codeBlock[x][y] == 33 && codeBlock[x][y+1] == 33 && codeBlock[x][y+2] == 33 && codeBlock[x][y+3] == 33 &&
		(codeBlock[x][y+4] == 101 || codeBlock[x][y+4] == 0))
		{
			codeBlock[x][y-1] = 0; missed(x,y-1);
			codeBlock[x][y] = 99; kill(x,y);
			codeBlock[x][y+1] = 99; kill(x,y+1);
			codeBlock[x][y+2] = 99; kill(x,y+2);
			codeBlock[x][y+3] = 99; kill(x,y+3);
			codeBlock[x][y+4] = 0; missed(x,y+4);
		}
	if((codeBlock[x][y-2] == 101 || codeBlock[x][y-2] == 0) &&
		codeBlock[x][y-1] == 33 && codeBlock[x][y] == 33 && codeBlock[x][y+1] == 33 && codeBlock[x][y+2] == 33 &&
		(codeBlock[x][y+3] == 101 || codeBlock[x][y+3] == 0))
		{
			codeBlock[x][y-2] = 0; missed(x,y-2);
			codeBlock[x][y-1] = 99; kill(x,y-1);
			codeBlock[x][y] = 99; kill(x,y);
			codeBlock[x][y+1] = 99; kill(x,y+1);
			codeBlock[x][y+2] = 99; kill(x,y+2);
			codeBlock[x][y+3] = 0; missed(x,y+3);
		}
	if((codeBlock[x][y-3] == 101 || codeBlock[x][y-3] == 0) &&
		codeBlock[x][y-2] == 33 && codeBlock[x][y-1] == 33 && codeBlock[x][y] == 33 && codeBlock[x][y+1] == 33 &&
		(codeBlock[x][y+2] == 101 || codeBlock[x][y+2] == 0))
		{
			codeBlock[x][y-3] = 0; missed(x,y-3);
			codeBlock[x][y-2] = 99; kill(x,y-2);
			codeBlock[x][y-1] = 99; kill(x,y-1);
			codeBlock[x][y] = 99; kill(x,y);
			codeBlock[x][y+1] = 99; kill(x,y+1);
			codeBlock[x][y+2] = 0; missed(x,y+2);
		}
	if((codeBlock[x][y-4] == 101 || codeBlock[x][y-4] == 0) &&
		codeBlock[x][y-3] == 33 && codeBlock[x][y-2] == 33 && codeBlock[x][y-1] == 33 && codeBlock[x][y] == 33 &&
		(codeBlock[x][y+1] == 101 || codeBlock[x][y+1] == 0))
		{
			codeBlock[x][y-4] = 0; missed(x,y-4);
			codeBlock[x][y-3] = 99; kill(x,y-3);
			codeBlock[x][y-2] = 99; kill(x,y-2);
			codeBlock[x][y-1] = 99; kill(x,y-1);
			codeBlock[x][y] = 99; kill(x,y);
			codeBlock[x][y+1] = 0; missed(x,y+1);
		}
//вверх и вниз 4-ка
	if((codeBlock[x-1][y] == 101 || codeBlock[x-1][y] == 0) && 
		codeBlock[x][y] == 33 && codeBlock[x+1][y] == 33 && codeBlock[x+2][y] == 33 && codeBlock[x+3][y] == 33 &&
		(codeBlock[x+4][y] == 101 || codeBlock[x+4][y] == 0))
		{
			codeBlock[x-1][y] = 0; missed(x-1,y);
			codeBlock[x][y] = 99; kill(x,y);
			codeBlock[x+1][y] = 99; kill(x+1,y);
			codeBlock[x+2][y] = 99; kill(x+2,y);
			codeBlock[x+3][y] = 99; kill(x+3,y);
			codeBlock[x+4][y] = 0; missed(x+4,y);
		}
	if((codeBlock[x-2][y] == 101 || codeBlock[x-2][y] == 0) &&
		codeBlock[x-1][y] == 33 && codeBlock[x][y] == 33 && codeBlock[x+1][y] == 33 && codeBlock[x+2][y] == 33 &&
		(codeBlock[x+3][y] == 101 || codeBlock[x+3][y] == 0))
		{
			codeBlock[x-2][y] = 0; missed(x-2,y);
			codeBlock[x-1][y] = 99; kill(x-1,y);
			codeBlock[x][y] = 99; kill(x,y);
			codeBlock[x+1][y] = 99; kill(x+1,y);
			codeBlock[x+2][y] = 99; kill(x+2,y);
			codeBlock[x+3][y] = 0; missed(x+3,y);
		}
	if((codeBlock[x-3][y] == 101 || codeBlock[x-3][y] == 0) &&
		codeBlock[x-2][y] == 33 && codeBlock[x-1][y] == 33 && codeBlock[x][y] == 33 && codeBlock[x+1][y] == 33 &&
		(codeBlock[x+2][y] == 101 || codeBlock[x+2][y] == 0))
		{
			codeBlock[x-3][y] = 0; missed(x-3,y);
			codeBlock[x-2][y] = 99; kill(x-2,y);
			codeBlock[x-1][y] = 99; kill(x-1,y);
			codeBlock[x][y] = 99; kill(x,y);
			codeBlock[x+1][y] = 99; kill(x+1,y);
			codeBlock[x+2][y] = 0; missed(x+2,y);
		}
	if((codeBlock[x-4][y] == 101 || codeBlock[x-4][y] == 0) &&
		codeBlock[x-3][y] == 33 && codeBlock[x-2][y] == 33 && codeBlock[x-1][y] == 33 && codeBlock[x][y] == 33 &&
		(codeBlock[x+1][y] == 101 || codeBlock[x+1][y] == 0))
		{
			codeBlock[x-4][y] = 0; missed(x-4,y);
			codeBlock[x-3][y] = 99; kill(x-3,y);
			codeBlock[x-2][y] = 99; kill(x-2,y);
			codeBlock[x-1][y] = 99; kill(x-1,y);
			codeBlock[x][y] = 99; kill(x,y);
			codeBlock[x+1][y] = 0; missed(x+1,y);
		}
		
//направо и налево 3-ка, с постоянным смещением
	if((codeBlock[x][y-1] == 101 || codeBlock[x][y-1] == 0) && 
		codeBlock[x][y] == 33 && codeBlock[x][y+1] == 33 && codeBlock[x][y+2] == 33  &&
		(codeBlock[x][y+3] == 101 || codeBlock[x][y+3] == 0))
		{
			codeBlock[x][y-1] = 0; missed(x,y-1);
			codeBlock[x][y] = 99; kill(x,y);
			codeBlock[x][y+1] = 99; kill(x,y+1);
			codeBlock[x][y+2] = 99; kill(x,y+2);
			codeBlock[x][y+3] = 0; missed(x,y+3);
		}
	if((codeBlock[x][y-2] == 101 || codeBlock[x][y-2] == 0) &&
		codeBlock[x][y-1] == 33 && codeBlock[x][y] == 33 && codeBlock[x][y+1] == 33 &&
		(codeBlock[x][y+2] == 101 || codeBlock[x][y+2] == 0))
		{
			codeBlock[x][y-2] = 0; missed(x,y-2);
			codeBlock[x][y-1] = 99; kill(x,y-1);
			codeBlock[x][y] = 99; kill(x,y);
			codeBlock[x][y+1] = 99; kill(x,y+1);
			codeBlock[x][y+2] = 0; missed(x,y+2);
		}
	if((codeBlock[x][y-3] == 101 || codeBlock[x][y-3] == 0) &&
		codeBlock[x][y-2] == 33 && codeBlock[x][y-1] == 33 && codeBlock[x][y] == 33 &&
		(codeBlock[x][y+1] == 101 || codeBlock[x][y+1] == 0))
		{
			codeBlock[x][y-3] = 0; missed(x,y-3);
			codeBlock[x][y-2] = 99; kill(x,y-2);
			codeBlock[x][y-1] = 99; kill(x,y-1);
			codeBlock[x][y] = 99; kill(x,y);
			codeBlock[x][y+1] = 0; missed(x,y+1);
		}
	//вверх и вниз 3-ка
		if((codeBlock[x-1][y] == 101 || codeBlock[x-1][y] == 0) && 
		codeBlock[x][y] == 33 && codeBlock[x+1][y] == 33 && codeBlock[x+2][y] == 33 && 
		(codeBlock[x+3][y] == 101 || codeBlock[x+3][y] == 0))
		{
			codeBlock[x-1][y] = 0; missed(x-1,y);
			codeBlock[x][y] = 99; kill(x,y);
			codeBlock[x+1][y] = 99; kill(x+1,y);
			codeBlock[x+2][y] = 99; kill(x+2,y);
			codeBlock[x+3][y] = 0; missed(x+3,y);
		}	
	if((codeBlock[x-2][y] == 101 || codeBlock[x-2][y] == 0) &&
		codeBlock[x-1][y] == 33 && codeBlock[x][y] == 33 && codeBlock[x+1][y] == 33 &&
		(codeBlock[x+2][y] == 101 || codeBlock[x+2][y] == 0))
		{
			codeBlock[x-2][y] = 0; missed(x-2,y);
			codeBlock[x-1][y] = 99; kill(x-1,y);
			codeBlock[x][y] = 99; kill(x,y);
			codeBlock[x+1][y] = 99; kill(x+1,y);
			codeBlock[x+2][y] = 0; missed(x+2,y);
		}
	if((codeBlock[x-3][y] == 101 || codeBlock[x-3][y] == 0) &&
		codeBlock[x-2][y] == 33 && codeBlock[x-1][y] == 33 && codeBlock[x][y] == 33 &&
		(codeBlock[x+1][y] == 101 || codeBlock[x+1][y] == 0))
		{
			codeBlock[x-3][y] = 0; missed(x-3,y);
			codeBlock[x-2][y] = 99; kill(x-2,y);
			codeBlock[x-1][y] = 99; kill(x-1,y);
			codeBlock[x][y] = 99; kill(x,y);
			codeBlock[x+1][y] = 0; missed(x+1,y);
		}
//направо и налево 2-ка, с постоянным смещением
	if((codeBlock[x][y-1] == 101 || codeBlock[x][y-1] == 0) && 
		codeBlock[x][y] == 33 && codeBlock[x][y+1] == 33 &&
		(codeBlock[x][y+2] == 101 || codeBlock[x][y+2] == 0))
		{
			codeBlock[x][y-1] = 0; missed(x,y-1);
			codeBlock[x][y] = 99; kill(x,y);
			codeBlock[x][y+1] = 99; kill(x,y+1);
			codeBlock[x][y+2] = 0; missed(x,y+2);
		}
	if((codeBlock[x][y-2] == 101 || codeBlock[x][y-2] == 0) &&
		codeBlock[x][y-1] == 33 && codeBlock[x][y] == 33 &&
		(codeBlock[x][y+1] == 101 || codeBlock[x][y+1] == 0))
		{
			codeBlock[x][y-2] = 0; missed(x,y-2);
			codeBlock[x][y-1] = 99; kill(x,y-1);
			codeBlock[x][y] = 99; kill(x,y);
			codeBlock[x][y+1] = 0; missed(x,y+1);
		}
//вверх и вниз 2-ка
		if((codeBlock[x-1][y] == 101 || codeBlock[x-1][y] == 0) && 
		codeBlock[x][y] == 33 && codeBlock[x+1][y] == 33 && 
		(codeBlock[x+2][y] == 101 || codeBlock[x+2][y] == 0))
		{
			codeBlock[x-1][y] = 0; missed(x-1,y);
			codeBlock[x][y] = 99; kill(x,y);
			codeBlock[x+1][y] = 99; kill(x+1,y);
			codeBlock[x+2][y] = 0; missed(x+2,y);
		}
	if((codeBlock[x-2][y] == 101 || codeBlock[x-2][y] == 0) &&
		codeBlock[x-1][y] == 33 && codeBlock[x][y] == 33 &&
		(codeBlock[x+1][y] == 101 || codeBlock[x+1][y] == 0))
		{
			codeBlock[x-2][y] = 0; missed(x-2,y);
			codeBlock[x-1][y] = 99; kill(x-1,y);
			codeBlock[x][y] = 99; kill(x,y);
			codeBlock[x+1][y] = 0; missed(x+1,y);
		}
// 1-ка
	if((codeBlock[x-1][y-1]	== 101 || codeBlock[x-1][y-1]	== 0) &&
		(codeBlock[x-1][y]	== 101 || codeBlock[x-1][y]		== 0) &&
		(codeBlock[x-1][y+1]== 101 || codeBlock[x-1][y+1]	== 0) &&
		(codeBlock[x][y+1]	== 101 || codeBlock[x][y+1]		== 0) &&
		(codeBlock[x+1][y+1]== 101 || codeBlock[x+1][y+1]	== 0) &&
		(codeBlock[x+1][y]	== 101 || codeBlock[x+1][y]		== 0) &&
		(codeBlock[x+1][y-1]== 101 || codeBlock[x+1][y-1]	== 0) &&
		(codeBlock[x][y-1]	== 101 || codeBlock[x][y-1]		== 0) &&
		codeBlock[x][y] 	== 33)
		{
			codeBlock[x-1][y-1]	= 0; missed(x-1,y-1);
			codeBlock[x-1][y]	= 0; missed(x-1,y);
			codeBlock[x-1][y+1]	= 0; missed(x-1,y+1);
			codeBlock[x][y+1]	= 0; missed(x,y+1);
			codeBlock[x+1][y+1]	= 0; missed(x+1,y+1);
			codeBlock[x+1][y]	= 0; missed(x+1,y);
			codeBlock[x+1][y-1]	= 0; missed(x+1,y-1);
			codeBlock[x][y-1]	= 0; missed(x,y-1);

			codeBlock[x][y] = 99; kill(x,y);
		}
		
}

function killcheckP2(x,y)//меняет рисунки попадания на уничтожение
{//строка 1952
	//направо и налево 4-ка, с постоянным смещением
	if((codeBlockP2[x][y-1] == 101 || codeBlockP2[x][y-1] == 0) && 
		codeBlockP2[x][y] == 33 && codeBlockP2[x][y+1] == 33 && codeBlockP2[x][y+2] == 33 && codeBlockP2[x][y+3] == 33 &&
		(codeBlockP2[x][y+4] == 101 || codeBlockP2[x][y+4] == 0))
		{
			codeBlockP2[x][y-1] = 0; missedP2(x,y-1);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x][y+1] = 99; killP2(x,y+1);
			codeBlockP2[x][y+2] = 99; killP2(x,y+2);
			codeBlockP2[x][y+3] = 99; killP2(x,y+3);
			codeBlockP2[x][y+4] = 0; missedP2(x,y+4);
		}
	if((codeBlockP2[x][y-2] == 101 || codeBlockP2[x][y-2] == 0) &&
		codeBlockP2[x][y-1] == 33 && codeBlockP2[x][y] == 33 && codeBlockP2[x][y+1] == 33 && codeBlockP2[x][y+2] == 33 &&
		(codeBlockP2[x][y+3] == 101 || codeBlockP2[x][y+3] == 0))
		{
			codeBlockP2[x][y-2] = 0; missedP2(x,y-2);
			codeBlockP2[x][y-1] = 99; killP2(x,y-1);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x][y+1] = 99; killP2(x,y+1);
			codeBlockP2[x][y+2] = 99; killP2(x,y+2);
			codeBlockP2[x][y+3] = 0; missedP2(x,y+3);
		}
	if((codeBlockP2[x][y-3] == 101 || codeBlockP2[x][y-3] == 0) &&
		codeBlockP2[x][y-2] == 33 && codeBlockP2[x][y-1] == 33 && codeBlockP2[x][y] == 33 && codeBlockP2[x][y+1] == 33 &&
		(codeBlockP2[x][y+2] == 101 || codeBlockP2[x][y+2] == 0))
		{
			codeBlockP2[x][y-3] = 0; missedP2(x,y-3);
			codeBlockP2[x][y-2] = 99; killP2(x,y-2);
			codeBlockP2[x][y-1] = 99; killP2(x,y-1);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x][y+1] = 99; killP2(x,y+1);
			codeBlockP2[x][y+2] = 0; missedP2(x,y+2);
		}
	if((codeBlockP2[x][y-4] == 101 || codeBlockP2[x][y-4] == 0) &&
		codeBlockP2[x][y-3] == 33 && codeBlockP2[x][y-2] == 33 && codeBlockP2[x][y-1] == 33 && codeBlockP2[x][y] == 33 &&
		(codeBlockP2[x][y+1] == 101 || codeBlockP2[x][y+1] == 0))
		{
			codeBlockP2[x][y-4] = 0; missedP2(x,y-4);
			codeBlockP2[x][y-3] = 99; killP2(x,y-3);
			codeBlockP2[x][y-2] = 99; killP2(x,y-2);
			codeBlockP2[x][y-1] = 99; killP2(x,y-1);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x][y+1] = 0; missedP2(x,y+1);
		}
//вверх и вниз 4-ка
	if((codeBlockP2[x-1][y] == 101 || codeBlockP2[x-1][y] == 0) && 
		codeBlockP2[x][y] == 33 && codeBlockP2[x+1][y] == 33 && codeBlockP2[x+2][y] == 33 && codeBlockP2[x+3][y] == 33 &&
		(codeBlockP2[x+4][y] == 101 || codeBlockP2[x+4][y] == 0))
		{
			codeBlockP2[x-1][y] = 0; missedP2(x-1,y);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x+1][y] = 99; killP2(x+1,y);
			codeBlockP2[x+2][y] = 99; killP2(x+2,y);
			codeBlockP2[x+3][y] = 99; killP2(x+3,y);
			codeBlockP2[x+4][y] = 0; missedP2(x+4,y);
		}
	if((codeBlockP2[x-2][y] == 101 || codeBlockP2[x-2][y] == 0) &&
		codeBlockP2[x-1][y] == 33 && codeBlockP2[x][y] == 33 && codeBlockP2[x+1][y] == 33 && codeBlockP2[x+2][y] == 33 &&
		(codeBlockP2[x+3][y] == 101 || codeBlockP2[x+3][y] == 0))
		{
			codeBlockP2[x-2][y] = 0; missedP2(x-2,y);
			codeBlockP2[x-1][y] = 99; killP2(x-1,y);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x+1][y] = 99; killP2(x+1,y);
			codeBlockP2[x+2][y] = 99; killP2(x+2,y);
			codeBlockP2[x+3][y] = 0; missedP2(x+3,y);
		}
	if((codeBlockP2[x-3][y] == 101 || codeBlockP2[x-3][y] == 0) &&
		codeBlockP2[x-2][y] == 33 && codeBlockP2[x-1][y] == 33 && codeBlockP2[x][y] == 33 && codeBlockP2[x+1][y] == 33 &&
		(codeBlockP2[x+2][y] == 101 || codeBlockP2[x+2][y] == 0))
		{
			codeBlockP2[x-3][y] = 0; missedP2(x-3,y);
			codeBlockP2[x-2][y] = 99; killP2(x-2,y);
			codeBlockP2[x-1][y] = 99; killP2(x-1,y);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x+1][y] = 99; killP2(x+1,y);
			codeBlockP2[x+2][y] = 0; missedP2(x+2,y);
		}
	if((codeBlockP2[x-4][y] == 101 || codeBlockP2[x-4][y] == 0) &&
		codeBlockP2[x-3][y] == 33 && codeBlockP2[x-2][y] == 33 && codeBlockP2[x-1][y] == 33 && codeBlockP2[x][y] == 33 &&
		(codeBlockP2[x+1][y] == 101 || codeBlockP2[x+1][y] == 0))
		{
			codeBlockP2[x-4][y] = 0; missedP2(x-4,y);
			codeBlockP2[x-3][y] = 99; killP2(x-3,y);
			codeBlockP2[x-2][y] = 99; killP2(x-2,y);
			codeBlockP2[x-1][y] = 99; killP2(x-1,y);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x+1][y] = 0; missedP2(x+1,y);
		}
		
//направо и налево 3-ка, с постоянным смещением
	if((codeBlockP2[x][y-1] == 101 || codeBlockP2[x][y-1] == 0) && 
		codeBlockP2[x][y] == 33 && codeBlockP2[x][y+1] == 33 && codeBlockP2[x][y+2] == 33  &&
		(codeBlockP2[x][y+3] == 101 || codeBlockP2[x][y+3] == 0))
		{
			codeBlockP2[x][y-1] = 0; missedP2(x,y-1);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x][y+1] = 99; killP2(x,y+1);
			codeBlockP2[x][y+2] = 99; killP2(x,y+2);
			codeBlockP2[x][y+3] = 0; missedP2(x,y+3);
		}
	if((codeBlockP2[x][y-2] == 101 || codeBlockP2[x][y-2] == 0) &&
		codeBlockP2[x][y-1] == 33 && codeBlockP2[x][y] == 33 && codeBlockP2[x][y+1] == 33 &&
		(codeBlockP2[x][y+2] == 101 || codeBlockP2[x][y+2] == 0))
		{
			codeBlockP2[x][y-2] = 0; missedP2(x,y-2);
			codeBlockP2[x][y-1] = 99; killP2(x,y-1);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x][y+1] = 99; killP2(x,y+1);
			codeBlockP2[x][y+2] = 0; missedP2(x,y+2);
		}
	if((codeBlockP2[x][y-3] == 101 || codeBlockP2[x][y-3] == 0) &&
		codeBlockP2[x][y-2] == 33 && codeBlockP2[x][y-1] == 33 && codeBlockP2[x][y] == 33 &&
		(codeBlockP2[x][y+1] == 101 || codeBlockP2[x][y+1] == 0))
		{
			codeBlockP2[x][y-3] = 0; missedP2(x,y-3);
			codeBlockP2[x][y-2] = 99; killP2(x,y-2);
			codeBlockP2[x][y-1] = 99; killP2(x,y-1);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x][y+1] = 0; missedP2(x,y+1);
		}
	//вверх и вниз 3-ка
		if((codeBlockP2[x-1][y] == 101 || codeBlockP2[x-1][y] == 0) && 
		codeBlockP2[x][y] == 33 && codeBlockP2[x+1][y] == 33 && codeBlockP2[x+2][y] == 33 && 
		(codeBlockP2[x+3][y] == 101 || codeBlockP2[x+3][y] == 0))
		{
			codeBlockP2[x-1][y] = 0; missedP2(x-1,y);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x+1][y] = 99; killP2(x+1,y);
			codeBlockP2[x+2][y] = 99; killP2(x+2,y);
			codeBlockP2[x+3][y] = 0; missedP2(x+3,y);
		}	
	if((codeBlockP2[x-2][y] == 101 || codeBlockP2[x-2][y] == 0) &&
		codeBlockP2[x-1][y] == 33 && codeBlockP2[x][y] == 33 && codeBlockP2[x+1][y] == 33 &&
		(codeBlockP2[x+2][y] == 101 || codeBlockP2[x+2][y] == 0))
		{
			codeBlockP2[x-2][y] = 0; missedP2(x-2,y);
			codeBlockP2[x-1][y] = 99; killP2(x-1,y);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x+1][y] = 99; killP2(x+1,y);
			codeBlockP2[x+2][y] = 0; missedP2(x+2,y);
		}
	if((codeBlockP2[x-3][y] == 101 || codeBlockP2[x-3][y] == 0) &&
		codeBlockP2[x-2][y] == 33 && codeBlockP2[x-1][y] == 33 && codeBlockP2[x][y] == 33 &&
		(codeBlockP2[x+1][y] == 101 || codeBlockP2[x+1][y] == 0))
		{
			codeBlockP2[x-3][y] = 0; missedP2(x-3,y);
			codeBlockP2[x-2][y] = 99; killP2(x-2,y);
			codeBlockP2[x-1][y] = 99; killP2(x-1,y);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x+1][y] = 0; missedP2(x+1,y);
		}
//направо и налево 2-ка, с постоянным смещением
	if((codeBlockP2[x][y-1] == 101 || codeBlockP2[x][y-1] == 0) && 
		codeBlockP2[x][y] == 33 && codeBlockP2[x][y+1] == 33 &&
		(codeBlockP2[x][y+2] == 101 || codeBlockP2[x][y+2] == 0))
		{
			codeBlockP2[x][y-1] = 0; missedP2(x,y-1);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x][y+1] = 99; killP2(x,y+1);
			codeBlockP2[x][y+2] = 0; missedP2(x,y+2);
		}
	if((codeBlockP2[x][y-2] == 101 || codeBlockP2[x][y-2] == 0) &&
		codeBlockP2[x][y-1] == 33 && codeBlockP2[x][y] == 33 &&
		(codeBlockP2[x][y+1] == 101 || codeBlockP2[x][y+1] == 0))
		{
			codeBlockP2[x][y-2] = 0; missedP2(x,y-2);
			codeBlockP2[x][y-1] = 99; killP2(x,y-1);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x][y+1] = 0; missedP2(x,y+1);
		}
//вверх и вниз 2-ка
		if((codeBlockP2[x-1][y] == 101 || codeBlockP2[x-1][y] == 0) && 
		codeBlockP2[x][y] == 33 && codeBlockP2[x+1][y] == 33 && 
		(codeBlockP2[x+2][y] == 101 || codeBlockP2[x+2][y] == 0))
		{
			codeBlockP2[x-1][y] = 0; missedP2(x-1,y);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x+1][y] = 99; killP2(x+1,y);
			codeBlockP2[x+2][y] = 0; missedP2(x+2,y);
		}
	if((codeBlockP2[x-2][y] == 101 || codeBlockP2[x-2][y] == 0) &&
		codeBlockP2[x-1][y] == 33 && codeBlockP2[x][y] == 33 &&
		(codeBlockP2[x+1][y] == 101 || codeBlockP2[x+1][y] == 0))
		{
			codeBlockP2[x-2][y] = 0; missedP2(x-2,y);
			codeBlockP2[x-1][y] = 99; killP2(x-1,y);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x+1][y] = 0; missedP2(x+1,y);
		}
// 1-ка
	if((codeBlockP2[x-1][y-1]	== 101 || codeBlockP2[x-1][y-1]	== 0) &&
		(codeBlockP2[x-1][y]	== 101 || codeBlockP2[x-1][y]	== 0) &&
		(codeBlockP2[x-1][y+1]	== 101 || codeBlockP2[x-1][y+1]	== 0) &&
		(codeBlockP2[x][y+1]	== 101 || codeBlockP2[x][y+1]	== 0) &&
		(codeBlockP2[x+1][y+1]	== 101 || codeBlockP2[x+1][y+1]	== 0) &&
		(codeBlockP2[x+1][y]	== 101 || codeBlockP2[x+1][y]	== 0) &&
		(codeBlockP2[x+1][y-1]	== 101 || codeBlockP2[x+1][y-1]	== 0) &&
		(codeBlockP2[x][y-1]	== 101 || codeBlockP2[x][y-1]	== 0) &&
		codeBlockP2[x][y] 	== 33)
		{
			codeBlockP2[x-1][y-1]	= 0; missedP2(x-1,y-1);
			codeBlockP2[x-1][y]	= 0; missedP2(x-1,y);
			codeBlockP2[x-1][y+1]	= 0; missedP2(x-1,y+1);
			codeBlockP2[x][y+1]	= 0; missedP2(x,y+1);
			codeBlockP2[x+1][y+1]	= 0; missedP2(x+1,y+1);
			codeBlockP2[x+1][y]	= 0; missedP2(x+1,y);
			codeBlockP2[x+1][y-1]	= 0; missedP2(x+1,y-1);
			codeBlockP2[x][y-1]	= 0; missedP2(x,y-1);

			codeBlockP2[x][y] = 99; killP2(x,y);
		}
		
}

function cornerMissed(x,y)//мимо по углам
{
	missed(x-1,y+1); codeBlock[x-1][y+1] = 0;/* верхний правый (1)*/
    missed(x+1,y+1); codeBlock[x+1][y+1] = 0;/* нижний правый (2)*/
    missed(x+1,y-1); codeBlock[x+1][y-1] = 0;/* нижний левый (3)*/
	missed(x-1,y-1); codeBlock[x-1][y-1] = 0;/* верхний левый (4)*/
}

function missed(x,y)//мимо 
{
		if (x==5&&y==5){image_a55.src = icon[3];}
	else if (x==5&&y==6){image_a56.src = icon[3];}
	else if (x==5&&y==7){image_a57.src = icon[3];}
	else if (x==5&&y==8){image_a58.src = icon[3];}
	else if (x==5&&y==9){image_a59.src = icon[3];}
	else if (x==5&&y==10){image_a510.src = icon[3];}
	else if (x==5&&y==11){image_a511.src = icon[3];}
	else if (x==5&&y==12){image_a512.src = icon[3];}
	else if (x==5&&y==13){image_a513.src = icon[3];}
	else if (x==5&&y==14){image_a514.src = icon[3];}


	else if (x==6&&y==5){image_a65.src = icon[3];}
	else if (x==6&&y==6){image_a66.src = icon[3];}
	else if (x==6&&y==7){image_a67.src = icon[3];}
	else if (x==6&&y==8){image_a68.src = icon[3];}
	else if (x==6&&y==9){image_a69.src = icon[3];}
	else if (x==6&&y==10){image_a610.src = icon[3];}
	else if (x==6&&y==11){image_a611.src = icon[3];}
	else if (x==6&&y==12){image_a612.src = icon[3];}
	else if (x==6&&y==13){image_a613.src = icon[3];}
	else if (x==6&&y==14){image_a614.src = icon[3];}


	else if (x==7&&y==5){image_a75.src = icon[3];}
	else if (x==7&&y==6){image_a76.src = icon[3];}
	else if (x==7&&y==7){image_a77.src = icon[3];}
	else if (x==7&&y==8){image_a78.src = icon[3];}
	else if (x==7&&y==9){image_a79.src = icon[3];}
	else if (x==7&&y==10){image_a710.src = icon[3];}
	else if (x==7&&y==11){image_a711.src = icon[3];}
	else if (x==7&&y==12){image_a712.src = icon[3];}
	else if (x==7&&y==13){image_a713.src = icon[3];}
	else if (x==7&&y==14){image_a714.src = icon[3];}


	else if (x==8&&y==5){image_a85.src = icon[3];}
	else if (x==8&&y==6){image_a86.src = icon[3];}
	else if (x==8&&y==7){image_a87.src = icon[3];}
	else if (x==8&&y==8){image_a88.src = icon[3];}
	else if (x==8&&y==9){image_a89.src = icon[3];}
	else if (x==8&&y==10){image_a810.src = icon[3];}
	else if (x==8&&y==11){image_a811.src = icon[3];}
	else if (x==8&&y==12){image_a812.src = icon[3];}
	else if (x==8&&y==13){image_a813.src = icon[3];}
	else if (x==8&&y==14){image_a814.src = icon[3];}


	else if (x==9&&y==5){image_a95.src = icon[3];}
	else if (x==9&&y==6){image_a96.src = icon[3];}
	else if (x==9&&y==7){image_a97.src = icon[3];}
	else if (x==9&&y==8){image_a98.src = icon[3];}
	else if (x==9&&y==9){image_a99.src = icon[3];}
	else if (x==9&&y==10){image_a910.src = icon[3];}
	else if (x==9&&y==11){image_a911.src = icon[3];}
	else if (x==9&&y==12){image_a912.src = icon[3];}
	else if (x==9&&y==13){image_a913.src = icon[3];}
	else if (x==9&&y==14){image_a914.src = icon[3];}


	else if (x==10&&y==5){image_a105.src = icon[3];}
	else if (x==10&&y==6){image_a106.src = icon[3];}
	else if (x==10&&y==7){image_a107.src = icon[3];}
	else if (x==10&&y==8){image_a108.src = icon[3];}
	else if (x==10&&y==9){image_a109.src = icon[3];}
	else if (x==10&&y==10){image_a1010.src = icon[3];}
	else if (x==10&&y==11){image_a1011.src = icon[3];}
	else if (x==10&&y==12){image_a1012.src = icon[3];}
	else if (x==10&&y==13){image_a1013.src = icon[3];}
	else if (x==10&&y==14){image_a1014.src = icon[3];}


	else if (x==11&&y==5){image_a115.src = icon[3];}
	else if (x==11&&y==6){image_a116.src = icon[3];}
	else if (x==11&&y==7){image_a117.src = icon[3];}
	else if (x==11&&y==8){image_a118.src = icon[3];}
	else if (x==11&&y==9){image_a119.src = icon[3];}
	else if (x==11&&y==10){image_a1110.src = icon[3];}
	else if (x==11&&y==11){image_a1111.src = icon[3];}
	else if (x==11&&y==12){image_a1112.src = icon[3];}
	else if (x==11&&y==13){image_a1113.src = icon[3];}
	else if (x==11&&y==14){image_a1114.src = icon[3];}


	else if (x==12&&y==5){image_a125.src = icon[3];}
	else if (x==12&&y==6){image_a126.src = icon[3];}
	else if (x==12&&y==7){image_a127.src = icon[3];}
	else if (x==12&&y==8){image_a128.src = icon[3];}
	else if (x==12&&y==9){image_a129.src = icon[3];}
	else if (x==12&&y==10){image_a1210.src = icon[3];}
	else if (x==12&&y==11){image_a1211.src = icon[3];}
	else if (x==12&&y==12){image_a1212.src = icon[3];}
	else if (x==12&&y==13){image_a1213.src = icon[3];}
	else if (x==12&&y==14){image_a1214.src = icon[3];}


	else if (x==13&&y==5){image_a135.src = icon[3];}
	else if (x==13&&y==6){image_a136.src = icon[3];}
	else if (x==13&&y==7){image_a137.src = icon[3];}
	else if (x==13&&y==8){image_a138.src = icon[3];}
	else if (x==13&&y==9){image_a139.src = icon[3];}
	else if (x==13&&y==10){image_a1310.src = icon[3];}
	else if (x==13&&y==11){image_a1311.src = icon[3];}
	else if (x==13&&y==12){image_a1312.src = icon[3];}
	else if (x==13&&y==13){image_a1313.src = icon[3];}
	else if (x==13&&y==14){image_a1314.src = icon[3];}


	else if (x==14&&y==5){image_a145.src = icon[3];}
	else if (x==14&&y==6){image_a146.src = icon[3];}
	else if (x==14&&y==7){image_a147.src = icon[3];}
	else if (x==14&&y==8){image_a148.src = icon[3];}
	else if (x==14&&y==9){image_a149.src = icon[3];}
	else if (x==14&&y==10){image_a1410.src = icon[3];}
	else if (x==14&&y==11){image_a1411.src = icon[3];}
	else if (x==14&&y==12){image_a1412.src = icon[3];}
	else if (x==14&&y==13){image_a1413.src = icon[3];}
	else if (x==14&&y==14){image_a1414.src = icon[3];}
}

/*--------- 2 игрок----------------- */
function hitP2(x,y)//попадание
{
		if (x==5&&y==5){image_b55.src = icon[4];}
	else if (x==5&&y==6){image_b56.src = icon[4];}
	else if (x==5&&y==7){image_b57.src = icon[4];}
	else if (x==5&&y==8){image_b58.src = icon[4];}
	else if (x==5&&y==9){image_b59.src = icon[4];}
	else if (x==5&&y==10){image_b510.src = icon[4];}
	else if (x==5&&y==11){image_b511.src = icon[4];}
	else if (x==5&&y==12){image_b512.src = icon[4];}
	else if (x==5&&y==13){image_b513.src = icon[4];}
	else if (x==5&&y==14){image_b514.src = icon[4];}


	else if (x==6&&y==5){image_b65.src = icon[4];}
	else if (x==6&&y==6){image_b66.src = icon[4];}
	else if (x==6&&y==7){image_b67.src = icon[4];}
	else if (x==6&&y==8){image_b68.src = icon[4];}
	else if (x==6&&y==9){image_b69.src = icon[4];}
	else if (x==6&&y==10){image_b610.src = icon[4];}
	else if (x==6&&y==11){image_b611.src = icon[4];}
	else if (x==6&&y==12){image_b612.src = icon[4];}
	else if (x==6&&y==13){image_b613.src = icon[4];}
	else if (x==6&&y==14){image_b614.src = icon[4];}


	else if (x==7&&y==5){image_b75.src = icon[4];}
	else if (x==7&&y==6){image_b76.src = icon[4];}
	else if (x==7&&y==7){image_b77.src = icon[4];}
	else if (x==7&&y==8){image_b78.src = icon[4];}
	else if (x==7&&y==9){image_b79.src = icon[4];}
	else if (x==7&&y==10){image_b710.src = icon[4];}
	else if (x==7&&y==11){image_b711.src = icon[4];}
	else if (x==7&&y==12){image_b712.src = icon[4];}
	else if (x==7&&y==13){image_b713.src = icon[4];}
	else if (x==7&&y==14){image_b714.src = icon[4];}


	else if (x==8&&y==5){image_b85.src = icon[4];}
	else if (x==8&&y==6){image_b86.src = icon[4];}
	else if (x==8&&y==7){image_b87.src = icon[4];}
	else if (x==8&&y==8){image_b88.src = icon[4];}
	else if (x==8&&y==9){image_b89.src = icon[4];}
	else if (x==8&&y==10){image_b810.src = icon[4];}
	else if (x==8&&y==11){image_b811.src = icon[4];}
	else if (x==8&&y==12){image_b812.src = icon[4];}
	else if (x==8&&y==13){image_b813.src = icon[4];}
	else if (x==8&&y==14){image_b814.src = icon[4];}


	else if (x==9&&y==5){image_b95.src = icon[4];}
	else if (x==9&&y==6){image_b96.src = icon[4];}
	else if (x==9&&y==7){image_b97.src = icon[4];}
	else if (x==9&&y==8){image_b98.src = icon[4];}
	else if (x==9&&y==9){image_b99.src = icon[4];}
	else if (x==9&&y==10){image_b910.src = icon[4];}
	else if (x==9&&y==11){image_b911.src = icon[4];}
	else if (x==9&&y==12){image_b912.src = icon[4];}
	else if (x==9&&y==13){image_b913.src = icon[4];}
	else if (x==9&&y==14){image_b914.src = icon[4];}


	else if (x==10&&y==5){image_b105.src = icon[4];}
	else if (x==10&&y==6){image_b106.src = icon[4];}
	else if (x==10&&y==7){image_b107.src = icon[4];}
	else if (x==10&&y==8){image_b108.src = icon[4];}
	else if (x==10&&y==9){image_b109.src = icon[4];}
	else if (x==10&&y==10){image_b1010.src = icon[4];}
	else if (x==10&&y==11){image_b1011.src = icon[4];}
	else if (x==10&&y==12){image_b1012.src = icon[4];}
	else if (x==10&&y==13){image_b1013.src = icon[4];}
	else if (x==10&&y==14){image_b1014.src = icon[4];}


	else if (x==11&&y==5){image_b115.src = icon[4];}
	else if (x==11&&y==6){image_b116.src = icon[4];}
	else if (x==11&&y==7){image_b117.src = icon[4];}
	else if (x==11&&y==8){image_b118.src = icon[4];}
	else if (x==11&&y==9){image_b119.src = icon[4];}
	else if (x==11&&y==10){image_b1110.src = icon[4];}
	else if (x==11&&y==11){image_b1111.src = icon[4];}
	else if (x==11&&y==12){image_b1112.src = icon[4];}
	else if (x==11&&y==13){image_b1113.src = icon[4];}
	else if (x==11&&y==14){image_b1114.src = icon[4];}


	else if (x==12&&y==5){image_b125.src = icon[4];}
	else if (x==12&&y==6){image_b126.src = icon[4];}
	else if (x==12&&y==7){image_b127.src = icon[4];}
	else if (x==12&&y==8){image_b128.src = icon[4];}
	else if (x==12&&y==9){image_b129.src = icon[4];}
	else if (x==12&&y==10){image_b1210.src = icon[4];}
	else if (x==12&&y==11){image_b1211.src = icon[4];}
	else if (x==12&&y==12){image_b1212.src = icon[4];}
	else if (x==12&&y==13){image_b1213.src = icon[4];}
	else if (x==12&&y==14){image_b1214.src = icon[4];}


	else if (x==13&&y==5){image_b135.src = icon[4];}
	else if (x==13&&y==6){image_b136.src = icon[4];}
	else if (x==13&&y==7){image_b137.src = icon[4];}
	else if (x==13&&y==8){image_b138.src = icon[4];}
	else if (x==13&&y==9){image_b139.src = icon[4];}
	else if (x==13&&y==10){image_b1310.src = icon[4];}
	else if (x==13&&y==11){image_b1311.src = icon[4];}
	else if (x==13&&y==12){image_b1312.src = icon[4];}
	else if (x==13&&y==13){image_b1313.src = icon[4];}
	else if (x==13&&y==14){image_b1314.src = icon[4];}


	else if (x==14&&y==5){image_b145.src = icon[4];}
	else if (x==14&&y==6){image_b146.src = icon[4];}
	else if (x==14&&y==7){image_b147.src = icon[4];}
	else if (x==14&&y==8){image_b148.src = icon[4];}
	else if (x==14&&y==9){image_b149.src = icon[4];}
	else if (x==14&&y==10){image_b1410.src = icon[4];}
	else if (x==14&&y==11){image_b1411.src = icon[4];}
	else if (x==14&&y==12){image_b1412.src = icon[4];}
	else if (x==14&&y==13){image_b1413.src = icon[4];}
	else if (x==14&&y==14){image_b1414.src = icon[4];}
	
	cornerMissedP2(x,y);
}
function cornerMissedP2(x,y)//мимо по углам
{
	missedP2(x-1,y+1); codeBlockP2[x-1][y+1] = 0;/* верхний правый (1)*/
    missedP2(x+1,y+1); codeBlockP2[x+1][y+1] = 0;/* нижний правый (2)*/
    missedP2(x+1,y-1); codeBlockP2[x+1][y-1] = 0;/* нижний левый (3)*/
	missedP2(x-1,y-1); codeBlockP2[x-1][y-1] = 0;/* верхний левый (4)*/
}

function missedP2(x,y)//мимо 
{
		if (x==5&&y==5){image_b55.src = icon[3];}
	else if (x==5&&y==6){image_b56.src = icon[3];}
	else if (x==5&&y==7){image_b57.src = icon[3];}
	else if (x==5&&y==8){image_b58.src = icon[3];}
	else if (x==5&&y==9){image_b59.src = icon[3];}
	else if (x==5&&y==10){image_b510.src = icon[3];}
	else if (x==5&&y==11){image_b511.src = icon[3];}
	else if (x==5&&y==12){image_b512.src = icon[3];}
	else if (x==5&&y==13){image_b513.src = icon[3];}
	else if (x==5&&y==14){image_b514.src = icon[3];}


	else if (x==6&&y==5){image_b65.src = icon[3];}
	else if (x==6&&y==6){image_b66.src = icon[3];}
	else if (x==6&&y==7){image_b67.src = icon[3];}
	else if (x==6&&y==8){image_b68.src = icon[3];}
	else if (x==6&&y==9){image_b69.src = icon[3];}
	else if (x==6&&y==10){image_b610.src = icon[3];}
	else if (x==6&&y==11){image_b611.src = icon[3];}
	else if (x==6&&y==12){image_b612.src = icon[3];}
	else if (x==6&&y==13){image_b613.src = icon[3];}
	else if (x==6&&y==14){image_b614.src = icon[3];}


	else if (x==7&&y==5){image_b75.src = icon[3];}
	else if (x==7&&y==6){image_b76.src = icon[3];}
	else if (x==7&&y==7){image_b77.src = icon[3];}
	else if (x==7&&y==8){image_b78.src = icon[3];}
	else if (x==7&&y==9){image_b79.src = icon[3];}
	else if (x==7&&y==10){image_b710.src = icon[3];}
	else if (x==7&&y==11){image_b711.src = icon[3];}
	else if (x==7&&y==12){image_b712.src = icon[3];}
	else if (x==7&&y==13){image_b713.src = icon[3];}
	else if (x==7&&y==14){image_b714.src = icon[3];}


	else if (x==8&&y==5){image_b85.src = icon[3];}
	else if (x==8&&y==6){image_b86.src = icon[3];}
	else if (x==8&&y==7){image_b87.src = icon[3];}
	else if (x==8&&y==8){image_b88.src = icon[3];}
	else if (x==8&&y==9){image_b89.src = icon[3];}
	else if (x==8&&y==10){image_b810.src = icon[3];}
	else if (x==8&&y==11){image_b811.src = icon[3];}
	else if (x==8&&y==12){image_b812.src = icon[3];}
	else if (x==8&&y==13){image_b813.src = icon[3];}
	else if (x==8&&y==14){image_b814.src = icon[3];}


	else if (x==9&&y==5){image_b95.src = icon[3];}
	else if (x==9&&y==6){image_b96.src = icon[3];}
	else if (x==9&&y==7){image_b97.src = icon[3];}
	else if (x==9&&y==8){image_b98.src = icon[3];}
	else if (x==9&&y==9){image_b99.src = icon[3];}
	else if (x==9&&y==10){image_b910.src = icon[3];}
	else if (x==9&&y==11){image_b911.src = icon[3];}
	else if (x==9&&y==12){image_b912.src = icon[3];}
	else if (x==9&&y==13){image_b913.src = icon[3];}
	else if (x==9&&y==14){image_b914.src = icon[3];}


	else if (x==10&&y==5){image_b105.src = icon[3];}
	else if (x==10&&y==6){image_b106.src = icon[3];}
	else if (x==10&&y==7){image_b107.src = icon[3];}
	else if (x==10&&y==8){image_b108.src = icon[3];}
	else if (x==10&&y==9){image_b109.src = icon[3];}
	else if (x==10&&y==10){image_b1010.src = icon[3];}
	else if (x==10&&y==11){image_b1011.src = icon[3];}
	else if (x==10&&y==12){image_b1012.src = icon[3];}
	else if (x==10&&y==13){image_b1013.src = icon[3];}
	else if (x==10&&y==14){image_b1014.src = icon[3];}


	else if (x==11&&y==5){image_b115.src = icon[3];}
	else if (x==11&&y==6){image_b116.src = icon[3];}
	else if (x==11&&y==7){image_b117.src = icon[3];}
	else if (x==11&&y==8){image_b118.src = icon[3];}
	else if (x==11&&y==9){image_b119.src = icon[3];}
	else if (x==11&&y==10){image_b1110.src = icon[3];}
	else if (x==11&&y==11){image_b1111.src = icon[3];}
	else if (x==11&&y==12){image_b1112.src = icon[3];}
	else if (x==11&&y==13){image_b1113.src = icon[3];}
	else if (x==11&&y==14){image_b1114.src = icon[3];}


	else if (x==12&&y==5){image_b125.src = icon[3];}
	else if (x==12&&y==6){image_b126.src = icon[3];}
	else if (x==12&&y==7){image_b127.src = icon[3];}
	else if (x==12&&y==8){image_b128.src = icon[3];}
	else if (x==12&&y==9){image_b129.src = icon[3];}
	else if (x==12&&y==10){image_b1210.src = icon[3];}
	else if (x==12&&y==11){image_b1211.src = icon[3];}
	else if (x==12&&y==12){image_b1212.src = icon[3];}
	else if (x==12&&y==13){image_b1213.src = icon[3];}
	else if (x==12&&y==14){image_b1214.src = icon[3];}


	else if (x==13&&y==5){image_b135.src = icon[3];}
	else if (x==13&&y==6){image_b136.src = icon[3];}
	else if (x==13&&y==7){image_b137.src = icon[3];}
	else if (x==13&&y==8){image_b138.src = icon[3];}
	else if (x==13&&y==9){image_b139.src = icon[3];}
	else if (x==13&&y==10){image_b1310.src = icon[3];}
	else if (x==13&&y==11){image_b1311.src = icon[3];}
	else if (x==13&&y==12){image_b1312.src = icon[3];}
	else if (x==13&&y==13){image_b1313.src = icon[3];}
	else if (x==13&&y==14){image_b1314.src = icon[3];}


	else if (x==14&&y==5){image_b145.src = icon[3];}
	else if (x==14&&y==6){image_b146.src = icon[3];}
	else if (x==14&&y==7){image_b147.src = icon[3];}
	else if (x==14&&y==8){image_b148.src = icon[3];}
	else if (x==14&&y==9){image_b149.src = icon[3];}
	else if (x==14&&y==10){image_b1410.src = icon[3];}
	else if (x==14&&y==11){image_b1411.src = icon[3];}
	else if (x==14&&y==12){image_b1412.src = icon[3];}
	else if (x==14&&y==13){image_b1413.src = icon[3];}
	else if (x==14&&y==14){image_b1414.src = icon[3];}
}
/*-------------------------- */
function winnerChecker()
{
	if(hitsPlayer1 >= 20){ winner = true; return Player1Win_timer();}
	if(hitsPlayer2 >= 20){ winner = true; return Player2Win_timer();}
}


function thanks()
{
	switch (getRandomInRange(1, 12))
	{
		case 1:
			InfoGameEnd.innerHTML = '<h3 style="color:red">С победой</h3>';
			break;
		case 2:
			InfoGameEnd.innerHTML = '<h3 style="color:red">С победой</h3>';
			break;
		case 3:
			InfoGameEnd.innerHTML = '<h3 style="color:red">Выигрыш есть - можно поесть!</h3>';
			break;
		case 4:
			InfoGameEnd.innerHTML = '<h3 style="color:red">Winner, winner, chicken dinner!</h3>';
			break;
		case 5:
			InfoGameEnd.innerHTML = '<h3 style="color:red">Главное — участие...</h3>';
			break;
		case 6:
			InfoGameEnd.innerHTML = '<h3 style="color:red">Вас с победой поздравляю! Много раз еще желаю<br>эти чувства пережить!</h3>';
			break;
		case 7:
			InfoGameEnd.innerHTML = '<h3 style="color:red">Поздравляю с заслуженной честной победой!</h3>';
			break;
		case 8:
			InfoGameEnd.innerHTML = '<h3 style="color:red">Ты старался — и вот результат на лицо.</h3>';
			break;					
		case 9:
			InfoGameEnd.innerHTML = '<h3 style="color:red">Победителей не судят — это знают все вокруг</h3>';
			break;
		case 10:
			InfoGameEnd.innerHTML = '<h3 style="color:red">Поздравляю, так держать!</h3>';
			break;
		case 11:
			InfoGameEnd.innerHTML = '<h3 style="color:red">Путь был не легким</h3>';
			break;
		case 12:
			InfoGameEnd.innerHTML = '<h3 style="color:red">Winner, winner, chicken dinner!</h3>';
			break;		
	}
}

/* Вывод сообщения о выиграше*/
function Player1Win_timer() {
	
	window.Player1Win_timerId = window.setInterval(Player1Win, 500);
}

function Player2Win_timer() {
	text_top1.innerHTML = '<h2 style="color:red">ВЫИГРАЛ ИГРОК #2</h2>'; 
	thanks();
	window.Player2Win_timerId = window.setInterval(Player2Win, 500);
}

function Player1Win() {
	text_top1.innerHTML = '<h2 style="color:red">ВЫИГРАЛ ИГРОК #1</h2>'; 
	thanks();
	window.clearInterval(window.Player1Win_timerId);
}
function Player2Win() {
	text_top1.innerHTML = '<h2 style="color:red">ВЫИГРАЛ ИГРОК #2</h2>'; 
	thanks();
	window.clearInterval(window.Player2Win_timerId);
}