"use strict";

document.getElementById("Pic").innerHTML = "\n<div>\n\t<div class=\"\" id=\"divIMG\">\n\t\t<img src=\"img/img/" + ObjRow[0]["IMG"] + "\" class=\"img-thumbnail img-fluid mx-auto d-block\" id=\"imageTran\" alt=\"...\" style=\"\" >\n\t</div>\n</div>\n\n<a href=\"img/img/" + ObjRow[0]["IMG"] + "\" download>\n\t<span class=\"ru\">\u0421\u043A\u0430\u0447\u0430\u0442\u044C</span>\n\t<span class=\"ua\">\u0421\u043A\u0430\u0447\u0430\u0442\u0438</span>\n\t<span class=\"en\">Download</span>\n\t</a>";

var TableArr = [["C1", "C1a", "C2", "C4"], ["D2", "D1", "D3", "S2"], ["S7x1", "S7x2", "S7x3", "S7x4", "S7x5", "S7x6", "S7x7"], ["GDR", "AGE", "BMI", "IMG", "SBJNUM", "IDR"]];

function ret(val, mass) {
  var j = 0;
  for (var _i = 0; _i < mass.length; _i++) {
    if (val == mass[_i]) {
      j = _i;
    }
  }
  return j;
}

function TABLE1(arr) {
  var hTable = ["<span class='ru'>Название категории</span><span class='ua'>Назва категорії</span><span class='en'>Name of category</span>", "<span class='ru'>Имя вопроса</span><span class='ua'>Ім'я питання</span><span class='en'>Question name</span>", "<span class='ru'>Категория</span><span class='ua'>Категорія</span><span class='en'>Category</span>", "<span class='ru'>Значение категории</span><span class='ua'>Значення категорії</span><span class='en'>Category value</span>"];
  var table = "<table class=\"table table-hover table-sm table-bordered\" >\n\t\t\t\t\t\t\t<tbody>";
  table += "<tr>";
  for (i = 0; i <= ObjRow.length; i++) {
    table += "<th scope=\"col\">";
    if (i != 0) {
      table += "<span class=\"ru\">\u0411\u043B\u044E\u0434\u043E </span><span class=\"ua\">\u0421\u0442\u0440\u0430\u0432\u0430 </span><span class=\"en\">Dishe </span>" + i;
    }
    table += "</th>";
  }
  table += "</tr>";
  for (j = 0; j < arr.length; j++) {
    table += "<tr>\n\t\t\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\t\t" + hTable[j] + "\n\t\t\t\t \t   \t\t</th>";
    for (i = 0; i < ObjRow.length; i++) {
      table += "<td scope=\"col\">\n\t\t\t\t\t\t\t\t" + ObjLabel[arr[j]]["cat"][ret(ObjRow[i][arr[j]], ObjLabel[arr[j]]["val"])] + " \n\t\t\t\t\t\t\t</td>";
    }
    table += "</tr>";
  }
  table += " \t</tbody>\n\t\t\t\t\t\t\t</table>";
  document.getElementById("Table1").innerHTML = table;
}

function TABLE2(arr) {
  var hTable = ["<span class='ru'>Прием пищи</span><span class='ua'>Споживання</span><span class='en'>Meal</span>", "<span class='ru'>День</span><span class='ua'>День</span><span class='en'>Day</span>", "<span class='ru'>Место</span><span class='ua'>Місце</span><span class='en'>Place</span>", "<span class='ru'>С кем потребляли еду</span><span class='ua'>З ким споживали їжу</span><span class='en'>With whom consumed</span>"];
  var table = "\t\n\t\t\t\t<table class=\"table table-hover table-sm \" >\n\t\t\t\t<p><b><u>\u0418\u041D\u0424\u041E\u0420\u041C\u0410\u0426\u0418\u042F \u041E \u041F\u0420\u0418\u0415\u041C\u0415 \u041F\u0418\u0429\u0418</b></u></p>\n\t\t\t\t<tbody>";

  for (j = 0; j < arr.length; j++) {
    table += " <tr>\n\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t" + hTable[j] + "\n\t\t\t\t\t</th>\n\t\t\t\t\t<td scope=\"col\">\n\t\t\t\t\t\t" + ObjLabel[arr[j]]["cat"][ret(ObjRow[0][arr[j]], ObjLabel[arr[j]]["val"])] + " \n\t\t\t\t\t</td>\n\t\t\t\t</tr>";
  }
  table += " </tbody>\n\t\t\t</table>";
  document.getElementById("Table2").innerHTML = table;
}

function TABLE3(arr) {
  var hTable = ["<span class='ru'>Питательный</span><span class='ua'>Поживний</span><span class='en'>Nutritional</span>", "<span class='ru'>Обеспечивает достаточным количеством энергии</span><span class='ua'>Забезпечує достатньою кількість енергії </span><span class='en'> Provides energy</span>", "<span class='ru'>Сбалансированный  </span><span class='ua'>Збалансований</span><span class='en'>Well-balanced</span>", "<span class='ru'>Полезный</span><span class='ua'> Корисний</span><span class='en'> Useful</span>", "<span class='ru'>Вкусный</span><span class='ua'>Смачний  </span><span class='en'> Tasty</span>", "<span class='ru'>Включает в себя различные / разнообразные продукты</span><span class='ua'>Включає в себе різні / різноманітні продукти</span><span class='en'>Different products</span>", "<span class='ru'>Из натуральных продуктов</span><span class='ua'>Із натуральних продуктів</span><span class='en'>Natural products</span>"];
  var table = "\n\t\t\t\t\t<table class=\"table-hover table-sm m-4 \"  >\n\t\t\t\t\t<p><b><u>\u0418\u041D\u0424\u041E\u0420\u041C\u0410\u0426\u0418\u042F \u041E \u041F\u0420\u0418\u0415\u041C\u0415 \u041F\u0418\u0429\u0418</b></u></p>\n\t\t\t\t\t<tbody>";
  for (j = 0; j < arr.length; j++) {
    if (ObjRow[0][arr[j]] != 0) {
      ObjRow[0][arr[j]];
      table += " <tr>\n\t\t\t\t\t\t\t<td scope=\"col\">\n\t\t\t\t\t\t\t" + hTable[j] + "\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>";
    }
  }
  table += " </tbody>\n\t\t\t\t\t\t\t</table>";
  document.getElementById("Table3").innerHTML = table;
}

function TABLE4(arr) {
  var hTable = ["<span class='ru'>Пол</span><span class='ua'>Стать</span><span class='en'>Gender</span>", "<span class='ru'>Возраст </span><span class='ua'>Вік</span><span class='en'> Age</span>", "<span class='ru'>Индекс массы тела (ИМТ)</span><span class='ua'>Індекс маси тіла (ІМТ)</span><span class='en'>Body Mass Index (BMI)</span>", "<span class='ru'>IMG</span><span class='ua'> IMG</span><span class='en'> IMG</span>", "<span class='ru'>SBJNUM</span><span class='ua'>SBJNUM</span><span class='en'> SBJNUM</span>", "<span class='ru'>IDR</span><span class='ua'>IDR</span><span class='en'>IDR</span>"];
  var table = "\t\n\t\t\t\t\t<table class=\"table table-hover table-sm \" >\n\t\t\t\t\t<p><b><u>\u0418\u041D\u0424\u041E\u0420\u041C\u0410\u0426\u0418\u042F \u041E \u0420\u0415\u0421\u041F\u041E\u041D\u0414\u0415\u041D\u0422\u0415</b></u></p>\n\t\t\t\t\t<tbody>";
  for (j = 0; j < arr.length; j++) {
    if (j < 3) {
      table += " <tr>\n\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t" + hTable[j] + "\n\t\t\t\t</th>\n\t\t\t\t<td scope=\"col\">\n\t\t\t\t\t" + ObjLabel[arr[j]]["cat"][ret(ObjRow[0][arr[j]], ObjLabel[arr[j]]["val"])] + " \n\t\t\t\t</td>\n\t\t\t</tr>";
    } else {
      table += " <tr>\n\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t" + hTable[j] + "\n\t\t\t\t</th>\n\t\t\t\t<td scope=\"col\">\n\t\t\t\t\t" + ObjRow[0][arr[j]] + " \n\t\t\t\t</td>\n\t\t\t</tr>";
    }
  }
  table += " </tbody>\n\t\t\t\t</table>";
  document.getElementById("Table4").innerHTML = table;
}
TABLE1(TableArr[0]);
TABLE2(TableArr[1]);
TABLE3(TableArr[2]);
TABLE4(TableArr[3]);
window.onload = lopster(); /////////////////********************************************************************
document.getElementById("FORMOFF").style.display = "none";