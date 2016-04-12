<?php

$names = $_GET['names'];
$dobs = $_GET['dobs'];
$not = intval($_GET['not']);
$confcode = $_GET['confcode'];
$customerid = $_GET['customerid'];
$flightid = $_GET['flightid'];
$class = $_GET['class'];
$journeydate = $_GET['journeydate'];
$bookingdate = $_GET['bookingdate'];
//Prepare names and DOBs array
$namesArray = explode(',', $names);
$dobsArray = explode(',', $dobs);
//DB connection
$con = mysqli_connect('localhost','root','','airlineticketing');
if (!$con) {
	die('Could not connect: ' . mysqli_error($con));
}
mysqli_select_db($con,"ajax_demo");
//$result=1;
$sqlget="UPDATE capacity set Booked_economy = Booked_economy+".$not." WHERE Flight_ID='".$flightid."' AND Flight_date='".$journeydate."'";
$resultget = mysqli_query($con,$sqlget);
for($i=0;$i<$not;$i++){
	$sql="INSERT INTO `bookings` (`Confirm_code`, `Flight_ID`, `Class`, `Customer_ID`, `Passenger_name`, `Passenger_dob`, `Journey_date`, `Booking_date`) VALUES ('".$confcode."', '".$flightid."', '".$class."', '".$customerid."', '".$namesArray[$i]."', '".$dobsArray[$i]."', '".$journeydate."', '".$bookingdate."');";
	//$sql="INSERT INTO `airlineticketing`.`bookings` (`Booking_ID`, `Confirm_code`, `Flight_ID`, `Customer_ID`, `Passenger_name`, `Passenger_dob`, `Journey_date`, `Booking_date`) VALUES (NULL, 'akhskjdfhds', '1', '8', 'Prashanth', '2014-12-16', '2014-12-16', '2014-12-03');";
	$result = mysqli_query($con,$sql);
}

echo " in php".$result;
?>