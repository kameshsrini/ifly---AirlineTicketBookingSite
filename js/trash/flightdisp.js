
function onsub()
{

saveData();
var x = document.getElementById("from").value;
var y = document.getElementById("to").value;
var date = document.getElementById("jd").value;
var radios = document.getElementsByName('hi');

for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        // do whatever you want with the checked radio
        alert(radios[i].value);

        // only one radio can be logically checked, don't check the rest
        break;
    }
}
var not = document.getElementById('not').value;


if(x==""){      document.getElementById('warn').innerHTML="Enter All the Details";
alert("Enter all the Details");
return;
}

var listItems = [];
 if(x=="abc"){
  if (window.XMLHttpRequest) {
   
    xmlhttp=new XMLHttpRequest();
	 xmlhttpf=new XMLHttpRequest();
  } else { 
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	xmlhttpf=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
     

$('#listValue').append(xmlhttp.responseText);
	  
	  
    }
  }xmlhttpf.onreadystatechange=function() {
    if (xmlhttpf.readyState==4 && xmlhttpf.status==200) {
     

$('#resultsList').append(listItems.join(' '));
$('#resultsList').listview('refresh');	  
	  
    }
  }
 
  xmlhttp.open("GET","getdetails.php?",true);
  xmlhttp.send();
   xmlhttpf.open("GET","getflightdetails.php?",true);
  xmlhttpf.send();
  }
  
}
function covertDateMDYtoYMD(date_mdy){
var date=date_mdy.split("/",3);
var date_ymd=date[2].concat("-",date[0],"-",date[1]);
return date_ymd;
}

function covertDateYMDtoMDY(date_ymd){
var date=date_ymd.split("-",3);
var date_mdy=date[1].concat("/",date[2],"/",date[0]);
return date_mdy;
}

function saveData(){
var x=5;
   var _account = 5;
   //converts to JSON string the Object Literal
   _account = JSON.stringify(_account);
   localStorage.setItem('_Account', _account);
}
function loadData()
{
var resultLength = 4;
var listItems = [];
var flightitems = [];
var lisItems = [];

for(var i=0;i<resultLength;i++){
   var firstname = 'Bob';
   var lastname = ' Listerine - ' + i;

   //Add result to array
   listItems.push("<ul data-role='listview' class="+"list-group-item "+" data-theme='b' data-inset='true' id='resultsList'>"+"<div class="+"pull-right"+">&nbsp;<span class="+"badge"+">Amount</span> </br></br>"+"<button type='submit' class='btn btn-success'>Select</button>"+"</div>"+
   " <h4 class="+"list-group-item-heading"+">Flying From Airport to Flying to Airport</h4>"+
   " <p class="+"list-group-item-text"+">...</p> "+
 " </ul></br>");
 lisItems.push("<button type='submit' class='btn btn-success'>Select</button>");
}
document.getElementById("resultsList").innerHTML=xmlhttp.responseText;
//Append array to list and refresh
$('#resultsList').append(listItems.join(' '));
$('#resultsList').listview('refresh');}

function getdet() {
var listItems = [];
 
  if (window.XMLHttpRequest) {
   
    xmlhttp=new XMLHttpRequest();
	 xmlhttpf=new XMLHttpRequest();
  } else { 
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	xmlhttpf=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
     

$('#listValue').append(xmlhttp.responseText);
	  
	  
    }
  }
 
  xmlhttp.open("GET","getdetails.php?",true);
  xmlhttp.send();
  
}