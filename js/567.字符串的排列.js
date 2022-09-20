/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    var window = new Map()
    var need = new Map()
    //  need
    for (var i = 0; i < s1.length; i++) {
        var el = s1[i]
        need.has(el) ? need.set(el, need.get(el) + 1) : need.set(el, 1)
    }
    var valid = 0 //都满足时表示条件达成

    // result
    var start = 0;
    var len = 0

    // pointer
    var left = 0;
    var right = 0;

    while (right < s2.length) {
        var c = s2[right]
        right++
        // update result
        if (need.has(c)) {
            window.has(c) ? window.set(c, window.get(c) + 1) : window.set(c, 1)
            if (need.get(c) === window.get(c)) {
                valid++
            }
        }

        // 需要收缩窗口
        while (right - left >= s1.length) {
            if (valid === need.size) {
                return true
            }
            var d = s2[left]
            left++


            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--
                }
                window.set(d, window.get(d) - 1)
            }
        }
    }
    return false

};
// @lc code=end

console.log(checkInclusion('ab', 'eidbaooo'))
console.log(checkInclusion('ab', 'eidboaoo'))