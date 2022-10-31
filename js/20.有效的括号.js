/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */



// @lc code=start

/**
 * 
 * @param {*} str 
 * @returns 
 */
function leftOf(str) {
    if (str === ')') {
        return '('
    }
    if (str === '}') {
        return '{'
    }
    if (str === ']') {
        return '['
    }
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var arr = s.split('')
    var stack = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (['{', '[', '('].indexOf(element) !== -1) {
            stack.push(element)
        }
        else if (stack.length !== 0 && stack[stack.length - 1] === leftOf(element)) {
            stack.pop()
        }
        else {
            return false
        }
    }
    return stack.length === 0
};
// @lc code=end

console.log(isValid('()'))

