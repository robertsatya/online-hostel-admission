function validate(){
	var xmlhttp;
	var str = 'userid=' + $('#userid').val() + '&passwd=' + $('#passwd').val();
	alert(str);
	if(window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
	}
	else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			alert(xmlhttp.responseText);
		}
	}
	xmlhttp.open("GET","login_valid.php?"+str,true);
	xmlhttp.send();
}