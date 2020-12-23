<!-- #include virtual="/inc/connection.inc"-->
<!-- #include virtual="/inc/secury.inc"-->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
	<meta http-equiv="Content-Language" content="ru">
	<meta content="text/css">
	<META HTTP-EQUIV="Expires" CONTENT="0">
	<!--<LINK href="/css/main.css" rel="stylesheet" type="text/css">-->
</head>
<html>

<body class="t0">

	<form action="ch_spec.asp" method="post">
		<%
sql_string="select spec,code_spec from price"
set rs=server.Createobject("ADODB.Recordset")
rs.open sql_string, sConn
%>
		<center>
			Выберите специальность:&nbsp;&nbsp;&nbsp;
			<select name="code_spec" class="t4" size="1">
				<option value="">...</option>
				<%
	  do while not rs.eof
	  response.write "<option value='" & trim(rs("code_spec")) & "'>"& rs("spec") &"</option>"
      rs.movenext
	  loop
	  rs.close
	   %>
			</select>
			&nbsp;&nbsp;&nbsp;
			<input type="submit" value="  Ввод  " class="t1">
	</form>
	</center>
</body>

</html>