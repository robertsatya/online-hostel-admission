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
	
	$output = '';
	$query = "select h_name from hostel";
	if(($res = mysql_query($query))){
		while(($row = mysql_fetch_row($res))){
			$output .= $row[0];
			$output .= ';';
		}
		echo $output;
	}
?>