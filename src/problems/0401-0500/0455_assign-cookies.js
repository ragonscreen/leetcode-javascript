/**
 * 0455. Assign Cookies
 *
 * Link: https://leetcode.com/problems/assign-cookies/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 940,221
 * - Total Submissions: 1,713,306
 * - Acceptance Rate: 54.9%
 */

/**
 * Approach: Sorting + Greedy + Two Pointers
 * Time Complexity: O(n log n)
 * Space Complexity: O(1) auxiliary, O(n) for sorting
 *
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = (g, s) => {
        g.sort((a, b) => b - a);
        s.sort((a, b) => b - a);
        let res = 0;

        for (const greed of g) {
                res += greed <= s[res];
        }

        return res;
};

export { findContentChildren };
