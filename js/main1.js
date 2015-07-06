function rotatelines
{
     document.getElementById('line1').style.transform="rotate(-58deg)";  
}


$(document).ready(
	 function(){
                     $("#aboutus").fadeIn(500,p2fadein);
		 }
		 );

function p2fadein()
{
          $("#caseshow").fadeIn(500,p3fadein);
}
function p3fadein()
{
          $("#designer").fadeIn(500,servicefadein);
}
function servicefadein()
{
         $("#service").fadeIn(500,hrfadein);       
}

function hrfadein()
{
         $("#hr").fadeIn(500); 
}

