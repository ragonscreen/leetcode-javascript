/**
 * 3931. Check Adjacent Digit Differences
 *
 * Link: https://leetcode.com/problems/check-adjacent-digit-differences/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-05-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Stats:
 * - Total Accepted: 26,136
 * - Total Submissions: 33,711
 * - Acceptance Rate: 77.5%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {boolean}
 */
const isAdjacentDiffAtMostTwo = (s) => {
        for (let i = 0; i < s.length - 1; i++) {
                if (Math.abs(Number(s[i]) - Number(s[i + 1])) > 2) {
                        return false;
                }
        }

        return true;
};

export { isAdjacentDiffAtMostTwo };
