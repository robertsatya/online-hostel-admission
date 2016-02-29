<?php
	session_start();
	if($_SESSION['si']!=session_id())
	{
		echo "Session Error";
	}
	$con = @mysql_connect('localhost', 'root', 'php');
	if(!$con){
		echo "Server Error";
		return;
	}
	else{
		$sel = @mysql_select_db('dbms', $con);
		if(!$sel){
			echo "Server Error";
			return;
		}
	}
	$cap = $_GET['cap'];
	$floor = $_GET['nof'];
	$wing = $_GET['now'];
	$desc = $_GET['desc'];
	$mess = $_GET['mess'];
	$type = $_GET['type'];
	$name = $_GET['tab'];
	$sql = '';
	if($type == 'NULL' and $mess == 'NULL'){
		$sql = "update hostel set capacity = $cap, no_of_floors = $floor, no_of_wings = $wing, comments = '$desc' where h_name = '$name'";
	}
	else if($type == 'NULL'){
		$sql = "update hostel set mess_type = '$mess', capacity = $cap, no_of_floors = $floor, no_of_wings = $wing, comments = '$desc' where h_name = '$name'";
	}
	else if($mess == 'NULL'){
		$sql = "update hostel set h_type = '$type', capacity = $cap, no_of_floors = $floor, no_of_wings = $wing, comments = '$desc' where h_name = '$name'";
	}
	else{
		$sql = "update hostel set h_type = '$type', mess_type = '$mess', capacity = $cap, no_of_floors = $floor, no_of_wings = $wing, comments = '$desc' where h_name = '$name'";
	}

	if(@mysql_query($sql))
		echo 'Success';
	else
		echo 'Data cannot be updated';
?>