/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start

var f = function (piles, x) {
    var hrs = 0
    for (var i = 0; i < piles.length; i++) {
        hrs += Math.floor(piles[i] / x)
        if (piles[i] % x > 0) {
            hrs++
        }
    }
    return hrs
}

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    var left = 0;
    var right = 1000000000 + 1
    while (left < right) {
        var mid = left + Math.floor((right - left) / 2)
        if (f(piles, mid) === h) {
            right = mid
        }
        else if (f(piles, mid) > h) {
            left = mid + 1
        }
        else if (f(piles, mid) < h) {
            right = mid
        }

    }
    return left
};
// @lc code=end
console.log(minEatingSpeed([3, 6, 7, 11], 8))