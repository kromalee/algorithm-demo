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

// test Difference
var difference = new Difference([8, 2, 6, 3, 1])
difference.increment(1, 3, 3)
console.log(difference.result()) //except [8,5,9,6,1]

/**
 * 
 * @param {number} length 
 * @param {number[][]} updates 
 */

var getModifiedArray = function (length, updates) {
    var nums = Array(length).fill(0)
    var df = new Difference(nums)
    for (let index = 0; index < updates.length; index++) {
        const update = updates[index];
        var i = update[0]
        var j = update[1]
        var val = update[2]
        df.increment(i, j, val)
    }
    return df.result()
}
// test getModifiedArray
console.log(getModifiedArray(5, [[1, 3, 2], [2, 4, 3], [0, 2, -2]]))



