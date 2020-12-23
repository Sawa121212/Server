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
<form action="inp_prd.asp" method="post">
<table width="100%" border="0" cellspacing="0" cellpadding="1" class="tabl1">
<tr><td align="center">
&nbsp;Наименование предмета:&nbsp;
<a name="up">
<%
red=request("red")
uid=request("uid")
if red=1 then
set rs=server.CreateObject("ADODB.Recordset")
sql_str="select name from predmets where id=" & uid
rs.open sql_str, sConn
response.write "<input type='text' name='nam_prd' size='50'  value='"&rs("name")&"'></a>&nbsp;"
response.write "<br><br>"
response.write "<input type='submit' value='Сохранить' class='t1'>"
response.write "<input type='hidden' name='uid' value='"&uid&"' class='t4' size='50'>"
response.write "<input type='hidden' name='red' class='t4' value='"&red&"' size='50'>"
response.write "&nbsp;<input type='submit' class='t1' value='Отмена' onclick='Javascript:document.all.red.value=""100""; document.all.nam_prd.value=""""';>"

response.write "</form>"
rs.close
else
response.write "<input type='text' name='nam_prd' class='t4' size='50'></a>&nbsp;"
response.write "<br><br>"
response.write "<input type='submit' value='  Ввод  ' class='t1'>"
response.write "&nbsp;<input type='reset' class='t1' value='Отмена'>"
response.write "</form>"
end if
%>
&nbsp;
</td></tr></table>
<hr width="95%" align="center" color="black" size="1">
<%

set rs=server.CreateObject("ADODB.Recordset")

sql_str="select count(id) as cid from predmets where del<>1"
rs.open sql_str, sConn
cid=rs("cid")
rs.close
if cid<>0 then

 response.write "<table border='0' cellspacing='0' cellpadding='1' class='tabl1' align='center'>"
 response.write "<tr><td align='center'>"
 response.write "Список предметов, изучаемых в институте:"
 response.write "</td></tr></table><br>"
  response.write "<table border='0' cellspacing='0' cellpadding='1' class='tabl1' align='center'><tr>"
 
 sql_txt="select name, id from predmets where del<>1 ORDER BY name"
 rs.open sql_txt, sConn
 i=1
 rs.movefirst
 do while not rs.EOF
  response.write "<td align='left'><b>" & i & ". " & rs("name") & "</b>&nbsp;&nbsp;</td>"
  response.write "<td align='center'>&nbsp;<a href='?red=1&uid=" & rs("id") & "&#up'>править</a>&nbsp;</td>"
  response.write "<td align='center'>&nbsp;<a href='del_pr.asp?id=" & rs("id") & "'>удалить</a>&nbsp;</td></tr>"
  rs.movenext
  i=i+1
 loop
 
 response.write"</table>"
end if
%>
</body>
</html>
