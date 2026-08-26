/**
 * 1406. Stone Game III
 *
 * Link: https://leetcode.com/problems/stone-game-iii/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-08-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - Dynamic Programming (topic_13)
 * - Minimax (topic_35)
 * - Game Theory (topic_61073)
 * - Zero-Sum Game (topic_122082)
 * - Principal (position_principal)
 * - Weekly Contest 183 (contest_weekly-contest-183)
 *
 * Stats:
 * - Total Accepted: 211,925
 * - Total Submissions: 312,011
 * - Acceptance Rate: 67.9%
 *
 * Similar Problems:
 * - stone-game-ix (Medium)
 * - stone-game-vi (Medium)
 * - stone-game-vii (Medium)
 * - stone-game-v (Hard)
 * - stone-game-viii (Hard)
 */

/**
 * Approach: Recursion + Memoization
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `stoneValue.length`
 *
 * @param {number[]} stoneValue
 * @return {string}
 */
const stoneGameIII = (stoneValue) => {
        const n = stoneValue.length;
        const NINF = -1000 * 5 * 10 ** 4 - 1; // constraint
        const memo = new Int32Array(n).fill(NINF);

        const rec = (i) => {
                if (i === n) {
                        return 0;
                }

                let res = memo[i];

                if (res > NINF) {
                        return res;
                }

                let score = 0;

                for (let j = 0; j < 3 && i + j < n; j++) {
                        score += stoneValue[i + j];
                        res = Math.max(res, score - rec(i + j + 1));
                        memo[i] = res;
                }

                return res;
        };

        const tot = rec(0);

        return tot > 0 ? 'Alice' : tot < 0 ? 'Bob' : 'Tie';
};

export { stoneGameIII };
