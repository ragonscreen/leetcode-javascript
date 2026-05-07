/**
 * 3746. Minimum String Length After Balanced Removals
 *
 * Link: https://leetcode.com/problems/minimum-string-length-after-balanced-removals/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-07
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Stack (topic_15)
 * - Counting (topic_61062)
 *
 * Stats:
 * - Total Accepted: 40,506
 * - Total Submissions: 51,690
 * - Acceptance Rate: 78.4%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {number}
 */
const minLengthAfterRemovals = (s) => {
        let cntA = 0;
        let cntB = 0;

        for (let i = 0; i < s.length; i++) {
                const c = s[i];
                cntA += c === 'a';
                cntB += c === 'b';
        }

        return Math.abs(cntA - cntB);
};

export { minLengthAfterRemovals };
