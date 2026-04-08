/**
 * 1750. Minimum Length of String After Deleting Similar Ends
 *
 * Link: https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Two Pointers (topic_9)
 * - String (topic_10)
 *
 * Stats:
 * - Total Accepted: 187,568
 * - Total Submissions: 334,652
 * - Acceptance Rate: 56.0%
 */

/**
 * Approach: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {number}
 */
const minimumLength = (s) => {
        let l = 0;
        let r = s.length - 1;

        while (l < r && s[l] === s[r]) {
                while (l + 1 < r && s[l + 1] === s[l]) {
                        l++;
                }

                while (r - 1 > l && s[r - 1] === s[r]) {
                        r--;
                }

                l++;
                r--;
        }

        return r - l + 1;
};

export { minimumLength };
