/**
 * 3809. Best Reachable Tower
 *
 * Link: https://leetcode.com/problems/best-reachable-tower/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Senior (position_senior)
 * - Biweekly Contest 174 (contest_biweekly-contest-174)
 *
 * Stats:
 * - Total Accepted: 32,023
 * - Total Submissions: 57,246
 * - Acceptance Rate: 55.9%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `towers.length`
 *
 * @param {number[][]} towers
 * @param {number[]} center
 * @param {number} radius
 * @return {number[]}
 */
const bestTower = (towers, center, radius) => {
        const n = towers.length;
        const [x, y] = center;
        let res = [-1, -1];
        let max = -1;

        for (let i = 0; i < n; i++) {
                const [nx, ny, val] = towers[i];
                const dist = Math.abs(ny - y) + Math.abs(nx - x);

                if (dist > radius || val < max) {
                        continue;
                }

                if (val > max) {
                        max = val;
                        res = [nx, ny];
                        continue;
                }

                if (nx < res[0] || (nx === res[0] && ny < res[1])) {
                        res = [nx, ny];
                }
        }

        return res;
};

export { bestTower };
