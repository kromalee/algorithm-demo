/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    var nullHead = new ListNode(null)
    nullHead.next = head
    var p1 = nullHead
    var p2 = nullHead
    var count = 0
    while (p1.next) {
        count++
        p1 = p1.next
        if (count > n) {
            p2 = p2.next
        }
    }
    p2.next = p2.next.next

    return nullHead.next

};
// @lc code=end

LinkList.log(removeNthFromEnd((new LinkList([1, 2, 3, 4, 5]).getLinkList()), 2))
LinkList.log(removeNthFromEnd((new LinkList([1]).getLinkList()), 1))
LinkList.log(removeNthFromEnd((new LinkList([1, 2]).getLinkList()), 1))