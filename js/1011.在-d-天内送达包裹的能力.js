/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lc code=start

/**
 * 
 * @param {*} weights 
 * @param {*} w 
 */

function f(weights, x) {
    var days = 0;
    for (var i = 0; i < weights.length;) {
        // 剩余容量
        var cap = x
        while (i < weights.length) {
            if (cap < weights[i]) {
                break;
            }
            else {
                cap -= weights[i]
            }
            i++
        }
        days++
    }
    return days
}


/**
 *  @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
    // return f(weights, 15)
    // 确定搜素区间  定义域 [left,right)
    var left = 0;
    var right = 1
    for (var i = 0; i < weights.length; i++) {
        if (left < weights[i]) {
            left = weights[i]
        }
        right += weights[i]
    }



    while (left < right) {
        var mid = left + Math.floor((right - left) / 2)
        if (f(weights, mid) === days) {
            // 求最大值还是最小值
            right = mid
        }
        else if (f(weights, mid) > days) {
            // 使f(x)更小些
            left = mid + 1
        }
        else if (f(weights, mid) < days) {
            // 使f(x)更大些
            right = mid
        }
    }
    return left

};
// @lc code=end
console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))