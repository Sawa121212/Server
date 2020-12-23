/* м!!!!!!!!!!!!!!!м */


/* Для тестового режима*/
var TESTMODE = false;



//данные 
var korovka = 0;
var bychok = 0;

var finish = false;


window.onload = function TESTMODE_INFO(){
	if(TESTMODE == true){document.getElementById("TestMod").className = "sidebarON";}
}



var xodov = 0;
var ArrayBot = new Array();
var peopleFirstXod = 0;
//сохранения ходов в блоке

var saves = new Array(); //
saves = [

	[[0], [0], [0]],//0
	[[0], [0], [0]],//1
	[[0], [0], [0]],//2
	[[0], [0], [0]],//3
	[[0], [0], [0]],//4
	[[0], [0], [0]],//5
	[[0], [0], [0]],//6
	[[0], [0], [0]],//7
	[[0], [0], [0]],//8
	[[0], [0], [0]],//9
	[[0], [0], [0]],//10
];



/*================================================= ИГРА ==========================================================*/

/*Случайное целое число в диапазоне, включая минимальное и максимальное для выбора хода*/

function getRandomInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}



function copyChecker(number) {
	var nums = number.toString();
	var arrNums = nums.split('');
	if (arrNums[0] == arrNums[1] || arrNums[0] == arrNums[2] || arrNums[0] == arrNums[3] ||
		arrNums[1] == arrNums[2] || arrNums[1] == arrNums[3] ||
		arrNums[2] == arrNums[3]) {
		return false;
	}

	if (arrNums.length == 3) {
		for (var i = 0; i < arrNums.length; i++) {
			if (arrNums[i] == "0") { return false; }
		}
	}
	return true;
}

//кнопка "Начать игру"
function startGame(obj) {
	document.getElementById("gamestart").className = "sidebarOFF";
	document.getElementById("playerbutton").className = "sidebarON";	


	document.getElementById("startInfo").innerHTML = "Компьютер уже что-то задумал. Играем!";
	var randomBotNumber = getRandomInRange(0, 9999)
	if (copyChecker(randomBotNumber) == true) {
		if (randomBotNumber < 1000) {
			var nums = randomBotNumber.toString()
			if (nums.length < 4) {
				if (nums.length == 3) {
					var newStr = "0" + nums;
					var newInteger = Number(newStr);
					randomBotNumber = newStr;
				}

				if (nums.length == 2) {
					var newStr = "01" + nums;
					var newInteger = Number(newStr);
					randomBotNumber = newStr;
				}

				if (nums.length == 1) {
					var newStr = "012" + nums;
					var newInteger = Number(newStr);
					randomBotNumber = newStr;
				}
			}
			var strBot = String(newStr);
			var arrBot = strBot.split('');

		}

		else {
			var strBot = String(randomBotNumber);
			var arrBot = strBot.split('');
		}

		ArrayBot = arrBot;
		obj.bot_number.value = randomBotNumber;
	}

	else {
		startGame(obj);
	}

}



//запуск из кнопки
function Xod(obj) {
if(finish == false){
	var peopleXod = obj.number.value;
	if (copyChecker(peopleXod) == true) {
			var strBot = String(peopleXod);
			var arrBot = strBot.split('');
		if (Number(peopleXod) > 0 && arrBot.length == 4) {
			peopleFirstXod = peopleXod;
			document.getElementById("startInfo").innerHTML = "Хорошая попытка, попробуй еще раз";

			/* 

			Дано число. Давайте запишем каждую цифру этого числа в отдельный элемент массива. 
			Тут есть подвох - split применяется только к строкам, а у нас число. 
			Преобразуем вначале число к строке с помощью String, а затем применим split:
			*/

			if (FinishChecker(peopleFirstXod) == true) 
			{ 
				xodov++;
				xodInfo.value = xodov;
				infoBox(korovka, bychok);
				return EndGame(peopleFirstXod);
			}
			
			if (SavesPlay(peopleXod) == false){
				checkAnimals(peopleXod);
				xodov++;
				xodInfo.value = xodov;
				infoBox(korovka, bychok);				
			}
		}
		else {
			document.getElementById("startInfo").innerHTML = "Ошибка! Проверька, все ли верно ты написал!";
		}
	}
	else {
		document.getElementById("startInfo").innerHTML = "Цифры в загаданном числе должны быть без повтора!";
	}
}
}





//запуск из сохранения
function SavesPlay(peopleXod) {
	for (var i = 0; i < 11; i++) {
		if (peopleXod == saves[i][0][0])
		{
			document.getElementById("startInfo").innerHTML = "Это число в списке!";
			return true;
		}
	}
	return false;
}



function checkAnimals(peopleXod) {
	bychok = 0;
	korovka = 0;
	var activeInfo = new Array();
	activeInfo = [false, false, false, false];

	var strNumber = String(peopleXod);
	var charArray = strNumber.split('');

	if (charArray[0] == ArrayBot[0]) { bychok++; activeInfo[0] = true; }
	if (charArray[1] == ArrayBot[1]) { bychok++; activeInfo[1] = true; }
	if (charArray[2] == ArrayBot[2]) { bychok++; activeInfo[2] = true; }
	if (charArray[3] == ArrayBot[3]) { bychok++; activeInfo[3] = true; }

	if (charArray[0] == ArrayBot[1] && activeInfo[1] == false) { korovka++; }
	if (charArray[0] == ArrayBot[2] && activeInfo[2] == false) { korovka++; }
	if (charArray[0] == ArrayBot[3] && activeInfo[3] == false) { korovka++; }

	if (charArray[1] == ArrayBot[0] && activeInfo[0] == false) { korovka++; }//1-1
	if (charArray[1] == ArrayBot[2] && activeInfo[2] == false) { korovka++; }
	if (charArray[1] == ArrayBot[3] && activeInfo[3] == false) { korovka++; }

	if (charArray[2] == ArrayBot[0] && activeInfo[0] == false) { korovka++; }//2-2
	if (charArray[2] == ArrayBot[1] && activeInfo[1] == false) { korovka++; }	
	if (charArray[2] == ArrayBot[3] && activeInfo[3] == false) { korovka++; }

	if (charArray[3] == ArrayBot[0] && activeInfo[0] == false) { korovka++; }//3-3
	if (charArray[3] == ArrayBot[1] && activeInfo[1] == false) { korovka++; }
	if (charArray[3] == ArrayBot[2] && activeInfo[2] == false) { korovka++; }
}

function infoBox(korovkaNum, bychokNum) {
	var korovok = korovkaNum;
	var bychokov = bychokNum;

	document.getElementById("info10_key").innerHTML = document.getElementById("info9_key").innerHTML;
	document.getElementById("info10_resultK").innerHTML = document.getElementById("info9_resultK").innerHTML;
	document.getElementById("info10_resultB").innerHTML = document.getElementById("info9_resultB").innerHTML;

	document.getElementById("info9_key").innerHTML = document.getElementById("info8_key").innerHTML;
	document.getElementById("info9_resultK").innerHTML = document.getElementById("info8_resultK").innerHTML;
	document.getElementById("info9_resultB").innerHTML = document.getElementById("info8_resultB").innerHTML;

	document.getElementById("info8_key").innerHTML = document.getElementById("info7_key").innerHTML;
	document.getElementById("info8_resultK").innerHTML = document.getElementById("info7_resultK").innerHTML;
	document.getElementById("info8_resultB").innerHTML = document.getElementById("info7_resultB").innerHTML;

	document.getElementById("info7_key").innerHTML = document.getElementById("info6_key").innerHTML;
	document.getElementById("info7_resultK").innerHTML = document.getElementById("info6_resultK").innerHTML;
	document.getElementById("info7_resultB").innerHTML = document.getElementById("info6_resultB").innerHTML;

	document.getElementById("info6_key").innerHTML = document.getElementById("info5_key").innerHTML;
	document.getElementById("info6_resultK").innerHTML = document.getElementById("info5_resultK").innerHTML;
	document.getElementById("info6_resultB").innerHTML = document.getElementById("info5_resultB").innerHTML

	document.getElementById("info5_key").innerHTML = document.getElementById("info4_key").innerHTML;
	document.getElementById("info5_resultK").innerHTML = document.getElementById("info4_resultK").innerHTML;
	document.getElementById("info5_resultB").innerHTML = document.getElementById("info4_resultB").innerHTML;

	document.getElementById("info4_key").innerHTML = document.getElementById("info3_key").innerHTML;
	document.getElementById("info4_resultK").innerHTML = document.getElementById("info3_resultK").innerHTML;
	document.getElementById("info4_resultB").innerHTML = document.getElementById("info3_resultB").innerHTML;


	document.getElementById("info3_key").innerHTML = document.getElementById("info2_key").innerHTML;
	document.getElementById("info3_resultK").innerHTML = document.getElementById("info2_resultK").innerHTML;
	document.getElementById("info3_resultB").innerHTML = document.getElementById("info2_resultB").innerHTML;


	document.getElementById("info2_key").innerHTML = document.getElementById("info1_key").innerHTML;
	document.getElementById("info2_resultK").innerHTML = document.getElementById("info1_resultK").innerHTML;
	document.getElementById("info2_resultB").innerHTML = document.getElementById("info1_resultB").innerHTML;


	saves[10][0][0] = saves[9][0][0];
	saves[10][1][0] = saves[9][1][0];
	saves[10][2][0] = saves[9][2][0];

	saves[9][0][0] = saves[8][0][0];
	saves[9][1][0] = saves[8][1][0];
	saves[9][2][0] = saves[8][2][0];

	saves[8][0][0] = saves[7][0][0];
	saves[8][1][0] = saves[7][1][0];
	saves[8][2][0] = saves[7][2][0];

	saves[7][0][0] = saves[6][0][0];
	saves[7][1][0] = saves[6][1][0];
	saves[7][2][0] = saves[6][2][0];

	saves[6][0][0] = saves[5][0][0];
	saves[6][1][0] = saves[5][1][0];
	saves[6][2][0] = saves[5][2][0];

	saves[5][0][0] = saves[4][0][0];
	saves[5][1][0] = saves[4][1][0];
	saves[5][2][0] = saves[4][2][0];

	saves[4][0][0] = saves[3][0][0];
	saves[4][1][0] = saves[3][1][0];
	saves[4][2][0] = saves[3][2][0];

	saves[3][0][0] = saves[2][0][0];
	saves[3][1][0] = saves[2][1][0];
	saves[3][2][0] = saves[2][2][0];

	saves[2][0][0] = saves[1][0][0];
	saves[2][1][0] = saves[1][1][0];
	saves[2][2][0] = saves[1][2][0];

	saves[1][0][0] = peopleFirstXod;
	saves[1][1][0] = korovok;
	saves[1][2][0] = bychokov;

	document.getElementById("info1_key").innerHTML = peopleFirstXod;
	document.getElementById("info1_resultK").innerHTML = korovok;
	document.getElementById("info1_resultB").innerHTML = bychokov;	

	document.getElementById("xodInfo").text = xodov;
}

function FinishChecker(peopleFirstXod) {
	var strNumber = String(peopleFirstXod);
	var charArray = strNumber.split('');
	var sum = 0;

	for (var i = 0; i < 4; i++) {
		if (charArray[i] == ArrayBot[i]) { sum++; }
	}

	if (sum == 4) { return true; }
	return false;
}

function EndGame(peopleFirstXod) {
	finish = true;
	xodScore.value = xodov;
    document.getElementById("saveresult").className = "sidebarON";
	document.getElementById("startInfo").innerHTML = "Замечательно! Вы узнали задуманное число за " + xodov +" ходов."+ "! Это число " + peopleFirstXod;
	alert("Победа! Задуманное число " + peopleFirstXod + ". Потрачено "+ xodov + " ходов.");
}

function EndSaveResult() {
    document.getElementById("saveresult").className = "sidebarOFF";
}