$(window).load(checksession);
function checksession()
{

//alert("vdfgdr");
var listItems = [];
var sessionvar;
 
  
 sessionvar=localStorage.getItem('loggedincustid');
	//alert(sessionvar+"sessionvar");
	
	if(sessionvar==0)
	{
	//alert("going to login");
	 localStorage.setItem('nextpage', "orderhistory.html");
	window.open("login.html","_self");
    return;
	 
	 }else
	 {
	 displayconfirmation();
	 //alert("inside else");
	 }
 
 
}
function displayconfirmation()
{
//alert("insideconfirm");
var listItems = [];
 var bookingreference = localStorage.getItem('bookingreference');
 var not = localStorage.getItem('not');
 var custid= localStorage.getItem('loggedincustid');

	if (window.XMLHttpRequest) {
   
		xmlhttpconfirm=new XMLHttpRequest();
	} else { 
		xmlhttpconfirm=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttpconfirm.onreadystatechange=function() {
    if (xmlhttpconfirm.readyState==4 && xmlhttpconfirm.status==200) {
		
		
		listItems.push(xmlhttpconfirm.responseText);

$('#bookingdetails').append(listItems.join(' '));
$('#bookingdetails').listview('refresh');
	  
		}
	}
	
	xmlhttpconfirm.open("GET","php/confirm.php?bookingreference="+bookingreference+"&not="+not+"&custid="+custid,true);
	xmlhttpconfirm.send();	
	
}