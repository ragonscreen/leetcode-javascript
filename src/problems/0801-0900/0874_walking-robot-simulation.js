/**
 * 0874. Walking Robot Simulation
 *
 * Link: https://leetcode.com/problems/walking-robot-simulation/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-15
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 253,821
 * - Total Submissions: 393,190
 * - Acceptance Rate: 64.6%
 *
 * Similar Problems:
 * - walking-robot-simulation-ii (Medium)
 */

/**
 * Approach:
 * Time Complexity: O()
 * Space Complexity: O()
 *
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
const robotSim = (commands, obstacles) => {
        const OFFSET = 3 * 10 ** 4; // based on constraint -3 * 10^4 <= x[i], y[i] <= 3 * 10^4
        const WIDTH = 2 * OFFSET + 1;
        const set = new Set();

        for (const [x, y] of obstacles) {
                set.add((y + OFFSET) * WIDTH + (x + OFFSET));
        }

        const dirs = [
                [1, 0],
                [0, 1],
                [-1, 0],
                [0, -1],
        ];

        let res = 0;
        let dir = 0;
        let y = 0;
        let x = 0;

        for (const c of commands) {
                if (c === -1) {
                        dir = (dir + 1) % 4;
                        continue;
                }

                if (c === -2) {
                        dir = (dir + 3) % 4;
                        continue;
                }

                for (let i = 0; i < c; i++) {
                        const [dy, dx] = dirs[dir];
                        const ny = y + dy;
                        const nx = x + dx;

                        if (set.has((ny + OFFSET) * WIDTH + (nx + OFFSET))) {
                                break;
                        }

                        y = ny;
                        x = nx;
                }

                res = Math.max(res, x ** 2 + y ** 2);
        }

        return res;
};

export { robotSim };
