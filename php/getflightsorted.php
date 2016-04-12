<?php

$not = intval($_GET['tickets']);
$from = $_GET['from'];
$to = $_GET['to'];
$date = $_GET['date'];
$class = $_GET['class'];
$sortparam = $_GET['sortparam'];
if($sortparam == "price"){
	$sortingparam = "Price_".$class;
}
else{
	$sortingparam = "Duration_mins";
}
$con = mysqli_connect('localhost','root','','airlineticketing');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");



$sql="SELECT flights.Flight_ID,flights.Flight_no,Origin_airport,Destination_airport,Departure_time,Carrier_name,Arrival_time,Duration_mins,Aircraft_type,Price_".$class.",Booked_".$class.",Capacity_".$class." FROM flights INNER JOIN aircrafts ON flights.aircraft_ID=aircrafts.aircraft_ID INNER JOIN capacity ON flights.Flight_ID=capacity.Flight_ID INNER JOIN price ON flights.Price_ID=price.Price_ID INNER JOIN carriers ON flights.Carrier_ID=carriers.Carrier_ID WHERE flights.Origin_airport='".$from."' AND flights.Destination_airport='".$to."' AND capacity.Flight_date='".$date."' ORDER BY ".$sortingparam.";";
$result = mysqli_query($con,$sql);
if($result->num_rows===0){}
$displayedflights= 0;
while($row = mysqli_fetch_array($result)) {
	$totalafterbooking = $not + intval($row['Booked_'.$class]);
	$aircraftcapacity = intval($row['Capacity_'.$class]);
	$price = intval($row['Price_'.$class]);
	$dur_hrs=intval($row['Duration_mins']/60);
	$dur_mins=$row['Duration_mins']%60;
	$dur_hrsmins=$dur_hrs."h ".$dur_mins."mins ";
	if($totalafterbooking<$aircraftcapacity && $price<999999999){
	$displayedflights++;
	echo "<ul data-role='listview' class="."list-group-item "." data-theme='b' data-inset='true' id='resultsList'>"."<div class="."pull-right".">&nbsp;<span class="."badge"."><font size='3'>Cost per Ticket :$".$row['Price_'.$class]."</font></span> </br></br>"."<button type='submit' class='btn btn-success' onClick ='flightselect(".$row['Flight_ID'].",".$not.",\"".$class."\",\"".$date."\")'>Select</button>"."</div>".
   " <h4 class="."list-group-item-heading".">Flying From ".$row['Origin_airport']." to ".$row['Destination_airport']."</h4>".
   " <h5 class="."list-group-item-text".">".$row['Carrier_name']." &nbsp;&nbsp; Aircraft: ".$row['Aircraft_type']." </h5> <h5 class="."list-group-item-text".">Departure: ".$row['Departure_time']." &nbsp;&nbsp;Arrival: ".$row['Arrival_time']." &nbsp;&nbsp;Duration: ".$dur_hrsmins." </h5> ".
 " </ul></br>";
	}
	if($displayedflights===0){
		echo "<div class=\"well\"><ul><h4 class="."list-group-item-heading"."><p>Sorry :( We were not able to find any flights that match your criteria.</h4></p></ul></div>";
	}
}

mysqli_close($con);
?>