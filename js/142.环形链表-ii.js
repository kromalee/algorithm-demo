/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    var slow = head
    var fast = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next;
        if (slow === fast) {
            break;
        }
    }
    if (fast === null || fast.next === null) {
        return null
    }
    slow = head
    while (slow !== fast) {
        slow = slow.next
        fast = fast.next
    }
    return slow
};
// @lc code=end

