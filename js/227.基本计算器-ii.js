/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
function isDigital(element) {
    return (element.charCodeAt(0)) >= ('0'.charCodeAt(0))
        && (element.charCodeAt(0)) <= ('9'.charCodeAt(0))
}

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    var i = 0
    function helper() {
        var sign = '+'
        var num = 0
        var stk = []
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
                        stk.push(stk.pop() * num)
                        break;
                    case '/':
                        stk.push(parseInt(stk.pop() / num))
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
        return stk.reduce((acc, cur) => {
            return acc + cur
        }, 0)
    }
    return helper()
};
// @lc code=end
// console.log(calculate(' 3+5 / 2 '))
console.log(calculate(' 3+5 / 2 '))
