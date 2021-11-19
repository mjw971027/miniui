//调以下两个方法进行生成表 下载表
// str = ExportTable(data,ExportExcel(grid));
// downloadExcel(str)

/**
 * 下载Excel
 * @param str 表数据
 */
function downloadExcel(str) {
    var uri = 'data:application/vnd.ms-excel;base64,';
    var ctx = {worksheet: 'sheet', str: str};
    format(template, ctx)
    window.location.href = uri + base64(str)
}

format = function (s, c) {
    return s.replace(/{(\w+)}/g,
        function (m, p) {
            return c[p];
        }
    )
};

function base64(s) {
    return window.btoa(unescape(encodeURIComponent(s)))
}

var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">'
    + '<head><!--[if gte mso 9]>'
    + '<xml>'
    + '<x:ExcelWorkbook>'
    + '<x:ExcelWorksheets>'
    + '<x:ExcelWorksheet>'
    + '<x:Name>${worksheet}</x:Name>'
    + '<x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions>'
    + '</x:ExcelWorksheet>'
    + '</x:ExcelWorksheets>'
    + '</x:ExcelWorkbook>'
    + '</xml><![endif]-->'
    + '</head>'
    + '<body>${str}</body></html>';

function StringBuilder() {
    this._buffers = [];
    this._length = 0;
    this._splitChar = arguments.length > 0 ? arguments[arguments.length - 1] : '';

    if (arguments.length > 0) {
        for (var i = 0, iLen = arguments.length - 1; i < iLen; i++) {
            this.Append(arguments[i]);
        }
    }
}

//向对象中添加字符串
//参数：一个字符串值
StringBuilder.prototype.Append = function (str) {
    this._length += str.length;
    this._buffers[this._buffers.length] = str;
}
StringBuilder.prototype.Add = StringBuilder.prototype.append;

//向对象附加格式化的字符串
//参数：参数一是预格式化的字符串，如：'{0} {1} {2}'
//格式参数可以是数组，或对应长度的arguments,
//参见示例
StringBuilder.prototype.AppendFormat = function () {
    if (arguments.length > 1) {
        var TString = arguments[0];
        if (arguments[1] instanceof Array) {
            for (var i = 0, iLen = arguments[1].length; i < iLen; i++) {
                var jIndex = i;
                var re = eval("/\\{" + jIndex + "\\}/g;");
                TString = TString.replace(re, arguments[1][i]);
            }
        } else {
            for (var i = 1, iLen = arguments.length; i < iLen; i++) {
                var jIndex = i - 1;
                var re = eval("/\\{" + jIndex + "\\}/g;");
                TString = TString.replace(re, arguments[i]);
            }
        }
        this.Append(TString);
    } else if (arguments.length == 1) {
        this.Append(arguments[0]);
    }
}

//字符串长度（相当于ToString()后输出的字符串长度
StringBuilder.prototype.Length = function () {
    if (this._splitChar.length > 0 && (!this.IsEmpty())) {
        return this._length + (this._splitChar.length * (this._buffers.length - 1));
    } else {
        return this._length;
    }
}
//字符串是否为空
StringBuilder.prototype.IsEmpty = function () {
    return this._buffers.length <= 0;
}
//清空
StringBuilder.prototype.Clear = function () {
    this._buffers = [];
    this._length = 0;
}
//输出
//参数：可以指定一个字符串（或单个字符），作为字符串拼接的分隔符
StringBuilder.prototype.ToString = function () {
    if (arguments.length == 1) {
        return this._buffers.join(arguments[1]);
    } else {
        return this._buffers.join(this._splitChar);
    }
}

/**
 * 获取表头
 * @grid 表头id
 */
function ExportExcel(grid) {
    var columns = grid.columns;

    function getColumns(columns) {
        var cols = [];
        for (var i = 0; i < columns.length; i++) {
            var column = columns[i];

            var col = {header: column.header, field: column.field, type: column.type};
            if (column.columns) {
                col.columns = getColumns(column.columns);
            }
            cols.push(col);

        }
        return cols;
    }

    return columns = getColumns(columns);
}

/**
 * 导出Excel
 * @data 内容
 * @columns 表头
 */
function ExportTable(data, columns) {
    //把表头列(带上下级的)转成不带上下的list
    var columnsBottom = getColumnsBottom(columns);
    //
    var columnsTable = getColumnsTable(columns);
    var sb = new StringBuilder();
    sb.Append("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">");
    sb.Append("<table cellspacing=\"0\" cellpadding=\"5\" rules=\"all\" border=\"1\">");
    //写出列名
    for (var i = 0; i < columnsTable.length; i++) {
        var columnsRow = columnsTable[i];
        sb.Append("<tr style=\"font-weight: bold; white-space: nowrap;\">");
        for (var column = 0; column < columnsRow.length; column++) {
            sb.Append("<td colspan=" + columnsRow[column]["colspan"] + " rowspan=" + columnsRow[column]["rowspan"] + ">" + columnsRow[column]["header"] + "</td>");
        }
        sb.Append("</tr>");
    }
    //写出数据
    var count = 0;
    for (var row = 0; row < data.length; row++) {
        sb.Append("<tr>");
        for (var column = 0; column < columnsBottom.length; column++) {
            var value;
            if (columnsBottom[column]["field"] != null) {
                value = data[row][columnsBottom[column]["field"]] || "";
            } else {
                value = "";
            }
            if (columnsBottom[column]["type"] == "indexcolumn") value = count + 1;
            sb.Append("<td style=\"vnd.ms-excel.numberformat: @;\">" + value + "</td>");
        }
        sb.Append("</tr>");
        count++;
    }
    sb.Append("</table>");
    return sb.ToString();
}

/**
 * 把表头列(带上下级的)转成不带上下的list
 * @param columns 表头列
 * @return 表头list
 */
function getColumnsBottom(columns) {
    var columnsBottom = new Array();
    //循环列的数量
    for (var i = 0; i < columns.length; i++) {
        var column = columns[i];
        if (column["columns"] != null) {
            var childColumns = column["columns"];
            var result = getColumnsBottom(childColumns);
            for (var k = 0; k < result.length; k++) {
                columnsBottom.push(result[k]);
            }
        } else {
            columnsBottom.push(column);
        }
    }
    return columnsBottom;
}

/**
 * 把表头列(带上下级的)转成
 * @param columns 表头列
 * @return ArrayList
 */
function getColumnsTable(columns) {
    var table = new Array();
    getColumnsRows(columns, 0, table);
    createTableSpan(table);
    return table;
}

/**
 *
 * @param columns 表头列
 * @param level 级别
 * @param table list
 */
function getColumnsRows(columns, level, table) {
    var row = null;
    if (table.length > level) {
        row = table[level];
    } else {
        row = new Array();
        table.push(row);
    }
    for (var i = 0; i < columns.length; i++) {
        var column = columns[i];
        var childColumns = column["columns"];
        row.push(column);
        if (childColumns != null) {
            getColumnsRows(childColumns, level + 1, table);
        }

    }
}

/**
 *
 * @table
 */
function createTableSpan(table) {
    for (var i = 0; i < table.length; i++) {
        var row = table[i];  //row
        for (var l = 0; l < row.length; l++) {
            var cell = row[l];   //column
            var colSpan = getColSpan(cell);
            cell["colspan"] = colSpan;
            if (colSpan > 1) {
                cell["rowspan"] = 1;
            } else {
                cell["rowspan"] = table.length - i;
            }

        }
    }
}

/**
 *
 * @column
 * @return int
 */
function getColSpan(column) {
    var colSpan = 0;
    var childColumns = column["columns"];
    if (childColumns != null) {
        for (var i = 0; i < childColumns.length; i++) {
            var child = childColumns[i];
            colSpan += getColSpan(child);
        }
    } else {
        colSpan = 1;
    }
    return colSpan;
}