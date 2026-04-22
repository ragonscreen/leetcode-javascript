/**
 * 0159. Longest Substring with At Most Two Distinct Characters
 *
 * Link: https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-22
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 302,233
 * - Total Submissions: 529,863
 * - Acceptance Rate: 57.0%
 *
 * Similar Problems:
 * - longest-substring-with-at-most-k-distinct-characters (Medium)
 * - longest-substring-without-repeating-characters (Medium)
 * - sliding-window-maximum (Hard)
 * - subarrays-with-k-different-integers (Hard)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(m) [O(26) = O(1)]
 * `n` = length of `s`, `m` = number of unique characters in `s`
 *
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstringTwoDistinct = (s) => {
        const map = new Map();
        let res = 0;

        for (let l = 0, r = 0; r < s.length; r++) {
                const cr = s[r];
                map.set(cr, (map.get(cr) || 0) + 1);

                while (map.size > 2) {
                        const cl = s[l++];
                        const vl = map.get(cl);

                        if (vl === 1) {
                                map.delete(cl);
                        } else {
                                map.set(cl, vl - 1);
                        }
                }

                res = Math.max(res, r - l + 1);
        }

        return res;
};

export { lengthOfLongestSubstringTwoDistinct };
