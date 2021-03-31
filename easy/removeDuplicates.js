/**
 * @param {number[]} nums
 * @return {number}
 */
// const removeDuplicates = function (nums) {
//     let count = 0
//     let index = 0
//     let delIndex = 0
//     let current = nums[0]
//
//     while (index <= nums.length) {
//         const element = nums[index]
//         if (current !== element) {
//             current = element;
//             if (count > 1) {
//                 nums.splice(delIndex, count - 1)
//             }
//             count = 0;
//             delIndex++;
//             index = delIndex;
//         } else {
//             count++;
//             index++;
//         }
//     }
//     return nums.length
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    if (nums.length === 0) return 0
    let j = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j++
            nums[j] = nums[i]
        }
    }
    nums.length = j + 1
    return nums.length
};

const arr = [1, 1, 2, 3, 4, 4, 5]
console.log(removeDuplicates(arr))
console.log(arr)


