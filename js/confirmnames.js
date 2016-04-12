$(window).load(getconfirmation);

function getconfirmation()


{
//alert("sdfsd");
var listItems = [];
 var bookingreference = localStorage.getItem('bookingreference');
 var not = localStorage.getItem('not');
 var custid= localStorage.getItem('loggedincustid');
 //var custid = '<%= Session["userloggedin"] %>';
//alert(custid+"new");
	if (window.XMLHttpRequest) {
   
		xmlhttpp=new XMLHttpRequest();
	} else { 
		xmlhttpp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttpp.onreadystatechange=function() {
    if (xmlhttpp.readyState==4 && xmlhttpp.status==200) {
		listItems.push(xmlhttpp.responseText);

$('#ticketdetails').append(listItems.join(' '));
$('#ticketdetails').listview('refresh');
		
		}
	}
	//alert("gonna send http req");
	xmlhttpp.open("GET","php/confirmpassengernames.php?bookingreference="+bookingreference+"&not="+not+"&custid="+custid,true);
	xmlhttpp.send();	
	
}