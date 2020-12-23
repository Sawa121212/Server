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
var ArrayBot = new Array();;
var peopleFirstXod = 0;

//сохранения ходов в блоке
var saves = new Array(); //

saves = [
	[[0], [0], [0]],//0
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
				infoBox(korovka, bychok);
				xodInfo.value = xodov;
				return EndGame(peopleFirstXod);
			}
			if (SavesPlay(peopleXod) == false)
			{
				checkAnimals(peopleXod);
				//var bychokNum =  checkBychok(peopleXod);
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
		if (peopleXod == saves[0][0][0])
		{
			document.getElementById("startInfo").innerHTML = "Это число в списке!";
			return true;
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

	
	saves[0][0][0] = peopleFirstXod;
	saves[0][1][0] = korovok;
	saves[0][2][0] = bychokov;

	document.getElementById("info1_key").innerHTML = peopleFirstXod;
	document.getElementById("info1_resultK").innerHTML = korovok;
	document.getElementById("info1_resultB").innerHTML = bychokov;

	document.getElementById("xodInfo").innerHTML = xodov;
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