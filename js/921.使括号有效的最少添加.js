/*
 * @lc app=leetcode.cn id=921 lang=javascript
 *
 * [921] 使括号有效的最少添加
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    var insertLeft = 0
    var needRight = 0
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if (element === '(') {
            needRight++
        }
        else {
            needRight--
            if (needRight === -1) {
                needRight = 0;
                insertLeft++
            }
        }

    }
    return insertLeft + needRight
};
// @lc code=end

