/**
 * 0027. Remove Element
 *
 * Link: https://leetcode.com/problems/remove-element/
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
 * - Total Accepted: 5,076,679
 * - Total Submissions: 8,258,805
 * - Acceptance Rate: 61.5%
 *
 * Similar Problems:
 * - move-zeroes (Easy)
 * - remove-duplicates-from-sorted-array (Easy)
 * - remove-linked-list-elements (Easy)
 */

/**
 * Approach: Fast and Slow Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
        let slow = 0;
        let fast = 0;

        while (fast < nums.length) {
                if (nums[fast] !== val) {
                        nums[slow++] = nums[fast];
                }

                fast++;
        }

        return slow;
};

export { removeElement };
