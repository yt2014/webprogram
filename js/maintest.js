
var countFlash = 0;

var flagFlash = 0;

var arColors = new Array("red","blue","blue","yellow","gray","white");

function firstFlash(){

 //   document.getElementById("nowDiv").innerHTML = now; //div的html是now这个字符串 
    if(flagFlash==1)
    {
	//alert("flash");
        $("#flash_area").css("background-color",arColors[countFlash]);
        countFlash = countFlash + 1;
        if(countFlash==6)
	{
            countFlash = 0;
	}	
    }
    setTimeout("firstFlash()",2000); //设置过1000毫秒就是1秒，调用show方法
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


 

