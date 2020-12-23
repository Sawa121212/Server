<!--- #include virtual="/inc/connection.inc"-->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
	<meta http-equiv="Content-Language" content="ru">
	<meta content="text/css">
	<META HTTP-EQUIV="Expires" CONTENT="0">
</head>
<html>

<body>
	<%
code_spec=request("code_spec")
course=request("spr_course")
form_stud=left(request("spr_form_stud"),1)
on_s_month=request("on_s_month")
on_e_month=request("on_e_month")
two_s_month=request("two_s_month")
two_e_month=request("two_e_month")

if (on_e_month-on_s_month)<0 then
perem=on_e_month
on_e_month=on_s_month
on_s_month=perem
end if

if two_e_month-two_s_month>0 then
two_sem=two_e_month-two_s_month+1
else
two_sem=12-two_s_month+1+two_e_month
end if

set rs=createobject("ADODB.Recordset")

	for i=on_s_month to on_e_month
	sql_str="insert into spr_month_spec (code_spec,course,month_id,form_stud,semestr,id_date) values('" &_
	"" & code_spec & "','" & course & "','" & i & "','" & form_stud & "','1','" & date() & "')" 
	rs.open sql_str, sConn
	next
	for j=two_s_month to two_e_month
	sql_str="insert into spr_month_spec (code_spec,course,month_id,form_stud,semestr,id_date) values('" &_
	"" & code_spec & "','" & course & "','" & j & "','" & form_stud & "','2','" & date() & "')" 
	rs.open sql_str, sConn
	next
response.redirect "spr.asp"



%>
</body>

</html>