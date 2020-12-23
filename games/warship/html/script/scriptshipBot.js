/* м!!!!!!!!!!!!!!!м */
/* */
/* Кодировка:*/
/* 101 - пусто */
/* 44 - есть корабль*/
/* 33 - попал */
/* 0 - мимо */
/* 99 - убил*/

																			/* Для тестового режима*/
																			var TEST = false;
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

/*--Рандомные точки для бота --*/
var randomPointX = 0;
var randomPointY = 0;
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

var popal = new Array();//для стрельбы бота
popal = [
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
else
	{
		REDERRORPLAYER1();
	}
return false;
}
function checkModeP2(x, y)
{
	if(gameStartUse == true && buildEndP1 == true && buildEndP2 == true && gameXod == 1){ return Shot(x, y);}
	if(gameStartUse == true && buildEndP1 == true && buildEndP2 == true && gameXod == 2)
	{
		REDERRORPLAYER2();
		return false;
	}
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
	else{	REDERRORPLAYER1();}
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


/*------------------------------------------------------------------------------------ Функции смен кртинок --------------*/
/*--------- Функция смены картинок 2 игрока на корабли --------------*/
function pasteImageP2(x, y){
	if(TEST == false)
	{
		if (x==5&&y==5){codeBlockP2[5][5]=44;}
		else if (x==5&&y==6){codeBlockP2[5][6]=44;}
		else if (x==5&&y==7){codeBlockP2[5][7]=44;}
		else if (x==5&&y==8){codeBlockP2[5][8]=44;}
		else if (x==5&&y==9){codeBlockP2[5][9]=44;}
		else if (x==5&&y==10){codeBlockP2[5][10]=44;}
		else if (x==5&&y==11){codeBlockP2[5][11]=44;}
		else if (x==5&&y==12){codeBlockP2[5][12]=44;}
		else if (x==5&&y==13){codeBlockP2[5][13]=44;}
		else if (x==5&&y==14){codeBlockP2[5][14]=44;}


		else if (x==6&&y==5){codeBlockP2[6][5]=44;}
		else if (x==6&&y==6){codeBlockP2[6][6]=44;}
		else if (x==6&&y==7){codeBlockP2[6][7]=44;}
		else if (x==6&&y==8){codeBlockP2[6][8]=44;}
		else if (x==6&&y==9){codeBlockP2[6][9]=44;}
		else if (x==6&&y==10){codeBlockP2[6][10]=44;}
		else if (x==6&&y==11){codeBlockP2[6][11]=44;}
		else if (x==6&&y==12){codeBlockP2[6][12]=44;}
		else if (x==6&&y==13){codeBlockP2[6][13]=44;}
		else if (x==6&&y==14){codeBlockP2[6][14]=44;}


		else if (x==7&&y==5){codeBlockP2[7][5]=44;}
		else if (x==7&&y==6){codeBlockP2[7][6]=44;}
		else if (x==7&&y==7){codeBlockP2[7][7]=44;}
		else if (x==7&&y==8){codeBlockP2[7][8]=44;}
		else if (x==7&&y==9){codeBlockP2[7][9]=44;}
		else if (x==7&&y==10){codeBlockP2[7][10]=44;}
		else if (x==7&&y==11){codeBlockP2[7][11]=44;}
		else if (x==7&&y==12){codeBlockP2[7][12]=44;}
		else if (x==7&&y==13){codeBlockP2[7][13]=44;}
		else if (x==7&&y==14){codeBlockP2[7][14]=44;}


		else if (x==8&&y==5){codeBlockP2[8][5]=44;}
		else if (x==8&&y==6){codeBlockP2[8][6]=44;}
		else if (x==8&&y==7){codeBlockP2[8][7]=44;}
		else if (x==8&&y==8){codeBlockP2[8][8]=44;}
		else if (x==8&&y==9){codeBlockP2[8][9]=44;}
		else if (x==8&&y==10){codeBlockP2[8][10]=44;}
		else if (x==8&&y==11){codeBlockP2[8][11]=44;}
		else if (x==8&&y==12){codeBlockP2[8][12]=44;}
		else if (x==8&&y==13){codeBlockP2[8][13]=44;}
		else if (x==8&&y==14){codeBlockP2[8][14]=44;}


		else if (x==9&&y==5){codeBlockP2[9][5]=44;}
		else if (x==9&&y==6){codeBlockP2[9][6]=44;}
		else if (x==9&&y==7){codeBlockP2[9][7]=44;}
		else if (x==9&&y==8){codeBlockP2[9][8]=44;}
		else if (x==9&&y==9){codeBlockP2[9][9]=44;}
		else if (x==9&&y==10){codeBlockP2[9][10]=44;}
		else if (x==9&&y==11){codeBlockP2[9][11]=44;}
		else if (x==9&&y==12){codeBlockP2[9][12]=44;}
		else if (x==9&&y==13){codeBlockP2[9][13]=44;}
		else if (x==9&&y==14){codeBlockP2[9][14]=44;}


		else if (x==10&&y==5){codeBlockP2[10][5]=44;}
		else if (x==10&&y==6){codeBlockP2[10][6]=44;}
		else if (x==10&&y==7){codeBlockP2[10][7]=44;}
		else if (x==10&&y==8){codeBlockP2[10][8]=44;}
		else if (x==10&&y==9){codeBlockP2[10][9]=44;}
		else if (x==10&&y==10){codeBlockP2[10][10]=44;}
		else if (x==10&&y==11){codeBlockP2[10][11]=44;}
		else if (x==10&&y==12){codeBlockP2[10][12]=44;}
		else if (x==10&&y==13){codeBlockP2[10][13]=44;}
		else if (x==10&&y==14){codeBlockP2[10][14]=44;}


		else if (x==11&&y==5){codeBlockP2[11][5]=44;}
		else if (x==11&&y==6){codeBlockP2[11][6]=44;}
		else if (x==11&&y==7){codeBlockP2[11][7]=44;}
		else if (x==11&&y==8){codeBlockP2[11][8]=44;}
		else if (x==11&&y==9){codeBlockP2[11][9]=44;}
		else if (x==11&&y==10){codeBlockP2[11][10]=44;}
		else if (x==11&&y==11){codeBlockP2[11][11]=44;}
		else if (x==11&&y==12){codeBlockP2[11][12]=44;}
		else if (x==11&&y==13){codeBlockP2[11][13]=44;}
		else if (x==11&&y==14){codeBlockP2[11][14]=44;}


		else if (x==12&&y==5){codeBlockP2[12][5]=44;}
		else if (x==12&&y==6){codeBlockP2[12][6]=44;}
		else if (x==12&&y==7){codeBlockP2[12][7]=44;}
		else if (x==12&&y==8){codeBlockP2[12][8]=44;}
		else if (x==12&&y==9){codeBlockP2[12][9]=44;}
		else if (x==12&&y==10){codeBlockP2[12][10]=44;}
		else if (x==12&&y==11){codeBlockP2[12][11]=44;}
		else if (x==12&&y==12){codeBlockP2[12][12]=44;}
		else if (x==12&&y==13){codeBlockP2[12][13]=44;}
		else if (x==12&&y==14){codeBlockP2[12][14]=44;}


		else if (x==13&&y==5){codeBlockP2[13][5]=44;}
		else if (x==13&&y==6){codeBlockP2[13][6]=44;}
		else if (x==13&&y==7){codeBlockP2[13][7]=44;}
		else if (x==13&&y==8){codeBlockP2[13][8]=44;}
		else if (x==13&&y==9){codeBlockP2[13][9]=44;}
		else if (x==13&&y==10){codeBlockP2[13][10]=44;}
		else if (x==13&&y==11){codeBlockP2[13][11]=44;}
		else if (x==13&&y==12){codeBlockP2[13][12]=44;}
		else if (x==13&&y==13){codeBlockP2[13][13]=44;}
		else if (x==13&&y==14){codeBlockP2[13][14]=44;}


		else if (x==14&&y==5){codeBlockP2[14][5]=44;}
		else if (x==14&&y==6){codeBlockP2[14][6]=44;}
		else if (x==14&&y==7){codeBlockP2[14][7]=44;}
		else if (x==14&&y==8){codeBlockP2[14][8]=44;}
		else if (x==14&&y==9){codeBlockP2[14][9]=44;}
		else if (x==14&&y==10){codeBlockP2[14][10]=44;}
		else if (x==14&&y==11){codeBlockP2[14][11]=44;}
		else if (x==14&&y==12){codeBlockP2[14][12]=44;}
		else if (x==14&&y==13){codeBlockP2[14][13]=44;}
		else if (x==14&&y==14){codeBlockP2[14][14]=44;}

	}
	if(TEST == true)
	{
		if (x==5&&y==5){image_b55.src = icon[2]; codeBlockP2[5][5]=44;}
		else if (x==5&&y==6){image_b56.src = icon[2]; codeBlockP2[5][6]=44;}
		else if (x==5&&y==7){image_b57.src = icon[2]; codeBlockP2[5][7]=44;}
		else if (x==5&&y==8){image_b58.src = icon[2]; codeBlockP2[5][8]=44;}
		else if (x==5&&y==9){image_b59.src = icon[2]; codeBlockP2[5][9]=44;}
		else if (x==5&&y==10){image_b510.src = icon[2]; codeBlockP2[5][10]=44;}
		else if (x==5&&y==11){image_b511.src = icon[2]; codeBlockP2[5][11]=44;}
		else if (x==5&&y==12){image_b512.src = icon[2]; codeBlockP2[5][12]=44;}
		else if (x==5&&y==13){image_b513.src = icon[2]; codeBlockP2[5][13]=44;}
		else if (x==5&&y==14){image_b514.src = icon[2]; codeBlockP2[5][14]=44;}


		else if (x==6&&y==5){image_b65.src = icon[2]; codeBlockP2[6][5]=44;}
		else if (x==6&&y==6){image_b66.src = icon[2]; codeBlockP2[6][6]=44;}
		else if (x==6&&y==7){image_b67.src = icon[2]; codeBlockP2[6][7]=44;}
		else if (x==6&&y==8){image_b68.src = icon[2]; codeBlockP2[6][8]=44;}
		else if (x==6&&y==9){image_b69.src = icon[2]; codeBlockP2[6][9]=44;}
		else if (x==6&&y==10){image_b610.src = icon[2]; codeBlockP2[6][10]=44;}
		else if (x==6&&y==11){image_b611.src = icon[2]; codeBlockP2[6][11]=44;}
		else if (x==6&&y==12){image_b612.src = icon[2]; codeBlockP2[6][12]=44;}
		else if (x==6&&y==13){image_b613.src = icon[2]; codeBlockP2[6][13]=44;}
		else if (x==6&&y==14){image_b614.src = icon[2]; codeBlockP2[6][14]=44;}


		else if (x==7&&y==5){image_b75.src = icon[2]; codeBlockP2[7][5]=44;}
		else if (x==7&&y==6){image_b76.src = icon[2]; codeBlockP2[7][6]=44;}
		else if (x==7&&y==7){image_b77.src = icon[2]; codeBlockP2[7][7]=44;}
		else if (x==7&&y==8){image_b78.src = icon[2]; codeBlockP2[7][8]=44;}
		else if (x==7&&y==9){image_b79.src = icon[2]; codeBlockP2[7][9]=44;}
		else if (x==7&&y==10){image_b710.src = icon[2]; codeBlockP2[7][10]=44;}
		else if (x==7&&y==11){image_b711.src = icon[2]; codeBlockP2[7][11]=44;}
		else if (x==7&&y==12){image_b712.src = icon[2]; codeBlockP2[7][12]=44;}
		else if (x==7&&y==13){image_b713.src = icon[2]; codeBlockP2[7][13]=44;}
		else if (x==7&&y==14){image_b714.src = icon[2]; codeBlockP2[7][14]=44;}


		else if (x==8&&y==5){image_b85.src = icon[2]; codeBlockP2[8][5]=44;}
		else if (x==8&&y==6){image_b86.src = icon[2]; codeBlockP2[8][6]=44;}
		else if (x==8&&y==7){image_b87.src = icon[2]; codeBlockP2[8][7]=44;}
		else if (x==8&&y==8){image_b88.src = icon[2]; codeBlockP2[8][8]=44;}
		else if (x==8&&y==9){image_b89.src = icon[2]; codeBlockP2[8][9]=44;}
		else if (x==8&&y==10){image_b810.src = icon[2]; codeBlockP2[8][10]=44;}
		else if (x==8&&y==11){image_b811.src = icon[2]; codeBlockP2[8][11]=44;}
		else if (x==8&&y==12){image_b812.src = icon[2]; codeBlockP2[8][12]=44;}
		else if (x==8&&y==13){image_b813.src = icon[2]; codeBlockP2[8][13]=44;}
		else if (x==8&&y==14){image_b814.src = icon[2]; codeBlockP2[8][14]=44;}


		else if (x==9&&y==5){image_b95.src = icon[2]; codeBlockP2[9][5]=44;}
		else if (x==9&&y==6){image_b96.src = icon[2]; codeBlockP2[9][6]=44;}
		else if (x==9&&y==7){image_b97.src = icon[2]; codeBlockP2[9][7]=44;}
		else if (x==9&&y==8){image_b98.src = icon[2]; codeBlockP2[9][8]=44;}
		else if (x==9&&y==9){image_b99.src = icon[2]; codeBlockP2[9][9]=44;}
		else if (x==9&&y==10){image_b910.src = icon[2]; codeBlockP2[9][10]=44;}
		else if (x==9&&y==11){image_b911.src = icon[2]; codeBlockP2[9][11]=44;}
		else if (x==9&&y==12){image_b912.src = icon[2]; codeBlockP2[9][12]=44;}
		else if (x==9&&y==13){image_b913.src = icon[2]; codeBlockP2[9][13]=44;}
		else if (x==9&&y==14){image_b914.src = icon[2]; codeBlockP2[9][14]=44;}


		else if (x==10&&y==5){image_b105.src = icon[2]; codeBlockP2[10][5]=44;}
		else if (x==10&&y==6){image_b106.src = icon[2]; codeBlockP2[10][6]=44;}
		else if (x==10&&y==7){image_b107.src = icon[2]; codeBlockP2[10][7]=44;}
		else if (x==10&&y==8){image_b108.src = icon[2]; codeBlockP2[10][8]=44;}
		else if (x==10&&y==9){image_b109.src = icon[2]; codeBlockP2[10][9]=44;}
		else if (x==10&&y==10){image_b1010.src = icon[2]; codeBlockP2[10][10]=44;}
		else if (x==10&&y==11){image_b1011.src = icon[2]; codeBlockP2[10][11]=44;}
		else if (x==10&&y==12){image_b1012.src = icon[2]; codeBlockP2[10][12]=44;}
		else if (x==10&&y==13){image_b1013.src = icon[2]; codeBlockP2[10][13]=44;}
		else if (x==10&&y==14){image_b1014.src = icon[2]; codeBlockP2[10][14]=44;}


		else if (x==11&&y==5){image_b115.src = icon[2]; codeBlockP2[11][5]=44;}
		else if (x==11&&y==6){image_b116.src = icon[2]; codeBlockP2[11][6]=44;}
		else if (x==11&&y==7){image_b117.src = icon[2]; codeBlockP2[11][7]=44;}
		else if (x==11&&y==8){image_b118.src = icon[2]; codeBlockP2[11][8]=44;}
		else if (x==11&&y==9){image_b119.src = icon[2]; codeBlockP2[11][9]=44;}
		else if (x==11&&y==10){image_b1110.src = icon[2]; codeBlockP2[11][10]=44;}
		else if (x==11&&y==11){image_b1111.src = icon[2]; codeBlockP2[11][11]=44;}
		else if (x==11&&y==12){image_b1112.src = icon[2]; codeBlockP2[11][12]=44;}
		else if (x==11&&y==13){image_b1113.src = icon[2]; codeBlockP2[11][13]=44;}
		else if (x==11&&y==14){image_b1114.src = icon[2]; codeBlockP2[11][14]=44;}


		else if (x==12&&y==5){image_b125.src = icon[2]; codeBlockP2[12][5]=44;}
		else if (x==12&&y==6){image_b126.src = icon[2]; codeBlockP2[12][6]=44;}
		else if (x==12&&y==7){image_b127.src = icon[2]; codeBlockP2[12][7]=44;}
		else if (x==12&&y==8){image_b128.src = icon[2]; codeBlockP2[12][8]=44;}
		else if (x==12&&y==9){image_b129.src = icon[2]; codeBlockP2[12][9]=44;}
		else if (x==12&&y==10){image_b1210.src = icon[2]; codeBlockP2[12][10]=44;}
		else if (x==12&&y==11){image_b1211.src = icon[2]; codeBlockP2[12][11]=44;}
		else if (x==12&&y==12){image_b1212.src = icon[2]; codeBlockP2[12][12]=44;}
		else if (x==12&&y==13){image_b1213.src = icon[2]; codeBlockP2[12][13]=44;}
		else if (x==12&&y==14){image_b1214.src = icon[2]; codeBlockP2[12][14]=44;}


		else if (x==13&&y==5){image_b135.src = icon[2]; codeBlockP2[13][5]=44;}
		else if (x==13&&y==6){image_b136.src = icon[2]; codeBlockP2[13][6]=44;}
		else if (x==13&&y==7){image_b137.src = icon[2]; codeBlockP2[13][7]=44;}
		else if (x==13&&y==8){image_b138.src = icon[2]; codeBlockP2[13][8]=44;}
		else if (x==13&&y==9){image_b139.src = icon[2]; codeBlockP2[13][9]=44;}
		else if (x==13&&y==10){image_b1310.src = icon[2]; codeBlockP2[13][10]=44;}
		else if (x==13&&y==11){image_b1311.src = icon[2]; codeBlockP2[13][11]=44;}
		else if (x==13&&y==12){image_b1312.src = icon[2]; codeBlockP2[13][12]=44;}
		else if (x==13&&y==13){image_b1313.src = icon[2]; codeBlockP2[13][13]=44;}
		else if (x==13&&y==14){image_b1314.src = icon[2]; codeBlockP2[13][14]=44;}


		else if (x==14&&y==5){image_b145.src = icon[2]; codeBlockP2[14][5]=44;}
		else if (x==14&&y==6){image_b146.src = icon[2]; codeBlockP2[14][6]=44;}
		else if (x==14&&y==7){image_b147.src = icon[2]; codeBlockP2[14][7]=44;}
		else if (x==14&&y==8){image_b148.src = icon[2]; codeBlockP2[14][8]=44;}
		else if (x==14&&y==9){image_b149.src = icon[2]; codeBlockP2[14][9]=44;}
		else if (x==14&&y==10){image_b1410.src = icon[2]; codeBlockP2[14][10]=44;}
		else if (x==14&&y==11){image_b1411.src = icon[2]; codeBlockP2[14][11]=44;}
		else if (x==14&&y==12){image_b1412.src = icon[2]; codeBlockP2[14][12]=44;}
		else if (x==14&&y==13){image_b1413.src = icon[2]; codeBlockP2[14][13]=44;}
		else if (x==14&&y==14){image_b1414.src = icon[2]; codeBlockP2[14][14]=44;}
	}
	return cornerBlockedP2(x,y);
}


/*------------------------------------------------------------------------------------ Блокировка и Разблокировка --------------*/
/*---------------- Блокировка углов --------------*/
function cornerBlockedP2(x,y){
    if (codeBlockP2[x-1][y+1] == 101){codeBlockP2[x-1][y+1] = 69;}/* верхний правый (1)*/
    if (codeBlockP2[x+1][y+1] == 101){codeBlockP2[x+1][y+1] = 69;}/* нижний правый (2)*/
    if (codeBlockP2[x+1][y-1] == 101){codeBlockP2[x+1][y-1] = 69;}/* нижний левый (3)*/
	if (codeBlockP2[x-1][y-1] == 101){codeBlockP2[x-1][y-1] = 69;}/* верхний левый (4)*/
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

/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------  БОЙ БОЙ БОЙ БОЙ БОЙ БОЙ БОЙ БОЙ --------------------*/
/*------------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------------------------------*/
function startgame1(){
	buildEndP1 = true;
	randomBotFlot();
	if(TEST == false){deleteImage(0,0);} // на Тест
	document.getElementById("sidebar").className = "sidebarOFF";
	document.getElementById("gamestart").className = "sidebarON";

	document.getElementById("randomBot1").className = "sidebarOFF";
	document.getElementById("randomBot2").className = "sidebarOFF";
}

function startGame(){
	buildEndP2 = true;
	gameStartUse = true;
	document.getElementById("gamestart").className = "sidebarOFF";
	text_top1.innerHTML = "Идет игра";
	gameXod = getRandomInRange(1, 2);
	alert("Первым ходит Игрок №" +gameXod)
	if(gameXod == 2)
	{
		SILVERPLAYER1();
		document.getElementById("table2").className = "early_access_header_whiteRight";
		return botShot();
	}
	if(gameXod == 1)
	{
		SILVERPLAYER2();
		document.getElementById("table1").className = "early_access_header_whiteLeft";
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

/*--------- поле 2 игрока ----------------- */
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
	if(hitsPlayer1 == 20){ Player1Win_timer(); winner = true;}
	if(hitsPlayer2 == 20){ Player2Win_timer(); winner = true;}
}

/* Вывод сообщения о выиграше*/
function Player1Win_timer() {
	text_top1.innerHTML = '<h2 style="color:red">ВЫИГРАЛ ИГРОК #1</h2>';
	window.Player1Win_timerId = window.setInterval(Player1Win, 500);
}

function Player2Win_timer() {
	text_top1.innerHTML = '<h2 style="color:red">ВЫИГРАЛ БОТ</h2>';
	window.Player2Win_timerId = window.setInterval(Player2Win, 500);
}

function Player1Win() {
	window.clearInterval(window.Player1Win_timerId);
}
function Player2Win() {
	window.clearInterval(window.Player2Win_timerId);
}
/*--------------------------------------------------------------------------------- Тест --------------------------------------------------------------*/
function playerFlot()
{
	checkMode(5,14);
	checkMode(7,5);
	checkMode(7,8);
	checkMode(7,9);
	checkMode(8,12);
	checkMode(9,5);
	checkMode(10,11);
	checkMode(10,14);
	checkMode(11,5);
	checkMode(11,8);
	checkMode(11,11);
	checkMode(11,14);
	checkMode(12,5);
	checkMode(12,8);
	checkMode(13,5);
	checkMode(13,8);
	checkMode(14,5);
	checkMode(14,11);
	checkMode(14,12);
	checkMode(14,13);

return false;
}
/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------Ход БОТа --------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------------------------------*/
function randomBotFlot() // границы (5,5) и (14,14)
{
	quadruplePaste();/*-- ставим 4-ую --- */

	shipCounterP2();
	return false;
}

/*-- ставим 4-ую --- */
function quadruplePaste()
{
	if(ship4NumP2 == 0)
	{
		randomPointX = getRandomInRange(5, 14);
		randomPointY = getRandomInRange(5, 14);
		/* --------------------------------------------- ставим 4-ую ---------------- */
		/* верхний левый угол */
		if((randomPointX == 5 || randomPointX == 6 || randomPointX == 7) && (randomPointY == 5 || randomPointY == 6 || randomPointY == 7))
		{
			switch (getRandomInRange(1, 2))
			{
				case 1:
					codeBlockP2[randomPointX][randomPointY-1] = 69;
					pasteImageP2(randomPointX,randomPointY); pasteImageP2(randomPointX,randomPointY+1);
					pasteImageP2(randomPointX,randomPointY+2); pasteImageP2(randomPointX,randomPointY+3); /*--4-ной корабль направо --*/
					codeBlockP2[randomPointX][randomPointY+4] = 69;
					ship4NumP2++;
					break;
				case 2:
					codeBlockP2[randomPointX-1][randomPointY] = 69;
					pasteImageP2(randomPointX,randomPointY); pasteImageP2(randomPointX+1,randomPointY);
					pasteImageP2(randomPointX+2,randomPointY);  pasteImageP2(randomPointX+3,randomPointY);		/*-- 4-ной корабль вниз --*/
					codeBlockP2[randomPointX+4][randomPointY] = 69;
					ship4NumP2++;
					break;
			}
			return triplePaste();
		}
		/* верхний правый угол */
		if((randomPointX == 5 || randomPointX == 6 || randomPointX == 7) && (randomPointY == 12 || randomPointY == 13 || randomPointY == 14))
		{
			switch (getRandomInRange(1, 2))
			{
				case 1:
					codeBlockP2[randomPointX][randomPointY-4] = 69;
					pasteImageP2(randomPointX,randomPointY-3); pasteImageP2(randomPointX,randomPointY-2);
					pasteImageP2(randomPointX,randomPointY-1); pasteImageP2(randomPointX,randomPointY);	//--4-ной корабль налево --
					codeBlockP2[randomPointX][randomPointY+1] = 69
					ship4NumP2++;
					break;
				case 2:
					codeBlockP2[randomPointX-1][randomPointY] = 69;
					pasteImageP2(randomPointX,randomPointY); pasteImageP2(randomPointX+1,randomPointY);
					pasteImageP2(randomPointX+2,randomPointY);  pasteImageP2(randomPointX+3,randomPointY);		/*-- 4-ной корабль вниз --*/
					codeBlockP2[randomPointX+4][randomPointY] = 69;
					ship4NumP2++;
					break;
			}
			return triplePaste();
		}
		/* нижний правый угол */
		if((randomPointX == 12 || randomPointX == 13 || randomPointX == 14) && (randomPointY == 12 || randomPointY == 13 || randomPointY == 14))
		{
			switch (getRandomInRange(1, 2))
			{
				case 1:
					codeBlockP2[randomPointX][randomPointY-4] = 69;
					pasteImageP2(randomPointX,randomPointY-3); pasteImageP2(randomPointX,randomPointY-2);
					pasteImageP2(randomPointX,randomPointY-1); pasteImageP2(randomPointX,randomPointY);	//--4-ной корабль налево --
					codeBlockP2[randomPointX][randomPointY+1] = 69
					ship4NumP2++;
					break;
				case 2:
					codeBlockP2[randomPointX-4][randomPointY] = 69;
					pasteImageP2(randomPointX-3,randomPointY); pasteImageP2(randomPointX-2,randomPointY);
					pasteImageP2(randomPointX-1,randomPointY); pasteImageP2(randomPointX,randomPointY);		//--4-ной корабль вверх --
					codeBlockP2[randomPointX+1][randomPointY] = 69;
					ship4NumP2++;
					break;
			}
			return triplePaste();
		}
		/* нижний левый угол */
		if((randomPointX == 12 || randomPointX == 13 || randomPointX == 14) && (randomPointY == 5 || randomPointY == 6 || randomPointY == 7))
		{
			switch (getRandomInRange(1, 2))
			{
				case 1:
					codeBlockP2[randomPointX][randomPointY-1] = 69;
					pasteImageP2(randomPointX,randomPointY); pasteImageP2(randomPointX,randomPointY+1);
					pasteImageP2(randomPointX,randomPointY+2); pasteImageP2(randomPointX,randomPointY+3); /*--4-ной корабль направо --*/
					codeBlockP2[randomPointX][randomPointY+4] = 69;
					ship4NumP2++;
					break;
				case 2:
					codeBlockP2[randomPointX-4][randomPointY] = 69;
					pasteImageP2(randomPointX-3,randomPointY); pasteImageP2(randomPointX-2,randomPointY);
					pasteImageP2(randomPointX-1,randomPointY); pasteImageP2(randomPointX,randomPointY);		//--4-ной корабль вверх --
					codeBlockP2[randomPointX+1][randomPointY] = 69;
					ship4NumP2++;
					break;
			}
			return triplePaste();
		}
		/* любое место */
		if((randomPointX > 7 && randomPointX < 12) && (randomPointY > 7 && randomPointY < 12))
		{
			switch (getRandomInRange(1, 4))
			{
				case 1:
					codeBlockP2[randomPointX][randomPointY-1] = 69;
					pasteImageP2(randomPointX,randomPointY); pasteImageP2(randomPointX,randomPointY+1);
					pasteImageP2(randomPointX,randomPointY+2); pasteImageP2(randomPointX,randomPointY+3); /*--4-ной корабль направо --*/
					codeBlockP2[randomPointX][randomPointY+4] = 69;
					ship4NumP2++;
					break;
				case 2:
					codeBlockP2[randomPointX-4][randomPointY] = 69;
					pasteImageP2(randomPointX-3,randomPointY); pasteImageP2(randomPointX-2,randomPointY);
					pasteImageP2(randomPointX-1,randomPointY); pasteImageP2(randomPointX,randomPointY);		//--4-ной корабль вверх --
					codeBlockP2[randomPointX+1][randomPointY] = 69;
					ship4NumP2++;
					break;
				case 3:
					codeBlockP2[randomPointX][randomPointY-4] = 69;
					pasteImageP2(randomPointX,randomPointY-3); pasteImageP2(randomPointX,randomPointY-2);
					pasteImageP2(randomPointX,randomPointY-1); pasteImageP2(randomPointX,randomPointY);	//--4-ной корабль налево --
					codeBlockP2[randomPointX][randomPointY+1] = 69
					ship4NumP2++;
					break;
				case 4:
					codeBlockP2[randomPointX-1][randomPointY] = 69;
					pasteImageP2(randomPointX,randomPointY); pasteImageP2(randomPointX+1,randomPointY);
					pasteImageP2(randomPointX+2,randomPointY);  pasteImageP2(randomPointX+3,randomPointY);		/*-- 4-ной корабль вниз --*/
					codeBlockP2[randomPointX+4][randomPointY] = 69;
					ship4NumP2++;
					break;
			}
			return triplePaste();
		}

		/* бока */
		if((randomPointX > 7 ) && (randomPointY > 7) ||
			(randomPointX > 7 ) && (randomPointY < 12) ||
			(randomPointX < 12 ) && (randomPointY < 12) ||
			(randomPointX < 12 ) && (randomPointY > 7))
		{
			switch (getRandomInRange(1, 4))
			{
				case 1:
					codeBlockP2[randomPointX][randomPointY-1] = 69;
					pasteImageP2(randomPointX,randomPointY); pasteImageP2(randomPointX,randomPointY+1);
					pasteImageP2(randomPointX,randomPointY+2); pasteImageP2(randomPointX,randomPointY+3); /*--4-ной корабль направо --*/
					codeBlockP2[randomPointX][randomPointY+4] = 69;
					ship4NumP2++;
					break;
				case 2:
					codeBlockP2[randomPointX-4][randomPointY] = 69;
					pasteImageP2(randomPointX-3,randomPointY); pasteImageP2(randomPointX-2,randomPointY);
					pasteImageP2(randomPointX-1,randomPointY); pasteImageP2(randomPointX,randomPointY);		//--4-ной корабль вверх --
					codeBlockP2[randomPointX+1][randomPointY] = 69;
					ship4NumP2++;
					break;
				case 3:
					codeBlockP2[randomPointX][randomPointY-4] = 69;
					pasteImageP2(randomPointX,randomPointY-3); pasteImageP2(randomPointX,randomPointY-2);
					pasteImageP2(randomPointX,randomPointY-1); pasteImageP2(randomPointX,randomPointY);	//--4-ной корабль налево --
					codeBlockP2[randomPointX][randomPointY+1] = 69
					ship4NumP2++;
					break;
				case 4:
					codeBlockP2[randomPointX-1][randomPointY] = 69;
					pasteImageP2(randomPointX,randomPointY); pasteImageP2(randomPointX+1,randomPointY);
					pasteImageP2(randomPointX+2,randomPointY);  pasteImageP2(randomPointX+3,randomPointY);		/*-- 4-ной корабль вниз --*/
					codeBlockP2[randomPointX+4][randomPointY] = 69;
					ship4NumP2++;
					break;
			}
			return triplePaste();
		}
	}
	return triplePaste();
}

/*---------------------------------------------------------------------------------------*/
/*------- Функции определяющие пустоту для ставки кораблей------*/
/*--- для 3 ---*/
function tripleRight(randomPointX, randomPointY) //направо
{
	if((codeBlockP2[randomPointX][randomPointY-1]== 101 || codeBlockP2[randomPointX][randomPointY-1]== 69)&&
		codeBlockP2[randomPointX][randomPointY]== 101 &&
		codeBlockP2[randomPointX][randomPointY+1]== 101 && codeBlockP2[randomPointX][randomPointY+2]== 101 &&
		(codeBlockP2[randomPointX][randomPointY+3]== 101 || codeBlockP2[randomPointX][randomPointY+3]== 69))//направо
		{
			return true;
		}
		return false;
}
function tripleLeft(randomPointX, randomPointY)//налево
{
	if((codeBlockP2[randomPointX][randomPointY+1]== 101 || codeBlockP2[randomPointX][randomPointY+1]== 69)&&
		codeBlockP2[randomPointX][randomPointY]== 101 &&
		codeBlockP2[randomPointX][randomPointY-1]== 101 && codeBlockP2[randomPointX][randomPointY-2]== 101 &&
		(codeBlockP2[randomPointX][randomPointY-3]== 101 || codeBlockP2[randomPointX][randomPointY-3]== 69))//налево
		{
			return true;
		}
		return false;
}
function tripleDown(randomPointX, randomPointY)//вниз
{
	if((codeBlockP2[randomPointX-1][randomPointY]== 101 || codeBlockP2[randomPointX-1][randomPointY]== 69)&&
		codeBlockP2[randomPointX][randomPointY]== 101 &&
		codeBlockP2[randomPointX+1][randomPointY]== 101 && codeBlockP2[randomPointX+2][randomPointY]== 101 &&
		(codeBlockP2[randomPointX+3][randomPointY]== 101 || codeBlockP2[randomPointX+3][randomPointY]== 69))//вниз
		{
			return true;
		}
		return false;
}
function tripleUp(randomPointX, randomPointY)//вверх
{
	if((codeBlockP2[randomPointX+1][randomPointY]== 101 || codeBlockP2[randomPointX+1][randomPointY]== 69) &&
		codeBlockP2[randomPointX][randomPointY]== 101 &&
		codeBlockP2[randomPointX-1][randomPointY]== 101 && codeBlockP2[randomPointX-2][randomPointY]== 101 &&
		(codeBlockP2[randomPointX-3][randomPointY]== 101 || codeBlockP2[randomPointX-3][randomPointY]== 69))//вверх
		{
			return true;
		}
		return false;
}
/*-------------------------------*/
/*--- для 2 ---*/
function doubleRight(randomPointX, randomPointY) //направо
{
	if((codeBlockP2[randomPointX][randomPointY-1]== 101 || codeBlockP2[randomPointX][randomPointY-1]== 69)&&
		codeBlockP2[randomPointX][randomPointY]== 101 &&
		codeBlockP2[randomPointX][randomPointY+1]== 101 &&
		(codeBlockP2[randomPointX][randomPointY+2]== 101 || codeBlockP2[randomPointX][randomPointY+2]== 69))//направо
		{
			return true;
		}
		return false;
}
function doubleLeft(randomPointX, randomPointY)//налево
{
	if((codeBlockP2[randomPointX][randomPointY+1]== 101 || codeBlockP2[randomPointX][randomPointY+1]== 69) &&
		codeBlockP2[randomPointX][randomPointY]== 101 &&
		codeBlockP2[randomPointX][randomPointY-1]== 101 &&
		(codeBlockP2[randomPointX][randomPointY-2]== 101 || codeBlockP2[randomPointX][randomPointY-2]== 69))//налево
		{
			return true;
		}
		return false;
}
function doubleDown(randomPointX, randomPointY)//вниз
{
	if((codeBlockP2[randomPointX-1][randomPointY]== 101 || codeBlockP2[randomPointX-1][randomPointY]== 69) &&
		codeBlockP2[randomPointX][randomPointY]== 101 &&
		codeBlockP2[randomPointX+1][randomPointY]== 101 &&
		(codeBlockP2[randomPointX+2][randomPointY]== 101  || codeBlockP2[randomPointX+2][randomPointY]== 69))//вниз
		{
			return true;
		}
		return false;
}
function doubleUp(randomPointX, randomPointY)//вверх
{
	if((codeBlockP2[randomPointX+1][randomPointY]== 101 || codeBlockP2[randomPointX+1][randomPointY]== 69) &&
		codeBlockP2[randomPointX][randomPointY]== 101 &&
		codeBlockP2[randomPointX-1][randomPointY]== 101 &&
		(codeBlockP2[randomPointX-2][randomPointY]== 101 || codeBlockP2[randomPointX-2][randomPointY]== 69))//вверх
		{
			return true;
		}
		return false;
}
/*-----------------------------------------------------------*/

/*-- ставим 3-ую --- */
function triplePaste()
{
	randomPointX = getRandomInRange(5, 14);
	randomPointY = getRandomInRange(5, 14);
	/* --------------------------------------------- ставим 3-ую ---------------- */
	/* верхний левый угол */
	if((randomPointX == 6) && (randomPointY == 6))
	{
		switch (getRandomInRange(1, 2))
		{
			case 1:
			if(tripleRight(randomPointX, randomPointY) == true)
			{
				codeBlockP2[randomPointX][randomPointY-1] = 69;
				pasteImageP2(randomPointX,randomPointY); pasteImageP2(randomPointX,randomPointY+1);/*--3-ной корабль направо --*/
				pasteImageP2(randomPointX,randomPointY+2);
				codeBlockP2[randomPointX][randomPointY+3] = 69;
				ship3NumP2++;
			}
				break;
			case 2:
			if(tripleDown(randomPointX, randomPointY) == true)
			{
				codeBlockP2[randomPointX-1][randomPointY] = 69;
				pasteImageP2(randomPointX,randomPointY); pasteImageP2(randomPointX+1,randomPointY);/*-- 3-ной корабль вниз --*/
				pasteImageP2(randomPointX+2,randomPointY);
				codeBlockP2[randomPointX+3][randomPointY] = 69;
				ship3NumP2++;
			}
				break;
		}
		if(ship3NumP2 == SHIP3MAXP2){ return doublePaste();}
		else{ return triplePaste();}
	}
	/* верхний правый угол */
	if((randomPointX == 6) && (randomPointY == 13))
	{
		switch (getRandomInRange(1, 2))
		{
			case 1:
			if(tripleLeft(randomPointX, randomPointY) == true)
			{
				codeBlockP2[randomPointX][randomPointY-3] = 69;
				pasteImageP2(randomPointX,randomPointY-2);
				pasteImageP2(randomPointX,randomPointY-1); pasteImageP2(randomPointX,randomPointY);	//--3-ной корабль налево --
				codeBlockP2[randomPointX][randomPointY+1] = 69
				ship3NumP2++;
			}
				break;
			case 2:
			if(tripleDown(randomPointX, randomPointY) == true)
			{
				codeBlockP2[randomPointX-1][randomPointY] = 69;
				pasteImageP2(randomPointX,randomPointY); pasteImageP2(randomPointX+1,randomPointY); //*-- 3-ной корабль вниз --*/
				pasteImageP2(randomPointX+2,randomPointY);
				codeBlockP2[randomPointX+3][randomPointY] = 69;
				ship3NumP2++;
			}
				break;
		}
		if(ship3NumP2 == SHIP3MAXP2){ return doublePaste();}
		else{ return triplePaste();}	}
	/* нижний правый угол */
	if((randomPointX == 13) && (randomPointY == 13))
	{
		switch (getRandomInRange(1, 2))
		{
			case 1:
			if(tripleLeft(randomPointX, randomPointY) == true)
			{
				codeBlockP2[randomPointX][randomPointY-3] = 69;
				pasteImageP2(randomPointX,randomPointY-2);
				pasteImageP2(randomPointX,randomPointY-1); pasteImageP2(randomPointX,randomPointY);	//--3-ной корабль налево --
				codeBlockP2[randomPointX][randomPointY+1] = 69
				ship3NumP2++;
			}
				break;
			case 2:
			if(tripleUp(randomPointX, randomPointY) == true)
			{
				codeBlockP2[randomPointX-3][randomPointY] = 69;
				pasteImageP2(randomPointX-2,randomPointY);
				pasteImageP2(randomPointX-1,randomPointY); pasteImageP2(randomPointX,randomPointY);		//--3-ной корабль вверх --
				codeBlockP2[randomPointX+1][randomPointY] = 69;
				ship3NumP2++;
			}
				break;
		}
		if(ship3NumP2 == SHIP3MAXP2){ return doublePaste();}
		else{ return triplePaste();}
	}
	/* нижний левый угол */
	if((randomPointX == 13 ) && (randomPointY == 6))
	{
		switch (getRandomInRange(1, 2))
		{
			case 1:
			if(tripleRight(randomPointX, randomPointY) == true)
			{
				codeBlockP2[randomPointX][randomPointY-1] = 69;
				pasteImageP2(randomPointX,randomPointY); pasteImageP2(randomPointX,randomPointY+1);	/*--3-ной корабль направо --*/
				pasteImageP2(randomPointX,randomPointY+2);
				codeBlockP2[randomPointX][randomPointY+3] = 69;
				ship3NumP2++;
			}
				break;
			case 2:
			if(tripleUp(randomPointX, randomPointY) == true)
			{
				codeBlockP2[randomPointX-3][randomPointY] = 69;
				pasteImageP2(randomPointX-2,randomPointY);
				pasteImageP2(randomPointX-1,randomPointY); pasteImageP2(randomPointX,randomPointY);		//--3-ной корабль вверх --
				codeBlockP2[randomPointX+1][randomPointY] = 69;
				ship3NumP2++;
			}
				break;
		}
		if(ship3NumP2 == SHIP3MAXP2){ return doublePaste();}
		else{ return triplePaste();}
	}
	/* любое место */
	if((randomPointX > 6 && randomPointX < 13) && (randomPointY > 6 && randomPointY < 13))
	{
		switch (getRandomInRange(1, 4))
		{
			case 1:
			if(tripleRight(randomPointX, randomPointY) == true)
				{
				codeBlockP2[randomPointX][randomPointY-1] = 69;
				pasteImageP2(randomPointX,randomPointY); pasteImageP2(randomPointX,randomPointY+1); /*-- 3-ной корабль направо --*/
				pasteImageP2(randomPointX,randomPointY+2);
				codeBlockP2[randomPointX][randomPointY+3] = 69;
				ship3NumP2++;
				}
				break;
			case 2:
			if(tripleUp(randomPointX, randomPointY) == true)
				{
				codeBlockP2[randomPointX-3][randomPointY] = 69;
				pasteImageP2(randomPointX-2,randomPointY);
				pasteImageP2(randomPointX-1,randomPointY); pasteImageP2(randomPointX,randomPointY);		//--3-ной корабль вверх --
				codeBlockP2[randomPointX+1][randomPointY] = 69;
				ship3NumP2++;
				}
				break;
			case 3:
			if(tripleLeft(randomPointX, randomPointY) == true)
				{
				codeBlockP2[randomPointX][randomPointY-3] = 69;
				pasteImageP2(randomPointX,randomPointY-2);
				pasteImageP2(randomPointX,randomPointY-1); pasteImageP2(randomPointX,randomPointY);	//--3-ной корабль налево --
				codeBlockP2[randomPointX][randomPointY+1] = 69
				ship3NumP2++;
				}
				break;
			case 4:
			if(tripleDown(randomPointX, randomPointY) == true)
				{
				codeBlockP2[randomPointX-1][randomPointY] = 69;
				pasteImageP2(randomPointX,randomPointY); pasteImageP2(randomPointX+1,randomPointY);/*-- 3-ной корабль вниз --*/
				pasteImageP2(randomPointX+3,randomPointY);
				codeBlockP2[randomPointX+3][randomPointY] = 69;
				ship3NumP2++;
				}
				break;
		}
	}
		if(ship3NumP2 == SHIP3MAXP2){ return doublePaste();}
		else{ return triplePaste();}
}

/*-- ставим 2-ую --- */
function doublePaste()
{
	randomPointX = getRandomInRange(5, 14);
	randomPointY = getRandomInRange(5, 14);
	/* --------------------------------------------- ставим 2-ую ---------------- */
	/* верхний левый угол */
	if((randomPointX == 5) && (randomPointY == 5))
	{
		switch (getRandomInRange(1, 2))
		{
			case 1:
			if(doubleRight(randomPointX, randomPointY) == true)
			{
				codeBlockP2[randomPointX][randomPointY-1] = 69;
				pasteImageP2(randomPointX,randomPointY); pasteImageP2(randomPointX,randomPointY+1);/*--2-ной корабль направо --*/
				codeBlockP2[randomPointX][randomPointY+2] = 69;
				ship2NumP2++;
			}
				break;
			case 2:
			if(doubleDown(randomPointX, randomPointY) == true)
			{
				codeBlockP2[randomPointX-1][randomPointY] = 69;
				pasteImageP2(randomPointX,randomPointY); pasteImageP2(randomPointX+1,randomPointY);/*-- 2-ной корабль вниз --*/
				codeBlockP2[randomPointX+2][randomPointY] = 69;
				ship2NumP2++;
			}
				break;
		}
		if(ship2NumP2 == SHIP2MAXP2){ return singlePaste();}
		else{ return doublePaste();}
	}
	/* верхний правый угол */
	if((randomPointX == 5) && (randomPointY == 14))
	{
		switch (getRandomInRange(1, 2))
		{
			case 1:
			if(doubleLeft(randomPointX, randomPointY) == true)
			{
				codeBlockP2[randomPointX][randomPointY-2]= 69;
				pasteImageP2(randomPointX,randomPointY-1); pasteImageP2(randomPointX,randomPointY);	//--2-ной корабль налево --
				codeBlockP2[randomPointX][randomPointY+1] = 69
				ship2NumP2++;
			}
				break;
			case 2:
			if(doubleDown(randomPointX, randomPointY) == true)
			{
				codeBlockP2[randomPointX-1][randomPointY] = 69;
				pasteImageP2(randomPointX,randomPointY); pasteImageP2(randomPointX+1,randomPointY); //*-- 2-ной корабль вниз --*/
				codeBlockP2[randomPointX+2][randomPointY] = 69;
				ship2NumP2++;
			}
				break;
		}
		if(ship2NumP2 == SHIP2MAXP2){ return singlePaste();}
		else{ return doublePaste();}	}
	/* нижний правый угол */
	if((randomPointX == 14) && (randomPointY == 14))
	{
		switch (getRandomInRange(1, 2))
		{
			case 1:
			if(doubleLeft(randomPointX, randomPointY) == true)
			{
				codeBlockP2[randomPointX][randomPointY-2] = 69;
				pasteImageP2(randomPointX,randomPointY-1); pasteImageP2(randomPointX,randomPointY);	//--2-ной корабль налево --
				codeBlockP2[randomPointX][randomPointY+1] = 69
				ship2NumP2++;
			}
				break;
			case 2:
			if(doubleUp(randomPointX, randomPointY) == true)
			{
				codeBlockP2[randomPointX-2][randomPointY] = 69;
				pasteImageP2(randomPointX-1,randomPointY); pasteImageP2(randomPointX,randomPointY);		//--2-ной корабль вверх --
				codeBlockP2[randomPointX+1][randomPointY] = 69;
				ship2NumP2++;
			}
				break;
		}
		if(ship2NumP2 == SHIP2MAXP2){ return singlePaste();}
		else{ return doublePaste();}
	}
	/* нижний левый угол */
	if((randomPointX == 14) && (randomPointY == 5))
	{
		switch (getRandomInRange(1, 2))
		{
			case 1:
			if(doubleRight(randomPointX, randomPointY) == true)
			{
				codeBlockP2[randomPointX][randomPointY-1] = 69;
				pasteImageP2(randomPointX,randomPointY); pasteImageP2(randomPointX,randomPointY+1);	/*--2-ной корабль направо --*/
				codeBlockP2[randomPointX][randomPointY+2] = 69;
				ship2NumP2++;
			}
				break;
			case 2:
			if(doubleUp(randomPointX, randomPointY) == true)
			{
				codeBlockP2[randomPointX-2][randomPointY] = 69;
				pasteImageP2(randomPointX-1,randomPointY); pasteImageP2(randomPointX,randomPointY);		//--2-ной корабль вверх --
				codeBlockP2[randomPointX+1][randomPointY] = 69;
				ship2NumP2++;
			}
				break;
		}
		if(ship2NumP2 == SHIP2MAXP2){ return singlePaste();}
		else{ return doublePaste();}
	}
	/* любое место */
	if((randomPointX > 5 && randomPointX < 14) && (randomPointY > 5 && randomPointY < 14))
	{
		switch (getRandomInRange(1, 4))
		{
			case 1:
			if(doubleRight(randomPointX, randomPointY) == true)
				{
				codeBlockP2[randomPointX][randomPointY-1] = 69;
				pasteImageP2(randomPointX,randomPointY); pasteImageP2(randomPointX,randomPointY+1); /*--2-ной корабль направо --*/
				codeBlockP2[randomPointX][randomPointY+2] = 69;
				ship2NumP2++;
				}
				break;
			case 2:
			if(doubleUp(randomPointX, randomPointY) == true)
				{
				codeBlockP2[randomPointX-2][randomPointY] = 69;
				pasteImageP2(randomPointX-1,randomPointY); pasteImageP2(randomPointX,randomPointY);		//--2-ной корабль вверх --
				codeBlockP2[randomPointX+1][randomPointY] = 69;
				ship2NumP2++;
				}
				break;
			case 3:
			if(doubleLeft(randomPointX, randomPointY) == true)
				{
				codeBlockP2[randomPointX][randomPointY-2] = 69;
				pasteImageP2(randomPointX,randomPointY-1); pasteImageP2(randomPointX,randomPointY);	//--2-ной корабль налево --
				codeBlockP2[randomPointX][randomPointY+1] = 69;
				ship2NumP2++;
				}
				break;
			case 4:
			if(doubleDown(randomPointX, randomPointY) == true)
				{
				codeBlockP2[randomPointX-1][randomPointY] = 69;
				pasteImageP2(randomPointX,randomPointY); pasteImageP2(randomPointX+1,randomPointY);/*-- 2-ной корабль вниз --*/
				codeBlockP2[randomPointX+2][randomPointY] = 69;
				ship2NumP2++;
				}
				break;
		}
		if(ship2NumP2 == SHIP2MAXP2){ return singlePaste();}
		else{ return doublePaste();}
	}
	if(ship2NumP2 == SHIP2MAXP2){ return singlePaste();}
	else{ return doublePaste();}
}

/*-- ставим 1-ую --- */
function singlePaste()
{
	randomPointX = getRandomInRange(5, 14);
	randomPointY = getRandomInRange(5, 14);

	if	(codeBlockP2[randomPointX][randomPointY]	== 101 &&
		(codeBlockP2[randomPointX-1][randomPointY-1] == 101	|| codeBlockP2[randomPointX-1][randomPointY-1]	== 69)	&&
		(codeBlockP2[randomPointX-1][randomPointY]	== 101	|| codeBlockP2[randomPointX-1][randomPointY]	== 69)	&&
		(codeBlockP2[randomPointX-1][randomPointY+1]== 101	|| codeBlockP2[randomPointX-1][randomPointY+1]	== 69)	&&
		(codeBlockP2[randomPointX][randomPointY+1]	== 101	|| codeBlockP2[randomPointX][randomPointY+1]	== 69)	&&
		(codeBlockP2[randomPointX+1][randomPointY+1] == 101	|| codeBlockP2[randomPointX+1][randomPointY+1]	== 69)	&&
		(codeBlockP2[randomPointX+1][randomPointY]	== 101	|| codeBlockP2[randomPointX+1][randomPointY]	== 69)	&&
		(codeBlockP2[randomPointX+1][randomPointY-1] == 101	|| codeBlockP2[randomPointX+1][randomPointY-1]	== 69)	&&
		(codeBlockP2[randomPointX][randomPointY-1]	== 101	|| codeBlockP2[randomPointX][randomPointY-1]	== 69))
		{
			pasteImageP2(randomPointX,randomPointY);
			ship1NumP2++;
			if(ship1NumP2 == SHIP1MAXP2){return true; }
		}
		return singlePaste();
}

/*------------------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------ Выстрелы --------------------------------------*/

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
{
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
{
	//направо и налево 4-ка, с постоянным смещением
	if((codeBlockP2[x][y-1] == 101 || codeBlockP2[x][y-1] == 0 || codeBlockP2[x][y-1] == 69) && 
		codeBlockP2[x][y] == 33 && codeBlockP2[x][y+1] == 33 && codeBlockP2[x][y+2] == 33 && codeBlockP2[x][y+3] == 33 &&
		(codeBlockP2[x][y+4] == 101 || codeBlockP2[x][y+4] == 0 || codeBlockP2[x][y+4] == 69))
		{
			codeBlockP2[x][y-1] = 0; missedP2(x,y-1);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x][y+1] = 99; killP2(x,y+1);
			codeBlockP2[x][y+2] = 99; killP2(x,y+2);
			codeBlockP2[x][y+3] = 99; killP2(x,y+3);
			codeBlockP2[x][y+4] = 0; missedP2(x,y+4);
			
			nextXod = 0;
			goodXod[0] = false;
		}
	if((codeBlockP2[x][y-2] == 101 || codeBlockP2[x][y-2] == 0 || codeBlockP2[x][y-2] == 69) &&
		codeBlockP2[x][y-1] == 33 && codeBlockP2[x][y] == 33 && codeBlockP2[x][y+1] == 33 && codeBlockP2[x][y+2] == 33 &&
		(codeBlockP2[x][y+3] == 101 || codeBlockP2[x][y+3] == 0 || codeBlockP2[x][y+3] == 69))
		{
			codeBlockP2[x][y-2] = 0; missedP2(x,y-2);
			codeBlockP2[x][y-1] = 99; killP2(x,y-1);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x][y+1] = 99; killP2(x,y+1);
			codeBlockP2[x][y+2] = 99; killP2(x,y+2);
			codeBlockP2[x][y+3] = 0; missedP2(x,y+3);			
			
			nextXod = 0;
			goodXod[0] = false;
		}
	if((codeBlockP2[x][y-3] == 101 || codeBlockP2[x][y-3] == 0 || codeBlockP2[x][y-3] == 69) &&
		codeBlockP2[x][y-2] == 33 && codeBlockP2[x][y-1] == 33 && codeBlockP2[x][y] == 33 && codeBlockP2[x][y+1] == 33 &&
		(codeBlockP2[x][y+2] == 101 || codeBlockP2[x][y+2] == 0 || codeBlockP2[x][y+2] == 69))
		{
			codeBlockP2[x][y-3] = 0; missedP2(x,y-3);
			codeBlockP2[x][y-2] = 99; killP2(x,y-2);
			codeBlockP2[x][y-1] = 99; killP2(x,y-1);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x][y+1] = 99; killP2(x,y+1);
			codeBlockP2[x][y+2] = 0; missedP2(x,y+2);
			nextXod = 0;
			goodXod[0] = false;
		}
	if((codeBlockP2[x][y-4] == 101 || codeBlockP2[x][y-4] == 0 || codeBlockP2[x][y-4] == 69) &&
		codeBlockP2[x][y-3] == 33 && codeBlockP2[x][y-2] == 33 && codeBlockP2[x][y-1] == 33 && codeBlockP2[x][y] == 33 &&
		(codeBlockP2[x][y+1] == 101 || codeBlockP2[x][y+1] == 0 || codeBlockP2[x][y+1] == 69))
		{
			codeBlockP2[x][y-4] = 0; missedP2(x,y-4);
			codeBlockP2[x][y-3] = 99; killP2(x,y-3);
			codeBlockP2[x][y-2] = 99; killP2(x,y-2);
			codeBlockP2[x][y-1] = 99; killP2(x,y-1);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x][y+1] = 0; missedP2(x,y+1);
			nextXod = 0;
			goodXod[0] = false;
		}
//вверх и вниз 4-ка
	if((codeBlockP2[x-1][y] == 101 || codeBlockP2[x-1][y] == 0 || codeBlockP2[x-1][y] == 69) && 
		codeBlockP2[x][y] == 33 && codeBlockP2[x+1][y] == 33 && codeBlockP2[x+2][y] == 33 && codeBlockP2[x+3][y] == 33 &&
		(codeBlockP2[x+4][y] == 101 || codeBlockP2[x+4][y] == 0 || codeBlockP2[x+4][y] == 69))
		{
			codeBlockP2[x-1][y] = 0; missedP2(x-1,y);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x+1][y] = 99; killP2(x+1,y);
			codeBlockP2[x+2][y] = 99; killP2(x+2,y);
			codeBlockP2[x+3][y] = 99; killP2(x+3,y);
			codeBlockP2[x+4][y] = 0; missedP2(x+4,y);
			nextXod = 0;
			goodXod[0] = false;
		}
	if((codeBlockP2[x-2][y] == 101 || codeBlockP2[x-2][y] == 0 || codeBlockP2[x-2][y] == 69) &&
		codeBlockP2[x-1][y] == 33 && codeBlockP2[x][y] == 33 && codeBlockP2[x+1][y] == 33 && codeBlockP2[x+2][y] == 33 &&
		(codeBlockP2[x+3][y] == 101 || codeBlockP2[x+3][y] == 0 || codeBlockP2[x+3][y] == 69))
		{
			codeBlockP2[x-2][y] = 0; missedP2(x-2,y);
			codeBlockP2[x-1][y] = 99; killP2(x-1,y);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x+1][y] = 99; killP2(x+1,y);
			codeBlockP2[x+2][y] = 99; killP2(x+2,y);
			codeBlockP2[x+3][y] = 0; missedP2(x+3,y);
			nextXod = 0;
			goodXod[0] = false;
		}
	if((codeBlockP2[x-3][y] == 101 || codeBlockP2[x-3][y] == 0 || codeBlockP2[x-3][y] == 69) &&
		codeBlockP2[x-2][y] == 33 && codeBlockP2[x-1][y] == 33 && codeBlockP2[x][y] == 33 && codeBlockP2[x+1][y] == 33 &&
		(codeBlockP2[x+2][y] == 101 || codeBlockP2[x+2][y] == 0 || codeBlockP2[x+2][y] == 69))
		{
			codeBlockP2[x-3][y] = 0; missedP2(x-3,y);
			codeBlockP2[x-2][y] = 99; killP2(x-2,y);
			codeBlockP2[x-1][y] = 99; killP2(x-1,y);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x+1][y] = 99; killP2(x+1,y);
			codeBlockP2[x+2][y] = 0; missedP2(x+2,y);
			nextXod = 0;
			goodXod[0] = false;
		}
	if((codeBlockP2[x-4][y] == 101 || codeBlockP2[x-4][y] == 0 || codeBlockP2[x-4][y] == 69) &&
		codeBlockP2[x-3][y] == 33 && codeBlockP2[x-2][y] == 33 && codeBlockP2[x-1][y] == 33 && codeBlockP2[x][y] == 33 &&
		(codeBlockP2[x+1][y] == 101 || codeBlockP2[x+1][y] == 0 || codeBlockP2[x+1][y] == 69))
		{
			codeBlockP2[x-4][y] = 0; missedP2(x-4,y);
			codeBlockP2[x-3][y] = 99; killP2(x-3,y);
			codeBlockP2[x-2][y] = 99; killP2(x-2,y);
			codeBlockP2[x-1][y] = 99; killP2(x-1,y);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x+1][y] = 0; missedP2(x+1,y);
			nextXod = 0;
			goodXod[0] = false;
		}
		
//направо и налево 3-ка, с постоянным смещением
	if((codeBlockP2[x][y-1] == 101 || codeBlockP2[x][y-1] == 0 || codeBlockP2[x][y-1] == 69) && 
		codeBlockP2[x][y] == 33 && codeBlockP2[x][y+1] == 33 && codeBlockP2[x][y+2] == 33  &&
		(codeBlockP2[x][y+3] == 101 || codeBlockP2[x][y+3] == 0 || codeBlockP2[x][y+3] == 69))
		{
			codeBlockP2[x][y-1] = 0; missedP2(x,y-1);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x][y+1] = 99; killP2(x,y+1);
			codeBlockP2[x][y+2] = 99; killP2(x,y+2);
			codeBlockP2[x][y+3] = 0; missedP2(x,y+3);
			nextXod = 0;
			goodXod[0] = false;
		}
	if((codeBlockP2[x][y-2] == 101 || codeBlockP2[x][y-2] == 0 || codeBlockP2[x][y-2] == 69) &&
		codeBlockP2[x][y-1] == 33 && codeBlockP2[x][y] == 33 && codeBlockP2[x][y+1] == 33 &&
		(codeBlockP2[x][y+2] == 101 || codeBlockP2[x][y+2] == 0 || codeBlockP2[x][y+2] == 69))
		{
			codeBlockP2[x][y-2] = 0; missedP2(x,y-2);
			codeBlockP2[x][y-1] = 99; killP2(x,y-1);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x][y+1] = 99; killP2(x,y+1);
			codeBlockP2[x][y+2] = 0; missedP2(x,y+2);
			nextXod = 0;
			goodXod[0] = false;
		}
	if((codeBlockP2[x][y-3] == 101 || codeBlockP2[x][y-3] == 0 || codeBlockP2[x][y-3] == 69) &&
		codeBlockP2[x][y-2] == 33 && codeBlockP2[x][y-1] == 33 && codeBlockP2[x][y] == 33 &&
		(codeBlockP2[x][y+1] == 101 || codeBlockP2[x][y+1] == 0 || codeBlockP2[x][y+1] == 69))
		{
			codeBlockP2[x][y-3] = 0; missedP2(x,y-3);
			codeBlockP2[x][y-2] = 99; killP2(x,y-2);
			codeBlockP2[x][y-1] = 99; killP2(x,y-1);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x][y+1] = 0; missedP2(x,y+1);
			nextXod = 0;
			goodXod[0] = false;
		}
	//вверх и вниз 3-ка
		if((codeBlockP2[x-1][y] == 101 || codeBlockP2[x-1][y] == 0 || codeBlockP2[x-1][y] == 69) && 
		codeBlockP2[x][y] == 33 && codeBlockP2[x+1][y] == 33 && codeBlockP2[x+2][y] == 33 && 
		(codeBlockP2[x+3][y] == 101 || codeBlockP2[x+3][y] == 0 || codeBlockP2[x+3][y] == 69))
		{
			codeBlockP2[x-1][y] = 0; missedP2(x-1,y);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x+1][y] = 99; killP2(x+1,y);
			codeBlockP2[x+2][y] = 99; killP2(x+2,y);
			codeBlockP2[x+3][y] = 0; missedP2(x+3,y);
			nextXod = 0;
			goodXod[0] = false;
		}	
	if((codeBlockP2[x-2][y] == 101 || codeBlockP2[x-2][y] == 0 || codeBlockP2[x-2][y] == 69) &&
		codeBlockP2[x-1][y] == 33 && codeBlockP2[x][y] == 33 && codeBlockP2[x+1][y] == 33 &&
		(codeBlockP2[x+2][y] == 101 || codeBlockP2[x+2][y] == 0 || codeBlockP2[x+2][y] == 69))
		{
			codeBlockP2[x-2][y] = 0; missedP2(x-2,y);
			codeBlockP2[x-1][y] = 99; killP2(x-1,y);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x+1][y] = 99; killP2(x+1,y);
			codeBlockP2[x+2][y] = 0; missedP2(x+2,y);
			nextXod = 0;
			goodXod[0] = false;
		}
	if((codeBlockP2[x-3][y] == 101 || codeBlockP2[x-3][y] == 0 || codeBlockP2[x-3][y] == 69) &&
		codeBlockP2[x-2][y] == 33 && codeBlockP2[x-1][y] == 33 && codeBlockP2[x][y] == 33 &&
		(codeBlockP2[x+1][y] == 101 || codeBlockP2[x+1][y] == 0 || codeBlockP2[x+1][y] == 69))
		{
			codeBlockP2[x-3][y] = 0; missedP2(x-3,y);
			codeBlockP2[x-2][y] = 99; killP2(x-2,y);
			codeBlockP2[x-1][y] = 99; killP2(x-1,y);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x+1][y] = 0; missedP2(x+1,y);
			nextXod = 0;
			goodXod[0] = false;
		}
//направо и налево 2-ка, с постоянным смещением
	if((codeBlockP2[x][y-1] == 101 || codeBlockP2[x][y-1] == 0 || codeBlockP2[x][y-1] == 69) && 
		codeBlockP2[x][y] == 33 && codeBlockP2[x][y+1] == 33 &&
		(codeBlockP2[x][y+2] == 101 || codeBlockP2[x][y+2] == 0 || codeBlockP2[x][y+2] == 69))
		{
			codeBlockP2[x][y-1] = 0; missedP2(x,y-1);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x][y+1] = 99; killP2(x,y+1);
			codeBlockP2[x][y+2] = 0; missedP2(x,y+2);
			nextXod = 0;
			goodXod[0] = false;
		}
	if((codeBlockP2[x][y-2] == 101 || codeBlockP2[x][y-2] == 0 || codeBlockP2[x][y-2] == 69) &&
		codeBlockP2[x][y-1] == 33 && codeBlockP2[x][y] == 33 &&
		(codeBlockP2[x][y+1] == 101 || codeBlockP2[x][y+1] == 0 || codeBlockP2[x][y+1] == 69))
		{
			codeBlockP2[x][y-2] = 0; missedP2(x,y-2);
			codeBlockP2[x][y-1] = 99; killP2(x,y-1);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x][y+1] = 0; missedP2(x,y+1);
			nextXod = 0;
			goodXod[0] = false;
		}
//вверх и вниз 2-ка
		if((codeBlockP2[x-1][y] == 101 || codeBlockP2[x-1][y] == 0 || codeBlockP2[x-1][y] == 69) && 
		codeBlockP2[x][y] == 33 && codeBlockP2[x+1][y] == 33 && 
		(codeBlockP2[x+2][y] == 101 || codeBlockP2[x+2][y] == 0 || codeBlockP2[x+2][y] == 69))
		{
			codeBlockP2[x-1][y] = 0; missedP2(x-1,y);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x+1][y] = 99; killP2(x+1,y);
			codeBlockP2[x+2][y] = 0; missedP2(x+2,y);
			nextXod = 0;
			goodXod[0] = false;
		}
	if((codeBlockP2[x-2][y] == 101 || codeBlockP2[x-2][y] == 0 || codeBlockP2[x-2][y] == 69) &&
		codeBlockP2[x-1][y] == 33 && codeBlockP2[x][y] == 33 &&
		(codeBlockP2[x+1][y] == 101 || codeBlockP2[x+1][y] == 0 || codeBlockP2[x+1][y] == 69))
		{
			codeBlockP2[x-2][y] = 0; missedP2(x-2,y);
			codeBlockP2[x-1][y] = 99; killP2(x-1,y);
			codeBlockP2[x][y] = 99; killP2(x,y);
			codeBlockP2[x+1][y] = 0; missedP2(x+1,y);
			nextXod = 0;
			goodXod[0] = false;
		}
// 1-ка
	if((codeBlockP2[x-1][y-1]	== 101 || codeBlockP2[x-1][y-1]	== 0 || codeBlockP2[x-1][y-1] == 69) &&
		(codeBlockP2[x-1][y]	== 101 || codeBlockP2[x-1][y]	== 0 || codeBlockP2[x-1][y]	== 69) &&
		(codeBlockP2[x-1][y+1]	== 101 || codeBlockP2[x-1][y+1]	== 0 || codeBlockP2[x-1][y+1] == 69) &&
		(codeBlockP2[x][y+1]	== 101 || codeBlockP2[x][y+1]	== 0 || codeBlockP2[x][y+1] == 69) &&
		(codeBlockP2[x+1][y+1]	== 101 || codeBlockP2[x+1][y+1]	== 0 || codeBlockP2[x+1][y+1] == 69) &&
		(codeBlockP2[x+1][y]	== 101 || codeBlockP2[x+1][y]	== 0 || codeBlockP2[x+1][y] == 69) &&
		(codeBlockP2[x+1][y-1]	== 101 || codeBlockP2[x+1][y-1]	== 0 || codeBlockP2[x+1][y-1] == 69) &&
		(codeBlockP2[x][y-1]	== 101 || codeBlockP2[x][y-1]	== 0 || codeBlockP2[x][y-1] == 69) &&
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
			nextXod = 0;
			goodXod[0] = false;
		}
		
}



/*------------------------------------------------------------------------------------------------------------- */

function Shot(x, y)
{
	if(gameXod == 1) //игрок
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
		if(codeBlockP2[x][y] == 101 || codeBlockP2[x][y] == 69)
		{
			document.getElementById("table2").className = "early_access_header_whiteRight";
			codeBlockP2[x][y] = 0; //мимо
			gameXod = 2;
			missedP2(x,y);
			InfoGameEnd.innerHTML = '<h2 style="color:red">Промах, ходит Бот</h2>';
			SILVERPLAYER1();			
			winnerChecker();
			return botShot();
		}
		if(codeBlockP2[x][y] == 0 || codeBlockP2[x][y] == 33 || codeBlockP2[x][y] == 99) // /* 0 - мимо 33 - попал 99 - убил*/
		{
			REDERRORPLAYER2();
		}
	}
	if(gameXod == 2) //бот
	{
		if(codeBlock[x][y] == 44)
		{
			codeBlock[x][y] = 33; //попал
			hitsPlayer2++;
			popal[x][y] = true;
			goodXod[0] = true;
			hit(x,y);
			InfoGameEnd.innerHTML = '<h2 style="color:red">Бот попал</h2>';
			killcheckP2(x,y);
			winnerChecker();
			return botShot(); //стреляем еще раз, т.к. попали
		}
		if(codeBlock[x][y] == 101 || codeBlock[x][y] == 69)
		{
			document.getElementById("table1").className = "early_access_header_whiteLeft";
			codeBlock[x][y] = 0;//мимо
			gameXod = 1;
			missed(x,y);
			InfoGameEnd.innerHTML = '<h2 style="color:red">Промах, ходит Игрок</h2>';
			SILVERPLAYER2();
			return winnerChecker();
		}
		if(codeBlock[x][y] == 0 || codeBlock[x][y] == 33 || codeBlock[x][y] == 99) // /* 0 - мимо 33 - попал 99 - убил*/
		{
			return botShot();
		}
	}

}

/*------------------------------------------------------------------------------------------------------------- */
/*----------------------------------------------------------- Стрельба Бота ----------------------------------- */
/*------------------------------------------------------------------------------------------------------------- */
//проверка границ
function gridOut(x,y)
{
	if ((x >= 5 && x <= 14) && (y >= 5 && y <= 14)){ return true;}
	return false;
}

var firstShot = false;
var goodXod = new Array();
goodXod = [false,false,false,false,false];

//сохр.	позиции //рандом //стартовая точка попадания
var saveX = 0;	pX = 0; startX = 0;
var saveY = 0;	pY = 0; startY = 0;

var nextXod = 0;

function botShot()
{
	return window.botShotTimerId = window.setInterval(botShotTimer, 500);
}

function botShotTimer() {
	window.clearInterval(window.botShotTimerId);
	if(firstShot == false)
	{
		firstShot = true;
		pX = getRandomInRange(5, 14); saveX = pX;
		pY = getRandomInRange(5, 14); saveY = pY;

		if(popal[pX][pY] == false)
		{
			return Shot(pX,pY);
		}
	}
	if(firstShot == true)
	{
		if(popal[saveX][saveY] == false && nextXod == 0)
		{
			pX = getRandomInRange(5, 14); saveX = pX;
			pY = getRandomInRange(5, 14); saveY = pY;
			return Shot(pX,pY);
		}
	}
	if(firstShot == true)
	{
		if(popal[saveX][saveY] == true)
		{
			if(nextXod == 0) //второй выстрел
			{
				startX = saveX;
				startY = saveY;
				nextXod = getRandomInRange(1, 4);
				switch (nextXod)
				{
					case 1:
						if(gridOut(saveX,saveY+1) == true){
						saveX; saveY++;} //направо
						break;
					case 2:
						if(gridOut(saveX,saveY-1) == true){
						saveX; saveY--;} //налево
						break;
					case 3:
						if(gridOut(saveX+1,saveY) == true){
						saveX++; saveY;} //вниз
						break;
					case 4:
						if(gridOut(saveX-1,saveY) == true){
						saveX--; saveY;} //наверх
						break;
				}
				if(gridOut(saveX,saveY) == true){ return Shot(saveX,saveY);}
			}
			if(nextXod == 1)
			{
				if(gridOut(saveX, saveY+1) == true)// направо
				{
					saveX; saveY++;
					return Shot(saveX,saveY);
				}

			}
			if(nextXod == 2)
			{
				if(gridOut(saveX, saveY-1) == true)// налево
				{
					saveX; saveY--;
					return Shot(saveX,saveY);
				}

			}
			if(nextXod == 3)
			{
				if(gridOut(saveX+1, saveY) == true)// вниз
				{
					saveX++; saveY;
					return Shot(saveX,saveY);
				}

			}
			if(nextXod == 4)
			{
				if(gridOut(saveX-1, saveY) == true)// навверх
				{
					saveX--; saveY;
					return Shot(saveX,saveY);
				}

			}
		}
		if(popal[saveX][saveY] == false && nextXod == 1)
		{
			if(gridOut(saveX,saveY+1) == true && goodXod[1] == false)// направо
			{
				nextXod = 1;
				saveX; saveY++;
				return Shot(saveX,saveY);
			}
			if(gridOut(saveX,saveY-1) == true && goodXod[1] == true)// налево
			{
				nextXod = 2;
				saveX; saveY--;
				return Shot(saveX,saveY);
			}
		}
		if(popal[saveX][saveY] == false && nextXod == 2)
		{
			if(gridOut(saveX,saveY+1) == true && goodXod[2] == false)// направо
			{
				nextXod = 1;
				saveX; saveY++;
				return Shot(saveX,saveY);
			}
			if(gridOut(saveX,saveY-1) == true && goodXod[2] == true)// налево
			{
				nextXod = 2;
				saveX; saveY--;
				return Shot(saveX,saveY);
			}
		}
		if(popal[saveX][saveY] == false && nextXod == 3)
		{
			if(gridOut(saveX-1,saveY) == true && goodXod[3] == false)// вверх
			{
				nextXod = 4;
				saveX--; saveY;
				return Shot(saveX,saveY);
			}
			if(gridOut(saveX+1,saveY) == true && goodXod[3] == true)// вниз
			{
				nextXod = 3;
				saveX++; saveY;
				return Shot(saveX,saveY);
			}
		}
		if(popal[saveX][saveY] == false && nextXod == 4)
		{
			if(gridOut(saveX-1,saveY) == true && goodXod[4] == true)// вверх
			{
				nextXod = 4;
				saveX--; saveY;
				return Shot(saveX,saveY);
			}
			if(gridOut(saveX+1,saveY) == true && goodXod[4] == true)// вниз
			{
				nextXod = 3;
				saveX++; saveY;
				return Shot(saveX,saveY);
			}
		}
	}
	Shot(getRandomInRange(5, 14),getRandomInRange(5, 14));
}
// после убийства nextXod = 0
//мимо 3 раза и т.д