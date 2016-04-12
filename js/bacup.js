function loadData()
{
var resultLength = 4;
var listItems = [];
var lisItems = [];

for(var i=0;i<resultLength;i++){
   var firstname = 'Bob';
   var lastname = ' Listerine - ' + i;

   //Add result to array
   listItems.push("<ul data-role='listview' class="+"list-group-item "+" data-theme='b' data-inset='true' id='resultsList'>"+"<div class="+"pull-right"+">&nbsp;<span class="+"badge"+">Amount</span> </br></br>"+"<button type='submit' class='btn btn-success'>Select</button>"+"</div>"+
   " <h4 class="+"list-group-item-heading"+">Flying From Airport to Flying to Airport</h4>"+
   " <p class="+"list-group-item-text"+">...</p> "+
 " </ul></br>");
 lisItems.push("<button type='submit' class='btn btn-success'>Select</button>");
}
document.getElementById("resultsList").innerHTML=xmlhttp.responseText;
//Append array to list and refresh
$('#resultsList').append(listItems.join(' '));
$('#resultsList').listview('refresh');}