<?php
	include 'base.php';
	session_start();
	if($_SESSION['si']!=session_id())
	{
		header('Location: ./');
	}
?>
<head>
	<script src="js/admin.js"></script>
    <script src="js/modify_admin.js"></script>
    <script src="js/delete_admin.js"></script>
    <link rel="stylesheet" href="css/admin.css" />
</head>

<body>
<div id="navbar">
    <div id="controls">
        <ul>
            <li><a href="#" id="home">Home</a></li>
            <li><a href="#" id="add">Add</a></li>
            <li><a href="#" id="modify">Modify</a></li>
            <li><a href="#" id="delete">Delete</a></li>
        </ul>
    </div>
    <div id="profile">
    	<ul>
            <li>Profile</li>
            <li class="log"><a href="logout.php" >Logout</a></li>
        </ul>
    </div>
</div>
<div id="content">
    <div id="panel">
	</div>
</div>
<div id="left_modify" class="box hidden">
</div>

</body>
