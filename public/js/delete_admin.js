var del_elem = "\
<div class='box' id='del_box'>\
</div>\
";

$(document).ready(function(){
	$('#delete').click(function(){
		$('#content').html(del_elem);
		$('#left_modify').css({'visibility': 'hidden'});
		find_table_names();
	});
});

function find_table_names(){
	var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
	}
	else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			if(xmlhttp.responseText == 'Server Error'){
				$().toastmessage('showErrorToast', 'Connection to server failed ! Try Later');
				setTimeout(redirect, 1000);
			}
			else if(xmlhttp.responseText == ''){
				$().toastmessage('showWarningToast', 'No records found. Please insert some hostels first.');
				setTimeout(redirect, 1000);
			}
			else{
				var output = xmlhttp.responseText;
				var table_names = output.split(';');
				var data = "<table border='0' width='100%'>";
				for(var i=0;i<table_names.length;i+=2){
					if(table_names[i].length>0){
						data = data.concat('<tr><td><center>');
						var str = table_names[i+1];
						data = data.concat("<input type='checkbox' name='to_be_deleted' value='");
						data = data + str + "'>";
						data = data.concat('</center></td><td><center>');
						data = data.concat(table_names[i]);
						data = data.concat('</center></td><td><center>');
						data = data.concat(table_names[i+1]);
						data = data.concat('</center></td></tr>');
					}
				}
				data = data.concat('</table>');
				data = data.concat('<input onClick="del_func()" type="button" value="Delete" class="Clickable" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="Cancel"  class="Clickable" onClick="cancel_func();"/>');
//				alert(data);
				document.getElementById('del_box').innerHTML = data;
			}
		}
	}
	xmlhttp.open("GET","find_table_name.php",true);
	xmlhttp.send();
}

function cancel_func(){
	var chk_arr = document.getElementsByName('to_be_deleted');
	var chk_len = chk_arr.length;
	for(var i=0;i<chk_len;i++)
		chk_arr[i].checked = false;
}

function del_func(){
	var cnt = 0;
	var chk_arr = document.getElementsByName('to_be_deleted');
	var chk_len = chk_arr.length;
	for(var i=0;i<chk_len;i++)
		if(chk_arr[i].checked == true)
			cnt++;
	var str = "Do you want to delete " + cnt + " records";
	var confirm_ret = confirm(str);
	if(confirm_ret){
		for(var i=0;i<chk_len;i++)
			if(chk_arr[i].checked == true)
				delete_the_table(chk_arr[i].value);
		find_table_names();
	}
	else
		cancel_func();
}

function delete_the_table(str){
	var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
	}
	else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			if(xmlhttp.responseText == 'Server Error'){
				$().toastmessage('showErrorToast', 'Connection to server failed ! Try Later');
				setTimeout(redirect, 5000);
			}
			else if(xmlhttp.responseText == 'Data cannot be deleted'){
				$().toastmessage('showErrorToast', 'Cannot update data. Please try later');
				setTimeout(redirect, 5000);
			}
			else if(xmlhttp.responseText == 'Success'){
				var string = 'Hostel "' + str + '" deleted successfully';
				$().toastmessage('showSuccessToast', string);
			}
		}
	}
	xmlhttp.open("GET","delete.php?val="+str,true);
	xmlhttp.send();
}