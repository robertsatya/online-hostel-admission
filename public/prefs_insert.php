<?php
if(!ISSET($_COOKIE['user']))
{
	Echo "Invalid user !!";
}
else
{
	if($con = mysqli_connect("localhost","root","php","dbms"))
	{
		$pref1 = $_POST['p1w']*1000 + $_POST['p1f']*100 + $_POST['p1g']*10 + $_POST['p1r'];
		$pref2 = $_POST['p2w']*1000 + $_POST['p2f']*100 + $_POST['p2g']*10 + $_POST['p2r'];
		$pref3 = $_POST['p3w']*1000 + $_POST['p3f']*100 + $_POST['p3g']*10 + $_POST['p3r'];
		$pref4 = $_POST['p4w']*1000 + $_POST['p4f']*100 + $_POST['p4g']*10 + $_POST['p4r'];
		$pref5 = $_POST['p5w']*1000 + $_POST['p5f']*100 + $_POST['p5g']*10 + $_POST['p5r'];
		$pref6 = $_POST['p6w']*1000 + $_POST['p6f']*100 + $_POST['p6g']*10 + $_POST['p6r'];
		$pref7 = $_POST['p7w']*1000 + $_POST['p7f']*100 + $_POST['p7g']*10 + $_POST['p7r'];
		$pref8 = $_POST['p8w']*1000 + $_POST['p8f']*100 + $_POST['p8g']*10 + $_POST['p8r'];
		$uid = $_COOKIE['user'];
		$sql = "insert into prefs values('$uid', '$pref1', '$pref2', '$pref3', '$pref4', '$pref5', '$pref6', '$pref7', '$pref8')";
		if($res = mysqli_query($con,$sql))
		{
			echo "Inserted";
		}
		else
			echo "Your preferences have been saved already.";
		
	}
	else
		echo "Fail";
}
?>