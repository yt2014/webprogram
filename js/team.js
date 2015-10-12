var startIndexs = new Array();


var designerPhotos = new Array(
"fandong/fandongZuopin/photo.jpg",
"fandong/tangxiZuopin/photo.jpg",
"fandong/xiaochunZuopin/photo.jpg"
);

function setStartIndexs()
{
	initDesigners();
	startIndexs[0] = designerInfoArray[0].numCases;
	startIndexs[1] = 0;
	startIndexs[2] = designerInfoArray[0].numCases + designerInfoArray[1].numCases;
}

function photoMouseOver()
{
	//alert($(this).children(".filter_photo"));
	$(this).children(".filter_photo").css("visibility","visible");
	
	//
}

function photoMouseOut()
{
	$(this).children(".filter_photo").css("visibility","hidden");
}

function shortcaseFilterMouseOver()
{
	$(this).children(".filter_shortcase").css("visibility","visible");
}

function shortcaseFilterMouseOut()
{
	$(this).children(".filter_shortcase").css("visibility","hidden");
}

$(document).ready(function(){
	
//	alert("ready height is "+$(document).innerHeight());
//	$("#div_top").height(80);
	$("body").width($(document).innerWidth());
//        $("#div_body").height(400);
	$("#div_body").height(1400);
//	$("#div_buttom").height($(document).innerHeight()*0.1);
//alert("doc ready");
    if(($(document).innerWidth()*0.7)<800)
	{
       $("#left_column").width(($(document).innerWidth()-800)/2);
	   $("#body_middle").width(800);
	   $("#body_right").width(($(document).innerWidth()-800)/2);
	}
    $("rect").css("fill-opacity","0.1");

	$("#designer_blocks").empty();
	
	initCasesInfo();
	setStartIndexs();
	
	var i = 0;
	for(i=0;i<3;i++)
	{
	var div_designer =$("<div></div>");	
	var idDesigner = "designer" + (i+1).toString();
    div_designer.attr("id",idDesigner); //--   	
	div_designer.addClass("designer_block");
	
	var div_designer_photo = $("<div></div>");	
	//div_designer_photo.attr("class","photo_div");
	div_designer_photo.addClass("photo_div");
	div_designer_photo.bind("mouseover",photoMouseOver);
	div_designer_photo.bind("mouseout",photoMouseOut);
	
	var img_photo = $("<img/>");
	img_photo.attr("src",designerPhotos[i]);//---
	img_photo.addClass("photo");
	
	var div_filter = $("<div></div>");
	div_filter.attr("class","filter_photo");
	div_filter.addClass("filter_photo");
	
	div_designer_photo.append(img_photo,div_filter);
	div_designer.append(div_designer_photo);
	$("#designer_blocks").append(div_designer);
	
	var i1 = 0;
	for(i1=0;i1<4;i1++)
	{
		var link_case1 = $("<a></a>");
	    link_case1.addClass("pic_link");
	    var hrefCase1 = "Cases.html?id=" + (startIndexs[i] + i1).toString();
	    link_case1.attr("href",hrefCase1);
	    link_case1.bind("mouseover",shortcaseFilterMouseOver);
	    link_case1.bind("mouseout",shortcaseFilterMouseOut);
	
	    var imgCase1 = $("<img/>");
	    imgCase1.addClass("shortCase");
	    var imgSrc = casesInfo[startIndexs[i] + i1].pathname + casesInfo[startIndexs[i] + i1].pics[0].pic;
	    imgCase1.attr("src",imgSrc);
	
	    var divShortcaseFilter = $("<div></div>");
	    divShortcaseFilter.attr("class","filter_shortcase");
	    divShortcaseFilter.addClass("filter_shortcase");
	
	    var pFilterText = $("<p></p>").text(casesInfo[startIndexs[i] + i1].caseDesp);
	    pFilterText.addClass("ptext");
	
	    divShortcaseFilter.append(pFilterText);
	    link_case1.append(imgCase1,divShortcaseFilter);
	    div_designer.append(link_case1);
	}
	var divPosition = $("<div></div>");
	divPosition.addClass("designer_position");
	
	var pPosition = $("<p></p>");
	pPosition.append(designerNames[i],$("<br/>"),designerPositions[i]);
	
	
	var divZuoPin = $("<div></div>");
	divZuoPin.addClass("designer_position");
	
	var pZuoPinTitle = $("<p></p>").text("×÷Æ·");
	pZuoPinTitle.css("font-weight","bold");
    
    divZuoPin.append(pZuoPinTitle,designerZuoPin[i]);	
	divPosition.append(pPosition);
	
	div_designer.append(divPosition,divZuoPin);
	}
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
