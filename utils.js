/*
 * @Author: 沐夕花开
 * @Date: 2020-08-26 11:58:01
 * @LastEditors: 沐夕花开
 * @LastEditTime: 2020-08-26 14:43:21
 * @Description: 常用工具手机
 * @FilePath: \remark_local\utils.js
 */

//  是否移动手机号码
 function isPhoneNumber(phone) {
    let phoneReg = /^1[3456789]\d{9}$/
    return phoneReg.test(phone)
}

// 是否固话
 function isTel(number) {
    let telReg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/
    return telReg.test(number)
}
// 身份证判断
 function isIdCard(idCard) {
    let idCardReg = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
    return idCardReg.test(idCard)
}

/**
 * @description: 格式化时间
 * @param {type}: fmt :转换后的格式 ;samp :时间戳、时间字符串 
 * @return {string}: 返回格式化后的字符串
 * @author: 沐夕花开
 */
 function dateFormat(fmt, samp) {
    if (!samp || samp == '') return ''
    let _date = new Date(samp)
    let ret;
    let opt = {
        "Y+": _date.getFullYear().toString(), // 年
        "m+": (_date.getMonth() + 1).toString(), // 月
        "d+": _date.getDate().toString(), // 日
        "H+": _date.getHours().toString(), // 时
        "M+": _date.getMinutes().toString(), // 分
        "S+": _date.getSeconds().toString() // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}

// 格式化html字符串(反转译)
function htmlEscape(html) {
    let reg = /(&lt;)|(&gt;)|(&amp;)|(&quot;)/g;
    if (!html) return ''
    return html.replace(reg, function (match) {
        switch (match) {
            case "&lt;":
                return "<";
            case "&gt;":
                return ">"
            case "&amp;":
                return "&";
            case "&quot;":
                return "\""
        }
    })
}

// 提取html片段文字
function getHtmlContent(html) {
    return htmlEscape(html).replace(/<[^<>]+>/g, "")
}

export {
    isPhoneNumber,
    isTel,
    isIdCard,
    dateFormat,
    getHtmlContent
}