

function photoMouseOver()
{
	alert($(this).css("width"));
}

function photoMouseOut()
{
	//alert(this);
}

$(document).ready(function(){
	
//	alert("ready height is "+$(document).innerHeight());
//	$("#div_top").height(80);
	$("body").width($(document).innerWidth());
//        $("#div_body").height(400);
	$("#div_body").height(1400);
//	$("#div_buttom").height($(document).innerHeight()*0.1);
//alert("doc ready");
        $("rect").css("fill-opacity","0.1");

	$("#designer_blocks").empty();
	
	var div_designer =$("<div></div>");	
    div_designer.attr("id","designer1"); //--   	
	div_designer.addClass("designer_block");
	
	var div_designer_photo = $("<div></div>");	
	//div_designer_photo.attr("class","photo_div");
	div_designer_photo.addClass("photo_div");
	div_designer_photo.bind("mouseover",photoMouseOver);
	div_designer_photo.bind("mouseout",photoMouseOut);
	
	var img_photo = $("<img/>");
	img_photo.attr("src","fandong/fandongZuopin/photo.jpg");
	img_photo.addClass("photo");
	
	var div_filter = $("<div></div>");
	div_filter.addClass("filter_photo");
	
	div_designer_photo.append(img_photo,div_filter);
	div_designer.append(div_designer_photo);
	$("#designer_blocks").append(div_designer);
	
	
	
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

	 $(".designer_block a").mouseover(
		       function(event){
		      // alert(event.target);
                       $(event.target).siblings("div").css("visibility","visible");

		       }
		       );

                $(".designer_block a").mouseout(
		       function(event){
		       //alert(event.target);
		       if($(event.target).attr("class").search("filter")!=-1)
		       {
                          $(event.target).css("visibility","hidden");
		       }
		       else if($(event.target).attr("class").search("ptext")!=-1)
		       {
                           $(event.target).parents(".filter_shortcase").css("visibility","hidden");
		       }

		       }
		       );
			   
	
     
});
