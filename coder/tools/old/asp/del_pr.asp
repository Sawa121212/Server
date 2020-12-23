<html>
<!--- #include virtual="/inc/connection.inc"-->

<body>
    <%
id=request("id")

set rs=server.CreateObject("ADODB.Recordset")

if len(trim(id))<>0 then
 sql_txt="update predmets set del=1 where id=" & id
 rs.open sql_txt, sConn
end if
 response.redirect "predmet.asp"
%>
</body>

</html>