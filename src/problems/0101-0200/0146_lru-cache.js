/**
 * 0146. LRU Cache
 *
 * Link: https://leetcode.com/problems/lru-cache/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-12
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - Linked List (topic_7)
 * - Design (topic_25)
 * - Doubly-Linked List (topic_61058)
 *
 * Stats:
 * - Total Accepted: 2,595,918
 * - Total Submissions: 5,487,220
 * - Acceptance Rate: 47.3%
 *
 * Similar Problems:
 * - design-compressed-string-iterator (Easy)
 * - design-most-recently-used-queue (Medium)
 * - design-in-memory-file-system (Hard)
 * - lfu-cache (Hard)
 */

/**
 * Approach: Hash Map
 */
class LRUCache {
        /**
         * Time Complexity: O(1)
         * Space Complexity: O(n)
         *
         * @param {number} capacity
         */
        constructor(capacity) {
                this.cap = capacity;
                this.cache = new Map();
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @param {number} key
         * @return {number}
         */
        get(key) {
                if (!this.cache.has(key)) {
                        return -1;
                }

                const val = this.cache.get(key);
                this.cache.delete(key);
                this.cache.set(key, val);

                return val;
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @param {number} key
         * @param {number} value
         * @return {void}
         */
        put(key, value) {
                if (this.cache.has(key)) {
                        this.cache.delete(key);
                }

                this.cache.set(key, value);

                if (this.cache.size > this.cap) {
                        const first = this.cache.keys().next().value;
                        this.cache.delete(first);
                }
        }
}

export { LRUCache };
