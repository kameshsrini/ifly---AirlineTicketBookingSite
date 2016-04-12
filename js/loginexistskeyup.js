
//Javascript function to check username availability and password strength
    $(document).ready(function(){
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
					
				}
			}
			xmlhttp.open("GET","php/loginexistskeyup.php?loginid="+uname,true);
			xmlhttp.send();
            });
        }
	});