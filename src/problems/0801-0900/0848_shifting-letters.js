/**
 * 0848. Shifting Letters
 *
 * Link: https://leetcode.com/problems/shifting-letters/
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
 * - Total Accepted: 136,413
 * - Total Submissions: 295,398
 * - Acceptance Rate: 46.2%
 *
 * Similar Problems:
 * - find-the-k-th-character-in-string-game-i (Easy)
 * - replace-all-digits-with-characters (Easy)
 * - lexicographically-smallest-string-after-substring-operation (Medium)
 * - shift-distance-between-two-strings (Medium)
 * - shifting-letters-ii (Medium)
 * - find-the-k-th-character-in-string-game-ii (Hard)
 */

/**
 * Approach: Prefix Sum [Optimal]
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
const shiftingLetters = (s, shifts) => {
        const n = s.length;
        const a = 'a'.charCodeAt();
        const res = new Array(n);
        let cnt = 0;

        for (let i = n - 1; i > -1; i--) {
                cnt += shifts[i];
                res[i] = String.fromCharCode(
                        ((s[i].charCodeAt() - a + cnt) % 26) + a,
                );
        }

        return res.join('');
};

/**
 * Approach: Prefix Sum
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
const shiftingLetters1 = (s, shifts) => {
        const n = s.length;
        const prefix = new Array(n);
        let cnt = 0;

        for (let i = n - 1; i > -1; i--) {
                cnt += shifts[i];
                prefix[i] = cnt;
        }

        const a = 'a'.charCodeAt();
        let res = '';

        for (let i = 0; i < n; i++) {
                res += String.fromCharCode(
                        ((s[i].charCodeAt() - a + prefix[i]) % 26) + a,
                );
        }

        return res;
};

export { shiftingLetters, shiftingLetters1 };
