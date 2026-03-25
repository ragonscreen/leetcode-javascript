/**
 * 2461. Maximum Sum of Distinct Subarrays With Length K
 *
 * Link: https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-25
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 261,790
 * - Total Submissions: 610,148
 * - Acceptance Rate: 42.9%
 *
 * Similar Problems:
 * - count-the-number-of-good-subarrays (Medium)
 * - find-the-power-of-k-size-subarrays-i (Medium)
 * - find-the-power-of-k-size-subarrays-ii (Medium)
 * - longest-nice-subarray (Medium)
 * - max-consecutive-ones-iii (Medium)
 * - maximum-good-subarray-sum (Medium)
 * - optimal-partition-of-string (Medium)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(k)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumSubarraySum = (nums, k) => {
        const map = new Map();
        let max = 0;
        let sum = 0;

        for (let l = 0, r = 0; r < nums.length; r++) {
                const num = nums[r];
                sum += num;
                map.set(num, (map.get(num) || 0) + 1);

                if (r - l + 1 === k) {
                        if (map.size === k) {
                                max = Math.max(max, sum);
                        }

                        const nl = nums[l++];
                        sum -= nl;
                        const val = map.get(nl);

                        if (val === 1) {
                                map.delete(nl);
                        } else {
                                map.set(nl, val - 1);
                        }
                }
        }

        return max;
};

export { maximumSubarraySum };
