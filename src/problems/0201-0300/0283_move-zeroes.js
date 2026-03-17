/**
 * 0283. Move Zeroes
 *
 * Link: https://leetcode.com/problems/move-zeroes/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-02-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 *
 * Stats:
 * - Total Accepted: 4,959,788
 * - Total Submissions: 7,795,714
 * - Acceptance Rate: 63.6%
 *
 * Similar Problems:
 * - apply-operations-to-an-array (Easy)
 * - remove-element (Easy)
 */

/**
 * Approach: Fast and Slow Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} nums
 * @return {void}
 */
const moveZeroes = (nums) => {
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
};

export { moveZeroes };
