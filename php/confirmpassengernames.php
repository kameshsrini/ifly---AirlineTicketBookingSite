<?php

$bookingreference = $_GET['bookingreference'];
$custid = $_GET['custid'];


//DB connection
$con = mysqli_connect('localhost','root','','airlineticketing');
if (!$con) {
	die('Could not connect: ' . mysqli_error($con));
}
mysqli_select_db($con,"ajax_demo");
$sql = "SELECT `Passenger_name`, `Passenger_dob` FROM `bookings` WHERE  `Confirm_code`='".$bookingreference."' AND `Customer_ID`='".$custid."';";
$result = mysqli_query($con,$sql);
$i=1;
while($row = mysqli_fetch_array($result)){
	
	echo "<div class=\"well\">
<h4><b>Passenger ".$i." </b></h4>
<div class=\"form-horizontal\">
    
<h5>Name : ".$row['Passenger_name']." <h5>
<h5>Date of Birth : ".$row['Passenger_dob']."</h5>
</div>
</div>
";
$i++;
}

?>