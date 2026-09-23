/**
 * 1658. Minimum Operations to Reduce X to Zero
 *
 * Link: https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-29 (Updated: 2026-09-23)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Binary Search (topic_11)
 * - Sliding Window (topic_55821)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 *
 * - Total Accepted: 231,489
 * - Total Submissions: 571,876
 * - Acceptance Rate: 40.5%
 *
 * Similar Problems:
 *
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
 * @returns {number}
 */
const minOperations = (nums, x) => {
        const n = nums.length;
        const tot = nums.reduce((t, c) => t + c, 0);

        if (tot < x) return -1;
        if (tot === x) return n;

        const target = tot - x;
        let res = -1;

        for (let l = 0, r = 0, sum = 0; r < n; r++) {
                sum += nums[r];

                while (sum > target) sum -= nums[l++];

                if (sum === target) res = Math.max(res, r - l + 1);
        }

        return res === -1 ? res : n - res;
};

export { minOperations };
