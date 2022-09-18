/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    var fast = 0;
    var slow = 0
    for (; fast < nums.length; fast++) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast]
            slow++
        }
    }
    return slow

};
// @lc code=end
