



function scrolltop()
{
   document.body.scrollTop = 95;
}

var numCasesDesigner = 0;
var numPicsCurrentCase = 0;
var designerID = 0;
var pathCurrentCase = "";

var currentCaseInfo = new caseInfo(); 

var currentPicIndex = -1;

function indexOfCurrentPic(picname)
{
    var num = currentCaseInfo.num_pics;
    var i=0;
    var retVal = -1;
    for(i=0;i<num;i++)
    {
	if(picname==currentCaseInfo.pics[i].pic)
	{
	    retVal = i;
	    break;
	}
    }
    
    if(i==num)
    {
	retVal = -1;
    }
    
    return retVal;
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
        initCasesInfo();
        
        var id = getURLParameter('id');
        var id_id = 0; 
	var total_num = casesInfo.length;

		if(id!=null)
		{
		   id_id = Number(id);		   
		   if((id_id >= (desinerInfo[0]+desinerInfo[1]))&&(id_id<total_num))
		   {
                        designerID = 2;
			numCasesDesigner = desinerInfo[2]; 
		   }
		   else if(id_id >= desinerInfo[0])
		   {
			  designerID = 1;
                          numCasesDesigner = desinerInfo[1]; 
		   }
		   else
		   {
                          designerID = 0;
                          numCasesDesigner = desinerInfo[0];  
		   }
		   		
		}
		else
		{
			//alert("no id");

		}
 

        numPicsCurrentCase = casesInfo[id_id].num_pics;
	pathCurrentCase = casesInfo[id_id].pathname; 
	currentCaseInfo = casesInfo[id_id]; 

        
	//alert("current case " + currentCaseInfo);
	$("#long_div").empty();

        $("#long_div").addClass("css_long_div");

	var widLongDiv = 94*numPicsCurrentCase;
	$("#long_div").width(widLongDiv);
//	alert($("#long_div").width());

       var strPathImg = pathCurrentCase; 
       var i=0;
       for(i=0;i<numPicsCurrentCase;i++)
       {

	var divToAdd = $("<div></div>");
	divToAdd.addClass("short_img");
	var strId = "shortImgDiv"+(i+1).toString();
	divToAdd.attr("id",strId);
	var aToAdd = $("<a></a>");
	aToAdd.addClass("aAdd");
	aToAdd.attr({"href":"#","class":"link_imgs"});///////
	var imgToAdd = $("<img/>");
	imgToAdd.addClass("imgAdd");
	var imgSrc = strPathImg + currentCaseInfo.pics[i].pic;//////
	imgToAdd.attr("src",imgSrc);
	var pToAdd = $("<p></p>");
	var strP = (i+1).toString()+"/" + currentCaseInfo.num_pics.toString();
	pToAdd.addClass("pAdd");
        pToAdd.append(strP);
       // alert(pToAdd);

        aToAdd.append(imgToAdd,pToAdd);
        divToAdd.append(aToAdd);
        $("#long_div").append(divToAdd);
       }

       var imgBackInit =  currentCaseInfo.pathname + currentCaseInfo.pics[0].pic;
                          // alert(imgBack);
       imgBackInit = "url('"+imgBackInit+"') top center no-repeat";
			//  alert(imgBack); 
       $("#picture_area").css("background",imgBackInit);
       currentPicIndex = 0;
       strId =  "#shortImgDiv" + (currentPicIndex+1).toString();
       $(strId).css("border","solid #bb5500 2px");
 
$("#caseBrief").text(currentCaseInfo.caseDesp);
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
		 var imgName = $(tar_clicked).attr("src");
                 var indexa = imgName.lastIndexOf("/");
		 var leng_str = imgName.length;

		// alert("length:"+leng_str+" index:"+indexa);
                 var picname = imgName.substring(indexa+1,leng_str);
		// alert(picname);

               var strId =  "#shortImgDiv" + (currentPicIndex+1).toString();
		$(strId).css("border","solid #aaaaaa 2px");


		indexa = indexOfCurrentPic(picname);
		if(indexa!=-1)
		{
		    currentPicIndex = indexa;
		}
		else
		{
		    currentPicIndex = 0;
		}
	//	alert("pic index"+indexa);
                $("#picture_area").css("background",imgBack); 
		  // alert(tar_clicked)

		//document.scrollTop = 120; 
               // window.scrollTo(0,120);
	    //   t=setTimeout("scrolltop()",50);
	        strId =  "#shortImgDiv" + (currentPicIndex+1).toString();
		$(strId).css("border","solid #bb5500 2px");
               
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
		     //  alert($(event.target).attr("class"));
		       if($(event.target).attr("class").search("filter")!=-1)
		       {
                          $(event.target).css("visibility","hidden");
		       }

		       }
		       );

                $("#move_right_one").click(
			function(event)
			{
			   event.preventDefault();
		           event.stopPropagation();
			  // alert(event.target);
			  strId =  "#shortImgDiv" + (currentPicIndex+1).toString();
	                    $(strId).css("border","solid #aaaaaa 2px");

			    currentPicIndex = currentPicIndex + 1;
			   if(currentPicIndex==currentCaseInfo.num_pics)
			   {
			      currentPicIndex = 0;
			   }

                           var imgBack =  currentCaseInfo.pathname + currentCaseInfo.pics[currentPicIndex].pic;
                          // alert(imgBack);
			   imgBack = "url('"+imgBack+"') top center no-repeat";
			//  alert(imgBack);
 
                           $("#picture_area").css("background",imgBack);

			    strId =  "#shortImgDiv" + (currentPicIndex+1).toString();
	                    $(strId).css("border","solid #bb5500 2px");

			}
			); 

                   $("#move_left_one").click(
			function(event)
			{
			   event.preventDefault();
		           event.stopPropagation();
			  // alert(event.target);
			  strId =  "#shortImgDiv" + (currentPicIndex+1).toString();
	                    $(strId).css("border","solid #aaaaaa 2px");
                           // alert(currentPicIndex);
			    currentPicIndex = currentPicIndex - 1;
			   if(currentPicIndex<=-1)
			   {
			      currentPicIndex = currentCaseInfo.num_pics-1;
			   }

                           var imgBack =  currentCaseInfo.pathname + currentCaseInfo.pics[currentPicIndex].pic;
                          // alert(imgBack);
			   imgBack = "url('"+imgBack+"') top center no-repeat";
			//  alert(imgBack);
 
                           $("#picture_area").css("background",imgBack);

			    strId =  "#shortImgDiv" + (currentPicIndex+1).toString();
	                    $(strId).css("border","solid #bb5500 2px");

			}
			); 



      

});
