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
    dataBind() {
        this.pid="";
            $.ajax({
                url:page.ip+"/InsRep/getlist",
                data:{pid:pid},
                success:function (data){
                    page.txtBillNum = mini.setValue(data);
                    page.txtComp = mini.setValue(data);
                    page.txtDept = mini.setValue(data);
                    page.txtApply = mini.setValue(data);
                    page.txtProj = mini.setValue(data);
                    page.dateRepIn = mini.setValue(data);
                    page.dateAccident = mini.setValue(data);
                    page.txtLossAmunt = mini.setValue(data);
                    page.txtContact = mini.setValue(data);
                    page.txtContactNum = mini.setValue(data);
                    page.txtBaoxian = mini.setValue(data);
                    page.txtAccidentType = mini.setValue(data);
                    page.txtAccidentName = mini.setValue(data);
                    page.txtDes = mini.setValue(data);
                    page.txtIntroduction = mini.setValue(data);
                }
            })
    },
    setDate(date) {

    },
    eventBind() {
        this.btnSave.on("click", this.tool.myBind(this.save, page));
        this.btnClose.on("click", this.tool.myBind(this.closeWindow, page))
    },
    save(){

    },
    closeWindow(){

    },
    judge(str) {
        if (typeof str == "undefined" || str == null || str == "") {
            return true;
        } else {
            return false;
        }
    },
}