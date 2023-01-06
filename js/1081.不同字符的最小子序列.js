/*
 * @lc app=leetcode.cn id=1081 lang=javascript
 *
 * [1081] 不同字符的最小子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
    var stk = []
    var inStk = Array(255).fill(false)
    var countStk = Array(255).fill(0)

    var sArr = s.split('')
    for (let index = 0; index < sArr.length; index++) {
        const element = sArr[index];
        countStk[element.charCodeAt(0)]++
    }

    for (let index = 0; index < sArr.length; index++) {
        const element = sArr[index];
        var elementChartCode = element.charCodeAt(0)
        countStk[elementChartCode]--

        if (inStk[elementChartCode]) {
            continue;
        }
        while (stk.length > 0 && stk[stk.length - 1].charCodeAt(0) > elementChartCode) {
            if (countStk[stk[stk.length - 1].charCodeAt(0)]) {
                inStk[stk.pop().charCodeAt(0)] = false
            }
            else {
                break;
            }
        }
        stk.push(element)
        inStk[elementChartCode] = true
    }
    return stk.join('')

};
// @lc code=end

console.log(smallestSubsequence('bcabc'))

