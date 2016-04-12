$(window).load(checksession);
function checksession()
{

alert("vdfgdr");
var listItems = [];
var sessionvar;
 
  if (window.XMLHttpRequest) {
   
    xmlhttpsess=new XMLHttpRequest();
	
  } else { 
    xmlhttpsess=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttpsess.onreadystatechange=function() {
    if (xmlhttpsess.readyState==4 && xmlhttpsess.status==200) {
     


	 sessionvar=xmlhttpsess.responseText.innerHTML;
	 alert(sessionvar);
	// if(sessionvar==undefined){
	 
//	 window.open("login.html","_self");
    
	 
	// }
	  
    }
  }
 
  xmlhttpsess.open("GET","php/test2.php",true);
  xmlhttpsess.send();
  



}
function getorders()
{


$("input[type='submit']").click(function() { return false; });

var listItems = [];

 var custid= localStorage.getItem('loggedincustid');

	if (window.XMLHttpRequest) {
   
		xmlhttpf=new XMLHttpRequest();
	} else { 
		xmlhttpf=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttpf.onreadystatechange=function() {
    if (xmlhttpf.readyState==4 && xmlhttpf.status==200) {
		
		//alert(xmlhttpf.responseText);
		listItems.push(xmlhttpf.responseText);

$('#orders').append(listItems.join(' '));
$('#orders').listview('refresh');

	  
		}
	}
	//alert("gonna send http req");
	xmlhttpf.open("GET","php/getorders.php?custid="+custid,true);
	xmlhttpf.send();	
	
}
function showconfirmation(confcode)
{
localStorage.setItem('confcode', confcode);
window.open("orderdescription.html","_self");
return false;

}