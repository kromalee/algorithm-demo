/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    var result = new LinkList([])
    var resultP = result.getHead()
    for (let index = 0; index < lists.length; index++) {
        var oneList = lists[index];
        Math.min()
    }
};
// @lc code=end
LinkList.log(
    mergeKLists(
        [
            (new LinkList([1, 4, 5])).getLinkList(),
            (new LinkList([1, 3, 4])).getLinkList(),
            (new LinkList([2, 6])).getLinkList()
        ])
)

LinkList.log(
    mergeKLists(
        [
            (new LinkList([])).getLinkList(),
        ])
) 
