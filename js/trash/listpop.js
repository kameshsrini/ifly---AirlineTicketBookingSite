//$(window).onLoad(getdet);
window.onload=function(){
	test();
	//$('#oneway').submit(function () {
	//onformsubmit();
	//return false;
	//});
}
function test() {alert("intest");}
function getdet() {
alert("getdet");
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
 
  xmlhttp.open("GET","php/getairports.php",true);
  xmlhttp.send();
  
 
  
}