class Buld {
	constructor(objlabel){
    this.ObjLabel=objlabel ;
		this.arr=function (){let arr=[] ; for(let id in this.ObjLabel){arr.push(id);} return arr;}
		this.mass=this.arr();	//["C1","C2"]
		}
	buldOption(massLab,massVal,id){
		let option=`
				<tr style="">
					<td><input type="checkbox" value="0"  name="${id}[]" id="${id}_0" onclick="buld.All('${id}',0)"></td>
					<td><label for="${id}_0">ALL</label></div></td>
				</tr>` ; 
		for(let i=0 ; i<massLab.length;i++){
				option+=`<tr id="${id}_${massVal[i]}_table">
				<td><input type="checkbox" value="${massVal[i]}" id="${id}_${massVal[i]}" name="${id}[]" onclick="buld.All('${id}',${massVal[i]})"></td>
				<td><label for="${id}_${massVal[i]}"> ${massLab[i]} 
				<span id="${id}_${massVal[i]}_cap">//${id}_${massVal[i]}//</span>
				</label></td>
			</tr>` ; 
			
			
		}
		return option  ; 
	}
	buldSelect(){
		let select=`` ;
		let caunt=0 ; 
		for(let mass in this.ObjLabel){
			select+=`<div class="BOX-SELECT">
							<div id="${mass}" class="SELECT-CLICK" onClick="buld.OnShow(this.id)">
								${this.ObjLabel[mass]['name']}
								<div class="select-icon" id="${mass}_icon">&#9660</div>
							</div>
							<div id="${mass}_select"  class="SELECT">
							<div class="showOFF" id="${mass}_show">
								<table class="">
									${this.buldOption(this.ObjLabel[mass]['cat'],this.ObjLabel[mass]['val'],mass)}
								</table>
							</div>
							</div>     
					 </div>` ; 
			caunt++;
		}
		
		return select ; 
	}
	buldInner(id){
        document.getElementById(id).innerHTML=this.buldSelect() ;
	}
	All(id,val){
		this.AJAX(id) ;
		let all=document.getElementById(id+"_0")  ;
		if(val==0){
		if(all.checked){
			for(let i=0 ; i<this.ObjLabel[id]['val'].length;i++){
				document.getElementById(id+"_"+this.ObjLabel[id]['val'][i]).checked=true; 
			}
			}else{
				for(let i=0 ; i<this.ObjLabel[id]['val'].length;i++){
					document.getElementById(id+"_"+this.ObjLabel[id]['val'][i]).checked=false; 
				}
			}
		}else{
			all.checked=false ; 	
		}
		 
		}
	OnShow(id){
		let show =document.getElementById(id+'_show').className ; 
		let show2=document.getElementById(id+'_show') ; 
		let icon=document.getElementById(id+'_icon') ;
		
		if(show=="showOFF"){
			show2.className="showON";
			icon.innerHTML="&#9650"; 
		}else{
			show2.className="showOFF";
			icon.innerHTML="&#9660";
		} 
		
		}
	AJAX(ID){
		let arrJSON ; 
		let postOld=$("#FormAction").serialize() ;

		for(let mass in this.ObjLabel){
			for(let i=0 ; i<this.ObjLabel[mass]['val'].length;i++){
				if(ID!=mass){
					//document.getElementById(`${mass}_${this.ObjLabel[mass]['val'][i]}_table`).style.color="silver";
					document.getElementById(`${mass}_${this.ObjLabel[mass]['val'][i]}_table`).style.display="none";
				}
				
			} 
		} 
		$.post('last.php',postOld,function(request){
			try{
				arrJSON=JSON.parse(request) ; 
				//console.log(arrJSON) ; 
				for(let mass in arrJSON){
					for(let key in arrJSON[mass]){
						let div = document.getElementById(`${mass}_${arrJSON[mass][key]}_table`) ; 
						if(div!=null){
						//	div.style.color="black";
							div.style.display="";
						}
						else{
						}
					} 
				}
				
			}catch(e){
				console.log("NE RABOTAET") ; 
				console.log(e) ; 
				console.log(request) ;
			}
			
		});

		
				$.post('last1.php',postOld,function(request){
					document.getElementById('massResult').innerHTML= `<b>Найдено ${request} результатов</b>`;
				});
			//  function retro(id,val){
			// 	let postNew=`${postOld}&${id}%5B%5D=${val}`  ;
			// 	 $.post('last1.php',postNew,function(request){
			// 		if(request*1==0){
			// 			document.getElementById(`${id}_${val}_table`).style.display="none" ; 
			// 		}else{
			// 			document.getElementById(`${id}_${val}_table`).style.display=""; 
			// 		}
			// 	});
			// }
			// for(let i in this.ObjLabel){
			// 	for(let j=0 ; j<this.ObjLabel[i]['val'].length ; j++){
			// 		retro(i,this.ObjLabel[i]['val'][j]); 
			// 		}			
			// 	}
			
			 	console.log("version 7") ; 


	}	
		
}  

var buld= new Buld(ObjLabel) ; 

buld.buldInner("tableBuild") ; 



function RESULT(){ 
	//$.post('second.php',{data:data},function(reque;st){
		IMAGE  = $.post('image.php',$("#FormAction").serialize(),function(request){
		try{
		let arrImg=JSON.parse(request) ; 
		GRID(arrImg) ; 
		//	console.log(arrImg) ; 
			return arrImg  ; 
		}
		catch(e){
			console.log(e) ; 
		}

});
 
// ;

	function GRID(ArrImage){
		let R=10 ; 
		let C=5 ; 
		let RR=0 ; 
		let cell = Math.ceil(ArrImage.length/(R*C)) ;
		console.log(cell)  ; 
		console.log(ArrImage.length/(R*C));
	//let col =  ; 


let DIV=`` ; 

	for(let list=1 ;  list<=cell; list++){
		let first ; 
		if(list==1){first='inline';}else{first='none';}
		DIV+=`<div id="LIST_${list}" style="display:${first}">
				${Row(ArrImage,list,R,C)}
				</div>
				`;
	}



function Row(ArrImage,list,R,C){
	let Row = `` ;  
	for(let row=1 ;  row<=R ; row++){
if((list-1)*R*C+(row-1)*C <=ArrImage.length){
		Row+=`<div class="row">
				${Col(ArrImage,list,row,R,C)}	
					</div>` ; 
		}	 ; 
		
	}
	return Row ; 
}


function Col(ArrImage,list,row,R,C){
	let Col = `` ; 

	for(let col=1 ;  col<=C ; col++){
	if(	(list-1)*R*C + (row-1)*C +(col)<=ArrImage.length){
	let t = (list-1)*R*C + (row-1)*C +(col) ;  
	if(RR!=(t-1)){console.log("RR="+RR+"T="+(t-1)) ;}	 
		RR++ ; 
		Col+=`
							<div class="col border m-1" style="height:100px;background-image:url(img/img/${ArrImage[t]})">
								<table class="table table-sm">
									<tr>
										<td scope="col" >
										<!--	<img src="img/img/${ArrImage[t]}"  height="100" style="widht-max=100%">-->
										</td>
									</tr>
									<tr>
										<td scope="col" style="font-size:8px">
										${ArrImage[t]}
										</td>
									</tr>
								</table>
							</div>` ; 
		}
		
		}	 ; 
		return Col ;
	}
//	console.log(DIV);
document.getElementById("PICTURE").innerHTML=DIV; 
}


}



// function 

// function CSV(){
// 	let mass=buld.mass;
// 	mass.push('IMG') ; 
// 	alert(mass); 
// 	alert(mass.length); 
// 	let textCSV='' ; 
// 	for(let i=0 ; i<mass.length ; i++){	
// 		for(let j=0 ; j<ObjValue[mass[i]].length ; j++){
// 		if(ObjValue[mass[i]].length!=(j-1)){textCSV+=`"${ObjValue[mass[i]][j]}",`;}
// 		else{textCSV+=`"${ObjValue[mass[i]][j]}"\n` ;} 
// 	}
// }

// if(textCSV.length==0){alert("STOP")}else{alert(textCSV)}
//         var type = 'data:application/octet-stream;base64, ';
//         var text = textCSV;
//         var base = btoa(text);
//         var res = type + base;
//         document.getElementById("CSV").href = res;
// }
// CSV() ; 

// //--------------Списки у фильтр первоначальный
// function createOption (mass, idName) {
//   var optionAll = ' <option value="0">ALL</option>';

//   for (var sp = 0; sp < mass.length; sp++) {
//     optionAll += `
//                     <option value="${sp * 1 + 1}" id="${idName}_${sp * 1 + 1}" >
//                        ${mass[sp]} 
//                         <span>//${idName}_${sp * 1 + 1}//</span>
//                     </option>`;
//   }

//   return optionAll;
// }

// //--------------Построение фильтров
// function buildTable () {
//   var optionAll = ' <option value="0">ALL</option>';
//   var tableAll = '';
//   var caunt = 0;

//   for (var op in list_Obj) {
//     tableAll += `<div class=" col-12" >
//                             <label for="${list_name[caunt]}">
//                                 ${list_name[caunt]}
//                             </label>
//                             <select id="${list_name[caunt]}" class="custom-select sel" onChange="massiv(this.id)"  >
//                                 ${createOption (list_Obj[op], list_name[caunt])}
//                             </select>
//                      </div>`;
//     caunt++;
//   }
//   document.getElementById ('tableBuild').innerHTML = tableAll;
// }

// buildTable ();

// //-----кнопка ресет
// function nazat () {
//   buildTable ();
//   clearImageBlock ();
//   document.getElementById ('massResult').innerHTML = '';
// }

// //-----кнопка результат

// function fBuildOption (massiver, idel) {
//   document.getElementById (idel).innerHTML = createOption (massiver, idel);
// }

// var arrOll = [];

// //--------------построение масива от выбраного
// function massiv (id) {
//   function filter (idel) {
//     return document.getElementById (idel).value;
//   }

//   arrOll.push (id);

//   //******************************************
//   function masFilter (massiv, cleId) {
//     function del () {
//       for (x = 0; x < massiv.length; x++) {
//         if (filter (massiv[x]) == 0) {
//           massiv.splice (x, 1);
//           del ();
//         }
//       }
//     }
//     del ();
//     function clear (cleIdi) {
//       for (x = 0; x < massiv.length; x++) {
//         if (cleIdi == massiv[x]) {
//           massiv.length = x + 1;
//         }
//       }
//     }
//     clear (cleId);
//   }

//   //***********************************************
//   function allCler (mass) {
//     for (x = 0; x < list_name.length; x++) {
//       var caunt = 0;
//       for (y = 0; y < mass.length; y++) {
//         if (list_name[x] == mass[y]) {
//           caunt++;
//         }
//       }
//       if (caunt == 0) {
//         document.getElementById (list_name[x]).value = 0;
//       }
//     }
//   }

//   function notMass (masss) {
//     var masiv = [];

//     for (x = 0; x < list_name.length; x++) {
//       var caunt = 0;
//       for (y = 0; y < masss.length; y++) {
//         if (list_name[x] == masss[y]) {
//           caunt++;
//         }
//       }
//       if (caunt == 0) {
//         masiv.push (list_name[x]);
//       }
//     }

//     return masiv;
//   }

//   //****************Добавляет любой новый массив в фильтр******************

//   masFilter (arrOll, id);
//   allCler (arrOll);

//   var arrOllv = [];
//   for (var r = 0; r < arrOll.length; r++) {
//     arrOllv.push (filter (arrOll[r]));
//   }

//   //**********************************

//   var arrAnsver = [];
//   for (ma = 0; ma < arrOll.length; ma++) {
//     var arrNumber = window['masiv' + arrOll[ma]];
//     var arrIntime = [];
//     for (mo = 0; mo < arrNumber.length; mo++) {
//       if (filter (arrOll[ma]) == arrNumber[mo]) {
//         arrIntime.push (mo);
//       }
//     }
//     arrAnsver.push (arrIntime);
//   }

//   //alert(arrAnsver) ;

//   var aspenArrAll = [];
//   for (var c = 0; c < notMass (arrOll).length; c++) {
//     for (var b = 0; b < arrAnsver.length; b++) {
//       for (var z = 0; z < arrAnsver[b].length; z++) {
//         var aspenArr = [];
//         var massRED = window[notMass (arrOll)[c] + '_list'];
//         aspenArr.push (massRED[arrAnsver[b][z]]);
//       }
//       aspenArrAll.push (aspenArr);
//     }
//   }

//   var arrTt = [];

//   BildList (arrOll, arrOllv, notMass (arrOll));
// }
// function BildList (arrName, arrValue, arrNonName) {
//   for (var x = 0; x < arrName.length; x++) {
//     var filter = arrValue[x];
//     var arrIdValue = window['masiv' + arrName[x]];
//     //alert("arrOll="+arrOll);
//     for (var b = 0; b < arrNonName.length; b++) {
//       //alert("list_name="+arrNonName[b]);
//       var arrIndex = window['masiv' + arrNonName[b]];
//       var arr_List = window[arrNonName[b] + '_list'];
//       if (1 == 1) {
//         fBuildOption (arr_List, arrNonName[b]);
//       }
//       var arrIndexIdValue = [];
//       //alert("filter="+filter);
//       for (var v = 0; v < arrIdValue.length; v++) {
//         if (filter == arrIdValue[v]) {
//           arrIndexIdValue.push (v);
//         }
//       }
//       //alert("arrIdName="+arrIdName);
//       for (var t = 0; t <= arr_List.length; t++) {
//         var caunt2 = 0;
//         for (var f = 0; f < arrIndexIdValue.length; f++) {
//           if (t == arrIndex[arrIndexIdValue[f]]) {
//             caunt2++;
//           }
//         }
//         if (caunt2 == 0) {
//           elem = document.getElementById (arrNonName[b] + '_' + t);
//           if (elem != null) {
//             elem.parentNode.removeChild (elem);
//           }
//         } //elem.disabled=true;
//       }
//     }
//   }

//   resultIMG (arrName, arrValue);
// }
// function clearResult () {
//   document.getElementById ('massResult').innerHTML = ' ';
// }

// function resultIMG (arrImageId, arrImageResult) {
//   var arrImage = masivIMG.concat ();
//   var arrImageFilter = [];
//   var messageId = document.getElementById ('massResult');

//   if (arrImageResult.length == 0) {
//     messageId.innerHTML = '<b>Выберите по чем будете искать </b>';
//     setTimeout ('clearResult()', 4000);
//   } else {
//     for (var p = 0; p < arrImageResult.length; p++) {
//       var arrResMass = window['masiv' + arrImageId[p]];
//       for (var m = 0; m < arrResMass.length; m++) {
//         if (arrResMass[m] != arrImageResult[p]) {
//           arrImage[m] = 0;
//         }
//       }
//     }
//     for (var h = 0; h < arrImage.length; h++) {
//       if (arrImage[h] != 0) {
//         arrImageFilter.push (arrImage[h]);
//       }
//     }
//     messageId.innerHTML =
//       '<b>Найдено ' + arrImageFilter.length + ' результатов</b>';
//     window.arrArr = arrImageFilter;
//   }
// }

// function arrImg {
//   return window.arrArr;
// }

// function carusele (mass, first = mass[0]) {
//   let caunt = 0;
//   let innerIMG = '';
//   for (let i = 0; i < mass.length; i++) {
//     if (mass[i] === first && caunt == 0) {
//       innerIMG += ` <div class="carousel-item active" >
//                           <img src="img/img/${mass[i]}.png" class="d-block rounded mx-auto " alt="${mass[i]}">
//                           <figcaption>${mass[i]}.png</figcaption>
//                           <div class="panelka ">
//                              <a href="img/img/${mass[i]}.png"  download><img src="icon/down1.svg"></a>
//                              <a href="img/img/${mass[i]}.png" rel="lightbox" align="Center"><img src="icon/search1.svg"></a>
//                              </div> 
// 					      	</div>`;
//       caunt++;
//     } else {
//       innerIMG += ` 
//                             <div class="carousel-item " >
//                                 <img src="img/img/${mass[i]}.png" class="d-block rounded mx-auto " alt="${mass[i]}">
//                                 <figcaption>${mass[i]}.png</figcaption>
//                                 <div class="panelka">
//                                      <a href="img/img/${mass[i]}.png"  download><img src="icon/down1.svg"></a>
//                                      <a href="img/img/${mass[i]}.png" rel="lightbox" align="Center"><img src="icon/search1.svg"></a>
//                                  </div> 
//                             </div>
//                 `;
//     }
//   }

//   return innerIMG;
// }

// function scroll (mass) {
//   var innerIMG = '';
//   let ymass = mass;
//   for (let i = 0; i < mass.length; i++) {
//     innerIMG += ` <div class=' dinline'>
//                     <img src="img/img/${mass[i]}.png"  alt="${mass[i]}" onclick="caruseleReset(funImageFilter(),${mass[i]})" >
//                     </div>
//                    `;
//   }

//   return innerIMG;
// }

// function result () {
//   if (arrImg == undefined || arrImg.length == 0) {
//     alert ('Вы должны указать настоики поиска , либо настройки поиска нулевые');
//     clearImageBlock ();
//   } else {
//     document.getElementById ('ShowImage').style.display = 'inline';
//     document.getElementById ('innerIMG').innerHTML = carusele (
//       arrImg
//     );
//     document.getElementById ('sl_image').innerHTML = scroll (arrImg);
//   }
// }
// function caruseleReset (mass, index) {
//   document.getElementById ('innerIMG').innerHTML = '';
//   document.getElementById ('innerIMG').innerHTML = carusele (mass, index);
// }

// function clearImageBlock () {
//   document.getElementById ('ShowImage').style.display = 'none';
//   document.getElementById ('innerIMG').innerHTML = '';
//   document.getElementById ('sl_image').innerHTML = '';
// }

// $ ('.carousel').carousel ({
//   interval: 200000,
// });
