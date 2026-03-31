/**
 * 1299. Replace Elements with Greatest Element on Right Side
 *
 * Link: https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-03-31
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 *
 * Stats:
 * - Total Accepted: 534,064
 * - Total Submissions: 741,402
 * - Acceptance Rate: 72.0%
 *
 * Similar Problems:
 * - two-furthest-houses-with-different-colors (Easy)
 * - next-greater-element-iv (Hard)
 */

/**
 * Approach: Prefix Max
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = (arr) => {
        let max = -1;

        for (let i = arr.length - 1; i >= 0; i--) {
                const val = arr[i];
                arr[i] = max;
                max = Math.max(max, val);
        }

        return arr;
};

export { replaceElements };
