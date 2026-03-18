/**
 * 2090. K Radius Subarray Averages
 *
 * Link: https://leetcode.com/problems/k-radius-subarray-averages/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-18
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 195,865
 * - Total Submissions: 424,933
 * - Acceptance Rate: 46.1%
 *
 * Similar Problems:
 * - maximum-average-subarray-i (Easy)
 * - moving-average-from-data-stream (Easy)
 * - find-the-grid-of-region-average (Medium)
 * - minimum-size-subarray-sum (Medium)
 * - number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold (Medium)
 * - subarray-sum-equals-k (Medium)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const getAverages = (nums, k) => {
        const n = nums.length;
        const res = new Array(n).fill(-1);
        const size = 2 * k + 1;

        if (n < size) {
                return res;
        }

        let idx = k;
        let sum = 0;

        for (let i = 0; i < size; i++) {
                sum += nums[i];
        }

        res[idx++] = Math.trunc(sum / size);
        let l = 0;

        for (let r = size; r < n; r++) {
                sum -= nums[l++];
                sum += nums[r];
                res[idx++] = Math.trunc(sum / size);
        }

        return res;
};

export { getAverages };
