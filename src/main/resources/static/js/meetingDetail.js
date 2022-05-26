$(document).ready(pageInit);

/***
 *@Description :创建头表的弹窗
 *@Date:2021/4/27
 *@Atuhor:n14491
 */
//需要传入的数据是isUserCode是否是本人可以编辑值为0（否），1（是）。userId是这个人的cd，ChekNo评审会编码，ComEn公司英文名，VeriType是评审会类别名称,
function pageInit() {
    mini.parse();
    page.init();
    page.dataBind();
    page.eventBind();
    page.formInit();
}

var page = {
    msgTitle: {
        info: "Tips"
        , warning: "Warning"
        , question: "Tips"
        , error: "Error"
    },
    init: function () {
        //初始化工具和获得ip
        this.tool = new PageTool();
        this.ip = this.tool.getSiteIp();
        this.ischanged = true;

        //  报审说明
        this.txtAppRemark = mini.get("txtAppRemark");
        // this.txtAppRemark.setValue("报审说明：");

        // //厂商说明
        // this.textSubRemark = document.getElementById("textSubRemark");

        //附件名称datagrid
        this.adataGrid01 = mini.get("adataGrid01");
        //附件详情datagrid
        this.adataGrid02 = mini.get("adataGrid02");

        //    供应商界面datagrid
        this.dataGrid3 = mini.get("dataGrid3");


        //TIME面板
        this.panelForTIME = mini.get("panelForTIME");
        //SEM面板
        this.panelForSEM = mini.get("panelForSEM");
        //todo
        //TIME技术协议DataGrid
        this.TIMEDataGridMain = mini.get("TIMEDataGridMain");
        //SEM技术协议DataGrid
        this.SEMDataGridMain = mini.get("SEMDataGridMain");
        //TIME附件
        this.TIMEDataGridFile = mini.get("TIMEDataGridFile");
        //SEM附件
        this.SEMDataGridFile = mini.get("SEMDataGridFile");
        //SEM厂商变更清单
        this.SEMDataGridSUBC = mini.get("SEMDataGridSUBC");




        //审批状态下拉菜单
        this.combStatus = mini.get("combStatus");
        //审批状态确定按钮
        this.btnSetStatus = mini.get("btnSetStatus");
        //审批状态建议
        this.textStatusRes = mini.get("textStatusRes");
        this.txtAudit=mini.get("txtAudit");
        this.txtAuditOpinion=mini.get("txtAuditOpinion")
        this.dateAudit=mini.get("dateAudit")
        this.txtAuditDept=mini.get("txtAuditDept")
        this.txtAuditOpinionDept=mini.get("txtAuditOpinionDept")
        this.dateAuditDept=mini.get("dateAuditDept")
        this.test=mini.get("test");




        this.colNumLst = [];    //需要合并的列序号

    },
    dataBind: function () {
        this.dataGrid3.frozenColumns(0, 2);
        this.savePdf();

    },
    eventBind: function () {

        this.adataGrid02.on("drawcell", this.tool.myBind(this.onActionRenderer, page));

        // //绑定计算数据事件
        // this.dataGrid3.on("rowclick", this.tool.myBind(this.showRemark, page));
        this.dataGrid3.on("load", this.tool.myBind(this.setRemark, page));
        this.dataGrid3.on("drawcell", this.tool.myBind(this.subcGridDrawcell, page));

        //todo
        //点击SEM技术协议datagrid中的一格
        this.SEMDataGridMain.on("select", this.tool.myBind(this.SEMDataGridclick, page));
        //SEM技术协议加载完毕后，默认查询第一行对应的附件
        this.SEMDataGridMain.on("load", this.tool.myBind(this.selectFirstRecord, page));
        //TIME技术协议行选变化
        this.TIMEDataGridMain.on('select', this.tool.myBind(this.TIMEDataGridclick, page));
        this.TIMEDataGridMain.on('load', this.tool.myBind(this.selectFirstTimeTecord, page));
        //将TIME附件名称变为链接
        this.TIMEDataGridFile.on("drawcell", this.tool.myBind(this.drawTIMEFileCell, page));
        //将SEM附件名称变为链接
        this.SEMDataGridFile.on("drawcell", this.tool.myBind(this.drawSEMFileCell, page));
        //将SEM厂商变更清单变为链接
        this.SEMDataGridSUBC.on("drawcell", this.tool.myBind(this.drawSEMSUBCCell, page));


        // this.test.on("click", this.tool.myBind(this.savePdf, page));
        // this.tab2SearchGrid.on("rowclick", this.tool.myBind(this.showtab2, page));
    },
    //一些内容的初始化
    formInit: function () {
        this.chkId = "";
        this.veriTypeCd = "";
        this.ProdInfo;
        this.SubcInfo;

        //评审会结果
        this.dbResultApprove = "";

    },
    // 将名称所在列变为链接
    onActionRenderer: function (e) {
        var column = e.column;
        var record = e.record;
        if (column.name == "action") {
            e.cellHtml = '<a  href="javascript:page.cellClicked()">' + record.fileName + '</a>';
        }
    },
    // 将名称所在列变为链接
    onActionRenderer2: function (e) {
        var column = e.column;
        var record = e.record;
        if (column.name == "action") {
            e.cellHtml = '<a  href="javascript:page.cellClicked()">' + record.fileName + '</a>';
        }
    },
    //显示tab2的基础内容
    showtab2: function () {
        var data = this.tab2SearchGrid.getSelected();
        this.tab2chkId = data.dbId;
        this.tab2chkNo = data.chkNo;

        this.tab2veriTypeCd = data.mtTypeCd;
        page.tab2techInit();
        page.tab2searchaDataGrid01();
        page.tab2searchaDataGrid3();
        document.getElementById("tab2TxtRemark").innerText=data.programRemark;
        this.tab2textSubRemark.value="";
    },
    // 改变时间
    changeDate1: function () {
        var date1 = this.tab2date1.getValue();
        date1 = new Date(Date.parse(date1.replace(/-/g, "/")));
        var date2 = new Date(date1.setMonth(date1.getMonth() + 3));
        page.tab2date2.setValue(date2);
    },
    changeDate2: function () {
        var date2 = this.tab2date2.getValue();
        date2 = new Date(Date.parse(date2.replace(/-/g, "/")));
        var date1 = new Date(date2.setMonth(date2.getMonth() - 3));
        page.tab2date1.setValue(date1);
    },
    //查询历史记录
    statusSearch: function () {
        var param = {
            projectCd: this.tab2ProName.getValue()
            , EmpId: this.tab2EmpNo.getValue()
            , date2: this.tool.myGetDate(this.tab2date2.getValue(), 'yyyyMMdd')
            , date1: this.tool.myGetDate(this.tab2date1.getValue(), 'yyyyMMdd')
            , caseNo: this.tab2CaseNo.getValue()
            , shipType: this.tab2ShipType.getValue()
        };
        this.tool.dataLoadDw(this.tab2SearchGrid, page.ip + "/pvm/info/getHistory", param);
    },
    savePdf(){
        var isDo = confirm("确定导出pdf页面");
        if (!isDo) { return; }
        var target = document.getElementsByClassName("main")[0];
        target.style.background = "#FFFFFF";

        html2canvas(target, {
            dpi:500,
            scale:2,
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
    },

    //评审结果中的确定按钮按下操作
    setStatusRes: function () {
        //评审会结果
        var selData = this.combStatus.getSelected();

        //判断是否选择评审结果
        if (!selData) {
            mini.alert("请先选择评审结果", "提示");
            return;
        }

        //评审结果状态CD
        var statusCd = selData.statusCd;
        //评审结果CD
        var approveCd = selData.approveCd;

        var strMsg = "";

        //判断选择的评审结果是否和数据库中的是否一致
        if ((!page.dbResultApprove) || (page.dbResultApprove == approveCd)) {
            strMsg = "是否确认评审结果？";
        } else {
            strMsg = "是否更改评审结果？";
        }
        mini.confirm(strMsg, "提示", function (result) {
            if (result == "ok") {
                var param = {
                    chkId: page.chkId
                    , auditMtId: page.auditMtId
                    , statusCd: statusCd
                    , approveCd: approveCd
                    , remark: page.textStatusRes.getValue()
                };

                $.ajax({
                    url: page.ip + "/pvm/info/setResultStatus"
                    , data: param
                    , type: "post"
                    , async: false
                    , success: function (data) {
                        var _data = mini.decode(data);
                        if (!!_data.error) {
                            mini.alert(_data.error, "提示");
                        } else {
                            page.closeWindow("ok");
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        mini.alert(jqXHR.responseText, "提示");
                    }
                });
            }
        });


    },

    //显示项目说明
    showRemark: function (e) {
        page.textSubRemark.value= page.dataGrid3.getSelected().MANUFACTURER_REMARK;
    },
    tab2showRemark: function (e) {
        page.tab2textSubRemark.value=page.tab2dataGrid3.getSelected().MANUFACTURER_REMARK;
    },
    //关闭页面
    closeThisWindow: function () {
        page.closeWindow("ok");
    },
    //传入数据的程序初始化
    DetailSetData: function (data) {
        var realdata = mini.clone(data);
        //对评审状态判断

        //对传入的数据
        this.resultStatus = realdata.resultStatus;
        this.resultRemark = realdata.resultRemark;
        document.getElementById("txtUserName").value = realdata.UserName;
        document.getElementById("txtDept").value = realdata.Dept;
        this.chkId = "";
        this.chkNo = realdata.chkNo;
        document.getElementById("txtChkNo").value=realdate.chkNo;
        document.getElementById("txtVeriCd").value=realdata.verifMtTypeCd;
        document.getElementById("txtCom").value=realdata.comCh;
        this.userId = realdata.userId;
        //会议ID
        this.auditMtId = realdata.auditMtId;
        // document.getElementById("txtCaseNo").value = realdata.chkNo;
        document.getElementById("txtProName").value = realdata.programName;
        this.tab2EmpNo.set({data: [{empNo: this.userId, empDesc: realdata.UserName}]});
        this.tab2EmpNo.setValue(this.userId);
        mini.ajax(
            {
                url: this.ip + "/pvm/PriceverifMtUpdate/getHeadInfo",
                type: "get",
                data: {ChekNo: realdata.chkNo},
                success: function (responseData) {
                    //    设置工程号
                    document.getElementById("txtProjNo").value = responseData.projNo;
                    // page.txtProjNo.setValue(responseData.projNo);
                    document.getElementById("txtShipType").value = responseData.shipType;
                    //    设置船型


                    page.txtAppRemark.setValue(responseData.remark);
                    //设置头表的ID
                    page.chkId = responseData.dbId;
                    //设置评审会类别
                    page.veriTypeCd = responseData.verifMtTypeCd;
                    //评审会结果
                    page.dbResultApprove = responseData.resultApprove;


                    //JIAZ爱意见grid
                    var param = {
                        chkId: page.chkId
                    };
                    // page.tool.dataLoadDw(page.AuditSatusGrid1, page.ip + "/pvm/PriceverifMtUpdate/getOpinionInfo", param);
                    // 加载附件列表
                    page.searchaDataGrid01();

                    // 加载供应商
                    page.searchaDataGrid3();

                    //加载技术协议
                    page.techInit();
                    //加载评审状态
                    page.tool.dataLoadDdlb(page.combStatus, page.ip + "/pvm/pvmManage/selectBasicPvmApproveListByMtTypeId", {mtTypeId: responseData.mtTypeId});
                    //填入已经存在的
                    page.combStatus.setValue(page.resultStatus);
                    page.textStatusRes.setValue(page.resultRemark);


                }
            }
        );


    },

    //搜索附件1
    searchaDataGrid01: function () {
        var param = {
            attchmentTypeId: page.veriTypeCd,
            chkNo: page.chkNo
        };
        //获取数据
        this.tool.dataLoadDw(this.adataGrid01, page.ip + "/pvm/PriceverifMtUpdate/getAttchmentDataGrid1", param);
        page.initDatagrid02();
    },
    tab2searchaDataGrid01: function () {
        var param = {
            attchmentTypeId: page.tab2veriTypeCd,
            chkNo: page.tab2chkNo
        };
        //获取数据
        this.tool.dataLoadDw(this.tab2adataGrid01, page.ip + "/pvm/PriceverifMtUpdate/getAttchmentDataGrid1", param);
        page.tab2initDatagrid02();
    },
    //附件表1初始化完成后加载附件表2

    initDatagrid02: function () {
        var param = {
            ChekNo: this.chkNo
        };
        //获取数据
        this.tool.dataLoadDw(this.adataGrid02, page.ip + "/pvm/PriceverifMtUpdate/getAttchmentDataGrid2WithoutType", param);
    },
    tab2initDatagrid02: function () {
        var param = {
            ChekNo: this.tab2chkNo
        };
        //获取数据
        this.tool.dataLoadDw(this.tab2adataGrid02, page.ip + "/pvm/PriceverifMtUpdate/getAttchmentDataGrid2WithoutType", param);
    },
    //查询供应商的列
    searchaDataGrid3: function () {
        this.subType = [];
        this.subId = [];
        var param = {
            chkId: page.chkId
        };

        var cols = [
            {field: "SCORE_NAME",  header: "评标内容", width: "200", headerAlign: "center", align: "center", headerStyle:"font-weight: bold;"}
        ];

        var colNum = 0;

        page.colNumLst.push(colNum++);  //列数+1

        var tmpColLv3 = [{field: "SCORE_RATE", header: "权重", width:"70", headerAlign: "center", align: "center", headerStyle:"font-weight: bold;"}];
        var tmpColLv2 = [{header: "代理商", width:"70", headerAlign: "center", align: "center", columns: tmpColLv3, headerStyle:"font-weight: bold;"}];
        var tmpColLv1 = {header: "制造商", width:"70", headerAlign: "center", align: "center", columns: tmpColLv2, headerStyle:"font-weight: bold;"};
        cols.push(tmpColLv1);
        colNum++;   //列数+1

        var subcCol = [];
        var subcColName = [];

        //获取列
        $.ajax({
             url: page.ip + "/pvm/info/getSubcTitleListByChkId"
            ,async: false
            ,type: "post"
            ,data: param
            ,success: function (data) {
                if (!data.error) {
                    var json = data;
                    for (var i = 0; i < json.length; i++) {
                        tmpColLv3 = [];
                        tmpColLv2 = [];
                        tmpColLv1 = null;

                        var row = json[i];

                        tmpColLv3.push({field: row.subcCd + "_PF", header: "评分", width:"120", headerAlign: "center", align: "center", headerStyle:"font-weight: bold;"});
                        tmpColLv3.push({field: row.subcCd + "_DF", header: "得分", width:"120", headerAlign: "center", align: "center", headerStyle:"font-weight: bold;"});

                        subcColName.push(row.subcCd + "_PF");
                        page.colNumLst.push(colNum++);  //列数+1
                        subcColName.push(row.subcCd + "_DF");
                        subcCol.push(row.subcCd);
                        colNum++;   //列数+1

                        tmpColLv2 = [{header: row.mfgSubcDesc,  headerAlign: "center", align: "center", columns: tmpColLv3, headerStyle:"font-weight: bold;"}];

                        tmpColLv1 = {header: row.subcDesc, headerAlign: "center", align: "center", columns: tmpColLv2, headerStyle:"font-weight: bold;"};

                        cols.push(tmpColLv1);
                    }
                }
            }
        });

        page.dataGrid3.set({
            columns: cols
           ,frozenStartColumn: 0
           ,frozenEndColumn: 1
        });


        //获取数据
        var param = {
            chkId: page.chkId,
            subcColName: JSON.stringify(subcColName),
            subcCol: JSON.stringify(subcCol)
        };
        this.tool.dataLoadDw(this.dataGrid3, page.ip + "/pvm/info/getSubcDataByChkid", param);

        // page.searchaDataGrid3real();
    },

    setRemark: function(e) {
        var grid = e.sender;
        var marges = [];
        var data = grid.data;

        for (var rowIndex = 0; rowIndex < data.length; rowIndex++) {
            var row = data[rowIndex];
            if (row.SCORE_NAME == "厂商差异") {
                for (var i = 0; i < page.colNumLst.length; i++) {
                    marges.add({rowIndex: rowIndex, columnIndex: page.colNumLst[i], rowSpan: 1, colSpan: 2});
                }
            } else if (row.SCORE_NAME == "综合得分") {
                for (var i = 1; i < page.colNumLst.length; i++) {
                    marges.add({rowIndex: rowIndex, columnIndex: page.colNumLst[i], rowSpan: 1, colSpan: 2});
                }
            }
        }

        grid.mergeCells(marges);
    },

    //供应商Grid
    subcGridDrawcell: function(e) {
        var column = e.column;
        var record = e.record;
        var field = e.field;

        if (record.SCORE_NAME == "厂商差异" || record.SCORE_NAME == "综合得分") {
            if (field.indexOf("_PF") > 0) {
                e.cellStyle = "font-weight: bold;";
            }
        }
    },

    tab2searchaDataGrid3: function () {
        this.tab2subType = [];
        this.tab2subId = [];
        var param = {
            chkId: page.tab2chkId
        };
        var cols = [
            {type: "indexcolumn", width: "50", headerAlign: "center", align: "center", header: "序号"}
            , {field: "SUBC_DESC", name: "subcDesc", header: "制造商", align: "center", headerAlign: "center", width: "170"}
            , {
                field: "MFG_SUBC_DESC",
                name: "mfgSubcDesc",
                header: "代理商",
                align: "center",
                headerAlign: "center",
                width: "170"
            }
            , {
                field: "RANK",
                name: "RANK",
                header: "综合得分",
                align: "center",
                headerAlign: "center",
                width: "80"
            }
            , {field: "MANUFACTURER_REMARK", name: "manufacturerremark", header: "说明", visible: false}
            , {field: "SUBC_CD", name: "subccd", visible: false}
            , {field: "MFG_SUBC_CD", name: "mfgsubccd", visible: false}
            , {field: "DB_ID", name: "DB_ID", visible: false}
            , {field: "MFG_SUBC_TYPE", name: "MFG_SUBC_TYPE", visible: false}

            //
        ];
        // var msgId = mini.loading("正在查询中", "提示");
        $.ajax({
            url: page.ip + "/pvm/PriceverifMtUpdate/getColumns"
            , async: false
            , type: "post"
            , data: {chkId: page.tab2chkId}
            , success: function (data) {
                if (data.error) {
                    mini.alert(data.error, "错误");
                    return;
                } else {
                    var json = data;
                    if (page.ischanged) {
                        for (var i = 0; i < json.length; i++) {
                            var deptCol = {
                                field: json[i].SCORE_TYPE,
                                header: json[i].SCORE_NAME,
                                width: (json[i].SCORE_NAME.length) * 15,
                                headerAlign: "center",
                                align: "center",
                            };
                            cols.push(deptCol);

                            page.tab2subType.push(json[i].SCORE_TYPE);
                            page.tab2subId.push(json[i].DB_ID);
                        }

                    } else {
                        for (var i = 0; i < json.length; i++) {
                            var deptCol = {
                                field: json[i].SCORE_TYPE,
                                header: json[i].SCORE_NAME,
                                width: (json[i].SCORE_NAME.length) * 15,
                                headerAlign: "center",
                                align: "center"
                            };
                            cols.push(deptCol);

                            page.tab2subType.push(json[i].SCORE_TYPE);
                            page.tab2subId.push(json[i].DB_ID);
                        }
                    }


                    page.tab2dataGrid3.set({
                        columns: cols
                        , frozenStartColumn: 0
                        , frozenEndColumn: 3
                    });
                    // mini.hideMessageBox(msgId);
                }
            }
        });
        //获取数据
        page.tab2searchaDataGrid3real();
    },

    //获取供应商打分数据
    searchaDataGrid3real: function () {
        var param = {
            chkId: page.chkId,
            subTypeList: JSON.stringify(this.subType),
            subIdList: JSON.stringify(this.subId)
        };
        this.tool.dataLoadDw(this.dataGrid3, page.ip + "/pvm/PriceverifMtUpdate/getDataGrid3", param);


    },
    tab2searchaDataGrid3real: function () {
        var param = {
            chkId: page.tab2chkId,
            subTypeList: JSON.stringify(this.tab2subType),
            subIdList: JSON.stringify(this.tab2subId)
        };
        this.tool.dataLoadDw(this.tab2dataGrid3, page.ip + "/pvm/PriceverifMtUpdate/getDataGrid3", param);
        console.log(page.tab2dataGrid3.getSelecteds().length);
        // if (page.tab2dataGrid3.getSelecteds().length > 0) {
        //     page.tab2textSubRemark.value=page.tab2dataGrid3.getSelected().MANUFACTURER_REMARK;
        // }
    },



    cellClicked: function (e) {
        var param = {
            Id: page.adataGrid02.getSelected().dbId
        };

        // 如果是pdf则提供预览，否则就下载
        if (page.adataGrid02.getSelected().fileSuffix == "pdf") {
            $.ajax({
                type: "post",
                data: param,
                url: page.ip + "/pvmfileutil/getFileId",
                success: function (respData) {
                    page.viewPdf(respData.fileId);
                }
            })
        } else {
            var url = page.ip + "/pvmfileutil/fileDownload?fileName=" + page.adataGrid02.getSelected().fileName +
                "&filePath=" + page.adataGrid02.getSelected().filePath
                // + "&suffix="+page.adataGrid02.getSelected().fileSuffix
            ;
            page.download(url)
        }
    },
    // 文件下载
    download: function (url) {
        var elemIF = document.createElement("iframe");
        elemIF.src = url;
        elemIF.style.display = "none";
        document.body.appendChild(elemIF);
    },
    //pdf预览
    viewPdf: function (Id) {
        var userAgent = window.navigator.userAgent.toLowerCase();
        $.browser.msie8 = $.browser.msie && /msie 8\.0/i.test(userAgent);
        if ($.browser.msie8) {
            window.open(page.ip + "/espdfviewer.html?id=" + Id, '_blank');
        } else {
            openPDf(Id);
        }
    },
    //删除文件
    deleteAttchment: function () {
        var data = page.adataGrid02.getSelecteds();

        var json = mini.encode(data);
        if (json == "[]") {
            mini.alert("请选择一条数据", "提示");
            return;
        }

        var param = {
            data: json
        };

        mini.confirm("确认删除", "提示", function () {
            $.ajax({
                type: "post",
                data: param,
                url: page.ip + "/pvmfileutil/deletePvmFile",
                success: function () {
                    mini.alert("删除成功", "结果");
                    page.initDatagrid02();
                    page.adataGrid01.reload();
                }
            })
        })
    },

    closeWindow: function (action) {
        if (window.CloseOwnerWindow) {
            return window.CloseOwnerWindow(action);
        } else if (window.parent) {
            window.parent.open('', '_parent', '');
            window.parent.close();
        } else if (window) {
            window.close();
        } else {
            top.close();
        }
    },
    //判断字符串长度
    judgeLength: function (str) {
        if (str == null) return 0;
        if (typeof str != "string") {
            str += "";
        }
        return str.replace(/[^\x00-\xff]/g, "01").length;
    },
    //技术协议初始化
    techInit: function () {
        //判断显示TIME或者SEM
        $.ajax({
            url: page.ip + "/pvmTA/isSemOrTime",
            data: {chkId: page.chkId},
            type: "post",
            success: function (respData) {
                if (respData.TECH_TYPE =="") {
                    page.transferToTIME();
                    return;
                }
                //显示TIME，关闭SEM
                if (respData.TECH_TYPE == "T") {
                    page.transferToTIME();
                    return;
                }
                //显示SE关闭TIME
                if (respData.TECH_TYPE == "S") {
                    page.transferToSEM();
                    return;
                }
            }
        })
    },
    tab2techInit: function () {
        //判断显示TIME或者SEM
        $.ajax({
            url: page.ip + "/pvmTA/isSemOrTime",
            data: {chkId: page.tab2chkId},
            type: "post",
            success: function (respData) {
                if (respData.TECH_TYPE =="") {
                    page.tab2transferToTIME();
                    return;
                }
                //显示TIME，关闭SEM
                if (respData.TECH_TYPE == "T") {
                    page.tab2transferToTIME();
                    return;
                }
                //显示SE关闭TIME
                if (respData.TECH_TYPE == "S") {
                    page.tab2transferToSEM();
                    return;
                }
            }
        })
    },

    //切换到SEM
    transferToSEM: function () {
        page.panelForTIME.hide();
        page.panelForSEM.show();
        page.panelSEMInit();
    },
    tab2transferToSEM: function () {
        page.tab2panelForTIME.hide();
        page.tab2panelForSEM.show();
        page.tab2panelSEMInit();
    },
    //切换到TIME
    transferToTIME: function () {
        page.panelForSEM.hide();
        page.panelForTIME.show();
        page.panelTIMEInit();
    },
    tab2transferToTIME: function () {
        page.tab2panelForSEM.hide();
        page.tab2panelForTIME.show();
        page.tab2panelTIMEInit();
    },
    // SEM面板初始化
    panelSEMInit: function () {

        var param = {
            chkId: page.chkId
        };
        this.tool.dataLoadDw(this.SEMDataGridMain, page.ip + "/pvmTA/getPADataGridBYChkId", param);
    },
    tab2panelSEMInit: function () {
        // this.PAradioButtonSEM.loadData([{id: "0", text: "TIME"}, {id: "1", text: "SEM"}]);
        // this.PAradioButtonSEM.setValue("1");
        //查询技术协议数据
        var param = {
            chkId: page.tab2chkId
        };
        this.tool.dataLoadDw(this.tab2SEMDataGridMain, page.ip + "/pvmTA/getPADataGridBYChkId", param);
    },
    // TIME面板初始化
    panelTIMEInit: function () {

        var param = {
            chkId: page.chkId
        };
        this.tool.dataLoadDw(this.TIMEDataGridMain, page.ip + "/pvmTA/getPADataGridBYChkId", param);
    },
    // TIME面板初始化
    tab2panelTIMEInit: function () {
        var param = {
            chkId: page.tab2chkId
        };
        this.tool.dataLoadDw(this.tab2TIMEDataGridMain, page.ip + "/pvmTA/getPADataGridBYChkId", param);
    },

    //查询SEM文件和厂商变更清单
    SEMDataGridclick: function (e) {
        var param = {
            prtcProj: e.record.projNo,
            porNo: e.record.semPorNo
        };
        // 绑定文件数据
        this.tool.dataLoadDw(this.SEMDataGridFile, page.ip + "/pvmTA/getSEMFileGrid", param);
        // 查询厂商变更依据
        this.tool.dataLoadDw(this.SEMDataGridSUBC, page.ip + "/pvmTA/getSEMSUBCGrid", param);
    },
    tab2SEMDataGridclick:function(e){
        var param = {
            prtcProj: e.record.projNo,
            porNo: e.record.semPorNo
        };
        // 绑定文件数据
        this.tool.dataLoadDw(this.tab2SEMDataGridFile, page.ip + "/pvmTA/getSEMFileGrid", param);
        // 查询厂商变更依据
        this.tool.dataLoadDw(this.tab2SEMDataGridSUBC, page.ip + "/pvmTA/getSEMSUBCGrid", param);
    },
    //查询TIME附件
    TIMEDataGridclick: function (e) {
        var param = {
            projNo: e.record.projNo,
            techNo: e.record.techNo
        };
        this.tool.dataLoadDw(this.TIMEDataGridFile, this.ip + '/pvmTA/getTIMEFiles', param);
    },
    tab2TIMEDataGridclick: function (e) {
        var param = {
            projNo: e.record.projNo,
            techNo: e.record.techNo
        };
        this.tool.dataLoadDw(this.tab2TIMEDataGridFile, this.ip + '/pvmTA/getTIMEFiles', param);
    },
    //将TIME附件名称列变为链接
    drawTIMEFileCell: function (e) {
        var column = e.column;
        var record = e.record;
        if (column.field == "fileName") {
            e.cellHtml = '<a  href="javascript:page.getTimeFile()">' + record.fileName + '</a>';
        }
    },
    tab2drawTIMEFileCell: function (e) {
        var column = e.column;
        var record = e.record;
        if (column.field == "fileName") {
            e.cellHtml = '<a  href="javascript:page.tab2getTimeFile()">' + record.fileName + '</a>';
        }
    },
    //将SEM附件名称列变为链接
    drawSEMFileCell: function (e) {
        var column = e.column;
        var record = e.record;
        if (column.field == "fileName") {
            e.cellHtml = '<a  href="javascript:page.getSEMFile()">' + record.fileName + '</a>';
        }
    },
    tab2drawSEMFileCell: function (e) {
        var column = e.column;
        var record = e.record;
        if (column.field == "fileName") {
            e.cellHtml = '<a  href="javascript:page.tab2getSEMFile()">' + record.fileName + '</a>';
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
    tab2drawSEMSUBCCell: function (e) {
        var column = e.column;
        var record = e.record;
        if (column.field == "fileName") {
            e.cellHtml = '<a  href="javascript:page.tab2getSEMSUBC()">' + record.fileName + '</a>';
        }
    },
    //点击TIME附件名称，提供下载或者预览服务
    getTimeFile: function () {
        var param = {
            Id: page.TIMEDataGridFile.getSelected().fileId
        };
        var fileName = page.TIMEDataGridFile.getSelected().fileName;
        var suffix = fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length);
        // 如果是pdf则提供预览，否则就下载
        if (suffix == "pdf") {
            var userAgent = window.navigator.userAgent.toLowerCase();
            $.browser.msie8 = $.browser.msie && /msie 8\.0/i.test(userAgent);
            if ($.browser.msie8) {
                window.open(page.ip + "/espdfviewer.html?id=" + page.TIMEDataGridFile.getSelected().fileId, '_blank');
            } else {
                openPDf(page.TIMEDataGridFile.getSelected().fileId);
            }
        } else {
            //获取文件路径
            var filePath;
            $.ajax({
                type: "post",
                data: param,
                url: page.ip + "/pvmfileutil/getFilePathByFileId",
                success: function (respData) {
                    if (!respData.FILE_PATH) {
                        mini.alert("未录入文件路径");
                    }
                    filePath = respData.FILE_PATH;
                }
            });
            var url = page.ip
                + "/pvmfileutil/TIMEFileDownload?fileName="
                + page.TIMEDataGridFile.getSelected().fileName
                + "&filePath="
                + filePath
                // + "&suffix="+page.adataGrid02.getSelected().fileSuffix
            ;
            page.download(url)
        }
    },
    tab2getTimeFile: function () {
        var param = {
            Id: page.tab2TIMEDataGridFile.getSelected().fileId
        };
        var fileName = page.tab2TIMEDataGridFile.getSelected().fileName;
        var suffix = fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length);
        // 如果是pdf则提供预览，否则就下载
        if (suffix == "pdf") {
            var userAgent = window.navigator.userAgent.toLowerCase();
            $.browser.msie8 = $.browser.msie && /msie 8\.0/i.test(userAgent);
            if ($.browser.msie8) {
                window.open(page.ip + "/espdfviewer.html?id=" + page.tab2TIMEDataGridFile.getSelected().fileId, '_blank');
            } else {
                openPDf(page.tab2TIMEDataGridFile.getSelected().fileId);
            }
        } else {
            //获取文件路径
            var filePath;
            $.ajax({
                type: "post",
                data: param,
                url: page.ip + "/pvmfileutil/getFilePathByFileId",
                success: function (respData) {
                    if (!respData.FILE_PATH) {
                        mini.alert("未录入文件路径");
                    }
                    filePath = respData.FILE_PATH;
                }
            });
            var url = page.ip
                + "/pvmfileutil/TIMEFileDownload?fileName="
                + page.tab2TIMEDataGridFile.getSelected().fileName
                + "&filePath="
                + filePath
                // + "&suffix="+page.adataGrid02.getSelected().fileSuffix
            ;
            page.download(url)
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
                window.open(page.ip + "pvmfileutil/SEMFileDownload?fileName="
                    + fileName
                    + "&filePath="
                    + filePath, '_blank');
            } else {
                openSEMPDf(fileName, filePath);
            }
        } else {
            var url = page.ip
                + "/pvmfileutil/SEMFileDownload?fileName="
                + page.SEMDataGridFile.getSelected().fileName
                + "&filePath="
                + filePath
                // + "&suffix="+page.adataGrid02.getSelected().fileSuffix
            ;
            page.download(url)
        }
    },
    tab2getSEMFile: function () {

        var fileName = page.tab2SEMDataGridFile.getSelected().fileName;
        var suffix = fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length);
        //获取文件路径
        var filePath = page.tab2SEMDataGridFile.getSelected().filePath;
        console.log(fileName + "//:" + filePath);
        // 如果是pdf则提供预览，否则就下载
        if (suffix == "pdf") {
            var userAgent = window.navigator.userAgent.toLowerCase();
            $.browser.msie8 = $.browser.msie && /msie 8\.0/i.test(userAgent);
            if ($.browser.msie8) {
                window.open(page.ip + "pvmfileutil/SEMFileDownload?fileName="
                    + fileName
                    + "&filePath="
                    + filePath, '_blank');
            } else {
                openSEMPDf(fileName, filePath);
            }
        } else {
            var url = page.ip
                + "/pvmfileutil/SEMFileDownload?fileName="
                + page.tab2SEMDataGridFile.getSelected().fileName
                + "&filePath="
                + filePath
                // + "&suffix="+page.adataGrid02.getSelected().fileSuffix
            ;
            page.download(url)
        }
    },
    //SEM技术协议默认选择第一行并查询附件
    selectFirstRecord: function () {
        this.SEMDataGridMain.select(0, true);
    },
    tab2selectFirstRecord: function () {
        this.tab2SEMDataGridMain.select(0, true);
    },
    //TIME技术协议默认选择第一行并查询附件
    selectFirstTimeTecord: function () {
        this.TIMEDataGridMain.select(0, true);
    },
    tab2selectFirstTimeTecord: function () {
        this.tab2TIMEDataGridMain.select(0, true);
    }
};