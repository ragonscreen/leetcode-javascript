/**
 * 1927. Sum Game
 *
 * Link: https://leetcode.com/problems/sum-game/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-08-31
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - String (topic_10)
 * - Greedy (topic_17)
 * - Game Theory (topic_61073)
 * - Staff (position_staff)
 * - Biweekly Contest 56 (contest_biweekly-contest-56)
 *
 * Stats:
 * - Total Accepted: 110,388
 * - Total Submissions: 174,719
 * - Acceptance Rate: 63.2%
 */

/**
 * Approach: Math
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `num.length`
 *
 * @param {string} num
 * @return {boolean}
 */
const sumGame = (num) => {
        const n = num.length;
        const m = n >> 1;
        let cntl = 0;
        let cntr = 0;
        let suml = 0;
        let sumr = 0;

        for (let l = 0, r = m; l < m; l++, r++) {
                const cl = num[l];
                const cr = num[r];

                if (cl === '?') {
                        cntl++;
                } else {
                        suml += Number(cl);
                }

                if (cr === '?') {
                        cntr++;
                } else {
                        sumr += Number(cr);
                }
        }

        const cntTot = cntl + cntr;
        const cntDiff = cntl - cntr;
        const sumDiff = sumr - suml;

        return cntTot % 2 === 1 || sumDiff !== (cntDiff * 9) >> 1;
};

export { sumGame };
