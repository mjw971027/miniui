$(document).ready(PageInit);


function PageInit() {
    mini.parse();
    page.init();
    page.dataBind();
    page.eventBind();

}

var page = {
    init: function () {
        this.tool = new PageTool();
        this.ip = this.tool.getSiteIp();
        this.txtBillNum = mini.get("txtBillNum");
        this.txtComp = mini.get("txtComp");
        this.txtDept = mini.get("txtDept");
        this.txtApply = mini.get("txtApply");
        this.txtProj = mini.get("txtProj");
        this.dateRepIn = mini.get("dateRepIn");
        this.dateAccident = mini.get("dateAccident");
        this.txtLossAmunt = mini.get("txtLossAmunt");
        this.txtContact = mini.get("txtContact");
        this.txtContactNum = mini.get("txtContactNum");
        this.txtBaoxian = mini.get("txtBaoxian");
        this.txtAccidentType = mini.get("txtAccidentType");
        this.txtAccidentName = mini.get("txtAccidentName");
        this.txtDes = mini.get("txtDes");
        this.txtIntroduction = mini.get("txtIntroduction");
        this.auditdatagrid = mini.get("auditdatagrid");
        this.radioOpinion = mini.get("radioOpinion");
        this.txtOPinionDes = mini.get("txtOPinionDes");
        this.btnSave = mini.get("btnSave");
        this.btnClose = mini.get("btnClose");
    },
    dataBind() {

    },
    setDate(date) {

    },
    eventBind() {
        this.btnSave.on("click", this.tool.myBind(this.savePdf, page));

    },
    judge(str) {
        if (typeof str == "undefined" || str == null || str == "") {
            return true;
        } else {
            return false;
        }
    },
    savePdf(){
        var isDo = confirm("确定导出pdf页面");
        if (!isDo) { return; }
        var target = document.getElementsByClassName("main")[0];
        target.style.background = "#FFFFFF";

        html2canvas(target, {
            onrendered: function (canvas) {
                var contentWidth = canvas.width;
                var contentHeight = canvas.height;

                //一页pdf显示html页面生成的canvas高度;
                var pageHeight = contentWidth / 592.28 * 841.89;
                //未生成pdf的html页面高度
                var leftHeight = contentHeight;
                //页面偏移
                var position = 0;
                //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
                var imgWidth = 595.28;
                var imgHeight = 592.28 / contentWidth * contentHeight;

                var pageData = canvas.toDataURL('image/jpeg', 1.0);

                var pdf = new jsPDF('', 'pt', 'a4');

                //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
                //当内容未超过pdf一页显示的范围，无需分页
                if (leftHeight < pageHeight) {
                    pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
                } else {
                    while (leftHeight > 0) {
                        pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                        leftHeight -= pageHeight;
                        position -= 841.89;
                        //避免添加空白页
                        if (leftHeight > 0) {
                            pdf.addPage();
                        }
                    }
                }
                pdf.save("测试.pdf");
            }
        })
    }
}


