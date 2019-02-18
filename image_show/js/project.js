//--------------Списки у фильтр первоначальный
function createOption (mass,idName){
	var optionAll=' <option value="0">ALL</option>';
	
	for(var sp=0 ;  sp<mass.length ; sp++){	
        optionAll+=`
                    <option value="${(sp*1+1)}" id="${idName}_${(sp*1+1)}" >
                       ${mass[sp]} 
                        <span>//${idName}_${(sp*1+1)}//</span>
                    </option>`;
	}
	
	return optionAll
}

//--------------Построение фильтров
function buildTable (){
	var optionAll=' <option value="0">ALL</option>'	 ; 
	var tableAll='' ; 
	var caunt=0 ; 
	
	for(var op in list_Obj){ 
        tableAll+=  `<div class=" col-12" >
                            <label for="${list_name[caunt]}">
                                ${list_name[caunt]}
                            </label>
                            <select id="${list_name[caunt]}" class="custom-select sel" onChange="massiv(this.id)"  >
                                ${createOption (list_Obj[op] ,list_name[caunt])}
                            </select>
                     </div>` ; 
	caunt++  ;
	}
	document.getElementById("tableBuild").innerHTML=tableAll ; 
} 

buildTable () ; 

//-----кнопка ресет
function nazat() {	
buildTable () ;
document.getElementById("massResult").innerHTML="";
document.getElementById('mainDiv').innerHTML='' }

//-----кнопка результат


function fBuildOption(massiver,idel){
		document.getElementById(idel).innerHTML=createOption (massiver,idel) ; 	
	}



var arrOll = [];


//--------------построение масива от выбраного
function massiv(id){

	function filter(idel){return document.getElementById(idel).value}
	
	arrOll.push(id);
	
	//******************************************	
	function masFilter(massiv,cleId){
		function del(){
			for(x=0 ; x<massiv.length ; x++){
				if( filter(massiv[x])==0){
					massiv.splice(x,1);
					del()  ;
				}
			}
		}
		del() ; 
		function clear(cleIdi){
			for(x=0 ; x<massiv.length ; x++){
				if(cleIdi==massiv[x]){massiv.length=(x+1)}
			}
		} 
		clear(cleId) ; 
	}
	
	//***********************************************
	function allCler(mass){
		for(x=0 ; x<list_name.length ; x++){
			var caunt=0;
		 	for(y=0 ; y<mass.length ; y++){
				if(list_name[x]==mass[y]){caunt++}
			}
			if(caunt==0){document.getElementById(list_name[x]).value=0}
		}
	}
	
	function notMass(masss){
		var masiv=[] ; 
	
		for(x=0 ; x<list_name.length ; x++){
			var caunt=0;
		  	for(y=0 ; y<masss.length ; y++){
		  		if(list_name[x]==masss[y]){caunt++}
 			}
			if(caunt==0){masiv.push(list_name[x]);}	
		}
		
		return masiv 
	}	
	
	//****************Добавляет любой новый массив в фильтр******************

	
	masFilter(arrOll,id) ;
	allCler(arrOll) ; 
	
	
	var arrOllv = [];
	for(var r=0 ; r<arrOll.length;r++){
		arrOllv.push(filter(arrOll[r]));
	}
	
	//**********************************
	
	
	var arrAnsver=[] ; 
	for(ma=0 ; ma<arrOll.length ; ma++){
		var arrNumber=window['masiv'+arrOll[ma]] ; 
		var arrIntime=[]; 
		for(mo=0 ; mo<arrNumber.length ; mo++){
			if(filter(arrOll[ma])==arrNumber[mo]){
				arrIntime.push(mo) ; 
			}	
		}	
		arrAnsver.push(arrIntime); 	
	}
	
	//alert(arrAnsver) ; 
	
	var aspenArrAll=[] ; 
	for(var c=0 ; c<notMass(arrOll).length; c++){
		for(var b=0 ; b<arrAnsver.length; b++){
			for(var z=0 ; z<arrAnsver[b].length; z++){
				var aspenArr=[] ;
				var massRED=window[notMass(arrOll)[c]+"_list"] ;
				aspenArr.push(massRED[arrAnsver[b][z]])	;
			}
			aspenArrAll.push(aspenArr);	
		}
		 
	}
	
	//alert(aspenArrAll) ; 
	var arrTt=[] ; 
	
	
	//alert("arrOll="+arrOll) ; 
	//alert("arrOllv="+arrOllv) ;
	//alert("notMass(arrOll)="+notMass(arrOll)) ; 
	
	BildList(arrOll,arrOllv,notMass(arrOll));
	
}
function BildList(arrName,arrValue,arrNonName){
	
	for(var x=0; x<arrName.length; x++){
		var filter = arrValue[x];
		var arrIdValue=window['masiv'+arrName[x]];
		//alert("arrOll="+arrOll);
		for(var b=0 ; b<arrNonName.length; b++){	
			//alert("list_name="+arrNonName[b]);
			var arrIndex=window['masiv'+arrNonName[b]];
			var arr_List=window[arrNonName[b]+"_list"];
			if(1==1){fBuildOption(arr_List,arrNonName[b]);}
			var arrIndexIdValue=[];
			//alert("filter="+filter);
			for(var v=0 ; v<arrIdValue.length; v++){
				if(filter==arrIdValue[v]){arrIndexIdValue.push(v);}
			}
			//alert("arrIdName="+arrIdName);
			for(var t=0; t<=arr_List.length ;  t++){
				var caunt2=0 ;
				for(var f=0 ; f<arrIndexIdValue.length ; f++){
					if(t==arrIndex[arrIndexIdValue[f]]){ caunt2++ }
				}
				if(caunt2==0){elem=document.getElementById(arrNonName[b]+'_'+t) ; if(elem!=null){elem.parentNode.removeChild(elem)}}//elem.disabled=true;
			}	
		}

	}
	//document.getElementById('massResult').innerHTML='<b>НАЙДЕНО '+arrIdALL[1].length+' СОВПАДЕНИЙ</b>'+arrIdALL;
	 //resultIMG() ; 
	resultIMG(arrName,arrValue) ; 
}
function clearResult(){document.getElementById('massResult').innerHTML=' '  ;}


function resultIMG(arrImageId,arrImageResult){

var arrImage = masivIMG.concat();
var arrImageFilter=[]; 
var messageId=document.getElementById('massResult') ; 

	if(arrImageResult.length==0){messageId.innerHTML='<b>Выберите по чем будете искать </b>' ; setTimeout('clearResult()',4000)}
	else{
		for(var p=0;p<arrImageResult.length;p++){
			var arrResMass=window["masiv"+arrImageId[p]] ; 
			for(var m=0;m<arrResMass.length;m++){
				if(arrResMass[m]!=arrImageResult[p]){arrImage[m]=0;}
				
			}
		}
		for(var h=0;h<arrImage.length;h++){
			if(arrImage[h]!=0){arrImageFilter.push(arrImage[h])}
		}
		messageId.innerHTML="<b>Найдено " + arrImageFilter.length+ " результатов</b>";
		; 
		 window.arrArr=arrImageFilter
	}

}

 function funImageFilter(){return window.arrArr} ;
 
 function result(){
     if(funImageFilter()==undefined){
       alert( "Вы должны указать настоики поиска")  ; 
     }else{ 
    var innerIMG='' ; 
    var innerIMG2='' ; 

    for(let i=0 ; i<funImageFilter().length ; i++){
        innerIMG2+= ` <img src="img/${funImageFilter()[i]}.png" class="dinline" alt="${funImageFilter()[i]}">` ;

        if(i==0){
        innerIMG+= ` <div class="carousel-item active" data-interval="100000">
                      <img src="img/${funImageFilter()[i]}.png" class="d-block w-600" alt="${funImageFilter()[i]}">
                        </div>` ;
        }else{
            innerIMG+= `
                        <div class="carousel-item" data-interval="100000">
                            <img src="img/${funImageFilter()[i]}.png" class="d-block w-600" alt="${funImageFilter()[i]}">
                        </div>
            ` ; 
        }
        

     }

    document.getElementById('innerIMG').innerHTML=innerIMG ; 
    document.getElementById('sl_image').innerHTML=innerIMG2 ; 
     }
 	
	
 }


 $('.carousel').carousel()




// var count;
// 		function loadimg(iter){
			
// 			var ul = document.getElementById('lightgallery');
//             for (var i=1;i<iter.length;i++){
// 				var li = document.createElement('li');
// 				//	li.setAttribute('class','col-xs-6 col-sm-4 col-md-3' );					
// 					li.setAttribute('id','IMG_'+iter[i]);
// 					li.setAttribute('data-responsive','img/1-375.jpg 375, img/1-480.jpg 480, img/1.jpg 800' );
// 					li.setAttribute('data-src','[% GraphicsPath() %]image/img/'+iter[i]+'.png' );
// 					li.setAttribute('data-sub-html','<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>' );
// 					li.setAttribute('data-pinterest-text','Pin it1' );
// 					li.setAttribute('data-tweet-text','share on twitter 1' );
// 					li.innerHTML=' <a href="">  <img class="img-responsive" src="[% GraphicsPath() %]image/img/'+iter[i]+'.png" alt="IMG_'+i+'"> </a>';
// 				ul.appendChild(li);
// 				}
// 				//count=iter+20;
// 				lightGallery(document.getElementById('lightgallery'));
// 				}
// 					function heightDiv(count) {
// 					loadimg(count);
// 					var h = document.getElementById('mainDiv').clientHeight;
// 					var nextH=h+600;
// 					document.getElementById('mainDiv').style.height=h+'px';
							
// 									$( "#mainDiv" ).animate({
// 								    	  height: nextH
// 								  }, 1500, function() {
// 								    // Animation complete.
// 								  });
								
	            								
// 					}



//materilayzer

//  document.addEventListener('DOMContentLoaded', function() {
// var elems = document.querySelectorAll('select');
// var instances = M.FormSelect.init(elems, options);
// });
// $(document).ready(function(){
//  $('select').formSelect();
// });