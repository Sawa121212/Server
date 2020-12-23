<!-- #include virtual="/inc/connection.inc"-->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
  <meta http-equiv="Content-Language" content="ru">
  <meta content="text/css">
  <META HTTP-EQUIV="Expires" CONTENT="0">
  <LINK href="/css/main.css" rel="stylesheet" type="text/css">
</head>
<html>

<body class="t0">

  <form action="spec_in.asp" method="post">
    <%
c_sp=request("code_spec")
sql_string="select spec from price where code_spec='" & c_sp & "'"
set rs=server.Createobject("ADODB.Recordset")
rs.open sql_string, sConn
n_sp=rs("spec")
rs.close
 response.write "<table width='100%' border='0' cellspacing='0' cellpadding='1'     class='t5'>"
 response.write "<tr><td align='center'>"
response.write "<center>Для специальности <b>'" & n_sp & "'</b> <br>выберите дополнительные параметры: </center><br>"
response.write "<input type='hidden' value='" & c_sp & "' name='c_sp'>" 
response.write "<input type='hidden' value='1' name='ins'>" 
%>
    <center>
      Курс:&nbsp;&nbsp;
      <select name="course" class="t4">
        <option value="">...</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>&nbsp;&nbsp;&nbsp;
      Форма обучения: &nbsp;&nbsp;
      <select name="fs" class="t4">
        <option value="">...</option>
        <option value="О">Очная</option>
        <option value="З">Заочная</option>
        <option value="В">Вечерняя</option>
      </select>
      &nbsp;&nbsp;&nbsp;
      <input type="submit" name="Submit" value=" Ввод " class="t1">
  </form>
  </center>
</body>

</html>