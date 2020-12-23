    <style>
        .alertm_overlay {
            width: 100%;
            height: 100%;
            position: fixed;
            left: 0px;
            top: 0px;
            z-index: 99998;
            background: rgba(51, 51, 51, 0.82);
            display: none;
        }

        .alertm_all {
            font-family: Arial;
            width: 396px;
            padding: 29px 43px;
            border-radius: .25rem;
            background: #fff;
            position: fixed;
            left: 50%;
            /*margin-left: -241px;*/
            top: 50%;
            z-index: 99999;
        }

        .alertm_all a {
            -webkit-transition: all .2s ease-in-out;
            -o-transition: all .2s ease-in-out;
            transition: all .2s ease-in-out;
            text-decoration: none;
            color: #0275d8;
        }

        .alertm_all a:hover {
            color: #222;
        }

        .alertm_good {
            color: #0275d8;
            font-size: 19px;
            margin-bottom: 15px;
        }

        .alertm_bad {
            color: #d80226;
            font-size: 19px;
            margin-bottom: 15px;
        }

        .alertm_text {
            font-size: 16px;
            line-height: 23px;
        }

        .alertm_wrapper {}

        .alertm_but {
            display: inline-block;
            font-weight: 400;
            line-height: 1.25;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            border: 1px solid transparent;
            padding: .5rem 2rem;
            font-size: 1rem;
            border-radius: .25rem;
            -webkit-transition: all .2s ease-in-out;
            -o-transition: all .2s ease-in-out;
            transition: all .2s ease-in-out;
            color: #fff;
            background-color: #0275d8;
            border-color: #0275d8;
            display: block;
            margin-top: 25px;
            cursor: pointer;
        }
        .alertm_but2 {
            display: inline-block;
            font-weight: 400;
            line-height: 1.25;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            border: 1px solid transparent;
            padding: .5rem 2rem;
            font-size: 1rem;
            border-radius: .25rem;
            -webkit-transition: all .2s ease-in-out;
            -o-transition: all .2s ease-in-out;
            transition: all .2s ease-in-out;
            color: #fff;
            background-color: red;
            border-color: red;
            display: block;
            margin-top: 25px;
            cursor: pointer;
            }

        .alertm_but:hover {
            color: #fff;
            background-color: #025aa5;
            border-color: #01549b;
        }

        a.alertm_close {
            color: red;
            text-decoration: none;
            position: absolute;
            right: 7px;
            top: 0px;
            font-size: 25px;
        }
    </style>

        <script type='text/javascript'>
            function GoodAlert() {
                alert('<div class=\'alertm_good\'>Заголовок alert</div><div class=\'alertm_text\'>Все хорошо!</div>', '');
                return false;
            }
            function BadAlert() {
                alert2('<div class=\'alertm_bad\'>Заголовок alert</div><div class=\'alertm_text\'>Все хорошо!</div>', '');
                return false;
            }
        </script>
        <script>
            function alert(content, afterFunction) {
                $('<div class="alertm_overlay"></div>').appendTo('body');
                $('<div class="alertm_all"><a href="#" onclick="alert_close(' + afterFunction + '); return false" class="alertm_close">x</a><div class="alertm_wrapper">' + content + '</div><div class="alertm_but" onclick="alert_close(' + afterFunction + '); return false">OK</div></div>').appendTo('body');
                $(".alertm_overlay, .alertm_all").fadeIn("slow");
                $('.alertm_all').css('margin-top', (-1) * ($('.alertm_all').height()) + 'px');
                $('.alertm_all').css('margin-left', 100 + (-1) * ($('.alertm_all').width()) + 'px');
            }
            function alert2(content, afterFunction) {
                $('<div class="alertm_overlay"></div>').appendTo('body');
                $('<div class="alertm_all"><a href="#" onclick="alert_close(' + afterFunction + '); return false" class="alertm_close">x</a><div class="alertm_wrapper">' + content + '</div><div class="alertm_but2" onclick="alert_close(' + afterFunction + '); return false">OK</div></div>').appendTo('body');
                $(".alertm_overlay, .alertm_all").fadeIn("slow");
                $('.alertm_all').css('margin-top', (-1) * ($('.alertm_all').height()) + 'px');
                $('.alertm_all').css('margin-left', 100 + (-1) * ($('.alertm_all').width()) + 'px');
            }

            function alert_close(afterFunctionClouse) {
                $(".alertm_overlay, .alertm_all").remove();
                afterFunctionClouse;
            }
        </script>