/**
 * 0981. Time Based Key-Value Store
 *
 * Link: https://leetcode.com/problems/time-based-key-value-store/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Binary Search (topic_11)
 * - Design (topic_25)
 *
 * Stats:
 * - Total Accepted: 724,008
 * - Total Submissions: 1,453,259
 * - Acceptance Rate: 49.8%
 *
 * Similar Problems:
 * - stock-price-fluctuation (Medium)
 */

/**
 * Approach: Binary Search
 */
class TimeMap {
        /**
         * Time Complexity: O(1)
         * Space Complexity: O(n * m)
         * `n` = number of keys, `m` = number of values associated with each key
         */
        constructor() {
                this.map = new Map();
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @param {string} key
         * @param {string} value
         * @param {number} timestamp
         * @return {void}
         */
        set(key, value, timestamp) {
                const val = this.map.get(key) ?? [];
                val.push([value, timestamp]);
                this.map.set(key, val);
        }

        /**
         * Time Complexity: O(log m)
         * Space Complexity: O(1)
         * `m` = number of values associated with `key`
         *
         * @param {string} key
         * @param {number} timestamp
         * @return {string}
         */
        get(key, timestamp) {
                const values = this.map.get(key);
                let l = 0;
                let r = values?.length - 1;
                let res = '';

                while (l <= r) {
                        const m = l + Math.floor((r - l) / 2);
                        const t = values[m][1];

                        if (t <= timestamp) {
                                res = values[m][0];
                                l = m + 1;
                        } else {
                                r = m - 1;
                        }
                }

                return res;
        }
}

export { TimeMap };
