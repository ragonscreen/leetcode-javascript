/**
 * 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
 *
 * Link: https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-20
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 188,797
 * - Total Submissions: 260,556
 * - Acceptance Rate: 72.5%
 *
 * Similar Problems:
 * - apply-operations-to-make-all-array-elements-equal-to-zero (Medium)
 * - k-radius-subarray-averages (Medium)
 * - count-subarrays-with-median-k (Hard)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
const numOfSubarrays = (arr, k, threshold) => {
        const target = threshold * k;
        let res = 0;
        let sum = 0;

        for (let l = 0, r = 0; r < arr.length; r++) {
                sum += arr[r];

                if (r - l + 1 < k) {
                        continue;
                }

                if (sum >= target) {
                        res++;
                }

                sum -= arr[l++];
        }

        return res;
};

export { numOfSubarrays };
