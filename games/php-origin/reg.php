<body> 

<form method="post"> 
Введите ваше ФИО <br> 
<input type="text" name="fio"/><br/> 

ПОЛ <br/> 
M <input type="radio" name="sex" value="M"/><br/> 
F <input type="radio" name="sex" value="F"/><br/> 

Логин<br/> 
<input type="text" name="login"/><br/> 

Пароль<br/> 
<input type="password" name="pswd"/><br/><br/> 

<input type="submit" name="add" value="Зарегистрироваться"/> 
<input type="hidden" name="date" value="<?php echo date('Y-m-d') ?>" /> 
<input type="hidden" name="time" value="<?php echo date('H:i:s') ?>"/> 
</form> 


<?php 
//include_once("db_connect.php"); 
$servername = "localhost"; 
$username = "id7156015_god";// имя пользователя см. рис. 2 
$password = "GodMode";// пароль к БД, при необходимости его можно изменить см. рис. 2 
$database = "id7156015_registration";// имя БД рис. 2 
$db_table = "registration"; // имя таблицы с  которой будем работать 

 

// Create connection 
$conn = mysqli_connect($servername, $username, $password, $database); 
 

// Check connection 
if (!$conn) { 
    die("Connection failed: " . mysqli_connect_error()); 
} 

else{ 
echo "Connected successfully"; 
} 

/////////
$fio=$_POST['fio']; //работа с массивом POST 
$sex=$_POST['sex']; 
$login= $_POST['login']; 
$pswd= $_POST['pswd']; 
$date=$_POST['date']; 
$time=$_POST['time']; 

mysqli_query($conn, "INSERT INTO registration (fio, sex, login, pswd, date, time) VALUES ('$fio', '$sex', '$login', '$pswd', '$date', '$time')"); 
?> 
</body>