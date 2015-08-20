var currentPageIndex = 0;
var pagesID = new Array("previouspage","page1","page2","page3","page4","nextpage");
var numberPages = 6;

function getPageIndex(pageId)
{
    var i = 0;
    var retVal = -1;
    for(i=0;i<numberPages;i++)
    {
	if(pageId==pagesID[i])
	{
	    break;
	}
    }

    if(i==numberPages)
    {
	retVal = -1;
    }
    else
    {
	retVal = i;
    }
    return retVal;
}

function initBlocks(pageID)
{
   	var numCases = casesInfo.length;
        var i=0;
	//alert("case number: " + numCases);
	$("#caseBlocks").empty();
	for(i=0;i<numCases;i++)
        {
           var divBlock = $("<div></div>");
	   divBlock.attr({"class":"case_block"});
	   divBlock.addClass("case_block");

	   var divPic = $("<div></div>");
	   divPic.attr({"class":"pictureInBlock"});
	   divPic.addClass("pictureInBlock");

	   var linkPic = $("<a></a>");
	   linkPic.attr({"class":"pic_link"});
	   linkPic.addClass("pic_link");
	   var strHref = "Cases.html?id="+i.toString();
	   linkPic.attr("href",strHref);

           var imgToAdd = $("<img/>");
	   var strSrc = casesInfo[i].pathname + casesInfo[i].pics[0].pic;
	   //alert(strSrc);
	   imgToAdd.attr({"class":"imgAdd","src":strSrc});
	   imgToAdd.addClass("imgAdd");

	   var divFilter = $("<div></div>");
	   divFilter.attr({"class":"filter_img"});
           divFilter.addClass("filter_img");
           
	   

	   var pFilter = $("<p></p>");
	   pFilter.attr({"class":"filterP"});
	   pFilter.addClass("filterP");
	   var strText = "["+casesInfo[i].caseDesp+"]";
	   pFilter.text(casesInfo[i].caseDesp);

	   divFilter.append(pFilter);
	   linkPic.append(imgToAdd,divFilter);
           divPic.append(linkPic);

           var divBrief = $("<div></div>");
	   divBrief.attr({"class":"brief_info"});
	   divBrief.addClass("brief_info");

	   var pBrief = $("<p></p>");
	   pBrief.css({"font-weight":"bold","margin-top":"10px"});
	   pBrief.text(strText);

           divBrief.append(pBrief);
           divBlock.append(divPic,pBrief);

           $("#caseBlocks").append(divBlock);

        }
 
}

$(document).ready(function(){
	
//	alert("ready height is "+$(document).innerHeight());

	$("body").width($(document).innerWidth());
//        $("#div_body").height(400);
//	$("#div_body").height(900);
//	$("#div_buttom").height($(document).innerHeight()*0.1);
//
        initCasesInfo();

	initBlocks(0);
      //  alert(casesInfo[0].pathname);

        $(".filter_img").css("display","none");
	currentPageIndex = 1;
        $("#prepage").css("visibility","hidden");


	PageID = "#" + pagesID[1];
	$(PageID).css("color","#c71585");




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

                $("#picture_area").css("background",imgBack); 
		  // alert(tar_clicked)

		//document.scrollTop = 120; 
               // window.scrollTo(0,120);
	    //   t=setTimeout("scrolltop()",50);
               
	       }
	       );

	       $(".pictureInBlock").mouseover(
			       function(event){
			      //   alert($(event.target).attr("class"));

				 var classEvent = $(event.target).attr("class");
			if(classEvent=="imgAdd")
	                {
		          // alert(classEvent);
                            $(event.target).siblings(".filter_img").css("display","");
	                }
				 //	$(event.target).css("visibility","visible");
			       }
			       );

	        $(".pictureInBlock").mouseout(
			       function(event){
			       //alert($(event.target).attr("class"));

				 var classEvent = $(event.target).attr("class");
			if(classEvent!="imgAdd")
	                {
                            //alert(classEvent);
			    if(classEvent=="filter_img")
		            {
                               $(event.target).css("display","none");
			    }
		            else if(classEvent=="filterP")
		            {
                                 $(event.target).parents(".filter_img").css("display","none");  
			    }
			
	                }
				 //	$(event.target).css("visibility","visible");
			       }
			       );
     
		$("#pages a").click(
			function(event)
			{
			   // alert($(event.target).attr("id"));
			    var id_clicked = $(event.target).attr("id");
                            var pageIndexClicked = getPageIndex(id_clicked);
                            //alert(pageIndexClicked);
			    
			    if(pageIndexClicked==0)
			    {
			        if(currentPageIndex != 1)
				{
				   var PageID = "#" + pagesID[currentPageIndex];
				   $(PageID).css("color","blue");
			           currentPageIndex = currentPageIndex - 1;
                                   PageID = "#" + pagesID[currentPageIndex];
				   $(PageID).css("color","#c71585");

				   
				}
			    }
			    else if(pageIndexClicked==numberPages-1)
			    {
			       if(currentPageIndex != (numberPages-2))
				{
				   var PageID = "#" + pagesID[currentPageIndex];
				   $(PageID).css("color","blue");
			           currentPageIndex = currentPageIndex + 1;
                                   PageID = "#" + pagesID[currentPageIndex];
				   $(PageID).css("color","#c71585");
				   
				}
			    }
			    else
			    {
				var PageID = "#" + pagesID[currentPageIndex];
				$(PageID).css("color","blue");
			        $(event.target).css("color","#c71585");
                                currentPageIndex = pageIndexClicked;
			    }
			   
			     if(currentPageIndex==1)
		             {
				      $("#prepage").css("visibility","hidden");
				      $("#nexpage").css("visibility","visible");
		             }
			     else if(currentPageIndex==(numberPages-2))
			     {
				    $("#prepage").css("visibility","visible");
				    $("#nexpage").css("visibility","hidden");
 
			     }
			     else
			     {
                                    $("#prepage").css("visibility","visible");
				    $("#nexpage").css("visibility","visible"); 
			     }

			}
			);

});
