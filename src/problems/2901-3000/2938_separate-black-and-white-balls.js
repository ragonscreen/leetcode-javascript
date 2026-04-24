/**
 * 2938. Separate Black and White Balls
 *
 * Link: https://leetcode.com/problems/separate-black-and-white-balls/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Two Pointers (topic_9)
 * - String (topic_10)
 * - Greedy (topic_17)
 *
 * Stats:
 * - Total Accepted: 181,828
 * - Total Submissions: 284,480
 * - Acceptance Rate: 63.9%
 */

/**
 * Approach: Greedy + Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {number}
 */
const minimumSteps = (s) => {
        const n = s.length;
        let res = 0;

        for (let r = n - 1, l = n - 1; l > -1; l--) {
                if (s[l] === '1') {
                        res += r - l;
                        r--;
                }
        }

        return res;
};

export { minimumSteps };
