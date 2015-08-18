var casesInfo = new Array();


var currentCaseIndex = -1;
var currentPictureIndex = 0;

var designerInfoArray = new Array();

function designerInfo(pathfolder,numCases)
{
   this.pathfolder = pathfolder;
   this.numCases = numCases;
}
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
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray[i] = picinfo_one;
            	    
    }
    
    casesInfo[0] = new caseInfo(3,picsArray,"fandong/tangxiZuopin/ZhongjiangShoulouBu/","中江售楼部");

    var picsArray1 = new Array();
    for(i=0;i<3;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray1[i] = picinfo_one;
            	    
    }
    
    casesInfo[1] = new caseInfo(3,picsArray1,"fandong/tangxiZuopin/ZhongliangXiangyun/","中粮祥云");


    var picsArray2 = new Array();
    for(i=0;i<4;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray2[i] = picinfo_one;
            	    
    }
    
    casesInfo[2] = new caseInfo(4,picsArray2,"fandong/tangxiZuopin/Naichadian/","奶茶店");

    var picsArray3 = new Array();
    for(i=0;i<6;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray3[i] = picinfo_one;
            	    
    }
    
    casesInfo[3] = new caseInfo(6,picsArray3,"fandong/tangxiZuopin/EerduosiJiuba/","鄂尔多斯酒吧");
    //picsArray.length = 0;
    //
    var picsArray4 = new Array();
    for(i=0;i<8;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray4[i] = picinfo_one;
            	    
    }
    casesInfo[4] = new caseInfo(8,picsArray4,"fandong/tangxiZuopin/HangZhouMiu/","杭州MIUMIU酒吧");

    var picsArray5 = new Array();
    for(i=0;i<4;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray5[i] = picinfo_one;
            	    
    }
    casesInfo[5] = new caseInfo(4,picsArray5,"fandong/tangxiZuopin/LangZhongShouloubu/","阆中售楼部");

    var picsArray6 = new Array();
    for(i=0;i<2;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray6[i] = picinfo_one;
            	    
    }
    casesInfo[6] = new caseInfo(2,picsArray6,"fandong/fandongZuopin/baoli198Baihe/","保利198百合郡");

    var picsArray7 = new Array();
    for(i=0;i<2;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray7[i] = picinfo_one;
            	    
    }
    casesInfo[7] = new caseInfo(2,picsArray7,"fandong/fandongZuopin/baoli198jianou/","保利198百合郡简欧风格");

    var picsArray8 = new Array();
    for(i=0;i<12;i++)
    {
	    
       var picname = (i+1).toString() + ".JPG";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray8[i] = picinfo_one;
            	    
    }
    casesInfo[8] = new caseInfo(12,picsArray8,"fandong/fandongZuopin/baoli198meishi/","保利198美式乡村");


    var picsArray9 = new Array();
    for(i=0;i<10;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray9[i] = picinfo_one;
            	    
    }
    casesInfo[9] = new caseInfo(10,picsArray9,"fandong/fandongZuopin/baolidingxiangmeishi/","保利198丁香郡美式乡村");
}


function initDesigners()
{
	designerInfoArray[0] = new designerInfo("fandong/tangxiZuopin/",6);
	designerInfoArray[1] = new designerInfo("fandong/fandongZuopin/",4);
	designerInfoArray[2] = new designerInfo("fandong/xiaochunZuopin/",0);
}
