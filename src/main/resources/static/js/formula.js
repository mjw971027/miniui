function fn(string) {
    // 剔除空白符
    string = string.replace(/\s/g, '');

    // 错误情况，空字符串
    if ("" === string) {
        return false;
    }

    // 错误情况，运算符连续
    if (/[\+\-\*\/]{2,}/.test(string)) {
        return false;
    }

    // 空括号
    if (/\(\)/.test(string)) {
        return false;
    }
    // /错误情况，使用除()+-*/之外的字符
    if (/[^\+\-\*\/0-9.a-zA-Z\(\)]/.test(string)) {
        return false;
    }

    //运算符号不能在首末位
    if (/^[\+\-\*\/.]|[\+\-\*\/.]$/.test(string)) {
        return false;
    }
    // 错误情况，括号不配对
    var stack = [];
    for (var i = 0, item; i < string.length; i++) {
        item = string.charAt(i);
        if ('(' === item) {
            stack.push('(');
        } else if (')' === item) {
            if (stack.length > 0) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    if (0 !== stack.length) {
        return false;
    }

    // 错误情况，(后面是运算符
    if (/\([\+\-\*\/]/.test(string)) {
        return false;
    }

    // 错误情况，)前面是运算符
    if (/[\+\-\*\/]\)/.test(string)) {
        return false;
    }

    // 错误情况，(前面不是运算符
    if (/[^\+\-\*\/]\(/.test(string)) {
        return false;
    }

    // 错误情况，)后面不是运算符
    if (/\)[^\+\-\*\/]/.test(string)) {
        return false;
    }
    return true;
    // // 错误情况，变量没有来自“待选公式变量”
    // var tmpStr = string.replace(/[\(\)\+\-\*\/]{1,}/g, '`');
    // var array = tmpStr.split('`');
    // for(var i = 0, item; i < array.length; i++){
    //     item = array[i];
    //     if( /[A-Z]/i.test(item) && 'undefined' === typeof(obj[item]) ){
    //         return false;
    //     }
    // }
    // return true;
}