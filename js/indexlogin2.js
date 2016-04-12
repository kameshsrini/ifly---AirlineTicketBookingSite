
function loginsignup()
{

alert("inside login");
var loginid = document.getElementById('loginidbar').value;
var password = document.getElementById('passwordbar').value;
// mismatch = document.getElementById('mismatch').value;

alert(loginid);
var listItems = [];
 
  if (window.XMLHttpRequest) {
   
    xmlhttplogindex1=new XMLHttpRequest();
	 
  } else 
  { 
    xmlhttplogindex1=new ActiveXObject("Microsoft.XMLHTTP");
	
  }
  xmlhttplogindex1.onreadystatechange=function() 
  {
    if (xmlhttplogindex1.readyState==4 && xmlhttplogindex1.status==200)
	{
     
alert(xmlhttplogindex1.responseText);
     var check;
	check= parseInt(xmlhttplogindex1.responseText);
	//alert("check"+check);
	 if(check==0)
	 {
	// mismatch.value="Username or Password is Incorrect";
	 xmlhttplogindex1=null;
	alert("The Loginid or the password is incorrect");
	 //return;
	 }
	 else
	 {
	 alert("starting session");
	 localStorage.setItem('loggedincustid',check);
	 //var nextpage = localStorage.getItem('nextpage');
	 xmlhttplogindex1=null;
	 window.open("index.html","_self");
	 //return;
	 }
	 
	  
    }
	}
  //alert("sending");
 
 xmlhttplogindex1.open("GET","php/loginverify.php?loginid="+loginid+"&password="+password,true);
  xmlhttplogindex1.send();
  


}

