<?php
  session_start();
  require 'conn/db.php';

//ini_set('error_reporting',E_ALL);
//ini_set('display_errors',1);
//ini_set('display_startup_errors',1);

include("inc/headerFirstFolder.php");
  $data = $_POST;
?>
<!DOCTYPE html>

<head>
    <title>Раскодировать</title>
    <style>
        background-color: white;
    </style>
</head>

<body>

    <div class="container center">
    <form method="post">
        <div class="row center">
            <div class="input-field col s12">
                <div class="icon-block">
                    <h2 class="center light-blue-text"><i class="Large material-icons">settings</i></h2>
                    <h5 class="center">Decoder 1.0</h5>
                    <p class="light center">ну что, приступим?</p>
					<p>Введите код:</p>
                </div>
            </div>
        </div>
        <!-- code -->


            <!-- code -->
            <div class="input-field col s6">
                <!--key-->
                Введите код
            </div>
            <div class="input-field col s5">
                <!--key-->
                <input type="text" id="keys" name="keys" class="text">
                <label for="keys">code</label>
        	</div>

        <!-- btn -->
        <div class="row">
            <div class="input-field col s12">
                <button class='btn blue darken-2 waves-effect waves-light z-depth-2 center' type='submit' name='decoded'>Раскодировать</button>
            </div>
        </div>

</form>
        <?php
        //если кликнули на button
        if (isset($_POST['decoded']))
        {

		$stri =$_POST['keys'];
		//$stri = "хчлмвьеяга уоппаоакиявеоср впотт с  рст.орбйрзлдт  еоа.";
		$mystri = preg_split("//u", $stri,-1,PREG_SPLIT_NO_EMPTY);

$k = floor(count($mystri)/2+1);
$i= floor(count($mystri)/2);

			echo "<br><p><b>Ваш Код:</b> ". $stri. "</p>";
          //echo "<br>Tyt - ".count($mystri)/2 ."(". count($mystri).")";

            $password = $stri;

            if($password != null)
            {
                echo "<span style='color:green; font-size: 16px;'><b>SHA1: </b>";
              		for($z = floor(count($mystri)); $z > 0; $i--,$k++)
                    {
                      echo $mystri[$i];$z--;
                      if ($i == floor(count($mystri)/2))
                      {
                        $i--; echo $mystri[$i]; $z--;
                      }
                        if($k < floor(count($mystri))) echo $mystri[$k]; $z--;
                    }
                     echo "</span><br>";
            }
        }
        ?>
    </div><!-- container -->

    <div class="sidenav-overlay"></div>
    <div class="drag-target"></div>

</body>

</html>