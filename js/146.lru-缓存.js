/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start

class Node {
    value;
    key;
    next;
    prev;
    constructor(k, v) {
        this.key = k;
        this.value = v
    }
}
class DobuleLinkedList {
    head;
    tail;
    size;
    constructor() {
        this.head = new Node(0, 0)
        this.tail = new Node(0, 0)
        this.head.next = this.tail
        this.tail.prev = this.head
        this.size = 0
    }
    addLast(x) {
        x.prev = this.tail.prev
        x.next = this.tail
        this.tail.prev.next = x
        this.tail.prev = x
        this.size++
    }
    removeFirst() {
        if (this.head.next === this.tail) {
            return null
        }
        else {
            var first = this.head.next
            this.remove(first)
            return first
        }
    }
    remove(x) {
        x.prev.next = x.next
        x.next.prev = x.prev
        this.size--
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.cap = capacity
    this.hashMap = new Map()
    this.dbLinkedList = new DobuleLinkedList()


};
/**
 * 1. get时 先命中haskMap获取Node,并提升到队列尾部,未命中则返回null
 * 2. put时 如果已有则直接提升到队尾 ,如果没有则在尾部添加(判断容量)
 */

LRUCache.prototype.makeRecently = function (node) {
    this.dbLinkedList.remove(node)
    this.dbLinkedList.addLast(node)
}
LRUCache.prototype.addNewItem = function (key, value) {
    var node = new Node(key, value)
    this.dbLinkedList.addLast(node)
    this.hashMap.set(key, node)
}
LRUCache.prototype.removeOld = function () {
    var removeNode = this.dbLinkedList.removeFirst()
    this.hashMap.delete(removeNode.key)
}
LRUCache.prototype.removeKey = function (key) {
    var node = this.hashMap.get(key)
    this.dbLinkedList.remove(node)
    this.hashMap.delete(key)
}


/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    var node = this.hashMap.get(key)
    if (node) {
        this.makeRecently(node)
        return node.value
    }
    else {
        return -1
    }

};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    var hasNode = this.hashMap.get(key)
    if (hasNode) {
        this.removeKey(key)
    }
    else if (this.hashMap.size >= this.cap) {
        this.removeOld()
    }
    else {

    }
    this.addNewItem(key, value)

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

