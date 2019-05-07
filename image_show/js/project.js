console.log("version 7") ; 
class Buld {
	constructor(objlabel){
    this.ObjLabel=objlabel ;
		this.arr=function (){let arr=[] ; for(let id in this.ObjLabel){arr.push(id);} return arr;}
		this.mass=this.arr();	//["C1","C2"]
		}
	buldOption(massLab,massVal,id){
		let option=`
				<tr style="display:none">
					<td><input type="checkbox" value="0"  name="${id}[]" id="${id}_0" onclick="buld.All('${id}',0)"></td>
					<td><label for="${id}_0">ALL</label></div></td>
				</tr>` ; 
		for(let i=0 ; i<massLab.length;i++){
				option+=`<tr id="${id}_${massVal[i]}_table" style="background-color:#F8F8FF">
				<td>
					<input type="checkbox" value="${massVal[i]}" id="${id}_${massVal[i]}" name="${id}[]" onclick="buld.All('${id}',${massVal[i]})">
				</td>
				<td><label for="${id}_${massVal[i]}"> ${massLab[i]} 
				<span id="${id}_${massVal[i]}_cap"> /${id}_${massVal[i]}/</span>
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
								${this.ObjLabel[mass]['name']}  /${mass}/
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
				if(ID!=mass ){
					document.getElementById(`${mass}_${this.ObjLabel[mass]['val'][i]}_table`).style.color="silver";
					//document.getElementById(`${mass}_${this.ObjLabel[mass]['val'][i]}_table`).style.display="none";
				}
			///////////////NEW
				if(document.getElementById(`${mass}_${this.ObjLabel[mass]['val'][i]}`).checked==true){
					document.getElementById(`${mass}_${this.ObjLabel[mass]['val'][i]}_table`).style.color="black";
					}
			///////////////NEW
				
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
							div.style.color="black";
						//	div.style.display="";
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
					document.getElementById('massResult').innerHTML= `
					<b>
					<span class="ru">Найдено ${request}  результатов</span>
					<span class="ua">Знайдено ${request} результатів</span>
					<span class="en">Found  ${request}   results</span>
					</b>`;
				});

			 	


	}	
		
}  

var buld= new Buld(ObjLabel) ; 

buld.buldInner("tableBuild") ; 

function RESULT(){ 
		IMAGE = $.post('image.php',$("#FormAction").serialize(),function(request){
		try{
				let arrImg=JSON.parse(request) ; 
					GRID(arrImg) ;
				//	console.log(arrImg) ;
		}
		catch(e){
				console.log(e) ;
				alert(`Превышено количество фотографий`)  ; 
		}
});

	function GRID(ArrImage){

		let R=10 ; 
		let C=6 ; 
		let RR=0 ; 
		let cell = Math.ceil(ArrImage['uid'].length/(R*C)) ;
		let DIV=`` ;
		let PAG=`` ;
	for(let list=1 ;  list<=cell; list++){
		let first ; 
		let ten;
		if(list==1){first='inline';}else{first='none';}
		DIV+=`<div id="LIST_${list}" style="display:${first}">
				  ${Row(ArrImage['uid'],list,R,C)}
					 </div>`;
		if(list>=1 && list<=10){ten='inline';}else{ten='none';}
			PAG+=`<li class="page-item" style="display:${ten}" id="PAGIN_${list}"  value="${list}" onclick="FunPAG(this.value,${cell})">
								<span class="page-link" id="PAGNAM_${list}">${list}</span>
						</li>`
		}
	;	 
	

function Row(MassImd,list,R,C){
	let Row = `` ;  
	for(let row=1 ;  row<=R ; row++){
			if((list-1)*R*C+(row-1)*C <=MassImd.length){
					Row+=`<div class="row">
										${Col(ArrImage,list,row,R,C)}	
								</div>` ; 
			}	 ; 
	}
	return Row ; 
}

function Col(MassJson,list,row,R,C){
	let Col = `` ; 

	for(let col=1 ;  col<=C ; col++){
		let t = (list-1)*R*C + (row-1)*C +(col) ;
		if(t<=MassJson['uid'].length){
			if(RR!=(t-1)){console.log("RR="+RR+"T="+(t-1)) ;}	 
			RR++ ; 
		Col+=`
				<div class="col" style="max-width:210px ">
				<a href="picture.php?IMAGESHOW=${MassJson['uid'][t-1]}" target="_blank">
					<table class="table table-sm">
						<tr>
							<td scope="col" 
									style="height:200px;background:url('img/imgsm/${MassJson['IMG'][t-1]}') 100% 100% no-repeat;
									background-size:cover">
							</td>
						</tr>
						<tr>
							<td scope="col" style="font-size:10px ; ">
							${MassJson['uid'][t-1]} 
							</td>
						</tr>
					</table>
					</a>
				</div>` ; 
		}
	}	 ; 
		return Col ;
}

document.getElementById("PICTURE").innerHTML=DIV; 
document.getElementById("PAGIN").innerHTML=`
									<li class="page-item" onclick="NEXT(${cell},'pre')"><span class="page-link">Previous</span></li>
										${PAG}
									<li class="page-item" onclick="NEXT(${cell},'next')"><span class="page-link">Next(${cell})</span></li>`
					; 
}
}
function FunPAG(val,cell){
	for(let i=1;i<=cell ; i++){
		if(i==val){
			document.getElementById(`LIST_${i}`).style.display='inline';
			document.getElementById(`PAGNAM_${i}`).style.color="black" ; 
			document.getElementById(`PAGNAM_${i}`).style.fontWeight="bold" ; 
		}else{
			document.getElementById(`LIST_${i}`).style.display='none';
			document.getElementById(`PAGNAM_${i}`).style.color="" ; 
			document.getElementById(`PAGNAM_${i}`).style.fontWeight="" ; 
		}
	}
}
function NEXT(cell,next){
if(next=='next'){
	for(let i=cell ; i>=1 ; i--){
		let next=document.getElementById(`PAGIN_${i}`) ; 
		if(next.style.display=="inline" && i!=cell){
		document.getElementById(`PAGIN_${i+1}`).style.display="inline" ; 
		break
		}
	 }
	 for(let i=1 ; i<=cell ; i++){
		let next=document.getElementById(`PAGIN_${i}`) ; 
		if(next.style.display=="inline" && i<=cell-10){
			next.style.display="none" ; 
			break
		}
}
}
if(next=='pre'){
	for(let i=cell ; i>=1 ; i--){
		let next=document.getElementById(`PAGIN_${i}`) ; 
		if(next.style.display=="inline" && i>10){
		document.getElementById(`PAGIN_${i}`).style.display="none" ; 
		break
		}
	 }
	 for(let i=1 ; i<=cell ; i++){
		let next=document.getElementById(`PAGIN_${i}`) ; 
		if(next.style.display=="inline" && i>1){
			document.getElementById(`PAGIN_${i-1}`).style.display="inline" ; 
			break
		}
}
}
}
