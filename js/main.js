

$(document).ready(function(){
	
//	alert("ready height is "+$(document).innerHeight()*0.05);
	$("#div_top").height($(document).innerHeight()*0.08);
	$("#div_body").height($(document).innerHeight()*0.84);
	$("#div_buttom").height($(document).innerHeight()*0.08);

       var Y_Start = $("#aboutus").offset().top; 
       var X_Start = $("#aboutus").offset().left;

       var Y_End =  $("#caseshow").offset().top;
       var X_End =  $("#caseshow").offset().left;

       var Y_div_line = $("#svg_line1").offset().top;
       var X_div_line = $("#svg_line1").offset().left;

       var X_toMove = X_Start + 50 - X_div_line;
       var Y_toMove = Y_End + 120 - Y_div_line; 

      // alert("line1 position: "+X_div_line1+" " + Y_div_line1);
       $("#svg_line1").css({"top":Y_toMove,"left":X_toMove});       
       $("#svg_line1").height(Y_Start-120-Y_End);
       $("#svg_line1").width(X_End-X_Start-20);

       Y_Start = $("#designer").offset().top;//exchange start and end.
       X_Start = $("#designer").offset().left;

       Y_div_line = $("#svg_line2").offset().top;
       X_div_line = $("#svg_line2").offset().left;

       X_toMove =  X_End - X_div_line + 90;
       Y_toMove =  Y_End - Y_div_line + 60;

       $("#svg_line2").css({"top":Y_toMove,"left":X_toMove});
       $("#svg_line2").width(X_Start-X_End-70);

       Y_End = $("#service").offset().top;//exchange start and end.
       X_End = $("#service").offset().left;

       Y_div_line = $("#svg_line3").offset().top;
       X_div_line = $("#svg_line3").offset().left;

       X_toMove =  X_End - X_div_line + 50;
       Y_toMove =  Y_Start - Y_div_line + 100;

       $("#svg_line3").css({"top":Y_toMove,"left":X_toMove});
       $("#svg_line3").width(X_Start-X_End);

       Y_Start = $("#hr").offset().top;//exchange start and end.
       X_Start = $("#hr").offset().left;

       Y_div_line = $("#svg_line4").offset().top;
       X_div_line = $("#svg_line4").offset().left;

       X_toMove =  X_End - X_div_line + 70;
       Y_toMove =  Y_Start - Y_div_line + 90;

       $("#svg_line4").css({"top":Y_toMove,"left":X_toMove});
       $("#svg_line4").width(X_Start-X_End-50);

       Y_Start = $("#svg_polygon").offset().top;//adjust the pic in the center
       X_Start = $("#svg_polygon").offset().left;
       
       Y_End = $("#caseshow").offset().top;
       X_End = $("#caseshow").offset().left;

       var Y_End1 = $("#designer").offset().top;
       var X_End1 = $("#designer").offset().left;
  
       X_toMove = (X_End + X_End1)/2 - X_Start - 135;
       Y_toMove = (Y_End + Y_End1)/2 - Y_Start + 110;

      $("#svg_polygon").css({"top":Y_toMove,"left":X_toMove});

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

			      var head_text = $("<h1>公司简介</h1>");
			      var hr_text = $("<hr style=\"border-bottom:1px dashed #000;\">");
			    
			      head_text.css("text-align","center");
			      head_text.css("margin-top","20px");
                              head_text.css("margin-bottom","20px");
			      //var text_body = $("<xmp></xmp>");
                              //text_body.append(data);
			      $("#text_area").css("text-wrap","normal");
			      $("#text_area").css("width","90%");
                              $("#text_area").css("text-align","left");

			      $("#text_area").append(head_text,hr_text,data_display);
                                                     }
                         });/*end of ajax*/

		}
		
		);/*end of Company_Background click*/



        /*navgators click events, set the left links*/
	/*历史作品*/
	$("#history_work").click(function(e){
		//alert(e);
		e.preventDefault();
                $("#list_aboutus").remove();
                var ul_lh = $("<ul id=\"list_history\"></ul>");

                //alert(ul_lh);
                $("#div_body_left").append(ul_lh);

                var li_his = $("<li>历年作品</li>");
                ul_lh.append(li_his);
                                           });/*end of history work click*/

	gearCircleElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        gearCircleElement.id = 'circle';
        gearCircleElement.cx.baseVal.value = 34;
        gearCircleElement.cy.baseVal.value = 43; 
        gearCircleElement.r.baseVal.value = 12; 
        gearCircleElement.style.fill = '#ff0000';
                                              
       
});
