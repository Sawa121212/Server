<?php
  session_start();
  require '../conn/db.php';
  
include("../inc/headerFirstFolder.php");
  $data = $_POST;
?>
<!DOCTYPE html>

<head>
    <title>Шифратор</title>
</head>

<body>

    <div class="container center">
    <form method="post">
        <div class="row center">
            <div class="input-field col s12">
                <div class="icon-block">
                    <h2 class="center light-blue-text"><i class="Large material-icons">settings</i></h2>
                    <h5 class="center">Шифратор</h5>
                    <p class="light center">Шифратор паролей</p>
                </div>
            </div>
        </div>
        <!-- code -->
        <div class="row center">
            <div class="input-field col s6">
                <!--code-->
                Введите пароль для MD5
            </div>
            <div class="input-field col s5">
                <!--code-->
                <input type="text" id="code" name="code" class="text">
                <label for="code">code</label>
            </div>

            <!-- code -->
            <div class="input-field col s6">
                <!--key-->
                Введите пароль для SHA1
            </div>
            <div class="input-field col s5">
                <!--key-->
                <input type="text" id="key" name="key" class="text">
                <label for="key">key</label>
            </div>
        </div>

        <!-- btn -->
        <div class="row">
            <div class="input-field col s12">
                <button class='btn blue darken-2 waves-effect waves-light z-depth-2 center' type='submit' name='decoded'>Зашифровать</button>
            </div>
        </div>

</form>
        <?php
        //если кликнули на button
        if (isset($_POST['decoded']))
        {            
            $password = md5(md5(trim($_POST['code'])));
            $password2 = SHA1(SHA1(trim($_POST['key'])));
            if($password != null)
            {
                echo "<span style='color:green; font-size: 16px;'><b>MD5: </b>".$password."</span><br>";
            }
            if($password2 != null)
            {
                echo "<span style='color:green; font-size: 16px;'><b>SHA1: </b>".$password2."</span><br>";
            }
        }
        ?>
    </div><!-- container -->

    <div class="sidenav-overlay"></div>
    <div class="drag-target"></div>

</body>

</html>