/**
 * Created by n11589 on 2018/1/26.
 */
function PageTool() {
}

PageTool.prototype = {
    constructor: PageTool,

    getSiteIp: function () {
        var fullPath = window.document.location.href;
        var pagePath = window.document.location.pathname;
        var pos = fullPath.indexOf(pagePath);
        var ip = fullPath.substring(0, pos);
        return ip + "/report";
    },

    getPopupUrl: function (urlString) {
        //debugger;
        var siteIp = this.getSiteIp();
        if (siteIp.substring(siteIp.length - 1) == "/") {
            return siteIp + urlString;
        } else {
            return siteIp + "/" + urlString;
        }
        // if (this.getSiteIp().endsWith("/")){
        //     return this.getSiteIp()+urlString;
        // }
        // else{
        //     return this.getSiteIp()+"/"+urlString;
        // }
    },
    dataLoadDw: function (control, urlString, params) {
        control.set({url: urlString});
        control.load(params, function (e) {
            var error = mini.decode(e.text).error;
            if (error) {
                mini.alert(error);
            }
        });
    },
    dataLoadDdlb: function (control, urlString, params) {
        if (params) {
            control.load(urlString + "?" + $.param(params));
        } else {
            control.load(urlString);
        }
    },
    dataLoadDddw: function (dw, colName, urlString, params) {
        var allColumns = dw.columns;
        for (var i = 0, len = allColumns.length; i < len; i++) {
            if (allColumns[i].field === colName) {
                if (params) {
                    allColumns[i].editor.url = urlString + "?" + $.param(params);
                } else {
                    allColumns[i].editor.url = urlString;
                }

                break;
            }
        }
    },

    /**
     * 清空Grid数据
     * @param control
     */
    gridClearData: function (control) {
        //清空本页数据
        control.clearData();

        if (control.showPager) {
            //删除条件属性
            delete control._dataSource.loadParams;
            //删除结果属性
            delete control._resultObject;
            //对数据总数赋初始值
            control.setTotalCount(0);
            //将Page定位到第一页
            control.setPageIndex(1);
        }
    },

    gridColSetData: function (dw, colName, dataLst) {
        var allColumns = dw.columns;
        for (var i = 0, len = allColumns.length; i < len; i++) {
            if (allColumns[i].field === colName) {
                allColumns[i].editor.data = dataLst;
                break;
            }
        }
    },

    //柯里化事件绑定函数
    myBind: function (fn, context) {
        var _myBindParams = Array.prototype.slice.call(arguments, 2);
        return function () {
            var innerParam = Array.prototype.slice.call(arguments);
            var finalParams = _myBindParams.concat(innerParam);
            return fn.apply(context, finalParams);
        }
    },

    //提示信息
    showBox: function (message, interval) {
        var msgId = mini.showMessageBox(
            {
                title: "",
                iconCls: "",
                buttons: [],
                message: message
            }
        );
        setTimeout(
            function () {
                mini.hideMessageBox(msgId);
            }, interval);
    },

    //空值转换
    valueChangeTo: function (originalValue, pattern) {
        return (!originalValue) ? pattern : originalValue;
    },

    /**
     * 数字格式化
     * @param number        需要格式化的数字
     * @param places        保留小数位（默认2位）
     * @param startSymbol   数字前缀
     * @param endSymbol     数字后缀
     * @returns {string}    格式完的数字
     */
    formatMoney: function (number, places, startSymbol, endSymbol) {
        number = number || 0;
        places = !isNaN(places = Math.abs(places)) ? places : 2;

        //startSymbol = startSymbol !== undefined ? startSymbol : "";
        //endSymbol = endSymbol !== undefined ? endSymbol : "";
        if (!startSymbol) {
            startSymbol = "";
        }
        if (!endSymbol) {
            endSymbol = "";
        }
        var negative = number < 0 ? "-" : "",
            i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;
        return startSymbol
            + negative
            + (j ? i.substr(0, j) + "," : "")
            + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + ",")
            + (places ? "." + Math.abs(number - i).toFixed(places).slice(2) : "")
            + endSymbol;
    },

    /**
     * 解决除法时造成的结果有误差的问题
     * @param num1
     * @param num2
     * @returns {number} num1 / num2
     */
    numDiv: function (num1, num2) {
        var t1 = 0;
        var t2 = 0;
        var r1;
        var r2;

        try {
            t1 = num1.toString().split(".")[1].length
        } catch (e) {
        }
        try {
            t2 = num2.toString().split(".")[1].length
        } catch (e) {
        }

        with (Math) {
            r1 = Number(num1.toString().replace(".", ""));
            r2 = Number(num2.toString().replace(".", ""));
            return (r1 / r2) * pow(10, t2 - t1);
        }
    },

    /**
     * 解决乘法时造成的结果有误差的问题
     * @param num1
     * @param num2
     * @returns {number} num1 * num2
     */
    numMul: function (num1, num2) {
        var m = 0;
        var s1 = num1.toString();
        var s2 = num2.toString();
        try {
            m += s1.split(".")[1].length
        } catch (e) {
        }
        try {
            m += s2.split(".")[1].length
        } catch (e) {
        }
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    },

    /**
     * 解决加法时造成的结果有误差的问题
     * @param num1
     * @param num2
     * @returns {number} num1 + num2
     */
    numAdd: function (num1, num2) {
        var r1;
        var r2;
        var m;
        var n;
        try {
            r1 = num1.toString().split(".")[1].length
        } catch (e) {
            r1 = 0
        }
        try {
            r2 = num2.toString().split(".")[1].length
        } catch (e) {
            r2 = 0
        }
        m = Math.pow(10, Math.max(r1, r2));
        //动态控制精度长度
        n = (r1 >= r2) ? r1 : r2;
        return Number(((num1 * m + num2 * m) / m).toFixed(n));
    },

    /**
     * 判断是否为数字
     * @param num
     * @returns {boolean}
     */
    checkNum: function (num) {
        var re = /^[0-9]+.?[0-9]*$/;
        if (!re.test(num)) {
            return false;
        }

        return true;
    },


    /**
     * 判断是否为正负整数
     * @param num
     * @returns {boolean}
     */
    checkInteger: function (num) {
        var re = /^(0|[1-9][0-9]*|-[1-9][0-9]*)$/;
        if (!re.test(num)) {
            return false;
        }

        return true;
    },

    /**
     * 解决减法时造成的结果有误差的问题
     * @param num1
     * @param num2
     * @returns {number} num1 - num2
     */
    numSub: function (num1, num2) {
        var r1;
        var r2;
        var m;
        var n;

        try {
            r1 = num1.toString().split(".")[1].length
        } catch (e) {
            r1 = 0
        }
        try {
            r2 = num2.toString().split(".")[1].length
        } catch (e) {
            r2 = 0
        }
        m = Math.pow(10, Math.max(r1, r2));
        //动态控制精度长度
        n = (r1 >= r2) ? r1 : r2;
        return Number(((num1 * m - num2 * m) / m).toFixed(n));
    },

    /**
     * 判断是否选中有效值
     * @param projNoDdlb
     * @returns {boolean}
     */
    cmbCheck: function (cmb) {
        var cmbSelVal = cmb.getSelected();
        if (!cmbSelVal) {
            return false;
        } else {
            return true;
        }
    },

    /**
     * 取得字符长度
     * @param txt
     * @returns {*}
     */
    getStrLength: function (txt) {
        if (!!txt) {
            if (typeof txt != "string") {
                txt += "";
            }
            var len = 0;
            for (var i = 0; i < txt.length; i++) {
                var val = txt.charAt(i);
                if (val.match(/[^\x00-\xff]/ig) != null) {
                    len += 2;
                } else {
                    len += 1;
                }
            }

            return len;
            //return txt.replace(/[^x00-xff]/g, "01").length;
        } else {
            return 0;
        }
    },

    /**
     * 判断是否必须和最大长度
     * @param control
     * @param item
     * @param must      true 必须
     * @param len       长度
     * @returns         出错返回错，没错返回空
     */
    chkInputAndLength: function (inputValue, item, must, len) {
        var msgNoInput = "#item is required!";
        var msgMaxLen = "The Max length of the #item is #maxL characters";

        //必须校验
        if (must) {
            if (!inputValue || $.trim(inputValue) == "") {
                return msgNoInput.replace(/#item/, item);
            }
        }

        //长度校验
        if (len) {
            if (!!inputValue && this.getStrLength($.trim(inputValue)) > len) {
                return msgMaxLen.replace(/#item/, item).replace(/#maxL/, len);
            }
        }

        return null;
    },

    /**
     * 清空下拉控件选项值
     * @param e
     */
    clearCmb: function (e) {
        var obj = e.sender;
        obj.setText("");
        obj.setValue("");
    },

    myGetDate: function (inDate) {
        if (!inDate) {
            return null;
        }

        if (typeof (inDate) == 'string') {
            return inDate;
        }

        return mini.formatDate(inDate, 'yyyy-MM-dd');
    },

    /**
     * 取得树中选中的Office和WBS
     * @param treeGrid
     * @returns {Array}
     */
    getCheckedOffiecAndWbsList: function (treeGrid) {
        var getDataFlag = false;
        //projNo层子节点
        var projNoLv = treeGrid.getRootNode().children;
        //Office层子节点
        var officeLv = projNoLv[0].children;

        //输出的Office和WBS集合
        var officeLst = new Array();
        var owLst = new Array();

        for (var i = 0; i < officeLv.length; i++) {
            var officeNode = officeLv[i];
            if (officeNode.checked == true) {
                //如果Office节点为选中状态，则直接传入Offiec
                officeLst.add(officeNode.id);
                getDataFlag = true;
            } else {
                //如果Office节点为不选中状态：分为2中情况
                // 1：的确没有选中
                // 2：WBS子节点中有没有选中的
                var wbsNodes = officeNode.children;
                if (!!wbsNodes) {
                    //存在WBS子节点的状态
                    for (var j = 0; j < wbsNodes.length; j++) {
                        var wbsNo = wbsNodes[j];
                        if (wbsNo.checked == true) {
                            //如果WBS节点位选中状态
                            owLst.add(wbsNo.id);
                            getDataFlag = true;
                        }
                    }
                }
            }
        }

        if (officeLst.length == officeLv.length) {
            officeLst = new Array();
        }

        var outLst = new Array();
        outLst.add(officeLst);
        outLst.add(owLst);
        outLst.add(getDataFlag);

        //console.log(outLst);

        return outLst;
    }

};
