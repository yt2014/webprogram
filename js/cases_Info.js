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
       var disc = "ʵ��ͼ" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray[i] = picinfo_one;
            	    
    }
    
    casesInfo[0] = new caseInfo(3,picsArray,"fandong/tangxiZuopin/ZhongjiangShoulouBu/","�н���¥��");

    var picsArray1 = new Array();
    for(i=0;i<3;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "ʵ��ͼ" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray1[i] = picinfo_one;
            	    
    }
    
    casesInfo[1] = new caseInfo(3,picsArray1,"fandong/tangxiZuopin/ZhongliangXiangyun/","��������");


    var picsArray2 = new Array();
    for(i=0;i<4;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "ʵ��ͼ" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray2[i] = picinfo_one;
            	    
    }
    
    casesInfo[2] = new caseInfo(4,picsArray2,"fandong/tangxiZuopin/Naichadian/","�̲��");

    var picsArray3 = new Array();
    for(i=0;i<6;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "ʵ��ͼ" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray3[i] = picinfo_one;
            	    
    }
    
    casesInfo[3] = new caseInfo(6,picsArray3,"fandong/tangxiZuopin/EerduosiJiuba/","������˹�ư�");
    //picsArray.length = 0;
    //
    var picsArray4 = new Array();
    for(i=0;i<8;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "ʵ��ͼ" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray4[i] = picinfo_one;
            	    
    }
    casesInfo[4] = new caseInfo(8,picsArray4,"fandong/tangxiZuopin/HangZhouMiu/","����MIUMIU�ư�");

    var picsArray5 = new Array();
    for(i=0;i<4;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "ʵ��ͼ" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray5[i] = picinfo_one;
            	    
    }
    casesInfo[5] = new caseInfo(4,picsArray5,"fandong/tangxiZuopin/LangZhongShouloubu/","������¥��");

    var picsArray6 = new Array();
    for(i=0;i<2;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "ʵ��ͼ" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray6[i] = picinfo_one;
            	    
    }
    casesInfo[6] = new caseInfo(2,picsArray6,"fandong/fandongZuopin/baoli198Baihe/","����198�ٺϿ�");

    var picsArray7 = new Array();
    for(i=0;i<2;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "ʵ��ͼ" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray7[i] = picinfo_one;
            	    
    }
    casesInfo[7] = new caseInfo(2,picsArray7,"fandong/fandongZuopin/baoli198jianou/","����198�ٺϿ���ŷ���");

    var picsArray8 = new Array();
    for(i=0;i<12;i++)
    {
	    
       var picname = (i+1).toString() + ".JPG";
       var disc = "ʵ��ͼ" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray8[i] = picinfo_one;
            	    
    }
    casesInfo[8] = new caseInfo(12,picsArray8,"fandong/fandongZuopin/baoli198meishi/","����198��ʽ���");


    var picsArray9 = new Array();
    for(i=0;i<10;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "ʵ��ͼ" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray9[i] = picinfo_one;
            	    
    }
    casesInfo[9] = new caseInfo(10,picsArray9,"fandong/fandongZuopin/baolidingxiangmeishi/","����198���㿤��ʽ���");

    var picsArray10 = new Array();
    for(i=0;i<15;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "ʵ��ͼ" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray10[i] = picinfo_one;
            	    
    }
    casesInfo[10] = new caseInfo(15,picsArray10,"fandong/fandongZuopin/baolidingxianghunda/","����198���㿤����ʽ���");

    var picsArray11 = new Array();
    for(i=0;i<4;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "ʵ��ͼ" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray11[i] = picinfo_one;
            	    
    }
    casesInfo[11] = new caseInfo(4,picsArray11,"fandong/fandongZuopin/beiouzhishiyu/","��ŷ֪ʶ��");

    var picsArray12 = new Array();
    for(i=0;i<2;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "ʵ��ͼ" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray12[i] = picinfo_one;
            	    
    }
    casesInfo[12] = new caseInfo(2,picsArray12,"fandong/fandongZuopin/dizhonghai/","���к�����ʲ���");

    var picsArray13 = new Array();
    for(i=0;i<2;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "ʵ��ͼ" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray13[i] = picinfo_one;
            	    
    }
    casesInfo[13] = new caseInfo(2,picsArray13,"fandong/fandongZuopin/huarunfenghuang/","�����˳�");

    var picsArray14 = new Array();
    for(i=0;i<6;i++)
    {
	    
       var picname = (i+1).toString() + ".JPG";
       var disc = "ʵ��ͼ" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray14[i] = picinfo_one;
            	    
    }
    casesInfo[14] = new caseInfo(6,picsArray14,"fandong/fandongZuopin/xiandaigang/","�ִ���ʽʵ��");

    var picsArray15 = new Array();
    for(i=0;i<3;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "ʵ��ͼ" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray15[i] = picinfo_one;
            	    
    }
    casesInfo[15] = new caseInfo(3,picsArray15,"fandong/xiaochunZuopin/baigedaoshang/","�׸뵺����լ");

    var picsArray16 = new Array();
    for(i=0;i<5;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "ʵ��ͼ" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray16[i] = picinfo_one;
            	    
    }
    casesInfo[16] = new caseInfo(5,picsArray16,"fandong/xiaochunZuopin/baiweitouzi/","��άͶ�ʹ�˾");

    var picsArray17 = new Array();
    for(i=0;i<6;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "ʵ��ͼ" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray17[i] = picinfo_one;
            	    
    }
    casesInfo[17] = new caseInfo(6,picsArray17,"fandong/xiaochunZuopin/binjiangwaitan/","������̲��¥��");

    var picsArray18 = new Array();
    for(i=0;i<2;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "ʵ��ͼ" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray18[i] = picinfo_one;
            	    
    }
    casesInfo[18] = new caseInfo(2,picsArray18,"fandong/xiaochunZuopin/chalou/","��¥");

}


function initDesigners()
{
	designerInfoArray[0] = new designerInfo("fandong/tangxiZuopin/",6);
	designerInfoArray[1] = new designerInfo("fandong/fandongZuopin/",9);
	designerInfoArray[2] = new designerInfo("fandong/xiaochunZuopin/",4);
}
