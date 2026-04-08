/**
 * 1662. Check If Two String Arrays are Equivalent
 *
 * Link: https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - String (topic_10)
 *
 * Stats:
 * - Total Accepted: 611,755
 * - Total Submissions: 710,712
 * - Acceptance Rate: 86.1%
 *
 * Similar Problems:
 * - check-if-an-original-string-exists-given-two-encoded-strings (Hard)
 */

/**
 * Approach: Two Pointers [Optimal Space]
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 * `n` = length of string formed by `word1`, `m` = length of string formed by `word2`
 *
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
const arrayStringsAreEqual = (word1, word2) => {
        let i = 0;
        let j = 0;
        let p = 0;
        let q = 0;

        while (i < word1.length || j < word2.length) {
                if (p === word1[i].length) {
                        p = 0;
                        i++;
                }

                if (q === word2[j].length) {
                        q = 0;
                        j++;
                }

                if (word1[i]?.[p++] !== word2[j]?.[q++]) {
                        return false;
                }
        }

        return true;
};

/**
 * Approach: Simulation [Optimal Time]
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 * `n` = length of string formed by `word1`, `m` = length of string formed by `word2`
 *
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
const arrayStringsAreEqual1 = (word1, word2) =>
        word1.join('') === word2.join('');

export { arrayStringsAreEqual, arrayStringsAreEqual1 };
