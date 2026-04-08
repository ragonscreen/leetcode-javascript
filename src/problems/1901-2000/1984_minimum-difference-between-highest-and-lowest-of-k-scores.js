/**
 * 1984. Minimum Difference Between Highest and Lowest of K Scores
 *
 * Link: https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-03-21
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Sliding Window (topic_55821)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 249,569
 * - Total Submissions: 376,803
 * - Acceptance Rate: 66.2%
 *
 * Similar Problems:
 * - array-partition (Easy)
 */

/**
 * Approach: Sorting + Sliding Window
 * Time Complexity: O(n log n)
 * Space Complexity: O(1) auxiliary, O(n) for sorting
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimumDifference = (nums, k) => {
        nums.sort((a, b) => a - b);
        let res = Number.MAX_SAFE_INTEGER;

        for (let l = 0, r = k - 1; r < nums.length; l++, r++) {
                res = Math.min(res, nums[r] - nums[l]);
        }

        return res;
};

export { minimumDifference };
