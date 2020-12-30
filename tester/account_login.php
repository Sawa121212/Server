<?php
session_start();
require 'conn/db.php';

$file_name = basename(__FILE__);

include("inc/header.php");
include("inc/alertStyle.php");

?>
<?php
if (isset($_SESSION['logged_user'])) {
	header('Location: index.php');
	exit;
}
?>

<!DOCTYPE html>
<html>

<head>
	<title>Авторизация</title>
</head>

<body>
	<div class="container" align="center">
		<div class="row" align="center">
			<h3 align='center'>Авторизация</h3>
			<?php
			// Страница авторизации
			$data = $_POST;

			if (isset($data['do_login'])) //если кликнули на button
			{
				# Вытаскиваем из БД запись, у которой логин равняеться введенному
				$login = $_POST['login'];
				$query = mysqli_query($link, "SELECT * FROM users WHERE login='$login'");

				$data = mysqli_fetch_array($query);

				# Сравниваем пароли
				if ($data['password'] === md5(md5($_POST['password']))) {
					//если пароль совпадает, то нужно авторизовать пользователя
					$_SESSION['logged_user'] = $data;
					echo '<div style="color:dreen;">Здраствуйте, ';
					$_SESSION['second_name'] = $data['second_name'];
					$_SESSION['tabel_id'] = $data['tabel_id'];
					$_SESSION['first_name'] = $data['first_name'];
					$_SESSION['patronymic'] = $data['patronymic'];
					$_SESSION['login'] = $data['login'];
					$_SESSION['email'] = $data['email'];
					$_SESSION['usertype'] = $data['usertype'];

					echo $_SESSION['first_name'];
					echo "&nbsp";
					echo $_SESSION['patronymic'];
					echo "&nbsp<br/> Вы авторизованы под пользователем - ";
					echo $_SESSION['login'];
					echo '<br/>Можете перейти на <a href="index.php">главную</a> страницу.</div><hr>';


					//header('Refresh: 1; url = index.php');
					//header( 'Location: index.php', true, 301 );
					exit;
				} else {
					echo "<h5 style='color: red;'>Вы ввели неправильный логин/пароль</h5><br>";
				}
			}

			echo "<form class='col s12' style='width: 95%;' form action='" . $_SERVER['PHP_SELF'] . "' method='POST'>
					<div class='row'>
						<div class='input-field col s12'>     <!--Логин-->
							<i class ='material-icons prefix'>assignment_ind</i>
							<input type='text' id='nickname' class='nickname' name='login' value='" . @$data['login'] . "'>
							<label for='nickname'>Логин</label>
						</div>
					</div>	
					<div class='row'>
						<div class='input-field col s12'><!--Пароль-->
							<i class ='material-icons prefix'>lock</i>
							<input type='password' id='password' class='password' name='password' value='" . @$data['password'] . "'>
							<label for='password'>Пароль</label>
						</div>
					</div>

					<div class='row' align='center'>	
						<div class='input-field col s12 m2'>
							<button class='btn blue darken-2 z-depth-2' 
							type='submit' name='do_login'>Войти</button>
						</div>
						<div class='input-field col s12 m4'>
						<a href='account_signup.php' class='btn blue darken-2 z-depth-2'>
						Зарегистрироваться</a>
						</div>
					</div>
				</form>";
			?>
		</div> <!-- /row center -->
	</div>


	<div class="sidenav-overlay"></div>
	<div class="drag-target"></div>

</body>

</html>