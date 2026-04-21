/**
 * 3254. Find the Power of K-Size Subarrays I
 *
 * Link: https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-21
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 154,088
 * - Total Submissions: 248,184
 * - Acceptance Rate: 62.1%
 *
 * Similar Problems:
 * - maximum-sum-of-distinct-subarrays-with-length-k (Medium)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const resultsArray = (nums, k) => {
        const n = nums.length;
        const res = new Int32Array(n - k + 1);
        let lastInvalidIdx = -1;

        for (let l = 0, r = 0; r < n; r++) {
                if (r > 0 && nums[r] !== nums[r - 1] + 1) {
                        lastInvalidIdx = r;
                }

                if (r - l + 1 < k) {
                        continue;
                }

                res[r - k + 1] = lastInvalidIdx <= l++ ? nums[r] : -1;
        }

        return res;
};

export { resultsArray };
