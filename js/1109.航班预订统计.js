/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
/**
 * 
 * @param {number[]} nums 
 */

 var Difference = function (nums) {
    var diff = Array(nums.length).fill(0)
    diff[0] = nums[0]
    for (var i = 1; i < diff.length; i++) {
        diff[i] = nums[i] - nums[i - 1]
    }
    this.diff = diff
}
/**
 *
 * @param {number} i 闭区间起点
 * @param {number} j 闭区间终点
 * @param {number} val 区间增加的数可以是负数
 */
Difference.prototype.increment = function (i, j, val) {
    this.diff[i] += val
    if (j + 1 < this.diff.length) {
        this.diff[j + 1] -= val
    }
}
/**
 * 
 * @returns {number[]} 恢复原数组
 */
Difference.prototype.result = function () {
    var res = Array(this.diff.length).fill(0)
    res[0] = this.diff[0]
    for (var i = 1; i < res.length; i++) {
        res[i] = res[i - 1] + this.diff[i]
    }
    return res
}

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    var differnce=new Difference(Array(n).fill(0))
    for (let index = 0; index < bookings.length; index++) {
        const oneBooking = bookings[index];
        var i=oneBooking[0]-1
        var j=oneBooking[1]-1
        var val=oneBooking[2]
        differnce.increment(i,j,val)
    }
    return differnce.result()
};
// @lc code=end

