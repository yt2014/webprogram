
var TriggerIDArray = new Array("img_1","img_2","img_3","img_4","img_5","img_6","img_7","img_8");//mouse trigger id array
var DisplayIDArray = new Array("link_img1","link_img2","link_img3","link_img4","link_img5","link_img6","link_img7","link_img8");

var current_id_index = 20;


function init_display()
     {
         document.getElementById("link_img1").style.display = "none";
         document.getElementById("link_img2").style.display = "none";
         document.getElementById("link_img3").style.display = "none";
         document.getElementById("link_img4").style.display = "none";
         document.getElementById("link_img5").style.display = "none";
         document.getElementById("link_img6").style.display = "none";
         document.getElementById("link_img7").style.display = "none";
         document.getElementById("link_img8").style.display = "none";
         current_id_index = 20;
     }
     function display_link()
     {
       //alert("mouse over");
	 var event_get = event||window.event;	 
	var elementid = event_get.srcElement.id;
        
	var id_index = find_id_index(elementid)
	var eleIdDisplay;
	if(id_index!=-1)
	{
           // if(current_id_index!=id_index)
	  //  {
               eleIdDisplay = DisplayIDArray[id_index];
               document.getElementById(eleIdDisplay).style.display="";
           //    current_id_index = id_index; 
	  //  }

	}
	

/*	alert(elementid); 
	 var ele = document.getElementById("link_img1");
	 alert(ele.style.display);
	     ele.style.visibility = 'visible';
*/	
     }
     function hide_link()
     {
//	 alert("mouse out");
	 var event_get = event||window.event;
	var elementid = event_get.srcElement.id; 

	var id_index = find_id_index(elementid)
	var eleIdDisplay;
	if(id_index!=-1)
	{
            //alert(id_index);
	   // if(current_id_index==id_index)
	  //  {
	      eleIdDisplay = DisplayIDArray[id_index];
              document.getElementById(eleIdDisplay).style.display="none";
	  //  }

	}

   //     document.getElementById(elementid).style.visibility = 'hidden';
     }

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
