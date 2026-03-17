/**
 * 0003. Longest Substring Without Repeating Characters
 *
 * Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-01-23
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
        const set = new Set();
        let max = 0;
        let l = 0;
        let r = 0;

        while (r < s.length) {
                const c = s[r];

                if (set.has(c)) {
                        max = Math.max(max, r - l);
                }

                while (set.has(c)) {
                        set.delete(s[l++]);
                }

                set.add(c);
                r++;
        }

        max = Math.max(max, r - l);

        return max;
};

export { lengthOfLongestSubstring };
