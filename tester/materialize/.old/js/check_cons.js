required = new Array("id_kaf", "fio","status", "name_conf","who_conf","year_conf","statya");
required_show = new Array("кафедру", "Ф.И.О. автора", "статус","наименование конференции","место проведения","время проведения", "наименование доклада");

function SendForm(obj)
{
var i, j;

for(j=0; j<required.length; j++) {
    for (i=0; i<obj.length; i++) {
        if (obj.elements[i].name == required[j] && obj.elements[i].value == "" ) {
            alert('Пожалуйста, укажите ' + required_show[j]);
            obj.elements[i].focus();
            return false;
        }
    }
}

return true;
}
