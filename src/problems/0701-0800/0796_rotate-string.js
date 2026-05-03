/**
 * 0796. Rotate String
 *
 * Link: https://leetcode.com/problems/rotate-string/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-05-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - String Matching (topic_61052)
 *
 * Stats:
 * - Total Accepted: 827,442
 * - Total Submissions: 1,262,054
 * - Acceptance Rate: 65.6%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const rotateString = (s, goal) => {
        if (s.length !== goal.length) {
                return false;
        }

        return (s + s).includes(goal);
};

export { rotateString };
