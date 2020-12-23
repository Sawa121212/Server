<html>
<!--- #include virtual="/inc/connection.inc"-->

<body>
  <%
red=request("red")
nam_prd=request("nam_prd")
uid=request("uid")
set rs=server.CreateObject("ADODB.Recordset")

 if red=100 then
  response.redirect "predmet.asp"
 else
if red=1 then
 sql_txt="update predmets set name='" & nam_prd & "' where id=" & uid
else
  if len(trim(nam_prd))<>0 then
   sql_txt="insert into predmets (name, del) values('" & nam_prd & "', 0)"
  end if
end if
 end if
rs.open sql_txt, sConn
response.redirect "predmet.asp"
%>
</body>

</html>