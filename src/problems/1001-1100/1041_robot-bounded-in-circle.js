/**
 * 1041. Robot Bounded In Circle
 *
 * Link: https://leetcode.com/problems/robot-bounded-in-circle/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - String (topic_10)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 273,118
 * - Total Submissions: 483,383
 * - Acceptance Rate: 56.5%
 */

/**
 * Approach: Math + Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} instructions
 * @return {boolean}
 */
const isRobotBounded = (instructions) => {
        const dirs = [
                [1, 0],
                [0, 1],
                [-1, 0],
                [0, -1],
        ];

        let y = 0;
        let x = 0;
        let dir = 0;

        for (const c of instructions) {
                if (c === 'R') {
                        dir = (dir + 1) % 4;
                }

                if (c === 'L') {
                        dir = (dir + 3) % 4;
                }

                if (c === 'G') {
                        const [dy, dx] = dirs[dir];
                        y += dy;
                        x += dx;
                }
        }

        return dir !== 0 || (y === 0 && x === 0);
};

export { isRobotBounded };
