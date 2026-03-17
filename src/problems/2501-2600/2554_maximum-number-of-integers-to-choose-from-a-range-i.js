/**
 * 2554. Maximum Number of Integers to Choose From a Range I
 *
 * Link: https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-09
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Binary Search (topic_11)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 168,970
 * - Total Submissions: 248,577
 * - Acceptance Rate: 68.0%
 *
 * Similar Problems:
 * - find-all-numbers-disappeared-in-an-array (Easy)
 * - append-k-integers-with-minimal-sum (Medium)
 * - maximum-number-of-integers-to-choose-from-a-range-ii (Medium)
 * - replace-elements-in-an-array (Medium)
 * - first-missing-positive (Hard)
 */

/**
 * Approach: Hash Set
 * Time Complexity: O(n)
 * Space Complexity: O(m)
 * `m` = length of `banned`
 *
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
const maxCount = (banned, n, maxSum) => {
        const set = new Set(banned);
        let cur = 1;
        let sum = 0;
        let res = 0;

        while (cur <= n && sum + cur <= maxSum) {
                if (set.has(cur)) {
                        cur++;
                } else {
                        sum += cur;
                        cur++;
                        res++;
                }
        }

        return res;
};

export { maxCount };
