/**
 * 2460. Apply Operations to an Array
 *
 * Link: https://leetcode.com/problems/apply-operations-to-an-array/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-02-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 270,962
 * - Total Submissions: 362,616
 * - Acceptance Rate: 74.7%
 *
 * Similar Problems:
 * - move-zeroes (Easy)
 * - remove-duplicates-from-sorted-array (Easy)
 */

/**
 * Approach: Fast and Slow Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const applyOperations = (nums) => {
        for (let i = 0; i < nums.length - 1; i++) {
                if (nums[i] === nums[i + 1]) {
                        nums[i] *= 2;
                        nums[i + 1] = 0;
                }
        }

        let slow = 0;
        let fast = 0;

        while (fast < nums.length) {
                if (nums[fast] !== 0) {
                        if (nums[slow] === 0) {
                                nums[slow] = nums[fast];
                                nums[fast] = 0;
                        }

                        slow++;
                }

                fast++;
        }

        return nums;
};

export { applyOperations };
