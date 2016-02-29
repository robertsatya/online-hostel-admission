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
	
	$val = $_GET['value'];
	$output = '';
	$query = "select h_type, capacity, mess_type, construction_year, comments, no_of_floors, no_of_wings from hostel where h_name = '$val'";
	if($res = mysql_query($query)){
		$row = mysql_fetch_array($res);
		$output .= $row['h_type'];
		$output .= ';';
		$output .= $row['capacity'];
		$output .= ';';
		$output .= $row['mess_type'];
		$output .= ';';
		$output .= $row['construction_year'];
		$output .= ';';
		$output .= $row['comments'];
		$output .= ';';
		$output .= $row['no_of_floors'];
		$output .= ';';
		$output .= $row['no_of_wings'];
		echo $output;
		return;
	}
	else{
		echo 'No records found';
		return;
	}
?>