$(window).load(barname);
function barname(){

var custid=localStorage.getItem('loggedincustid');
//alert(custid);
   if(custid==0)
   {
   document.getElementById('navbarname').innerHTML="GUEST";
   document.getElementById('log').style.display="block";
    document.getElementById('signinbar').style.display = 'block';
   }
   else
   {
   
   
   document.getElementById('signinbar').style.display = 'none';
   
   
   
   
   
   
   if (window.XMLHttpRequest) {
   
    xmlhttp=new XMLHttpRequest();
  } else { 
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
     
document.getElementById('navbarname').innerHTML=xmlhttp.responseText;
document.getElementById('log').style.display='none';

xmlhttp= null;
	  
    }
  }
 
  
  

  xmlhttp.open("GET","php/getnameusingcustid.php?custid="+custid,true);
//xmlhttp.open("GET","php/getflighttest.php");
 xmlhttp.send();

   
   
   
 }
   


}