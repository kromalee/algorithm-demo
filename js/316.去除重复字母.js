/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    var stk = []
    var inStk = new Array(255)
    inStk.fill(false)

    var countStk = new Array(255)
    countStk.fill(0)
    var sArr = s.split('')
    for (let index = 0; index < sArr.length; index++) {
        const element = sArr[index];
        countStk[element.charCodeAt(0)]++
    }

    for (let index = 0; index < sArr.length; index++) {
        const element = sArr[index];
        countStk[element.charCodeAt(0)]--
        if (inStk[element.charCodeAt(0)]) {
            continue;
        }
        else {
            // 放之前先检查是否最小
            while (stk.length > 0 && element.charCodeAt(0) < stk[stk.length - 1].charCodeAt(0)) {
                if (countStk[stk[stk.length - 1].charCodeAt(0)]) {
                    inStk[(stk.pop()).charCodeAt(0)] = false
                }
                else {
                    break;
                }
            }
            stk.push(element)
            inStk[element.charCodeAt(0)] = true
        }
       
    }
    return stk.join('')
};
// @lc code=end

// console.log(removeDuplicateLetters("bcabc"))
// console.log(removeDuplicateLetters("cbacdcbc"))
console.log(removeDuplicateLetters("bbcaac"))