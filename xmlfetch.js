$(window).load(strt);

function strt()
{
//setsession();
   document.getElementById('twoway').style.display = 'none';
   

var radios = document.getElementById('state1');


    $("#state1").change(function ()
	{ // use change event instead of click
       
        // use prop instead of attr and always use the disabled attribute 
        // (there is not enabled). Use true/false to alter its state
         document.getElementById('oneway').style.display = 'block';
		 document.getElementById('twoway').style.display = 'none';
		 


       
    }); // trigger a change event since it is the default 

    $("#state2").change(function() { 
	// use change event instead of click
       document.getElementById('oneway').style.display = 'none';
		 document.getElementById('twoway').style.display = 'block';
    });
}
