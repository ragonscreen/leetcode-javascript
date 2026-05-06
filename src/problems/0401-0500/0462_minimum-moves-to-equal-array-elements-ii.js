/**
 * 0462. Minimum Moves to Equal Array Elements II
 *
 * Link: https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-07
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 227,947
 * - Total Submissions: 368,393
 * - Acceptance Rate: 61.9%
 *
 * Similar Problems:
 * - minimum-cost-to-make-array-equalindromic (Medium)
 * - minimum-moves-to-equal-array-elements (Medium)
 * - minimum-operations-to-make-a-uni-value-grid (Medium)
 * - minimum-operations-to-make-all-array-elements-equal (Medium)
 * - minimum-operations-to-make-subarray-elements-equal (Medium)
 * - removing-minimum-number-of-magic-beans (Medium)
 * - best-meeting-point (Hard)
 * - minimum-cost-to-make-array-equal (Hard)
 * - minimum-operations-to-make-elements-within-k-subarrays-equal (Hard)
 */

/**
 * Approach: Sorting + Greedy
 * Time Complexity: O(n lg n)
 * Space Complexity: O(1) auxiliary, O(n) for sorting
 *
 * @param {number[]} nums
 * @return {number}
 */
const minMoves2 = (nums) => {
        nums.sort((a, b) => a - b);
        const n = nums.length;
        const m = nums[n >> 1];
        let res = 0;

        for (let i = 0; i < n; i++) {
                res += Math.abs(m - nums[i]);
        }

        return res;
};

export { minMoves2 };
