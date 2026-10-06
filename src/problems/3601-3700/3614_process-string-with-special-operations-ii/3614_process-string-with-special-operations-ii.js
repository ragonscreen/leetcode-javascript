/**
 * 3614. Process String with Special Operations II
 *
 * Link: https://leetcode.com/problems/process-string-with-special-operations-ii/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-06-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - String (topic_10)
 * - Simulation (topic_61055)
 * - Senior Staff (position_senior-staff)
 * - Weekly Contest 458 (contest_weekly-contest-458)
 *
 * Stats:
 *
 * - Total Accepted: 13,295
 * - Total Submissions: 71,775
 * - Acceptance Rate: 18.5%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `s.length`
 *
 * @param {string} s
 * @param {number} k
 * @returns {character}
 */
const processStr = (s, k) => {
        const n = s.length;
        let len = 0;

        for (let i = 0; i < n; i++) {
                const c = s[i];

                if (c === '*') {
                        len = Math.max(0, len - 1);
                } else if (c === '#') {
                        len *= 2;
                } else if (c !== '%') {
                        len++;
                }
        }

        if (k >= len) {
                return '.';
        }

        for (let i = n - 1; i > -1; i--) {
                const c = s[i];

                if (c === '*') {
                        len++;
                } else if (c === '#') {
                        len /= 2;

                        if (k >= len) {
                                k -= len;
                        }
                } else if (c === '%') {
                        k = len - k - 1;
                } else {
                        len--;

                        if (k === len) {
                                return c;
                        }
                }
        }
};

export { processStr };
