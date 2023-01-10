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

LFUCache.prototype.increaseFreq = function (key) {
    // 修改key to freq
    var originalFreq = this.keyToFreq.get(key) || 0
    var newFreq = originalFreq + 1
    this.keyToFreq.set(key, newFreq)
    // 修改freq to keys

    // 修改原始freq to keys
    var originalKeys = this.freqToKeys.get(originalFreq)
    if (originalKeys) {
        originalKeys.delete(key)
    }

    // 修改新的freq to keys
    if (this.freqToKeys.has(newFreq)) {
        var newFreqKeys = this.freqToKeys.get(newFreq).add(key)
    }
    else {
        var set = new Set()
        set.add(key)
        this.freqToKeys.set(newFreq, set)
    }

    if (!originalKeys) {
        if (originalFreq === this.minFreq) {
            this.minFreq++
        }
    }
    if (originalKeys && originalKeys.size === 0) {
        this.freqToKeys.delete(originalFreq)
        if (originalFreq === this.minFreq) {
            this.minFreq++
        }
    }
}
LFUCache.prototype.removeMinFreqKey = function () {
    var keys = this.freqToKeys.get(this.minFreq)
    if (keys) {
        var delKey = keys.keys().next().value
        keys.delete(delKey)
        if (keys.size === 0) {
            this.freqToKeys.delete(this.minFreq)
        }
        this.keyToVal.delete(delKey)
        this.keyToFreq.delete(delKey)
    }
}

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
    if (!this.keyToVal.has(key)) {
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
    // 已有键,直接更新
    if (this.keyToVal.has(key)) {
        this.keyToVal.set(key, value)
        this.increaseFreq(key)
    }
    else {
        // 容量为0直接跳过
        if (this.cap === 0) {
            return
        }
        // 是一个新键
        if (this.keyToVal.size === this.cap) {
            this.removeMinFreqKey()
        }
        this.keyToVal.set(key, value)
        this.keyToFreq.set(key, 1)
        if (!this.freqToKeys.get(1)) {
            this.freqToKeys.set(1, new Set())
            this.freqToKeys.get(1).add(key)
        }
        else {
            this.freqToKeys.get(1).add(key)
        }
        this.minFreq = 1
    }



};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
// var lfu = new LFUCache(2)
var lfu = new LFUCache(0);
console.log(lfu.put(0, 0))
console.log(lfu.get(0))

