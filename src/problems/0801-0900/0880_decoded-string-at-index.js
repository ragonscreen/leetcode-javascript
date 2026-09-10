/**
 * 880. Decoded String at Index
 *
 * Link: https://leetcode.com/problems/decoded-string-at-index/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-10
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - String (topic_10)
 * - Stack (topic_15)
 * - Senior Staff (position_senior-staff)
 * - Weekly Contest 96 (contest_weekly-contest-96)
 *
 * Stats:
 *
 * - Total Accepted: 110,775
 * - Total Submissions: 295,087
 * - Acceptance Rate: 37.5%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `s.length`
 *
 * Backtrack steps to find the `k`th character after each operation.
 *
 * @param {string} s
 * @param {number} k
 * @returns {string}
 */
const decodeAtIndex = (s, k) => {
        let len = 0n;
        k = BigInt(k - 1);

        for (const c of s) {
                if (c >= '0' && c <= '9') len *= BigInt(c);
                else len++;
        }

        for (let i = s.length - 1; i > -1; i--) {
                const c = s[i];

                if (c >= '0' && c <= '9') {
                        len /= BigInt(c);
                        k %= len;
                } else {
                        len--;
                        if (len === k) return c;
                }
        }

        return '';
};

export { decodeAtIndex };
