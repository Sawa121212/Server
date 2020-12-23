  /* --Задача 7. --*/
  
 /* -- Коды игроков --*/
 /* --  GameXod = 101 -- Код пустоты --*/
 /* --  p1 = 66  -- Код игрока1 - X  --*/
 /* --  p2 = 77  -- Код игрока2 - O  --*/
 /* --	aX_active = false  -- Код использования ячейки	--*/
 
 /* -- Код хода игрокоа(по умолчанию первым идет игрок1, значит GameXod = 66) --*/
var GameXod = 66;
 
  /* -- Для проверки на Выигрыш и Ничью --*/
var GameEnd = false;

  /* -- Для проверки на Ничью (максимум ходов = 9) --*/
var MaxXod = 0;
 
/* -------------------------------------------------------------------- Иконки ------------------------------------------------------------------*/  
	var icon = [];
	/* -- Стандартный фон --*/
	icon[0] = "images/start_picture.jpg";
    /* -- крестик и нолик обычные  image_X.src=icon[1 or 2]; --*/
  	icon[1] = "images/X.jpg";
	icon[2] = "images/O.jpg";
	/* -- Выигрышные крестик и нолик  image_X.src=icon[3 or 4]; --*/
	icon[3] = "images/win_X.jpg";
	icon[4] = "images/win_O.jpg";

 /* -- Коды клеток, будет менятся взависимости от хода игрока --*/
	var GameXod_a1 = 101; var a1_active = false;
	var GameXod_a2 = 101; var a2_active = false;
	var GameXod_a3 = 101; var a3_active = false;
	
	var GameXod_b1 = 101; var b1_active = false;
	var GameXod_b2 = 101; var b2_active = false;
	var GameXod_b3 = 101; var b3_active = false;
	
	var GameXod_c1 = 101; var c1_active = false;
	var GameXod_c2 = 101; var c2_active = false;
	var GameXod_c3 = 101; var c3_active = false;

	
/* ------------------------------------------------------------------ Сам МОЗГ игры ------------------------------------------------------------------*/
	/* -- Ax --*/
function xod_a1(event){
	var image = document.getElementById("image");
	if (a1_active == false){
		if (GameXod_a1 == 101){
			if(GameXod == 66){image_a1.src = icon[1]; GameXod_a1 = 66; GameXod = 77; a1_active = true; MaxXod++; CheckEnd();}
			else if(GameXod == 77){image_a1.src = icon[2]; GameXod_a1 = 77; GameXod = 66; a1_active = true; MaxXod++; CheckEnd();}
			else{ alert("ERROR with a1");}
		}
	}
	else{alert("Eta yacheyka ushe ispolzuetsya");}
	return false;
}
 function xod_a2(){
	var image = document.getElementById("image");
	if (a2_active == false){
		if (GameXod_a2 == 101){
			if(GameXod == 66){image_a2.src = icon[1]; GameXod_a2 = 66; GameXod = 77; a2_active = true; MaxXod++; CheckEnd();}
			else if(GameXod == 77){image_a2.src = icon[2]; GameXod_a2 = 77; GameXod = 66; a_active = true; MaxXod++; CheckEnd();}
			else{ alert("ERROR with a2");}
		}
	}
	else{alert("Eta yacheyka ushe ispolzuetsya");}
	return false;
} 
 function xod_a3(){
	var image = document.getElementById("image");
	if (a3_active == false){
		if (GameXod_a3 == 101){
			if(GameXod == 66){image_a3.src = icon[1]; GameXod_a3 = 66; GameXod = 77; a3_active = true; MaxXod++; CheckEnd();}
			else if(GameXod == 77){image_a3.src = icon[2]; GameXod_a3 = 77; GameXod = 66; a3_active = true; MaxXod++; CheckEnd();}
			else{ alert("ERROR with a3");}
		}
	}
	else{alert("Eta yacheyka ushe ispolzuetsya");}
	return false;
} 
 
	/* -- Bx --*/
 function xod_b1(){
	var image = document.getElementById("image");
	if (b1_active == false){
		if (GameXod_b1 == 101){
			if(GameXod == 66){image_b1.src = icon[1]; GameXod_b1 = 66; GameXod = 77; b1_active = true; MaxXod++; CheckEnd();}
			else if(GameXod == 77){image_b1.src = icon[2]; GameXod_b1 = 77; GameXod = 66; b1_active = true; MaxXod++; CheckEnd();}
			else{ alert("ERROR with b1");}
		}
	}
	else{alert("Eta yacheyka ushe ispolzuetsya");}
	return false;
}
 function xod_b2(){
	var image = document.getElementById("image");
	if (b2_active == false){
		if (GameXod_b2 == 101){
			if(GameXod == 66){image_b2.src = icon[1]; GameXod_b2 = 66; GameXod = 77; b2_active = true; MaxXod++; CheckEnd();}
			else if(GameXod == 77){image_b2.src = icon[2]; GameXod_b2 = 77; GameXod = 66; b2_active = true; MaxXod++; CheckEnd();}
			else{ alert("ERROR with b2");}
		}
	}
	else{alert("Eta yacheyka ushe ispolzuetsya");}
	return false;
} 
 function xod_b3(){
	var image = document.getElementById("image");
	if (b3_active == false){
		if (GameXod_b3 == 101){
			if(GameXod == 66){image_b3.src = icon[1]; GameXod_b3 = 66; GameXod = 77; b3_active = true; MaxXod++; CheckEnd();}
			else if(GameXod == 77){image_b3.src = icon[2]; GameXod_b3 = 77; GameXod = 66; b3_active = true; MaxXod++; CheckEnd();}
			else{ alert("ERROR with b3");}
		}
	}
	else{alert("Eta yacheyka ushe ispolzuetsya");}
	return false;
}
  
	/* -- Cx --*/
 function xod_c1(){
	var image = document.getElementById("image");
	if (c1_active == false){
		if (GameXod_c1 == 101){
			if(GameXod == 66){image_c1.src = icon[1]; GameXod_c1 = 66; GameXod = 77; c1_active = true; MaxXod++; CheckEnd();}
			else if(GameXod == 77){image_c1.src = icon[2]; GameXod_c1 = 77; GameXod = 66; c1_active = true; MaxXod++; CheckEnd();}
			else{ alert("ERROR with c1");}
		}
	}
	else{alert("Eta yacheyka ushe ispolzuetsya");}
	return false;
}
 function xod_c2(){
	var image = document.getElementById("image");
	if (c2_active == false){
		if (GameXod_c2 == 101){
			if(GameXod == 66){image_c2.src = icon[1]; GameXod_c2 = 66; GameXod = 77; c2_active = true; MaxXod++; CheckEnd();}
			else if(GameXod == 77){image_c2.src = icon[2]; GameXod_c2 = 77; GameXod = 66; c2_active = true; MaxXod++; CheckEnd();}
			else{ alert("ERROR with c2");}
		}
	}
	else{alert("Eta yacheyka ushe ispolzuetsya");}
	return false;
} 
 function xod_c3(){
	var image = document.getElementById("image");
	if (c3_active == false){
		if (GameXod_c3 == 101){
			if(GameXod == 66){image_c3.src = icon[1]; GameXod_c3 = 66; GameXod = 77; c3_active = true; MaxXod++; CheckEnd();}
			else if(GameXod == 77){image_c3.src = icon[2]; GameXod_c3 = 77; GameXod = 66; c3_active = true; MaxXod++; CheckEnd();}
			else{ alert("ERROR with c3");}
		}
	}
	else{alert("Eta yacheyka ushe ispolzuetsya");}
	return false;
}   
 /* ------------------------------------------------------------------- Конец МОЗГА ----------------------------------------------------*/ 


/* ------------------------------------------------------------------ Проверка на выигрыш ----------------------------------------------------*/ 	
function CheckEnd() {	
	if		(GameXod_a1==66 && GameXod_a2==66 && GameXod_a3==66){image_a1.src = icon[3]; image_a2.src = icon[3]; image_a3.src = icon[3]; Player1Win_timer();}
	else if (GameXod_a1==77 && GameXod_a2==77 && GameXod_a3==77){image_a1.src = icon[4]; image_a2.src = icon[4]; image_a3.src = icon[4]; Player2Win_timer();}
  
	else if (GameXod_b1==66 && GameXod_b2==66 && GameXod_b3==66){image_b1.src = icon[3]; image_b2.src = icon[3]; image_b3.src = icon[3]; Player1Win_timer();}
	else if (GameXod_b1==77 && GameXod_b2==77 && GameXod_b3==77){image_b1.src = icon[4]; image_b2.src = icon[4]; image_b3.src = icon[4]; Player2Win_timer();}
  
	else if (GameXod_c1==66 && GameXod_c2==66 && GameXod_c3==66){image_c1.src = icon[3]; image_c2.src = icon[3]; image_c3.src = icon[3]; Player1Win_timer();}
	else if (GameXod_c1==77 && GameXod_c2==77 && GameXod_c3==77){image_c1.src = icon[4]; image_c2.src = icon[4]; image_c3.src = icon[4]; Player2Win_timer();}
  
	else if (GameXod_a1==66 && GameXod_b1==66 && GameXod_c1==66){image_a1.src = icon[3]; image_b1.src = icon[3]; image_c1.src = icon[3]; Player1Win_timer();}
	else if (GameXod_a1==77 && GameXod_b1==77 && GameXod_c1==77){image_a1.src = icon[4]; image_b1.src = icon[4]; image_c1.src = icon[4]; Player2Win_timer();}
  
	else if (GameXod_a2==66 && GameXod_b2==66 && GameXod_c2==66){image_a2.src = icon[3]; image_b2.src = icon[3]; image_c2.src = icon[3]; Player1Win_timer();}
	else if (GameXod_a2==77 && GameXod_b2==77 && GameXod_c2==77){image_a2.src = icon[4]; image_b2.src = icon[4]; image_c2.src = icon[4]; Player2Win_timer();}
  
	else if (GameXod_a3==66 && GameXod_b3==66 && GameXod_c3==66){image_a3.src = icon[3]; image_b3.src = icon[3]; image_c3.src = icon[3]; Player1Win_timer();}
	else if (GameXod_a3==77 && GameXod_b3==77 && GameXod_c3==77){image_a3.src = icon[4]; image_b3.src = icon[4]; image_c3.src = icon[4]; Player2Win_timer();}
  
	else if (GameXod_a1==66 && GameXod_b2==66 && GameXod_c3==66){image_a1.src = icon[3]; image_b2.src = icon[3]; image_c3.src = icon[3]; Player1Win_timer();}
	else if (GameXod_a1==77 && GameXod_b2==77 && GameXod_c3==77){image_a1.src = icon[4]; image_b2.src = icon[4]; image_c3.src = icon[4]; Player2Win_timer();}
  
	else if (GameXod_a3==66 && GameXod_b2==66 && GameXod_c1==66){image_a3.src = icon[3]; image_b2.src = icon[3]; image_c1.src = icon[3]; Player1Win_timer();}
	else if (GameXod_a3==77 && GameXod_b2==77 && GameXod_c1==77){image_a3.src = icon[4]; image_b2.src = icon[4]; image_c1.src = icon[4]; Player2Win_timer();}
	else if (GameEnd == false && MaxXod == 9){
		var InfoXod9 = document.getElementById("InfoXod");
		InfoXod9.innerHTML = "";
	var InfoXod99 = document.getElementById("InfoTextXOdit");
		InfoXod99.innerHTML = "";
	AllActive();
	var InfoGameEnd3 = document.getElementById("InfoGameEnd");
	InfoGameEnd3.innerHTML = "НИЧЬЯ"; 
	window.NichyaId = window.setInterval(Nichya, 300);} 
	else  { NextXod();}
  return false;
}

/* ------------------------------------------------------------------- Инфо о выигрыше ----------------------------------------------------*/ 	
function Player1Win_timer() {
	var InfoXod11 = document.getElementById("InfoXod");
		InfoXod11.innerHTML = "";
	var InfoXod111 = document.getElementById("InfoTextXOdit");
		InfoXod111.innerHTML = "";
	AllActive();
	var InfoGameEnd1 = document.getElementById("InfoGameEnd");
	InfoGameEnd1.innerHTML = "ВЫИГРАЛ ИГРОК #1"; 
	window.Player1Win_timerId = window.setInterval(Player1Win, 300);
}
function Player2Win_timer() {
	var InfoXod22 = document.getElementById("InfoXod");
		InfoXod22.innerHTML = "";
	var InfoXod222 = document.getElementById("InfoTextXOdit");
		InfoXod222.innerHTML = "";	
	AllActive();
	var InfoGameEnd2 = document.getElementById("InfoGameEnd");
	InfoGameEnd2.innerHTML = "ВЫИГРАЛ ИГРОК #2"; 
	window.Player2Win_timerId = window.setInterval(Player2Win, 300);
}
function Player1Win() {
	alert("ВЫИГРАЛ ИГРОК #1");
	window.clearInterval(window.Player1Win_timerId);
}
function Player2Win() {
	alert("ВЫИГРАЛ ИГРОК #2");
	window.clearInterval(window.Player2Win_timerId);
}
function Nichya() {
	alert("НИЧЬЯ");
	window.clearInterval(window.NichyaId);
}

/* ------------------------------------------------------------------- Инфо о ходе ----------------------------------------------------*/ 	
function NextXod() {
	if(GameXod == 66){
		var InfoXod1 = document.getElementById("InfoXod");
		InfoXod1.innerHTML = "ИГРОК #1"; 
	}
	else if(GameXod == 77){
		var InfoXod2 = document.getElementById("InfoXod");
		InfoXod2.innerHTML = "ИГРОК #2"; 
	}
 return false;
}

/* ------------------------------------------------------- Активация всех кнопок в конце игры ----------------------------------------------------*/ 	
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