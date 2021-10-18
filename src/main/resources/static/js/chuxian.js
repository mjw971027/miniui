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


    },

    dataBind: function () {

    },
    eventBind: function () {


    },

}