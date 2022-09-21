/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) { return 0 }
    var left = 0;
    var right = 0;
    var window = new Map()
    // var need = new Map()
    // var valid = 0;
    // var start = 0;
    var len = 0;
    while (right < s.length) {
        var c = s[right]
        right++
        window.has(c) ? window.set(c, window.get(c) + 1) : window.set(c, 1)
        while (window.get(c) > 1) {
            var d = s[left]
            left++
            if (window.get(d) > 0) {
                window.set(d, window.get(d) - 1)
            }

        }
        // 更新结果
        if (right - left > len) {
            len = right - left
        }
    }
    return len

};
// @lc code=end
console.log(lengthOfLongestSubstring(' '))
console.log(lengthOfLongestSubstring(''))
console.log(lengthOfLongestSubstring('au')) //错误原因:找错了更新窗口的代码位置
