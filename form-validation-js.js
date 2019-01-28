function functionAddAttribute()
{
    var nodelist = document.getElementsByClassName("validaton").length; 
    for(var i=0;i<nodelist;i++)
    {
    document.getElementsByClassName("validaton")[i].setAttribute('oninput', 'validNo(this)');	
    } 
}

function validNo(a)
{
	var x=a.value;    
  if(isNaN(x)||(x.charAt(0)=="0"))
  {
        alert("Please do not include '0' and '+91' while entering your mobile number. Enter only 10 digit  mobile number.");
        a.value="";       
  } 
	while((a.value.length == 11))
  {
   		alert("The phone number is the wrong length. \nPlease enter 10 digit mobile no.");
   		a.value = "";
  		a.focus();
   }
}

window.onload = function() {
  functionAddAttribute();
};