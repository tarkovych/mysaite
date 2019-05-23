<?php

$PageNumber=1 ; ////НОМЕР СТРАНИЦЫ
require_once 'comp/header.php' ; 
?>

<p class="text-secondary" id="version">version 1.0</p>
<div class="container-fluid" >

<style>
 body {
 	font-size: 20px;
 }
 #rad_pl, #rad_on, #rad_loc {
 	margin-right: 20px;
 }
 #project_name, #version, #admin_modify_pass, #admin_only_pass {
 	width: 200px;
 	font-size: 18px;
 	margin: 5px 0;
 }

 #project_name {
 	width: 250px;
 	font-size: 18px;
 	margin: 5px 0;
 }

 #btn_create {
 	margin-left: 200px;
 	font-size: 18px;
 }
 fieldset {
 	width: 460px;
 	padding: 20px;
 }
 #div_left {
 	position: absolute;
 	left: 550px;
 	top:10px;
 }
 select {
 	font-size: 18px;
 	width: 100px;
 }
 #pass_field {
 	padding: 10px;
 }

</style>


	<div>
		<label for="project_name">Введите название проекта:</label>
		<input type="text" id="project_name" name="project_name" required="" />
		

		<br>
		<br>
		<label for="version">Введите номер версии:</label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
		<input type="number" id="versionPro" name="version" required="" step="1" min="1" value="1">
		<br>
		<br>
	</div>
	<div>
		<fieldset >
			<legend>Тип проекта</legend>
			<label for="rad_loc">    Локация</label>
			<input type="radio" id="rad_loc" name="type_pr" />
			<label for="rad_pl">    Планшет</label>
			<input type="radio" id="rad_pl" name="type_pr" />
			<label for="rad_on">    Online</label>
			<input type="radio" id="rad_on" name="type_pr" checked />
		</fieldset>
	</div>
	<div id="div_left" style="width: 420px; ">
		<fieldset style="width: 420px; padding-right: 0;">
			<legend>Выбор сервера</legend>
			<label for="server_name">Сервер </label>
			<select id="server_name">
				<option>BRT</option>
				<option>IPSOS</option>
			</select>
		</fieldset>
		<br>
		<fieldset id="pass_field" style="width: 420px;">
			<legend>Пароль</legend>
			<label for="admin_only_pass">Only Password &nbsp&nbsp&nbsp </label>
			<input type="text" id="admin_only_pass" value="JGSSSAVZP5"><br>
			<label for="admin_modify_pass">Modify Password  </label>
			<input type="text" id="admin_modify_pass" value="SHMXXDY4WW">
		</fieldset>
	</div>
	<br>
	<input type="button" id="btn_create" name="btn_create" value="СОЗДАТЬ" onclick="btn_click()"/>
	
	<br>
	<br>
	<div id="ver"></div>
	
	<div id="project"></div>
	<div id="test"></div>
	<div id="qshow"></div>
	<div id="admin"></div>
	<div id="login_name"></div>
	<div id="only_pass"></div>
	<div id="modify_pass"></div>



</div>
<?php require_once 'comp/footerJS.php' ; ?>

<script>
		var text_board;
		function btn_click() {


			document.getElementById("project").innerHTML="";
			document.getElementById("test").innerHTML="";
			document.getElementById("qshow").innerHTML="";
			document.getElementById("admin").innerHTML="";
			document.getElementById("login_name").innerHTML="";
			document.getElementById("only_pass").innerHTML="";
			document.getElementById("modify_pass").innerHTML="";

			var pass_modify=document.getElementById("admin_modify_pass").value+"";
			var pass_only=document.getElementById("admin_only_pass").value+"";
			var link_name;
			var server;
			if( document.getElementById("server_name").options.selectedIndex == 0 ) {
				server="http://web.brt.org.ua/";
				link_name = "Тестовый линки:"
			}
			else {
				server="http://b.ipsos.com.ua/";
				link_name = "Рабочие линки:"
			}
			
			var nameProject = document.getElementById("project_name").value;
			let versionPro = document.getElementById("versionPro").value;
			if( nameProject.length<3 ) {
				alert("Введите название проекта!");
				return;
			}
			if( versionPro==null ) {
				alert("Введите версию проекта!");
				return;
			}
			//шапки для лінків
			var ProjectLink =  "<b>Project link :</b> " ;
			var TestLink   = "<b>" + "Test link : "        + "</b>" ;
			var QShowLink  = "<b>" + "Quota show link : "  + "</b>" ;
			var AdminLink  = "<b>" + "Admin link : "       + "</b>" ;
			document.getElementById("ver").innerHTML= "<br><b><span style='font-size:20px;' >"+ link_name +"</span></b> <br>Version: "+version;
			text_board = "<br><b><span style='font-size:24px;' >"+ link_name +"</span></b> <br>Version: "+versionPro;
			//текст лінків
			// локация
			if( document.getElementById("rad_loc").checked==true ) {
				
				ProjectLink += server+nameProject;
				TestLink="<b>" + "Upload link :</b>" + server + nameProject + "/upload";
				document.getElementById("project").innerHTML=ProjectLink;
				document.getElementById("test").innerHTML=TestLink;
				AdminLink  += server + nameProject +"/" + nameProject +"admin.html"+"</br></br>";
				document.getElementById("admin").innerHTML=AdminLink;
				document.getElementById("login_name").innerHTML="<b>Login</b> : admin";
				document.getElementById("modify_pass").innerHTML="<b>Modify Password : </b>" +  pass_modify;

			}
			// планшет
			if( document.getElementById("rad_pl").checked==true ) {
				
				var arr=nameProject.split("_");
				nameProject="";
				for( var i=0; i<arr.length-1; i++ ) {
					nameProject+=arr[i]+"x";
				}
				nameProject+=arr[arr.length-1];
				ProjectLink += "http://"+nameProject+".sawtoothsoftware.com" + "<br>Пароль: " + pass_only.substr(0,5);
				AdminLink += "http://"+nameProject+".sawtoothsoftware.com" + "/admin.html";
				document.getElementById("project").innerHTML=ProjectLink;
				document.getElementById("admin").innerHTML=AdminLink;
				document.getElementById("login_name").innerHTML="<b>Login</b> : admin";
				document.getElementById("only_pass").innerHTML="<b>Only Password : </b> " + pass_only;
				document.getElementById("modify_pass").innerHTML="<b>Modify Password : </b> "+pass_modify;
			}
			// онлайн
			if( document.getElementById("rad_on").checked==true ) {

				ProjectLink =  "<b>Constract link :</b> " ;
				TestLink   += server + nameProject + "/cgi-bin/ciwweb.pl?studyname="+nameProject+"&uid=0"+"</br></br>";
				QShowLink += server + nameProject + "/cgi-bin/ciwweb.pl?studyname="+nameProject+"&uid=qshow"+"</br></br>";
				AdminLink+= server + nameProject +"/admin.html";
				ProjectLink+=server + nameProject + "/cgi-bin/ciwweb.pl?studyname="+nameProject+"&uid={VALUE}"+"</br></br>";
				document.getElementById("project").innerHTML=ProjectLink;
				document.getElementById("test").innerHTML=TestLink;
				document.getElementById("qshow").innerHTML=QShowLink;
				document.getElementById("admin").innerHTML=AdminLink;
				document.getElementById("login_name").innerHTML="<b>Login</b> : admin";
				document.getElementById("only_pass").innerHTML=("<b>Only Password : </b>" + pass_only);
				document.getElementById("modify_pass").innerHTML="<b>Modify Password : </b> " + pass_modify;


			}
		}

		
</script>



</body>
</html>