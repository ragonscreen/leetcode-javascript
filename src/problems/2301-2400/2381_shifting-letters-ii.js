/**
 * 2381. Shifting Letters II
 *
 * Link: https://leetcode.com/problems/shifting-letters-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - String (topic_10)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 161,444
 * - Total Submissions: 301,061
 * - Acceptance Rate: 53.6%
 *
 * Similar Problems:
 * - maximum-population-year (Easy)
 * - describe-the-painting (Medium)
 * - range-addition (Medium)
 * - range-sum-query-mutable (Medium)
 * - shift-distance-between-two-strings (Medium)
 * - shifting-letters (Medium)
 * - the-skyline-problem (Hard)
 */

/**
 * Approach: Difference Array
 * Time Complexity: O(n + m)
 * Space Complexity: O(1) auxiliary, O(n) total
 * `n` = length of `s`, `m` = length of `shifts`
 *
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
const shiftingLetters = (s, shifts) => {
        const n = s.length;
        const diff = new Int32Array(n + 1);

        for (const [l, r, d] of shifts) {
                // branchless version of
                // l = d === 1 ? 1 : -1;
                // r = d === 1 ? -1 : 1;
                const v = 2 * d - 1;
                diff[l] += v;
                diff[r + 1] -= v;
        }

        const a = 'a'.charCodeAt();
        let res = '';
        let cnt = 0;

        for (let i = 0; i < n; i++) {
                cnt = (cnt + diff[i]) % 26;
                res += String.fromCharCode(
                        ((s[i].charCodeAt() - a + cnt + 26) % 26) + a,
                );
        }

        return res;
};

export { shiftingLetters };
