/**
 * 0739. Daily Temperatures
 * Link: https://leetcode.com/problems/daily-temperatures/
 * Difficulty: Medium
 * Date: 2026-01-12
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Stack (Optimal)
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
 * Implementation: Stack
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
                        const prevI = stack.pop()[0];
                        res[prevI] = i - prevI;
                }

                stack.push([i, temp]);
        }

        return res;
};

export { dailyTemperatures, dailyTemperatures1 };
