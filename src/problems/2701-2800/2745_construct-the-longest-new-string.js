/**
 * 2745. Construct the Longest New String
 *
 * Link: https://leetcode.com/problems/construct-the-longest-new-string/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-27
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - Dynamic Programming (topic_13)
 * - Greedy (topic_17)
 * - Brainteaser (topic_32)
 *
 * Stats:
 * - Total Accepted: 26,928
 * - Total Submissions: 49,183
 * - Acceptance Rate: 54.8%
 */

/**
 * Approach: Greedy
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
const longestString = (x, y, z) => {
        const k = Math.min(x, y);
        const l = Math.min(1, Math.max(x - k, y - k));

        return 2 * (2 * k + l + z);
};

export { longestString };
