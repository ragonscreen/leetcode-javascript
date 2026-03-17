/**
 * 0739. Daily Temperatures
 *
 * Link: https://leetcode.com/problems/daily-temperatures/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-01-12 (Updated: 2026-03-14)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Stack (topic_15)
 * - Monotonic Stack (topic_61054)
 *
 * Stats:
 * - Total Accepted: 1,647,244
 * - Total Submissions: 2,407,483
 * - Acceptance Rate: 68.4%
 *
 * Similar Problems:
 * - next-greater-element-i (Easy)
 * - online-stock-span (Medium)
 */

/**
 * Approach: Monotonic Stack [Optimal]
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
        const n = temperatures.length;
        const stack = [];
        const res = new Array(n).fill(0);

        for (let i = 0; i < n; i++) {
                const temp = temperatures[i];

                while (stack.length && temperatures[stack.at(-1)] < temp) {
                        const prevI = stack.pop();
                        res[prevI] = i - prevI;
                }

                stack.push(i);
        }

        return res;
};

/**
 * Approach: Monotonic Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures1 = (temperatures) => {
        const n = temperatures.length;
        const stack = [];
        const res = new Array(n).fill(0);

        for (let i = 0; i < n; i++) {
                const temp = temperatures[i];

                while (stack.length && stack.at(-1)[1] < temp) {
                        const [prevI] = stack.pop();
                        res[prevI] = i - prevI;
                }

                stack.push([i, temp]);
        }

        return res;
};

export { dailyTemperatures, dailyTemperatures1 };
