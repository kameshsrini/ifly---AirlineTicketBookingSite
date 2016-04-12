<?php


$custid = $_GET['custid'];


$con = mysqli_connect('localhost','root','','airlineticketing');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");



$sql="SELECT DISTINCT `Confirm_code` FROM `bookings` WHERE `Customer_ID`='".$custid."';";
$result = mysqli_query($con,$sql);
$count =0;
while($row = mysqli_fetch_array($result)) {
	$count++;
	$sql1="SELECT `Journey_date`,`Origin_airport`,`Destination_airport`,`Booking_date` FROM `bookings` INNER JOIN `flights` ON bookings.Flight_ID=flights.Flight_ID WHERE bookings.Customer_ID='".$custid."' AND bookings.Confirm_code='".$row['Confirm_code']."' ORDER BY Booking_date;";
	$result1 = mysqli_query($con,$sql1);
	$row1=mysqli_fetch_array($result1);
	echo "<form class=\"form-inline\" role=\"form\" onClick=\"return false\">
  <div class=\"form-group\"><h3><b>Booking Reference : ".$row['Confirm_code']."</b></h3>
	<h4><b>Journey Date :</b> ".$row1['Journey_date']." <b> Booked on :</b> ".$row1['Booking_date']." </h4>
	<h4><b>From :</b> ".$row1['Origin_airport']." <b>To :</b> ".$row1['Destination_airport']." </h4>
	
   
  <button type=\"submit\" class=\"btn btn-success\" onClick='showconfirmation(\"".$row['Confirm_code']."\")'>View Order</button></div>
</form>";
	
}
if($count===0){
	echo "<p>You do not have any booking yet!</p>";
}

mysqli_close($con);
?>