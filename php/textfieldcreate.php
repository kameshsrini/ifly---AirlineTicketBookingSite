<?php


$not= intval($_GET['not']);
for($i=0;$i<$not;$i++){
	//create text fields
	echo "<label for=\"exampleInputPassword1\">Passenger ".($i+1)." </label></br>
<label for=\"exampleInputPassword1\">Name</label>
<div class=\"row\">
<div class=\"col-lg-6\">
<input type=\"text\" class=\"form-control\" id=\"name".$i."\" placeholder=\"Name\">
</div>
</div></br>
<label for=\"exampleInputPassword1\">Date of Birth</label>
<div class=\"row\">
<div class=\"col-lg-3\">
<input type=\"date\" class=\"form-control\" id=\"dob".$i."\" placeholder=\"Date of Birth\">
</div>
</div><hr>";
}
//after injecting text fields, inject "Book" button
echo "<button type='submit' class='btn btn-success' onClick='booktickets(".$not.")'>&nbsp;&nbsp;&nbsp;&nbsp;Book&nbsp;&nbsp;&nbsp;&nbsp;</button></br>";
?>