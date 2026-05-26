/**
 * 3043. Find the Length of the Longest Common Prefix
 *
 * Link: https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-25
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Trie (topic_27)
 * - Senior (position_senior)
 * - Weekly Contest 385 (contest_weekly-contest-385)
 *
 * Stats:
 * - Total Accepted: 175,838
 * - Total Submissions: 308,311
 * - Acceptance Rate: 57.0%
 *
 * Similar Problems:
 * - longest-common-prefix (Easy)
 * - longest-common-suffix-queries (Hard)
 */

/**
 * Approach: Math
 * Time Complexity: O(n log a + m log b)
 * Space Complexity: O(k)
 * `n` = `arr1.length`, `m` = `arr2.length`
 * `a` = `max(arr1[i])`, `b` = `max(arr2[i])`, `k` = `sum(log arr1[i])`
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
const longestCommonPrefix = (arr1, arr2) => {
        const n = arr1.length;
        const m = arr2.length;
        const set = new Set();

        for (let i = 0; i < n; i++) {
                let num = arr1[i];

                while (num && !set.has(num)) {
                        set.add(num);
                        num = 0 | (num / 10);
                }
        }

        let res = 0;

        for (let i = 0; i < m; i++) {
                let num = arr2[i];

                while (num) {
                        if (set.has(num)) {
                                const len = (0 | Math.log10(num)) + 1;
                                res = Math.max(res, len);
                                break;
                        }

                        num = 0 | (num / 10);
                }
        }

        return res;
};

export { longestCommonPrefix };
