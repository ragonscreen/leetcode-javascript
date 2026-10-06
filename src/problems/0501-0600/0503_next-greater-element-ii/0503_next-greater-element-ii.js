/**
 * 503. Next Greater Element II
 *
 * Link: https://leetcode.com/problems/next-greater-element-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Stack (topic_15)
 * - Monotonic Stack (topic_61054)
 * - Senior Staff (position_senior-staff)
 *
 * Stats:
 *
 * - Total Accepted: 933,563
 * - Total Submissions: 1,348,814
 * - Acceptance Rate: 69.2%
 *
 * Similar Problems:
 *
 * - next-greater-element-i (Easy)
 * - next-greater-element-iii (Medium)
 * - maximum-and-minimum-sums-of-at-most-size-k-subarrays (Hard)
 */

/**
 * Approach: Monotonic Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @returns {number[]}
 */
const nextGreaterElements = (nums) => {
        const n = nums.length;
        const res = new Int32Array(n).fill(-1);
        const st = new Uint32Array(n * 2);
        let sp = 0;

        for (let i = 0; i < n; i++) {
                const num = nums[i];

                while (sp > 0 && num > nums[st[sp - 1]]) res[st[--sp]] = num;

                st[sp++] = i;
        }

        for (let i = 0; i < n; i++) {
                const num = nums[i];

                while (sp > 0 && num > nums[st[sp - 1]]) res[st[--sp]] = num;

                st[sp++] = i;
        }

        return res;
};

export { nextGreaterElements };
