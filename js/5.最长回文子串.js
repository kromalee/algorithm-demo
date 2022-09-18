/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    var result = ''
    for (var i = 0; i < s.length; i++) {
        // 以i为中心的最长回文字符串
        var res1 = palindrome(s, i, i)
        // 以i和i+1为中心的最长回文字符串
        var res2 = palindrome(s, i, i + 1)
        result = res1.length > result.length ? res1 : result
        result = res2.length > result.length ? res2 : result
    }
    return result

};
/**
 * 
 * @param {*} s 字符串
 * @param {*} l 左中心
 * @param {*} r 右中心
 */
var palindrome = function (s, l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
        l--;
        r++
    }
    return s.substring(l + 1, r)
}


// @lc code=end

