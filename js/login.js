window.onload=function(){
	
	$('#loginform').submit(function () {
	login();
	return false;
	});
	$('#signupbar').submit(function () {
	loginsignup();
	return false;
	});
	
}
function login()
{
//alert("inside login");
var loginid = document.getElementById('loginid').value;
var password = document.getElementById('password').value;
var mismatch = document.getElementById('mismatch');


var listItems = [];
 
  if (window.XMLHttpRequest) {
   
    xmlhttplog=new XMLHttpRequest();
	 
  } else { 
    xmlhttplog=new ActiveXObject("Microsoft.XMLHTTP");
	
  }
  xmlhttplog.onreadystatechange=function() {
    if (xmlhttplog.readyState==4 && xmlhttplog.status==200) {
     

var check;
	check= parseInt(xmlhttplog.responseText);
	//alert("check"+check);
	 
	 if(check==0){
	 
	 mismatch.innerHTML="Username or Password is Incorrect";
	 return;
	 }
	 else
	 {
	  mismatch.innerHTML="";
	// alert("starting session"+check);
	 localStorage.setItem('loggedincustid',check);
	 var nextpage = localStorage.getItem('nextpage');
	 window.open(nextpage,"_self");
	 
	 }
	  
    }
  }
 
 xmlhttplog.open("GET","php/loginverify.php?loginid="+loginid+"&password="+password,true);
  xmlhttplog.send();
  

}

function loginsignup()
{var currentpage=window.location;
//alert("inside login");
localStorage.setItem('nextpage',currentpage.href);
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
	//alert("check"+check);
	 if(check==0){
	 alert("The Loginid or the password is incorrect");
	 return;}
	 else{
	 //alert("starting session");
	 localStorage.setItem('loggedincustid',check);
	 var nextpage = localStorage.getItem('nextpage');
	 
	 window.open(nextpage,"_self");
	 return;
	 }
	  
    }
  }
 
 xmlhttplogbar.open("GET","php/loginverify.php?loginid="+loginid+"&password="+password,true);
  xmlhttplogbar.send();
  

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
	// alert(sessionvar);
	 
	  
    }
  }
 
  xmlhttpsetsess.open("GET","test1.php",true);
  xmlhttpsetsess.send();
  





}