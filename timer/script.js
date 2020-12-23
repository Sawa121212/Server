(function() {
    //01.07.2019 1593590400000
    var _id = "51fca2f3f466f51801d85bd314016566"; //1561478640000  --1593590400000
    while (document.getElementById("timer" + _id)) _id = _id + "0";
    document.write("<div id='timer" + _id + "' style='min-width:830px;height:188px;'></div>");
    var _t = document.createElement("script");
    _t.src = "timer.min.js";
    var _f = function(_k) { var l = new MegaTimer(_id, { "view": [1, 1, 1, 1], "type": { "currentType": "1", "params": { "usertime": true, "tz": "3", "utc": 1593864000000} }, "design": { "type": "circle", "params": { "width": "15", "radius": "78", "line": "solid", "line-color": "#2b303a", "background": "gradient", "background-color": ["#00ffff", "#0000ff"], "direction": "direct", "number-font-family": { "family": "Ubuntu", "link": "<link href='//fonts.googleapis.com/css?family=Ubuntu&subset=latin,cyrillic' rel='stylesheet' type='text/css'>" }, "number-font-size": "60", "number-font-color": "#f3f3f3", "separator-margin": "13", "separator-on": false, "separator-text": ":", "text-on": true, "text-font-family": { "family": "Open Sans", "link": "<link href='//fonts.googleapis.com/css?family=Open+Sans&subset=latin,cyrillic' rel='stylesheet' type='text/css'>" }, "text-font-size": "17", "text-font-color": "#ffffff" } }, "designId": 7, "theme": "black", "width": 830, "height": 188 }); if (_k != null) l.run(); };
    _t.onload = _f;
    _t.onreadystatechange = function() { if (_t.readyState == "loaded") _f(1); };
    var _h = document.head || document.getElementsByTagName("head")[0];
    _h.appendChild(_t);

    document.write(utc);
}).call(this);