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
        this.btnSearch = mini.get("btnSearch");
        this.btnAdd = mini.get("btnAdd");
        this.btnSave = mini.get("btnSave");
        this.btnDel = mini.get("btnDel");
        //
        this.dgcss1 = mini.get("dgcsss1");
        this.datagrid1 = mini.get("datagrid1");
        this.dgcss2 = mini.get("dgcsss2");
        this.datagrid2 = mini.get("datagrid2");

        this.index = 1;
    },
    dataBind() {

    },

    eventBind() {
        this.btnSearch.on("click", this.tool.myBind(this.savePdf, page));
        this.btnAdd.on("click", this.tool.myBind(this.Add, page));
        this.btnSave.on("click", this.tool.myBind(this.Save, page));
        this.btnDel.on("click", this.tool.myBind(this.Del, page));

    },
    searchData() {
        this.datagrid1.setUrl("");
        this.datagrid2.setUrl("");
    },
    Add() {
        if (this.index == 1) {
            var row = {};
            this.datagrid1.addRow(row, 0);
        } else {
            var row = {};
            this.datagrid2.addRow(row, 0);
        }
    },
    Save() {

    },
    Del() {
        var rows1 = this.datagrid1.getSelecteds();
        var param1 = [];
        var rows2 = this.datagrid2.getSelecteds();
        var param2 = [];
        for (var i = 0; i < rows1.length; i++) {
            if (rows1[i]._state == "added") {
                this.datagrid1.removeRow(rows1[i]);
            } else {
                mini.ajax({
                    url: "",
                    data: rows1[i].id,
                    type: "get",
                    success: function (data) {
                        if (data == 1) {
                            mini.alert("删除成功！");
                        }
                    }
                })
            }
        }
        for (var i = 0; i < rows2.length; i++) {
            if (rows2[i]._state == "added") {
                this.datagrid1.removeRow(row2[i]);
            } else {
                mini.ajax({
                    url: "",
                    data: rows2[i].id,
                    type: "get",
                    success: function (data) {
                        if (data == 1) {
                            mini.alert("删除成功！");
                        }
                    }
                })
            }
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
$("#datagrid1").click(function () {
    dgclick("index1")
})
$("#datagrid2").click(function () {
    dgclick("index2")
})

function dgclick(index) {
    switch (index) {
        case "index1":
            $("#dgcss2").css("color", "#000000");
            $("#dgcss1").css("color", "#ff0000");
            page.index = 1;
            break;
        case "index2":
            $("#dgcss1").css("color", "#000000");
            $("#dgcss2").css("color", "#ff0000");
            page.index = 2;
        default:
            break;
    }
}