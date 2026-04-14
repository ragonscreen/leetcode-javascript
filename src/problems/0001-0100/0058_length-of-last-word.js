/**
 * 0058. Length of Last Word
 *
 * Link: https://leetcode.com/problems/length-of-last-word/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 *
 * Stats:
 * - Total Accepted: 3,378,129
 * - Total Submissions: 5,761,946
 * - Acceptance Rate: 58.6%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
        let i = s.length - 1;

        while (i > -1 && s[i] === ' ') {
                i--;
        }

        const start = i;

        while (i > -1 && s[i] !== ' ') {
                i--;
        }

        return start - i;
};

export { lengthOfLastWord };
