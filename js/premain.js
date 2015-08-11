var numClicked = 0;

var textLineArray = new Array("#pb1","#pb2","#pb3","#pb4","#pb5","#pb6");
//var widthArray = new Array();
var strArray = new Array();
var t;

var count=0;
var strLen;
function timedPrint()
{
//	alert(strArray[0]);
       $(textLineArray[0]).append(strArray[0][count]);
       count=count+1;
       if(count<=strLen)    
          t=setTimeout("timedPrint()",500);
       else
          clearTimeout(t);
}

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

   var widthpb1 = $("#pb1").width();
   
   var  i = 0;
   var widthpb = 0;
   for(i=0;i<6;i++)
   {
     widthpb = $(textLineArray[i]).width();
     Width_toMove = (widthDoc - widthpb)/2;
     $(textLineArray[i]).css("left",Width_toMove);
    // $(textLineArray[i]).css("width","0px");
     strArray[i] =  $(textLineArray[i]).text();
       
   }
   $(textLineArray[0]).empty();
   strArray[0] = strArray[0].replace(/(^\s*)|(\s*$)/g, "");
   //alert(strArray[0] + strArray[0].length);

    strLen = strArray[0].length;
    timedPrint();

    

    

  //  $(textLineArray[0]).empty();
  //  $(textLineArray[0]).append(strArray[0][0]);


  /* $(document).click(
	   function(){
	  // alert("body clicked"+numClicked);
           switch(numClicked)
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
 
}
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


	   });*/

});
