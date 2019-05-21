"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log($("#version").html());

var Buld = function () {
    function Buld(objlabel) {
        _classCallCheck(this, Buld);

        this.ObjLabel = objlabel;
        this.arr = function () {
            var arr = [];
            for (var id in this.ObjLabel) {
                arr.push(id);
            }
            return arr;
        };
        this.mass = this.arr(); //["C1","C2"]
    }

    _createClass(Buld, [{
        key: "buldOption",
        value: function buldOption(massLab, massVal, id) {
            var option = "\n\t\t\t\t<tr style=\"display:none\">\n\t\t\t\t\t<td><input type=\"checkbox\" value=\"0\"  name=\"" + id + "[]\" id=\"" + id + "_0\" onclick=\"buld.All('" + id + "',0)\"></td>\n\t\t\t\t\t<td><label for=\"" + id + "_0\">ALL</label></td>\n\t\t\t\t</tr>";
            for (var _i = 0; _i < massLab.length; _i++) {
                option += "<tr id=\"" + id + "_" + massVal[_i] + "_table\" style=\"background-color:#F8F8FF\">\n                <td>\n\t\t\t\t\t<input type=\"checkbox\" value=\"" + massVal[_i] + "\" id=\"" + id + "_" + massVal[_i] + "\" name=\"" + id + "[]\" onclick=\"buld.All('" + id + "'," + massVal[_i] + ")\">\n\t\t\t\t</td>\n\t\t\t\t<td><label for=\"" + id + "_" + massVal[_i] + "\" > " + massLab[_i] + " \n\t\t\t\t<span id=\"" + id + "_" + massVal[_i] + "_cap\"> </span>\n\t\t\t\t</label></td>\n\t\t\t</tr>";
            }
            /////////NEW
            option += "\n\t\t\t\t\t\t\t\t<tr style=\"width:100%\">\n\t\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"text-center  font-weight-bold\" style=\"cursor:pointer\">\n\t\t\t\t\t\t\t\t\t\t<div id=\"" + id + "_plus\" onclick=\"buld.Plus('" + id + "')\" class=\"\" style=\"width:100%\">+</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>";
            /////////NEW
            return option;
        }
    }, {
        key: "buldSelect",
        value: function buldSelect() {
            var select = "";
            var caunt = 0;
            for (var _mass in this.ObjLabel) {
                select += "<div class=\"BOX-SELECT\">\n\t\t\t\t\t\t\t<div id=\"" + _mass + "\" class=\"SELECT-CLICK\" onClick=\"buld.OnShow(this.id)\">\n\t\t\t\t\t\t\t\t" + this.ObjLabel[_mass]["name"] + "  \n\t\t\t\t\t\t\t\t<div class=\"select-icon\" id=\"" + _mass + "_icon\">&#9660</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id=\"" + _mass + "_select\"  class=\"SELECT\">\n\t\t\t\t\t\t\t<div class=\"showOFF\" id=\"" + _mass + "_show\">\n\t\t\t\t\t\t\t\t<table class=\"\">\n\t\t\t\t\t\t\t\t\t" + this.buldOption(this.ObjLabel[_mass]["cat"], this.ObjLabel[_mass]["val"], _mass) + "\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>     \n\t\t\t\t\t </div>";
                caunt++;
            }
            return select;
        }
    }, {
        key: "buldInner",
        value: function buldInner(id) {
            document.getElementById(id).innerHTML = this.buldSelect();
        }
    }, {
        key: "All",
        value: function All(id, val) {
            this.AJAX(id);
            var all = document.getElementById(id + "_0");
            if (val == 0) {
                if (all.checked) {
                    for (var _i2 = 0; _i2 < this.ObjLabel[id]["val"].length; _i2++) {
                        document.getElementById(id + "_" + this.ObjLabel[id]["val"][_i2]).checked = true;
                    }
                } else {
                    for (var _i3 = 0; _i3 < this.ObjLabel[id]["val"].length; _i3++) {
                        document.getElementById(id + "_" + this.ObjLabel[id]["val"][_i3]).checked = false;
                    }
                }
            } else {
                all.checked = false;
            }
        }
    }, {
        key: "OnShow",
        value: function OnShow(id) {
            var show = document.getElementById(id + "_show").className;
            var show2 = document.getElementById(id + "_show");
            var icon = document.getElementById(id + "_icon");

            if (show == "showOFF") {
                show2.className = "showON";
                icon.innerHTML = "&#9650";
            } else {
                show2.className = "showOFF";
                icon.innerHTML = "&#9660";
            }
        }
    }, {
        key: "Plus",
        value: function Plus(ID) {
            var mass = this.ObjLabel[ID]["val"];
            var div = document.getElementById(ID + "_plus");

            if (div.innerHTML == "+") {
                var caunt = 0;
                for (var _i4 = 0; _i4 < mass.length; _i4++) {
                    if (document.getElementById(ID + "_" + mass[_i4] + "_table").style.color == "silver") {
                        document.getElementById(ID + "_" + mass[_i4] + "_table").style.display = "";
                        caunt++;
                    }
                }
                if (caunt != 0) {
                    div.innerHTML = "-";
                }
            } else {
                for (var _i5 = 0; _i5 < mass.length; _i5++) {
                    if (document.getElementById(ID + "_" + mass[_i5] + "_table").style.color == "silver") {
                        document.getElementById(ID + "_" + mass[_i5] + "_table").style.display = "none";
                    }
                }
                div.innerHTML = "+";
            }
        }
    }, {
        key: "AJAX",
        value: function AJAX(ID) {
            var arrJSON = void 0;
            for (var _mass2 in this.ObjLabel) {
                for (var _i6 = 0; _i6 < this.ObjLabel[_mass2]["val"].length; _i6++) {
                    if (ID != _mass2) {
                        document.getElementById(_mass2 + "_" + this.ObjLabel[_mass2]["val"][_i6] + "_table").style.color = "silver";
                        document.getElementById(_mass2 + "_" + this.ObjLabel[_mass2]["val"][_i6] + "_table").style.display = "none";
                    }
                    ///////////////NEW
                    if (document.getElementById(_mass2 + "_" + this.ObjLabel[_mass2]["val"][_i6]).checked == true) {
                        document.getElementById(_mass2 + "_" + this.ObjLabel[_mass2]["val"][_i6] + "_table").style.color = "black";
                        document.getElementById(_mass2 + "_" + this.ObjLabel[_mass2]["val"][_i6] + "_table").style.display = "";
                    }
                    ///////////////NEW
                }
                document.getElementById(_mass2 + "_plus").innerHTML = "+";
            }
            ///////////////////////////////
            var postOld = $("#FormAction").serialize();
            $.post("last.php", postOld, function (request) {
                try {
                    arrJSON = JSON.parse(request);
                    for (var _mass3 in arrJSON) {
                        for (var _key in arrJSON[_mass3]) {
                            var div = document.getElementById(_mass3 + "_" + arrJSON[_mass3][_key] + "_table");
                            if (div != null) {
                                div.style.color = "black";
                                div.style.display = "";
                            } else {}
                        }
                    }
                } catch (e) {
                    console.log("NE RABOTAET");
                    console.log(e);
                    console.log(request);
                }
            });
            $.post("last1.php", postOld, function (request) {
                POKAZ("massResult", request);
            });
        }
    }]);

    return Buld;
}();

var buld = new Buld(ObjLabel);

buld.buldInner("tableBuild");
window.onload = lopster(); /////////////////******************************************************************************
////////////////////////////////BUILDGOOGLE///////////////////
var Time = ["SBJNUM", "IDR", "IMG"];
function buildGoogle(mass) {
    var option = "";
    for (var _i7 = 0; _i7 < mass.length; _i7++) {
        option += "<option value=\"" + mass[_i7] + "\">" + mass[_i7] + "</option>";
    }
    document.getElementById("SCAT").innerHTML = option;
}
buildGoogle(Time);
document.getElementById("WORD").oninput = document.getElementById("WORD").onipaste = function () {
    SAJAX();
};
function SAJAX() {
    var word = document.getElementById("WORD").value;

    if (word) {
        var postId = $("#FormGoogle").serialize();

        $.post("search.php", postId, function (request) {
            try {
                ArrSearch = JSON.parse(request);
                var dropList = "";
                for (i = 0; i < ArrSearch.length; i++) {
                    dropList += "<li class=\"dropdown-item\"  onclick=\"DropDawn('" + ArrSearch[i] + "')\">" + ArrSearch[i] + "</li>";
                }
                document.getElementById("DROP").innerHTML = dropList;
                // console.log(ArrSearch) ;
            } catch (e) {
                console.log("NE RABOTAET");
                console.log(e);
                console.log(request);
            }
        });
        ///////////////////
        $.post("imageSearch.php", postId, function (request) {
            var result = void 0;
            try {
                var arrImg = JSON.parse(request);

                result = arrImg["uid"].length;
            } catch (e) {
                result = 0;
            }
            POKAZ("AjaxResult", result);
            window.onload = lopster(); /////////////////********************************************************************
        });
        //////
    }
    lopster();
}
function RESULT2() {
    var postId = $("#FormGoogle").serialize();
    $.post("imageSearch.php", postId, function (request) {
        try {
            var arrImg = JSON.parse(request);
            GRID(arrImg);
        } catch (e) {
            console.log("NE RABOTAET");
            console.log(e);
            console.log(request);
        }
    });
}
////////////////////////////////BUILDGOOGLE///////////////////
function RESULT() {
    var form = void 0;
    form = $("#FormAction").serializeArray();
    IMAGE = $.post("image.php", $("#FormAction").serializeArray(), function (request) {
        try {
            var arrImg = JSON.parse(request);
            GRID(arrImg);
        } catch (e) {
            console.log(e);
            alert("\u041D\u0435 \u0432\u0435\u0440\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u043D\u044B \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043F\u043E\u0438\u0441\u043A\u0430");
        }
    });
}
function FunPAG(val, cell) {
    for (var _i8 = 1; _i8 <= cell; _i8++) {
        if (_i8 == val) {
            document.getElementById("LIST_" + _i8).style.display = "inline";
            document.getElementById("PAGNAM_" + _i8).style.color = "black";
            document.getElementById("PAGNAM_" + _i8).style.fontWeight = "bold";
        } else {
            document.getElementById("LIST_" + _i8).style.display = "none";
            document.getElementById("PAGNAM_" + _i8).style.color = "";
            document.getElementById("PAGNAM_" + _i8).style.fontWeight = "";
        }
    }
}
function GRID(ArrImage) {
    var R = 10,
        C = 6,
        RR = 0,
        DIV = "",
        PAG = "";

    var cell = Math.ceil(ArrImage["SBJNUM"].length / (R * C));
    for (var list = 1; list <= cell; list++) {
        var first = void 0;
        var ten = void 0;
        if (list == 1) {
            first = "inline";
        } else {
            first = "none";
        }
        DIV += "<div id=\"LIST_" + list + "\" style=\"display:" + first + "\">\n\t\t\t\t" + Row(ArrImage["SBJNUM"], list, R, C) + "\n\t\t\t\t </div>";
        if (list >= 1 && list <= 10) {
            ten = "inline";
        } else {
            ten = "none";
        }
        PAG += "<li class=\"page-item\" style=\"display:" + ten + "\" id=\"PAGIN_" + list + "\"  value=\"" + list + "\" onclick=\"FunPAG(this.value," + cell + ")\">\n\t\t\t\t\t\t\t<span class=\"page-link\" id=\"PAGNAM_" + list + "\">" + list + "</span>\n\t\t\t\t\t</li>";
    }
    function Row(MassImd, list, R, C) {
        var Row = "";
        for (var row = 1; row <= R; row++) {
            if ((list - 1) * R * C + (row - 1) * C <= MassImd.length) {
                Row += "<div class=\"row\">\n\t\t\t\t\t\t\t\t\t" + Col(ArrImage, list, row, R, C) + "\t\n\t\t\t\t\t\t\t</div>";
            }
        }
        return Row;
    }

    function Col(MassJson, list, row, R, C) {
        var Col = "";

        for (var col = 1; col <= C; col++) {
            var _t = (list - 1) * R * C + (row - 1) * C + col;
            if (_t <= MassJson["SBJNUM"].length) {
                if (RR != _t - 1) {
                    console.log("RR=" + RR + "T=" + (_t - 1));
                }
                RR++;
                Col += "\n\t\t\t<div class=\"col\" style=\"max-width:210px \">\n\t\t\t<a href=\"picture.php?IMAGESHOW=" + MassJson["SBJNUM"][_t - 1] + "\" target=\"_blank\">\n\t\t\t\t<table class=\"table table-sm\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td scope=\"col\" \n\t\t\t\t\t\t\t\tstyle=\"height:200px;background:url('img/imgsm/" + MassJson["IMG"][_t - 1] + "') 100% 100% no-repeat;\n\t\t\t\t\t\t\t\tbackground-size:cover\">\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td scope=\"col\" style=\"font-size:10px ; \">\n\t\t\t\t\t\t" + MassJson["SBJNUM"][_t - 1] + " \n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t\t</a>\n\t\t\t</div>";
            }
        }
        return Col;
    }

    document.getElementById("PICTURE").innerHTML = DIV;
    document.getElementById("PAGIN").innerHTML = "\n\t\t\t\t\t\t\t\t<li class=\"page-item\" onclick=\"NEXT(" + cell + ",'pre')\"><span class=\"page-link\">Previous</span></li>\n\t\t\t\t\t\t\t\t\t" + PAG + "\n\t\t\t\t\t\t\t\t<li class=\"page-item\" onclick=\"NEXT(" + cell + ",'next')\"><span class=\"page-link\">Next(" + cell + ")</span></li>";
}
function NEXT(cell, next) {
    if (next == "next") {
        for (var _i9 = cell; _i9 >= 1; _i9--) {
            var _next = document.getElementById("PAGIN_" + _i9);
            if (_next.style.display == "inline" && _i9 != cell) {
                document.getElementById("PAGIN_" + (_i9 + 1)).style.display = "inline";
                break;
            }
        }
        for (var _i10 = 1; _i10 <= cell; _i10++) {
            var _next2 = document.getElementById("PAGIN_" + _i10);
            if (_next2.style.display == "inline" && _i10 <= cell - 10) {
                _next2.style.display = "none";
                break;
            }
        }
    }
    if (next == "pre") {
        for (var _i11 = cell; _i11 >= 1; _i11--) {
            var _next3 = document.getElementById("PAGIN_" + _i11);
            if (_next3.style.display == "inline" && _i11 > 10) {
                document.getElementById("PAGIN_" + _i11).style.display = "none";
                break;
            }
        }
        for (var _i12 = 1; _i12 <= cell; _i12++) {
            var _next4 = document.getElementById("PAGIN_" + _i12);
            if (_next4.style.display == "inline" && _i12 > 1) {
                document.getElementById("PAGIN_" + (_i12 - 1)).style.display = "inline";
                break;
            }
        }
    }
}

function ZAPROZAJAX() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "TEXT";
    var ajax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "ajax";

    text = ajax == "ajax" ? text : document.getElementById(text).value;
    lang = ["ru", "ua", "en"];
    table = ["C1", "C1a", "C2", "S7x1", "S7x2", "S7x3", "S7x4", "S7x5", "S7x6", "S7x7", "D1", "D2", "D3", "S2"];
    table2 = ["IDR", "SBJNUM", "IMG"];
    var zapros = "";

    if (ajax == "ajax") {
        ///////////////////////////////////////////////////////
        for (var _i13 = 0; _i13 < table.length; _i13++) {
            for (var j = 0; j < lang.length; j++) {
                zapros += "SELECT " + lang[j] + " FROM `" + table[_i13] + "` WHERE " + table[_i13] + "." + lang[j] + " LIKE \"%" + text + "%\" \n\t\t\t\t\t\tUNION \n";
            }
        }
        for (var x = 0; x < table2.length; x++) {
            union = x == 0 ? "" : "UNION";
            zapros += union + " SELECT " + table2[x] + " FROM `ObjValue` WHERE " + table2[x] + " LIKE \"%" + text + "%\"\n\t\t\n\t\t";
        }
        zapros += " LIMIT 10";

        $.post("AjaxGoogle.php", { TEXT: zapros }, function (request) {
            try {
                ArrSearch = JSON.parse(request);
                var dropList = "";
                for (i = 0; i < ArrSearch.length; i++) {
                    for (key in ArrSearch[i]) {
                        dropList += "<li class=\"dropdown-item\"  onclick=\"DropDawn('" + ArrSearch[i][key] + "','GOOGLEVALUE')\">" + ArrSearch[i][key] + "</li>";
                    }

                    //console.log(ArrSearch[i]) ;
                }
                document.getElementById("DROPGOOLE").innerHTML = dropList;
            } catch (e) {
                console.log("NE RABOTAET");
                console.log(e);
                console.log(request);
            }
        });
        ///////////////////////////////////////////////////////////
    } else {
        ///////////////////////////////////////////////////////

        var TableLike = function TableLike(mass, val) {
            t = "";
            for (i = 0; i < mass.length; i++) {
                t += "SELECT SBJNUM,IMG FROM `ObjValue`,`" + mass[i] + "` WHERE " + mass[i] + ".id=" + mass[i] + " AND (" + mass[i] + ".ru LIKE \"%" + val + "%\" OR " + mass[i] + ".ua LIKE \"%" + val + "%\" OR " + mass[i] + ".en LIKE \"%" + val + "%\" ) GROUP BY SBJNUM UNION \n";
            }
            return t;
        };

        zapros += TableLike(table, text);
        zapros += "SELECT SBJNUM , IMG FROM `ObjValue` WHERE SBJNUM  LIKE '%" + text + "%'  GROUP BY SBJNUM UNION \n";
        zapros += "SELECT SBJNUM , IMG FROM `ObjValue` WHERE IMG  LIKE '%" + text + "%'  GROUP BY SBJNUM UNION \n";
        zapros += "SELECT SBJNUM , IMG FROM `ObjValue` WHERE IDR  LIKE '%" + text + "%'  GROUP BY SBJNUM \n";

        $.post("AjaxGoogle.php", { TEXT: zapros }, function (request) {
            try {
                ArrSearch = JSON.parse(request);
                var dropList = "";
                var objImg = { SBJNUM: [], IMG: [] };

                for (i = 0; i < ArrSearch.length; i++) {
                    for (mass in ArrSearch[i]) {
                        objImg[mass].push(ArrSearch[i][mass]);
                    }
                }
                GRID(objImg);
                POKAZ("massResult", objImg["IMG"].length);
            } catch (e) {
                console.log("NE RABOTAET");
                console.log(e);
                console.log(request);
            }
        });
        ///////////////////////////////////////////////////////////
    }
}

function POKAZ() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "massResult";
    var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    if (!isNaN(val * 1)) {
        document.getElementById(id).innerHTML = "\n\t\t<b>\n\t\t<span class=\"ru\">\u041D\u0430\u0439\u0434\u0435\u043D\u043E " + val + "  \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432</span>\n\t\t<span class=\"ua\">\u0417\u043D\u0430\u0439\u0434\u0435\u043D\u043E " + val + " \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456\u0432</span>\n\t\t<span class=\"en\">Found  " + val + "   results</span>\n\t\t</b>";
        window.onload = lopster(); /////////////////********************************************************************
    } else {
        document.getElementById(id).innerHTML = "ERROR";
        setTimeout("window.location.reload()", 2000);
    }
}