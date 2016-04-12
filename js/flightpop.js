

function onformsubmit()
 { 
//document.getElementById('resultsList').style.display= 'block';
//document.getElementById('resultsListsort').style.display= 'none';

 document.getElementById('resultsList').innerHTML =" ";
 document.getElementById('resultsListsort').innerHTML =" ";
//alert("onsub");
document.getElementById('warn').innerHTML="";
var from = document.getElementById("from").value;
var to = document.getElementById("to").value;
var date = document.getElementById("jd").value;
var radios = document.getElementsByName('hi');
var i;
for (i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        // do whatever you want with the checked radio
        

        // only one radio can be logically checked, don't check the rest
        break;
    }
}
var not = document.getElementById('not').value;



if(from == "" || to == "" || date == "" || radios[i].value == "")
{
document.getElementById('warn').innerHTML=" Enter All The Required Details";
return;
}
//alert(radios[i].value);

document.getElementById('sortprice').style.display='block';
document.getElementById('sortduration').style.display='block';
document.getElementById('warn').innerHTML="";
var listItems = [];
 
  if (window.XMLHttpRequest) {
   
    xmlhttp=new XMLHttpRequest();
  } else { 
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
     
listItems.push(xmlhttp.responseText);

$('#resultsList').append(listItems.join(' '));
$('#resultsList').listview('refresh');
	  xmlhttp = null;
    }
  }
 
  
  

  xmlhttp.open("GET","php/getflights.php?from="+from+"&to="+to+"&date="+date+"&class="+radios[i].value+"&tickets="+not,true);
//xmlhttp.open("GET","php/getflighttest.php");
 xmlhttp.send();

}
function onformsubmitsort(sortparam)
 {
//alert("onsub");
//document.getElementById('resultsList').style.display= 'block';
//document.getElementById('resultsListsort').style.display= 'block';
document.getElementById('resultsListsort').innerHTML = " "; 
document.getElementById('resultsList').innerHTML =" ";
document.getElementById('warn').innerHTML="";
var from = document.getElementById("from").value;
var to = document.getElementById("to").value;
var date = document.getElementById("jd").value;
var radios = document.getElementsByName('hi');
var i;
for (i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        // do whatever you want with the checked radio
        

        // only one radio can be logically checked, don't check the rest
        break;
    }
}
var not = document.getElementById('not').value;


if(from == "" || to == "" || date == "" || radios[i].value == "")
{
document.getElementById('warn').innerHTML=" Enter All The Required Details";
return;
}
//alert(radios[i].value);

document.getElementById('warn').innerHTML="";
var listItems = [];
 
  if (window.XMLHttpRequest) {
   
    xmlhttpsort=new XMLHttpRequest();
  } else { 
    xmlhttpsort=new ActiveXObject("Microsoft.XMLHTTP");
	
  }
  xmlhttpsort.onreadystatechange=function() {
    if (xmlhttpsort.readyState==4 && xmlhttpsort.status==200) {
    
listItems.push(xmlhttpsort.responseText);

$('#resultsListsort').append(listItems.join(' '));
$('#resultsListsort').listview('refresh');
	  xmlhttpsort = null;
    }
  }
 
  
  

  xmlhttpsort.open("GET","php/getflightsorted.php?from="+from+"&to="+to+"&date="+date+"&class="+radios[i].value+"&tickets="+not+"&sortparam="+sortparam,true);
//xmlhttp.open("GET","php/getflighttest.php");
 xmlhttpsort.send();

}
function flightselect(flightid,not,class1,date)
{

localStorage.setItem('nextpage', "booking.html");
localStorage.setItem('flight_id', flightid);
localStorage.setItem('not', not);
localStorage.setItem('class', class1);

localStorage.setItem('date', date);
//var custId="8";
//localStorage.setItem('loggedincustid', custId);

window.open("booking.html","_self");

}
