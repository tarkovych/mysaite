document.getElementById('Pic').innerHTML=`
<img src="img/img/${ObjRow[0]['IMG']}" class="img-thumbnail mx-auto d-block" id="imageTran" alt="..." style="max-width:900px">
<a href="img/img/${ObjRow[0]['IMG']}" download>
	<span class="ru">Скачать</span>
	<span class="ua">Скачати</span>
	<span class="en">Download</span>
	</a>`; 
let Lable='';

for(mass in ObjRow[0]){
	if(ObjLabel[mass]!== undefined){
		function ret(val,mass){
			let j=0 ; 
			for(let i=0;i<mass.length ; i++){
				if(val==mass[i]){
					j=i;
				}
			}
			return j ; 
		}
	Lable+=`<tr>
						<th>${ObjLabel[mass]['name']}</th>
						<td scope="row">${mass}</td>
						<td>${ObjLabel[mass]['cat'][ret(ObjRow[0][mass],ObjLabel[mass]['val'])]}</td>
						<td>${ObjRow[0][mass]}</td>
					</tr>` ; 
}else{
	Lable+=`<tr>
						<th>${mass}</th>
						<td scope="row">${mass}</td>
						<td>${mass}</td>
						<td>${ObjRow[0][mass]}</td>
					</tr>` ; 
}
}

let Table=`
<table class="table table-hover table-sm" >
  <thead>
    <tr>
			<th scope="col">
				<span class="ru">Название категории</span>
				<span class="ua">Назва категорії</span>
				<span class="en">Name of category</span>
			</th>
			<th scope="col">
				<span class="ru">Имя вопроса</span>
				<span class="ua">Ім'я питання</span>
				<span class="en">Question name</span>
			</th>
			<th scope="col">
				<span class="ru">Категория</span>
				<span class="ua">Категорія</span>
				<span class="en">Category</span>
			</th>
			<th scope="col">
				<span class="ru">Значение категории</span>
				<span class="ua">Значення категорії</span>
				<span class="en">Category value</span>
			</th>
    </tr>
  </thead>
  <tbody>

    ${Lable} 

  </tbody>
</table>

` ; 
document.getElementById('Lab').innerHTML=Table ; 