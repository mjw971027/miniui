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
        this.cbbBaoxian = mini.get("cbbBaoxian");
        this.cbbCaseNo = mini.get("cbbCaseNo");
        this.cbbMianpei = mini.get("cbbMianpei");
        this.dateAccidentOut = mini.get("dateAccidentOut");
        this.txtHesuanNo = mini.get("txtHesuanNo");
        this.txtCanZhi = mini.get("txtCanZhi");
        this.txtMianPei = mini.get("txtMianPei");
        this.txtPeiKuan = mini.get("txtPeiKuan");
        this.txtBizhong = mini.get("txtBizhong");
        this.txtBaoAn = mini.get("txtBaoAn");
        this.datePeifu = mini.get("datePeifu");

        this.btnClose = mini.get("btnClose");
    },
    setDate(date) {
        var pid = requestParams.pid;
        mini.ajax(
            {
                url: "../DataDetail",
                type: "get",
                data: {pid: pid},
                success: function (data) {

                }
            }
        )
    },
    dataBind() {

    },

    eventBind() {

    },
    judge(str) {
        if (typeof str == "undefined" || str == null || str == "") {
            return true;
        } else {
            return false;
        }
    },
}