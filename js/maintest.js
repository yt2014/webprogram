
var countFlash = 0;

var flagFlash = 0;

var arColors = new Array("red","blue","blue","yellow","gray","white");
var arbg = new Array("url(\"pictures/garden.jpg\")","url(\"pictures/garden1.jpg\")","url(\"pictures/keting10.jpg\")","url(\"pictures/cateen.jpg\")");

function firstFlash(){

 //   document.getElementById("nowDiv").innerHTML = now; //div��html��now����ַ��� 
    if(flagFlash==1)
    {
//	alert("flash "+arbg[countFlash]);
        if(countFlash%2==0)
	{
           $("#flash_area").css("background",arbg[countFlash]);
	   $("#inFlashArea").fadeOut(1000);
           countFlash = countFlash + 1;
           if(countFlash==4)
           {
              countFlash = 0;
	   }	
	   $("#inFlashArea").css("background",arbg[countFlash]);
	   //alert("after fade out");
	}
	else
	{
           $("#inFlashArea").fadeIn(1000);
           countFlash = countFlash + 1;
           if(countFlash==4)
           {
              countFlash = 0;
	   }	
	   $("#flash_area").css("background",arbg[countFlash]);

	  // alert("after fade in " + countFlash);
	    
	}
       
    }
    setTimeout("firstFlash()",6000); //���ù�1000�������1�룬����show����
}


$(document).ready(function(){
	
	//alert("ready height is "+$(document).innerHeight()*0.05);
	$("#div_top").height(80);
//	$("#div_body").height($(document).innerHeight()*0.8);
//	$("#div_buttom").height($(document).innerHeight()*0.1);
	$("body").width($(document).innerWidth());
        /*in aboutus page, link clicked events in the left*/
	countFlash=0;
	flagFlash=1;
        $("body").load(firstFlash());

	$("#flash_area").mouseover(function(){
	
	     flagFlash = 0;
	});

	$("#flash_area").mouseout(function(){
	
	     flagFlash = 1;
	});


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

       
});


 

