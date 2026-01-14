/**
 * 0084. Largest Rectangle in Histogram
 * Link: https://leetcode.com/problems/largest-rectangle-in-histogram/
 * Difficulty: Hard
 * Date: 2026-01-14
 * Author: ragonscreen
 */

/**
 * Implementation: Monotonic Stack
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

export default largestRectangleArea;
