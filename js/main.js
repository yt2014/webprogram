

$(document).ready(function(){
	
	//alert("ready height is "+$(document).innerHeight()*0.05);
	$("#div_top").height($(document).innerHeight()*0.08);
	$("#div_body").height($(document).innerHeight()*0.84);
	$("#div_buttom").height($(document).innerHeight()*0.08);
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
