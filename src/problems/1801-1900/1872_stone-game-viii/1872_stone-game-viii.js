/**
 * 1872. Stone Game VIII
 *
 * Link: https://leetcode.com/problems/stone-game-viii/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-08-31
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Math (topic_8)
 * - Dynamic Programming (topic_13)
 * - Minimax (topic_35)
 * - Prefix Sum (topic_61068)
 * - Game Theory (topic_61073)
 * - Zero-Sum Game (topic_122082)
 * - Senior Staff (position_senior-staff)
 * - Weekly Contest 242 (contest_weekly-contest-242)
 *
 * Stats:
 *
 * - Total Accepted: 86,709
 * - Total Submissions: 115,724
 * - Acceptance Rate: 74.9%
 *
 * Similar Problems:
 *
 * - stone-game (Medium)
 * - stone-game-ii (Medium)
 * - stone-game-ix (Medium)
 * - stone-game-vi (Medium)
 * - stone-game-vii (Medium)
 * - stone-game-iii (Hard)
 * - stone-game-iv (Hard)
 * - stone-game-v (Hard)
 * - stone-game-viii (Hard)
 */

/**
 * Approach: Prefix Sum + Dynamic Programming
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `stones.length`
 *
 * @param {number[]} stones
 * @returns {number}
 */
const stoneGameVIII = (stones) => {
        const n = stones.length;
        const p = new Int32Array(n + 1);

        for (let i = 0; i < n; i++) {
                p[i + 1] = p[i] + stones[i];
        }

        let dp = p[n];

        for (let i = n - 2; i > 0; i--) {
                dp = Math.max(dp, p[i + 1] - dp);
        }

        return dp;
};

export { stoneGameVIII };
