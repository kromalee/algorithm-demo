/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    // 记录 目标和窗口的匹配情况
    var need = new Map()
    var window = new Map()
    for (var index = 0; index < t.length; index++) {
        var i = t[index]
        need.has(i) ? need.set(i, need.get(i) + 1) : need.set(i, 1)
    }
    // 记录窗口达到目标匹配情况的次数 
    var valid = 0;
    // 左右指针
    var left = 0;
    var right = 0;
    // 记录结果
    var start = 0; len = Infinity

    while (right < s.length) {
        // c 是即将移入窗口的字符
        var c = s[right]
        // 扩大窗口
        right++
        // 进行窗口内数据的一系列更新

        // 这个字母是目标字母
        if (need.has(c)) {
            // window记录该目标字母
            window.has(c) ? window.set(c, window.get(c) + 1) : window.set(c, 1)
            // 如果一个字母数量匹配完成
            if (window.get(c) === need.get(c)) {
                valid++
            }
        }
        // 左侧窗口是否要收缩
        while (valid === need.size) {
            // 更新结果
            if (right - left < len) {
                start = left
                len = right - left
            }
            //  左指针右移
            var d = s[left]
            left++
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--
                }
                window.set(d, window.get(d) - 1)
            }
        }

    }
    return len === Infinity ? '' : s.substring(start, start + len)
};
// @lc code=end
console.log(minWindow('ADOBECODEBANC', 'ABC'))
