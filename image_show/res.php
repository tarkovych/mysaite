<script>

var pageNumber = [%PageNumber()%];//page number

var qName = document.getElementsByClassName("test_label test_question_label")[0].innerHTML;//question name

/*----------------ДАННІ РЕСПОНДЕНТА------------------------------------------------*/

if(IsPageNumber([1])) {Password(0);}//введення паролю
//if(IsPageNumber([6])){RespData();} //данні респондента
if(IsPageNumber([17])){GridNumeric(18);} //вік респондента

/*---------------ПИТАННЯ RADIOBUTTON------------------------------------------------*/

if(IsPageNumber([6,9,10])){CheckRadio(1);}
//if(IsPageNumber([0])){CheckRadio(2);}
//if(IsPageNumber([0])){CheckRadio(6);}

/*---------------ПИТАННЯ CHECKBOX--------------------------------------------------*/
/*
//S85_2. Какие из перечисленных марок пива Вы покупали и пили <font color="blue">ЗА ПОСЛЕДНИЙ МЕСЯЦ</font>? 
if(IsPageNumber([27])){CheckSpecCheckBoxes([3,5]);}

//CT.80. А какие из перечисленных марок пива Вы <font color="blue">НИКОГДА НЕ КУПИТЕ и НЕ БУДЕТЕ ПИТЬ</font>
if(IsPageNumber([29])){CheckSpecCheckBoxes([2,4,6,7,9,17,18,19,20,21,22,25,27,31,33,34,35,36,41,43,42,43,44,45,46,47,47,48,49,51,55,58]);}

if(IsPageNumber([17,18,19])){CheckAllButLastCheckBoxes();}
if(IsPageNumber([20]))CheckAllButFirstLastCheckBoxes()//покупатели
if(IsPageNumber([13,14,29])){CheckLastCheckBox();}
if(IsPageNumber([25,26])){CheckAllCheckBoxes();}
*/
/*---------------ПИТАННЯ CONST SUM-------------------------------------------------*/

//if(IsPageNumber([36,37,65,66])){CheckConstSum(10);}

/*---------------ПИТАННЯ GRID----------------------------------------------------*/

//if(IsPageNumber([23,57,62])){GridNumeric(5);}
//if(IsPageNumber([49])){GridNumericPrices(1,1);}
/*
if(IsPageNumber([51])){
SSI_GetFormObject("C31_r1_c1" ).value = String(1);
SSI_GetFormObject("C31_r1_c2" ).value = String(0);
SSI_GetFormObject("C32_r1_c1" ).value = String(2);
SSI_GetFormObject("C32_r1_c2" ).value = String(0);
SSI_GetFormObject("C33_r1_c1" ).value = String(0);
SSI_GetFormObject("C33_r1_c2" ).value = String(1);
SSI_GetFormObject("C34_r1_c1" ).value = String(3);
SSI_GetFormObject("C34_r1_c2" ).value = String(0);
SSI_SubmitMe();
}

if(IsPageNumber([21,22,24,32,33,34,35,39,40,41,42,43,45,48,49,50,53,54,55,56,58,59,60,61,62,72,73,75,76,77,78,79,84,87])){RadioGrid(1);}
if(IsPageNumber([0])){RadioGrid(3);}
*/
/*--------------ПИТАННЯ TEXT----------------------------------------------------*/

if(IsPageNumber([8])){CheckText();}

/*--------------ПИТАННЯ OPENEND--------------------------------------------------*/

//if(IsPageNumber([46,47,85,86])){CheckOpenend();}

/*--------------ПИТАННЯ NUMERIC--------------------------------------------------*/

//if(IsPageNumber([62])){CheckNumeric(1);}

/*--------------ПИТАННЯ - ЕВАЛЮАТОРИ---------------------------------------------*/

//if(IsPageNumber([68,69,70,71])){CheckCE_AREA();}
//if(IsPageNumber([81,82])){CheckPE_AR(2);}

/*----------------БІБЛІОТЕКА ФУНКЦІЙ-----------------------------------------------*/

//прохід текстового питання
function CheckText (){SSI_SubmitMe();}

//прохід питання select radiobutton
function CheckRadio(radioAnswer){
	SSI_SetSelect(qName + "_" + String(radioAnswer), true);
	SSI_GetFormObject(qName + "_" + String(radioAnswer) + "_other").value = qName + " " + "text";
	SSI_SubmitMe();
}


//прохід питання select checkbox відмітити конкретні флажки
function CheckSpecCheckBoxes(arrayOptions){
	
	var numOptions = arrayOptions.length;

	for(var i = 0; i < numOptions; i++){
		SSI_SetSelect(qName + "_" + arrayOptions[i], true);
		SSI_GetFormObject(qName + "_" + arrayOptions[i] + "_other").value = qName + " " + "text" + arrayOptions[i];
	}
	SSI_SubmitMe();		
}

//прохід питання select checkbox відмітити всі флажки
function CheckAllCheckBoxes(){
	var strOptions = document.getElementsByName("hid_list_" + qName)[0].value;
	var arOptions = strOptions.replace(/,/g, " ").split(" ");
	var numOptions = arOptions.length;

	for(var i = 0; i < numOptions; i++){
		SSI_SetSelect(qName + "_" + arOptions[i], true);
		SSI_GetFormObject(qName + "_" + arOptions[i] + "_other").value = qName + " " + "text" + arOptions[i];
	}
	SSI_SubmitMe();		
}

//прохід питання select checkbox відмітити всі флажки, крім останнього
function CheckAllButLastCheckBoxes(){
	var strOptions = document.getElementsByName("hid_list_" + qName)[0].value;
	var arOptions = strOptions.replace(/,/g, " ").split(" ");
	var numOptions = arOptions.length;

	for(var i = 0; i < numOptions-1; i++){
		SSI_SetSelect(qName + "_" + arOptions[i], true);
		SSI_GetFormObject(qName + "_" + arOptions[i] + "_other").value = qName + " " + "text" + arOptions[i];
	}
	SSI_SubmitMe();		
}


function CheckAllButFirstLastCheckBoxes(){
	var strOptions = document.getElementsByName("hid_list_" + qName)[0].value;
	var arOptions = strOptions.replace(/,/g, " ").split(" ");
	var numOptions = arOptions.length;

	for(var i = 1; i < numOptions-1; i++){
		SSI_SetSelect(qName + "_" + arOptions[i], true);
		SSI_GetFormObject(qName + "_" + arOptions[i] + "_other").value = qName + " " + "text" + arOptions[i];
	}
	SSI_SubmitMe();		
}
//прохід питання select checkbox відмітити останній флажок
function CheckLastCheckBox(){
	var strOptions = document.getElementsByName("hid_list_" + qName)[0].value;
	var arOptions = strOptions.replace(/,/g, " ").split(" ");
	var numOptions = arOptions.length;

	SSI_SetSelect(qName + "_" + arOptions[numOptions-1], true);
	SSI_GetFormObject(qName + "_" + arOptions[numOptions-1] + "_other").value = qName + " " + "text" + arOptions[numOptions-1];
	SSI_SubmitMe();		
}
//прохід питання grid checkbox відмітити всі флажки
function CheckBoxGrid(){
	var strRowOptions = document.getElementsByName("hid_row_list_" + qName)[0].value;//numbers of rows
	var strColOptions = document.getElementsByName("hid_col_list_" + qName)[0].value;//numbers of columns
	var arRowOptions = strRowOptions.replace(/,/g, " ").split(" ");
	var numRowOptions = arRowOptions.length;
	var arColOptions = strColOptions.replace(/,/g, " ").split(" ");
	var numColOptions = arColOptions.length;

	for(var i = 0; i < numRowOptions; i++){
		for(var j = 0; j < numColOptions; j++){
		SSI_SetSelect(qName + "_r" + arRowOptions[i] + "_c" + arColOptions[j], true);}	
	}
	SSI_SubmitMe();		
}
//прохід питання grid radiobuttton (row orientation) відмітити всі кнопки
function RadioGrid(radioAnswer){

	var strRowOptions = document.getElementsByName("hid_row_list_" + qName)[0].value;//numbers of rows
	var strColOptions = document.getElementsByName("hid_col_list_" + qName)[0].value;//numbers of columns
	var arRowOptions = strRowOptions.replace(/,/g, " ").split(" ");
	var numRowOptions = arRowOptions.length;
	var arColOptions = strColOptions.replace(/,/g, " ").split(" ");
	var numColOptions = arColOptions.length;

	for(var i = 0; i < numRowOptions; i++){
		for(var j = 0; j < numColOptions; j++){
			SSI_SetSelect(qName + "_r" + arRowOptions[i] +"_" + String(radioAnswer), true);
		}	
	}
	SSI_SubmitMe();		
}

//Питання з цінами
function GridNumericPrices(min1,min2){

	for(var i = 1; i <=4; i++){
		SSI_GetFormObject("C3"+i+"_r1_c1" ).value = String(min1+i-1);
		SSI_GetFormObject("C3"+i+"_r1_c2" ).value = String(min2+i-1);
	}
	SSI_SubmitMe();
}

//Питання grid numeric
function GridNumeric(intNum){

	var strRows = document.getElementsByName("hid_row_list_" + qName)[0].value;
	var strCol = document.getElementsByName("hid_col_list_" + qName)[0].value;
	var arRows = strRows.replace(/,/g, " ").split(" ");
	var numOptions = arRows.length;

	for(var i = 0; i < numOptions; i++){
		SSI_GetFormObject(qName +"_r" + arRows[i]+ "_c1" ).value = String(intNum);
	}
	SSI_SubmitMe();
}
//Питання numeric
function CheckNumeric(numValue){

	SSI_GetFormObject(qName).value = String(numValue);
	SSI_SubmitMe();
}

function CheckOpenend(){

	SSI_GetFormObject(qName).value = qName + " " + "text";
	SSI_SubmitMe();
}

function CheckConstSum(sum,numOptions){

	var strOptions = document.getElementsByName("hid_list_" + qName)[0].value;
	var arOptions = strOptions.replace(/,/g, " ").split(" ");
	var numOptions = arOptions.length;

	if(sum > numOptions){
		for(var i = 0; i < numOptions; i++){SSI_GetFormObject(qName + "_" + arOptions[i]).value = "1";}
		SSI_GetFormObject(qName + "_" + arOptions[arOptions.length-1]).value = String(sum - numOptions + 1);
		SSI_SubmitMe();
	}
	if(sum == numOptions){
		for(var i = 0; i < numOptions; i++){SSI_GetFormObject(qName + "_" + arOptions[i]).value = "1";}
		SSI_SubmitMe();
	}

	if(sum < numOptions){
		for(var i = 0; i < sum; i++){SSI_GetFormObject(qName + "_" + arOptions[i]).value = "1";}
		for(var i = sum; i < numOptions; i++){SSI_GetFormObject(qName + "_" + arOptions[i]).value = "0";}
	SSI_SubmitMe();
	}
}

/*----------------PACK EVALUATOR + CONCEPT EVALUATOR ------------------------------------------------*/

//ВІДМІТИТИ ТИП PACK EVALUATOR З КНОПКОЮ ПРОДОЛЖИТЬ ПІД КАРТИНКОЮ

function CheckPE_AR(ofset){
//відмітити всі елементи
for(var i=1; i <= document.getElementsByTagName("AREA").length; i++){onClickEl("ar" + i);}
//натиснути кнопку продолжить під картинкою
document.getElementById("next_b").click();
//ввести текст у вікно і натиснути кнопку продолжить під вікном
for(var i =0; i <= document.getElementsByTagName("AREA").length - 1;i++){
	var input = document.getElementById("t_ar" + i);
	input.value = "text" + (i + 1);
	var button = document.getElementById("b_ar" + i);
	button.disabled=false;
	button.click();}

}

//ВІДМІТИТИ ТИП CONCEPT EVALUATOR DIV

function CheckCE_DIV(intOptionNummber,strIdSymbol){
//відмітити всі елементи	
for(var i=1; i <= intOptionNummber; i++){onClickEl(strIdSymbol + i);}
	SSI_SubmitMe();	
}

//ВІДМІТИТИ ТИП CONCEPT EVALUATOR AREA

function CheckCE_AREA(){
//відмітити всі елементи	
for(var i=1; i <= document.getElementsByTagName("AREA").length; i++){onClickEl("ar" + i);}
//натиснути кнопку продолжить під картинкою
document.getElementById("next_b").click();
//натиснути загальну кнопку продолжить 
document.getElementById("next_button").click();
}
//функція повертає true, якщо поточна сторінка досліждення міститься у параметрі-масиві 
function IsPageNumber(array){return (array.indexOf(pageNumber) > -1);}
//ведення данних респондента
function RespData(){
	SSI_GetFormObject(qName + "_r1_c1").value = qName + " " + "text1";
	SSI_GetFormObject(qName + "_r2_c1").value = qName + " " + "text2";
	SSI_GetFormObject(qName + "_r3_c1").value = qName + " " + "text3";
	SSI_SubmitMe();}
//ведення паролю
function Password(pass){document.getElementById("uid").value = String(pass); SSI_SubmitMe();}

</script>