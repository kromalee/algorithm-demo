/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    var window = new Map()
    var need = new Map()
    for (var i = 0; i < p.length; i++) {
        need.set(p[i], (need.get(p[i]) || 0) + 1)
    }
    var left = 0; var right = 0
    var valid = 0
    var result = []

    while (right < s.length) {
        // 扩张
        var c = s[right]
        right++
        // 扩张影响,先window,后valid
        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1)
            if (window.get(c) === need.get(c)) {
                valid++
            }
        }
        // 窗口宽度等于 结果length
        while (right - left >= p.length) {
            // 处理结果
            if (valid === need.size) {
                result.push(left)
            }

            // 收缩
            var d = s[left]
            left++
            // 收缩影响,先valid后window
            if (need.has(d)) {
                if (need.get(d) === window.get(d)) {
                    valid--
                }
                window.set(d, window.get(d) - 1)
            }
        }
    }
    return result
};
// @lc code=end
console.log(findAnagrams('cbaebabacd', 'abc'))
console.log(findAnagrams('abab', 'ab'))

