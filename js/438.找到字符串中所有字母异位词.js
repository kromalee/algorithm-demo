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
    var len = p.length
    var result = []

    while (right < s.length) {
        var c = s[right]
        right++
        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1)
            if (window.get(c) === need.get(c)) {
                valid++
            }
        }
        while (valid === need.size) {
            var d = s[left]
            result.push(left)
            left++
            if (need.has(d)) {
                window.set(d, window.get(d) - 1)
                if (need.get(d) === window.get(d)) {
                    valid--
                }
            }
        }
    }
    return result
};
// @lc code=end
console.log(findAnagrams('cbaebabacd', 'abc'))
console.log(findAnagrams('abab', 'ab'))

