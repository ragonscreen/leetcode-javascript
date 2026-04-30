/**
 * 0003. Longest Substring Without Repeating Characters
 *
 * Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-01-23 (Updated: 2026-05-01)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 9,125,970
 * - Total Submissions: 23,630,274
 * - Acceptance Rate: 38.6%
 *
 * Similar Problems:
 * - count-complete-subarrays-in-an-array (Medium)
 * - find-longest-special-substring-that-occurs-thrice-i (Medium)
 * - find-longest-special-substring-that-occurs-thrice-ii (Medium)
 * - longest-nice-subarray (Medium)
 * - longest-substring-with-at-most-k-distinct-characters (Medium)
 * - longest-substring-with-at-most-two-distinct-characters (Medium)
 * - maximum-erasure-value (Medium)
 * - minimum-consecutive-cards-to-pick-up (Medium)
 * - number-of-equal-count-substrings (Medium)
 * - optimal-partition-of-string (Medium)
 * - subarrays-with-k-different-integers (Hard)
 */

/**
 * Approach: Hash Set + Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(m)
 * `n` = length of `s`, `m` = number of unique characters in `s`
 *
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
        // ascii values 32 to 126 are available
        // size must be 126 - 32 + 1 = 95
        const set = new Uint8Array(95);
        let res = 0;

        for (let l = 0, r = 0; r < s.length; r++) {
                const vr = s.charCodeAt(r) - 32;

                while (set[vr]) {
                        const vl = s.charCodeAt(l++) - 32;
                        set[vl] = 0;
                }

                set[vr] = 1;
                res = Math.max(res, r - l + 1);
        }

        return res;
};

export { lengthOfLongestSubstring };
