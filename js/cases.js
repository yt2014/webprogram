



function scrolltop()
{
   document.body.scrollTop = 95;
}

$(document).ready(function(){
	
//	alert("ready height is "+$(document).innerHeight());

	$("body").width($(document).innerWidth());
//        $("#div_body").height(400);
	$("#div_body").height(900);
//	$("#div_buttom").height($(document).innerHeight()*0.1);
//
        $("#left_column").width(($(document).innerWidth()-1000)/2);
        $("#body_right").width(($(document).innerWidth()-1000)/2);
        $("#picturesShow").width(1000);	
//alert("doc ready");
/*        $("rect").css("fill-opacity","0.1");

	
	$(".pic_link svg rect").mouseover(
        function (event) {
		    //  alert(event.target);
	             // $(event.target).siblings("text").css("fill","white");
                     // alert(caseClicked);
		    $(event.target).css("fill-opacity","0.5");

	            }
		             );

	$(".pic_link svg rect").mouseout(
        function (event) {
		    //  alert(event.target);
	             // $(event.target).siblings("text").css("fill","white");
                     // alert(caseClicked);
		    $(event.target).css("fill-opacity","0.1");

	            }
		             );

  */  

     //  var css_long =   $("#long_div").css(); 
         
	$("#long_div").empty();

        $("#long_div").addClass("css_long_div");

	var widLongDiv = 94*3;
	$("#long_div").width(widLongDiv);
//	alert($("#long_div").width());

       var strPathImg = "fandong/tangxiZuopin/ZhongjiangShoulouBu/0"; 
       var i=0;
       for(i=0;i<3;i++)
       {

	var divToAdd = $("<div></div>");
	divToAdd.addClass("short_img");
	var aToAdd = $("<a></a>");
	aToAdd.addClass("aAdd");
	aToAdd.attr({"href":"#","class":"link_imgs"});///////
	var imgToAdd = $("<img/>");
	imgToAdd.addClass("imgAdd");
	var imgSrc = strPathImg + (i+1).toString() + ".jpg";//////
	imgToAdd.attr("src",imgSrc);
	var pToAdd = $("<p></p>");
	var strP = (i+1).toString()+"/3";
	pToAdd.addClass("pAdd");
        pToAdd.append(strP);
       // alert(pToAdd);

        aToAdd.append(imgToAdd,pToAdd);
        divToAdd.append(aToAdd);
        $("#long_div").append(divToAdd);
       }

	$("#left_button").click(
		function(event)
		{
		  event.preventDefault();
		  event.stopPropagation();
		  //  alert("scrollleft");
		    $("#short_imgs").scrollLeft(-94); 
		}
		);

	$("#right_button").click(
		function(event)
		{
		   event.preventDefault();
		   event.stopPropagation();
		   // alert("scrollRight");
		    $("#short_imgs").scrollLeft(94); 
		}
		);

       $(".link_imgs").click(
	       function(event)
	       {
                  // alert(event.target);
		 event.preventDefault();
		   event.stopPropagation();
                // alert(document.body.scrollTop);
		// var pos = document.body.scrollTop;
		   var tar_clicked = event.target;
                  // alert($(tar_clicked).attr("src"));
		   var imgBack = "url('"+$(tar_clicked).attr("src")+"') top center no-repeat";
		 //  alert(imgBack);

                $("#picture_area").css("background",imgBack); 
		  // alert(tar_clicked)

		//document.scrollTop = 120; 
               // window.scrollTo(0,120);
	    //   t=setTimeout("scrolltop()",50);
               
	       }
	       );

      

});
