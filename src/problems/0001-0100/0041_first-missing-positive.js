/**
 * 0041. First Missing Positive
 *
 * Link: https://leetcode.com/problems/first-missing-positive/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-03-09
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 *
 * Stats:
 * - Total Accepted: 1,714,146
 * - Total Submissions: 4,027,396
 * - Acceptance Rate: 42.6%
 *
 * Similar Problems:
 * - find-all-numbers-disappeared-in-an-array (Easy)
 * - missing-number (Easy)
 * - smallest-missing-integer-greater-than-sequential-prefix-sum (Easy)
 * - find-the-duplicate-number (Medium)
 * - maximum-number-of-integers-to-choose-from-a-range-i (Medium)
 * - maximum-number-of-integers-to-choose-from-a-range-ii (Medium)
 * - smallest-missing-non-negative-integer-after-operations (Medium)
 * - smallest-number-in-infinite-set (Medium)
 * - couples-holding-hands (Hard)
 */

/**
 * Approach: Cyclic Sort + Negative Marking
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = (nums) => {
        const n = nums.length;

        for (let i = 0; i < n; i++) {
                if (nums[i] <= 0) {
                        nums[i] = n + 1;
                }
        }

        for (const num of nums) {
                let idx = Math.abs(num) - 1;

                while (nums[idx] > 0) {
                        const tmp = nums[idx];
                        nums[idx] *= -1;
                        idx = tmp - 1;
                }
        }

        for (let i = 0; i < n; i++) {
                if (nums[i] > 0) {
                        return i + 1;
                }
        }

        return n + 1;
};

export { firstMissingPositive };
