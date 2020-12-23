<?php
  session_start();
  require '../login/db.php';
?>
<!DOCTYPE html>
<head>
    <!--<link href="img/icon" rel="stylesheet">-->
	<!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="../materialize/css/materialize.min.css" media="screen,projection"/>
    <link type="text/css" rel="stylesheet" href="../materialize/css/style.css" media="screen,projection">

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>    

	
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<!--<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">-->
	<meta http-equiv="Content-Language" content="ru">	
	<meta content="text/css">	
	<META HTTP-EQUIV="Expires" CONTENT="0">	

  <title>Тест-модуль</title>
</head>
<body>
    
    <?php echo "<h5>";
			echo $_SESSION['email'];
			echo "</h5>";
    ?>
        <?php          
          //если кликнули на button
            if ( isset($data['do_edit']) )
            {
                $login = $_SESSION['login'];
                $query = mysql_query("SELECT * FROM users WHERE login='$login' LIMIT 1");
                $data = mysql_fetch_array($query); 

                $new_email = $_POST['email_new'];
                
                if ($new_email == '')
                {
                    echo "<div align='center' id='errors' style='color:red;'>Ошибка. Введите Email</div><hr>";
                }
                else
                {        
                    //проверка на существование одинакового email
                    $get_email = mysql_query("SELECT COUNT(id) FROM users WHERE email='$new_email'");
                    if(mysql_result($get_email, 0) > 0)
                    {
                        echo "<div align='center' id='errors' style='color:red;'>Пользователь с таким email уже существует в базе данных</div><hr>";
                    }                    
                    else
                    {
                        //ошибок нет
                        $result = mysql_query ("UPDATE users SET email='$new_email' WHERE login='$login'");
                        if ($result)
                        {
                            echo "<div align='center' id='errors' style='color:blue;'>Данные успешно обновлены.</div><hr>";
                            //$_SESSION['email'] = $new_email;
                        }
                        else
                        {
                            echo "<div align='center' id='errors' style='color:red;'>Данные не обновлены!</div><hr>";
                        }
                    }       
                }
            }
          ?>
      <a class="secondary-content btn blue modal-trigger" href="#modal1"><i class="material-icons">create</i></a>
      <!--<a href="#!" class="secondary-content"><i class="material-icons">create</i></a>-->
    
          <!-- Email Modal -->
          <div id="modal1" class="">
                <div class="modal-content">
                <h4>Редактирование</h4>
                <p>Введите данные</p>
                </div>
            
            <div class="modal-footer">                
              <form action="<?php $_SERVER['PHP_SELF'] ?>" method="post">
                <div class="row">
                  <div class="input-field col s6">   <!--Email-->
                    <i class ="material-icons prefix">mail</i>
                    <input type="email" id="email_new" class="validate" name="email_new" value="">
                    <label for="email_new">Email</label>
                  </div>
                </div>

                <div class="row">
                  <button class='btn blue darken-2 waves-effect waves-light z-depth-2' type='submit' name="do_edit">Изменить<i class='material-icons left'>border_color</i></button>
                  <button class='modal-close btn red darken-1 waves-effect waves-light z-depth-2'>Отмена<i class='material-icons left'>close</i></button>
                  <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
              </form>
            </div><!--/modal-footer-->
          </div><!-- /modal1 -->
          
  <!--  Scripts-->
  <script src="../materialize/js/jquery-2.1.1.min.js"></script>
  <script src="../materialize/js/materialize.min-v2.js"></script>
  <script src="../materialize/js/materialize.min.js"></script>
  <script src="../materialize/js/init.js"></script>
  <script src="../materialize/js/plugins.min.js"></script>
   

<div class="sidenav-overlay"></div><div class="drag-target"></div>

</body>
</html>