/**
 * 0340. Longest Substring with At Most K Distinct Characters
 *
 * Link: https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/
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
 * - Total Accepted: 399,370
 * - Total Submissions: 799,128
 * - Acceptance Rate: 50.0%
 *
 * Similar Problems:
 * - longest-repeating-character-replacement (Medium)
 * - longest-substring-with-at-most-two-distinct-characters (Medium)
 * - longest-substring-without-repeating-characters (Medium)
 * - max-consecutive-ones-iii (Medium)
 * - maximize-the-confusion-of-an-exam (Medium)
 * - subarrays-with-k-different-integers (Hard)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(26) = O(1)
 *
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const lengthOfLongestSubstringKDistinct = (s, k) => {
        const map = new Map();
        let res = 0;

        for (let l = 0, r = 0; r < s.length; r++) {
                const cr = s[r];
                map.set(cr, (map.get(cr) || 0) + 1);

                while (map.size > k) {
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

export { lengthOfLongestSubstringKDistinct };
