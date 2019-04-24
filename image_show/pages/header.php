<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta http-equiv="x-ua-compatible" content="ie=edge">
		<title><?php  echo $page_Name ; ?></title>
    <!-- Material Design Bootstrap -->
     <link href="css/mdb.min.css" rel="stylesheet">  
	
		<link rel="stylesheet" type="text/css" href="css/lightbox.css">
       <!-- Font Awesome -->
   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"> 
  <!-- Bootstrap core CSS -->
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <!-- Your custom styles (optional) -->
  <link rel="stylesheet" href="css/mystyle.css">
  <link rel="stylesheet" href="css/mystyle2.css">


</head>
<body>




<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="index.php">
    ГОЛОВНА
  </a>
  <a class="navbar-brand" href="program.php">
    ADMIN
  </a> 
  <!-- <div id="languages-switcher">


				<div id="languages-switcher-btn">
					<script>document.write('<div id="current-language" class="flag flag-' + currentLanguage + '"></div>');</script>
				</div>
				<div id="languages-dropdown-list">
					<ul>
          <li><div data-code="ru" class="flag flag-ru">Русский</div></li>
          <li><div data-code="ua" class="flag flag-ua">Українська</div></li>
          <li><div data-code="en" class="flag flag-en">English</div></li>
					</ul>
				</div>
			</div> -->






</nav>

<!-- <script>
var languages = ['<div data-code="ru" class="flag flag-ru">Русский</div>',
'<div data-code="ua" class="flag flag-ua">Українська</div>',
'<div data-code="en" class="flag flag-en">English</div>'] ; 
function getCookie(name){
	var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}
function setCookie(name, value, options){
	options = options || {};
	var expires = options.expires;
	if(typeof expires == "number" && expires){
		var d = new Date();
		d.setTime(d.getTime() + expires * 1000);
		expires = options.expires = d;
	}
	if(expires && expires.toUTCString) options.expires = expires.toUTCString();
	value = encodeURIComponent(value);
	var updatedCookie = name + "=" + value;
	for(var propName in options){
		updatedCookie += "; " + propName;
		var propValue = options[propName];
		if(propValue !== true) updatedCookie += "=" + propValue;
	}
	document.cookie = updatedCookie;
}
function deleteCookie(name){
	setCookie(name, "", {expires: -1});
}
if(config.showLanguagesSwitcher === false) document.write('<style>#top-bar-languages-switcher{display:none}#top-bar-version{right:0}#top-bar-left{padding-right:60px}</style>');
if(config.showQuestionNames === false) document.write('<style>.qName{display:none}</style>');
if(config.showDebugButton === true) document.write('<style>#debug-toggle{display:inline-block}</style>');
</script>
<style>{display:none}</style>

<script>
var currentLanguage = getCookie('language') || config.defaultLanguage;
document.write('<style>.' + currentLanguage + '{display:inline}</style>');


</script> -->