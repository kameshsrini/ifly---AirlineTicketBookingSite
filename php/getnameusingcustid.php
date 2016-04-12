<?php

$custid = $_GET['custid'];

//DB connection
$con = mysqli_connect('localhost','root','','airlineticketing');
if (!$con) {
	die('Could not connect: ' . mysqli_error($con));
}
mysqli_select_db($con,"ajax_demo");
$sql = "SELECT First_name FROM customers WHERE Customer_ID='".$custid."';";
$result = mysqli_query($con,$sql);
$i=1;
if($result->num_rows===0){
	echo "-1";
}
else{
	$row = mysqli_fetch_array($result);
	echo $row['First_name'];	
}

?>