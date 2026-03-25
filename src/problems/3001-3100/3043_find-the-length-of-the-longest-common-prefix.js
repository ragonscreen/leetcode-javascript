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
 * Approach: Hash Set + Math
 * Time Complexity: O(max(n log a, m log b))
 * Space Complexity: O(k)
 * `n` = length of `arr1`, `m` = length of `arr2`
 * `a` = largest number in `arr1`, `b` = largest number in `arr2`
 * `k` = total number of prefixes of all numbers
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
const longestCommonPrefix = (arr1, arr2) => {
        const set = new Set();

        for (let num of arr1) {
                while (num > 0 && !set.has(num)) {
                        set.add(num);
                        num = 0 | (num / 10);
                }
        }

        let res = 0;

        for (let num of arr2) {
                while (num > 0) {
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
