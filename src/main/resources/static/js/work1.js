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
        //    公司属性
        this.combCmp = mini.get("combCmp");
        // 部门
        this.combDept = mini.get("combDept");
        //
        this.combOrg = mini.get("combOrg");
        //
        this.date1 = mini.get("date1");
        //
        this.date2 = mini.get("date2");
        //
        this.combProj = mini.get("combProj");
        //
        this.combSub = mini.get("combSub");
        //
        this.combRemark = mini.get("combRemark");
        //
        this.combStatus1 = mini.get("combStatus1");
        //
        this.combStatus2 = mini.get("combStatus2");
        //
        this.combDef = mini.get("combDef");
        //
        this.handleGrid = mini.get("handleGrid");
        //
        this.checkDef = mini.get("checkDef");
        //
        this.btnSys = mini.get("btnSys");
        //
        this.combHandelDate1 = mini.get("combHandelDate1");
        //
        this.btnHandle1 = mini.get("btnHandle1");
        //
        this.btnSaveIn = mini.get("btnSaveIn");
        //
        this.applyGrid = mini.get("applyGrid");
        //
        //    第二个tab
        this.combCmp2 = mini.get("combCmp2");
        //
        this.combDept2 = mini.get("combDept2");
        //
        this.combOrg2 = mini.get("combOrg2");
        //
        this.date12 = mini.get("date12");
        //
        this.date22 = mini.get("date22");
        //
        this.combProj2 = mini.get("combProj2");
        //
        this.combSub2 = mini.get("combSub2");
        //
        this.combRemark2 = mini.get("combRemark2");
        //
        this.combStatus12 = mini.get("combStatus12");
        //
        this.combStatus22 = mini.get("combStatus22");
        //
        this.combHandelDate2 = mini.get("combHandelDate2");
        //
        this.btnHandle2 = mini.get("btnHandle2");
        //
        this.btnSaveOut = mini.get("btnSaveOut");
        //
        this.applyGrid2 = mini.get("applyGrid2");
        //
        this.tabs = mini.get("tabs");
        //
        this.tabs_id;
        //
        this.total1 = mini.get("total1");
        this.total2 = mini.get("total2");
        this.num = 0;
        this.num2 = 0;
        this.selectednum = 0;
        this.selectednum2 = 0;

        this.applynum = 0;
        this.applynum2 = 0;
        this.fafangNum = 0;
        this.fafangNum2 = 0;
        this.weifaNum = 0;
        this.weifaNum2 = 0;
    },

    dataBind: function () {
        var date = new Date();
        this.date1.setValue(date);
        this.date12.setValue(date);
        var date1 = new Date();
        date1.setDate(date1.getDate() + 10);
        this.date2.setValue(date1);
        this.date22.setValue(date1);


        // this.combCmp.setUrl("../../mf/common/getNewCompany");
        // this.combCmp2.setUrl("../../mf/common/getNewCompany");
        // this.combProj.setUrl();
        // this.combProj2.setUrl();
        // this.combRemark.setUrl();
        // this.combRemark.setUrl();
    },
    eventBind: function () {
        //公司选择到部门
        this.combCmp.on("valuechanged", this.tool.myBind(this.cmpToDept1, page));
        this.combCmp2.on("valuechanged", this.tool.myBind(this.cmpToDept2, page));
        //部门到科室
        this.combDept.on("valuechanged", this.tool.myBind(this.deptToOrg1, page));
        this.combDept2.on("valuechanged", this.tool.myBind(this.deptToOrg2, page));
        //工程号选择到分段号
        // this.combProj.on("valuechanged", this.tool.myBind(this.projToSub1, page));
        // this.combProj2.on("valuechanged", this.tool.myBind(this.projToSub2, page));
        //分段号，分道备注
        // this.combRemark.on("valuechanged", this.tool.myBind(this.subToRmk1, page));
        // this.combRemark2.on("valuechanged", this.tool.myBind(this.subToRmk2, page))
        //换页时
        this.tabs.on("activechanged", this.tool.myBind(this.changeTabs, page));
        //
        this.btnSearch.on("click", this.tool.myBind(this.searchData, page));
        //
        this.checkDef.on("click", this.tool.myBind(this.changeDef, page))
        //
        this.btnSaveIn.on("click", this.tool.myBind(this.saveIn, page));
        this.btnSaveOut.on("click", this.tool.myBind(this.saveOut, page));
        //
        this.btnHandle1.on("click", this.tool.myBind(this.handleIn, page));
        this.btnHandle2.on("click", this.tool.myBind(this.handleOut, page));
        //
        this.btnSys.on("click", this.tool.myBind(this.Sys, page));
        //
        this.applyGrid.on("rowclick", this.tool.myBind(this.updateTotal1, page));
        this.applyGrid.on("drawsummarycell", this.tool.myBind(this.onDrawSummaryCell1, page));

        this.applyGrid2.on("rowclick", this.tool.myBind(this.updateTotal2, page));

    },
    //公司选择到部门
    cmpToDept1: function () {
        var cmp = this.combCmp.getValue();
        this.combDept.setUrl(this.ip + "");
    },
    cmpToDept2: function () {
        var cmp = this.combCmp2.getValue();
        this.combDept2.setUrl(this.ip + "");
    },
    //部门到科室
    deptToOrg1: function () {
        var dept = this.combDept.getValue();
        this.combOrg.setUrl(this.ip + "");
    },
    deptToOrg2: function () {
        var dept = this.combDept2.getValue();
        this.combOrg2.setUrl(this.ip + "");
    },
    //工程号选择到分段号
    projToSub1: function () {
        var proj = this.combProj.getValue();
        this.combSub.setUrl(this.ip + "");
    },
    projToSub2: function () {
        var proj = this.combProj2.getValue();
        this.combSub2.setUrl(this.ip + "");
    },
    //分段号分道备注
    subToRmk1: function () {
        var sub = this.combSub.getValue();
        this.combRemark.setUrl(this.ip + "");
    },
    subToRmk2: function () {
        var sub = this.combSub2.getValue();
        this.combRemark2.setUrl(this.ip + "");
    },
    //改变页时
    changeTabs: function () {
        this.tabs_id = this.tabs.getActiveTab()._id;
        console.log(this.tabs.getActiveTab()._id);
    },
    //是否一致
    changeDef: function () {
        console.log(this.checkDef.getValue());
        if (this.checkDef.getValue() == 1) {
            page.searchData();
        } else {
            page.searchData();
        }
    },
    //查询
    searchData() {
        if (this.tabs_id == 1) {
            if (!this.combCmp.getValue()) {
                mini.alert("未选择公司主体");
                return;
            }
            if (!this.combDept.getValue()) {
                mini.alert("未选择公司部门");
                return;
            }

            if (!this.combOrg.getValue()) {
                mini.alert("未选择公司科室");
                return;
            }
            if (!this.combProj.getValue()) {
                mini.alert("未选择工程号");
                return;
            }
            // if (!this.combSub.getValue()) {
            //     mini.alert("未输入分段");
            // }
            var params = {};
            this.tool.dataLoadDw(this.handleGrid, this.ip + "", params)
            this.tool.dataLoadDw(this.applyGrid, this.ip + "", params);
            this.num = this.applyGrid.getData().length;
        } else {
            if (!this.combCmp2.getValue()) {
                mini.alert("未选择公司主体");
                return;
            }


            if (!this.combDept2.getValue()) {
                mini.alert("未选择公司部门");
                return;
            }

            if (!this.combOrg2.getValue()) {
                mini.alert("未选择公司科室");
                return;
            }
            if (!this.combProj2.getValue()) {
                mini.alert("未选择工程号");
                return;
            }

            var params = {};
            this.tool.dataLoadDw(this.applyGrid2, this.ip + "", params);
            this.num2 = this.applyGrid2.getData().length;
        }
    },
    //保存计划内
    saveIn() {
        mini.ajax({
            url: this.ip + "",
            type: "get",
            data: page.applyGrid.getChanges(),
            success: function (response) {
                mini.alert("保存成功");
                page.applyGrid.reload();
            }
        })
    },
    //保存计划外
    saveOut() {
        mini.ajax({
            url: this.ip + "",
            type: "get",
            data: page.applyGrid2.getChanges(),
            success: function (response) {
                mini.alert("保存成功");
                page.applyGrid2.reload();
            }
        })
    },
    //批处理计划内
    handleIn() {
        if (this.applyGrid.getSelecteds().length != 0) {
            console.log(this.applyGrid.getSelecteds());
            var res = this.applyGrid.getSelecteds();
            if (this.combHandelDate1.getValue()) {
                for (var i = 0; i < res.length; i++) {
                    this.applyGrid.updateRow(res[i], {"": this.combHandelDate1.getValue()})
                }
            } else {
                mini.alert("未选择与处理日期");
                return;
            }
        } else {
            mini.alert("未选择所需要同步日期的计划");
            return;
        }
        this.applyGrid.load({data: res});
    },
    //批处理计划外
    handleOut() {
        if (this.applyGrid2.getSelecteds().length != 0) {
            var res = this.applyGrid2.getSelecteds();
            if (this.combHandelDate2.getValue()) {
                var j = 0;
                for (var i = 0; i < res.length; i++) {
                    this.applyGrid2.updateRow(res[i], {"": this.combHandelDate2.getValue()})
                }
            } else {
                mini.alert("未选择与处理日期");
                return;
            }
        } else {
            mini.alert("未选择所需要同步日期的计划");
            return;
        }
        this.applyGrid2.load({data: res});
    },
    //同步处理日期
    Sys() {
        if (!this.combProj.getValue()) {
            mini.alert("未选择工程号");
            return;
        }
        if (!this.combSub.getValue()) {
            mini.alert("未选择分段号");
            return;
        }
        if (!this.combRemark.getValue()) {
            mini.alert("未选择分道描述");
            return;
        }
        if (this.applyGrid.getSelecteds().length == 0) {
            mini.alert("未选择计划申请明细");
            return;
        }
        if (!this.combHandelDate1.getValue()) {
            mini.alert("未选择同步预处理日期");
            return;
        }
        var date = this.combHandelDate1.getValue();
        for (var i = 0; i < this.applyGrid.getSelecteds().length; i++) {
            page.applyGrid.updateRow(this.applyGrid.getSelecteds()[i], {"": date});
        }
    },
//
    updateTotal1() {

    },
    updateTotal2() {

    },
    onDrawSummaryCell1(e) {
        var result = e.result;
        var grid = e.sender;
        var rows = e.data;

        if (e.field == "1") {
            e.cellHtml = "总计:" + grid.getData().length;
        }

        if (e.field == "2") {
            e.cellHtml = "选中行数:" + grid.getSelecteds().length;
        }
        if (e.field == "3") {
            e.cellHtml = "总申请数:" + grid.getData().length;
        }
        if (e.field == "4") {
            e.cellHtml = "总发放数:" + grid.getData().length;
        }
        if (e.field == "5") {
            e.cellHtml = "未发放数:" + grid.getData().length;
        }
    }
}

function shuchu() {
    console.log(mini.get("date1").getValue());
    var date = new Date(mini.get("date1").getValue());
    date.setDate(date.getDate() + 10)
    console.log(date);
    mini.get("date2").setValue(date);
}

function shuchu2() {
    console.log(mini.get("date12").getValue());
    var date = new Date(mini.get("date12").getValue());
    date.setDate(date.getDate() + 10)
    console.log(date);
    mini.get("date22").setValue(date);
}

