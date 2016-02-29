<?php
	//include 'base.php';
	session_start();
	if($_SESSION['si2']!=session_id())
	{
		header('Location: ./');
	}
	$id = $_GET['id'];
	$val = $_GET['val'];
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
	if($id == 'hno'){
		$sql = 'select h_no from hostel';
		$res = mysql_query($sql);
		
		while($row = mysql_fetch_row($res)){
			if($row[0] == $val){
				mysql_close($con);
				echo "Error";
				return;
			}
		}
	}
	else{
		$sql = 'select h_name from hostel';
		$res = mysql_query($sql);
		
		while($row = mysql_fetch_row($res)){
			if($row[0] == $val){
				mysql_close($con);
				echo "Error";
				return;
			}
		}
	}
	echo "";
	mysql_close($con);
?>
