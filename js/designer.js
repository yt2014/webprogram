
var TriggerIDArray = new Array("img_1","img_2","img_3","img_4","img_5","img_6","img_7","img_8");//mouse trigger id array
var DisplayIDArray = new Array("link_img1","link_img2","link_img3","link_img4","link_img5","link_img6","link_img7","link_img8");

var current_id_index = 20;
var current_Element = "";

var picturesArray = new Array();
var pictureArrayIndex = 0;

var type_space = new Array("pictures/keting","pictures/chufang","pictures/woshi","pictures/yangtai");
var text_display = new Array("¿ÍÌü","³ø·¿","ÎÔÊÒ","ÑôÌ¨");


var pictures_borders = new Array();
var vertical_border = 0;

function initPicturesArray()
{
    for(var i=0;i<8;i++)
    {
       picturesArray[i] = new Array(); 
       for(var k=0;k<4;k++)
       {
           picturesArray[i][k] = type_space[k] + (i+1).toString() + ".jpg";
       } 
    }
}

function initBorders()
{
   var left_side_pictures = $("#body_rightpart").offset().left;
   var top_side_picture = $("#body_rightpart").offset().top;

   for(var i=0;i<5;i++)
   {
	   if(i==0)
	   {
               pictures_borders[i] = left_side_pictures;
	   }
	   else
	   {
               pictures_borders[i] = pictures_borders[i-1] + 150;
	   }
   }
   vertical_border = top_side_picture + 120;
}
/*function init_display()
     {
	 document.getElementById("displayPictures").style.display = "none";
         document.getElementById("link_img1").style.display = "none";
         document.getElementById("link_img2").style.display = "none";
         document.getElementById("link_img3").style.display = "none";
         document.getElementById("link_img4").style.display = "none";
         document.getElementById("link_img5").style.display = "none";
         document.getElementById("link_img6").style.display = "none";
         document.getElementById("link_img7").style.display = "none";
         document.getElementById("link_img8").style.display = "none";	 
         current_id_index = 20;
         
         initPicturesArray();
     }*/
/*     function display_link(event)
     {
//         alert("mouse over")
	 var event_get = event||window.event;	 
	var elementid = event_get.target.id;
//	elementid = ;event_get.srcElement.id || 

	alert(event_get);
        
	var id_index = find_id_index(elementid)
	var eleIdDisplay;
	if(id_index!=-1)
	{
            if(current_id_index!=id_index)
	    {
               eleIdDisplay = DisplayIDArray[id_index];
	       current_Element = document.getElementById(eleIdDisplay); 
               current_Element.style.display="";
               current_id_index = id_index; 
	    }
	    else
	    {
                 current_Element.style.display="";
	    }
	    

	}
	

//	alert(elementid); 
//	 var ele = document.getElementById("link_img1");
//	 alert(ele.style.display);
//	     ele.style.visibility = 'visible';

	    // alert("mouse over");
    
     }
     function hide_link()
     {
//	 alert("mouse out");
	 var event_get = event||window.event;
	
	 var elementid = event_get.srcElement.id; 
         elementid = event_get.target.id;

	var id_index = find_id_index(elementid)
	var eleIdDisplay;
	if(id_index!=-1)
	{
            //alert(id_index);
	   // if(current_id_index==id_index)
	  //  {
              //current_id_index = id_index;
	      eleIdDisplay = DisplayIDArray[id_index];
              document.getElementById(eleIdDisplay).style.display="none";
	  //  }

	}

   //     document.getElementById(elementid).style.visibility = 'hidden';
     }
*/
function find_id_index(eleid)
{
    for(var i=0;i<8;i++)
    {
	if(TriggerIDArray[i] == eleid)
	    return i;
    }
    if(i==8)
	return -1;
}

function find_index(positionX,PositionY)
{
	var ret = -1;
   for(var i=0;i<4;i++)
   {
      if((pictures_borders[i]<=positionX)&&(pictures_borders[i+1]>positionX))
      {
	      ret = i;
	      break;
      }
   }
   if(i==4)
   {
	   ret = -1;
   }
   else
   {
       if(PositionY>vertical_border)
       {
          ret = ret+4;
       }
   }
   return ret;
}

/*
function showPopUp(event)
{
 //var event_get = event||window.event;	 
   event.preventDefault();
   var elementid = event.srcElement.id;
        elementid = event.target.id;
   var id_index = find_id_index(elementid)
  
  var show_picture = document.getElementById("displayPictures");
      show_picture.style.display = "";

      show_picture.style.backgound=url(picturesArray[id_index][0]);
      
      picture_index = 0;
}

function closePictureShow(event)
{
  // alert("clicked");
   event.preventDefault();
	document.getElementById("displayPictures").style.display = "none";
	picture_index = 0;
}
*/

$(document).ready(
		
function(){
	var pictureDisplayIndex = 0;
//	alert("document ready");
	$("#displayPictures").css("display","none");
	$(".img_lable a").css("display","none");
        initPicturesArray();
        initBorders();
	//alert(picturesArray[7][0]+picturesArray[7][1]+picturesArray[7][2]+picturesArray[7][3]);
	//alert(pictures_borders[0] + " "+ pictures_borders[1]+" "+ pictures_borders[2]+ " "+pictures_borders[3]);
        $(".img_lable").mouseover(
        function (event) {
		     // alert("mouseenter " + event.target.children[0]);
		      $(event.target.children[0]).css("display","");
		      
	            }
		                  );
	$(".img_lable").mouseout(
        function (event) {
		      //alert("mouseout " + event.target);
		      $(event.target.children[0]).css("display","none");
		      
	            }
		                  );

     	$(".img_lable").click(
        function (event) {
		      //alert("click " + event.target);
		      event.preventDefault();
		      event.stopPropagation();
		      
	              pictureDisplayIndex = 0;
	              pictureArrayIndex =  find_id_index(event.target.id);
                   //   alert("event_target: " + event.target.id + "index found " + pictureArrayIndex);
		      if(pictureArrayIndex!=-1)
	              {
		         $("#displayPictures").css("display","");
	                 //alert("array index " + pictureArrayIndex);
                         $("#displayPictures").css("background","url("+picturesArray[pictureArrayIndex][0]+")");
		         // alert(pictureArrayIndex);
		         $("#displayPictures p").text(text_display[0]);
	             }
	             else
		     {
		         pictureArrayIndex = find_index(event.pageX,event.pageY);	     			 
                       //  alert("index found: "+pictureArrayIndex);
			// alert("eventpoint:("+event.pageX+","+event.pageY+") X3"+ pictures_borders[3]);
                         $("#displayPictures").css("display","");
	                 //alert("array index " + pictureArrayIndex);
                         $("#displayPictures").css("background","url("+picturesArray[pictureArrayIndex][0]+")");
		         // alert(pictureArrayIndex);
		         $("#displayPictures p").text(text_display[0]);
		     }
	            }
		             );

	$("#exit_img").click(
        function (event) {
		     // alert(" func exit img click " + event.target);
		      event.preventDefault();
		      event.stopPropagation();
		      $("#displayPictures").css("display","none");
		      pictureArrayIndex=0;
		      $("#displayPictures p").text(text_display[0]);
	            }
		             );
	
         }
             );
	
