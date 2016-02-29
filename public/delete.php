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
	$val = $_GET['val'];
	$query = "delete from hostel where h_name = '$val'";
	if(mysql_query($query)){
		echo 'Success';
		$query = "drop table $val";
		mysql_query($query);
		return;
	}
	else
		echo "Data cannot be deleted";
?>