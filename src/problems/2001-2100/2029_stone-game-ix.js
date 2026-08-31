/**
 * 2029. Stone Game IX
 *
 * Link: https://leetcode.com/problems/stone-game-ix/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-08-31
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - Greedy (topic_17)
 * - Minimax (topic_35)
 * - Counting (topic_61062)
 * - Game Theory (topic_61073)
 * - Nim Game (topic_103239)
 * - Zero-Sum Game (topic_122082)
 * - Staff (position_staff)
 * - Weekly Contest 261 (contest_weekly-contest-261)
 *
 * Stats:
 * - Total Accepted: 92,975
 * - Total Submissions: 161,818
 * - Acceptance Rate: 57.5%
 *
 * Similar Problems:
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
 * Approach: Math
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `stones.length`
 *
 * @param {number[]} stones
 * @return {boolean}
 */
const stoneGameIX = (stones) => {
        const map = [0, 0, 0];

        for (const num of stones) {
                map[num % 3]++;
        }

        const [a, b, c] = map;

        if (a % 2 === 0) {
                return b > 0 && c > 0;
        }

        return Math.abs(b - c) > 2;
};

export { stoneGameIX };
