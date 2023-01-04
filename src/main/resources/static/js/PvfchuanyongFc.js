$(document).ready(pageInit);

function pageInit() {
    mini.parse();
    page.init();
    page.dataBind();
    page.eventBind();
}

var page = {
    init() {
        this.tool = new PageTool();
        this.ip = this.tool.getSiteIp();
        this.url = this.ip + "/info"
        this.mtypecd;
        this.userId;
        this.chkNo;
        //审价会类别
        this.cmbVerifMtTypeCd = mini.get("cmbVerifMtTypeCd");
        //公司主体
        this.cmbCompany = mini.get("cmbCompany");
        //审价方式
        this.cbbVerfiType = mini.get("cbbVerfiType");
        //属性
        this.cmbproperty = mini.get("cmbproperty");
        //工程号
        this.cmbProjNo = mini.get("cmbProjNo");
        //项目名称
        this.txtProgramName = mini.get("txtProgramName");
        //采购依据
        // this.cmbBuy = mini.get("cmbBuy");
        //报价方
        // this.cmbQuote = mini.get("cmbQuote");
        //采购方式/项目类别
        this.cmbProType = mini.get("cmbProType");
        //单价审核
        // this.radioButtondanjia = mini.get("radioButtondanjia");
        //采购数量
        this.txtBuyNum = mini.get("txtBuyNum");
        // 采购单位
        this.cmbDanwei = mini.get("cmbDanwei");
        //采购材质
        this.txtCaizhi = mini.get("txtCaizhi");
        //交货日期
        this.JiaohuoDate = mini.get("JiaohuoDate");
        //开始日期
        this.StartDate = mini.get("StartDate");
        //结束日期
        this.EndDate = mini.get("EndDate");
        //采购员
        // this.cbbCaigou = mini.get("cbbCaigou");
        //成本代码
        this.cmbCodeChengben = mini.get("cmbCodeChengben");
        //目标成本（rmb
        this.goalRmb = mini.get("goalRmb");
        //目标成本（美元
        this.goalDoller = mini.get("goalDoller");
        //项目描述
        this.txtProDescribe = mini.get("txtProDescribe");
        //超过成本描述
        this.txtPassCost = mini.get("txtPassCost");
        //三家原因
        this.cmbThree = mini.get("cmbThree");
        //弹出协议船选择
        // this.TechProjNoGrid=mini.get("TechProjNoGrid");
        // this.TechProjNoWindow=mini.get("TechProjNoWindow");


        this.radioButtonProduce2 = mini.get("radioButtonProduce2");
        this.txtSupport2 = mini.get("txtSupport2");
        this.txtSupport = mini.get("txtSupport");
        this.subcGrid = mini.get("subcGrid");
        this.subcWindow = mini.get("subcWindow");
        this.txtSubcCd = mini.get("txtSubcCd");
        this.txtSubcDesc = mini.get("txtSubcDesc");
        this.btnSearchSubc = mini.get("btnSearchSubc");

        this.labdaili = mini.get("labdaili");
        this.radioButtonProduce = mini.get("radioButtonProduce");
        this.txtProduce2 = mini.get("txtProduce2");
        this.txtProduce = mini.get("txtProduce");
        this.prodGrid = mini.get("prodGrid");
        this.gridPanel2 = mini.get("gridPanel2");
        this.txtProdCd = mini.get("txtProdCd");
        this.txtProdDesc = mini.get("txtProdDesc");
        this.btnSearchProdCd = mini.get("btnSearchProdCd");

        this.txtProduce3 = mini.get("txtProduce3");
        this.txtHeton = mini.get("txtHeton");
        this.prodGrid3 = mini.get("prodGrid3");
        this.gridPanel3 = mini.get("gridPanel3");
        this.txtProdCd3 = mini.get("txtProdCd3");
        this.txtProdDesc3 = mini.get("txtProdDesc3");
        this.btnSearchProdCd3 = mini.get("btnSearchProdCd3");

        //
        this.btnAddProduce = mini.get("btnAddProduce");
        this.btnSaveSub = mini.get("btnSaveSub");
        this.btnDeletePro = mini.get("btnDeletePro");
        this.btnBaoJia = mini.get("btnBaoJia");
        this.btnTuijian = mini.get("btnTuijian");
        this.MoneydataGrid = mini.get("MoneydataGrid");
        this.programFile = mini.get("programFile");
        this.uploadattchment1 = mini.get("uploadattchment1");
        this.deleteattchment1 = mini.get("deleteattchment1");
        this.subFile = mini.get("subFile");
        this.uploadattchment2 = mini.get("uploadattchment2");
        this.deleteattchment2 = mini.get("deleteattchment2");
        this.adataGridSub = mini.get("adataGridSub");
        this.adataGridprogram = mini.get("adataGridprogram");


        this.importFileWindow1 = mini.get("importFileWindow1");
        this.importForm1 = mini.get("importForm1");
        this.projectNo1 = mini.get("projectNo1");
        this.fileSelectInput_1 = mini.get("fileSelectInput_1");
        this.btnImportOk1 = mini.get("btnImportOk1");
        this.importFileWindow2 = mini.get("importFileWindow2");
        this.importForm2 = mini.get("importForm2");
        this.projectNo2 = mini.get("projectNo2");
        this.fileSelectInput_2 = mini.get("fileSelectInput_2");
        this.btnImportOk2 = mini.get("btnImportOk2");
        //处理金额的弹出框
        this.addMoneytWindow = mini.get("addMoneytWindow");
        this.btnaddMoney = mini.get("btnaddMoney");
        this.btnsaveMoney = mini.get("btnsaveMoney");
        this.btndeldMoney = mini.get("btndeldMoney");
        this.addMoneyGrid = mini.get("addMoneyGrid");

        this.txtCurrCd1 = mini.get("txtCurrCd1");
        this.cmbCurrCd1 = mini.get("cmbCurrCd1");
        this.txtCurrCd2 = mini.get("txtCurrCd2");
        this.cmbCurrCd2 = mini.get("cmbCurrCd2");

        this.txtProRemark = mini.get("txtProRemark");

        this.btnSave = mini.get("btnSave");

        this.editCode = mini.get("editCode");

        //     //技术协议相关
        this.panelForSEM = mini.get("panelForSEM");
        this.SEMDataGridMain = mini.get("SEMDataGridMain");
        this.SEMDataGridFile = mini.get("SEMDataGridFile");
        this.SEMDataGridSUBC = mini.get("SEMDataGridSUBC");

        this.addTechWindow = mini.get("addTechWindow");
        this.cmbTechcaigou = mini.get("cmbTechcaigou");
        this.dateTechFrom = mini.get("dateTechFrom");
        this.dateTechTo = mini.get("dateTechTo");
        this.cmbTechShip = mini.get("cmbTechShip");
        this.txtTechPor = mini.get("txtTechPor");
        this.btnTechSearch = mini.get("btnTechSearch");
        this.btnTechReg = mini.get("btnTechReg");
        this.TechGrid = mini.get("TechGrid");
        //     //    设备编码窗口相关
        this.addEqdmtWindow = mini.get("addEqdmtWindow");
        this.cmbEqcaigou = mini.get("cmbEqcaigou");
        this.cmbEqShip = mini.get("cmbEqShip");
        this.txtEqCode = mini.get("txtEqCode");
        this.btnEqSearch = mini.get("btnEqSearch");
        this.btnEqReq = mini.get("btnEqReq");
        this.EqOutGrid = mini.get("EqOutGrid");
        this.EqChose = mini.get("EqChose");
        this.EqDel = mini.get("EqDel");
        this.EqInGrid = mini.get("EqInGrid");

        this.btnRegisterPASEM = mini.get("btnRegisterPASEM");
        this.btnDeletePASEM = mini.get("btnDeletePASEM");


        this.txtProRemark = mini.get("txtProRemark");


        this.btnAgree = mini.get("btnAgree");
        this.btnCancel = mini.get("btnCancel");
        this.btnClose = mini.get("btnClose");

        this.opinionGrid = mini.get("opinionGrid");

        this.cmbResult = mini.get("cmbResult");
        this.txtResult = mini.get("txtResult");
        // 申报人
        this.empDesc = mini.get("empDesc");
        // 申报时间起
        this.date1 = mini.get("date1");
        // 申报时间止
        this.date2 = mini.get("date2");
        // 评审编号/项目名称
        this.txtProgram = mini.get("txtProgram");
        this.btnSearch = mini.get("btnSearch");
        //    grid
        this.appListGrid = mini.get("appListGrid");
        this.adataGridSubTab = mini.get("adataGridSubTab");
        this.adataGridprogramTab = mini.get("adataGridprogramTab");
        this.resultStatus = [{id: "01", text: '未提交'}, {id: "02", text: '通过'}, {
            id: "03",
            text: '未通过'
        }, {id: "04", text: '有条件通过'}
            , {id: "05", text: '备案'}, {id: "06", text: '待船东确认'}];

        // 美元欧元的汇率
        this.txtHuilvUS = mini.get("txtHuilvUS");

        this.txtHuilvEU = mini.get("txtHuilvEU");
// 其他附件
        this.adataGridprogramAll = mini.get("adataGridprogramAll");
// 供后方评估数据
        this.btnAfterData = mini.get("btnAfterData");

// 下载所有文件
        this.btnDownAll = mini.get("btnDownAll");

        this.txtShuilv = mini.get("txtShuilv");

        this.txtRemark = mini.get("txtRemark");
// 最终审定加的界面
        this.addMoneytWindow2 = mini.get("addMoneytWindow2");
        this.txtCurrCd1Last = mini.get("txtCurrCd1Last");
        this.cmbCurrCd1Last = mini.get("cmbCurrCd1Last");
        this.txtCurrCd2Last = mini.get("txtCurrCd2Last");
        this.cmbCurrCd2Last = mini.get("cmbCurrCd2Last");
        this.btnaddMoneyLast = mini.get("btnaddMoneyLast");
        this.btnsaveMoneyLast = mini.get("btnsaveMoneyLast");
        this.addMoneyGridLast = mini.get("addMoneyGridLast");

        //拟审类型
        this.cmbMoni = mini.get("cmbMoni");
        //拟审类型
        this.cmbMoni1 = mini.get("cmbMoni1");

        //关联编号
        this.cmbGuanlian = mini.get("cmbGuanlian");
    },

    dataBind() {
        this.btnSearch.on('click', this.tool.myBind(this.searchData, page));


        // this.radioButtondanjia.loadData([{id: "N", text: "否"}, {id: "Y", text: "是"}]);
        // this.radioButtondanjia.setValue("N");

        this.radioButtonProduce2.loadData([{id: "0", text: "合格"}, {id: "1", text: "临时"}]);
        this.radioButtonProduce2.setValue("0");
        this.radioButtonProduce.loadData([{id: "0", text: "合格"}, {id: "1", text: "临时"}]);
        this.radioButtonProduce.setValue("0");
        // var s1=requestParams;
        // var pid = requestParams.pid;
        // this.pid=pid;
        // var tid = requestParams.tid;
        // this.tid=tid;
        // var status=requestParams.status;
        // this.status=status;
        // var sid = requestParams.sid;
        // this.userCd = sid;
        // if (status==2){
        //     this.btnAgree.hide();
        //     this.btnCancel.hide();
        // }
        // var tmp;
        // $.ajax({
        //     url: page.ip + "/info/getchkNoData"
        //     , data: {wkId:page.pid}
        //     , type: "get"
        //     ,async:false
        //     , success: function (response) {
        //         tmp=response;
        //     }
        // });
        // this.tool.dataLoadDdlb(this.cmbProjNo, page.url + "/getProNo");
        // this.tool.dataLoadDdlb(this.cbbCaigou, page.url + "/getBuyEmp");
        // this.tool.dataLoadDdlb(this.cmbVerifMtTypeCd, page.ip + "/common/searchMType2");
        //单位

        this.tool.dataLoadDdlb(this.cmbDanwei, page.url + "/queryAllUnit");


        // this.tool.dataLoadDw(this.subcGrid, page.url + "/getSubcData");
        // this.tool.dataLoadDw(this.prodGrid, page.url + "/getSubcData");
        // this.tool.dataLoadDw(this.prodGrid3, page.url + "/getSubcData");

        // this.tool.dataLoadDw(this.cmbCurrCd1, page.url + "/getCoinType",{currCd:""});
        //
        // this.tool.dataLoadDw(this.cmbCurrCd2, page.url + "/getCoinType",{currCd:""});
        // this.tool.dataLoadDdlb(this.cmbCompany, page.url + "/getCompany");
        //供应商，项目附件
        // this.tool.dataLoadDw(this.programFile, page.url + "/getProgramFile");

        // this.tool.dataLoadDw(this.subFile, page.url + "/getSubFile");

        // this.tool.dataLoadDdlb(this.cmbTechcaigou, page.url + "/getBuyEmp");
        // this.tool.dataLoadDdlb(this.cmbTechShip, page.url + "/getShipType");

        // this.tool.dataLoadDw(this.opinionGrid, page.ip + "/audit/getAllOpinionByChkNo", {chkNo: tmp.chkNo});


        // page.initAllData(tmp);
        page.editMoneyGrid();
    },
    eventBind() {
        page.cmbProjNo.on("buttonclick", this.tool.myBind(this.openProjNoWin, page));

        page.cmbProjNo.on("closeclick", this.tool.myBind(this.tool.clearCmb, page));

        // this.cmbVerifMtTypeCd.on('valuechanged', this.tool.myBind(this.changeMtCd, page));
        //选择供应商的查询按钮
        this.btnSearchSubc.on('click', this.tool.myBind(this.searchSubc, page));

        //选择制造商的查询按钮
        this.btnSearchProdCd.on('click', this.tool.myBind(this.searchProCd, page));
        //选择合同相对方的查询按钮
        this.btnSearchProdCd3.on('click', this.tool.myBind(this.searchHeton, page));

        // this.btnAddProduce.on('click', this.tool.myBind(this.addSubData, page));
        //    切换是否临时制造商
        this.radioButtonProduce.on("valuechanged", this.tool.myBind(this.clickProducer, page));

        //    保存已经新增或修改的制造商
        this.btnSaveSub.on('click', this.tool.myBind(this.saveSubData, page));

        this.MoneydataGrid.on("drawcell", this.tool.myBind(this.drawRecom, page));

        this.cmbCodeChengben.on("valuechanged", this.tool.myBind(this.setGoalCost, page));

        this.uploadattchment1.on("click", this.tool.myBind(this.uploadFile1, page));

        this.uploadattchment2.on("click", this.tool.myBind(this.uploadFile2, page));

        this.btnImportOk1.on("click", this.tool.myBind(this.importFile1, page));

        this.btnImportOk2.on("click", this.tool.myBind(this.importFile2, page));



        this.btnBaoJia.on("click", this.tool.myBind(this.showAddMoneyList, page));

        // this.btnBaoJia.on("click", this.tool.myBind(this.RecomSub, page));

        this.btnaddMoney.on("click", this.tool.myBind(this.addMoneyData, page));

        this.btnsaveMoney.on("click", this.tool.myBind(this.saveMoney, page));

        this.btndeldMoney.on("click", this.tool.myBind(this.delMoney, page));
        //打开设备编码页面
        // this.editCode.on("buttonclick", this.tool.myBind(this.showEqWindow, page));


        // this.editCode.on("closeclick", this.tool.myBind(this.tool.clearCmb, page));


        // this.saveBaseInfo.on("click", this.tool.myBind(this.saveAll, page));

        //点击SEM技术协议datagrid中的一格
        this.SEMDataGridMain.on("select", this.tool.myBind(this.SEMDataGridclick, page));
        //将SEM附件名称变为链接
        this.SEMDataGridFile.on("drawcell", this.tool.myBind(this.drawSEMFileCell, page));
        //将SEM厂商变更清单变为链接
        this.SEMDataGridSUBC.on("drawcell", this.tool.myBind(this.drawSEMSUBCCell, page));
        //技术协议相关
        //    设备编码窗口相关
        this.btnEqSearch.on("click", this.tool.myBind(this.searchEqData, page));

        this.btnTechSearch.on("click", this.tool.myBind(this.searchTechData, page));
        // /弹开tech界面
        this.btnRegisterPASEM.on("click", this.tool.myBind(this.showAddTechList, page));
        //登记tech
        this.btnTechReg.on("click", this.tool.myBind(this.RegTechList, page));

        //将SEM附件名称变为链接
        this.SEMDataGridFile.on("drawcell", this.tool.myBind(this.drawSEMFileCell, page));
        //将SEM厂商变更清单变为链接
        this.SEMDataGridSUBC.on("drawcell", this.tool.myBind(this.drawSEMSUBCCell, page));

        // this.cbbCaigou.on('valuechanged', this.tool.myBind(this.changeCaigou, page));


        this.adataGridSub.on("drawcell", this.tool.myBind(this.onActionRenderer1, page));
        this.adataGridprogram.on("drawcell", this.tool.myBind(this.onActionRenderer2, page));


        this.btnEqReq.on("click", this.tool.myBind(this.saveEqdata, page));

        this.EqChose.on("click", this.tool.myBind(this.choseEq, page));
        this.EqDel.on("click", this.tool.myBind(this.delEq, page));


        this.btnAgree.on("click", this.tool.myBind(this.commitAgree, page));
        this.btnCancel.on("click", this.tool.myBind(this.commitCancel, page));
        this.btnClose.on("click", this.tool.myBind(this.closeWindow, page));

        this.btnSave.on("click", this.tool.myBind(this.saveRes, page));
        // 点击显示附件
        this.appListGrid.on("click", this.tool.myBind(this.changeAdata, page));

        this.adataGridSubTab.on("drawcell", this.tool.myBind(this.onActionRenderer1Tab, page));
        this.adataGridprogramTab.on("drawcell", this.tool.myBind(this.onActionRenderer2Tab, page));
        this.adataGridprogramAll.on("drawcell", this.tool.myBind(this.onActionRendererAll, page));

        this.btnAfterData.on("click", this.tool.myBind(this.downloadAll, page));


    },
    changeAdata() {
        var chkNoTab = page.appListGrid.getSelected().chkNo;
        this.initDatagrid01Tab(chkNoTab);
        this.initDatagrid02Tab(chkNoTab);
    },
    searchData: function () {


        var dateFrom = this.tool.myGetDate(this.date1.getValue(), 'yyyyMMdd');
        var dateTo = this.tool.myGetDate(this.date2.getValue(), 'yyyyMMdd');
        if (dateFrom && dateTo) {
            if (dateFrom > dateTo) {
                mini.alert("起始日期要小于截至日期");
                return;
            }
        }
        var param = {
            rgstDtFr: dateFrom,
            rgstDtTo: dateTo,
            mtypecd: page.mTypeCd,
            programName: this.txtProgram.getValue()
        }

        this.tool.dataLoadDw(this.appListGrid, page.url + "/getData", param);

    },
    downloadAll: function () {

        for (var i = 0; i < page.SEMDataGridFile.getData().length; i++) {
            var url = page.ip
                    + "/pvfFileutil/SEMFileDownload?fileName="
                    + page.SEMDataGridFile.getData()[i].fileName
                    + "&filePath="
                    + page.SEMDataGridFile.getData()[i].filePath
                // + "&suffix="+page.adataGrid02.getSelected().fileSuffix
            ;
            page.download(url)
        }
        for (var i = 0; i < page.SEMDataGridSUBC.getData().length; i++) {
            var url = page.ip
                    + "/pvfFileutil/SEMFileDownload?fileName="
                    + page.SEMDataGridSUBC.getData()[i].fileName
                    + "&filePath="
                    + page.SEMDataGridSUBC.getData()[i].filePath
                // + "&suffix="+page.adataGrid02.getSelected().fileSuffix
            ;
            page.download(url)
        }

    },
    saveRes() {
        var param = {
            resultStatus: page.cmbResult.getValue(),
            resultRemark: page.txtResult.getValue(),
            chkNo: page.chkNo
        }
        $.ajax({
            url: page.ip + "/info/saveRes"
            , data: {param: param}
            , type: "post"
            , success: function (data) {
                if (data.flag == 1) {
                    mini.alert("保存成功");

                    page.closeWindow();
                } else {
                    mini.alert("保存失败");
                }

            }
        });
    },
    //保存审核结果
    saveLast() {

    },
    choseEq() {
        var flag = true;
        var rows = this.EqOutGrid.getSelecteds();
        var length = this.EqInGrid.getData().length;
        //判断是否已选中了该device
        if (length != 0) {
            for (var i = 0; i < length; i++) {
                for (var j = 0; j < rows.length; j++) {
                    if (this.EqInGrid.getData()[i].DEVICE_NO == rows[j].DEVICE_NO) {
                        flag = false;
                        mini.alert("已选中该设备号:" + rows[j].DEVICE_NO);
                        return;
                    }
                }

            }
        }
        if (flag) {
            this.EqOutGrid.reload();
            this.EqInGrid.addRows(rows);
        }
    },
    delEq() {
        var rows = this.EqInGrid.getSelected();
        this.EqInGrid.removeRows(rows);
        var data = this.EqInGrid.getData();
        var str = "";
        for (var i = 0; i < data.length; i++) {
            str = str + "," + data[i].DEVICE_NO;
        }
        $.ajax({
            url: page.ip + "/info/delEqData"
            , data: {chkNo: page.chkNo, deviceNo: rows.DEVICE_NO}
            , type: "get"
            , success: function (data) {
                if (data.flag == 1) {
                    mini.alert("删除成功");
                    page.editCode.setValue(str);
                    page.editCode.setText(str);
                } else {
                    mini.alert("删除失败");
                }

            }
        });

    },
    saveEqdata() {
        var data = this.EqInGrid.getData();
        var res;
        var param = [];
        var str = "";
        for (var i = 0; i < data.length; i++) {
            res = {
                dbID: data[i].DB_ID,
                chkNo: page.chkNo,
                projNo: page.cmbEqShip.getSelected().APLY_PROJ,
                deviceNo: data[i].DEVICE_NO
            };
            str = str + "," + data[i].DEVICE_NO;
            param.push(res);
        }
        var data = mini.encode(param);
        $.ajax({
            url: page.ip + "/info/saveEqData"
            , data: {param: data}
            , type: "post"
            , success: function (data) {
                if (data.flag == 1) {
                    mini.alert("登记成功");
                    page.editCode.setValue(str);
                    page.editCode.setText(str);
                } else {
                    mini.alert("登记失败");
                }

            }
        });

    },
    onActionRendererAll(e) {
        var column = e.column;
        var record = e.record;
        if (column.name == "action") {
            e.cellHtml = '<a  href="javascript:page.cellClickedAll()">' + record.fileName + '</a>';
        }
    },
    onActionRenderer1(e) {
        var column = e.column;
        var record = e.record;
        if (column.name == "action") {
            e.cellHtml = '<a  href="javascript:page.cellClicked1()">' + record.fileName + '</a>';
        }
    },
    onActionRenderer2(e) {
        var column = e.column;
        var record = e.record;
        if (column.name == "action") {
            e.cellHtml = '<a  href="javascript:page.cellClicked2()">' + record.fileName + '</a>';
        }
    },
    onActionRenderer1Tab(e) {
        var column = e.column;
        var record = e.record;
        if (column.name == "action") {
            e.cellHtml = '<a  href="javascript:page.cellClicked1Tab()">' + record.fileName + '</a>';
        }
    },
    onActionRenderer2Tab(e) {
        var column = e.column;
        var record = e.record;
        if (column.name == "action") {
            e.cellHtml = '<a  href="javascript:page.cellClicked2Tab()">' + record.fileName + '</a>';
        }
    },
    cellClickedAll: function (e) {
        var param = {
            Id: page.adataGridprogramAll.getSelected().dbId
        };

        // 如果是pdf则提供预览，否则就下载
        var url = page.ip + "/pvfFileutil/fileDownload?fileName=" + page.adataGridprogramAll.getSelected().fileName +
            "&filePath=" + page.adataGridprogramAll.getSelected().filePath;
        page.download(url)
    },
    cellClicked1: function (e) {
        var param = {
            Id: page.adataGridSub.getSelected().dbId
        };

        // 如果是pdf则提供预览，否则就下载
        var url = page.ip + "/pvfFileutil/fileDownload?fileName=" + page.adataGridSub.getSelected().fileName +
            "&filePath=" + page.adataGridSub.getSelected().filePath;
        page.download(url)
    },
    cellClicked2: function (e) {
        var param = {
            Id: page.adataGridprogram.getSelected().dbId
        };

        // 如果是pdf则提供预览，否则就下载
        var url = page.ip + "/pvfFileutil/fileDownload?fileName=" + page.adataGridprogram.getSelected().fileName +
            "&filePath=" + page.adataGridprogram.getSelected().filePath;
        page.download(url)
    },
    cellClicked1Tab: function (e) {
        var param = {
            Id: page.adataGridSubTab.getSelected().dbId
        };

        // 如果是pdf则提供预览，否则就下载
        var url = page.ip + "/pvfFileutil/fileDownload?fileName=" + page.adataGridSubTab.getSelected().fileName +
            "&filePath=" + page.adataGridSubTab.getSelected().filePath;
        page.download(url);
    },
    cellClicked1TabAll: function () {
        var data = page.adataGridSubTab.getData();
        if (data.length == 0) {
            return;
        }
        for (var i = 0; i < data.length; i++) {
            var url = page.ip + "/pvfFileutil/fileDownload?fileName=" + data[i].fileName +
                "&filePath=" + data.filePath;
            page.download(url);
        }
    },
    cellClicked2Tab: function (e) {
        var param = {
            Id: page.adataGridprogramTab.getSelected().dbId
        };

        // 如果是pdf则提供预览，否则就下载
        var url = page.ip + "/pvfFileutil/fileDownload?fileName=" + page.adataGridprogramTab.getSelected().fileName +
            "&filePath=" + page.adataGridprogramTab.getSelected().filePath;
        page.download(url);
    },
    cellClicked2TabAll: function () {
        var data = page.adataGridprogramTab.getData();
        if (data.length == 0) {
            return;
        }

        for (var i = 0; i < data.length; i++) {
            var url = page.ip + "/pvfFileutil/fileDownload?fileName=" + data[i].fileName +
                "&filePath=" + data.filePath;
            page.download(url);
        }
    },
    download: function (url) {
        var elemIF = document.createElement("iframe");
        elemIF.src = url;
        elemIF.style.display = "none";
        document.body.appendChild(elemIF);
    },
    initAllData(data) {

        var tmp = data.projNo.split(",");
        this.projNoList = [];
        for (var i = 0; i < tmp.length; i++) {
            var obj;
            obj[id] = tmp[i];
            obj[text] = tmp[i];
            this.projNoList.add(tmp);
        }

        this.mTypeCd = data.mTypeCd;
        this.userId = data.userId;
        this.auditGuidNo = data.auditGuidNo;
        this.auditWay = data.auditWay;
        this.chkNo = data.chkNo;
        this.cmbproperty.setValue(data.reqType);
        this.cmbVerifMtTypeCd.setValue(data.mTypeCd);

        this.tool.dataLoadDdlb(this.empDesc, page.url + "/getEmpNo", {
            typeCd: data.mTypeCd
        });
        // this.tool.dataLoadDdlb(this.cmbBuy, page.url + "/getBuyBasis",{mTypeCd:page.mTypeCd});
        this.tool.dataLoadDdlb(this.cmbProType, page.url + "/getBuyForma", {mTypeCd: page.mTypeCd});
        this.tool.dataLoadDdlb(this.cbbVerfiType, page.url + "/getCheckForma", {mTypeCd: page.mTypeCd});
        // this.tool.dataLoadDdlb(this.cmbQuote, page.url + "/getProjTypeByMType",{mTypeCd:page.mTypeCd});

        // document.getElementById("cmbVerifMtTypeCd1").innerText=this.cmbVerifMtTypeCd.getText();
        // this.cmbCompany.setValue(data.companyNo);
        // document.getElementById("cmbCompany1").innerText=this.cmbCompany.getText();
        this.cbbVerfiType.setValue(data.auditGuidNo);
        document.getElementById("cbbVerfiType1").innerText = this.cbbVerfiType.getText();
        // this.tool.dataLoadDdlb(this.cmbThree, page.url + "/getThreeReason?mTypeCd="+data.mTypeCd);
        // this.tool.dataLoadDdlb(this.subFile, page.url + "/getSubFile?mTypeCd="+data.mTypeCd);
        // this.tool.dataLoadDdlb(this.programFile, page.url + "/getProgramFile?mTypeCd="+data.mTypeCd);
        this.tool.dataLoadDw(this.MoneydataGrid, page.url + "/getSubDataByChkNo?chkNo=" + data.chkNo);

        // page.tool.dataLoadDdlb(this.cbbCaigou, page.url + "/getBuyEmp");
        page.tool.dataLoadDdlb(this.cmbCodeChengben, page.url + "/getCostCode2", {userNo: data.costUserId});
        // page.initDatagrid01();
        // page.initDatagrid02();
        if (data.projNo) {
            $.ajax({
                url: page.ip + "/info/getBaseInfo2"
                , data: {chkNo: page.chkNo, projNo: data.projNo}
                , type: "get"
                , async: false
                , success: function (response) {
                    //审价会类别
                    //公司主体
                    //审价方式
                    //属性

                    // 业务员
                    document.getElementById("txtEmpDesc").innerText = response.EMP_DESC;
                    // 业务部门
                    document.getElementById("txtOrgnDesc").innerText = response.ORGN_DESC;
                    // 船型
                    document.getElementById("txtProjType").innerText = response.PROJ_TYPE;


                    //工程号

                    document.getElementById("cmbProjNo1").innerText = response.PROJ_NO;

                    //项目名称
                    // page.txtProgramName.setValue(response.programName);
                    document.getElementById("txtProgramName1").innerText = response.PROGRAM_NAME;

                    //采购依据
                    // page.cmbBuy.setValue(response.sjPorNoGuidNo);
                    // document.getElementById("cmbBuy1").innerText=page.cmbBuy.getText();
                    //报价方式
                    // page.cmbQuote.setValue(response.purchaseGuidNo);
                    // document.getElementById("cmbQuote1").innerText=page.cmbQuote.getText()
                    //采购方式/项目类别
                    document.getElementById("cmbProType1").innerText = response.PROGRAM_TYPE_DESC;

                    //单价审核
                    // page.radioButtondanjia.setValue(response.prYN);
                    //采购数量
                    // page.txtBuyNum.setValue(response.programMatQty);

                    // 采购单位
                    page.cmbDanwei.setValue(response.UNT);
                    document.getElementById("txtBuyNum1").innerText = response.QTY + page.cmbDanwei.getText()

                    //采购材质
                    // page.txtCaizhi.setValue(response.programMatGrd);
                    document.getElementById("txtCaizhi1").innerText = response.GRD;

                    //交货日期
                    document.getElementById("JiaohuoDate1").innerText = response.DLV_DT;

                    //开始日期
                    document.getElementById("StartDate1").innerText = response.YX_START_DT;

                    //结束日期
                    document.getElementById("EndDate1").innerText = response.YX_END_DT;
                    // 开工日期
                    document.getElementById("scDate").innerText = response.SC_DT;
                    // 下坞日期
                    document.getElementById("flDate").innerText = response.FL_DT;

                    //采购员


                    // page.cbbCaigou.setValue(response.costUserId);
                    // document.getElementById("cbbCaigou1").innerText=page.cbbCaigou.getText()

                    //成本代码
                    page.cmbCodeChengben.setValue(response.COST_CD);
                    document.getElementById("cmbCodeChengben1").innerText = response.COST_CD

                    //目标成本（rmb
                    // page.goalRmb.setValue(response.targetAmountRmb);
                    //目标成本（美元
                    // page.goalDoller.setValue(response.targetAmountUsd);
                    //项目描述
                    // page.txtProDescribe.setValue(response.programCostDesc);
                    document.getElementById("txtProDescribe1").innerText = response.PROGRAM_COST_DESC

                    //超过成本描述
                    // page.txtPassCost.setValue(response.programExtraCostDesc);
                    document.getElementById("txtPassCost1").innerText = response.PROGRAM_EXTRA_COST_DESC


                    // page.cmbThree.setValue(response.LACKREASON);
                    document.getElementById("txtRemark").innerText = response.REMARK;
                    //    编码
                    // page.editCode.setValue(response.DeviceNo);
                    // page.editCode.setText(response.DeviceNo);
                    // document.getElementById("txtPassCost1").innerText = response.DeviceNo


                }
            });
            page.setGoalCost();
        }


        if (data.ApproveStatus != '01') {
            //审价会类别
            this.cmbVerifMtTypeCd.disable();
            //公司主体
            this.cmbCompany.disable();
            //审价方式
            this.cbbVerfiType.disable();
            //属性
            this.cmbproperty.disable();
            //工程号
            this.cmbProjNo.disable();
            //项目名称
            this.txtProgramName.disable();
            //采购依据
            // this.cmbBuy.disable();
            //报价方
            // this.cmbQuote.disable();
            //采购方式/项目类别
            this.cmbProType.disable();
            //单价审核
            // this.radioButtondanjia.disable();
            //采购数量
            this.txtBuyNum.disable();
            // 采购单位
            this.cmbDanwei.disable();
            //采购材质
            this.txtCaizhi.disable();
            //交货日期
            this.JiaohuoDate.disable();
            //开始日期
            this.StartDate.disable();
            //结束日期
            this.EndDate.disable();
            //采购员
            this.cbbCaigou.disable();
            //成本代码
            this.cmbCodeChengben.disable();
            //目标成本（rmb
            this.goalRmb.disable();
            //目标成本（美元
            this.goalDoller.disable();
            //项目描述
            this.txtProDescribe.disable();
            //超过成本描述
            this.txtPassCost.disable();
            //三家原因
            this.cmbThree.disable();

            this.radioButtonProduce2.disable();
            this.txtSupport2.disable();
            this.txtSupport.disable();

            // this.labdaili.disable();
            this.radioButtonProduce.disable();
            this.txtProduce2.disable();
            this.txtProduce.disable();

            this.txtProduce3.disable();
            this.txtHeton.disable();

            this.importFileWindow1.hide();
            this.importForm1.hide();
            this.projectNo1.hide();
            this.fileSelectInput_1.hide();
            this.btnImportOk1.hide();
            this.importFileWindow2.hide();
            this.importForm2.hide();
            this.projectNo2.hide();
            this.fileSelectInput_2.hide();
            this.btnImportOk2.hide();

            // this.saveBaseInfo.hide();
            // this.btnSubmit.hide();
        }
        // 初始化附件
        page.initDatagridAll();
        // 初始化技术协议
        page.techInit();
        // 初始化供应商选择
        page.cmbProjnNoShow(this.projNoList);
    },
    cmbProjnNoShow(data) {
        var column = page.MoneydataGrid.getColumn("projNo");
        page.MoneydataGrid.updateColumn(column, {
            editor: {type: "combobox", data: data}
        })
    },
    changeCaigou() {
        this.tool.dataLoadDdlb(this.cmbCodeChengben, page.url + "/getCostCode", {userId: page.cbbCaigou.getSelected().buyerId});
    },
    setGoalCost() {
        if (page.cmbCodeChengben.getValue() && page.cmbProjNo.getValue()) {
            var param = {
                nodeCd: page.cmbCodeChengben.getValue(),
                projNo: page.cmbProjNo.getValue()
            }
            $.ajax({
                url: page.ip + "/info/getCostByProjNo"
                , data: param
                , type: "post"
                , success: function (data) {
                    document.getElementById("goalDoller1").innerText = data.TAG_AMT_USD;
                    document.getElementById("goalRmb1").innerText = data.TAG_AMT_RMB;
                }
            });
        }


    },
    changeMtCd() {
        // this.tool.dataLoadDdlb(this.cmbQuote, page.url + "/getProjTypeByMType", {mTypeCd: this.cmbVerifMtTypeCd.getValue()});
        // this.tool.dataLoadDdlb(this.cmbProType, page.url + "/getPurchaseWayByMType", {mTypeCd: this.cmbVerifMtTypeCd.getValue()});
    },
    /**
     * 查询供应商
     */
    searchSubc: function () {
        var param = {
            subcCd: this.txtSubcCd.getValue()
            , subcDesc: this.txtSubcDesc.getValue()
        };
        this.tool.dataLoadDw(this.subcGrid, page.ip + "/info/getSubcData", param);
    },
    /**
     * 查询制造商
     */
    searchProCd: function () {
        var param = {
            subcCd: this.txtProdCd.getValue()
            , subcDesc: this.txtProdDesc.getValue()
        };
        this.tool.dataLoadDw(this.prodGrid, page.ip + "/info/getSubcData", param);
    },
    /**
     * 查询合同对应方
     */
    searchHeton: function () {
        var param = {
            subcCd: this.txtProdCd3.getValue()
            , subcDesc: this.txtProdDesc3.getValue()
        };
        this.tool.dataLoadDw(this.prodGrid3, page.ip + "/info/getSubcData", param);
    },
//    添加制造商
    addSubData() {
        if (!this.txtSupport.getText() && !this.txtSupport2.getValue()) {
            mini.alert("供应商必选", "提示");
            return;
        }
        if (!this.txtProduce2.getValue() && !this.txtProduce.getText()) {
            mini.alert("制造商必须有", "提示");
            return;
        }
        var row;
        var subcCd, subcDesc;
        // if (page.radioButtonProduce2.getValue()=="0"){
        subcCd = page.txtSupport.getValue();
        subcDesc = page.txtSupport.getText();
        // }else{
        //     subcCd=" ";
        //     subcDesc=page.txtSupport2.getValue();
        // }
        //0代表着合格，反之代表着临时
        if (page.radioButtonProduce.getValue() == "0") {
            row = {
                mfgSubcCd: page.txtProduce.getValue()
                , mfgSubcDesc: page.txtProduce.getText()
                , subcCd: subcCd
                , subcDesc: subcDesc
                , mfgSubcType: page.radioButtonProduce.getValue()
                , contractSubcCd: page.txtHeton.getValue()
                , contractSubcDesc: page.txtHeton.getText()

            };
        } else {
            row = {
                mfgSubcCd: ""
                , mfgSubcDesc: page.txtProduce2.getValue()
                , subcCd: subcCd
                , subcDesc: subcDesc
                , mfgSubcType: page.radioButtonProduce.getValue()
                , contractSubcCd: page.txtHeton.getValue()
                , contractSubcDesc: page.txtHeton.getText()

            };
        }
        this.MoneydataGrid.addRow(row, 0);
    },
    saveSubData() {
        var data = this.MoneydataGrid.getChanges();
        var param = mini.encode(data);
        $.ajax({
            url: page.ip + "/info/saveDesignSubcData"
            , data: {param: param, chkNo: this.chkNo}
            , type: "post"
            , success: function (data) {
                if (data.flag == 1) {
                    mini.alert("保存成功");
                } else {
                    mini.alert("保存失败");
                }
                page.MoneydataGrid.reload();
            }
        });
    },
//
    //选择建造商是否临时
    clickProducer: function () {

        if (page.radioButtonProduce.getValue() == 0) {
            page.txtProduce.enable();
            page.txtProduce.setValue("");
            page.txtProduce.show();
            page.txtProduce2.hide();
        } else {
            page.txtProduce2.enable();
            page.txtProduce2.setValue("");
            page.txtProduce2.show();
            page.txtProduce.hide();
        }
    },
    //打开上传附件窗口
    uploadFile1: function () {
        // 清空表单
        if (!page.programFile.getSelected()) {
            mini.alert("请选择项目文件！");
            return;
        }

        // document.getElementById("fileSelectInput_1").reset();
        var form = new mini.Form("#importForm1");
        this.importFileWindow1.show();
    },
    uploadFile2: function () {
        // 清空表单
        if (!page.subFile.getSelected()) {
            mini.alert("请选择供应商文件！");
            return;
        }
        // document.getElementById("fileSelectInput_2").reset();
        var form = new mini.Form("#importForm2");
        this.importFileWindow2.show();
    },
    // 上传附件
    importFile1: function () {
        var form = new mini.Form("#importForm1");
        form.validate();
        if (form.isValid() == false) {
            return;
        }
        var TypeCd = page.programFile.getSelected().TYPE_DESC;

        var param = {
            TypeCd: TypeCd,
            chekNo: this.chkNo,
            isPro: "1"
        };
        $("#importForm1").ajaxSubmit({
            type: "POST",
            dataType: "text",
            data: param,
            url: page.ip + "/pvfFileutil/uploadAttchment",
            success: function (responsedata) {
                var json = mini.decode(responsedata);
                mini.alert(json.msg, "结果");
                page.initDatagrid01();
                page.adataGridprogram.reload();
                page.importFileWindow1.hide();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                mini.alert(jqXHR.responseText, "结果");
            }
        });
    },
    // 上传附件
    importFile2: function () {
        var form = new mini.Form("#importForm2");
        form.validate();
        if (form.isValid() == false) {
            return;
        }
        var TypeCd = page.subFile.getSelected().TYPE_DESC;
        var param = {
            TypeCd: TypeCd,
            chekNo: this.chkNo,
            isPro: "0"
        };
        $("#importForm2").ajaxSubmit({
            type: "POST",
            dataType: "text",
            data: param,
            url: page.ip + "/pvfFileutil/uploadAttchment",
            success: function (responsedata) {
                var json = mini.decode(responsedata);
                mini.alert(json.msg, "结果");
                page.initDatagrid02();
                page.adataGridSub.reload();
                page.importFileWindow2.hide();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                mini.alert(jqXHR.responseText, "结果");
            }
        });
    },
    initDatagridAll() {
        var param = {
            chkNo: this.chkNo,
        };
        //获取数据
        this.tool.dataLoadDw(this.adataGridprogramAll, page.ip + "/pvfFileutil/getFileGrid", param);
    },
    //todo
    initDatagrid01() {
        var param = {
            chkNo: this.chkNo,
            isPro: "1"
        };
        //获取数据
        this.tool.dataLoadDw(this.adataGridprogram, page.ip + "/pvfFileutil/getFileGrid", param);
    },
    //todo
    initDatagrid02() {
        var param = {
            chkNo: this.chkNo,
            isPro: "0"
        };
        //获取数据
        this.tool.dataLoadDw(this.adataGridSub, page.ip + "/pvfFileutil/getFileGrid", param);
    },
    initDatagrid01Tab(chkNo) {
        var param = {
            chkNo: chkNo,
            isPro: "1"
        };
        //获取数据
        this.tool.dataLoadDw(this.adataGridprogramTab, page.ip + "/pvfFileutil/getFileGrid", param);
    },
    //todo
    initDatagrid02Tab(chkNo) {
        var param = {
            chkNo: chkNo,
            isPro: "0"
        };
        //获取数据
        this.tool.dataLoadDw(this.adataGridSubTab, page.ip + "/pvfFileutil/getFileGrid", param);
    },
    drawRecom: function (e) {
        var column = e.column;
        var record = e.record;

        if (column.field == "currCdLast") {
            if (record.currAmt == "USD") {
                e.cellHtml = record.currCd * page.txtHuilvUS.getValue();
            }
            if (record.currAmt == "EU") {
                e.cellHtml = record.currCd * page.txtHuilvEU.getValue();
            }
        }
        if (column.field == "currAmtLast") {
            e.cellHtml = "RMB";
        }
        if (column.field == "recomYn") {
            if (record.recomYn == "Y") {
                e.cellHtml = "☆";
            } else {
                e.cellHtml = "";
            }
        }
    },
    showAddMoneyList: function (data) {
        this.tool.dataLoadDdlb(this.cmbCurrCd1, page.url + "/getCoinType", {currCd: ""});

        this.tool.dataLoadDdlb(this.cmbCurrCd2, page.url + "/getCoinType", {currCd: ""});
        this.tool.dataLoadDw(this.addMoneyGrid, page.ip + "/info/getSubDataByChkNoALL", {chkNo: page.chkNo});
        this.addMoneyGrid.set({title: "审价编号:" + page.chkNo});
        this.addMoneytWindow.showAtPos("center", "middle");
        page.editMoneyGrid();
    },
    addMoneyData() {
        if (page.addMoneyGrid.getData().length > 0 && page.addMoneyGrid.getData()[0]._state == "added") {
            mini.alert("请处理玩新增的一条在进行新增");
            return;
        }
        var batchNo = 0;
        if (!(page.txtCurrCd1.getValue() && page.cmbCurrCd2.getValue()) || !(page.txtCurrCd2.getValue() && page.cmbCurrCd2.getValue())) {
            mini.alert("必须提供一个金额和币种");
            return;
        }
        if (page.addMoneyGrid.getData().length > 0) {
            batchNo = page.addMoneyGrid.getData()[0].batchNo + 1;
        }
        var param = {
            currAmt1: page.txtCurrCd1.getValue(),
            currAmt2: page.txtCurrCd2.getValue(),
            currCd1: page.cmbCurrCd2.getValue(),
            currCd2: page.cmbCurrCd2.getValue(),
            batchNo: batchNo
        }
        page.addMoneyGrid.addRow(param, 0);
        page.editMoneyGrid();
    },

    editMoneyGrid() {
        var data = page.addMoneyGrid.getData();
        if (data.length == 0) {
            // mini.alert("没有信息不可编辑");
            return;
        }
        if (data[0]._state == "added") {
            page.addMoneyGrid.cancelEdit();
            page.addMoneyGrid.beginEditRow(page.addMoneyGrid.getData()[0]);
        } else if (data.length == 0) {
            page.addMoneyGrid.cancelEdit();
        }
    },
    saveMoney() {
        var param;
        var flag;
        if (page.addMoneyGrid.getChanges("added").length > 0) {
            param = page.addMoneyGrid.getChanges("added");
            flag = "Y";
        } else if (page.addMoneyGrid.getChanges("modified").length > 0) {
            param = page.addMoneyGrid.getChanges("modified");
            flag = "N";
        } else {
            mini.alert("没有新增或修改", "提示");
            return;
        }
        for (var i = 0; i < param.length; i++) {
            param[i].chkNo = page.chkNo;
            param[i].subcCd = page.MoneydataGrid.getSelected().subcCd;

        }
        var request = mini.encode(param);
        $.ajax({
            url: page.ip + "/info/saveMoney"
            , data: {param: request, flag: flag}
            , type: "post"
            , success: function (data) {
                if (data.flag == 1) {
                    mini.alert("保存成功");
                    page.addMoneyGrid.reload();
                }
            }
        });
    },
    delMoney() {
        if (!this.addMoneyGrid.getSelecteds()) {
            mini.alert("请选择需要删除的内容!");
            return;
        }
        var data = this.addMoneyGrid.getSelecteds();
        for (var i = 0; i < data.length; i++) {
            if (data[i]._state == "added") {
                page.addMoneyGrid.removeRow(data[i]);
            }
        }
        var data = mini.encode(this.addMoneyGrid.getSelecteds());
        $.ajax({
            url: page.ip + "/info/delMoney"
            , data: {data: data}
            , type: "post"
            , success: function (response) {
                if (response.flag == 1) {
                    mini.alert("保存成功");
                }
            }
        });
    },
    saveAll() {
        if (!page.cmbProjNo.getValue()
            && !page.txtProgramName.getValue()
            && !page.cmbProType.getValue()
            // &&!page.cmbQuote.getValue()
            && !page.cmbCodeChengben.getValue()
            // &&!page.radioButtondanjia.getValue()
        ) {
            mini.alert("有必填项未填好,请填好再保存！");
            return
        }
        if (page.MoneydataGrid.isChanged()) {
            page.saveSubData();
        }
        var param = {
            mTypeCd: page.mTypeCd,
            userId: page.userId,
            auditGuidNo: page.auditGuidNo,
            auditWay: page.auditWay,
            chkNo: page.chkNo,
            //审价会类别
            mTypeCd: page.cmbVerifMtTypeCd.getValue(),
            //公司类别
            companyNo: page.cmbCompany.getValue(),
            //审查方式
            auditGuidNo: page.cbbVerfiType.getValue(),
            //属性
            reqType: page.cmbproperty.getValue(),
            //工程号
            projNo: page.cmbProjNo.getValue(),
            //项目名称
            programName: page.txtProgramName.getValue(),
            //采购依据
            // sjPorNoGuidNo:page.cmbBuy.getValue(),
            //报价方式
            // purchaseGuidNo:page.cmbQuote.getValue(),
            //采购方式/项目类别
            programGuidNo: page.cmbProType.getValue(),
            //单价审核
            // prYN:page.radioButtondanjia.getValue(),
            //采购数量
            programMatQty: page.txtBuyNum.getValue(),
            // 采购单位
            programMatUnt: page.cmbDanwei.getValue(),
            //采购材质
            programMatGrd: page.txtCaizhi.getValue(),
            //交货日期
            dlvDt: page.tool.myGetDate(page.JiaohuoDate.getValue(), 'yyyyMMdd'),
            //开始日期
            yxStartDt: page.tool.myGetDate(page.StartDate.getValue(), 'yyyyMMdd'),
            //结束日期
            yxEndDt: page.tool.myGetDate(page.EndDate.getValue(), 'yyyyMMdd'),
            //采购员
            // costUserId:page.cbbCaigou.getValue(),
            //成本代码
            realCostCd: page.cmbCodeChengben.getValue(),
            //目标成本（rmb
            targetAmountRmb: page.goalRmb.getValue(),
            //目标成本（美元
            targetAmountUsd: page.goalDoller.getValue(),
            //项目描述
            programCostDesc: page.txtProDescribe.getValue(),
            //超过成本描述
            programExtraCostDesc: page.txtPassCost.getValue(),
            //注册时科室
            // rgstOrgnCd:page.cbbCaigou.getSelected().orgnId2,

            lackReason: page.cmbThree.getValue()
            //
        }
        var res = mini.encode(param);
        $.ajax({
            url: page.ip + "/info/saveBaseData"
            , data: {param: res}
            , type: "post"
            , success: function (data) {
                if (data.flag == 1) {
                    mini.alert("保存成功");
                }
            }
        });
    },
    //推荐供应商
    RecomSub() {
        if (page.subcGrid.getSelecteds().length = 0) {
            mini.alert("未选择推荐供应商!");
            return;
        }
        var param = page.subcGrid.getSelecteds();
        for (var i = 0; i < param.length; i++) {
            if (param[i].recomYn == "Y") {
                page.subcGrid.deselect(param[i]);
            }
        }
        var param = page.subcGrid.getSelecteds();
        $.ajax({
            url: page.ip + "/info/saveRecom"
            , data: param
            , type: "post"
            , success: function (data) {
                if (data.flag == 1) {
                    mini.alert("保存成功");
                }
            }
        });
    },

    showEqWindow: function () {

        this.tool.dataLoadDdlb(this.cmbEqcaigou, page.url + "/getBuyEmp");
        this.tool.dataLoadDdlb(this.cmbEqShip, page.url + "/getShipType");
        this.addEqdmtWindow.showAtPos("center", "middle");
    },

    showAddTechList: function () {
        this.TechGrid.set({title: "审价编号:" + this.chkNo});
        this.addTechWindow.showAtPos("center", "middle");
    },
    searchTechData() {
        var dateFrom = this.tool.myGetDate(this.dateTechFrom.getValue(), 'yyyyMMdd');
        var dateTo = this.tool.myGetDate(this.dateTechTo.getValue(), 'yyyyMMdd');
        if (dateFrom && dateTo) {
            if (dateFrom > dateTo) {
                mini.alert("起始日期要小于截至日期");
                return;
            }
        }
        var param = {
            buyrId: page.cmbTechcaigou.getValue()
            , buyrCnfnDtFrom: dateFrom
            , buyrCnfnDtTo: dateTo
            , srcProjNo: page.cmbTechShip.getValue()
            , porNo: page.txtTechPor.getValue()
        };
        this.tool.dataLoadDw(this.TechGrid, page.ip + "/info/getTechList", param);
    },


    searchEqData() {
        var param = {
            projNo: page.cmbEqShip.getSelected().APLY_PROJ
            , empNo: page.cmbEqcaigou.getValue()
            , device: page.txtEqCode.getValue()
            , chkNo: this.chkNo
        };
        this.tool.dataLoadDw(this.EqOutGrid, page.ip + "/info/getDevice", param);
        this.tool.dataLoadDw(this.EqInGrid, page.ip + "/info/getDeviceBychkNo", {chkNo: this.chkNo});
    },


    //初始化技术协议
    techInit: function () {
        this.tool.dataLoadDdlb(this.SEMDataGridMain, page.url + "/getTechListBychkNo", {chkNo: page.chkNo});
    },
    //查询SEM文件和厂商变更清单
    SEMDataGridclick: function (e) {
        var param = {
            prtcProj: e.record.APLY_PROJ,
            porNo: e.record.POR_NO
        };
        // 绑定文件数据
        this.tool.dataLoadDw(this.SEMDataGridFile, page.ip + "/info/getSEMFileGrid", param);
        // 查询厂商变更依据
        this.tool.dataLoadDw(this.SEMDataGridSUBC, page.ip + "/info/getSEMSUBCGrid", param);
    },
    //将SEM附件名称列变为链接
    drawSEMFileCell: function (e) {
        var column = e.column;
        var record = e.record;
        if (column.field == "fileName") {
            e.cellHtml = '<a  href="javascript:page.getSEMFile()">' + record.fileName + '</a>';
        }
    },
    //将SEM厂商变更清单名称变为链接
    drawSEMSUBCCell: function (e) {
        var column = e.column;
        var record = e.record;
        if (column.field == "fileName") {
            e.cellHtml = '<a  href="javascript:page.getSEMSUBC()">' + record.fileName + '</a>';
        }
    },
    //点击SEM附件名称，提供下载或者预览服务
    getSEMFile: function () {

        var fileName = page.SEMDataGridFile.getSelected().fileName;
        var suffix = fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length);
        //获取文件路径
        var filePath = page.SEMDataGridFile.getSelected().filePath;
        console.log(fileName + "//:" + filePath);
        // 如果是pdf则提供预览，否则就下载
        if (suffix == "pdf") {
            var userAgent = window.navigator.userAgent.toLowerCase();
            $.browser.msie8 = $.browser.msie && /msie 8\.0/i.test(userAgent);
            if ($.browser.msie8) {
                window.open(page.ip + "pvfFileutil/SEMFileDownload?fileName="
                    + fileName
                    + "&filePath="
                    + filePath, '_blank');
            } else {
                openSEMPDf(fileName, filePath);
            }
        } else {
            var url = page.ip
                    + "/pvfFileutil/SEMFileDownload?fileName="
                    + page.SEMDataGridFile.getSelected().fileName
                    + "&filePath="
                    + filePath
                // + "&suffix="+page.adataGrid02.getSelected().fileSuffix
            ;
            page.download(url)
        }
    },
    getSEMSUBC: function () {
        var fileName = page.SEMDataGridSUBC.getSelected().fileName;
        var suffix = fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length);
        //获取文件路径
        var filePath = page.SEMDataGridSUBC.getSelected().filePath;
        console.log(fileName + "//:" + filePath);
        // 如果是pdf则提供预览，否则就下载
        if (suffix == "pdf") {
            var userAgent = window.navigator.userAgent.toLowerCase();
            $.browser.msie8 = $.browser.msie && /msie 8\.0/i.test(userAgent);
            if ($.browser.msie8) {
                window.open(page.ip + "pvfFileutil/SEMFileDownload?fileName="
                    + fileName
                    + "&filePath="
                    + filePath, '_blank');
            } else {
                openSEMPDf(fileName, filePath);
            }
        } else {
            var url = page.ip
                    + "/pvfFileutil/SEMFileDownload?fileName="
                    + page.SEMDataGridFile.getSelected().fileName
                    + "&filePath="
                    + filePath
                // + "&suffix="+page.adataGrid02.getSelected().fileSuffix
            ;
            page.download(url)
        }

    },
    //登记tech
    RegTechList() {
        var data = page.TechGrid.getSelecteds();
        if (data.length == 0) {
            mini.alert("请选择需要登记的技术协议");
            return;
        }
        var params = [];
        for (var i = 0; i < data.length; i++) {
            var param = {
                prtcProj: data[i].PRTC_PROJ,
                porNo: data[i].POR_NO,
                poId: data[i].PO_ID,
                srcProjNo: data[i].SRC_PROJ_NO,
                vsnDesc: data[i].VSN_DESC,
                rmDesc: data[i].RM_DESC,
                recvDept: data[i].CNFM_DEPT,
                aplyProj: data[i].APLY_PROJ,
                chkNo: page.chkNo
            }
            params.push(param);
        }
        var res = mini.encode(params);
        $.ajax({
            url: page.ip + "/info/saveTechData"
            , data: {param: res}
            , type: "post"
            , success: function (data) {
                if (data.flag == 1) {
                    mini.alert("保存成功");
                } else {
                    mini.alert("保存失败");
                }
                page.MoneydataGrid.reload();
            }
        });
    },

    openProjNoWin: function () {
        mini.open({
            url: this.ip + "/pvf/pop/ProjNoWindow.html",
            showMaxButton: false,
            title: "工程号选择",
            width: 500,
            height: 550,
            allowResize: true,
            showModal: true,
            onload: function () {
                var iframe = this.getIFrameEl();
                iframe.contentWindow.projNoPage.setData();
            }
            , ondestroy: function (action) {
                if (action == "ok") {
                    var iframe = this.getIFrameEl();
                    var outProjNo = iframe.contentWindow.projNoPage.getData();
                    //设置工程号的Value值
                    page.cmbProjNo.setValue(outProjNo);
                    //设置工程号的表示值
                    page.cmbProjNo.setText(outProjNo);
                }
            }
        });
    },
    commitAgree() {
        var param = {
            chkNo: page.chkNo,
            mennuName: "同意",
            stepName: "科室审批",
            opinion: page.txtOpinion.getValue()
        }
        var data = mini.encode(param);
        var msgId = mini.loading("正在提交中", "提交");

        $.ajax({
            url: page.ip + "/audit/firstAudit"
            , data: {data: data, chkNo: page.chkNo, userCd: page.userCd}
            , type: "get"
            , success: function (data) {
                mini.hideMessageBox(msgId);

                if (data.flag == 1) {
                    mini.alert("保存成功");
                }
            }
        });
    },
    commitCancel() {
        var param = {
            chkNo: page.chkNo,
            mennuName: "退回",
            stepName: "科室审批",
            opinion: page.txtOpinion.getValue()
        }

        var data = mini.encode(param);
        var msgId = mini.loading("正在取消中", "取消");

        $.ajax({
            url: page.ip + "/audit/firstAudit"
            , data: {data: data, chkNo: page.chkNo, userCd: page.userCd}
            , type: "get"
            , success: function (data) {
                mini.hideMessageBox(msgId);

                if (data.flag == 1) {
                    mini.alert("保存成功");
                }
            }
        });
    },
    closeWindow: function (action) {
        if (window.CloseOwnerWindow) {
            return window.CloseOwnerWindow(action);
        } else {
            try {
                top.close();
            } catch (e) {
            }
        }
    },

}


