/**
 * 1033. Moving Stones Until Consecutive
 *
 * Link: https://leetcode.com/problems/moving-stones-until-consecutive/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-27
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - Brainteaser (topic_32)
 *
 * Stats:
 * - Total Accepted: 34,549
 * - Total Submissions: 66,142
 * - Acceptance Rate: 52.2%
 */

/**
 * Approach: Math
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
const numMovesStones = (a, b, c) => {
        const [l, m, r] = [a, b, c].sort((x, y) => x - y);
        const gap = r - l - 2;

        if (gap === 0) {
                return [0, 0];
        }

        return Math.min(r - m - 1, m - l - 1) < 2 ? [1, gap] : [2, gap];
};

export { numMovesStones };
