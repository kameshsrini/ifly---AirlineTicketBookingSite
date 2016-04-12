<?php

$loginid = $_GET['loginid'];

//DB connection
$con = mysqli_connect('localhost','root','','airlineticketing');
if (!$con) {
	die('Could not connect: ' . mysqli_error($con));
}
mysqli_select_db($con,"ajax_demo");
$sql = "SELECT * FROM login WHERE Login_ID='".$loginid."';";
$result = mysqli_query($con,$sql);
$i=1;
if($result->num_rows===0 && strlen($loginid)>5){
	echo "Username accepted";
}
else if($result->num_rows>0 && strlen($loginid)>5){
	echo "Username already exists";	
}
else{	//just to be safe. This else block would probably never be reached.
	echo "Username too short";
}

?>