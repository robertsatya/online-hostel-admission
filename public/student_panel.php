<?php
        include 'base.php';
        session_start();
        if($_SESSION['si']!=session_id())
        {
                header('Location: ./');
        }
        $uid = $_COOKIE['user'];

?>
<head>
        <script src="js/student.js"></script>
        <link rel="stylesheet" href="css/student.css" />
</head>

<body>
<div id="navbar">
    <div id="controls">
        <ul>
            <li><a href="#" id="home">Home</a></li>
            <li><a href="#" id="view">View Hostels</a></li>
            <li><a href="#" id="choose">Choose Rooms</a></li>
            <li><a href="#" id="res">Result</a></li>
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
        <div id="panel" class="slibox">
    happy
    </div>
    
</div>

</body>