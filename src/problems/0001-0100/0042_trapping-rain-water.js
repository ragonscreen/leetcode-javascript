/**
 * 0042. Trapping Rain Water
 *
 * Link: https://leetcode.com/problems/trapping-rain-water/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-01-21
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Dynamic Programming (topic_13)
 * - Stack (topic_15)
 * - Monotonic Stack (topic_61054)
 *
 * Stats:
 * - Total Accepted: 3,431,568
 * - Total Submissions: 5,128,100
 * - Acceptance Rate: 66.9%
 *
 * Similar Problems:
 * - container-with-most-water (Medium)
 * - maximum-value-of-an-ordered-triplet-ii (Medium)
 * - pour-water (Medium)
 * - product-of-array-except-self (Medium)
 * - trapping-rain-water-ii (Hard)
 */

/**
 * Approach: Prefix Max
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
        const n = height.length;
        const mins = new Array(n).fill(0);
        let max = 0;

        for (let i = 0; i < n; i++) {
                const v = height[i];
                mins[i] = max;

                if (v > max) {
                        max = v;
                }
        }

        let res = 0;
        max = 0;

        for (let i = n - 1; i >= 0; i--) {
                const v = height[i];
                mins[i] = Math.min(max, mins[i]);
                const water = mins[i] - height[i];

                if (water > 0) {
                        res += water;
                }

                if (v > max) {
                        max = v;
                }
        }

        return res;
};

export { trap };
