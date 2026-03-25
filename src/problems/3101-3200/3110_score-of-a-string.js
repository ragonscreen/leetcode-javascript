/**
 * 3110. Score of a String
 *
 * Link: https://leetcode.com/problems/score-of-a-string/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-03-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 *
 * Stats:
 * - Total Accepted: 440,290
 * - Total Submissions: 481,924
 * - Acceptance Rate: 91.4%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {number}
 */
const scoreOfString = (s) => {
        let res = 0;
        let prev = s.charCodeAt(0);

        for (let i = 1; i < s.length; i++) {
                const val = s.charCodeAt(i);
                res += Math.abs(val - prev);
                prev = val;
        }

        return res;
};

export { scoreOfString };
