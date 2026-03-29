/**
 * 1658. Minimum Operations to Reduce X to Zero
 *
 * Link: https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-29
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Binary Search (topic_11)
 * - Sliding Window (topic_55821)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 231,489
 * - Total Submissions: 571,876
 * - Acceptance Rate: 40.5%
 *
 * Similar Problems:
 * - minimum-operations-to-convert-number (Medium)
 * - minimum-operations-to-make-the-integer-zero (Medium)
 * - minimum-size-subarray-sum (Medium)
 * - removing-minimum-number-of-magic-beans (Medium)
 * - subarray-sum-equals-k (Medium)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
const minOperations = (nums, x) => {
        const n = nums.length;
        let total = 0;

        for (let i = 0; i < n; i++) {
                total += nums[i];
        }

        const diff = total - x;

        if (diff === 0) {
                return n;
        }

        let maxLen = 0;
        let sum = 0;

        for (let l = 0, r = 0; r < n; r++) {
                sum += nums[r];

                while (sum > diff) {
                        sum -= nums[l++];
                }

                if (sum === diff) {
                        maxLen = Math.max(maxLen, r - l + 1);
                }
        }

        return maxLen ? n - maxLen : -1;
};

export { minOperations };
