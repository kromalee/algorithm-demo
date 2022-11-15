/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    var result = Array(nums.length)
    var stack = []
    for (var idx = 2 * (nums.length) - 1; idx >= 0; idx--) {
        while (stack.length !== 0 && stack[stack.length - 1] <= nums[idx % nums.length]) {
            stack.pop()
        }
        result[idx % nums.length] = stack.length === 0 ? -1 : stack[stack.length - 1]
        stack.push(nums[idx % nums.length])
    }
    return result
};
// @lc code=end

