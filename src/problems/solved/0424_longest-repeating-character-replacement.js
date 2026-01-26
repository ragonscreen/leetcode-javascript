/**
 * 0424. Longest Repeating Character Replacement
 * Link: https://leetcode.com/problems/longest-repeating-character-replacement/
 * Difficulty: Medium
 * Date: 2026-01-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Sliding Window
 * Time Complexity: O(n * m)
 * Space Complexity: O(m)
 * `n` = length of `s`; `m` = number of unique characters in `s`
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
