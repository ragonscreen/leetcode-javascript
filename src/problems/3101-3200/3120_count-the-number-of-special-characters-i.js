/**
 * 3120. Count the Number of Special Characters I
 *
 * Link: https://leetcode.com/problems/count-the-number-of-special-characters-i/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-05-26 (Updated: 2026-06-02)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 394 (contest_weekly-contest-394)
 *
 * Stats:
 * - Total Accepted: 192,072
 * - Total Submissions: 248,806
 * - Acceptance Rate: 77.2%
 *
 * Similar Problems:
 * - detect-capital (Easy)
 * - greatest-english-letter-in-upper-and-lower-case (Easy)
 * - count-the-number-of-special-characters-ii (Medium)
 */

/**
 * Approach: Bit Packing
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `word.length`
 *
 * @param {string} word
 * @return {number}
 */
const numberOfSpecialChars = (word) => {
        let lmask = 0;
        let umask = 0;

        for (let i = 0; i < word.length; i++) {
                const v = word[i].charCodeAt();
                let bit;

                if (v < 97) {
                        bit = 1 << (v - 65);
                        umask |= bit;
                } else {
                        bit = 1 << (v - 97);
                        lmask |= bit;
                }
        }

        let val = lmask & umask;
        let res = 0;

        // count set bits
        while (val) {
                val &= val - 1;
                res++;
        }

        return res;
};

export { numberOfSpecialChars };
