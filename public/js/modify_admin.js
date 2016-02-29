var elem = "\
<div id='right_modify' class='box'>\
<form method='post'><center>\
<table border='0'>\
<tr><td>hostel name</td><td><strong><center><span id='hval'></span></center></strong></td></tr>\
<tr></tr>\
<tr><td><label class='htype'>type</label></td><td><input class='htype_mod' type='radio' name='type' value='boys' >Boys</input><input class='htype' type='radio' name='type' value='girls' >Girls</input><input class='htype' type='radio' name='type' value='both' >Both</input></td></tr>\
\
<tr><td><label for='hcap' class='hcap'>Student Capacity</label></td><td><input autocomplete='off' onBlur='check_int(\"hcap\")' type='text' placeholder='Capacity' name='hcap' id='hcap' /></td></tr>\
\
<tr><td><label class='hmess'>Mess Type</label></td><td><input class='hmess' type='radio' name='mess' value='v' >Veg</input><input class='hmess' type='radio' name='mess' value='n' >Non-veg</input><input class='hmess' type='radio' name='mess' value='h' >Hybrid</input></td></tr>\
\
<tr><td><label for='hfloor' class='hfloor'>No of Floors</label></td><td><input autocomplete='off' onBlur='check_int(\"hfloor\")' type='text' placeholder='No of Floors' name='hfloor' id='hfloor' /></td></tr>\
\
<tr><td><label for='hwing' class='hwing'>No of Wings</label></td><td><input autocomplete='off' onBlur='check_int(\"hwing\")' type='text' placeholder='No of Wings' name='hwing' id='hwing' /></td></tr>\
\
<tr><td colspan='2'><textarea name='desc' rows='5' cols='50' placeholder='Description' name='desc' id='desc' ></textarea></td></tr>\
<tr align='center'><td colspan='2'><input type='submit'  name='addsub' id='addsub' onClick='return update();'/></td></tr>\
</table>\
</center></form>\
</div>\
";

var table_name = '';

$(document).ready(function() {
    $("#modify").click(function(){
			extract_data();
			$('#content').html(elem);
	});
});



function extract_data(){
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
				var data = "<table border='0' id='table_list'>";
				for(var i=0;i<table_names.length;i++){
					if(table_names[i].length > 0){
						data = data.concat('<tr><td onClick = "change_table(this);">');
						data = data.concat(table_names[i]);
						data = data.concat('</td></tr>');
					}
				}
				data = data.concat('</table>');
				$('#left_modify').css({'visibility': 'visible'}).html(data);
			}
		}
	}
	xmlhttp.open("GET","extract.php",true);
	xmlhttp.send();
}

function change_table(value){
	table_name = value.innerHTML;
	fetch_data(value.innerHTML);
}

function fetch_data(value){
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
			else if(xmlhttp.responseText == 'No records found'){
				$().toastmessage('showWarningToast', 'No records found. Please some hostels first.');
				setTimeout(redirect, 1000);
			}
			else{
				var output = (xmlhttp.responseText);
				var data = output.split(';');
				$('#hcap').val(data[1]);
				$('#hfloor').val(data[5]);
				$('#hwing').val(data[6]);
				$('#desc').val(data[4]);
				document.getElementById('hval').innerHTML = table_name;
			}
		}
	}
	xmlhttp.open("GET","fetch.php?value="+value,true);
	xmlhttp.send();
}

function update(){
	if(table_name == ''){
		$().toastmessage('showWarningToast', 'First select some table to modify.');
		return false;
	}
	var str = '';
	var type = $("input[type='radio'].htype:checked").val();
	var mess = $("input[type='radio'].hmess:checked").val();
	
	if(typeof(type) != 'undefined')
		str += ('type='+type);
	else
		str += ("type=NULL");
		
	if(typeof(mess) != 'undefined')
		str += '&' + ('mess='+mess);
	else
		str += '&' + ("mess=NULL");
		
	str += '&'+(('cap='+$('#hcap').val())
			+'&'+('nof='+$('#hfloor').val())
			+'&'+('now='+$('#hwing').val())
			+'&'+('desc='+$('#desc').val()));

	str += '&'+('tab='+table_name);
	modify_table(str);
	return false;
}

function modify_table(str){
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
			else if(xmlhttp.responseText == 'Data cannot be updated'){
				$().toastmessage('showErrorToast', 'Cannot update data. Please try later');
				setTimeout(redirect, 5000);
			}
			else if(xmlhttp.responseText == 'Success'){
				var string = 'Hostel "' + table_name + '" updated successfully';
				$().toastmessage('showSuccessToast', string);
			}
		}
	}
	xmlhttp.open("GET","modify.php?"+str,true);
	xmlhttp.send();
}

function redirect(){
	window.location = './admin_panel.php';
}