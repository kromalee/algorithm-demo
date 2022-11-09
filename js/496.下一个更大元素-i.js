/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start

/**
 * 
 * @param {number[]} nums 
 */
var nextGreaterElement1 = function (nums) {
    var result = Array(nums.length)
    var stack = []
    for (let index = nums.length - 1; index >= 0; index--) {
        const element = nums[index];
        while (stack.length !== 0 && stack[stack.length - 1] <= element) {
            stack.pop()
        }
        result[index] = stack.length === 0 ? -1 : stack[stack.length - 1]
        stack.push(element)
    }
    return result
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    var result2 = nextGreaterElement1(nums2)
    var resultMap = new Map()
    nums2.forEach((obj, index) => {
        resultMap.set(obj, result2[index])
    })
    return nums1.map((obj) => {
        return resultMap.get(obj)
    })
};
// @lc code=end
console.log(nextGreaterElement([4, 1, 2], [1, 3, 2, 4]))
