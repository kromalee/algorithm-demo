/*
 * @lc app=leetcode.cn id=460 lang=javascript
 *
 * [460] LFU 缓存
 */

// @lc code=start

/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
    this.keyToVal = new Map()
    this.keyToFreq = new Map()
    this.freqToKeys = new Map()
    this.minFreq = 0
    this.cap = capacity
};

LRUCache.prototype.increaseFreq = function (key) {
    // 修改key to freq
    var originalFreq = this.keyToFreq.get(key) || 0
    var newFreq = originalFreq++
    this.keyToFreq.set(key, newFreq)
    // 修改freq to keys

    // 修改原始freq to keys
    var originalKeys = this.freqToKeys.get(originalFreq)
    if (originalFreq) {
        originalFreq.delete(key)
    }

    // 修改新的freq to keys
    var newFreqKeys = this.freqToKeys.get(newFreq)
    newFreqKeys.add(key)
    if (originalFreq === this.minFreq) {
        this.minFreq++
    }
}
LRUCache.prototype.removeMinFreqKey = function () {

}

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
    if (!this.keyToVal.get(key)) {
        return -1
    }
    this.increaseFreq(key)
    return this.keyToVal.get(key)
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
    if (this.keyToVal.size === this.cap) {
        this.removeMinFreqKey()
    }
    this.keyToVal.set(key, value)
    this.increaseFreq(key)
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

