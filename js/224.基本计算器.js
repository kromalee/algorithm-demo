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
    var i = 0
    function helper() {
        var stk = []
        var num = 0
        var sign = '+'
        while (i < s.length) {
            var element = s[i]
            i++

            if (element && isDigital(element)) {
                num = num * 10 + (element.charCodeAt(0) - '0'.charCodeAt(0))
            }
            if (element === '(') {
                num = helper()
            }
            if ((element && !isDigital(element) && element !== ' ') || (i === s.length)) {
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
                break;
            }
        }
        return stk.reduce((acc, cur) => { return acc + cur }, 0)
    }
    return helper()
};
// @lc code=end
// console.log(calculate("1+(1+1)"))
// console.log(calculate("1 + 1"))
// console.log(calculate("(1+(4+5+2)-3)+(6+8)"))
console.log(calculate(" 2-1 + 2 "))

// 超时问题  不能使用数组去模拟字符串