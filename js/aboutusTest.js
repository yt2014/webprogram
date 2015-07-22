
$(document).ready(function(){
	
//	alert("ready height is "+$(document).innerHeight());
//	$("#div_top").height(80);
	$("body").width($(document).innerWidth());
//        $("#div_body").height(400);
	$("#div_body").height($(document).innerHeight()-200);
//	$("#div_buttom").height($(document).innerHeight()*0.1);
//alert("doc ready");

	$.ajax({              url: 'Company.txt',
                              dataType: 'text',
			      //scriptCharset: 'GB2312',
			      contentType: "utf-8", 
                              success: function(data) {
                              //alert(data);
			       var data_display = data.replace(/\n/g,"<br/>");

			      $("#text_area").css("text-wrap","normal");
			      $("#text_area").css("width","90%");
                              $("#text_area").css("text-align","left");
                              $("#text_area").empty();
			      $("#text_area").append(data_display);
                }
	});

      
});
