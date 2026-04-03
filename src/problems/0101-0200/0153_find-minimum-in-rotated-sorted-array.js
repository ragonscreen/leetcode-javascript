/**
 * 0153. Find Minimum in Rotated Sorted Array
 *
 * Link: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 *
 * Stats:
 * - Total Accepted: 2,961,153
 * - Total Submissions: 5,484,607
 * - Acceptance Rate: 54.0%
 *
 * Similar Problems:
 * - search-in-rotated-sorted-array (Medium)
 * - find-minimum-in-rotated-sorted-array-ii (Hard)
 */

/**
 * Approach: Binary Search
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {
        let l = 0;
        let r = nums.length - 1;

        while (l < r) {
                const m = l + Math.floor((r - l) / 2);

                if (nums[m] > nums[r]) {
                        l = m + 1;
                } else {
                        r = m;
                }
        }

        return nums[r];
};

export { findMin };
