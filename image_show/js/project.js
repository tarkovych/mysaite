console.log($("#version").html());

class Buld {
    constructor(objlabel) {
        this.ObjLabel = objlabel;
        this.arr = function () {
            let arr = [];
            for (let id in this.ObjLabel) {
                arr.push(id);
            }
            return arr;
        };
        this.mass = this.arr(); //["C1","C2"]
    }
    buldOption(massLab, massVal, id) {
        let option = `
				<tr style="display:none">
					<td><input type="checkbox" value="0"  name="${id}[]" id="${id}_0" onclick="buld.All('${id}',0)"></td>
					<td><label for="${id}_0">ALL</label></td>
				</tr>`;
        for (let i = 0; i < massLab.length; i++) {
            option += `<tr id="${id}_${
                    massVal[i]
                    }_table" style="background-color:#F8F8FF">
				<td>
					<input type="checkbox" value="${massVal[i]}" id="${id}_${
                    massVal[i]
                    }" name="${id}[]" onclick="buld.All('${id}',${massVal[i]})">
				</td>
				<td><label for="${id}_${massVal[i]}" > ${massLab[i]} 
				<span id="${id}_${massVal[i]}_cap"> </span>
				</label></td>
			</tr>`;
        }
        /////////NEW
        option += `
								<tr style="width:100%">
									<td colspan="2" class="text-center  font-weight-bold" style="cursor:pointer">
										<div id="${id}_plus" onclick="buld.Plus('${id}')" class="" style="width:100%">+</div>
									</td>
								</tr>`;
        /////////NEW
        return option;
    }
    buldSelect() {
        let select = ``;
        let caunt = 0;
        for (let mass in this.ObjLabel) {
            select += `<div class="BOX-SELECT">
							<div id="${mass}" class="SELECT-CLICK" onClick="buld.OnShow(this.id)">
								${this.ObjLabel[mass]["name"]}  
								<div class="select-icon" id="${mass}_icon">&#9660</div>
							</div>
							<div id="${mass}_select"  class="SELECT">
							<div class="showOFF" id="${mass}_show">
								<table class="">
									${this.buldOption(this.ObjLabel[mass]["cat"], this.ObjLabel[mass]["val"], mass)}
								</table>
							</div>
							</div>     
					 </div>`;
            caunt++;
        }
        return select;
    }
    buldInner(id) {
        document.getElementById(id).innerHTML = this.buldSelect();
    }
    All(id, val) {
        this.AJAX(id);
        let all = document.getElementById(id + "_0");
        if (val == 0) {
            if (all.checked) {
                for (let i = 0; i < this.ObjLabel[id]["val"].length; i++) {
                    document.getElementById(
                            id + "_" + this.ObjLabel[id]["val"][i]
                            ).checked = true;
                }
            } else {
                for (let i = 0; i < this.ObjLabel[id]["val"].length; i++) {
                    document.getElementById(
                            id + "_" + this.ObjLabel[id]["val"][i]
                            ).checked = false;
                }
            }
        } else {
            all.checked = false;
        }
    }
    OnShow(id) {
        let show = document.getElementById(id + "_show").className;
        let show2 = document.getElementById(id + "_show");
        let icon = document.getElementById(id + "_icon");

        if (show == "showOFF") {
            show2.className = "showON";
            icon.innerHTML = "&#9650";
        } else {
            show2.className = "showOFF";
            icon.innerHTML = "&#9660";
        }
    }
    Plus(ID) {
        let mass = this.ObjLabel[ID]["val"];
        let div = document.getElementById(`${ID}_plus`);

        if (div.innerHTML == "+") {
            let caunt = 0;
            for (let i = 0; i < mass.length; i++) {
                if (
                        document.getElementById(`${ID}_${mass[i]}_table`).style.color ==
                        "silver"
                        ) {
                    document.getElementById(`${ID}_${mass[i]}_table`).style.display = "";
                    caunt++;
                }
            }
            if (caunt != 0) {
                div.innerHTML = "-";
            }
        } else {
            for (let i = 0; i < mass.length; i++) {
                if (
                        document.getElementById(`${ID}_${mass[i]}_table`).style.color ==
                        "silver"
                        ) {
                    document.getElementById(`${ID}_${mass[i]}_table`).style.display =
                            "none";
                }
            }
            div.innerHTML = "+";
        }
    }
    AJAX(ID) {
        let arrJSON;
        for (let mass in this.ObjLabel) {
            for (let i = 0; i < this.ObjLabel[mass]["val"].length; i++) {
                if (ID != mass) {
                    document.getElementById(
                            `${mass}_${this.ObjLabel[mass]["val"][i]}_table`
                            ).style.color = "silver";
                    document.getElementById(
                            `${mass}_${this.ObjLabel[mass]["val"][i]}_table`
                            ).style.display = "none";
                }
                ///////////////NEW
                if (
                        document.getElementById(`${mass}_${this.ObjLabel[mass]["val"][i]}`)
                        .checked == true
                        ) {
                    document.getElementById(
                            `${mass}_${this.ObjLabel[mass]["val"][i]}_table`
                            ).style.color = "black";
                    document.getElementById(
                            `${mass}_${this.ObjLabel[mass]["val"][i]}_table`
                            ).style.display = "";
                }
                ///////////////NEW
            }
            document.getElementById(`${mass}_plus`).innerHTML = "+";
        }
        ///////////////////////////////
        let postOld = $("#FormAction").serialize();
        $.post("last.php", postOld, function (request) {
            try {
                arrJSON = JSON.parse(request);
                for (let mass in arrJSON) {
                    for (let key in arrJSON[mass]) {
                        let div = document.getElementById(
                                `${mass}_${arrJSON[mass][key]}_table`
                                );
                        if (div != null) {
                            div.style.color = "black";
                            div.style.display = "";
                        } else {
                        }
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
}

var buld = new Buld(ObjLabel);

buld.buldInner("tableBuild");
window.onload = lopster(); /////////////////******************************************************************************
////////////////////////////////BUILDGOOGLE///////////////////
let Time = ["SBJNUM", "IDR", "IMG"];
function buildGoogle(mass) {
    let option = ``;
    for (let i = 0; i < mass.length; i++) {
        option += `<option value="${mass[i]}">${mass[i]}</option>`;
    }
    document.getElementById("SCAT").innerHTML = option;
}
buildGoogle(Time);
document.getElementById("WORD").oninput = document.getElementById(
        "WORD"
        ).onipaste = function () {
    SAJAX();
};
function SAJAX() {
    let word = document.getElementById("WORD").value;

    if (word) {
        let postId = $("#FormGoogle").serialize();

        $.post("search.php", postId, function (request) {
            try {
                ArrSearch = JSON.parse(request);
                let dropList = "";
                for (i = 0; i < ArrSearch.length; i++) {
                    dropList += `<li class="dropdown-item"  onclick="DropDawn('${
                            ArrSearch[i]
                            }')">${ArrSearch[i]}</li>`;
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
            let result;
            try {
                let arrImg = JSON.parse(request);

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
    let postId = $("#FormGoogle").serialize();
    $.post("imageSearch.php", postId, function (request) {
        try {
            let arrImg = JSON.parse(request);
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
    let form;
    form = $("#FormAction").serializeArray();
    IMAGE = $.post("image.php", $("#FormAction").serializeArray(), function (
            request
            ) {
        try {
            let arrImg = JSON.parse(request);
            GRID(arrImg);
        } catch (e) {
            console.log(e);
            alert(`Не верно указаны параметры поиска`);
        }
    });
}
function FunPAG(val, cell) {
    for (let i = 1; i <= cell; i++) {
        if (i == val) {
            document.getElementById(`LIST_${i}`).style.display = "inline";
            document.getElementById(`PAGNAM_${i}`).style.color = "black";
            document.getElementById(`PAGNAM_${i}`).style.fontWeight = "bold";
        } else {
            document.getElementById(`LIST_${i}`).style.display = "none";
            document.getElementById(`PAGNAM_${i}`).style.color = "";
            document.getElementById(`PAGNAM_${i}`).style.fontWeight = "";
        }
    }
}
function GRID(ArrImage) {
    let [R, C, RR, DIV, PAG] = [10, 6, 0, "", ""];
    let cell = Math.ceil(ArrImage["SBJNUM"].length / (R * C));
    for (let list = 1; list <= cell; list++) {
        let first;
        let ten;
        if (list == 1) {
            first = "inline";
        } else {
            first = "none";
        }
        DIV += `<div id="LIST_${list}" style="display:${first}">
				${Row(ArrImage["SBJNUM"], list, R, C)}
				 </div>`;
        if (list >= 1 && list <= 10) {
            ten = "inline";
        } else {
            ten = "none";
        }
        PAG += `<li class="page-item" style="display:${ten}" id="PAGIN_${list}"  value="${list}" onclick="FunPAG(this.value,${cell})">
							<span class="page-link" id="PAGNAM_${list}">${list}</span>
					</li>`;
    }
    function Row(MassImd, list, R, C) {
        let Row = ``;
        for (let row = 1; row <= R; row++) {
            if ((list - 1) * R * C + (row - 1) * C <= MassImd.length) {
                Row += `<div class="row">
									${Col(ArrImage, list, row, R, C)}	
							</div>`;
            }
        }
        return Row;
    }

    function Col(MassJson, list, row, R, C) {
        let Col = ``;

        for (let col = 1; col <= C; col++) {
            let t = (list - 1) * R * C + (row - 1) * C + col;
            if (t <= MassJson["SBJNUM"].length) {
                if (RR != t - 1) {
                    console.log("RR=" + RR + "T=" + (t - 1));
                }
                RR++;
                Col += `
			<div class="col" style="max-width:210px ">
			<a href="picture.php?IMAGESHOW=${MassJson["SBJNUM"][t - 1]}" target="_blank">
				<table class="table table-sm">
					<tr>
						<td scope="col" 
								style="height:200px;background:url('img/imgsm/${
                        MassJson["IMG"][t - 1]
                        }') 100% 100% no-repeat;
								background-size:cover">
						</td>
					</tr>
					<tr>
						<td scope="col" style="font-size:10px ; ">
						${MassJson["SBJNUM"][t - 1]} 
						</td>
					</tr>
				</table>
				</a>
			</div>`;
            }
        }
        return Col;
    }

    document.getElementById("PICTURE").innerHTML = DIV;
    document.getElementById("PAGIN").innerHTML = `
								<li class="page-item" onclick="NEXT(${cell},'pre')"><span class="page-link">Previous</span></li>
									${PAG}
								<li class="page-item" onclick="NEXT(${cell},'next')"><span class="page-link">Next(${cell})</span></li>`;
}
function NEXT(cell, next) {
    if (next == "next") {
        for (let i = cell; i >= 1; i--) {
            let next = document.getElementById(`PAGIN_${i}`);
            if (next.style.display == "inline" && i != cell) {
                document.getElementById(`PAGIN_${i + 1}`).style.display = "inline";
                break;
            }
        }
        for (let i = 1; i <= cell; i++) {
            let next = document.getElementById(`PAGIN_${i}`);
            if (next.style.display == "inline" && i <= cell - 10) {
                next.style.display = "none";
                break;
            }
        }
    }
    if (next == "pre") {
        for (let i = cell; i >= 1; i--) {
            let next = document.getElementById(`PAGIN_${i}`);
            if (next.style.display == "inline" && i > 10) {
                document.getElementById(`PAGIN_${i}`).style.display = "none";
                break;
            }
        }
        for (let i = 1; i <= cell; i++) {
            let next = document.getElementById(`PAGIN_${i}`);
            if (next.style.display == "inline" && i > 1) {
                document.getElementById(`PAGIN_${i - 1}`).style.display = "inline";
                break;
            }
        }
    }
}

function ZAPROZAJAX(text = "TEXT", ajax = "ajax") {
    text = ajax == "ajax" ? text : document.getElementById(text).value;
    lang = ["ru", "ua", "en"];
    table = [
        "C1",
        "C1a",
        "C2",
        "S7x1",
        "S7x2",
        "S7x3",
        "S7x4",
        "S7x5",
        "S7x6",
        "S7x7",
        "D1",
        "D2",
        "D3",
        "S2"
    ];
    table2 = ["IDR", "SBJNUM", "IMG"];
    let zapros = "";

    if (ajax == "ajax") {
        ///////////////////////////////////////////////////////
        for (let i = 0; i < table.length; i++) {
            for (let j = 0; j < lang.length; j++) {
                zapros += `SELECT ${lang[j]} FROM \`${table[i]}\` WHERE ${table[i]}.${
                        lang[j]
                        } LIKE "%${text}%" 
						UNION \n`;
            }
        }
        for (let x = 0; x < table2.length; x++) {
            union = x == 0 ? "" : "UNION";
            zapros += `${union} SELECT ${table2[x]} FROM \`ObjValue\` WHERE ${
                    table2[x]
                    } LIKE "%${text}%"\n		
		`;
        }
        zapros += ` LIMIT 10`;

        $.post("AjaxGoogle.php", {TEXT: zapros}, function (request) {
            try {
                ArrSearch = JSON.parse(request);
                let dropList = "";
                for (i = 0; i < ArrSearch.length; i++) {
                    for (key in ArrSearch[i]) {
                        dropList += `<li class="dropdown-item"  onclick="DropDawn('${
                                ArrSearch[i][key]
                                }','GOOGLEVALUE')">${ArrSearch[i][key]}</li>`;
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

        function TableLike(mass, val) {
            t = "";
            for (i = 0; i < mass.length; i++) {
                t += `SELECT SBJNUM,IMG FROM \`ObjValue\`,\`${mass[i]}\` WHERE ${
                        mass[i]
                        }.id=${mass[i]} AND (${mass[i]}.ru LIKE "%${val}%" OR ${
                        mass[i]
                        }.ua LIKE "%${val}%" OR ${
                        mass[i]
                        }.en LIKE "%${val}%" ) GROUP BY SBJNUM UNION \n`;
            }
            return t;
        }
        zapros += TableLike(table, text);
        zapros += `SELECT SBJNUM , IMG FROM \`ObjValue\` WHERE SBJNUM  LIKE '%${text}%'  GROUP BY SBJNUM UNION \n`;
        zapros += `SELECT SBJNUM , IMG FROM \`ObjValue\` WHERE IMG  LIKE '%${text}%'  GROUP BY SBJNUM UNION \n`;
        zapros += `SELECT SBJNUM , IMG FROM \`ObjValue\` WHERE IDR  LIKE '%${text}%'  GROUP BY SBJNUM \n`;

        $.post("AjaxGoogle.php", {TEXT: zapros}, function (request) {
            try {
                ArrSearch = JSON.parse(request);
                let dropList = "";
                let objImg = {SBJNUM: [], IMG: []};

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

function POKAZ(id = "massResult", val = 0) {
    if (!isNaN(val * 1)) {
        document.getElementById(id).innerHTML = `
		<b>
		<span class="ru">Найдено ${val}  результатов</span>
		<span class="ua">Знайдено ${val} результатів</span>
		<span class="en">Found  ${val}   results</span>
		</b>`;
        window.onload = lopster(); /////////////////********************************************************************
    } else {
        document.getElementById(id).innerHTML = "ERROR";
        setTimeout("window.location.reload()", 2000);
}
}
