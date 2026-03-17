/**
 * 0026. Remove Duplicates from Sorted Array
 *
 * Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
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
 * - Total Accepted: 7,600,858
 * - Total Submissions: 12,183,480
 * - Acceptance Rate: 62.4%
 *
 * Similar Problems:
 * - apply-operations-to-an-array (Easy)
 * - remove-element (Easy)
 * - remove-duplicates-from-sorted-array-ii (Medium)
 * - sum-of-distances (Medium)
 */

/**
 * Approach: Fast and Slow Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
        let slow = 1;
        let fast = 1;

        while (fast < nums.length) {
                if (nums[fast] !== nums[fast - 1]) {
                        nums[slow++] = nums[fast];
                }

                fast++;
        }

        return slow;
};

export { removeDuplicates };
