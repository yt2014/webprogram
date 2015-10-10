var casesInfo = new Array();


var currentCaseIndex = -1;
var currentPictureIndex = 0;

var designerInfoArray = new Array();

var designerPositions = new Array("设计总监","首席设计师","首席设计师");
var designerNames = new Array("范东","唐希","肖春");
var designerZuoPin = new Array(
    "保利198、长城半岛.城邦、三利宅院、蜀郡、华侨城、华润.翡翠城，华润.凤凰城、北欧知识城、眉山九和商场、丹巴海鲜酒楼。。。",
	"中江售楼部、中粮祥云、奶茶店、鄂尔多斯酒吧、杭州MIUMIU酒吧、阆中售楼部",
	"特拉克斯甲级写字楼、青羊工业发展园国投总部、西郡英华售楼部及样板房、罗曼海鲜自助餐厅、明宇国际社区售楼部、圣源置业阆城一品样板房、华侨城四期高层样板房、华侨城五期公共空间"
);

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

    var picsArray10 = new Array();
    for(i=0;i<15;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray10[i] = picinfo_one;
            	    
    }
    casesInfo[10] = new caseInfo(15,picsArray10,"fandong/fandongZuopin/baolidingxianghunda/","保利198丁香郡新中式混搭");

    var picsArray11 = new Array();
    for(i=0;i<4;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray11[i] = picinfo_one;
            	    
    }
    casesInfo[11] = new caseInfo(4,picsArray11,"fandong/fandongZuopin/beiouzhishiyu/","北欧知识域");

    var picsArray12 = new Array();
    for(i=0;i<2;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray12[i] = picinfo_one;
            	    
    }
    casesInfo[12] = new caseInfo(2,picsArray12,"fandong/fandongZuopin/dizhonghai/","地中海风格海鲜餐厅");

    var picsArray13 = new Array();
    for(i=0;i<2;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray13[i] = picinfo_one;
            	    
    }
    casesInfo[13] = new caseInfo(2,picsArray13,"fandong/fandongZuopin/huarunfenghuang/","华润凤凰城");

    var picsArray14 = new Array();
    for(i=0;i<6;i++)
    {
	    
       var picname = (i+1).toString() + ".JPG";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray14[i] = picinfo_one;
            	    
    }
    casesInfo[14] = new caseInfo(6,picsArray14,"fandong/fandongZuopin/xiandaigang/","现代港式实景");

    var picsArray15 = new Array();
    for(i=0;i<3;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray15[i] = picinfo_one;
            	    
    }
    casesInfo[15] = new caseInfo(3,picsArray15,"fandong/xiaochunZuopin/baigedaoshang/","白鸽岛尚张宅");

    var picsArray16 = new Array();
    for(i=0;i<5;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray16[i] = picinfo_one;
            	    
    }
    casesInfo[16] = new caseInfo(5,picsArray16,"fandong/xiaochunZuopin/baiweitouzi/","百维投资公司");

    var picsArray17 = new Array();
    for(i=0;i<6;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray17[i] = picinfo_one;
            	    
    }
    casesInfo[17] = new caseInfo(6,picsArray17,"fandong/xiaochunZuopin/binjiangwaitan/","滨江外滩售楼部");

    var picsArray18 = new Array();
    for(i=0;i<2;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray18[i] = picinfo_one;
            	    
    }
    casesInfo[18] = new caseInfo(2,picsArray18,"fandong/xiaochunZuopin/chalou/","茶楼");
	
	var picsArray19 = new Array();
    for(i=0;i<3;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray19[i] = picinfo_one;
            	    
    }
    casesInfo[19] = new caseInfo(3,picsArray19,"fandong/xiaochunZuopin/yufeng/","誉峰");
	
	var picsArray20 = new Array();
    for(i=0;i<12;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray20[i] = picinfo_one;
            	    
    }
    casesInfo[20] = new caseInfo(12,picsArray20,"fandong/xiaochunZuopin/ruanjianyuan/","软件园外籍人别墅");
	
	var picsArray21 = new Array();
    for(i=0;i<4;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray21[i] = picinfo_one;
            	    
    }
    casesInfo[21] = new caseInfo(4,picsArray21,"fandong/xiaochunZuopin/suining/","遂宁商业银行");
	
	var picsArray22 = new Array();
    for(i=0;i<2;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray22[i] = picinfo_one;
            	    
    }
    casesInfo[22] = new caseInfo(2,picsArray22,"fandong/xiaochunZuopin/wangzhai/","王宅");
	
	var picsArray23 = new Array();
    for(i=0;i<4;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray23[i] = picinfo_one;
            	    
    }
    casesInfo[23] = new caseInfo(4,picsArray23,"fandong/xiaochunZuopin/modernZhongshiHuisuo/","现代中式私人会所");
	
	var picsArray24 = new Array();
    for(i=0;i<4;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray24[i] = picinfo_one;
            	    
    }
    casesInfo[24] = new caseInfo(4,picsArray24,"fandong/xiaochunZuopin/DianliZhanting/","电力展厅");
	
	var picsArray25 = new Array();
    for(i=0;i<12;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray25[i] = picinfo_one;
            	    
    }
    casesInfo[25] = new caseInfo(12,picsArray25,"fandong/xiaochunZuopin/gesanghua/","格桑花精装公寓");
	
	var picsArray26 = new Array();
    for(i=0;i<3;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray26[i] = picinfo_one;
            	    
    }
    casesInfo[26] = new caseInfo(3,picsArray26,"fandong/xiaochunZuopin/wuHai/","武海");
	
	var picsArray27 = new Array();
    for(i=0;i<2;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray27[i] = picinfo_one;
            	    
    }
    casesInfo[27] = new caseInfo(2,picsArray27,"fandong/xiaochunZuopin/yangZhai/","杨宅");
	
	var picsArray28 = new Array();
    for(i=0;i<3;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray28[i] = picinfo_one;
            	    
    }
    casesInfo[28] = new caseInfo(3,picsArray28,"fandong/xiaochunZuopin/yilongGuoyi/","意龙国际售楼部");
	
	var picsArray29 = new Array();
    for(i=0;i<5;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray29[i] = picinfo_one;
            	    
    }
    casesInfo[29] = new caseInfo(5,picsArray29,"fandong/xiaochunZuopin/PengZhouLiDao/","彭州丽岛公区");
	
	var picsArray30 = new Array();
    for(i=0;i<6;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray30[i] = picinfo_one;
            	    
    }
    casesInfo[30] = new caseInfo(6,picsArray30,"fandong/xiaochunZuopin/PengShanLiZhai/","彭山李宅");
	
	var picsArray31 = new Array();
    for(i=0;i<8;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray31[i] = picinfo_one;
            	    
    }
    casesInfo[31] = new caseInfo(8,picsArray31,"fandong/xiaochunZuopin/GuoMaoDaJiuDian/","国贸大酒店");
	
	var picsArray32 = new Array();
    for(i=0;i<3;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray32[i] = picinfo_one;
            	    
    }
    casesInfo[32] = new caseInfo(3,picsArray32,"fandong/xiaochunZuopin/TangZhai/","唐宅");
	
	var picsArray33 = new Array();
    for(i=0;i<2;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray33[i] = picinfo_one;
            	    
    }
    casesInfo[33] = new caseInfo(2,picsArray33,"fandong/xiaochunZuopin/HuaqiaoChengLiZhai/","华侨城李宅");

	var picsArray34 = new Array();
    for(i=0;i<3;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray34[i] = picinfo_one;
            	    
    }
    casesInfo[34] = new caseInfo(3,picsArray34,"fandong/xiaochunZuopin/HuaqiaochengZhigong/","华侨城职工宿舍");
	
	var picsArray35 = new Array();
    for(i=0;i<3;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray35[i] = picinfo_one;
            	    
    }
    casesInfo[35] = new caseInfo(3,picsArray35,"fandong/xiaochunZuopin/HuayuYinyue/","华宇音乐花园 陈宅");
	
	var picsArray36 = new Array();
    for(i=0;i<12;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray36[i] = picinfo_one;
            	    
    }
    casesInfo[36] = new caseInfo(12,picsArray36,"fandong/xiaochunZuopin/YirongTouzi/","亿荣投资");
	
	var picsArray37 = new Array();
    for(i=0;i<4;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray37[i] = picinfo_one;
            	    
    }
    casesInfo[37] = new caseInfo(4,picsArray37,"fandong/xiaochunZuopin/ZhongLiangXiangyun/","中粮祥云公区样板房");
	
	var picsArray38 = new Array();
    for(i=0;i<18;i++)
    {
	    
       var picname = (i+1).toString() + ".jpg";
       var disc = "实景图" + (i+1).toString(); 
       picinfo_one = new picInfo(picname,disc);
       picsArray38[i] = picinfo_one;
            	    
    }
    casesInfo[38] = new caseInfo(18,picsArray38,"fandong/xiaochunZuopin/YangbanFang/","东岸样板房");
}


function initDesigners()
{
	designerInfoArray[0] = new designerInfo("fandong/tangxiZuopin/",6);
	designerInfoArray[1] = new designerInfo("fandong/fandongZuopin/",9);
	designerInfoArray[2] = new designerInfo("fandong/xiaochunZuopin/",24);
}
