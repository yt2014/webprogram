var casesInfo = new Array();


var currentCaseIndex = -1;
var currentPictureIndex = 0;

var desinerInfo = new Array(3,0,0);
/*number of cases for TangXi is 2*/
/*number of cases for XiaoChun is 0*/
/*number of cases for Fandong is 0*/
/*these values should be updated when new cases added*/

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

function caseInfo(num_pics,pics,pathname,caseDesp)
{
   this.num_pics = num_pics;
   this.pics = pics;
   this.pathname = pathname;
   this.caseDesp = caseDesp;
}

function picInfo(pic,descrip)
{
    this.pic = pic;
    this.descrip = descrip;
}


function initCasesInfo()
{
    var i=0;
    var picsArray = new Array();
    for(i=0;i<3;i++)
    {
	    
       var picname = "0"+(i+1).toString() + ".jpg";
       var disc = "Êµ¾°Í¼" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray[i] = picinfo_one;
            	    
    }
    
    casesInfo[0] = new caseInfo(3,picsArray,"fandong/tangxiZuopin/ZhongjiangShoulouBu/","ÖÐ½­ÊÛÂ¥²¿");

    var picsArray1 = new Array();
    for(i=0;i<3;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "Êµ¾°Í¼" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray1[i] = picinfo_one;
            	    
    }
    
    casesInfo[1] = new caseInfo(3,picsArray1,"fandong/tangxiZuopin/ZhongliangXiangyun/","ÖÐÁ¸ÏéÔÆ");


    var picsArray2 = new Array();
    for(i=0;i<4;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "Êµ¾°Í¼" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray2[i] = picinfo_one;
            	    
    }
    
    casesInfo[2] = new caseInfo(4,picsArray2,"fandong/tangxiZuopin/Naichadian/","ÄÌ²èµê");


    //picsArray.length = 0;

    
}
