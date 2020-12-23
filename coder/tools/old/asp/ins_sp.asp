<html>
<!--- #include virtual="/inc/connection.inc"-->

<body>

    <%
lektion=request("lektion")
lab=request("lab")
prakt=request("prakt")
kurs=request("kurs")
kon=request("kon")

c_sp=request("c_sp")
course=request("course")
fs=request("fs")
semestr=request("semestr")
prid=request("prid")
kontr=request("kontr")

uid=request("uid")

if len(trim(uid))=0 then
sql_txt="insert into cource_semestr (semestr, fs, course, code_spec, kontr, predmets_id, lektion, lab, prakt, kurs, kon) values ('" & semestr & "','" & fs & "','" & course & "','" & c_sp & "','" & kontr & "'," & prid & "," & lektion & "," & lab & "," & prakt & "," & kurs & "," & kon & ")"
else
sql_txt="update cource_semestr set semestr='"&semestr&"', kontr='"&kontr&"', predmets_id="&prid&", lektion="&lektion&", lab="&lab&", prakt="&prakt&", kurs="&kurs&", kon="&kon&" where id="&uid
end if
set rs=server.Createobject("ADODB.Recordset")

rs.open sql_txt, sConn
response.redirect "spec_in.asp?c_sp=" & c_sp & "&course=" & course & "&fs=" & fs & "&ins=1"
%>
</body>

</html>