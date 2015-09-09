var currentPageIndex = 0;
var pagesID = new Array("previouspage","page1","page2","page3","page4","nextpage");
var numberPages = 6;

function getPageIndex(pageId)
{
    var i = 0;
    var retVal = -1;
    for(i=0;i<pagesID.length;i++)
    {
	if(pageId==pagesID[i])
	{
	    break;
	}
    }

    if(i==pagesID.length)
    {
	retVal = -1;
    }
    else
    {
	retVal = i;
    }
    return retVal;
}

function mouseOverBlock()
{
   // alert($(this).attr("class"));
    $(this).find(".filter_img").css("display","");

}

function mouseOutBlock()
{
   // alert($(this).attr("class"));
    $(this).find(".filter_img").css("display","none");

}

function initBlocks(pageID)
{

        //	alert(casesInfo.length);
//	alert(numberPages);
//
        var i_start = pageID*16;
   	var numCases = casesInfo.length;
	var i_end;
	if(numCases > pageID*(16+1))
	{
            i_end = pageID*16 + 16; 
	}
	else
	{
	    i_end = numCases;
	}
        var i=0;
	//alert("case number: " + numCases);
	$("#caseBlocks").empty();
	for(i=i_start;i<i_end;i++)
        {
           var divBlock = $("<div></div>");
	   divBlock.attr({"class":"case_block"});
	   divBlock.addClass("case_block");

	   var divPic = $("<div></div>");
	   divPic.attr({"class":"pictureInBlock"});
	   divPic.addClass("pictureInBlock");

           divPic.bind("mouseover",mouseOverBlock);
	   divPic.bind("mouseout",mouseOutBlock);
 

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
           divFilter.css("display","none");
           
	   

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

function addPagesIndications(numPages)
{
     pagesID.length = 0;
     pagesID = new Array();

     pagesID[0] = "previouspage"; 

     var i=0; 
     for(i=0;i<numPages;i++)
     {
        var linkPageIn = $("<a></a>");
        var strId = "page" + (i+1).toString();

        linkPageIn.attr({"href":"#","id":strId});
        linkPageIn.css({"margin":"5px","color":"blue"});
        linkPageIn.text((i+1).toString());	

        $("#nexpage").before(linkPageIn);
        pagesID[i+1] = strId;
     }

     pagesID[i+1] = "nextpage"; 
     var strSpan = "¹²" + casesInfo.length + "Ìõ";
     $("#totalCases").text(strSpan);
    
}


$(document).ready(function(){
	
//	alert("ready height is "+$(document).innerHeight());

	$("body").width($(document).innerWidth());
        $("#left_column").width(($(document).innerWidth()-920)/2);
        $("#body_right").width(($(document).innerWidth()-920)/2);

//        $("#div_body").height(400);
//	$("#div_body").height(900);
//	$("#div_buttom").height($(document).innerHeight()*0.1);
//
        
        initCasesInfo();
        numberPages = parseInt((casesInfo.length + 15) / 16);

	initBlocks(0);

	//delete the pages indication here.
        $("#page1").remove();
        $("#page2").remove();
	$("#page3").remove();
	$("#page4").remove();
        addPagesIndications(numberPages);
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

	  /*     $(".pictureInBlock").mouseover(
			       function(event){
			        // alert($(event.target).attr("class"));

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
			       );*/
     
		$("#pages a").click(
			function(event)
			{
			   // alert($(event.target).attr("id"));
                            event.preventDefault();
		            event.stopPropagation();

			    var id_clicked = $(event.target).attr("id");
                            var pageIndexClicked = getPageIndex(id_clicked);
                          //  alert(pageIndexClicked);
			    
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
			    else if(pageIndexClicked == (pagesID.length-1))
			    {
			       if(currentPageIndex != (pagesID.length-2))
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
			     else if(currentPageIndex==(pagesID.length-2))
			     {
				    $("#prepage").css("visibility","visible");
				    $("#nexpage").css("visibility","hidden");
 
			     }
			     else
			     {
                                    $("#prepage").css("visibility","visible");
				    $("#nexpage").css("visibility","visible"); 
			     }
                             
                             initBlocks(currentPageIndex-1);

			}
			);

			$("#caseBlocks").mouseover(
				function(event){
			//	alert(event.target);
				}
				);

			$(".pictureInBlock").live("mouseover",
				function()
				{
				    alert($(this));
				}
				);

});
