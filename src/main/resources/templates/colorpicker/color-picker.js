/*
┌─ 深度学习(js)颜色选择器  ────────────────────┐
│  colorPicker
│  感谢你使用 深度学习(js)颜色选择器
│  本代码完全公开和免费，你可以任意复制、传播、修改和使用，
│  但不得公开发表代码 不得用做商业用途，不得向其他使用者收费。
│  使用时，请保留此段信息，谢谢配合
│                        作者：吕海鹏      2008-5-29
└──────────────────  www.DeepTeach.com  ───┘
【安装使用】
1、先将js文件拷贝到您网站的目录，不需要做任何修改 范例如：根目录下位置：/js/Deepteach_colorPicker.js
2、在需要调用html标签 id="colorPicker",范例如：<input  type="text"  id="colorPicker" />
3、在调用html标签的后边调用Deepteach_colorPicker.js，范例如：<script type="text/javascript" src="js/Deepteach_colorPicker.js"></script>
*/
//div层
document.write("<div  id='colorPopup'  style=' position:absolute; z-index:100;  display:none; '></div>  ");
var oColorPopup = document.getElementById("colorPopup");
var oColorPicker = document.getElementById("colorPicker");

//在div层内显示颜色选择器函数(main)
function showColorPicker() {
    //判断选择器是否显示
    if (oColorPopup.style.display == "none") {
        //获取鼠标的坐标值 for  IE、Firefox
        window.document.onclick = function (evt) {
            //evt=evt || window.event;
            evt = evt ? evt : (window.event ? window.event : null);
            oColorPopup.style.left = evt.clientX + "px";
            oColorPopup.style.top = evt.clientY + "px";
            window.document.onclick = null;
        }
        oColorPopup.style.display = "block";
    } else {
        oColorPopup.style.display = "none";
    }
    initColor();
}

// 初始化颜色选择器函数
function initColor() {
    var baseColorHex = new Array('00', '33', '66', '99', 'CC', 'FF');     //256色的颜色是用00,33,66,99,cc,ff组成
    var SpColorHex = new Array('000000', '333333', '666666', '999999', 'cccccc', 'FFFFFF', 'FF0000', '00FF00', '0000FF', 'FFFF00', '00FFFF', 'FF00FF');
    var colorRGB = "";
    var sColorPopup;
    sColorPopup = "<table  width='260'  border='1'  cellPadding=1  cellSpacing=0   bordercolordark='#ffffff'  bordercolorlight='#000000'  bgcolor='#cccccc'  title='深度学习(js)颜色选择器' ><tr><td>";
    sColorPopup += "<input   id='colorDis'  style='width:50px;border:solid 1px #000000;background-color:#ffff00;margin-left:3px' disabled title='当前颜色' />";
    sColorPopup += " <input id='colorHexDis'  style='width:70px;border:inset 1px;font-family:Arial;' type='text' value='#FFFF00' readonly title='当前颜色16进制值'/>";
    sColorPopup += "<input  type='button' style='border:outset 1px;font-family:Arial;font-size:12px;line-height:12px;width:15px;height:15px;margin-left:105px;margin-bottom:3px;cursor:pointer;' value='X' onclick='doClose()' title='关闭颜色选择器' />";
    sColorPopup += "</td></tr><tr><td>";
    sColorPopup += "<table  border='0' cellpadding='0' cellspacing='0' align='center' ><tr><td bgcolor='#000000' width='30'>";//1行2列
    //竖 start
    sColorPopup += "<table  border='0' cellpadding='0'  cellspacing='1' bgcolor='#000000' align='center' >";        //第1列
    for (i = 0; i < 12; i++) {
        sColorPopup += "<tr  height='12'>";
        colorRGB = SpColorHex[i];
        sColorPopup += "<td width='12' onmouseover='currentColor(this.bgColor)' onclick='clickColor(this.bgColor)'  bgColor='" + colorRGB + "' style='cursor:pointer;' title='点击选择颜色" + colorRGB + "'></td>";
        sColorPopup += "</tr>";
    }
    sColorPopup += "</table>";
    //竖 end
    sColorPopup += "</td><td>";
    sColorPopup += "<table  border='0'    cellpadding='0'    cellspacing='1'    bgcolor=#000000 align='center' >";    //第2列
    for (n = 0; n < 2; n++) {    //循环2块
        for (i = 0; i < 6; i++) {  //每块6行
            sColorPopup += "<tr    height=12>";
            for (j = 0 + 3 * n; j < 3 + 3 * n; j++) {
                for (k = 0; k < 6; k++) {
                    colorRGB = baseColorHex[j] + baseColorHex[k] + baseColorHex[i];
                    sColorPopup += "<td  width='12' onmouseover='currentColor(this.bgColor)' onclick='clickColor(this.bgColor)'  bgColor='" + colorRGB + "' style='cursor:pointer;'  title='点击选择颜色" + colorRGB + "'></td>";
                }
            }
            sColorPopup += "</tr>";
        }
    }
    sColorPopup += "</table>";
    sColorPopup += "</td></tr></table>";
    sColorPopup += "</td></tr></table>";
    oColorPopup.innerHTML = sColorPopup;
}

//当前颜色块函数
function currentColor(colorStr) {
    document.getElementById("colorDis").style.backgroundColor = colorStr;
    document.getElementById("colorHexDis").value = colorStr.toUpperCase();    //toUpperCase()方法将颜色值大写
}

//点击选择颜色函数
function clickColor(colorStr) {
    oColorPicker.style.backgroundColor = colorStr;
    oColorPicker.value = colorStr;
    oColorPopup.style.display = "none";
}

//关闭颜色选择器函数
function doClose() {
    oColorPopup.style.display = "none";
}

//oColorPicker对象 绑定事件处理函数
oColorPicker.onclick = showColorPicker;