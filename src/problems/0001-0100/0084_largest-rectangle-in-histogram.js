/**
 * 0084. Largest Rectangle in Histogram
 *
 * Link: https://leetcode.com/problems/largest-rectangle-in-histogram/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-01-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Stack (topic_15)
 * - Monotonic Stack (topic_61054)
 *
 * Stats:
 * - Total Accepted: 1,502,334
 * - Total Submissions: 3,038,541
 * - Acceptance Rate: 49.4%
 *
 * Similar Problems:
 * - maximal-rectangle (Hard)
 * - maximum-score-of-a-good-subarray (Hard)
 */

/**
 * Approach: Monotonic Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = (heights) => {
        const n = heights.length;
        const widths = new Array(n).fill(n);
        let stack = [];

        for (let i = 0; i < n; i++) {
                const h = heights[i];

                while (stack.length && stack.at(-1)[1] > h) {
                        const [prevI] = stack.pop();
                        widths[prevI] = i;
                }

                stack.push([i, h]);
        }

        stack = [];

        for (let i = n - 1; i >= 0; i--) {
                const h = heights[i];

                while (stack.length && stack.at(-1)[1] > h) {
                        const [prevI] = stack.pop();
                        widths[prevI] -= i + 1;
                }

                stack.push([i, h]);
        }

        let max = 0;

        for (let i = 0; i < n; i++) {
                const area = widths[i] * heights[i];

                if (area > max) {
                        max = area;
                }
        }

        return max;
};

export { largestRectangleArea };
