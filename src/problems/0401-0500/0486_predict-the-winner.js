/**
 * 486. Predict the Winner
 *
 * Link: https://leetcode.com/problems/predict-the-winner/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-08-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Math (topic_8)
 * - Dynamic Programming (topic_13)
 * - Recursion (topic_31)
 * - Minimax (topic_35)
 * - Game Theory (topic_61073)
 * - Zero-Sum Game (topic_122082)
 * - Senior Staff (position_senior-staff)
 *
 * Stats:
 *
 * - Total Accepted: 420,591
 * - Total Submissions: 701,956
 * - Acceptance Rate: 59.9%
 *
 * Similar Problems:
 *
 * - find-the-number-of-winning-players (Easy)
 * - find-the-winning-player-in-coin-game (Easy)
 * - can-i-win (Medium)
 * - count-the-number-of-winning-sequences (Hard)
 */

/**
 * Approach: Recursion + Memoization
 * Time Complexity: O(n^2)
 * Space Complexity: O(n^2)
 * `n` = `nums.length`
 *
 * At each turn, the next call to `rec` is performed from the opponent's
 * perspective. Thus, the value must be subtracted from the current player's
 * gain.
 *
 * @param {number[]} nums
 * @returns {boolean}
 */
const predictTheWinner = (nums) => {
        const n = nums.length;

        if (n % 2 === 0) {
                return true;
        }

        const memo = Array.from({ length: n }, (_) => new Int32Array(n).fill(-1));

        const rec = (l, r) => {
                let res = memo[l][r];

                if (res > -1) {
                        return res;
                }

                if (l === r) {
                        res = nums[l];
                        memo[l][r] = res;

                        return res;
                }

                res = Math.max(nums[l] - rec(l + 1, r), nums[r] - rec(l, r - 1));

                memo[l][r] = res;

                return res;
        };

        return rec(0, n - 1) >= 0;
};

export { predictTheWinner };
