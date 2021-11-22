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
        this.txtOther = mini.get("txtOther")
        this.auditdatagrid = mini.get("auditdatagrid");
        this.radioOpinion = mini.get("radioOpinion");
        this.txtOPinionDes = mini.get("txtOPinionDes");
        this.btnSave = mini.get("btnSave");
        this.btnClose = mini.get("btnClose");
    },
    setDate(date) {

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