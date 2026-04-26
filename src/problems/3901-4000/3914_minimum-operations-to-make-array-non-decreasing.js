/**
 * 3914. Minimum Operations to Make Array Non Decreasing
 *
 * Link: https://leetcode.com/problems/minimum-operations-to-make-array-non-decreasing/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Stats:
 * - Total Accepted: 12,973
 * - Total Submissions: 24,190
 * - Acceptance Rate: 53.6%
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = (nums) => {
        let res = 0;

        for (let i = 1; i < nums.length; i++) {
                res += Math.max(0, nums[i - 1] - nums[i]);
        }

        return res;
};

/**
 * Approach: Monotonic Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const minOperations1 = (nums) => {
        const stack = [];
        let res = 0;
        let diff = 0;

        for (const num of nums) {
                if (num <= stack.at(-1)) {
                        diff += stack.at(-1) - num;
                        stack.push(num);
                        continue;
                }

                while (num > stack.at(-1)) {
                        stack.pop();

                        if (!stack.length) {
                                res += diff;
                                diff = 0;
                        }
                }

                stack.push(num);
        }

        res += diff;

        return res;
};

export { minOperations, minOperations1 };
