<div id="page">
    <div id="menuleftcontent">
        <ul class="blue darken-3 z-depth-1" id="menu">
            <div class="row">
                <!--Аккаунт-->
                <div class="input-field col s3">
                    <li><i class="material-icons left medium">account_circle</i></li>
                </div>
                <div class="input-field col s9">
                    <?php
                        if (isset($_SESSION['logged_user'])) {
                            echo "<li><a href='" . $folderRoot . "account_profile.php' style='font-size: 18px; color: white;'>" . $_SESSION['login'] . "</a></li>
                              <li><a href='" . $folderRoot . "account_profile.php' style='font-size: 13px; color: white;'>";
                            if ($_SESSION['usertype'] == 1) {
                                echo "Администратор";
                            }
                            if ($_SESSION['usertype'] == 2) {
                                echo "Редактор";
                            }
                            if ($_SESSION['usertype'] == 3) {
                                echo "Преподаватель";
                            }
                            if ($_SESSION['usertype'] == 4) {
                                echo "Студент";
                            }
                            echo "</a><a href='" . $folderRoot . "account_logout.php' style='font-size: 14px; color: white;'>Выйти</a></li>";
                        } else {
                            echo "<li><a href='" . $folderRoot . "account_login.php' style='font-size: 14px; color: white;'>Войти</a></li>";
                        }
                    ?>
                </div>
            </div>
        </ul>

        <li><a href="<? echo $folderRoot ?>index.php">Главная страница<i
                        class="material-icons left Tiny">chevron_right</i></a>
        </li>
        <li class="divider"></li>
        <li><a href="<? echo $folderRoot ?>mk_raspis_print_prepod.php">Расписание преподавателей<i
                        class="material-icons left Tiny">chevron_right</i></a></li>
        <li class="divider"></li>
        <li><a href="<? echo $folderRoot ?>mk_raspis_print_students.php">Расписание студентов<i
                        class="material-icons left Tiny">chevron_right</i></a></li>
        <li class="divider"></li>
        <li><a href="<? echo $folderRoot ?>mk_raspis_print_aud.php">Аудиторный фонд<i class="material-icons left Tiny">chevron_right</i></a>
        </li>
        <li class="divider"></li>

        <!--Регистрация-->
        <?php
            if ($_SESSION['usertype'] == 1 || $_SESSION['usertype'] == 2) {
                echo "<li><a href='" . $folderRoot . "mk_raspis.php'>Создать расписание<i class='material-icons left Tiny'>chevron_right</i></a></li><li class='divider'></li>";
                echo "<li><a href='" . $folderRoot . "mk_raspis_edit.php'>Учебный план<i class='material-icons left Tiny'>chevron_right</i></a></li><li class='divider'></li>";
                echo "<li><a href='" . $folderRoot . "account_signup.php'>Регистрация</a></li><li class='divider'></li>";
                echo "<li><a href='" . $folderRoot . "accounteditor/account_index.php'>Аккаунты</a></li>";
            }
        ?>
    </div><!--menuleftcontent-->

    <div id="clearingdiv"></div>
</div>

<script>
    $(function () {
        $("#maincontent > div:gt(0)").hide();
        $("#menu a").on("click", function (e) {
            var href = $(this).attr("href");
            $("#maincontent > " + href).show();
            $("#maincontent > :not(" + href + ")").hide();
        });
    });
</script>



