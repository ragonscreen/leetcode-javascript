/**
 * 1208. Get Equal Substrings Within Budget
 *
 * Link: https://leetcode.com/problems/get-equal-substrings-within-budget/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-20
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Binary Search (topic_11)
 * - Sliding Window (topic_55821)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 199,594
 * - Total Submissions: 335,104
 * - Acceptance Rate: 59.6%
 *
 * Similar Problems:
 * - longest-nice-subarray (Medium)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
const equalSubstring = (s, t, maxCost) => {
        let cost = 0;
        let res = 0;

        for (let l = 0, r = 0; r < s.length; r++) {
                cost += Math.abs(s.charCodeAt(r) - t.charCodeAt(r));

                while (cost > maxCost) {
                        cost -= Math.abs(s.charCodeAt(l) - t.charCodeAt(l++));
                }

                res = Math.max(res, r - l + 1);
        }

        return res;
};

export { equalSubstring };
