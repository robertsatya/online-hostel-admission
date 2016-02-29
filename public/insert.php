<?php
	//include 'base.php';
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
			mysql_close($con);
			echo "Server Error";
			return;
		}
	}
	$hno = $_GET['hno'];
	$hname = $_GET['hname'];
	$htype = $_GET['htype'];
	$hcap = $_GET['hcap'];
	$hmess = $_GET['hmess'];
	$hwing = $_GET['hwing'];
	$hfloor = $_GET['hfloor'];
	$desc = $_GET['desc'];
	$hyear = $_GET['hyear'];
	
	$sql = "insert into hostel values($hno, '$hname', '$htype', $hcap, '$hmess', '$hyear', '$desc', $hfloor, $hwing)";
	if(mysql_query($sql, $con)){
		$sql = "create table $hname(
				roomno varchar(5) not null primary key,
				room_type varchar(1) not null,
				availibility varchar(1) not null)
				";
		mysql_query($sql, $con);
		echo "Success";
		mysql_close($con);
		return;
	}
	else{
		mysql_close($con);
		echo "Error";
		return;
	}
	mysql_close($con);
?>