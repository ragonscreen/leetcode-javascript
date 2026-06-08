/**
 * 1839. Longest Substring Of All Vowels in Order
 *
 * Link: https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-21 (Updated: 2026-06-08)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Sliding Window (topic_55821)
 * - Staff (position_staff)
 * - Weekly Contest 238 (contest_weekly-contest-238)
 *
 * Stats:
 * - Total Accepted: 47,680
 * - Total Submissions: 91,799
 * - Acceptance Rate: 51.9%
 *
 * Similar Problems:
 * - count-vowel-substrings-of-a-string (Easy)
 * - count-of-substrings-containing-every-vowel-and-k-consonants-i (Medium)
 * - count-of-substrings-containing-every-vowel-and-k-consonants-ii (Medium)
 * - longest-nice-subarray (Medium)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `word.length`
 *
 * @param {string} word
 * @return {number}
 */
const longestBeautifulSubstring = (word) => {
        let res = 0;

        for (let cnt = 1, l = 0, r = 1; r < word.length; r++) {
                const c = word[r];
                const pre = word[r - 1];

                if (c < pre) {
                        l = r;
                        cnt = 1;
                }

                if (c > pre) {
                        cnt++;
                }

                if (cnt === 5) {
                        res = Math.max(res, r - l + 1);
                }
        }

        return res;
};

export { longestBeautifulSubstring };
