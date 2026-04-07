/**
 * 0657. Robot Return to Origin
 *
 * Link: https://leetcode.com/problems/robot-return-to-origin/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 658,327
 * - Total Submissions: 843,801
 * - Acceptance Rate: 78.0%
 *
 * Similar Problems:
 * - furthest-point-from-origin (Easy)
 * - execution-of-all-suffix-instructions-staying-in-a-grid (Medium)
 * - number-of-provinces (Medium)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = (moves) => {
        const map = {
                U: [0, 1],
                D: [0, -1],
                R: [1, 0],
                L: [-1, 0],
        };

        let x = 0;
        let y = 0;

        for (const m of moves) {
                const [dx, dy] = map[m];
                x += dx;
                y += dy;
        }

        return x === 0 && y === 0;
};

export { judgeCircle };
