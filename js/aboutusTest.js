
$(document).ready(function(){
	
//	alert("ready height is "+$(document).innerHeight());
//	$("#div_top").height(80);
	$("body").width($(document).innerWidth());
//        $("#div_body").height(400);
	//$("#div_body").height($(document).innerHeight()-200);
//	$("#div_buttom").height($(document).innerHeight()*0.1);
//alert("doc ready");

	$.ajax({              url: 'Company.txt',
                              dataType: 'text',
			      //scriptCharset: 'GB2312',
			      contentType: "utf-8", 
                              success: function(data) {
                              //alert(data);
			       var data_display = data.replace(/\n/g,"<br/><br/>");
			      data_display = data_display.replace(/ /g,"&nbsp;");
			       var indexTuixing1 = data.indexOf("����1",0);
			       var str1 = data.slice(0,indexTuixing1);
			       str1 = "&nbsp;&nbsp;"+str1;
                              // alert(str1);
			       var indexDesign = data.indexOf("�����ģʽ",indexTuixing1);
			       var str2 = data.slice(indexTuixing1,indexDesign);

			       //alert(str2);
			       var text2 = $("<span></span>").text(str2);
			       text2.css("font-weight","bold");

			       var index3 = data.indexOf("����˽լ��",indexDesign);
			       var str3 = data.slice(indexDesign,index3+7);
			       str3 = str3 + "&nbsp;&nbsp;";

			       //alert(str3);
			       var index4 = data.indexOf("��˾�����ص�",index3+6);
                               var str4 = data.slice(index4-2,index4+8);	       
                               var text4 = $("<h2>&nbsp;</h2>");
			       text4.append(str4);

			       var index5 = data.indexOf("�������κ�ѡ��",index4+8);
			       var str5 = data.slice(index4+14,index5+9);
			       //alert(str5);
                               var text5 = $("<span>&nbsp;&nbsp;һ����ƣ�</span>");
			       text5.css("font-weight","bold");
			      
			       var index6 = data.indexOf("�ʽ�Ͷ��ɿء�",index5);
			       var str6 = data.slice(index5+15,index6+8);
			       var text6 = $("<span><br/>&nbsp;&nbsp;����ʩ����</span>"); 
			       text6.css("font-weight","bold");

			       var index7 = data.indexOf("��װ�����",index6);
			       var str7 = data.slice(index6+16,index7+6);
			       var text7 = $("<span><br/>&nbsp;&nbsp;�������̹���</span>");
			       text7.css("font-weight","bold");   

			      $("#text_area").empty();
			      $("#text_area").css("text-wrap","normal");
			      $("#text_area").css("width","100%");
                              $("#text_area").css("text-align","left");
			      $("#text_area").css("line-height","50px");
                              
			      $("#text_area").append(str1,text2,str3,text4,text5,str5,text6,str6,text7,str7);
                }
	});

      
});
