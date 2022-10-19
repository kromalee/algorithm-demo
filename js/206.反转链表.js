/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start

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
var reverseList = function (head) {
    if ((!head) || (!head.next)) {
        return head
    }
    var last = reverseList(head.next)
    head.next.next = head
    head.next = null
    return last
};
// @lc code=end

