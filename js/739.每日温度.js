/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    var result = []
    var stack = []
    for (let index = temperatures.length - 1; index >= 0; index--) {
        const element = temperatures[index];
        while (stack.length !== 0 && temperatures[stack[stack.length - 1]] <= element) {
            stack.pop()
        }
        result[index] = stack.length === 0 ? 0 : stack[stack.length - 1] - index
        stack.push(index)
    }
    return result
};
// @lc code=end

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))