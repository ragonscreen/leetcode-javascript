/**
 * 3736. Minimum Moves to Equal Array Elements III
 *
 * Link: https://leetcode.com/problems/minimum-moves-to-equal-array-elements-iii/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-11-10
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Math (topic_8)
 * - Mid Level (position_mid-level)
 * - Biweekly Contest 169 (contest_biweekly-contest-169)
 *
 * Stats:
 *
 * - Total Accepted: 171,205
 * - Total Submissions: 192,788
 * - Acceptance Rate: 88.8%
 */

/**
 * Approach: Simulation [II]
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @returns {number}
 */
const minMoves = (nums) => {
        let mx = -1;
        let sm = 0;

        for (const v of nums) {
                mx = Math.max(mx, v);
                sm += v;
        }

        return mx * nums.length - sm;
};

/**
 * Approach: Simulation [I]
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @returns {number}
 */
const minMoves1 = (nums) => {
        const mx = Math.max(...nums);

        return nums.reduce((t, c) => t + (mx - c), 0);
};

export { minMoves, minMoves1 };
