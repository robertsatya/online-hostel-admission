var add="\
<div class='box'>\
<form method='post'><center>\
<table border='0'>\
<tr><td><label for='hno' class='hno'>Hostel Number</label></td><td><input autocomplete='off' onBlur='check_valid(\"hno\")' type='text' placeholder='Number' name='hno' id='hno'/></td></td></tr>\
\
<tr><td><label for='hname' class='hname'>Hostel Name</label></td><td><input autocomplete='off' onBlur='check_valid(\"hname\")' type='text' placeholder='Name' name='hname' id='hname' /></td></tr>\
\
<tr><td><label class='htype'>type</label></td><td><input class='htype' type='radio' name='type' value='boys' >Boys</input><input class='htype' type='radio' name='type' value='girls' >Girls</input><input class='htype' type='radio' name='type' value='both' checked >Both</input></td></tr>\
\
<tr><td><label for='hcap' class='hcap'>Student Capacity</label></td><td><input autocomplete='off' onBlur='check_int(\"hcap\")' type='text' placeholder='Capacity' name='hcap' id='hcap' /></td></tr>\
\
<tr><td><label class='hmess'>Mess Type</label></td><td><input class='hmess' type='radio' name='mess' value='v' checked >Veg</input><input class='hmess' type='radio' name='mess' value='n' >Non-veg</input><input class='hmess' type='radio' name='mess' value='h' >Hybrid</input></td></tr>\
\
<tr><td><label for='hyear' class='hyear'>year of Construction</label></td><td><input onBlur='check_year()' autocomplete='off' type='month'  name='hyear' id='hyear' placeholder='YYYY'/></td></tr>\
\
<tr><td><label for='hfloor' class='hfloor'>No of Floors</label></td><td><input autocomplete='off' onBlur='check_int(\"hfloor\")' type='text' placeholder='No of Floors' name='hfloor' id='hfloor' /></td></tr>\
\
<tr><td><label for='hwing' class='hwing'>No of Wings</label></td><td><input autocomplete='off' onBlur='check_int(\"hwing\")' type='text' placeholder='No of Wings' name='hwing' id='hwing' /></td></tr>\
\
<tr><td colspan='2'><textarea name='desc' rows='5' cols='50' placeholder='Description' name='desc' id='desc' ></textarea></td></tr>\
<tr align='center'><td colspan='2'><input type='submit'  name='addsub' id='addsub' onClick='return validate();'/></td></tr>\
</table>\
</center></form>\
</div>\
\
"

var hno_error = false, hname_error = false;

$(document).ready(function() {
    $("#add").click(function(){
		$('#content').html(add);	
		$('#left_modify').css({'visibility': 'hidden'});
	});
});

$().toastmessage({
    stayTime: 5000
});

function validate(){
	var final = true, data = $('#hno').val(), clsname=$('#hno').attr('class');
	
	//		integer fields
	if(data == '' || isNaN(data)){
		$('#hno').addClass('error');
		final = false;
	}
	if(data != '' && !isNaN(data) && !hno_error){
		$('#hno').removeClass('error');
	}
	data = $('#hcap').val();
	if(data == '' || isNaN(data)){
		$('#hcap').addClass('error');
		final = false;
	}
	if(data != '' && !isNaN(data)){
		$('#hcap').removeClass('error');
	}
	data = $('#hfloor').val();
	if(data == '' || isNaN(data)){
		$('#hfloor').addClass('error');
		final = false;
	}
	if(data != '' && !isNaN(data)){
		$('#hfloor').removeClass('error');
	}
	data = $('#hwing').val();
	if(data == '' || isNaN(data)){
		$('#hwing').addClass('error');
		final = false;
	}
	if(data != '' && !isNaN(data)){
		$('#hwing').removeClass('error');
	}
	
	//		string fields
	
	data = $('#hname').val();
	if(data == '' || !isNaN(data)){
		$('#hname').addClass('error');
		final = false;
	}
	if(data != '' && isNaN(data) && !hname_error){
		$('#hname').removeClass('error');
	}
	
	//		date fields
	
	data = $('#hyear').val();
	if(data == ''){
		$('#hyear').addClass('error');
		final = false;
	}
	else
		$('#hyear').removeClass('error');
	if(final){
		func_ajax_hno('#hno', $('#hno').attr('class'), $('#hno').val());
		func_ajax_hname('#hname', $('#hname').attr('class'), $('#hname').val());
		
		if(!hname_error && !hno_error)
			insertion_func();
	}
	return false;
}

function insertion_func(){
	var xmlhttp;
	var type = $("input[type='radio'].htype:checked").val();
	var mess = $("input[type='radio'].hmess:checked").val();
	var str = 'hno=' + $('#hno').val() +
				'&hname=' + $('#hname').val() +
				'&htype=' + type +
				'&hcap=' + $('#hcap').val() +
				'&hmess=' + mess +
				'&hyear=' + $('#hyear').val() +
				'&hfloor=' + $('#hfloor').val() +
				'&hwing=' + $('#hwing').val() +
				'&desc=' + $('#desc').val();
				
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
			}
			else if(xmlhttp.responseText == 'Success'){
				$().toastmessage('showSuccessToast', 'New hostel added successfully.');
				set_to_default();
			}
		}
	}
	xmlhttp.open("GET","insert.php?"+str,true);
	xmlhttp.send();
}

function set_to_default(){
	$('#hno').val('');
	$('#hname').val('');
	$('#hcap').val('');
	$('#hyear').val('');
	$('#desc').val('');
	$('#hfloor').val('');
	$('#hwing').val('');
	$("input[name='htype'][value='both']").attr('checked', 'checked');
	$("input[name='hmess'][value='v']").attr('checked', 'checked');
	hno_error = hname_error = false;
}

function check_int(myid){
	var id = '#' + myid;
	var clsname = $(id).attr('class');
	var value = $(id).val();

	if(clsname == 'error'){
		if( value != '' && !isNaN(value) )
			$(id).removeClass('error');
	}
	else{
		if(value == '' || isNaN(value))
			$(id).addClass('error');
	}
}

function check_year(){
	if($('#hyear').val() == ''){
		if(!($('#hyear').attr('class') == 'error'))
			$('#hyear').addClass('error');
	}
	else{
		if($('#hyear').attr('class') == 'error')
			$('#hyear').removeClass('error');
	}
}

function func_ajax_hno(id, clsname, value){
	if(clsname == 'error'){
		if(value != '' && !isNaN(value)){
			$(id).removeClass('error');
			var xmlhttp;
			if(window.XMLHttpRequest){
				xmlhttp=new XMLHttpRequest();
			}
			else{
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange=function(){
				if (xmlhttp.readyState==4 && xmlhttp.status==200){
					$('#desc').val(xmlhttp.responseText);
					if(xmlhttp.responseText == 'Server Error'){
						//alert('Connection to the server could not be established.\nTry some time later');
						$().toastmessage('showErrorToast', 'Connection to server failed ! Try Later');
						setTimeout(redirect, 5000);
					}
					else if(xmlhttp.responseText == 'Error'){
						//document.getElementById('hno_hint').innerHTML = 'This value already exists in the database';
						$().toastmessage('showWarningToast', 'Hostel number already exists in database');
						hno_error = true;
						$(id).addClass('error');
					}
					else{
						//document.getElementById('hno_hint').innerHTML = '';
						hno_error = false;
					}
				}
			}
			xmlhttp.open("GET","hostel_add.php?id=hno&val="+value,true);
			xmlhttp.send();
		}
		else{
			//document.getElementById('hno_hint').innerHTML = '';
			hno_error = true;
		}
	}
	else{
		if(value != '' && !isNaN(value)){
			var xmlhttp;
			if(window.XMLHttpRequest){
				xmlhttp=new XMLHttpRequest();
			}
			else{
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange=function(){
				if (xmlhttp.readyState==4 && xmlhttp.status==200){
					$('#desc').val(xmlhttp.responseText);
					if(xmlhttp.responseText == 'Server Error'){
						//alert('Connection to the server could not be established.\nTry some time later');
						$().toastmessage('showErrorToast', 'Connection to server failed ! Try Later');
						setTimeout(redirect, 5000);
					}
					else if(xmlhttp.responseText == 'Error'){
						//document.getElementById('hno_hint').innerHTML = 'This value already exists in the database';
						$().toastmessage('showWarningToast', 'Hostel number already exists in database');
						$(id).addClass('error');
						hno_error = true;
					}
					else{
						//document.getElementById('hno_hint').innerHTML = '';
						hno_error = false;
					}
				}
			}
			xmlhttp.open("GET","hostel_add.php?id=hno&val="+value,true);
			xmlhttp.send();
		}
		else{
			$(id).addClass('error');
			hno_error = true;
		}
	}
}

function func_ajax_hname(id, clsname, value){
	if(clsname == 'error'){
		if(value != '' && isNaN(value)){
			$(id).removeClass('error');
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
						//alert('Connection to the server could not be established.\nTry some time later');
						$().toastmessage('showErrorToast', 'Connection to server failed ! Try Later');
						setTimeout(redirect, 5000);
					}
					else if(xmlhttp.responseText == 'Error'){
						//document.getElementById('hname_hint').innerHTML = 'This value already exists in the database';
						$().toastmessage('showWarningToast', 'Hostel name already exists in database');
						hname_error = true;
						$(id).addClass('error');
					}
					else{
						//document.getElementById('hname_hint').innerHTML = '';
						hname_error = false;
					}
				}
			}
			xmlhttp.open("GET","hostel_add.php?id=hname&val="+value,true);
			xmlhttp.send();
		}
		else{
			//document.getElementById('hname_hint').innerHTML = '';
			hname_error = true;
		}
	}
	else{
		if(value != '' && isNaN(value)){
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
						//alert('Connection to the server could not be established.\nTry some time later');
						$().toastmessage('showErrorToast', 'Connection to server failed ! Try Later');
						setTimeout(redirect, 5000);
					}
					else if(xmlhttp.responseText == 'Error'){
						//document.getElementById('hname_hint').innerHTML = 'This value already exists in the database';
						$().toastmessage('showWarningToast', 'Hostel name already exists in database');
						hname_error = true;
						$(id).addClass('error');
					}
					else{
						//document.getElementById('hname_hint').innerHTML = '';
						hname_error = false;
					}
				}
			}
			xmlhttp.open("GET","hostel_add.php?id=hname&val="+value,true);
			xmlhttp.send();
		}
		else{
			$(id).addClass('error');
			hname_error = true;
		}
	}
}

function check_valid(myid){
	var id = '#' + myid;
	var clsname = $(id).attr('class');
	var value = $(id).val();
	if(myid == 'hno'){
		func_ajax_hno(id, clsname, value);
	}
	else if(myid == 'hname'){
		func_ajax_hname(id, clsname, value);
	}
}

function redirect(){
	window.location = './admin_panel.php';
}

var after_div="\
<div id='outer'>\
</div>\
";

function get_hostel_entry(){
	setTimeout(function(){$('body').fadeIn('0.5s')
	.html(after_div)
	.animate({bottom:'auto'},{duration:600, easing:'easeIn'});},600);
}
