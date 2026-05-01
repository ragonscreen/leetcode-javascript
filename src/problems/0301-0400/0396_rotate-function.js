/**
 * 0396. Rotate Function
 *
 * Link: https://leetcode.com/problems/rotate-function/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-01
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - Dynamic Programming (topic_13)
 *
 * Stats:
 * - Total Accepted: 144,191
 * - Total Submissions: 291,526
 * - Acceptance Rate: 49.5%
 */

/**
 * Approach: Math + Dynamic Programming [Space Optimized]
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxRotateFunction = (nums) => {
        const n = nums.length;
        let sum = 0;
        let total = 0;

        for (let i = 0; i < n; i++) {
                const num = nums[i];
                sum += num;
                total += num * i;
        }

        let res = total;

        for (let i = n - 1; i > 0; i--) {
                const num = nums[i];
                total = total - num * (n - 1) + (sum - num);
                res = Math.max(res, total);
        }

        return res;
};

/**
 * Approach: Math + Dynamic Programming
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxRotateFunction1 = (nums) => {
        const n = nums.length;
        const sums = new Int32Array(n);
        let sum = 0;
        let total = 0;

        for (let i = 0; i < n; i++) {
                const num = nums[i];
                sum += num;
                total += num * i;
        }

        for (let i = n - 1; i > -1; i--) {
                sums[i] = sum - nums[i];
        }

        let res = total;

        for (let i = n - 1; i > 0; i--) {
                total = total - nums[i] * (n - 1) + sums[i];
                res = Math.max(res, total);
        }

        return res;
};

export { maxRotateFunction, maxRotateFunction1 };
