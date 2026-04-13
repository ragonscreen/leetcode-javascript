/**
 * 1848. Minimum Distance to the Target Element
 *
 * Link: https://leetcode.com/problems/minimum-distance-to-the-target-element/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-13
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 *
 * Stats:
 * - Total Accepted: 105,855
 * - Total Submissions: 173,078
 * - Acceptance Rate: 61.2%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
const getMinDistance = (nums, target, start) => {
        const n = nums.length;
        let res = n;

        for (let i = 0; i < n; i++) {
                if (nums[i] === target) {
                        res = Math.min(res, Math.abs(i - start));
                }
        }

        return res;
};

export { getMinDistance };
