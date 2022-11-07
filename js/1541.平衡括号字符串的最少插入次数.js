/*
 * @lc app=leetcode.cn id=1541 lang=javascript
 *
 * [1541] 平衡括号字符串的最少插入次数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
    var insert = 0; //插入的括号
    var need = 0    //需要的括号
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if (element === '(') {
            need += 2
            if (need % 2 === 1) {
                insert++
                need--
            }
        }
        else {
            need--
            if (need === -1) {
                insert++
                need = 1
            }
        }
    }
    return insert + need
};
// @lc code=end

