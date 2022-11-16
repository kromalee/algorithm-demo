/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
class MonotonicQueue {
    constructor() {
        this.result = []
    }
    push(n) {
        while (this.result.length !== 0 && this.result[this.result.length - 1] < n) {
            this.result.pop()
        }
        this.result.push(n)
    }
    pop(n) {
        if (this.result.length === 0) {

        }
        else if (this.result[0] === n) {
            this.result.shift()
        }
    }
    max() {
        return this.result[0]
    }

}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    var window = new MonotonicQueue()
    var result = new Array()
    for (let index = 0; index < nums.length; index++) {
        if (index < k - 1) {
            window.push(nums[index])
        }
        else {
            window.push(nums[index])
            result.push(window.max())
            window.pop(nums[index - k + 1])
        }
    }
    return result
};
// @lc code=end
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
