//--------------Списки у фильтр первоначальный
function createOption (mass, idName) {
  var optionAll = ' <option value="0">ALL</option>';

  for (var sp = 0; sp < mass.length; sp++) {
    optionAll += `
                    <option value="${sp * 1 + 1}" id="${idName}_${sp * 1 + 1}" >
                       ${mass[sp]} 
                        <span>//${idName}_${sp * 1 + 1}//</span>
                      </option>`;
  }

  return optionAll;
}

//--------------Построение фильтров
function buildTable () {
  var optionAll = ' <option value="0">ALL</option>';
  var tableAll = '';
  var caunt = 0;

  for (var op in list_Obj) {
    tableAll += `<div class=" col-12" >
                            <label for="${list_name[caunt]}">
                                ${list_name[caunt]}
                            </label>
                            <select id="${list_name[caunt]}" class="custom-select sel" onChange="massiv(this.id)"  >
                                ${createOption (list_Obj[op], list_name[caunt])}
                            </select>
                     </div>`;
    caunt++;
  }
  document.getElementById ('tableBuild').innerHTML = tableAll;
}

buildTable ();

//-----кнопка ресет
function nazat () {
  buildTable ();
  clearImageBlock ();
  document.getElementById ('massResult').innerHTML = '';
  arrNullOne = [];
  alert(arrNullOne) ;
}

//-----кнопка результат

function fBuildOption (massiver, idel) {
  document.getElementById (idel).innerHTML = createOption (massiver, idel);
}

var arrOll = [];

//--------------построение масива от выбраного
function massiv (id) {
  function filter (idel) {
    return document.getElementById (idel).value;
  }

  arrOll.push (id);

  //******************************************
  function masFilter (massiv, cleId) {
  /////////////////CLEAR///////////////////
    function clear (cleIdi) {
      for (x = 0; x < massiv.length; x++) {
        if (cleIdi == massiv[x]) {
          massiv.length = x + 1;
        }
      }
    }
    clear (cleId);
      /////////////////DEL///////////////////
    function del () {
      for (x = 0; x < massiv.length; x++) {
        if (filter (massiv[x]) == 0) {
          massiv.splice (x, 1);
          del ();
        }
      }
    }
    del ();

  }

  //***********************************************
  function allCler (mass) {
    for (x = 0; x < list_name.length; x++) {
      var caunt = 0;
      for (y = 0; y < mass.length; y++) {
        if (list_name[x] == mass[y]) {
          caunt++;
        }
      }
      if (caunt == 0) {
        document.getElementById (list_name[x]).value = 0;
      }
    }
  }

  function notMass (masss) {
    var masiv = [];

    for (x = 0; x < list_name.length; x++) {
      var caunt = 0;
      for (y = 0; y < masss.length; y++) {
        if (list_name[x] == masss[y]) {
          caunt++;
        }
      }
      if (caunt == 0) {
        masiv.push (list_name[x]);
      }
    }

    return masiv;
  }

  //****************Добавляет любой новый массив в фильтр******************
  allCler (arrOll);
  masFilter (arrOll, id);
  var arrOllv = [];
  for (var r = 0; r < arrOll.length; r++) {
    arrOllv.push (filter (arrOll[r]));
  }

  //**********************************

  var arrAnsver = [];
  for (ma = 0; ma < arrOll.length; ma++) {
    // alert(arrOll[ma]);
    var arrNumber = window['masiv' + arrOll[ma]];
    var arrIntime = [];
    // alert(arrNumber);
    for (mo = 0; mo < arrNumber.length; mo++) {
      if (filter (arrOll[ma]) == arrNumber[mo]) {
        arrIntime.push (mo);
      }
    }
    arrAnsver.push (arrIntime);
  }

  //alert(arrAnsver) ;

  var aspenArrAll = [];
  for (var c = 0; c < notMass (arrOll).length; c++) {
    for (var b = 0; b < arrAnsver.length; b++) {
      for (var z = 0; z < arrAnsver[b].length; z++) {
        var aspenArr = [];
        var massRED = window[notMass (arrOll)[c] + '_list'];
        aspenArr.push (massRED[arrAnsver[b][z]]);
      }
      aspenArrAll.push (aspenArr);
    }
  }

  var arrTt = [];

  BildList (arrOll, arrOllv, notMass (arrOll));
  resultIMG (arrOll, arrOllv); 
}


///////////////////////////////////////////////////////////////////////////////////
var arrNullOne = [];
function BildList (arrName, arrValue, arrNonName) {
  
  
//////New arrName///////////////////////////////////////////////////////////////////////////////  
var filter = arrValue[arrName.length-1];
var arrIdValue = window['masiv' + arrName[arrName.length-1]];

if(arrNullOne.length==0){
  for (var i = 0; i < arrIdValue.length; i++) {
     if (filter == arrIdValue[i]) {                     //filter значение выбрано в предедущем селекте
        arrNullOne.push (1);  //  масив содержит порядковые номера совпадений результатов 
      }else{arrNullOne.push (0);}
  }
}else{
  for (var i = 0; i < arrIdValue.length; i++) {
     if (filter == arrIdValue[i]) {                     //filter значение выбрано в предедущем селекте
        if(arrNullOne[i]==1) { arrNullOne[i]=0;}
      }
  }
}


alert(arrNullOne.length);



//////arrName///////////////////////////////////////////////////////////////////////////////  
  for (var x = 0; x < arrName.length; x++) {
  var filter = arrValue[x];
  var arrIdValue = window['masiv' + arrName[x]];
//////FOR arrNonNAME///////////////////////////////////////////////////////////////////////////////    
    for (var b = 0; b < arrNonName.length; b++) {//цикл смены альтернатив
      //*************

      //***************
      var arrIndex = window['masiv' + arrNonName[b]]; // масивы которые не выбрали еще
      var arr_List = window[arrNonName[b] + '_list']; 
      if (1==0) {
        fBuildOption (arr_List, arrNonName[b]); // добавляет опции с масива arr_List в селект с ид arrNonName[b]
      }
      var arrIndexIdValue = [];
      ////////////////arrIdValue
      for (var v = 0; v < arrIdValue.length; v++) {
        if (filter == arrIdValue[v]) {                     //filter значение выбрано в предедущем селекте
          arrIndexIdValue.push (v);  //  масив содержит порядковые номера совпадений результатов 
        }
      }
      ////////////////arrIdValue

      for (var t = 0; t <= arr_List.length; t++) {
        var caunt2 = 0;
          for (var f = 0; f < arrIndexIdValue.length; f++) {
            if (t === arrIndex[arrIndexIdValue[f]] ) {
              caunt2++;
            }
          }
        elem = document.getElementById (arrNonName[b] + '_' + t);
        if (elem != null) {
          if (caunt2==0) {
            elem.disabled=true;}
            else{
           // elem.parentNode.removeChild (elem);
          //  elem.disabled=false ; 
          }
        } //
      }

    }
///FOR arrNonNAME/////////////////////////////////////////////////////////////    
  }
///arrName///////////////////////////////////////////////////////////// 

}
function clearResult () {
  document.getElementById ('massResult').innerHTML = ' ';
}

function resultIMG (arrImageId, arrImageResult) {
  var arrImage = masivIMG.concat ();
  var arrImageFilter = [];
  var messageId = document.getElementById ('massResult');

  if (arrImageResult.length == 0) {
    messageId.innerHTML = '<b>Выберите по чем будете искать </b>';
    setTimeout ('clearResult()', 4000);
  } else {
    for (var p = 0; p < arrImageResult.length; p++) {
      var arrResMass = window['masiv' + arrImageId[p]];
      for (var m = 0; m < arrResMass.length; m++) {
        if (arrResMass[m] != arrImageResult[p]) {
          arrImage[m] = 0;
        }
      }
    }
    for (var h = 0; h < arrImage.length; h++) {
      if (arrImage[h] != 0) {
        arrImageFilter.push (arrImage[h]);
      }
    }
    messageId.innerHTML =
      '<b>Найдено ' + arrImageFilter.length + ' результатов</b>';
    window.arrArr = arrImageFilter;
  }
}

function funImageFilter () {
  return window.arrArr;
}

function carusele (mass, first = mass[0]) {
  let caunt = 0;
  let innerIMG = '';
  for (let i = 0; i < mass.length; i++) {
    if (mass[i] === first && caunt == 0) {
      innerIMG += ` <div class="carousel-item active" >
                          <img src="img/${mass[i]}" class="d-block rounded mx-auto " height="440" alt="${mass[i]}">
                          <figcaption>${mass[i]}</figcaption>
                          <div class="panelka ">
                             <a href="img/${mass[i]}"  download><img src="icon/down1.svg"></a>
                             <a href="img/${mass[i]}" rel="lightbox" align="Center"><img src="icon/search1.svg"></a>
                          </div> 
            </div>`;
      caunt++;
    } else {
      innerIMG += ` 
                            <div class="carousel-item " >
                                <img src="img/${mass[i]}" class="d-block rounded mx-auto" height="440"  alt="${mass[i]}">
                                <figcaption>${mass[i]}</figcaption>
                                <div class="panelka">
                                     <a href="img/${mass[i]}" download><img src="icon/down1.svg"></a>
                                     <a href="img/${mass[i]}" rel="lightbox" align="Center"><img src="icon/search1.svg"></a>
                                 </div> 
                            </div>
                `;
    }
  }

  return innerIMG;
}

function scroll (mass) {
  var innerIMG = '';
  let ymass = mass;
  for (let i = 0; i < mass.length; i++) {
    innerIMG += ` <div class=' dinline'>
                    <img src="img/${mass[i]}"  alt="${mass[i]}" onclick="caruseleReset(funImageFilter(),'${mass[i]}')" height="50" >
                    </div>
                   `;
  }

  return innerIMG;
}

function result () {
  if (funImageFilter () == undefined || funImageFilter ().length == 0) {
    alert ('Вы должны указать настройки поиска , либо настройки поиска нулевые');
    clearImageBlock ();
  } else {
    document.getElementById ('ShowImage').style.display = 'inline';
    document.getElementById ('innerIMG').innerHTML = carusele (
      funImageFilter ()
    );
    document.getElementById ('sl_image').innerHTML = scroll (funImageFilter ());
  }
}
function caruseleReset (mass, index) {
  document.getElementById ('innerIMG').innerHTML = '';
  document.getElementById ('innerIMG').innerHTML = carusele (mass, index);
}

function clearImageBlock () {
  document.getElementById ('ShowImage').style.display = 'none';
  document.getElementById ('innerIMG').innerHTML = '';
  document.getElementById ('sl_image').innerHTML = '';
}

$ ('.carousel').carousel ({
  interval: 200000,
});