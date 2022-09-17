/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */


// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (head === null) { return null }
    var slow = head
    var fast = head
    while (fast) {
        if (fast.val > slow.val) {
            slow.next = fast
            slow = slow.next
        }
        fast = fast.next
    }
    slow.next = null
    return head
};
// @lc code=end

/**
 * 链表节点
 * @param {*} val
 * @param {ListNode} next
 */
var ListNode = function (val, next = null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * 使用数组初始化链表
 * @param {Array} array 
 */
var LinkList = function (array) {
    let dummy = new ListNode()
    let pre = dummy;
    array.forEach(x => pre = pre.next = new ListNode(x));
    this.head = dummy
}
/**
 * 
 * @returns {ListNode}
 */

LinkList.prototype.getHead = function () {
    return this.head
}

/**
 * 获取链表(不带虚拟头节点)
 * @returns {ListNode} 
 */
LinkList.prototype.getLinkList = function () {
    return this.head.next
}
/**
 * 将链表转化为数组
 * @returns {Array}
 */
LinkList.prototype.getArray = function () {
    var list = this.getLinkList()
    let a = [];
    while (list) {
        a.push(list.val);
        list = list.next;
    }
    return a;
}
/**
 * 打印链表
 */
LinkList.prototype.log = function () {
    var list = this.getLinkList()
    let str = 'list: ';
    while (list) {
        str += list.val + '->';
        list = list.next;
    }
    str += 'end';
    console.log(str);
}
/**
 * 
 * @param {ListNode} head 
 */
LinkList.log = function (head) {
    var list = head
    let str = 'list: ';
    while (list) {
        str += list.val + '->';
        list = list.next;
    }
    str += 'end';
    console.log(str);
}

// LinkList.log(deleteDuplicates((new LinkList([1, 1, 2])).getLinkList()))
LinkList.log(deleteDuplicates((new LinkList([1, 1, 2, 3, 3])).getLinkList()))