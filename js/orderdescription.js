$(window).load(getorders);

function getorders()


{
var listItems = [];var names = [];

 var custid= localStorage.getItem('loggedincustid');
 var confcode= localStorage.getItem('confcode');

	if (window.XMLHttpRequest) {
   
		xmlhttpf=new XMLHttpRequest();
		xmlhttpm=new XMLHttpRequest();
	} else { 
		xmlhttpf=new ActiveXObject("Microsoft.XMLHTTP");
		xmlhttpm=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttpf.onreadystatechange=function() {
    if (xmlhttpf.readyState==4 && xmlhttpf.status==200) {
		
		//alert(xmlhttpf.responseText);
		listItems.push(xmlhttpf.responseText);

$('#orderdescription').append(listItems.join(' '));
$('#orderdescription').listview('refresh');

	  
		}
	}
	xmlhttpm.onreadystatechange=function() {
    if (xmlhttpm.readyState==4 && xmlhttpm.status==200) {
		
		//alert(xmlhttpm.responseText);
		names.push(xmlhttpm.responseText);

$('#ordernames').append(names.join(' '));
$('#ordernames').listview('refresh');

	  
		}
	}
	//alert("gonna send http req");
	xmlhttpm.open("GET","php/confirmpassengernames.php?custid="+custid+"&bookingreference="+confcode,true);
	xmlhttpm.send();
	xmlhttpf.open("GET","php/orderdescription.php?custid="+custid+"&confcode="+confcode,true);
	xmlhttpf.send();	
	
}
