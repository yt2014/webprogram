
function scrolltop()
{
   document.body.scrollTop = 95;
}

var numCasesDesigner = 0;
var numPicsCurrentCase = 0;
var designerID = 0;
var pathCurrentCase = "";

var currentCaseInfo = new caseInfo(); 
var previousCaseInfo = new caseInfo();
var nextCaseInfo = new caseInfo();

var currentPicIndex = -1;
var caseStartIndex = 0;
var caseEndIndex = 0;

var id_id = 0;
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

function initShortImgsBlock(selectedCasInfo)
{
	$("#long_div").empty();

        $("#long_div").addClass("css_long_div");

	var numPics = selectedCasInfo.num_pics;

	var widLongDiv = 94*numPics;
	$("#long_div").width(widLongDiv);
//	alert($("#long_div").width());

       var strPathImg = selectedCasInfo.pathname; 
       var i=0;
       for(i=0;i<numPics;i++)
       {

	var divToAdd = $("<div></div>");
	divToAdd.addClass("short_img");
	var strId = "shortImgDiv"+(i+1).toString();
	divToAdd.attr("id",strId);
	var aToAdd = $("<a></a>");
	aToAdd.addClass("link_imgs");
	aToAdd.attr("href","#");
	aToAdd.attr("class","link_imgs");///////
	var imgToAdd = $("<img/>");
	imgToAdd.addClass("imgAdd");
	imgToAdd.attr("class","imgAdd");
	var imgSrc = strPathImg + selectedCasInfo.pics[i].pic;//////
	imgToAdd.attr("src",imgSrc);
	var pToAdd = $("<p></p>");
	var strP = (i+1).toString()+"/" + selectedCasInfo.num_pics.toString();
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


      $("#previous_case a img").attr("src",previousCaseInfo.pathname + previousCaseInfo.pics[0].pic);
      $("#previous_case .pCaseName").text(previousCaseInfo.caseDesp);

      $("#next_case a img").attr("src",nextCaseInfo.pathname + nextCaseInfo.pics[0].pic);
      $("#next_case .pCaseName").text(nextCaseInfo.caseDesp);
      $("#caseBrief").text(currentCaseInfo.caseDesp);
}


function setPreviousNext(id_current)
{
        var id_p = id_current - 1;
	if(id_p<caseStartIndex)
        {
	   id_p = caseEndIndex;
	   
	}
        //alert(id_p);
	previousCaseInfo = casesInfo[id_p];

	var id_n = id_current + 1;
	if(id_n>caseEndIndex)
	{
	   id_n = caseStartIndex;
	}
        nextCaseInfo = casesInfo[id_n];
}

function setDesigner(designer_ID)
{
      var strDes = designerInfoArray[designer_ID].pathfolder + "1.txt";
      //alert(strDes);
      $.ajax({              url: strDes,
                              dataType: 'text',
			      //scriptCharset: 'GB2312',
			      contentType: "utf-8", 
                              success: function(data) {
		//	      alert(data);

			      var indexName = data.indexOf("姓名：",0);
			      var indexPos = data.indexOf("职位：",indexName);
			      var indexEx = data.indexOf("个人经历：",indexPos);
			      var indexIdea = data.indexOf("设计理念：",indexEx);
                              
			      var strName = data.slice(indexName+3,indexPos);
			      var strPos = data.slice(indexPos+3,indexEx);
			      var strEx = data.slice(indexEx+5,indexIdea);
			      var strIdea = data.slice(indexIdea+5,data.length);

			      //alert(strIdea);
			      //
			      $("#designerName").text(strName);
			      $("#designerPos").text(strPos);
			      $("#designerIdea").text(strIdea);

			      }
            }
	   );
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
        initDesigners();
        var id = getURLParameter('id');
        id_id = 0; 
	var total_num = casesInfo.length;

		if(id!=null)
		{
		   id_id = Number(id);		   
		   if((id_id >= (designerInfoArray[0].numCases+designerInfoArray[1].numCases))&&(id_id<total_num))
		   {
                        designerID = 2;
			numCasesDesigner = designerInfoArray[2].numCases;
		        caseStartIndex = designerInfoArray[0].numCases+designerInfoArray[1].numCases;	
			caseEndIndex = total_num-1;
		   }
		   else if(id_id >= designerInfoArray[0].numCases)
		   {
			  designerID = 1;
                          numCasesDesigner = designerInfoArray[1].numCases; 
                          caseStartIndex = designerInfoArray[0].numCases;
                          caseEndIndex = designerInfoArray[0].numCases+designerInfoArray[1].numCases - 1;
		   }
		   else
		   {
                          designerID = 0;
                          numCasesDesigner = designerInfoArray[0].numCases;  
                          caseStartIndex = 0;
                          caseEndIndex = designerInfoArray[0].numCases - 1;
		   }
		   		
		}
		else
		{
			//alert("no id");
			designerID = 0;
                        numCasesDesigner = designerInfoArray[0].numCases;  
                        caseStartIndex = 0;
                        caseEndIndex = designerInfoArray[0].numCases - 1;

		}
 

        //alert(id_id);
        numPicsCurrentCase = casesInfo[id_id].num_pics;
	pathCurrentCase = casesInfo[id_id].pathname; 
	currentCaseInfo = casesInfo[id_id];

        setPreviousNext(id_id);
        
	//alert("current case " + currentCaseInfo);
	initShortImgsBlock(currentCaseInfo);
       
        setDesigner(designerID);

	$("#left_button").click(
		function(event)
		{
		  event.preventDefault();
		  event.stopPropagation();
		  //  alert("scrollleft");
		  var posScroll = $("#short_imgs").scrollLeft();
		   
		    $("#short_imgs").scrollLeft(posScroll-94); 
		}
		);

	$("#right_button").click(
		function(event)
		{
		   event.preventDefault();
		   event.stopPropagation();
		   // alert("scrollRight");
                   var posScroll = $("#short_imgs").scrollLeft();
		    $("#short_imgs").scrollLeft(posScroll+94); 
		}
		);

       $(".imgAdd").click(
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
                            
			    if(currentPicIndex==0)
			    {
			       var posScroll = $("#short_imgs").scrollLeft();
			       //alert(posScroll);
			       $("#short_imgs").scrollLeft(0-posScroll);
			    }
			    else
			    {
			       var posScroll = $("#short_imgs").scrollLeft();
                               $("#short_imgs").scrollLeft(94+posScroll);
			    }

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

			     if(currentPicIndex==currentCaseInfo.num_pics-1)
			     {
			        $("#short_imgs").scrollLeft(currentCaseInfo.num_pics*94);

			     }
			     else
			     {
                                 var posScroll =  $("#short_imgs").scrollLeft();
                                  $("#short_imgs").scrollLeft(posScroll-94);
			     } 

			}
			);       

	$("#previous_case a").click(
			function(event)
			{
                           event.preventDefault();
		           event.stopPropagation();
		//	   alert("previous case");
                           id_id = id_id - 1;
			  if(id_id<caseStartIndex)
                          {
	                    id_id = caseEndIndex;
			   
	   
	                  }
	                   currentCaseInfo = casesInfo[id_id];

                           setPreviousNext(id_id);
        
	                   //alert("current case " + currentCaseInfo);
	                   initShortImgsBlock(currentCaseInfo);
	                  

			}
			);

      	$("#next_case a").click(
			function(event)
			{
                           event.preventDefault();
		           event.stopPropagation();
		//	   alert("previous case");
                           id_id = id_id + 1;
			  if(id_id>caseEndIndex)
                          {
	                    id_id = caseStartIndex;			   
	   
	                  }
	                   currentCaseInfo = casesInfo[id_id];

                           setPreviousNext(id_id);
        
	                   //alert("current case " + currentCaseInfo);
	                   initShortImgsBlock(currentCaseInfo);
	                  

			}
			);

         $("*").click(
                       function(event)
		       {
			   //alert($(event.target).attr("class"));
	         if($(event.target).attr("class")=="imgAdd")
	         {
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
	         else if($(event.target).attr("class")=="pAdd")
		 {
		     //alert($(event.target).text());
                     event.preventDefault();
		     event.stopPropagation();

		     var strText = $(event.target).text();
		     var indexa = Number(strText[0]) - 1;
		    // alert(indexa);
                     

	          //   var imgBack = "url('"+$(tar_clicked).attr("src")+"') top center no-repeat";
		 //  alert(imgBack);
		 
		// alert("length:"+leng_str+" index:"+indexa);
                 var picname = currentCaseInfo.pathname + currentCaseInfo.pics[currentPicIndex].pic;
		// alert(picname);

                 var strId =  "#shortImgDiv" + (currentPicIndex+1).toString();
		 $(strId).css("border","solid #aaaaaa 2px");

	//	alert("pic index"+indexa);
		var imgBack = "url('"+picname+"') top center no-repeat";
                $("#picture_area").css("background",imgBack); 
		  // alert(tar_clicked)

		//document.scrollTop = 120; 
               // window.scrollTo(0,120);
	    //   t=setTimeout("scrolltop()",50);
	        currentPicIndex = indexa;
	        strId =  "#shortImgDiv" + (currentPicIndex+1).toString();
		$(strId).css("border","solid #bb5500 2px");
		 }
		       }
			 );

});
