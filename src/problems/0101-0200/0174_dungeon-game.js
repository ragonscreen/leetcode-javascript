/**
 * 0174. Dungeon Game
 *
 * Link: https://leetcode.com/problems/dungeon-game/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-05-16
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Dynamic Programming (topic_13)
 * - Matrix (topic_61053)
 *
 * Stats:
 * - Total Accepted: 302,935
 * - Total Submissions: 732,922
 * - Acceptance Rate: 41.3%
 *
 * Similar Problems:
 * - check-if-there-is-a-path-with-equal-number-of-0s-and-1s (Medium)
 * - minimum-health-to-beat-game (Medium)
 * - minimum-path-cost-in-a-grid (Medium)
 * - minimum-path-sum (Medium)
 * - unique-paths (Medium)
 * - cherry-pickup (Hard)
 * - paths-in-matrix-whose-sum-is-divisible-by-k (Hard)
 */

/**
 * Approach: Dynamic Programming
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 *
 * @param {number[][]} dungeon
 * @return {number}
 */
const calculateMinimumHP = (dungeon) => {
        const n = dungeon.length;
        const m = dungeon[0].length;
        const p = (y, x) => m * y + x;
        const dp = new Uint32Array(n * m);
        dp[n * m - 1] = Math.max(0, -dungeon[n - 1][m - 1]) + 1;

        for (let y = n - 1; y > -1; y--) {
                for (let x = m - 1; x > -1; x--) {
                        if (y === n - 1 && x === m - 1) {
                                continue;
                        }

                        const p1 = dp[p(y, x + 1)];
                        const p2 = dp[p(y + 1, x)];
                        const min =
                                y === n - 1
                                        ? p1
                                        : x === m - 1
                                          ? p2
                                          : Math.min(p1, p2);

                        dp[p(y, x)] = Math.max(1, min - dungeon[y][x]);
                }
        }

        return dp[0];
};

export { calculateMinimumHP };
