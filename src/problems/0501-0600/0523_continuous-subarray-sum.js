/**
 * 0523. Continuous Subarray Sum
 *
 * Link: https://leetcode.com/problems/continuous-subarray-sum/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-22
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Math (topic_8)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 761,706
 * - Total Submissions: 2,436,520
 * - Acceptance Rate: 31.3%
 *
 * Similar Problems:
 * - apply-operations-to-make-all-array-elements-equal-to-zero (Medium)
 * - intervals-between-identical-elements (Medium)
 * - subarray-sum-equals-k (Medium)
 * - minimum-number-of-operations-to-make-array-continuous (Hard)
 */

/**
 * Approach: Hash Map + Math + Prefix Sum
 * Time Complexity: O(n)
 * Space Complexity: O(k)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const checkSubarraySum = (nums, k) => {
        const map = new Map([[0, -1]]);
        let prefix = 0;

        for (let i = 0; i < nums.length; i++) {
                prefix += nums[i];
                const rem = prefix % k;
                const idx = map.get(rem);

                if (idx === undefined) {
                        map.set(rem, i);
                } else if (idx < i - 1) {
                        return true;
                }
        }

        return false;
};

export { checkSubarraySum };
