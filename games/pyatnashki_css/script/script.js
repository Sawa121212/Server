var TESTMOD = false;

var xodov = 0;
var finish = false;

var matrix = [ [0,false],
[1,false], [2,false], [3,false],[4,false],
[5,false], [6,false], [7,false],[8,false],
[9,false], [10,false], [11,false],[12,false],
[13,false], [14,false], [15,false],[16,false]
];

//ВЫИГРАШНАЯ КОМБИНАЦИЯ
var winnerArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var endGame = false;

var point = 0;
var tablenum = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var b = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];


function restart(){
	xodov = 0;
	xodInfo.value = xodov;
	matrix = [ [0,false],
		[1,false], [2,false], [3,false],[4,false],
		[5,false], [6,false], [7,false],[8,false],
		[9,false], [10,false], [11,false],[12,false],
		[13,false], [14,false], [15,false],[16,false]
	];

	point = 0;
	tablenum = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	tableArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
	 b = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

	 document.getElementById("b1").className = "buttons_good";
	 document.getElementById("b2").className = "buttons_good";
	 document.getElementById("b3").className = "buttons_good";
	 document.getElementById("b4").className = "buttons_good";
	 document.getElementById("b5").className = "buttons_good";
	 document.getElementById("b6").className = "buttons_good";
	 document.getElementById("b7").className = "buttons_good";
	 document.getElementById("b8").className = "buttons_good";
	 document.getElementById("b9").className = "buttons_good";
	 document.getElementById("b10").className = "buttons_good";
	 document.getElementById("b11").className = "buttons_good";
	 document.getElementById("b12").className = "buttons_good";
	 document.getElementById("b13").className = "buttons_good";
	 document.getElementById("b14").className = "buttons_good";
	 document.getElementById("b15").className = "buttons_good";
	 document.getElementById("b16").className = "buttons_good";

	 xodInfo.value = xodov;
	 startgame();
}

/*================================================= ИГРА ==========================================================*/
/*Случайное целое число в диапазоне, включая минимальное и максимальное для выбора хода*/
function getRandomInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Меняем местами значения массива */
function swap(n1,n2)
{
	var cache = tablenum[n1];
	tablenum[n1] = tablenum[n2];
	tablenum[n2] = cache;
	xodov++;	
}

/* Меняем местами классы */
function swapClass(x,y)
{
//1 -  2 ||  5
	if(x == 2 && y == 1){
		document.getElementById("b2").className = "buttons_good";
		document.getElementById("b2").innerHTML = document.getElementById("b1").innerHTML;
		document.getElementById("b1").className = "buttons_bad";
		document.getElementById("b1").innerHTML = "";
	}
	if(x == 5 && y == 1){
		document.getElementById("b5").className = "buttons_good";
		document.getElementById("b5").innerHTML = document.getElementById("b1").innerHTML;
		document.getElementById("b1").className = "buttons_bad";
		document.getElementById("b1").innerHTML = "";
	}

//2 -  1 ||  6 ||  3
	if(x == 1 && y == 2){
		document.getElementById("b1").className = "buttons_good";
		document.getElementById("b1").innerHTML = document.getElementById("b2").innerHTML;
		document.getElementById("b2").className = "buttons_bad";
		document.getElementById("b2").innerHTML = "";
	}
	if(x == 6 && y == 2){
		document.getElementById("b6").className = "buttons_good";
		document.getElementById("b6").innerHTML = document.getElementById("b2").innerHTML;
		document.getElementById("b2").className = "buttons_bad";
		document.getElementById("b2").innerHTML = "";
	}
	if(x == 3 && y == 2){
		document.getElementById("b3").className = "buttons_good";
		document.getElementById("b3").innerHTML = document.getElementById("b2").innerHTML;
		document.getElementById("b2").className = "buttons_bad";
		document.getElementById("b2").innerHTML = "";
	}
	
//3 -  2 ||  7 ||  4
	if(x == 2 && y == 3){
		document.getElementById("b2").className = "buttons_good";
		document.getElementById("b2").innerHTML = document.getElementById("b3").innerHTML;
		document.getElementById("b3").className = "buttons_bad";
		document.getElementById("b3").innerHTML = "";
	}
	if(x == 7 && y == 3){
		document.getElementById("b7").className = "buttons_good";
		document.getElementById("b7").innerHTML = document.getElementById("b3").innerHTML;
		document.getElementById("b3").className = "buttons_bad";
		document.getElementById("b3").innerHTML = "";
	}
	if(x == 4 && y == 3){
		document.getElementById("b4").className = "buttons_good";
		document.getElementById("b4").innerHTML = document.getElementById("b3").innerHTML;
		document.getElementById("b3").className = "buttons_bad";
		document.getElementById("b3").innerHTML = "";
	}
//4 -  3 ||  8
	if(x == 3 && y == 4){
		document.getElementById("b3").className = "buttons_good";
		document.getElementById("b3").innerHTML = document.getElementById("b4").innerHTML;
		document.getElementById("b4").className = "buttons_bad";
		document.getElementById("b4").innerHTML = "";
	}
	if(x == 8 && y == 4){
		document.getElementById("b8").className = "buttons_good";
		document.getElementById("b8").innerHTML = document.getElementById("b4").innerHTML;
		document.getElementById("b4").className = "buttons_bad";
		document.getElementById("b4").innerHTML = "";
	}

//5 -  1 ||  6 ||  9
	if(x == 1 && y == 5){
		document.getElementById("b1").className = "buttons_good";
		document.getElementById("b1").innerHTML = document.getElementById("b5").innerHTML;
		document.getElementById("b5").className = "buttons_bad";
		document.getElementById("b5").innerHTML = "";
	}
	if(x == 6 && y == 5){
		document.getElementById("b6").className = "buttons_good";
		document.getElementById("b6").innerHTML = document.getElementById("b5").innerHTML;
		document.getElementById("b5").className = "buttons_bad";
		document.getElementById("b5").innerHTML = "";
	}
	if(x == 9 && y == 5){
		document.getElementById("b9").className = "buttons_good";
		document.getElementById("b9").innerHTML = document.getElementById("b5").innerHTML;
		document.getElementById("b5").className = "buttons_bad";
		document.getElementById("b5").innerHTML = "";
	}

//6 -  5 ||  2 ||  7 ||  10
	if(x == 5 && y == 6){
		document.getElementById("b5").className = "buttons_good";
		document.getElementById("b5").innerHTML = document.getElementById("b6").innerHTML;
		document.getElementById("b6").className = "buttons_bad";
		document.getElementById("b6").innerHTML = "";
	}
	if(x == 2 && y == 6){
		document.getElementById("b2").className = "buttons_good";
		document.getElementById("b2").innerHTML = document.getElementById("b6").innerHTML;
		document.getElementById("b6").className = "buttons_bad";
		document.getElementById("b6").innerHTML = "";
	}
	if(x == 7 && y == 6){
		document.getElementById("b7").className = "buttons_good";
		document.getElementById("b7").innerHTML = document.getElementById("b6").innerHTML;
		document.getElementById("b6").className = "buttons_bad";
		document.getElementById("b6").innerHTML = "";
	}
	if(x == 10 && y == 6){
		document.getElementById("b10").className = "buttons_good";
		document.getElementById("b10").innerHTML = document.getElementById("b6").innerHTML;
		document.getElementById("b6").className = "buttons_bad";
		document.getElementById("b6").innerHTML = "";
	}

//7 -  6 ||  3 ||  8 ||  11
	if(x == 6 && y == 7){
		document.getElementById("b6").className = "buttons_good";
		document.getElementById("b6").innerHTML = document.getElementById("b7").innerHTML;
		document.getElementById("b7").className = "buttons_bad";
		document.getElementById("b7").innerHTML = "";
	}
	if(x == 3 && y == 7){
		document.getElementById("b3").className = "buttons_good";
		document.getElementById("b3").innerHTML = document.getElementById("b7").innerHTML;
		document.getElementById("b7").className = "buttons_bad";
		document.getElementById("b7").innerHTML = "";
	}
	if(x == 8 && y == 7){
		document.getElementById("b8").className = "buttons_good";
		document.getElementById("b8").innerHTML = document.getElementById("b7").innerHTML;
		document.getElementById("b7").className = "buttons_bad";
		document.getElementById("b7").innerHTML = "";
	}
	if(x == 11 && y == 7){
		document.getElementById("b11").className = "buttons_good";
		document.getElementById("b11").innerHTML = document.getElementById("b7").innerHTML;
		document.getElementById("b7").className = "buttons_bad";
		document.getElementById("b7").innerHTML = "";
	}

//8 -  7 ||  4 ||  12
	if(x == 7 && y == 8){
		document.getElementById("b7").className = "buttons_good";
		document.getElementById("b7").innerHTML = document.getElementById("b8").innerHTML;
		document.getElementById("b8").className = "buttons_bad";
		document.getElementById("b8").innerHTML = "";
	}
	if(x == 4 && y == 8){
		document.getElementById("b4").className = "buttons_good";
		document.getElementById("b4").innerHTML = document.getElementById("b8").innerHTML;
		document.getElementById("b8").className = "buttons_bad";
		document.getElementById("b8").innerHTML = "";
	}
	if(x == 12 && y == 8){
		document.getElementById("b12").className = "buttons_good";
		document.getElementById("b12").innerHTML = document.getElementById("b8").innerHTML;
		document.getElementById("b8").className = "buttons_bad";
		document.getElementById("b8").innerHTML = "";
	}

//9 -  5 ||  10 ||  13
	if(x == 5 && y == 9){
		document.getElementById("b5").className = "buttons_good";
		document.getElementById("b5").innerHTML = document.getElementById("b9").innerHTML;
		document.getElementById("b9").className = "buttons_bad";
		document.getElementById("b9").innerHTML = "";
	}
	if(x == 10 && y == 9){
		document.getElementById("b10").className = "buttons_good";
		document.getElementById("b10").innerHTML = document.getElementById("b9").innerHTML;
		document.getElementById("b9").className = "buttons_bad";
		document.getElementById("b9").innerHTML = "";
	}
	if(x == 13 && y == 9){
		document.getElementById("b13").className = "buttons_good";
		document.getElementById("b13").innerHTML = document.getElementById("b9").innerHTML;
		document.getElementById("b9").className = "buttons_bad";
		document.getElementById("b9").innerHTML = "";
	}

//10 -  9 ||  6 ||  11 ||  14
	if(x == 9 && y == 10){
		document.getElementById("b9").className = "buttons_good";
		document.getElementById("b9").innerHTML = document.getElementById("b10").innerHTML;
		document.getElementById("b10").className = "buttons_bad";
		document.getElementById("b10").innerHTML = "";
	}
	if(x == 6 && y == 10){
		document.getElementById("b6").className = "buttons_good";
		document.getElementById("b6").innerHTML = document.getElementById("b10").innerHTML;
		document.getElementById("b10").className = "buttons_bad";
		document.getElementById("b10").innerHTML = "";
	}
	if(x == 11 && y == 10){
		document.getElementById("b11").className = "buttons_good";
		document.getElementById("b11").innerHTML = document.getElementById("b10").innerHTML;
		document.getElementById("b10").className = "buttons_bad";
		document.getElementById("b10").innerHTML = "";
	}
	if(x == 14 && y == 10){
		document.getElementById("b14").className = "buttons_good";
		document.getElementById("b14").innerHTML = document.getElementById("b10").innerHTML;
		document.getElementById("b10").className = "buttons_bad";
		document.getElementById("b10").innerHTML = "";
	}

//11 -  10 ||  7 ||  12 ||  15
	if(x == 10 && y == 11){
		document.getElementById("b10").className = "buttons_good";
		document.getElementById("b10").innerHTML = document.getElementById("b11").innerHTML;
		document.getElementById("b11").className = "buttons_bad";
		document.getElementById("b11").innerHTML = "";
	}
	if(x == 7 && y == 11){
		document.getElementById("b7").className = "buttons_good";
		document.getElementById("b7").innerHTML = document.getElementById("b11").innerHTML;
		document.getElementById("b11").className = "buttons_bad";
		document.getElementById("b11").innerHTML = "";
	}
	if(x == 12 && y == 11){
		document.getElementById("b12").className = "buttons_good";
		document.getElementById("b12").innerHTML = document.getElementById("b11").innerHTML;
		document.getElementById("b11").className = "buttons_bad";
		document.getElementById("b11").innerHTML = "";
	}
	if(x == 15 && y == 11){
		document.getElementById("b15").className = "buttons_good";
		document.getElementById("b15").innerHTML = document.getElementById("b11").innerHTML;
		document.getElementById("b11").className = "buttons_bad";
		document.getElementById("b11").innerHTML = "";
	}

//12 -  11 ||  8 ||  16
	if(x == 11 && y == 12){
		document.getElementById("b11").className = "buttons_good";
		document.getElementById("b11").innerHTML = document.getElementById("b12").innerHTML;
		document.getElementById("b12").className = "buttons_bad";
		document.getElementById("b12").innerHTML = "";
	}
	if(x == 8 && y == 12){
		document.getElementById("b8").className = "buttons_good";
		document.getElementById("b8").innerHTML = document.getElementById("b12").innerHTML;
		document.getElementById("b12").className = "buttons_bad";
		document.getElementById("b12").innerHTML = "";
	}
	if(x == 16 && y == 12){
		document.getElementById("b16").className = "buttons_good";
		document.getElementById("b16").innerHTML = document.getElementById("b12").innerHTML;
		document.getElementById("b12").className = "buttons_bad";
		document.getElementById("b12").innerHTML = "";
	}

//13 -  9 ||  14
	if(x == 9 && y == 13){
		document.getElementById("b9").className = "buttons_good";
		document.getElementById("b9").innerHTML = document.getElementById("b13").innerHTML;
		document.getElementById("b13").className = "buttons_bad";
		document.getElementById("b13").innerHTML = "";
	}
	if(x == 14 && y == 13){
		document.getElementById("b14").className = "buttons_good";
		document.getElementById("b14").innerHTML = document.getElementById("b13").innerHTML;
		document.getElementById("b13").className = "buttons_bad";
		document.getElementById("b13").innerHTML = "";
	}


//14 -  13 ||  10 ||  15
	if(x == 13 && y == 14){
		document.getElementById("b13").className = "buttons_good";
		document.getElementById("b13").innerHTML = document.getElementById("b14").innerHTML;
		document.getElementById("b14").className = "buttons_bad";
		document.getElementById("b14").innerHTML = "";
	}
	if(x == 10 && y == 14){
		document.getElementById("b10").className = "buttons_good";
		document.getElementById("b10").innerHTML = document.getElementById("b14").innerHTML;
		document.getElementById("b14").className = "buttons_bad";
		document.getElementById("b14").innerHTML = "";
	}
	if(x == 15 && y == 14){
		document.getElementById("b15").className = "buttons_good";
		document.getElementById("b15").innerHTML = document.getElementById("b14").innerHTML;
		document.getElementById("b14").className = "buttons_bad";
		document.getElementById("b14").innerHTML = "";
	}

//15 -  14 ||  11 ||  16
	if(x == 14 && y == 15){
		document.getElementById("b14").className = "buttons_good";
		document.getElementById("b14").innerHTML = document.getElementById("b15").innerHTML;
		document.getElementById("b15").className = "buttons_bad";
		document.getElementById("b15").innerHTML = "";
	}
	if(x == 11 && y == 15){
		document.getElementById("b11").className = "buttons_good";
		document.getElementById("b11").innerHTML = document.getElementById("b15").innerHTML;
		document.getElementById("b15").className = "buttons_bad";
		document.getElementById("b15").innerHTML = "";
	}
	if(x == 16 && y == 15){
		document.getElementById("b16").className = "buttons_good";
		document.getElementById("b16").innerHTML = document.getElementById("b15").innerHTML;
		document.getElementById("b15").className = "buttons_bad";
		document.getElementById("b15").innerHTML = "";
	}

//16 -  15 ||  12
	if(x == 15 && y == 16){
		document.getElementById("b15").className = "buttons_good";
		document.getElementById("b15").innerHTML = document.getElementById("b16").innerHTML;
		document.getElementById("b16").className = "buttons_bad";
		document.getElementById("b16").innerHTML = "";
	}
	if(x == 12 && y == 16){
		document.getElementById("b12").className = "buttons_good";
		document.getElementById("b12").innerHTML = document.getElementById("b16").innerHTML;
		document.getElementById("b16").className = "buttons_bad";
		document.getElementById("b16").innerHTML = "";
	}


}


function startgame()
{
	document.getElementById("startbutton").className = "sidebarOFF";
	document.getElementById("restartButton").className = "sidebarON";
	
	document.getElementById("InfoGame").innerHTML = "Собираем игру. Жди...";
	if(TESTMOD == true){document.getElementById("testButton").className = "sidebarON";}
	pasteNumbers();
}

//расстановка чисел
function pasteNumbers()
{
	var i = 1;
	while(b[i] == false)
	{
		var num = getRandomInRange(1,16);
		if(matrix[num][1] == false) //используется такое число? если - нет
		{
			if(i==1)
			{ 
				if(num == 16){
					document.getElementById("b1").innerHTML = ""; 
					document.getElementById("b1").className = "buttons_bad";
					point = i;
				} 
				else {document.getElementById("b1").innerHTML = num;}
				tablenum[i] = num;
			}
			if(i==2)
			{ 
				if(num == 16){
					document.getElementById("b2").innerHTML = "";
					document.getElementById("b2").className = "buttons_bad";
					point = i;
				} 
				else {document.getElementById("b2").innerHTML = num;}
				tablenum[i] = num;
				
			}
			if(i==3)
			{ 
				if(num == 16){
					document.getElementById("b3").innerHTML = "";
					document.getElementById("b3").className = "buttons_bad";
					point = i;
				} 
				else {document.getElementById("b3").innerHTML = num;}
				tablenum[i] = num;
				
			}
			if(i==4){ 
				if(num == 16){
					document.getElementById("b4").innerHTML = "";
					document.getElementById("b4").className = "buttons_bad";
					point = i; 
				}
				else {document.getElementById("b4").innerHTML = num;}
				tablenum[i] = num;
				
			}
			if(i==5)
			{ 
				if(num == 16)
				{
					document.getElementById("b5").innerHTML = "";
					document.getElementById("b5").className = "buttons_bad";
					point = i;
				} 
				else {document.getElementById("b5").innerHTML = num;}
				tablenum[i] = num;
				
			}
			if(i==6)
			{ 
				if(num == 16){
					document.getElementById("b6").innerHTML = "";
					document.getElementById("b6").className = "buttons_bad";
					point = i;
				} 
				else {document.getElementById("b6").innerHTML = num;}
				tablenum[i] = num;
				
			}
			if(i==7)
			{ 
				if(num == 16){
					document.getElementById("b7").innerHTML = "";
					document.getElementById("b7").className = "buttons_bad";
					point = i;
				} 
				else {document.getElementById("b7").innerHTML = num;}
				tablenum[i] = num;
				
			}
			if(i==8)
			{ 
				if(num == 16){
					document.getElementById("b8").innerHTML = "";
					document.getElementById("b8").className = "buttons_bad";
					point = i;
				} 
				else {document.getElementById("b8").innerHTML = num;}
				tablenum[i] = num;
				
			}
			if(i==9)
			{ 
				if(num == 16){
					document.getElementById("b9").innerHTML = "";
					document.getElementById("b9").className = "buttons_bad";
					point = i;
				} 
				else {document.getElementById("b9").innerHTML = num;}
				tablenum[i] = num;
				
			}
			if(i==10)
			{ 
				if(num == 16){
					document.getElementById("b10").innerHTML = "";
					document.getElementById("b10").className = "buttons_bad";
					point = i;
				} 
				else {document.getElementById("b10").innerHTML = num;}
				tablenum[i] = num;
				
			}
			if(i==11)
			{ 
				if(num == 16){
					document.getElementById("b11").innerHTML = "";
					document.getElementById("b11").className = "buttons_bad";
					point = i;
				} 
				else {document.getElementById("b11").innerHTML = num;}
				tablenum[i] = num;
				
			}
			if(i==12)
			{ 
				if(num == 16){
					document.getElementById("b12").innerHTML = "";
					document.getElementById("b12").className = "buttons_bad";
					point = i;
				} 
				else {document.getElementById("b12").innerHTML = num;}
				tablenum[i] = num;
				
			}
			if(i==13)
			{ 
				if(num == 16){
					document.getElementById("b13").innerHTML = "";
					document.getElementById("b13").className = "buttons_bad";
					point = i;
				} 
				else {document.getElementById("b13").innerHTML = num;}
				tablenum[i] = num;
				
			}
			if(i==14)
			{ 
				if(num == 16){
					document.getElementById("b14").innerHTML = "";
					document.getElementById("b14").className = "buttons_bad";
					point = i;
				} 
				else {document.getElementById("b14").innerHTML = num;}
				tablenum[i] = num;
				
			}
			if(i==15)
			{ 
				if(num == 16){
					document.getElementById("b15").innerHTML = "";
					document.getElementById("b15").className = "buttons_bad";
					point = i;
				} 
				else {document.getElementById("b15").innerHTML = num;}
				tablenum[i] = num;
				
			}
			if(i==16)
			{ 
				if(num == 16){
					document.getElementById("b16").innerHTML = "";
					document.getElementById("b16").className = "buttons_bad";
					point = i;
				} 
				else {document.getElementById("b16").innerHTML = num;}
				tablenum[i] = num;
				
			}
			matrix[num][1] = true;
			b[i] = true;
			i++;			
		}
	}

	document.getElementById("InfoGame").innerHTML = "Играем!";
	document.getElementById("starttable").className = "sidebarON";
}


function myButton(n)
{
	if(finish == false){
		
	/* Правило:
1 - point == 2 || point == 5
2 - point == 1 || point == 6 || point == 3
3 - point == 2 || point == 7 || point == 4
4 - point == 3 || point == 8
5 - point == 1 || point == 6 || point == 9
6 - point == 5 || point == 2 || point == 7 || point == 10
7 - point == 6 || point == 3 || point == 8 || point == 11
8 - point == 7 || point == 4 || point == 12
9 - point == 5 || point == 10 || point == 13
10 - point == 9 || point == 6 || point == 11 || point == 14
11 - point == 10 || point == 7 || point == 12 || point == 15
12 - point == 11 || point == 8 || point == 16
13 - point == 9 || point == 14
14 - point == 13 || point == 10 || point == 15
15 - point == 14 || point == 11 || point == 16
16 - point == 15 || point == 12
*/
	if(endGame == false)
	{
		switch(n){
			//1 - point == 2 || point == 5
			case 1:
				if(point == 2 || point == 5)
				{
					if(point == 2)
					{
						swapClass(2,1);			 
						swap(2,1);
						point = 1;
						}
					if(point == 5)
					{
						swapClass(5,1);
						swap(5,1);
						point = 1;
					}		 		 
				}
			break;

			//2 - point == 1 || point == 6 || point == 3
			case 2: 
				if(point == 1 || point == 6 || point == 3)
				{
					if(point == 1)
					{
						swapClass(1,2);			 
						swap(1,2);
						point = 2;
					}
					if(point == 6)
					{
						swapClass(6,2);
						swap(6,2);
						point = 2;
					}
					if(point == 3)
					{
						swapClass(3,2);
						swap(3,2);
						point = 2;
					}		 		 
				}
				break;

				//3 - point == 2 || point == 7 || point == 4
				case 3: 
				if(point == 2 || point == 7 || point == 4)
				{
					if(point == 2)
					{
						swapClass(2,3);			 
						swap(2,3);
						point = 3;
					}
					if(point == 7)
					{
						swapClass(7,3);
						swap(7,3);
						point = 3;
					}
					if(point == 4)
					{
						swapClass(4,3);
						swap(4,3);
						point = 3;
					}		 		 
				}
				break;

				//4 - point == 3 || point == 8
				case 4: 
				if(point == 3 || point == 8)
				{
					if(point == 3)
					{
						swapClass(3,4);			 
						swap(3,4);
						point = 4;
					}
					if(point == 8)
					{
						swapClass(8,4);
						swap(8,4);
						point = 4;
					}		 		 
				}
				break;


				//5 - point == 1 || point == 6 || point == 9
				case 5: 
				if(point == 1 || point == 6 || point == 9)
				{
					if(point == 1)
					{
						swapClass(1,5);			 
						swap(1,5);
						point = 5;
					}
					if(point == 6)
					{
						swapClass(6,5);
						swap(6,5);
						point = 5;
					}
					if(point == 9)
					{
						swapClass(9,5);
						swap(9,5);
						point = 5;
					}			 		 
				}
				break;


				//6 - point == 5 || point == 2 || point == 7 || point == 10
				case 6: 
				if(point == 5 || point == 2 || point == 7 || point == 10)
				{
					if(point == 5)
					{
						swapClass(5,6);			 
						swap(5,6);
						point = 6;
					}
					if(point == 2)
					{
						swapClass(2,6);
						swap(2,6);
						point = 6;
					}
					if(point == 7)
					{
						swapClass(7,6);			 
						swap(7,6);
						point = 6;
					}
					if(point == 10)
					{
						swapClass(10,6);
						swap(10,6);
						point = 6;
					}			 		 
				}
				break;

				//7 - point == 6 || point == 3 || point == 8 || point == 11
				case 7: 
				if(point == 6 || point == 3 || point == 8 || point == 11)
				{
					if(point == 6)
					{
						swapClass(6,7);			 
						swap(6,7);
						point = 7;
					}
					if(point == 3)
					{
						swapClass(3,7);
						swap(3,7);
						point = 7;
					}
					if(point == 8)
					{
						swapClass(8,7);			 
						swap(8,7);
						point = 7;
					}
					if(point == 11)
					{
						swapClass(11,7);
						swap(11,7);
						point = 7;
					}			 		 
				}
				break;
				
				//8 - point == 7 || point == 4 || point == 12
				case 8: 
				if(point == 7 || point == 4 || point == 12)
				{
					if(point == 7)
					{
						swapClass(7,8);			 
						swap(7,8);
						point = 8;
					}
					if(point == 4)
					{
						swapClass(4,8);
						swap(4,8);
						point = 8;
					}	
					if(point == 12)
					{
						swapClass(12,8);
						swap(12,8);
						point = 8;
					}	 		 
				}
				break;

				//9 - point == 5 || point == 10 || point == 13
				case 9: 
				if(point == 5 || point == 10 || point == 13)
				{
					if(point == 5)
					{
						swapClass(5,9);			 
						swap(5,9);
						point = 9;
					}
					if(point == 10)
					{
						swapClass(10,9);
						swap(10,9);
						point = 9;
					}
					if(point == 13)
					{
						swapClass(13,9);
						swap(13,9);
						point = 9;
					}		 		 
				}
				break;

				//10 - point == 9 || point == 6 || point == 11 || point == 14
				case 10: 
				if(point == 9 || point == 6 || point == 11 || point == 14)
				{
					if(point == 9)
					{
						swapClass(9,10);			 
						swap(9,10);
						point = 10;
					}
					if(point == 6)
					{
						swapClass(6,10);
						swap(6,10);
						point = 10;
					}
					if(point == 11)
					{
						swapClass(11,10);			 
						swap(11,10);
						point = 10;
					}
					if(point == 14)
					{
						swapClass(14,10);
						swap(14,10);
						point = 10;
					}		 		 
				}
				break;

				//11 - point == 10 || point == 7 || point == 12 || point == 15
				case 11: 
				if(point == 10 || point == 7 || point == 12 || point == 15)
				{
					if(point == 10)
					{
						swapClass(10,11);			 
						swap(10,11);
						point = 11;
					}
					if(point == 7)
					{
						swapClass(7,11);
						swap(7,11);
						point = 11;
					}	
					if(point == 12)
					{
						swapClass(12,11);			 
						swap(12,11);
						point = 11;
					}
					if(point == 15)
					{
						swapClass(15,11);
						swap(15,11);
						point = 11;
					}	 		 
				}
				break;

				//12 - point == 11 || point == 8 || point == 16
				case 12: 
				if(point == 11 || point == 8 || point == 16)
				{
					if(point == 11)
					{
						swapClass(11,12);			 
						swap(11,12);
						point = 12;
					}
					if(point == 8)
					{
						swapClass(8,12);
						swap(8,12);
						point = 12;
					}
					if(point == 16)
					{
						swapClass(16,12);
						swap(16,12);
						point = 12;
					}		 		 
				}
				break;

				//13 - point == 9 || point == 14
				case 13: 
				if(point == 9 || point == 14)
				{
					if(point == 9)
					{
						swapClass(9,13);			 
						swap(9,13);
						point = 13;
					}
					if(point == 14)
					{
						swapClass(14,13);
						swap(14,13);
						point = 13;
					}		 		 
				}
				break;

				//14 - point == 13 || point == 10 || point == 15
				case 14: 
				if(point == 13 || point == 10 || point == 15)
				{
					if(point == 13)
					{
						swapClass(13,14);			 
						swap(13,14);
						point = 14;
					}
					if(point == 10)
					{
						swapClass(10,14);
						swap(10,14);
						point = 14;
					}
					if(point == 15)
					{
						swapClass(15,14);
						swap(15,14);
						point = 14;
					}		 		 
				}
				break;

				//15 - point == 14 || point == 11 || point == 16
				case 15: 
				if(point == 14 || point == 11 || point == 16)
				{
					if(point == 14)
					{
						swapClass(14,15);			 
						swap(14,15);
						point = 15;
					}
					if(point == 11)
					{
						swapClass(11,15);
						swap(11,15);
						point = 15;
					}
					if(point == 16)
					{
						swapClass(16,15);
						swap(16,15);
						point = 15;
					}	 		 
				}
				break;

				//16 - point == 15 || point == 12
				case 16: 
				if(point == 15 || point == 12)
				{
					if(point == 15)
					{
						swapClass(15,16);			 
						swap(15,16);
						point = 16;
					}
					if(point == 12)
					{
						swapClass(12,16);
						swap(12,16);
						point = 16;
					}		 		 
				}
				break;
		}
	}
	xodInfo.value = xodov;
	finishchecker();
	}
}

function testButtonEnd()
{
	xodov++;
	xodInfo.value = xodov;
	tablenum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
	finishchecker();
}

function finishchecker()
{
	var goodNums = 0;
	for(var i = 1; i < 17; i++){
		if(tablenum[i] == winnerArray[i]){goodNums++;}
	}
	if(goodNums == 16)
	{
		finish = true;
		xodScore.value = xodov;
		endGame = true;
		alert("Победа! Вы можете сохранить ваш результат!");
		document.getElementById("saveresult").className = "sidebarON";
		document.getElementById("saveresultInfo").className = "sidebarOFF";
		document.getElementById("InfoGame").innerHTML = "Победа! Вы можете сохранить ваш результат!";
	}
}