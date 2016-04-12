<?php
$confcode= $_GET['confcode'];
$custid= $_GET['custid'];
$con = mysqli_connect('localhost','root','','airlineticketing');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");
$sql1="SELECT `Booking_ID`, `Confirm_code`, `Flight_ID`, `Class`, `Customer_ID`, `Passenger_name`, `Passenger_dob`, `Journey_date`, `Booking_date` FROM `bookings` WHERE `Customer_ID`='".$custid."' AND `Confirm_code`='".$confcode."';";
$result1 = mysqli_query($con,$sql1);
$row1 = mysqli_fetch_array($result1);
$not = $result1->num_rows;
$flightid= $row1['Flight_ID'];
$class= $row1['Class'];
$date= $row1['Journey_date'];

$sql="SELECT flights.Flight_ID,flights.Flight_no,Origin_airport,Destination_airport,Departure_time,Carrier_name,Arrival_time,Duration_mins,Aircraft_type,Flight_date,Price_".$class.",Booked_".$class.",Capacity_".$class." FROM flights INNER JOIN aircrafts ON flights.aircraft_ID=aircrafts.aircraft_ID INNER JOIN capacity ON flights.Flight_ID=capacity.Flight_ID INNER JOIN price ON flights.Price_ID=price.Price_ID INNER JOIN carriers ON flights.Carrier_ID=carriers.Carrier_ID WHERE flights.Flight_ID='".$flightid."' AND capacity.Flight_date='".$date."';";
$result = mysqli_query($con,$sql);
if($result->num_rows===0){}
while($row = mysqli_fetch_array($result)) {
	$dur_hrs=intval($row['Duration_mins']/60);
	$dur_mins=$row['Duration_mins']%60;
	$dur_hrsmins=$dur_hrs."h ".$dur_mins."mins ";
	$total=$not*$row['Price_'.$class];
	echo "<ul data-role='listview' class="."list-group-item "." data-theme='b' data-inset='true' id='resultsList'><h3>Booking Reference : ".$confcode."</h3>"."<div class="."pull-right".">&nbsp; </br></br>"."</div>".
   " <h4 class="."list-group-item-heading"."><b>Flying From </b>".$row['Origin_airport']."<b> &nbsp; To</b> ".$row['Destination_airport']."</h4>".
   " <h5 class="."list-group-item-text".">".$row['Carrier_name']." &nbsp;&nbsp; Aircraft: ".$row['Aircraft_type']." </h5> <h5 class="."list-group-item-text".">Date: ".$date." &nbsp;Departure: ".$row['Departure_time']." &nbsp;&nbsp;Arrival: ".$row['Arrival_time']." &nbsp;&nbsp;Duration: ".$dur_hrsmins." </h5></br><h4><b> Total Amount : $".$total." </b></h4>".
 " </ul></br>";
}

mysqli_close($con);
?>