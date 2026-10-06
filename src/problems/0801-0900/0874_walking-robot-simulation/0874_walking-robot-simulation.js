/**
 * 874. Walking Robot Simulation
 *
 * Link: https://leetcode.com/problems/walking-robot-simulation/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-15 (Updated: 2026-09-09)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Simulation (topic_61055)
 *
 * Stats:
 *
 * - Total Accepted: 253,821
 * - Total Submissions: 393,190
 * - Acceptance Rate: 64.6%
 *
 * Similar Problems:
 *
 * - walking-robot-simulation-ii (Medium)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(k * n)
 * Space Complexity: O(m)
 * `n` = `commands.length`, `m` = `obstacles.length`
 * `k` = `max(commands[i])`
 *
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @returns {number}
 */
const robotSim = (commands, obstacles) => {
        const ppos = (y, x) => (y << 16) | x;
        const off = 3 * 1e4;
        const oset = new Set();
        const oxset = new Uint8Array(2 * off + 1);
        const oyset = new Uint8Array(2 * off + 1);

        for (const [x, y] of obstacles) {
                const yy = -y + off; // invert y to treat north as -Y
                const xx = x + off;
                const pos = ppos(yy, xx);
                oset.add(pos);
                oyset[yy] = 1;
                oxset[xx] = 1;
        }

        const d = [-1, 0, 1, 0, -1];
        let di = 0;
        let y = off;
        let x = off;
        let res = -1;

        for (const k of commands) {
                if (k === -2) {
                        di = (di + 3) % 4;
                } else if (k === -1) {
                        di = (di + 1) % 4;
                } else {
                        const dy = d[di];
                        const dx = d[di + 1];

                        if (oyset[y + dy] || oxset[x + dx]) {
                                for (let i = 0; i < k; i++) {
                                        y += dy;
                                        x += dx;
                                        const npos = ppos(y, x);

                                        if (oset.has(npos)) {
                                                y -= dy;
                                                x -= dx;
                                                break;
                                        }
                                }
                        } else {
                                y += k * dy;
                                x += k * dx;
                        }

                        res = Math.max(res, (y - off) ** 2 + (x - off) ** 2);
                }
        }

        return res;
};

export { robotSim };
