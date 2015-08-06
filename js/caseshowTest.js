
var caseClicked = 0;

var caseTextArray = new Array("case1.txt","case2.txt","case3.txt","case4.txt");
var rectArray = new Array("rect_shortImg1","rect_shortImg2","rect_shortImg3","rect_shortImg4");

var casesInfo = new Array();
var picsArray = new Array();

var currentCaseIndex = -1;
var currentPictureIndex = 0;

function caseInfo(num_pics,pics,pathname)
{
   this.num_pics = num_pics;
   this.pics = pics;
   this.pathname = pathname;
}

function picInfo(pic,descrip)
{
    this.pic = pic;
    this.descrip = descrip;
}


function initCasesInfo()
{
    var i=0;

    for(i=0;i<19;i++)
    {
	    if(i<3)
	    {
	      picinfo_one = new picInfo(picsXiaoChun1[i],discrip1[i]);
              picsArray[i] = picinfo_one;
	    }
	    else
	    {
		 var picname = "img" + (i-2).toString() + ".jpg";
		 var disc = "实景图" + (i-2).toString(); 
	         picinfo_one = new picInfo(picname,disc);
                 picsArray[i] = picinfo_one;
	    }
            	    
    }
    
    casesInfo[0] = new caseInfo(19,picsArray,"fandong/xiaochunZuopin/DongAnYangban/Xiaoguo/");

    //picsArray.length = 0;
    picsArray1 = new Array();
    picinfo_one = new picInfo("cateen.jpg","餐厅");
    picsArray1[0] = picinfo_one;
    picinfo_one = new picInfo("keting.jpg","客厅");
    picsArray1[1] = picinfo_one;

    casesInfo[1] = new caseInfo(2,picsArray1,"fandong/xiaochunZuopin/DongAnYangban/LiZhai/");
    
    picsArray2 = new Array();
    for(i=0;i<22;i++)
    {
	if((i>4)&&(i<12))
	{
            var picname = "keting" + picsFandong1[i] + ".jpg";
            var disc = "客厅" +  picsFandong1[i]; 
	    picinfo_one = new picInfo(picname,disc);
            picsArray2[i] = picinfo_one;
	}
	else if((i>11)&&(i<16))
	{
	    var picname = "zhuwo" + picsFandong1[i] + ".jpg";
            var disc = "主卧" +  picsFandong1[i]; 
	    picinfo_one = new picInfo(picname,disc);
            picsArray2[i] = picinfo_one;
	}
        else
	{
            picinfo_one = new picInfo(picsFandong1[i],discripFD1[i]);
            picsArray2[i] = picinfo_one;
	}

    }

    casesInfo[2] = new caseInfo(22,picsArray2,"fandong/fandongZuopin/");

}

var picsXiaoChun1 = new Array("mainbed.jpg","main.jpg","cateen.jpg");
var discrip1 = new Array("主卧效果图","起居室效果图","餐厅效果图");

var picsFandong1 = new Array("garden.jpg","keting_gdos.jpg","keting_xgd.jpg","keting_xdhl.jpg","keting_xdzs.jpg",
		   "1","2","3","4","5","6","7",
		   "1","2","3","4",
		   "bj.jpg","dt.jpg","etf.jpg","lrf.jpg","mszy.jpg","sf.jpg"
		);
var discripFD1 = new Array("花园","客厅--古典欧式风格","客厅--新古典风格","客厅--现代华丽风格","客厅--现代中式风格",
		          "1","2","3","4","5","6","7",
			  "1","2","3","4",
			  "包间","大厅","儿童房","老人房","美式庄园","书房");

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

	//alert(casesInfo[1].pics[0].pic);

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
		    // alert(casesInfo[indexFound].pics[currentPictureIndex].pic);
		    var picInfoOne = casesInfo[currentCaseIndex].pics[currentPictureIndex];
		    var fullPath = casesInfo[currentCaseIndex].pathname + picInfoOne.pic;
		    //alert(fullPath);
                     $("#picture_area").css("background","url(" + fullPath + ")");
                    //  alert(caseClicked);
		     $("#text_left").empty();

                     $("#text_left").append(picInfoOne.descrip);
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
                    var picInfoOne = casesInfo[currentCaseIndex].pics[currentPictureIndex];
		    var fullPath = casesInfo[currentCaseIndex].pathname + picInfoOne.pic;
		    //alert(fullPath);

                     $("#picture_area").css("background","url(" + fullPath + ")");
                     $("#text_left").empty();

                     $("#text_left").append(picInfoOne.descrip);
                     }

	            }
		             );

	$("#move_right_one").click(
        function (event) {

	             event.preventDefault();
		      event.stopPropagation();
		     
	             //alert(event.target);
		     if(currentCaseIndex!=-1)
		     {
		     var numTotal = casesInfo[currentCaseIndex].num_pics;

                     currentPictureIndex = currentPictureIndex - 1;

		     if(currentPictureIndex==-1)
		     {
		        currentPictureIndex = numTotal-1; 
		     }

		   //  alert("total: " + numTotal + "currentPictureIndex" + currentPictureIndex);

		    // alert()
		    var picInfoOne = casesInfo[currentCaseIndex].pics[currentPictureIndex];
		    var fullPath = casesInfo[currentCaseIndex].pathname + picInfoOne.pic;
		    

                     $("#picture_area").css("background","url(" + fullPath + ")");
                     $("#text_left").empty();

                     $("#text_left").append(picInfoOne.descrip);
                     }

	            }
		             ); 


       


	
      
});



