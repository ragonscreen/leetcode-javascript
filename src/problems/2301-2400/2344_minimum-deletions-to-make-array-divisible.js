/**
 * 2344. Minimum Deletions to Make Array Divisible
 *
 * Link: https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-05-07
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - Sorting (topic_61049)
 * - Heap (Priority Queue) (topic_61050)
 * - Number Theory (topic_61067)
 *
 * Stats:
 * - Total Accepted: 48,621
 * - Total Submissions: 79,277
 * - Acceptance Rate: 61.3%
 *
 * Similar Problems:
 * - check-if-array-pairs-are-divisible-by-k (Medium)
 */

/**
 * Approach: Math
 * Time Complexity: O(n + m + lg k)
 * Space Complexity: O(1) auxiliary
 * `n` = length of `nums`, `m` = length of `numsDivide`
 * `k` = maximum value of `numsDivide[i]`
 *
 * @param {number[]} nums
 * @param {number[]} numsDivide
 * @return {number}
 */
const minOperations = (nums, numsDivide) => {
        const g = (a, b) => (a ? g(b % a, a) : b);
        let gcd = numsDivide[0];

        for (let j = 1; j < numsDivide.length; j++) {
                gcd = g(numsDivide[j], gcd);

                if (gcd === 1) {
                        break;
                }
        }

        const n = nums.length;
        let min = Number.MAX_SAFE_INTEGER;

        for (let i = 0; i < n; i++) {
                const num = nums[i];

                if (gcd % num === 0) {
                        min = Math.min(min, num);
                }
        }

        if (min === Number.MAX_SAFE_INTEGER) {
                return -1;
        }

        let res = 0;

        for (let i = 0; i < n; i++) {
                res += nums[i] < min;
        }

        return res;
};

/**
 * Approach: Sorting + Math
 * Time Complexity: O(n lg n + m + lg k)
 * Space Complexity: O(1) auxiliary, O(n) for sorting
 * `n` = length of `nums`, `m` = length of `numsDivide`
 * `k` = maximum value of `numsDivide[i]`
 *
 * @param {number[]} nums
 * @param {number[]} numsDivide
 * @return {number}
 */
const minOperations1 = (nums, numsDivide) => {
        const g = (a, b) => (a ? g(b % a, a) : b);
        let gcd = numsDivide[0];

        for (let j = 1; j < numsDivide.length; j++) {
                gcd = g(numsDivide[j], gcd);

                if (gcd === 1) {
                        break;
                }
        }

        nums.sort((a, b) => a - b);
        const n = nums.length;
        let i = 0;

        while (gcd % nums[i]) {
                i++;

                while (i < n && nums[i] === nums[i - 1]) {
                        i++;
                }
        }

        return i < n ? i : -1;
};

export { minOperations, minOperations1 };
