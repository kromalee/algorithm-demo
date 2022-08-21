/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    var dummy = new ListNode(-1);
    var p = dummy
    var p1 = list1
    var p2 = list2
    while (p1 && p2) {
        if (p1.val < p2.val) {
            p.next = p1
            p1 = p1.next
        }
        else {
            p.next = p2
            p2 = p2.next
        }
        p=p.next
    }
    if(p1){
        p.next=p1
        p=p.next
    }
    if(p2){
        p.next=p2
        p=p.next
    }
    return dummy.next
};
// @lc code=end

