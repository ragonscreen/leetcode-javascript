/**
 * 1456. Maximum Number of Vowels in a Substring of Given Length
 *
 * Link: https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-20
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 671,010
 * - Total Submissions: 1,087,901
 * - Acceptance Rate: 61.7%
 *
 * Similar Problems:
 * - minimum-recolors-to-get-k-consecutive-black-blocks (Easy)
 * - length-of-the-longest-alphabetical-continuous-substring (Medium)
 * - maximum-white-tiles-covered-by-a-carpet (Medium)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = (s, k) => {
        const vowels = 'aeiou';
        let count = 0;
        let res = 0;

        for (let l = 0, r = 0; r < s.length; r++) {
                if (vowels.includes(s[r])) {
                        count++;
                }

                if (r - l + 1 === k) {
                        res = Math.max(res, count);

                        if (vowels.includes(s[l++])) {
                                count--;
                        }
                }
        }

        return res;
};

export { maxVowels };
