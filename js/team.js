
$(document).ready(function(){
	
//	alert("ready height is "+$(document).innerHeight());
//	$("#div_top").height(80);
	$("body").width($(document).innerWidth());
//        $("#div_body").height(400);
	$("#div_body").height(900);
//	$("#div_buttom").height($(document).innerHeight()*0.1);
//alert("doc ready");
        $("rect").css("fill-opacity","0.1");

	
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
     
});
