<!DOCTYPE html>
<html lang="ru">
<head>
    <link rel="shortcut icon" href="../img/icon.png" type="image/png">
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!--Black Theme-->
    <link type="text/css" rel="stylesheet"
          href=" ../materialize/css/ghpages-materialize.css" media="screen,projection">

    <link type="text/css" rel="stylesheet" href="../materialize/css/style.css"
          media="screen,projection">

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="Content-Language" content="ru">
    <meta content="text/css">
    <META HTTP-EQUIV="Expires" CONTENT="0">

    <title>Редактирование</title>
</head>
<body>
<!--left panel-->
<nav class="nav-extended" role="navigation">
    <div class="nav-wrapper z-depth-2">
        <a href="../index.php" class="brand-logo left"><i class="material-icons"
                                                          style="margin-left: 5px;">home</i></a>
        <a href="#" data-target="nav-mobile" class="sidenav-trigger right Tiny"><i class="material-icons">menu</i></a>
    </div>
</nav>

<header xmlns="http://www.w3.org/1999/html">
    <ul id="nav-mobile" class="sidenav sidenav-fixed">
        <!--Аккаунт-->
        <li>
            <div class='user-view'>
                <div class='background'>
                    <img src='../img/office.jpg'>
                </div>
                <a href='../account/account_profile.php'><img class='circle' src='../img/worker.jpg'><span
                            class='white-text name'><b>Администратор</b></span></a><a href='#name'><span
                            class='white-text name'>Николаев&nbspАлександр</span></a>
                <a href='#email'><span class='white-text email'>Sanek22cs@gmail.com</span></a></a><a
                        href='../account/account_logout.php'><i class='material-icons left small'
                                                                style='line-height: inherit;'>power_settings_new</i>Выйти</a>
            </div>
        </li>
        <li class='bold'>
            <a href='../tool/mybase.php' class='waves-effect waves-teal'>Мои тесты</a>
        </li>
        <li class='bold'>
            <a href='../adminer/news.php' class='waves-effect waves-teal'
               style='border: 1px solid;border-color: darkcyan;'>Управление новостями</a>
        </li>
        <li class='bold'>
            <a href='../adminer/adminpanel.php' class='waves-effect waves-teal'
               style='border: 1px solid;border-color: darkcyan;'>Администрирование</a>
        </li>
    </ul>
</header>


<!--index-->
<main>
    <div class="container">
        <div class="row">
            <h3 align='center'>Редактирование</h3>
        </div>

        <div class="row">
            <h5 align="center">Редактируйте и добавляйте вопросы</h5>

            <div class="infoText">
                <div class="infoTextZag">
                    <p><b>Пример</b></p>
                </div>
                <p><b>Вопрос:</b></p>
                <p>Выбери все фрукты и ягоды, которые красного цвета.</p>
                <br>
                <p><b>Варианты ответа:</b></p>
                <p>1. Клубника</p>
                <p>2. Абрикос</p>
                <p>3. Банан</p>
                <p>4. Малина</p>
                <p>5. Ананас</p>
                <br>
                <p><b>Правильные ответы:</b></p>
                <p>1,4</p>
            </div>

            <!--Добавить вопрос-->
            <div class='col s12 m12 lighten-1 z-depth-2' style='margin-bottom: .75em;'>
                <form form action="" method="POST">
                    <p><b>Вопрос:</b>
                        <input type='text' name='question' maxlength='3000' autocomplete='off'
                               placeholder='(макс. 300 символов)' value=''>

                        <b>Варианты ответа:</b>
                        <textarea name='answers' cols='40' rows='10' minlength='3' maxlength='1000'
                                  placeholder='(макс. 1000 символов)' class='materialize-textarea'></textarea>
                        <span class='helper-text' data-error='wrong' data-success='right'></span><br>

                    <p><b>Правильные ответы:</b>
                        <input type='text' name='applys' autocomplete='off' placeholder='(макс. 100 символов)' value=''>
                        <span class='helper-text' data-error='wrong' data-success='right'>Если несколько номеров ответа, пишите их через запятые</span>
                    <div class="row">
                        <div class="input-field col s12">
                            <button class='btn darken-2  z-depth-2' type='submit' name='add'>
                                <i class='material-icons left'>add</i>Добавить вопрос
                            </button>
                        </div>
                    </div>

                </form>
            </div>
            <br>

            <div class="row">
                <ul class="collection with-header z-depth-1">
                    <li class='collection-header'><h5>Ваши вопросы</h5>
                        <p>Количество вопросов: <b>30</b></p>
                    </li>
                    <li class='collection-item'>
                        <form action='/tester/tool/createquestion.php' method='POST' name='test_form1'>

                            <div class='col s12 m12 lighten-1 z-depth-2' style='margin-bottom: .75em;'>
                                <div class='col s12 m12 lighten-1 z-depth-1'
                                     style='margin-bottom: .75em;margin-top: .75em;'>
                                    <p>
                                        <b>1. Класс имеет:
                                            <span id='questApply1' style='color:red;'></span>
                                        </b>
                                    </p>
                                    <p>
                                        <label>
                                            <input class='with-gap' name='group1' type='radio' value='1' />
                                            <span id='11'>несколько конструкторов с одинаковой сигнатурой</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input class='with-gap' name='group1' type='radio' value='2' />
                                            <span id='12'>не более одного статического конструктора</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label><input class='with-gap' name='group1' type='radio' value='3' />
                                            <span id='13'>не более одного закрытого конструктора</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label><input class='with-gap' name='group1' type='radio' value='4' />
                                            <span id='14'>только конструктор по умолчанию</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label><input class='with-gap' name='group1' type='radio' value='5' />
                                            <span id='15'>только один конструктор</span>
                                        </label>
                                    </p>
                                </div>

                                <ul class='collapsible expandable'>
                                    <li>
                                        <div class='collapsible-header z-depth-1'>
                                            <i class='material-icons'>filter_drama</i>First
                                        </div>
                                        <div class='collapsible-body'><p><b>Вопрос:</b>
                                                <input type='text' name='question1' autocomplete='off'
                                                       value='Класс имеет:'>
                                            <p><b>Варианты ответа:</b><br><textarea name='answers1' cols='40' rows='10'
                                                                                    minlength='3' maxlength='500'
                                                                                    placeholder='Текст (макс. 500 символов)'
                                                                                    class='materialize-textarea'>несколько конструкторов с одинаковой сигнатурой
                                                                            не более одного статического конструктора
                                                                            не более одного закрытого конструктора
                                                                            только конструктор по умолчанию
                                                                            только один конструктор</textarea>
                                            <p><b>Правильные ответы:</b><br>
                                                <input type='text' name='applys1' autocomplete='off' value='2'></div>
                                    </li>
                                </ul>

                                <p>
                                    <button class='btn darken-2 z-depth-2 red' type='submit' name='deleteAnswer'
                                            value='1'>
                                        <i class='material-icons left'>delete</i>Удалить вопрос
                                    </button>
                                </p>
                            </div>


                            <div class='col s12 m12 lighten-1 z-depth-2' style='margin-bottom: .75em;'>
                                <div class='col s12 m12 lighten-1 z-depth-1'
                                     style='margin-bottom: .75em; margin-top: .75em;'>
                                    <p><b>2. Какой способ вызова исключения является корректным?
                                            <span id='questApply2' style='color:red;'></span></b></p>
                                    <p><label><input class='with-gap' name='group2' type='radio' value='1' />
                                            <span id='21'>Exception();</span></label>
                                    </p>
                                    <p><label><input class='with-gap' name='group2' type='radio' value='2' />
                                            <span id='22'>call new Exception();</span></label>
                                    </p>
                                    <p><label><input class='with-gap' name='group2' type='radio' value='3' />
                                            <span id='23'>throw new Exception();</span></label>
                                    </p>
                                    <p><label><input class='with-gap' name='group2' type='radio' value='4' />
                                            <span id='24'>call Exception();</span></label>
                                    </p>
                                    <p><label><input class='with-gap' name='group2' type='radio' value='5' />
                                            <span id='25'>throw Exception();</span></label>
                                    </p>
                                    <p><label><input class='with-gap' name='group2' type='radio' value='6' />
                                            <span id='26'>new Exception();</span></label>
                                    </p>
                                </div>

                                <ul class='collapsible'>
                                    <li>
                                        <div class='collapsible-header'><i class='material-icons'>filter_drama</i>First
                                        </div>
                                        <div class='collapsible-body'><p><b>Вопрос:</b>
                                                <input type='text' name='question2' autocomplete='off'
                                                       value='Какой способ вызова исключения является корректным?'>
                                            <p><b>Варианты ответа:</b><br><textarea name='answers2' cols='40' rows='10'
                                                                                    minlength='3' maxlength='500'
                                                                                    placeholder='Текст (макс. 500 символов)'
                                                                                    class='materialize-textarea'>Exception();
                                                    call new Exception();
                                                    throw new Exception();
                                                    call Exception();
                                                    throw Exception();
                                                    new Exception();</textarea>
                                            <p><b>Правильные ответы:</b><br>
                                                <input type='text' name='applys2' autocomplete='off' value='3'></div>
                                    </li>
                                </ul>
                                <p>
                                    <button class='btn darken-2 z-depth-2 red' type='submit' name='deleteAnswer'
                                            value='2'>
                                        <i class='material-icons left'>delete</i>Удалить вопрос
                                    </button>
                                </p>
                            </div>
                    </li>
                    <div class='row'>
                        <div class='input-field col s6 m3'>
                            <button class='btn darken-2 z-depth-2' type='submit' name='saveAll'>
                                <i class='material-icons left'>save</i>Сохранить
                            </button>
                        </div>
                        <div class='input-field col s6 m3'>
                            <button class='btn darken-2  z-depth-2 red' type='submit' name='cancel'>
                                <i class='material-icons left'>cancel</i>Отмена
                            </button>
                        </div>
                    </div>
                    </form>
                </ul>
            </div>

            <div class="row">
                <form class="col s12" form action="" method="POST">
                    <div class="row">
                        <div class="col s12 m12 lighten-1 z-depth-3">
                            <div class="icon-block">
                                <h5 class="center">Редактирование названия темы</h5>
                                <input id="test_name" name="test_name" type="text" class="validate"
                                       value="Тест по C#">
                                <label for="test_name">Название темы теста</label>
                            </div>
                            <div class="input-field col s6 m3 left">
                                <!--Проверить ответы-->
                                <button class='btn darken-2  z-depth-2' type='submit' name='editTestName'>
                                    <i class='material-icons left'>edit</i>
                                    Изменить
                                </button>
                            </div>

                        </div>
                    </div>
                </form>
            </div> <!-- edit test name -->
        </div> <!-- content -->
    </div>
</main>

<!--footer-->
<!--footer-->
<footer class="page-footer docs-footer">
    <div class="container">
        <div class="row" style="margin-bottom: 0;">
            <div class="col s12 m10 offset-m1">
                <label>Мы не собираем ваши данные, не введем учет посещений и прохождений тестов.</label>
                <div class="row">
                    <div class="footer-copyright">
                        <div class="container">
                            Made by <a class="orange-text text-lighten-3"
                                       href="http://materializecss.com/">Materialize</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>


<!--  Scripts-->
<script src="../materialize/js/jquery-3.2.1.min.js"></script>
<script>if (!window.jQuery) {
        document.write('<script src="../materialize/js/jquery-3.2.1.min.js"><\/script>');
    }</script>
<script src="../materialize/js/materialize.js"></script>
<script src="../materialize/js/init.js"></script>
</body>
</html>