$(document).ready(function(){
	
	//alert("ready height is "+$(document).innerHeight()*0.05);
	$("#div_top").height($(document).innerHeight()*0.1);
	$("#div_body").height($(document).innerHeight()*0.8);
	$("#div_buttom").height($(document).innerHeight()*0.1);
        /*in aboutus page, link clicked events in the left*/

	 $("#Company_Background").click(
		function(e)
		{
		    e.preventDefault();

		    $.ajax({
                              url: 'Company.txt',
                              dataType: 'text',
			      //scriptCharset: 'GB2312',
			      contentType: "utf-8", 
                              success: function(data) {
                              //alert(data);
                              
			     
			      var data_display = data.replace(/\n/g,"<br/>");
			    //
			  //  String data_display = URLDecoder.decode(data,"GB2312");

			  //  alert(data_display);
			    // var txtval=escape(data); 

			      var head_text = $("<h1>¹«Ë¾¼ò½é</h1>");
			      var hr_text = $("<hr style=\"border-bottom:1px dashed #000;\">");
			    
			      head_text.css("text-align","center");
			      head_text.css("padding-top","20px");
                              head_text.css("padding-bottom","20px");
			      //var text_body = $("<xmp></xmp>");
                              //text_body.append(data);
			      $("#text_area").css("text-wrap","normal");
			      $("#text_area").css("width","90%");
                              $("#text_area").css("text-align","left");

			      $("#text_area").append(head_text,hr_text,data_display);

			      $("#Company_Background").css("color","#CC0000");
                                                     }
                         });/*end of ajax*/

		}
		
		);/*end of Company_Background click*/


       
});
