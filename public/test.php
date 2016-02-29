<?php
	//echo hash('sha256', "admin123");
	
	$con=mysqli_connect("localhost","root","metagloss","test");

if (mysqli_connect_errno($con))
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
  else{
	  echo "connection done\n";
  }
  $res = mysqli_query($con,"SELECT phno FROM phnos");
  
  while($row = mysqli_fetch_array($res))
  {
  $num = $row['phno'];
  //echo $row['phno'];
  //echo "\t";
  $val = hash('sha256', $num );
  //echo $val;
  //echo "\n";
  mysqli_query($con,"UPDATE phnos SET hashvalue='$val'
WHERE phno=$num");
  }
  
  /*while($val!=NULL)
  {
  	$val = hash('sha256', $num );
   	mysqli_query($con,"INSERT INTO Sheet1 (hashvalue) VALUES ($val)");
  }*/
  
	mysqli_close($con);
?>