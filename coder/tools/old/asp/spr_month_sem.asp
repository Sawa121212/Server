<!-- #include virtual="inc/connection.inc"-->
<!-- #include virtual="inc/secury.asp"-->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
    <meta http-equiv="Content-Language" content="ru">
    <meta content="text/css">
    <META HTTP-EQUIV="Expires" CONTENT="0">
    <LINK href="\css\main.css" rel="stylesheet" type="text/css">
</head>
<html>

<body>

    <script language="JavaScript">
        function write_month() {
            var d = document.all
            d["code_spec"].value = d["spr_code_spec"].value
            d["on_s_month"].value = d["start_data_on_sem"].value
            d["on_e_month"].value = d["end_data_on_sem"].value
            d["two_s_month"].value = d["start_data_two_sem"].value
            d["two_e_month"].value = d["end_data_two_sem"].value
        }
    </script>
    <form method="post" action="input_month.asp">
        <%
sql_string="select spec,code_spec from price"
set rs=server.Createobject("ADODB.Recordset")
rs.open sql_string, sConn
%>
        Выберите специальность:&nbsp;&nbsp;<select name="spr_code_spec" size="1">
            <option value="0">...</option>
            <%
	  do while not rs.eof
	  response.write "<option value='" & trim(rs("code_spec")) & "'>"& rs("spec") &"</option>"
      rs.movenext
	  loop
	  rs.close
	  db.close
	  set db=nothing
	  %>
        </select><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Выберите курс:&nbsp;&nbsp;
        <select name="spr_course" size="1">
            <option value="0">...</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
        </select><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Форма обучения:&nbsp;&nbsp;
        <select name="spr_form_stud" class=" " size="1">
            <option value="0">...</option>
            <option>Очная</option>
            <option>Заочная</option>
            <option>Вечерняя</option>
        </select>
        <br><br>
        <hr>
        <%
set rs=createobject("ADODB.recordset")
sql_str="select month_name, id_month from month_spec order by id_month"
rs.open sql_str, sConn
%>
        <center>
            <i>Выберите период, относящиеся к семестрам и нажмите кнопку "Ввод"</i><br><br><br>
            <table border="1" class="tabl1" cellpadding="0" cellspacing="0" bordercolor="#dcdcdc">
                <tr align="center" bgcolor="#dcdcdc">
                    <td>&nbsp;&nbsp;Семестры&nbsp;&nbsp;</td>
                    <td>&nbsp;&nbsp;Начало&nbsp;&nbsp;</td>
                    <td>&nbsp;&nbsp;Окончание&nbsp;&nbsp;</td>
                </tr>
                <tr align="center">
                    <td>1 семестр</td>
                    <td>с <select name="start_data_on_sem">
                            <%
do while not rs.eof
response.write "<option class=' ' value='"&rs("id_month")&"'>"&rs("month_name")&"</option>"
rs.movenext
loop
%>
                        </select></td>
                    <td>по <select name="end_data_on_sem">
                            <%
rs.movefirst
do while not rs.eof
response.write "<option class=' ' value='"&rs("id_month")&"'>"&rs("month_name")&"</option>"
rs.movenext
loop
%>
                        </select></td>
                </tr>

                <tr align="center">
                    <td>2 семестр</td>
                    <td>с <select name="start_data_two_sem">
                            <%
rs.movefirst
do while not rs.eof
response.write "<option class=' ' value='"&rs("id_month")&"'>"&rs("month_name")&"</option>"
rs.movenext
loop
%>
                        </select></td>
                    <td>по <select name="end_data_two_sem">
                            <%
rs.movefirst
do while not rs.eof
response.write "<option class=' ' value='"&rs("id_month")&"'>"&rs("month_name")&"</option>"
rs.movenext
loop
%>
                        </select></td>
                </tr>
            </table><br><br>
            <input type="submit" class="t1" value="  Ввод  " onclick="write_month()">
        </center>
        <input type="hidden" name="code_spec">
        <input type="hidden" name="on_s_month">
        <input type="hidden" name="on_e_month">
        <input type="hidden" name="two_s_month">
        <input type="hidden" name="two_e_month">
    </form>
</body>

</html>