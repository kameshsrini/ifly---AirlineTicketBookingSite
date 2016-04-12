<?php

$firstname = $_GET['firstname'];
$lastname = $_GET['lastname'];
$middleintial = $_GET['middleintial'];
$addr1 = $_GET['addr1'];
$addr2 = $_GET['addr2'];
$city = $_GET['city'];
$state = $_GET['state'];
$zipcode = $_GET['zipcode'];
$pno = $_GET['pno'];
$username = $_GET['username'];
$password = $_GET['password'];
$email = $_GET['email'];


$con = mysqli_connect('localhost','root','','airlineticketing');
if (!$con) {
die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");

$sql="INSERT INTO `login`(`Login_ID`, `password`) VALUES ('".$username."','".$password."');";
$sql2="INSERT INTO `customers`(`First_name`, `Middle_name`, `Last_name`, `Gender`, `DateOfBirth`, `Login_ID`) VALUES ('".$firstname."','".$middleintial."','".$lastname."','gender','9999-9-9','".$username."');";
$sql3="INSERT INTO `contacts`(`Address_line1`, `Address_line2`, `State`, `City`, `Zip`, `Email`, `Phone`) VALUES ('".$addr1."','".$addr2."','".$state."','".$city."','".$zipcode."','".$email."','".$pno."');";


$result = mysqli_query($con,$sql);
$result2 = mysqli_query($con,$sql2);
$result3 = mysqli_query($con,$sql3);
//fetch currently inserted customer's id to log him in.
$sql4="SELECT Customer_ID FROM login WHERE Login_ID = '".$username."' AND password='".$password."'";
$result4 = mysqli_query($con,$sql4);
$row4 = mysqli_fetch_array($result4);
echo $row4['Customer_ID'];

mysqli_close($con);
?>