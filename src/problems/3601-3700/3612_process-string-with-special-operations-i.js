/**
 * 3612. Process String with Special Operations I
 *
 * Link: https://leetcode.com/problems/process-string-with-special-operations-i/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-16
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Simulation (topic_61055)
 * - Senior (position_senior)
 * - Weekly Contest 458 (contest_weekly-contest-458)
 *
 * Stats:
 * - Total Accepted: 190,871
 * - Total Submissions: 267,137
 * - Acceptance Rate: 71.5%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n * 2^n)
 * Space Complexity: O(n * 2^n)
 * `n` = `s.length`
 *
 * @param {string} s
 * @return {string}
 */
const processStr = (s) => {
        let res = '';

        for (let i = 0; i < s.length; i++) {
                const c = s[i];

                if (c === '*') {
                        res = res.slice(0, -1);
                } else if (c === '#') {
                        res += res;
                } else if (c === '%') {
                        res = res.split('').reverse().join('');
                } else {
                        res += c;
                }
        }

        return res;
};

export { processStr };
