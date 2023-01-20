/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start

function isDigital(element) {
    return element.charCodeAt(0) >= '0'.charCodeAt(0)
        && element.charCodeAt(0) <= '9'.charCodeAt(0)
}


/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    if (typeof s === 'string') {
        var sArr = s.split('')
    }
    else {
        var sArr = s
    }
    var stk = []
    var num = 0
    var sign = '+'
    while (sArr.length > 0) {
        var element = sArr.shift()
        if (element && isDigital(element)) {
            num = num * 10 + (element.charCodeAt(0) - '0'.charCodeAt(0))
        }
        if (element === '(') {
            num = calculate(sArr)
        }
        if ((element && !isDigital(element) && element !== ' ') || (sArr.length === 0)) {
            switch (sign) {
                case '+':
                    stk.push(num)
                    break;
                case '-':
                    stk.push(-num)
                    break;
                case '*':
                    stk.push(stk[stk.length - 1] * num)
                    break;
                case '/':
                    stk.push(stk[stk.length - 1] / num)
                    break;
                default:
                    break;
            }
            sign = element
            num = 0
        }
        if (element === ')') {
            return stk.reduce((acc, cur) => { return acc + cur }, 0)
        }
    }
    return stk.reduce((acc, cur) => { return acc + cur }, 0)
};
// @lc code=end
// console.log(calculate("1+(1+1)"))
// console.log(calculate("1 + 1"))
// console.log(calculate("(1+(4+5+2)-3)+(6+8)"))
console.log(calculate(" 2-1 + 2 "))

// 超时问题  可能时两次计算 stk