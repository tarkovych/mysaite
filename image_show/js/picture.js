document.getElementById('Pic').innerHTML=`<img src="img/img/${ObjRow[0]['IMG']}" class="img-thumbnail mx-auto d-block" id="imageTran" alt="..." style="max-width:900px">
<a href="img/img/${ObjRow[0]['IMG']}" download>Скачать</a>`; 
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
      <th scope="col">Категория</th>
			<th scope="col">Категория</th>
			<th scope="col">y</th>
			<th scope="col">y</th>
    </tr>
  </thead>
  <tbody>

    ${Lable} 

  </tbody>
</table>

` ; 
document.getElementById('Lab').innerHTML=Table ; 