<?php
    session_start();
    $folderRootCount = 2;
    include("../inc/functions/func_folderRoot.php");
    include($folderRoot . "inc/functions/func_SESSION.php");
    CancelIsLoging($folderRoot);
    require $folderRoot . 'conn/db.php';
    $file_name = basename(__FILE__);

    include($folderRoot . "inc/alertStyle.php");
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <? include($folderRoot . "inc/z_head.php"); ?>
    <title>Авторизация</title>
</head>
<body>
<!--left panel-->
<? include($folderRoot . "inc/z_rightPanel.php"); ?>

<div class="container">
    <div class="row">
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
                if ($data['password'] === sha1(sha1($_POST['password']))) {
                    //если пароль совпадает, то нужно авторизовать пользователя
                    $_SESSION['logged_user'] = $data;
                    echo '<div">Здраствуйте, ';
                    $_SESSION['second_name'] = $data['second_name'];
                    $_SESSION['tabel_id'] = $data['tabel_id'];
                    $_SESSION['first_name'] = $data['first_name'];
                    $_SESSION['patronymic'] = $data['patronymic'];
                    $_SESSION['login'] = $data['login'];
                    $_SESSION['email'] = $data['email'];
                    $_SESSION['uid'] = $data['uid'];
                    $_SESSION['usertype'] = $data['usertype'];
                    $_SESSION['theme'] = $data['theme'];
                    $_SESSION['blocked'] = $data['is_blocked'];

                    header('Location: ' . $folderRoot . 'index.php');
                    exit;
                } else {
                    echo "<h5 style='color: #ff0000;'>Вы ввели неправильный логин или пароль</h5><br>";
                }
            }
            echo "<div class='col s12 m6 offset-m2'>";
            echo "<form id='login-form' form action='" . $_SERVER['PHP_SELF'] . "' method='POST'>
					<div class='row'>					 
						<div class='input-field col s12 m11'>     <!--Логин-->
							<i class ='material-icons prefix'>assignment_ind</i>
							<input type='text' id='nickname' class='nickname' name='login' placeholder='' value='" . @$data['login'] . "'>
							<label for='nickname'>Логин</label>
						</div>
						<div class='input-field col s12 m11'><!--Пароль-->
							<i class ='material-icons prefix'>lock</i>
							<input type='password' id='password-input' name='password' placeholder='' value='" . @$data['password'] . "'>							
						    <a href='#' class='password-control'></a>
						    <label for='password'>Пароль</label>						    
						</div>   
						<div class='input-field col s12 m11 left-align'><!--Пароль-->
						    <p style='margin-left: 15px;'>
                                <a href='#'>Восстановление пароля</a>
                            </p>
						</div>
						
						<div class='input-field col s12 m2'>
							<button class='btn darken-2 z-depth-2' 
							type='submit' name='do_login'>Войти</button>
						</div>
						<div class='input-field col s12 m2'>
						    <a href='account_signup.php' class='btn darken-2 z-depth-2'>Зарегистрироваться</a>
						</div>						
					</div>
				</form>";
            echo "</div>";
        ?>
    </div> <!-- /row center -->
</div>

<?php
    include($folderRoot . "inc/z_footer.php");
?>

</body>
</html>