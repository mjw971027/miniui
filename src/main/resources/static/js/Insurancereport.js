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
        this.buttonSearch.on("click", this.tool.myBind(this.test, page));


    },
    judge(str) {
        if (typeof str == "undefined" || str == null || str == "") {
            return true;
        } else {
            return false;
        }
    },
    test(){
        mini.open({
            url:"../templates/MeetingDetail.html",
            width:1050,
            height:1020,
            allowResize: Boolean,       //允许尺寸调节
            allowDrag: Boolean,         //允许拖拽位置
            showCloseButton: Boolean,   //显示关闭按钮
            showMaxButton: Boolean,     //显示最大化按钮
            showModal: Boolean,         //显示遮罩
            onload:function (){
                var iframe=this.getIFrameEl();
                var data={};
                iframe.contentWindow.DetailSetData(data);
            },
            ondestroy:function (action){
                if (action=="ok"){

                }
            }
        })
    }
}
