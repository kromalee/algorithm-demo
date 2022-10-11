/*
 * @lc app=leetcode.cn id=410 lang=javascript
 *
 * [410] 分割数组的最大值
 */

// @lc code=start

// 转换为 [1011]
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


/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
    return shipWithinDays(nums, m)
};
// @lc code=end

