var numClicked = 0;


$(document).ready(function(){
  // alert("in function");
   numClicked = 0;

   var widthpa1 = $("#pa1").width();
  // alert("pa1 width: "+widthpa1);

   var widthDoc =  $(document).innerWidth();

   var Width_toMove = (widthDoc - widthpa1)/2;

   $("#pa1").animate(
       {
          left:Width_toMove
       },
       "slow"
       );



   $(document).click(
	   function(){
	  // alert("body clicked"+numClicked);
          /* switch(numClicked)
           {
             case 0:
             {
		  $("#pb1").fadein();
		  alert("num is 0");
                  numClicked = numClicked+1;
	     }
             break;
             case 1:
                 $("#pb2").fadein();
                  numClicked = numClicked+1; 
             break;
	     case 2:
	          $("#pb3").fadein();
                  numClicked = numClicked+1; 
	     break;
	     case 3:
	           $("#pb4").fadein();
                  numClicked = numClicked+1; 
	     break;
	     case 4:
	          $("#pb5").fadein();
                  numClicked = numClicked+1; 
	     break;
	     case 5:
	           $("#pb6").fadein();
                  numClicked = numClicked+1; 
	     break;
             default:
	     break;
 
}*/
   if(numClicked==0)
{
//	alert("clicked number is 0");
    $("#pb1").css("color","#CC0000");
	 $("#pb1").fadeIn();
   // $("#pb1").css("color","gray");
        numClicked = numClicked +1;
}
	else if(numClicked==1)
{
   //	alert("clicked number is 0");
   $("#pb2").css("color","#CC0000");
	 $("#pb2").fadeIn();
    $("#pb1").css("color","#696969");
        numClicked = numClicked +1;
}
else if(numClicked==2)
{
//	alert("clicked number is 0");
   $("#pb3").css("color","#CC0000");
	 $("#pb3").fadeIn();
    $("#pb2").css("color","#696969");
        numClicked = numClicked +1;
}
else if(numClicked==3)
{
//	alert("clicked number is 0");
    $("#pb4").css("color","#CC0000");
	 $("#pb4").fadeIn();
    $("#pb3").css("color","#696969");

        numClicked = numClicked +1;
}
else if(numClicked==4)
{
//	alert("clicked number is 0");
   $("#pb5").css("color","#CC0000");
	 $("#pb5").fadeIn();
    $("#pb4").css("color","#696969");
        numClicked = numClicked +1;
}
else if(numClicked==5)
{
//	alert("clicked number is 0");
   $("#pb6").css("color","#696969");
   $("#pb5").css("color","#696969");
	 $("#pb6").fadeIn();
	 $("#logo").fadeIn();
        numClicked = numClicked +1;
}


	   });

});
