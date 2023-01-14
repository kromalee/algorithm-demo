/*
 * @lc app=leetcode.cn id=710 lang=javascript
 *
 * [710] 黑名单中的随机数
 */

// 关键词 : 紧凑

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} blacklist
 */
var Solution = function (n, blacklist) {

    // 先把所有的blacklist 放入mapping
    this.mapping = new Map()
    for (let index = 0; index < blacklist.length; index++) {
        const b = blacklist[index];
        this.mapping.set(b, 666)
    }
    // 记录最后的index
    var lastIndex = n - 1
    // 记录连续数组的size
    this.consequentSize = n - blacklist.length

    // 对blacklist 建立映射
    for (let index = 0; index < blacklist.length; index++) {
        const b = blacklist[index];
        if (b >= this.consequentSize) {
            continue;
        }
        else {
            while (this.mapping.has(lastIndex)) {
                lastIndex--
            }
            this.mapping.set(b, lastIndex)
            lastIndex--
        }
    }

};

/**
 * @return {number}
 */
Solution.prototype.pick = function () {
    var randomVal = Math.floor(Math.random() * this.consequentSize)
    if (this.mapping.has(randomVal)) {
        return this.mapping.get(randomVal)
    }
    else {
        return randomVal
    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */
// @lc code=end

