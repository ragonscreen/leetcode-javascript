/**
 * 3634. Minimum Removals to Balance Array
 *
 * Link: https://leetcode.com/problems/minimum-removals-to-balance-array/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Sliding Window (topic_55821)
 * - Sorting (topic_61049)
 * - Senior (position_senior)
 * - Biweekly Contest 162 (contest_biweekly-contest-162)
 *
 * Stats:
 *
 * - Total Accepted: 149,948
 * - Total Submissions: 314,630
 * - Acceptance Rate: 47.7%
 */

/**
 * Approach: Sorting + Sliding Window
 * Time Complexity: O(n lg n)
 * Space Complexity: O(1) auxiliary, O(n) total
 * `n` = `nums.length`
 *
 * To satisfy the conditions, at each step you can discard either the max element or the min
 * element. Obviously, discarding `K` elements is the same as selecting `n - K` elements. A basic
 * sliding window can thus be used to find the largest such `n - K` to minimize the resultant `K`.
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
const minRemoval = (nums, k) => {
        const n = nums.length;
        nums.sort((a, b) => a - b);
        let mxLen = 0;

        for (let l = 0, r = 0; r < n; r++) {
                const mx = nums[r];

                while (mx > nums[l] * k) l++;

                mxLen = Math.max(mxLen, r - l + 1);
        }

        return n - mxLen;
};

export { minRemoval };
