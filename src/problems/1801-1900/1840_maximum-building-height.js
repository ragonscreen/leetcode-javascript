/**
 * 1840. Maximum Building Height
 *
 * Link: https://leetcode.com/problems/maximum-building-height/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-07-23
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - Sorting (topic_61049)
 * - Senior Staff (position_senior-staff)
 * - Weekly Contest 238 (contest_weekly-contest-238)
 *
 * Stats:
 * - Total Accepted: 83,742
 * - Total Submissions: 124,943
 * - Acceptance Rate: 67.0%
 *
 * Similar Problems:
 * - find-maximum-value-in-a-constrained-sequence (Medium)
 */

/**
 * Approach: Sorting + Greedy
 * Time Complexity: O(m lg m)
 * Space Complexity: O(1) auxiliary, O(m) for sorting
 * `m` = `restrictions.length`
 *
 * @param {number} n
 * @param {number[][]} restrictions
 * @return {number}
 */
const maxBuilding = (n, restrictions) => {
        const m = restrictions.length;

        if (m === 0) {
                return n - 1;
        }

        restrictions.sort((a, b) => a[0] - b[0]);
        restrictions[0][1] = Math.min(
                restrictions[0][1],
                restrictions[0][0] - 1,
        );

        for (let i = 0; i < m - 1; i++) {
                const [ci, ch] = restrictions[i];
                const [ni, nh] = restrictions[i + 1];
                const dy = Math.abs(nh - ch);
                const dx = ni - ci;

                if (nh > ch && dy > dx) {
                        restrictions[i + 1][1] = ch + dx;
                }
        }

        for (let i = m - 1; i > 0; i--) {
                const [ci, ch] = restrictions[i];
                const [ni, nh] = restrictions[i - 1];
                const dy = Math.abs(nh - ch);
                const dx = ci - ni;

                if (nh > ch && dy > dx) {
                        restrictions[i - 1][1] = ch + dx;
                }
        }

        let [pi, ph] = restrictions[0];
        let res = Math.max(ph, (pi + ph - 1) >> 1);

        for (let i = 1; i < m; i++) {
                const [ci, ch] = restrictions[i];
                const dy = Math.abs(ch - ph);
                const dx = ci - pi;
                const diff = dx - dy;
                res = Math.max(res, Math.max(ch, ph) + (diff >> 1));
                pi = ci;
                ph = ch;
        }

        res = Math.max(res, ph + n - pi);

        return res;
};

export { maxBuilding };
