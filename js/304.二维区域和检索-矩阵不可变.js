/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    var rowCount = matrix.length
    var colCount = matrix[0].length
    var preSum = []
    for (var i = 0; i <= rowCount; i++) {
        preSum.push(new Array(colCount + 1).fill(0))
        if (i > 0) {
            for (var j = 1; j <= colCount; j++) {
                preSum[i][j] = preSum[i][j - 1] + preSum[i - 1][j] - preSum[i - 1][j - 1] + matrix[i - 1][j - 1]
            }
        }

    }
    this.preSum = preSum

};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    return this.preSum[row2 + 1][col2 + 1] - this.preSum[row2 + 1][col1] - this.preSum[row1][col2 + 1] + this.preSum[row1][col1]
};
/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

var numberMartrix = new NumMatrix([
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]])
console.log(numberMartrix.sumRegion(2, 1, 4, 3));   // return 8 (红色矩形框的元素总和)
console.log(numberMartrix.sumRegion(1, 1, 2, 2)); // return 11 (绿色矩形框的元素总和)
console.log(numberMartrix.sumRegion(1, 2, 2, 4)); // return 12 (蓝色矩形框的元素总和)