function startTime()
{
    setTimeout('Display_1_Crew()',600);
    setTimeout('Display_1_Crew()',800);
    setTimeout('Display_2_Crew()',1000);
    setTimeout('Display_2_Crew()',1200); 
    setTimeout('Display_Clear()',1500);
    setTimeout('Display_2nd_line()',2000);
    setTimeout('Display_3rd_line()',2500);
}


function Display_1_Crew()
{
   var child_p1 = document.getElementById('p1');
  // child_p1.style.textShadow = "0px 0px 6px red";
//   child_p1.style.color = "transparent";
   // child_p1.style.color = "white";
   child_p1.className = "p1_1";
}

function Display_2_Crew()
{
   var child_p1 = document.getElementById('p1');
 //  child_p1.style.textShadow = "0px 0px 3px red";
 //  child_p1.style.color = "transparent";
 //    child_p1.style.color = "blue";
     child_p1.className = "p1_2";
}
function Display_Clear()
{
   var child_p1 = document.getElementById('p1');
 //  child_p1.style.textShadow = "0px 0px 0px red";
//    child_p1.style.color = "red"; 
    child_p1.className = "p1_3";
}
function Display_11_Crew()
{
   var child_p1 = document.getElementById('p1');
 //  child_p1.style.textShadow = "0px 0px 0px red";
//    child_p1.style.color = "red"; 
    child_p1.className = "p1_4"; 
}



function Display_2nd_line()
{

}
function Display_2rd_line() 
{

}

