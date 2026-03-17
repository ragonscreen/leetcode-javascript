/**
 * 0424. Longest Repeating Character Replacement
 *
 * Link: https://leetcode.com/problems/longest-repeating-character-replacement/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-01-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 1,483,295
 * - Total Submissions: 2,507,053
 * - Acceptance Rate: 59.2%
 *
 * Similar Problems:
 * - longest-substring-with-at-most-k-distinct-characters (Medium)
 * - max-consecutive-ones-iii (Medium)
 * - maximize-the-confusion-of-an-exam (Medium)
 * - longest-substring-of-one-repeating-character (Hard)
 * - minimum-number-of-operations-to-make-array-continuous (Hard)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n * m)
 * Space Complexity: O(m)
 * `n` = length of `s`, `m` = number of unique characters in `s`
 *
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = (s, k) => {
        const chars = new Set(s);
        let res = 0;

        for (const char of chars) {
                let l = 0;
                let r = 0;
                let count = 0;

                while (r < s.length) {
                        if (s[r] !== char) {
                                count++;
                        }

                        while (count > k) {
                                if (s[l] !== char) {
                                        count--;
                                }

                                l++;
                        }

                        r++;
                        res = Math.max(res, r - l);
                }
        }

        return res;
};

export { characterReplacement };
