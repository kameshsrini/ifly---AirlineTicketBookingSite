<?php

$con = mysqli_connect('localhost','root','','airlineticketing');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");
$sql="SELECT DISTINCT Origin_airport FROM flights";
$result = mysqli_query($con,$sql);

while($row = mysqli_fetch_array($result)) {
echo "<p><option value='".$row['Origin_airport']."'/></p>";
}
mysqli_close($con);
?>