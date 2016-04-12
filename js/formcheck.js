window.onload=function(){
	$('#formdet').submit(function () {
	onsubmi();
	return false;
	});
	check();
}
function onsubmi()
{
//alert("hi");
var firstname = document.getElementById('firstname').value;
var middle = document.getElementById('middleintial').value;

var lastname = document.getElementById('lastname').value;

var addr1 = document.getElementById('addr1').value;
var addr2 = document.getElementById('addr2').value;
var city = document.getElementById('city').value;
var state = document.getElementById('state').value;

var zipcode = document.getElementById('zipcode').value;
var email = document.getElementById('email').value;
var pno = document.getElementById('pno').value;
var username = document.getElementById('username').value;

var password = document.getElementById('password').value;
var cuserresult = document.getElementById('cuserresult').value;


var cpassword = document.getElementById('cpassword').value;
if(lastname=="" || firstname=="" || addr1=="" || city==""|| state==""|| zipcode==""|| email==""|| pno==""|| username==""|| password==""|| cpassword==""){
//alert("Enter All Details");
return;
}

if(cuserresult=="Username too short" || cuserresult == "Username already exists")
{
//alert(cuserresult);
}
if(password!=cpassword)
{
return;
}
if(middleintial==""){middleintial="NOVAL";}

if(addr2==""){addr2="NOVAL";}

//alert("beforephpcon");
	
	var listItems = [];
 
  if (window.XMLHttpRequest) {
   
    xmlhttp=new XMLHttpRequest();
	
  } else { 
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
     

//alert(xmlhttp.responseText);
localStorage.setItem('loggedincustid',xmlhttp.responseText);
location.replace("index.html");

	  
	  
    }
  }
 
    xmlhttp.open("GET","php/insertsignup.php?firstname="+firstname+"&lastname="+lastname+"&middleintial="+middleintial+"&addr1="+addr1+"&addr2="+addr2+"&city="+city+"&state="+state+"&zipcode="+zipcode+"&pno="+pno+"&username="+username+"&password="+password+"&email="+email,true);

  xmlhttp.send();




}

function check(){

$("#username").keyup(function(){ 
        var uname = $(this).val();
				//on key up
			if (window.XMLHttpRequest) {   
				xmlhttp=new XMLHttpRequest();
			} 
			else { 
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");	
			}
			xmlhttp.onreadystatechange=function() {
				if (xmlhttp.readyState==4 && xmlhttp.status==200) {
					//handle response
					 $("#cuserresult").html(xmlhttp.responseText);
					
				}
			}
			xmlhttp.open("GET","php/loginexistskeyup.php?loginid="+uname,true);
			xmlhttp.send();
            });

 $("#password").keyup(function() { 
	  //$("#result").hide();
        var passlength = $(this).val().length; 
        var passstrength = $("#passresult"); 
         
        if(passlength <= 0) { 
            passstrength.html(""); 
            passstrength.removeClass("normal weak strong verystrong"); 
        }
        if(passlength > 0 && passlength < 4) { 
            passstrength.html("weak");
            passstrength.removeClass("normal strong verystrong").addClass("weak");
        }
        if(passlength > 4 && passlength < 8) {
            passstrength.html("Normal");
            passstrength.removeClass("weak strong verystrong").addClass("normal");          
        }   
        if(passlength >= 8 && passlength < 12) { 
            passstrength.html("Strong");
            passstrength.removeClass("weak normal verystron").addClass("strong");
        }
        if(passlength >= 12) { 
            passstrength.html("Very Strong");
            passstrength.removeClass("weak normal strong").addClass("verystrong");
        }
    });
	
	$("#cpassword").keyup(function() { 
	  //$("#result").hide();
        var cpass = $(this).val();
		var pass=$("#password").val();
if(cpass==pass)
       {$("#cpassresult").html("passwords match");}else{$("#cpassresult").html("passwords do not match");}
         
        
    });
	
	
	
	
	
	}