window.onload=function(){
	alert("hi");
	
	//$('#signinbar').submit(function () {
	//loginsignup();
	//return false;
	//});
	
}
function loginsignup()
{
alert("inside login");
var loginid = document.getElementById('loginidbar').value;
var password = document.getElementById('passwordbar').value;
// mismatch = document.getElementById('mismatch').value;


var listItems = [];
 
  if (window.XMLHttpRequest) {
   
    xmlhttplogbar=new XMLHttpRequest();
	 
  } else { 
    xmlhttplogbar=new ActiveXObject("Microsoft.XMLHTTP");
	
  }
  xmlhttplogbar.onreadystatechange=function() {
    if (xmlhttplogbar.readyState==4 && xmlhttplogbar.status==200) {
     

var check;
	check= xmlhttplogbar.responseText;
	alert("check"+check);
	 if(check=="true")
	 {
	 alert("starting session");
	 setsession(loginid);
	 var nextpage = localStorage.getItem('nextpage');
	 if(nextpage==0){
	 window.open("index.html","_self");return;
	 }else{
	 window.open(nextpage,"_self");
	 return;
	 }else
	 {
	// mismatch.value="Username or Password is Incorrect";
	alert("The Loginid or the password is incorrect");
	 return;
	 }
	  
    }
  }
 
 xmlhttplogbar.open("GET","php/loginverify.php?loginid="+loginid+"&password="+password,true);
  xmlhttplogbar.send();
  

}
}

function setsession(loginid)
{




var sessionvar;
 
  if (window.XMLHttpRequest) {
   
    xmlhttpsetsess=new XMLHttpRequest();
	
  } else { 
    xmlhttpsetsess=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttpsetsess.onreadystatechange=function() {
    if (xmlhttpsetsess.readyState==4 && xmlhttpsetsess.status==200) {
     


	 sessionvar=xmlhttpsetsess.responseText;
	 alert(sessionvar);
	 
	  
    }
  }
 
  xmlhttpsetsess.open("GET","test1.php",true);
  xmlhttpsetsess.send();
  





}