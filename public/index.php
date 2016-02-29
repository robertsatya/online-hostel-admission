<?php
	include 'base.php';
	session_start();
	$_SESSION['si']=session_id();
?>
<head>
	<link rel="stylesheet" href="css/index.css" />
</head>

<body>
<div id="loginbox">
	<form class="form" method="post" action="login_valid.php">
    	<div>
        <center>
        	<label class="uname" for="userid"></label>
        	<input name="userid" type="text" id="userid" placeholder="Username" maxlength="8" autocomplete="off" /><br />
            <label class="pwd" for="passwd"></label>
        	<input name="passwd" type="password" id="passwd" placeholder="Password" maxlength="18" /><br />
            <input name="subbut" type="submit" id="login_submit" value="Login" />
        </center>
        </div>
    </form>
</div>
</body>