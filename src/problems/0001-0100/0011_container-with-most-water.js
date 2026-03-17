/**
 * 0011. Container With Most Water
 *
 * Link: https://leetcode.com/problems/container-with-most-water/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-01-20
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Greedy (topic_17)
 *
 * Stats:
 * - Total Accepted: 5,155,103
 * - Total Submissions: 8,644,492
 * - Acceptance Rate: 59.6%
 *
 * Similar Problems:
 * - house-robber-iv (Medium)
 * - maximum-tastiness-of-candy-basket (Medium)
 * - trapping-rain-water (Hard)
 */

/**
 * Approach: Greedy + Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
        let max = 0;
        let l = 0;
        let r = height.length - 1;

        while (l < r) {
                const hl = height[l];
                const hr = height[r];
                const w = r - l;
                const h = Math.min(hl, hr);
                const a = w * h;

                if (a > max) {
                        max = a;
                }

                hl < hr ? l++ : r--;
        }

        return max;
};

export { maxArea };
