/**
 * 3121. Count the Number of Special Characters II
 *
 * Link: https://leetcode.com/problems/count-the-number-of-special-characters-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Senior (position_senior)
 * - Weekly Contest 394 (contest_weekly-contest-394)
 *
 * Stats:
 * - Total Accepted: 164,879
 * - Total Submissions: 273,459
 * - Acceptance Rate: 60.3%
 *
 * Similar Problems:
 * - count-the-number-of-special-characters-i (Easy)
 * - detect-capital (Easy)
 * - greatest-english-letter-in-upper-and-lower-case (Easy)
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
        let invmask = 0;

        for (let i = 0; i < word.length; i++) {
                const v = word[i].charCodeAt();
                const isUpper = v < 97;
                const ord = isUpper ? v - 65 : v - 97;
                const bit = 1 << ord;

                if (isUpper) {
                        umask |= bit;
                } else {
                        if (umask & bit) {
                                invmask |= bit;
                        }

                        lmask |= bit;
                }
        }

        let val = lmask & umask & ~invmask;
        let res = 0;

        // count set bits
        while (val) {
                val &= val - 1;
                res++;
        }

        return res;
};

export { numberOfSpecialChars };
