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

function handleAllTags() {
    var arrayOfDocFonts;
    if (document.all || document.getElementById) {
        arrayOfDocFonts = document.getElementsByTagName("div");
    }
    alert("本文档DIV标记个数分别为： " + arrayOfDocFonts.length + "个。");
    var tmp = 0;
    for (var i = 0; i < arrayOfDocFonts.length; i++) {
        if (arrayOfDocFonts[i].id != "")
            alert("其ID是：div[" + eval(i + 1) + "].id=" + arrayOfDocFonts[i].id);
        tmp += 1;
    }
}
