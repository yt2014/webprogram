
var caseClicked = 0;

var caseTextArray = new Array("case1.txt","case2.txt","case3.txt","case4.txt");
var rectArray = new Array("rect_shortImg1","rect_shortImg2","rect_shortImg3","rect_shortImg4");

var casesInfo = new Array();
var picsArray = new Array();

var currentCaseIndex = -1;
var currentPictureIndex = 0;

function caseInfo(num_pics,pics)
{
   this.num_pics = num_pics;
   this.pics = pics;
}

function picInfo(pic,descrip)
{
    this.pic = pic;
    this.descrip = descrip;
}


function initCasesInfo()
{
    var i=0;

    for(i=0;i<3;i++)
    {
	picinfo_one = new picInfo(picsXiaoChun1[i],discrip1[i]);
        picsArray[i] = picinfo_one;	
    }

    casesInfo[0] = new caseInfo(3,picsArray);
}

var picsXiaoChun1 = new Array("../fandong/肖春作品/东岸样板房/效果图/主卧3.jpg","../fandong/肖春作品/东岸样板房/效果图/起居厅2.jpg","../fandong/肖春作品/东岸样板房/效果图/餐厅2.jpg");
var discrip1 = new Array("main bedroom","main room","cateen");


function findIndexClicked(idToFind)
{
   var i=0;
   for(i=0;i<4;i++)
   {
      if(idToFind==rectArray[i])
	      break;
   }

   if(i==4)
   {
      return -1;
   }
   else
   {
      return i;
   }
}



$(document).ready(function(){
	
//	alert("ready height is "+$(document).innerHeight());
//	$("#div_top").height(80);
	$("body").width($(document).innerWidth());
//        $("#div_body").height(400);
//
      // alert(($(document).innerHeight()-300).toString()); 
       if(($(document).innerHeight()-200)>550)
       {
	    $("#div_body").height($(document).innerHeight()-200);
       }
       else
       {
            $("#div_body").height(550);
       }
//	$("#div_buttom").height($(document).innerHeight()*0.1);
//alert("doc ready");

        var width_picturesShow = $("#picturesShow").width();
       // alert("picshow width: "+width_picturesShow);       
        $("#pic_links").css("margin-left",(width_picturesShow-576)/2);

        $("#pic_links").css("margin-right",(width_picturesShow-576)/2);

	$("#one_display").css("margin-left",(width_picturesShow-800)/2);

	$("#one_display").css("margin-right",(width_picturesShow-800)/2);

	$(".svg_shortImg text").css("visibility","hidden");

        $("#text_total").empty();

	initCasesInfo();

//	alert(casesInfo[0].pics[0].pic);

	$(".link_imgs").click(
        function (event) {
		     // alert(" func exit img click " + event.target);
		      event.preventDefault();
		      event.stopPropagation();
		     // alert(event.target);
		     
		       var id_clicked = $(event.target).attr("id");
		       //alert(id_clicked);
                       
		       var indexFound = findIndexClicked(id_clicked);
                      
		      // alert(indexFound);
		       if(indexFound!=-1)
		       {
		     if(caseClicked==0)
	             {
	              caseClicked = event.target;
		      //$(caseClicked).css("fill-opacity","0.1");
		     }
	             else if(caseClicked!=event.target)
	             {
                          $(caseClicked).css("fill-opacity","0.5");
                          $(caseClicked).siblings("text").css("visibility","hidden");
			  caseClicked = event.target;
		          

	             }
		     $(caseClicked).css("fill-opacity","0.1");
                     $(caseClicked).siblings("text").css("visibility","visible");

	             $("#text_total").load(caseTextArray[indexFound]);
                     currentCaseIndex = indexFound;
		     currentPictureIndex = 0;
		     alert(casesInfo[indexFound].pics[currentPictureIndex].pic);
                     $("#picture_area").css("background","url(" + casesInfo[indexFound].pics[currentPictureIndex].pic + ")");
                    //  alert(caseClicked);
		     $("#text_left").empty();

                     $("#text_left").append(casesInfo[currentCaseIndex].pics[currentPictureIndex].descrip);
                     }
	            }
		             );


	$(".svg_shortImg").mouseover(
        function (event) {
		     // alert(event.target);
	              $(event.target).siblings("text").css("visibility","visible");
                     // alert(caseClicked);

	            }
		             );

	$(".svg_shortImg").mouseout(
        function (event) {
		     
		     //alert(event.target);
		     //alert(caseClicked);
		     if(event.target!=caseClicked)
	             {
	                 $(event.target).siblings("text").css("visibility","hidden");
		     }
                     // alert(caseClicked);


	            }
		             );

	$("#move_left_one").click(
        function (event) {

	             event.preventDefault();
		      event.stopPropagation();
		     
	             //alert(event.target);
		     if(currentCaseIndex!=-1)
		     {
		     var numTotal = casesInfo[currentCaseIndex].num_pics;

                     currentPictureIndex = currentPictureIndex + 1;

		     if(currentPictureIndex==numTotal)
		     {
		        currentPictureIndex = 0; 
		     }

		   //  alert("total: " + numTotal + "currentPictureIndex" + currentPictureIndex);

		    // alert()

                     $("#picture_area").css("background","url(" + casesInfo[currentCaseIndex].pics[currentPictureIndex].pic + ")");
                     $("#text_left").empty();

                     $("#text_left").append(casesInfo[currentCaseIndex].pics[currentPictureIndex].descrip);
                     }

	            }
		             );


       


	
      
});



