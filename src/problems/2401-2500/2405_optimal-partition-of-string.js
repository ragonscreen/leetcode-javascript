/**
 * 2405. Optimal Partition of String
 *
 * Link: https://leetcode.com/problems/optimal-partition-of-string/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-19
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Greedy (topic_17)
 *
 * Stats:
 * - Total Accepted: 276,299
 * - Total Submissions: 352,481
 * - Acceptance Rate: 78.4%
 *
 * Similar Problems:
 * - longest-substring-with-at-least-k-repeating-characters (Medium)
 * - longest-substring-without-repeating-characters (Medium)
 * - maximum-sum-of-distinct-subarrays-with-length-k (Medium)
 * - partition-array-into-disjoint-intervals (Medium)
 * - partition-labels (Medium)
 */

/**
 * Approach: Greedy + Bit Manipulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {number}
 */
const partitionString = (s) => {
        let res = 1;
        let set = 0;

        for (const c of s) {
                const mask = 1 << (c.charCodeAt(0) - 'a'.charCodeAt(0));

                if (set & mask) {
                        res++;
                        set = 0;
                }

                set |= mask;
        }

        return res;
};

/**
 * Approach: Greedy
 * Time Complexity: O(n * 25) = O(n)
 * Space Complexity: O(26) = O(1)
 *
 * @param {string} s
 * @return {number}
 */
const partitionString1 = (s) => {
        // faster than Set() because maximum size of `set` is 26
        let set = '';
        let res = 1;

        for (const c of s) {
                if (set.includes(c)) {
                        res++;
                        set = '';
                }

                set += c;
        }

        return res;
};

export { partitionString, partitionString1 };
