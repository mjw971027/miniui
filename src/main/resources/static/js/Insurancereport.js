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
        this.cbbInsType = mini.get("cbbInsType");
        this.cbbInsSubType = mini.get("cbbInsSubType");
        this.cbbCompany = mini.get("cbbCompany");
        this.cbbBaoan = mini.get("cbbBaoan");
        this.cbbLipei = mini.get("cbbLipei");
        this.cbbShenpi = mini.get("cbbShenpi");
        this.dateFrom = mini.get("dateFrom");
        this.dateTo = mini.get("dateTo");
        this.txtProjNo = mini.get("txtProjNo");
        this.cbbChujian = mini.get("cbbChujian");
        this.cbbBaoxianCmp = mini.get("cbbBaoxianCmp");
        this.cbbShiguName = mini.get("cbbShiguName");
        this.buttonSearch = mini.get("buttonSearch");
        this.buttonAdd = mini.get("buttonAdd");
        this.buttonEdit = mini.get("buttonEdit");
        this.buttonDel = mini.get("buttonDel");
        this.buttonShouji = mini.get("buttonShouji");
        this.buttonFaqi = mini.get("buttonFaqi");
        this.datagrid1 = mini.get("datagrid1");
        this.index = 1;
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
