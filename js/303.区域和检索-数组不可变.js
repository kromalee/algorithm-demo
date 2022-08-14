/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    var preSum = Array(nums.length + 1).fill(0)
    for (var i = 1; i < preSum.length; i++) {
        preSum[i] = preSum[i - 1] + nums[i - 1]
    }
    this.preSum = preSum

};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.preSum[right + 1] - this.preSum[left]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

var numArray = new NumArray([-2, 0, 3, -5, 2, -1])
console.log(numArray.sumRange(0, 2)); // return 1 ((-2) + 0 + 3)
console.log(numArray.sumRange(2, 5)); // return -1 (3 + (-5) + 2 + (-1)) 
console.log(numArray.sumRange(0, 5)); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))