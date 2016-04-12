$(window).load(checksession);
function checksession()
{

//alert("vdfgdr");
var listItems = [];
var sessionvar;
 
  


	 sessionvar=localStorage.getItem('loggedincustid');
	 //alert(sessionvar);
	
	if(sessionvar==0)
	{
	 //alert("going to login");
	 localStorage.setItem('nextpage', "orderhistory.html");
 window.open("login.html","_self");
    return;
	 
	 }else
	 {
	 getorders();
	 }
	  
  

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