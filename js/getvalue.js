$(window).load(checksession);

function checksession()

{

localStorage.setItem('nextpage', "booking.html");
var listItems = [];
var sessionvar;
 
  
     


	 sessionvar=localStorage.getItem('loggedincustid')
	 //alert(sessionvar);
	 if(sessionvar==0){
	 localStorage.setItem('nextpage', "booking.html");
	window.open("login.html","_self");
    
	 
	 }else{
	 getvalue();
	 
 

  
}


}

function getvalue()


{

 var flightid = localStorage.getItem('flight_id');
 var not = localStorage.getItem('not');
  var class1 = localStorage.getItem('class');
    var date = localStorage.getItem('date');

   
   
     
	 var listItems = [];var textfield = [];
 
  if (window.XMLHttpRequest) {
   
    xmlhttpflightdet=new XMLHttpRequest();
	    xmlhttptextfieldcreate=new XMLHttpRequest();

	 
  } else { 
    xmlhttpflightdet=new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttptextfieldcreate=new ActiveXObject("Microsoft.XMLHTTP");

	
  }
  xmlhttpflightdet.onreadystatechange=function() {
    if (xmlhttpflightdet.readyState==4 && xmlhttpflightdet.status==200) {
     
listItems.push(xmlhttpflightdet.responseText);

$('#flightdetails').append(listItems.join(' '));
$('#flightdetails').listview('refresh');

	  
    }
  }
  xmlhttptextfieldcreate.onreadystatechange=function() {
    if (xmlhttptextfieldcreate.readyState==4 && xmlhttptextfieldcreate.status==200) {
     
textfield.push(xmlhttptextfieldcreate.responseText);
$('#passengerdetails').append(textfield.join(' '));
$('#passengerdetails').listview('refresh');

	  
    }
  }
 
 
  
  

  xmlhttpflightdet.open("GET","php/flightdetails.php?flight_id="+flightid+"&class="+class1+"&date="+date+"&not="+not,true);
//xmlhttp.open("GET","php/getflighttest.php");
 xmlhttpflightdet.send();
  xmlhttptextfieldcreate.open("GET","php/textfieldcreate.php?not="+not,true);
 xmlhttptextfieldcreate.send();

	 
	 
   

}

function booktickets(not){
	var flightid = localStorage.getItem('flight_id');
	var not = localStorage.getItem('not');
	var class1 = localStorage.getItem('class');
    var journeydate = localStorage.getItem('date');
	//var custid = '<%= Session["userloggedin"] %>';
	var custId = localStorage.getItem('loggedincustid');
	var bookingdate=todaysDate();
	//prepare comma separated names and DOBs list to send as URL parameters to php
	var names="";
	var dobs="";
	for(var i=0;i<not;i++){
	
		name=document.getElementById('name'+i).value;
		dob=document.getElementById('dob'+i).value;
		//form validaton
		if(name=="")
		{
		//alert("Enter All the Passenger Details");
		return;
		}
		if(dob=="")
		{
		//alert("Enter All the Passenger Details");
		return;
		
		}
		
		
		if(i==(not-1)){
			names+=name;
			dobs+=dob;
		} else{
			names+=(name+",");
			dobs+=(dob+",");
		}
	} 
	//prepare booking confirmation code
	var random=Math.floor(Math.random() * 6000) + 1000;
	var confCode="";
	confCode=document.getElementById('name0').value.substring(0,3).toUpperCase()+flightid+not+custId+date+random;
	//alert(confCode);
	//send ajax http request to update DB using 'booktickets.php'
	if (window.XMLHttpRequest) {
   
		xmlhttp=new XMLHttpRequest();
	} else { 
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		//response
	//	alert(xmlhttp.responseText);
		localStorage.setItem('bookingreference', confCode);
		localStorage.setItem('nextpage', "confirmation.html");
		location.replace("confirmation.html");
		//window.open("confirmation.html","_self");
		}
	}
	//alert("gonna send http req");
	xmlhttp.open("GET","php/booktickets.php?names="+names+"&dobs="+dobs+"&not="+not+"&confcode="+confCode+"&customerid="+custId+"&flightid="+flightid+"&class="+class1+"&journeydate="+journeydate+"&bookingdate="+bookingdate,true);
	xmlhttp.send();	
  
}

function todaysDate(){
	//today's date in DB supported format
	var today=new Date();
	var dd=today.getDate();
	var mm=today.getMonth()+1;
	var yyyy=today.getFullYear();
	if(dd<10){dd='0'+dd;}
	if(mm<10){mm='0'+mm;}
	date=yyyy+'-'+mm+'-'+dd;
	return date;
}