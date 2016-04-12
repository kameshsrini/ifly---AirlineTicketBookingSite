window.onload=function(){
	getdet();
	$('#oneway').submit(function () {
	//onformsubmit();
	return false;
	});
}

function getdet() {
localStorage.setItem('nextpage',"index.html");
//alert("getdet");
document.getElementById('warn').innerHTML="";
var listItems = [];
  //alert("listpop");
  if (window.XMLHttpRequest) {
   
    xmlhttplist=new XMLHttpRequest();
	// xmlhttpf=new XMLHttpRequest();
  } else { 
    xmlhttplist=new ActiveXObject("Microsoft.XMLHTTP");
	//xmlhttpf=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttplist.onreadystatechange=function() {
    if (xmlhttplist.readyState==4 && xmlhttplist.status==200) {
     


	  $('#listValue').append(xmlhttplist.responseText);
	  
    }
  }
 
  xmlhttplist.open("GET","php/getairports.php",true);
  xmlhttplist.send();
  
 
  
}