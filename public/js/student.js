var add="<center><img src='img/layout.png' /></center>";

var choose="<div style='float:left;width:60%;'><img src='img/layout.png' /></div><div style='float:left;width:40%;'><center><form id = 'prefs' name='prefs' method = 'post' action = 'prefs_insert.php'>\
Enter Your preferences here\
<table border=0 id='preftb'>\
<tr><td>Prefno</td><td width='30px;'>Floor</td><td>Wing</td><td>Room Range</td><td>Room</td></tr>\
<tr>\
<td>1</td>\
<td><select name='p1f'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select></td>\
<td><select name='p1w'><option value='1'>A</option><option value='2'>B</option></td>\
<td><select name='p1g'><option value='0'>1-10</option><option value='1'>11-20</option><option value='2'>21-30</option></td>\
<td><select name='p1r'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>0</option></select></td>\
</tr>\
<td>2</td>\
<td><select name='p2f'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select></td>\
<td><select name='p2w'><option value='1'>A</option><option value='2'>B</option></td>\
<td><select name='p2g'><option value='0'>1-10</option><option value='1'>11-20</option><option value='2'>21-30</option></td>\
<td><select name='p2r'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>0</option></select></td>\
</tr>\
<td>3</td>\
<td><select name='p3f'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select></td>\
<td><select name='p3w'><option value='1'>A</option><option value='2'>B</option></td>\
<td><select name='p3g'><option value='0'>1-10</option><option value='1'>11-20</option><option value='2'>21-30</option></td>\
<td><select name='p3r'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>0</option></select></td>\
</tr>\
<td>4</td>\
<td><select name='p4f'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select></td>\
<td><select name='p4w'><option value='1'>A</option><option value='2'>B</option></td>\
<td><select name='p4g'><option value='0'>1-10</option><option value='1'>11-20</option><option value='2'>21-30</option></td>\
<td><select name='p4r'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>0</option></select></td>\
</tr>\
<td>5</td>\
<td><select name='p5f'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select></td>\
<td><select name='p5w'><option value='1'>A</option><option value='2'>B</option></td>\
<td><select name='p5g'><option value='0'>1-10</option><option value='1'>11-20</option><option value='2'>21-30</option></td>\
<td><select name='p5r'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>0</option></select></td>\
</tr>\
<td>6</td>\
<td><select name='p6f'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select></td>\
<td><select name='p6w'><option value='1'>A</option><option value='2'>B</option></td>\
<td><select name='p6g'><option value='0'>1-10</option><option value='1'>11-20</option><option value='2'>21-30</option></td>\
<td><select name='p6r'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>0</option></select></td>\
</tr>\
<td>7</td>\
<td><select name='p7f'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select></td>\
<td><select name='p7w'><option value='1'>A</option><option value='2'>B</option></td>\
<td><select name='p7g'><option value='0'>1-10</option><option value='1'>11-20</option><option value='2'>21-30</option></td>\
<td><select name='p7r'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>0</option></select></td>\
</tr>\
<td>8</td>\
<td><select name='p8f'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select></td>\
<td><select name='p8w'><option value='1'>A</option><option value='2'>B</option></td>\
<td><select name='p8g'><option value='0'>1-10</option><option value='1'>11-20</option><option value='2'>21-30</option></td>\
<td><select name='p8r'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>0</option></select></td>\
</tr>\
<tr><td colspan = '5'><input type='submit' value='Submit' name='submit' id='prefsub' /></td></tr>\
</table>\
</form></center></div>";

var homer="<div id='panel' class='slibox'>happy</div>";


function removecontent(){
        
                        $('#content').fadeOut('0.5s').css({'display':'block','bottom':'0'});
}

function viewcontent(){
        
                        setTimeout(function(){$('#content').fadeIn('0.5s').html(add).animate({bottom:'auto'},{duration:600, easing:'easeIn'});},600);
}

function homecontent(){
        
                        setTimeout(function(){$('#content').fadeIn('0.5s').html(homer).animate({bottom:'auto'},{duration:600, easing:'easeIn'});},600);
}

function choosecontent(){
        
                        setTimeout(function(){$('#content').fadeIn('0.5s').html(choose).animate({bottom:'auto'},{duration:600, easing:'easeIn'});},600);
}

function rescontent(){
        
                        setTimeout(function(){$('#content').fadeIn('0.5s').html(res).animate({bottom:'auto'},{duration:600, easing:'easeIn'});},600);
}

$(document).ready(function() {
    	$("#view").click(function(){
						removecontent();
                        viewcontent();
        });
        
        $("#choose").click(function(){
                        removecontent();
                        choosecontent();
        });
        
        $("#res").click(function(){
                        //removecontent();
                        //rescontent();
        });
        
        $("#home").click(function(){
                        removecontent();
                        homecontent();
        });
        
        
        
});
