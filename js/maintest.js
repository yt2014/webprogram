
var countFlash = 0;

var flagFlash = 0;

var arColors = new Array("red","blue","blue","yellow","gray","white");
var arbg = new Array("url(\"pictures/garden.jpg\")","url(\"pictures/garden1.jpg\")","url(\"pictures/keting10.jpg\")","url(\"pictures/cateen.jpg\")");
var arimgs = new Array("#img1","#img2","#img3","#img4");

var hoverd = 0;

function firstFlash(){

 //   document.getElementById("nowDiv").innerHTML = now; //div的html是now这个字符串 
    if(flagFlash==1)
    {
//	alert("flash "+arbg[countFlash]);
        
          // $("#flash_area").css("background",arbg[countFlash]);
	 //  $("#inFlashArea").fadeOut(1000);
           $(arimgs[countFlash]).fadeOut();

	  // alert("show img"+((countFlash+1)%4+1).toString()+" now");
	   var k=0;
	   var i=0;
           for(i=0;i<4;i++)
	   {
              k=i+countFlash+1;
	      if(k>=4)
	      {
		  k=k-4;
	      }
	     // alert("img"+(k+1).toString() + " " +(-1-i).toString());
	      $(arimgs[k]).css("z-index",(-1-i).toString());
	     // if(i==3)
	     // {
               //    $(arimgs[k]).fadeIn();
	     // }
	   }   
           $(arimgs[countFlash]).fadeIn();	   

           countFlash = countFlash + 1;
           if(countFlash==4)
           {
              countFlash = 0;
	   }	
	  // $("#inFlashArea").css("background",arbg[countFlash]);
	   //alert("after fade out");
	
       
    }
    setTimeout("firstFlash()",6000); //设置过1000毫秒就是1秒，调用show方法
}

function Marquee(){
	if($("#img_team").scrollLeft() >= 1620)
		$("#img_team").scrollLeft(0);
	else{
		if(hoverd==0)
		{
		   $("#img_team").scrollLeft($("#img_team").scrollLeft()+1);
		}
	}

        setTimeout("Marquee()",10); //设置过1000毫秒就是1秒，调用show方法
}

function linkMouseOver()
{
	//alert($(this).attr("class"));
	$(this).find(".div_filter").css("display","");
}

function linkMouseOut()
{
	$(this).find(".div_filter").css("display","none");
}

$(document).ready(function(){
	
	//alert("ready height is "+$(document).innerHeight()*0.05);
	$("#div_top").height(80);
//	$("#div_body").height($(document).innerHeight()*0.8);
//	$("#div_buttom").height($(document).innerHeight()*0.1);
	$("body").width($(document).innerWidth());
	//$("#img4").fadeOut();
        /*in aboutus page, link clicked events in the left*/
	countFlash=0;
	flagFlash=1;
        $("#div_pics2").html($("#div_pics1").html());

        $("body").load(firstFlash());

	 Marquee();
	$("#flash_area").mouseover(function(){
	
	     flagFlash = 0;
	});

	$("#flash_area").mouseout(function(){
	
	     flagFlash = 1;
	});

       $(".desiner").mouseover(
		       function(event){
			      // alert($(event.target).attr("class"));
                               hoverd = 1;
		       }
		       );

       $(".desiner").mouseout(
		       function(event){
			      // alert($(event.target).attr("class"));
                               hoverd = 0;
		       }
		       );
       



	// $(".svg_show").mouseover(
        //function () {
	//	      alert("mouseenter ";
		      //$(event.target.children[0]).css("display","");
		      
	  //          });

        $(".svg_show").mouseover(function(event){
	
	     //flagFlash = 1;
	     //alert("mouseenter"+event.target);

	     $(event.target).siblings("text").css("visibility","visible");
	});

	
        $(".svg_show").mouseout(function(event){
	
	     //flagFlash = 1;
	   //  alert("mouseenter"+event.target);

	     $(event.target).siblings("text").css("visibility","hidden");
	});

        $(".div_filter").css("display","none");
	$(".link_show").bind("mouseover",linkMouseOver);  
        $(".link_show").bind("mouseout",linkMouseOut);
});


 

