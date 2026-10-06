/**
 * 665. Non-decreasing Array
 *
 * Link: https://leetcode.com/problems/non-decreasing-array/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Senior (position_senior)
 *
 * Stats:
 *
 * - Total Accepted: 299,419
 * - Total Submissions: 1,170,187
 * - Acceptance Rate: 25.6%
 *
 * Similar Problems:
 *
 * - find-good-days-to-rob-the-bank (Medium)
 * - count-non-decreasing-subarrays-after-k-operations (Hard)
 * - make-array-non-decreasing-or-non-increasing (Hard) (Premium)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @returns {boolean}
 */
const checkPossibility = (nums) => {
        for (let i = 0, drops = 0; i < nums.length - 1; i++) {
                if (nums[i] <= nums[i + 1]) {
                        continue;
                }

                if (++drops > 1) {
                        return false;
                }

                // unfixable drop, cannot modify either invalid index: nums[i]
                // or nums[i + 1] to fix it
                if (nums[i - 1] > nums[i + 1] && nums[i] > nums[i + 2]) {
                        return false;
                }
        }

        return true;
};

export { checkPossibility };
