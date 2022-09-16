/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var slow = 0
    var fast = 0
    for (var index = 0; index < nums.length; index++) {
        if (nums[fast] > nums[slow]) {
            slow++
            nums[slow] = nums[fast]
        }
        fast++
    }
    nums.length = slow + 1
    return nums.length
};
// @lc code=end

console.log(removeDuplicates([1, 1, 2]))

