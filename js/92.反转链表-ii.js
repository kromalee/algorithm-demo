/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start

// 后面不变的节点
var successor = null
var reverseN = function (head, n) {
    if (n == 1) {
        successor = head.next
        return head
    }
    var last = reverseN(head.next, n - 1)
    head.next.next = head
    head.next = successor
    return last

}


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */




/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (left === 1) {
        return reverseN(head, right)
    }
    head.next = reverseBetween(head.next, left - 1, right - 1)
    return head
};
// @lc code=end

