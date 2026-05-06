/**
 * 2125. Number of Laser Beams in a Bank
 *
 * Link: https://leetcode.com/problems/number-of-laser-beams-in-a-bank/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-07
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - String (topic_10)
 * - Matrix (topic_61053)
 *
 * Stats:
 * - Total Accepted: 350,233
 * - Total Submissions: 402,512
 * - Acceptance Rate: 87.0%
 *
 * Similar Problems:
 * - set-matrix-zeroes (Medium)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n * m)
 * Space Complexity: O(1)
 * `n` = length of `bank`, `m` = length of `bank[0]`
 *
 * @param {string[]} bank
 * @return {number}
 */
const numberOfBeams = (bank) => {
        const n = bank.length;
        const m = bank[0].length;
        let prev = 0;
        let res = 0;

        for (let y = 0; y < n; y++) {
                let cnt = 0;

                for (let x = 0; x < m; x++) {
                        cnt += bank[y][x] ^ 0;
                }

                if (!cnt) {
                        continue;
                }

                res += prev * cnt;
                prev = cnt;
        }

        return res;
};

export { numberOfBeams };
