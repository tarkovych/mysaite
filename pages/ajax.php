<h1>v8</h1>

<p id='load' style="cursor:pointer">Load Data
</p>
<div id="information"></div>

<script>

var xhr = new XMLHttpRequest() ; 
xhr.open("GET","players.json",true);
xhr.send() ; 

xhr.onreadystatechange=function (){
if(xhr.readyState !=4) return ; 
if(xhr.status !=200){
    console.log(xhr.status + ':'+ xhr.statutText)
}
else{
console.log(xhr.responseText) ; 
}


}







console.log(xhr) ; 
</script>
