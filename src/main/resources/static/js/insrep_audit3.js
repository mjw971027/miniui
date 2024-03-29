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
        var pid = requestParams.pid;
        mini.ajax(
            {
                url: "../DataDetail",
                type: "get",
                data: {pid: pid},
                success: function (data) {
                    // page.txtBillNum.setValue(data.);
                    // page.txtComp.setValue(data.);
                    // page.txtDept.setValue(data.);
                    // page.txtApply.setValue(data.);
                    // page.txtProj.setValue(data.);
                    // page.dateRepIn.setValue(data.);
                    // page.dateAccident.setValue(data.);
                    // page.txtLossAmunt.setValue(data.);
                    // page.txtContact.setValue(data.);
                    // page.txtContactNum.setValue(data.);
                    // page.txtBaoxian.setValue(data.);
                    // page.txtAccidentType.setValue(data.);
                    // page.txtAccidentName.setValue(data.);
                    // page.txtDes.setValue(data.);
                    // page.txtIntroduction.setValue(data.);
                    // page.cbbBaoxian.setValue(data.);
                    // page.cbbCaseNo.setValue(data.);
                    // page.cbbMianpei.setValue(data.);
                    // page.dateAccidentOut.setValue(data.);
                    //
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