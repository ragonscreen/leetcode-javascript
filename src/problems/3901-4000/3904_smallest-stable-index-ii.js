/**
 * 3904. Smallest Stable Index II
 *
 * Link: https://leetcode.com/problems/smallest-stable-index-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-07
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 36,432
 * - Total Submissions: 49,427
 * - Acceptance Rate: 73.7%
 */

/**
 * Approach: Prefix Sum
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const firstStableIndex = (nums, k) => {
        const n = nums.length;
        const mins = new Uint32Array(n);
        let min = nums[n - 1];

        for (let i = n - 1; i > -1; i--) {
                min = Math.min(min, nums[i]);
                mins[i] = min;
        }

        let max = nums[0];

        for (let i = 0; i < n; i++) {
                max = Math.max(max, nums[i]);

                if (max - mins[i] <= k) {
                        return i;
                }
        }

        return -1;
};

export { firstStableIndex };
