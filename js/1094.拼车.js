/*
 * @lc app=leetcode.cn id=1094 lang=javascript
 *
 * [1094] 拼车
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
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
    var difference = new Difference(Array(1001).fill(0))
    for (let index = 0; index < trips.length; index++) {
        const oneTrip = trips[index];
        var i = oneTrip[1]
        var j = oneTrip[2]-1
        var val = oneTrip[0]
        difference.increment(i, j, val)
    }
    var result = difference.result()
    if(Math.max(...result)>capacity){
        return false
    }
    else{
        return true
    }
};
// @lc code=end
console.log(carPooling([[2, 1, 5], [3, 3, 7]], 4))
console.log(carPooling([[2, 1, 5], [3, 3, 7]], 5))