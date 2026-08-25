/**
 * 3517. Smallest Palindromic Rearrangement I
 *
 * Link: https://leetcode.com/problems/smallest-palindromic-rearrangement-i/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-08-25
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Sorting (topic_61049)
 * - Counting Sort (topic_61072)
 * - Senior (position_senior)
 * - Weekly Contest 445 (contest_weekly-contest-445)
 *
 * Stats:
 * - Total Accepted: 186,109
 * - Total Submissions: 249,629
 * - Acceptance Rate: 74.6%
 *
 * Similar Problems:
 * - shortest-palindrome (Hard)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `s.length`
 *
 * @param {string} s
 * @return {string}
 */
const smallestPalindrome = (s) => {
        const n = s.length;
        const m = n >> 1;
        const map = new Uint32Array(26);

        for (let i = 0; i < m; i++) {
                map[s.charCodeAt(i) - 97]++;
        }

        let l = '';
        let r = '';

        for (let i = 0, j = 25; i < 26; i++, j--) {
                const cl = map[i];
                const cr = map[j];
                l += String.fromCharCode(i + 97).repeat(cl);
                r += String.fromCharCode(j + 97).repeat(cr);
        }

        return l + (n % 2 ? s[m] : '') + r;
};

export { smallestPalindrome };
