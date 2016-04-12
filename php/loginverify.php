<?php
$loginid = $_GET['loginid'];
$password = $_GET['password'];

$con = mysqli_connect('localhost','root','','airlineticketing');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");
$sql="SELECT Customer_ID FROM login WHERE Login_ID = '".$loginid."' AND password='".$password."'";
$result = mysqli_query($con,$sql);
//echo 0 if given login id/password combination is not found
if($result->num_rows === 0){
	echo "0";
}
//else echo customer id
else{
	$row = mysqli_fetch_array($result);
	echo $row['Customer_ID'];
}
mysqli_close($con);
?>