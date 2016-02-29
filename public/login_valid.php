<?php
        include 'base.php';
        session_start();
        if(!ISSET($_POST['userid'])||!ISSET($_POST['passwd'])){
                echo "Value Error";
                return;
        }
        
        else
        {
                if($con = mysqli_connect("localhost","root","php","dbms"))
                {
        
                        $uname = $_POST['userid'];
                        $pwd = hash('sha256', $_POST['passwd']);
                        if($res = mysqli_query($con,"SELECT password FROM student WHERE roll_no='$uname'"))
                        {
                        
                                if($row = mysqli_fetch_array($res))
                                {
                                
                                        if($_SESSION['si']!=session_id())
                                        {
                                                echo "Donot try to jump start :P";
                                        }
                                        else
                                        {
                                                if($pwd == $row[0])
                                                {
                                                        $_SESSION['si2']=session_id();
                                                        setcookie("user","",time()-1);
                                                        if($uname=="admin")
                                                        {
                                                                $_SESSION['user']=0;
                                                                setcookie("user","admin");
                                                                header('Location: admin_panel.php');
                                                        }
                                                        else
                                                        {
                                                                $_SESSION['user']=$uname;
                                                                setcookie("user",$uname);
                                                                header('Location: student_panel.php');
                                                        }
                                                }
                                                else
                                                {
                                                        echo "Invalid Credentials";
                                                }
                                        }
                                }
                        }
                        else
                        {
                                echo "Invalid Credentials";
                        }

                }
        }
?>