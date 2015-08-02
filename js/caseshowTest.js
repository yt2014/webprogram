
var caseClicked = 0;

var caseTextArray = new Array("case1.txt","case2.txt","case3.txt","case4.txt");
var rectArray = new Array("rect_shortImg1","rect_shortImg2","rect_shortImg3","rect_shortImg4");

function findIndexClicked(idToFind)
{
   var i=0;
   for(i=0;i<4;i++)
   {
      if(idToFind==rectArray[i])
	      break;
   }

   if(i==4)
   {
      return -1;
   }
   else
   {
      return i;
   }
}



$(document).ready(function(){
	
//	alert("ready height is "+$(document).innerHeight());
//	$("#div_top").height(80);
	$("body").width($(document).innerWidth());
//        $("#div_body").height(400);
	$("#div_body").height(550);
//	$("#div_buttom").height($(document).innerHeight()*0.1);
//alert("doc ready");

        var width_picturesShow = $("#picturesShow").width();
       // alert("picshow width: "+width_picturesShow);       
        $("#pic_links").css("margin-left",(width_picturesShow-576)/2);

        $("#pic_links").css("margin-right",(width_picturesShow-576)/2);

	$("#one_display").css("margin-left",(width_picturesShow-800)/2);

	$("#one_display").css("margin-right",(width_picturesShow-800)/2);

	$(".svg_shortImg text").css("visibility","hidden");

        $("#text_total").empty();

	$(".link_imgs").click(
        function (event) {
		     // alert(" func exit img click " + event.target);
		      event.preventDefault();
		      event.stopPropagation();
		     // alert(event.target);
		     
		       var id_clicked = $(event.target).attr("id");
		       //alert(id_clicked);
                       
		       var indexFound = findIndexClicked(id_clicked);
                      
		      // alert(indexFound);
		       
		     if(caseClicked==0)
	             {
	              caseClicked = event.target;
		      //$(caseClicked).css("fill-opacity","0.1");
		     }
	             else if(caseClicked!=event.target)
	             {
                          $(caseClicked).css("fill-opacity","0.5");
                          $(caseClicked).siblings("text").css("visibility","hidden");
			  caseClicked = event.target;
		          

	             }
		     $(caseClicked).css("fill-opacity","0.1");
                     $(caseClicked).siblings("text").css("visibility","visible");

	             $("#text_total").load(caseTextArray[indexFound]);	 		
                    //  alert(caseClicked);

	            }
		             );


	$(".svg_shortImg").mouseover(
        function (event) {
		     // alert(event.target);
	              $(event.target).siblings("text").css("visibility","visible");
                     // alert(caseClicked);

	            }
		             );

	$(".svg_shortImg").mouseout(
        function (event) {
		     
		     //alert(event.target);
		     //alert(caseClicked);
		     if(event.target!=caseClicked)
	             {
	                 $(event.target).siblings("text").css("visibility","hidden");
		     }
                     // alert(caseClicked);


	            }
		             );


	
      
});



