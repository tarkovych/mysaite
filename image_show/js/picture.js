document.getElementById('Pic').innerHTML=`
<div style="display:block"><img src="img/img/${ObjRow[0]['IMG']}" class="img-thumbnail mx-auto d-block" id="imageTran" alt="..." style="max-width:900px"></div>
<a href="img/img/${ObjRow[0]['IMG']}" download>
	<span class="ru">Скачать</span>
	<span class="ua">Скачати</span>
	<span class="en">Download</span>
	</a>`; 


let TableArr=[
	["C1","C1a","C2","C4"],
	["D2","D1","D3","S2"],
	["S7x1","S7x2","S7x3","S7x4","S7x5","S7x6","S7x7"] , 
	["GDR","AGE","BMI","IMG","SBJNUM","IDR"]
] ;

function ret(val,mass){
	let j=0 ; 
	for(let i=0;i<mass.length ; i++){
		if(val==mass[i]){
			j=i;
		}
	}
	return j ; 
}

function TABLE1(arr){
	let hTable=["<span class='ru'>Название категории</span><span class='ua'>Назва категорії</span><span class='en'>Name of category</span>","<span class='ru'>Имя вопроса</span><span class='ua'>Ім'я питання</span><span class='en'>Question name</span>","<span class='ru'>Категория</span><span class='ua'>Категорія</span><span class='en'>Category</span>","<span class='ru'>Значение категории</span><span class='ua'>Значення категорії</span><span class='en'>Category value</span>"]
	let table=`<table class="table table-hover table-sm table-bordered" >
				<tbody>` ; 
	for(j=0 ; j<arr.length;j++){
		table+=` <tr>
					<th scope="col">
					${hTable[j]}
					</th>`;			
		for(i=0 ; i<ObjRow.length ; i++){
		table+=`<td scope="col">
				${ ObjLabel[arr[j]]['cat'][ret(ObjRow[i][arr[j]],ObjLabel[arr[j]]['val'])] } 
				</td>`
		}
		table+=`</tr>`
	}
	table+=` </tbody>
			</table>` ; 
	document.getElementById("Table1").innerHTML=table ; 			
}


function TABLE2(arr){
let hTable=["<span class='ru'>Прием пищи</span><span class='ua'>Споживання</span><span class='en'>Meal</span>",
			"<span class='ru'>День</span><span class='ua'>День</span><span class='en'>Day</span>",
			"<span class='ru'>Место</span><span class='ua'>Місце</span><span class='en'>Place</span>",
			"<span class='ru'>С кем потребляли еду</span><span class='ua'>З ким споживали їжу</span><span class='en'>With whom consumed</span>"];
	let table=`	
				<table class="table table-hover table-sm " >
				<p><b><u>ИНФОРМАЦИЯ О ПРИЕМЕ ПИЩИ</b></u></p>
				<tbody>` ; 

	for(j=0 ; j<arr.length;j++){
		table+=` <tr>
					<th scope="col">
						${hTable[j]}
					</th>
					<td scope="col">
						${ ObjLabel[arr[j]]['cat'][ret(ObjRow[0][arr[j]],ObjLabel[arr[j]]['val'])] } 
					</td>
				</tr>`;
	}
	table+=` </tbody>
			</table>` ; 
	document.getElementById("Table2").innerHTML=table ; 			
}


function TABLE3(arr){
	let hTable=["<span class='ru'>Питательный</span><span class='ua'>Поживний</span><span class='en'>Nutritional</span>",
				"<span class='ru'>Обеспечивает достаточным количеством энергии</span><span class='ua'>Забезпечує достатньою кількість енергії </span><span class='en'> Provides energy</span>",
				"<span class='ru'>Сбалансированный  </span><span class='ua'>Збалансований</span><span class='en'>Well-balanced</span>",
				"<span class='ru'>Полезный</span><span class='ua'> Корисний</span><span class='en'> Useful</span>",
				"<span class='ru'>Вкусный</span><span class='ua'>Смачний  </span><span class='en'> Tasty</span>",
				"<span class='ru'>Включает в себя различные / разнообразные продукты</span><span class='ua'>Включає в себе різні / різноманітні продукти</span><span class='en'>Different products</span>",
				"<span class='ru'>Из натуральных продуктов</span><span class='ua'>Із натуральних продуктів</span><span class='en'>Natural products</span>"  ];
		let table=`
					<table class="table-hover table-sm m-4 "  >
					<p><b><u>ИНФОРМАЦИЯ О ПРИЕМЕ ПИЩИ</b></u></p>
					<tbody>` ; 
		for(j=0 ; j<arr.length;j++){
			if(ObjRow[0][arr[j]]!=0){
				ObjRow[0][arr[j]]	
				table+=` <tr>
							<td scope="col">
							${hTable[j]}
							</td>
						</tr>`;
			}
		}
		table+=` </tbody>
				</table>` ; 
		document.getElementById("Table3").innerHTML=table ; 			
	}


function TABLE4(arr){
	let hTable=["<span class='ru'>Пол</span><span class='ua'>Стать</span><span class='en'>Gender</span>",
				"<span class='ru'>Возраст </span><span class='ua'>Вік</span><span class='en'> Age</span>",
				"<span class='ru'>Индекс массы тела (ИМТ)</span><span class='ua'>Індекс маси тіла (ІМТ)</span><span class='en'>Body Mass Index (BMI)</span>",
				"<span class='ru'>IMG</span><span class='ua'> IMG</span><span class='en'> IMG</span>",
				"<span class='ru'>SBJNUM</span><span class='ua'>SBJNUM</span><span class='en'> SBJNUM</span>",
				"<span class='ru'>IDR</span><span class='ua'>IDR</span><span class='en'>IDR</span>"
				];
		let table=`	
					<table class="table table-hover table-sm " >
					<p><b><u>ИНФОРМАЦИЯ О РЕСПОНДЕНТЕ</b></u></p>
					<tbody>` ; 
		for(j=0 ; j<arr.length;j++){
			if(j<3){
				table+=` <tr>
				<th scope="col">
					${hTable[j]}
				</th>
				<td scope="col">
					${ ObjLabel[arr[j]]['cat'][ret(ObjRow[0][arr[j]],ObjLabel[arr[j]]['val'])] } 
				</td>
			</tr>`;
			}else{
				table+=` <tr>
				<th scope="col">
					${hTable[j]}
				</th>
				<td scope="col">
					${ObjRow[0][arr[j]]} 
				</td>
			</tr>`;
			}

					}
		table+=` </tbody>
				</table>` ; 
		document.getElementById("Table4").innerHTML=table ; 			
	}

TABLE1(TableArr[0]) ; 
TABLE2(TableArr[1]) ; 
TABLE3(TableArr[2]) ; 
TABLE4(TableArr[3]) ; 



