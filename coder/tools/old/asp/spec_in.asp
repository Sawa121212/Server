<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
	<meta http-equiv="Content-Language" content="ru">
	<meta content="text/css">
	<META HTTP-EQUIV="Expires" CONTENT="0">
	<LINK href="/css/main.css" rel="stylesheet" type="text/css">
</head>
<html>
<!-- #include virtual="/inc/connection.inc"-->

<body class="t0">

	<form action="ins_sp.asp" method="post">
		<%
ins=request("ins")
c_sp=request("c_sp")
course=request("course")
fs=request("fs")

sql_string="select spec from price where code_spec='" & c_sp & "'"
set rs=server.Createobject("ADODB.Recordset")
rs.open sql_string, sConn
n_sp=rs("spec")
rs.close

select case fs 
case "О": fs_nam="Очная" 
case "З": fs_nam="Заочная" 
case "В": fs_nam="Вечерняя" 
end select
 response.write "<table width='100%' border='0' cellspacing='0' cellpadding='1'     class='t5'>"
 response.write "<tr><td align='center'>"

 if ins=1 then
'-------------------------------------
response.write "<center>Для специальности:<b> '" & n_sp & "'</b>,<br> форма обучения - <b>'" & fs_nam & "' - " & course & "</b> курс, введите следующие параметры: </center><br>"
response.write "<input type='hidden' value='" & c_sp & "' name='c_sp'>" 
response.write "<input type='hidden' value='" & course & "' name='course'>" 
response.write "<input type='hidden' value='" & fs & "' name='fs'>" 
response.write "<center> Семестр:&nbsp;&nbsp; <input type='text' name='semestr' class='t4' size='5'>&nbsp;&nbsp;"

sql_str="select id,name from predmets where del<>1"
set rs1=server.Createobject("ADODB.Recordset")
rs1.open sql_str, sConn

response.write "<br><br>Наименование предмета:&nbsp;&nbsp;"
response.write "<select name='prid' class='t4' size='1'>"
response.write "<option value=''>...</option>"

	  do while not rs1.eof
	  response.write "<option value='" & trim(rs1("id")) & "'>"& rs1("name") &"</option>"
      rs1.movenext
	  loop
	  rs1.close

response.write "</select><br><br>"
response.write "Количество часов:<br><br>&nbsp;&nbsp;"
response.write "лекционные:&nbsp;&nbsp;<input type='text' name='lektion' class='t4' size='5'>&nbsp;"
response.write "<br><br>&nbsp;&nbsp;"
response.write "лабораторные:&nbsp;&nbsp;<input type='text' name='lab' class='t4' size='5'>&nbsp;;"
response.write "<br><br>&nbsp;&nbsp;"
response.write "практические:&nbsp;&nbsp;<input type='text' name='prakt' class='t4' size='5'>&nbsp;"
response.write "<br><br>&nbsp;&nbsp;"
response.write "курсовые:&nbsp;&nbsp;<input type='text' name='kurs' class='t4' size='5'>&nbsp;"
response.write "<br><br>&nbsp;&nbsp;"
response.write "контрольные:&nbsp;&nbsp;<input type='text' name='kon' class='t4' size='5'>&nbsp;"
response.write "<br><br>&nbsp;&nbsp;"
response.write "Форма контроля:&nbsp;&nbsp;"
response.write "<select name='kontr' class='t4' size='1'>"
response.write "<option value=''>...</option>"
response.write "<option value='Зачет'>Зачет</option>"
response.write "<option value='Экзамен'>Экзамен</option>"
response.write "</select>"
response.write "<br><br><br>"
response.write "<input type='submit' value=' Ввод ' class='t1' size='15'>&nbsp;&nbsp;&nbsp;<input type='button' onclick='history.back();' value=' Назад ' class='t1' size='15'>"
response.write "</form>"
response.write "<hr width='95%' align='center' color='black' size='1'><br>"

'-----------------------------------
 else
'-----------------------------------
uid=request("uid")
sem=request("sem")
prid=request("prid")
response.write"<input type='hidden' value='"&uid&"' name='uid'>"
response.write "<center>Для специальности:<b> '" & n_sp & "'</b>,<br> форма обучения - <b>'" & fs_nam & "' - " & course & "</b> курс, введите следующие параметры: </center><br>"
response.write "<input type='hidden' value='" & c_sp & "' name='c_sp'>" 
response.write "<input type='hidden' value='" & course & "' name='course'>" 
response.write "<input type='hidden' value='" & fs & "' name='fs'>" 
response.write "<center> Семестр:&nbsp;&nbsp; <input type='text' name='semestr' class='t4' size='5' value="&sem&">&nbsp;&nbsp;"

sql_str="select id,name from predmets where del<>1"
set rs1=server.Createobject("ADODB.Recordset")
rs1.open sql_str, sConn

response.write "<br><br>Наименование предмета:&nbsp;&nbsp;"
response.write "<select name='prid' class='t4' size='1'>"
response.write "<option value=''>...</option>"

	  do while not rs1.eof
       if trim(rs1("id"))<>prid then
   	    response.write "<option value='" & trim(rs1("id")) & "'>"& rs1("name") &"</option>"
	   else
   	    response.write "<option value='" & trim(rs1("id")) & "' selected>"& rs1("name") &"</option>"
	   end if	
      rs1.movenext
	  loop
	  rs1.close

rs1.open "SELECT lektion, lab, prakt, kurs, kon, kontr FROM COURCE_SEMESTR where id=" & uid, sConn
response.write "</select><br><br>"
response.write "Количество часов:<br><br>&nbsp;&nbsp;"
	  do while not rs1.eof
response.write "лекционные:&nbsp;&nbsp;<input type='text' name='lektion' class='t4' size='5' value='"&rs1("lektion")&"'>&nbsp;;"
response.write "<br><br>&nbsp;&nbsp;"
response.write "лабораторные:&nbsp;&nbsp;<input type='text' name='lab' class='t4' size='5' value='"&rs1("lab")&"'>&nbsp;;"
response.write "<br><br>&nbsp;&nbsp;"
response.write "практические:&nbsp;&nbsp;<input type='text' name='prakt' class='t4' size='5' value='"&rs1("prakt")&"'>&nbsp;;"
response.write "<br><br>&nbsp;&nbsp;"
response.write "курсовые:&nbsp;&nbsp;<input type='text' name='kurs' class='t4' size='5' value='"&rs1("kurs")&"'>&nbsp;;"
response.write "<br><br>&nbsp;&nbsp;"
response.write "контрольные:&nbsp;&nbsp;<input type='text' name='kon' class='t4' size='5' value='"&rs1("kon")&"'>&nbsp;;"
kontr=rs1("kontr")
	  rs1.movenext
	  Loop
response.write "<br><br>&nbsp;&nbsp;"
response.write "Форма контроля:&nbsp;&nbsp;"
response.write "<select name='kontr' class='t4' size='1'>"
response.write "<option value=''>...</option>"
 if kontr="Зачет" then
response.write "<option value='Зачет' selected>Зачет</option>"
response.write "<option value='Экзамен'>Экзамен</option>"
 else
response.write "<option value='Зачет'>Зачет</option>"
response.write "<option value='Экзамен' selected>Экзамен</option>"
 end if
response.write "</select>"
response.write "<br><br><br>"
response.write "<input type='submit' value=' Сохранить ' class='t1' size='15'>&nbsp;&nbsp;&nbsp;&nbsp;"
response.write "<input type='button' value=' Назад ' onclick='javascript:history.back()' class='t1' size='15'>"
response.write "</form>"
'-----------------------------------
end if
%>
		</center>
</body>

</html>