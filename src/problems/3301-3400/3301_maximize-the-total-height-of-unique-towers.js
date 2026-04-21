/**
 * 3301. Maximize the Total Height of Unique Towers
 *
 * Link: https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-22
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 34,832
 * - Total Submissions: 93,145
 * - Acceptance Rate: 37.4%
 */

/**
 * Approach: Sorting + Greedy
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 *
 * @param {number[]} maximumHeight
 * @return {number}
 */
const maximumTotalSum = (maximumHeight) => {
        maximumHeight.sort((a, b) => b - a);
        let res = maximumHeight[0];

        if (maximumHeight.length === 1) {
                return res;
        }

        let maxPossible = maximumHeight[0] - 1;

        for (let i = 1; i < maximumHeight.length; i++) {
                maxPossible = Math.min(maxPossible, maximumHeight[i]);

                if (maxPossible === 0) {
                        return -1;
                }

                res += maxPossible;
                maxPossible--;
        }

        return res;
};

export { maximumTotalSum };
