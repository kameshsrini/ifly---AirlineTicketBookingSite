<?php

$bookingreference = $_GET['bookingreference'];
$custid = $_GET['custid'];

$not = intval($_GET['not']);

//DB connection
$con = mysqli_connect('localhost','root','','airlineticketing');
if (!$con) {
	die('Could not connect: ' . mysqli_error($con));
}
mysqli_select_db($con,"ajax_demo");
//$result=1;
echo "<h3>Your Booking is Confirmed.</h3></br><h3>Booking Reference Id :".$bookingreference." </h3>";

?>