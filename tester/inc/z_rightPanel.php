<nav class="nav-extended" role="navigation">
    <div class="nav-wrapper z-depth-2">
        <a href="<?= $folderRoot ?>index.php" class="brand-logo left"><i class="material-icons"
                                                                         style="margin-left: 5px;">home</i></a>
        <a href="#" data-target="nav-mobile" class="sidenav-trigger right"><i class="material-icons">menu</i></a>
    </div>
</nav>

<header xmlns="http://www.w3.org/1999/html">
    <ul id="nav-mobile" class="sidenav sidenav-fixed">
        <!--Аккаунт-->
        <?php
            echo "<li><div class='user-view'>
                    <div class='background'>
                        <img src='" . $folderRoot . "img/office.jpg'>
                    </div>";
            echo "<a href='" . $folderRoot . "account/account_profile.php'><img class='circle' src='" . $folderRoot . "img/worker.jpg'>";
            echo "<span class='white-text name'><b>";
            include($folderRoot . "inc/functions/func_usertype.php");
            echo "</b></span></a>";

            if (isset($_SESSION['logged_user'])) {
                echo "<a href='#name'><span class='white-text name'>" . $_SESSION['second_name'] . "&nbsp" . $_SESSION['first_name'] . "</span></a>
                      <a href='#email'><span class='white-text email'>" . $_SESSION['email'] . "</span></a>";
                
                echo "</a><a href='" . $folderRoot . "account/account_logout.php'><i class='material-icons left small' style='line-height: inherit;'>error</i>Выйти</a>";
            } else {
                echo "<a href='" . $folderRoot . "account/account_login.php' class='white-text'><i class='material-icons left small' style='line-height: inherit;'>account_circle</i>Войти</a><br>";
                echo "<a href='" . $folderRoot . "account/account_signup.php' class='white-text'><i class='material-icons left small' style='line-height: inherit;'>account_circle</i>Регистрация</a>";
            }
            echo "</div></li>";

        
        ///TODO bold active
         if (!empty($_SESSION['logged_user'])) {
             echo "<li class='bold'>
                        <a href='" . $folderRoot . "create/mybase.php' class='waves-effect waves-teal'>Мои тест</a>
                   </li>";
        }
        ?>
        <li class="bold">
            <a href="<?= $folderRoot ?>create/createquestion.php" class="waves-effect waves-teal">Создать тест</a>
        </li>
    </ul>
</header>


