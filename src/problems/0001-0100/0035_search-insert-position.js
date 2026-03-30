/**
 * 0035. Search Insert Position
 *
 * Link: https://leetcode.com/problems/search-insert-position/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-03-30
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 *
 * Stats:
 * - Total Accepted: 4,646,520
 * - Total Submissions: 9,119,477
 * - Acceptance Rate: 51.0%
 *
 * Similar Problems:
 * - first-bad-version (Easy)
 * - minimum-operations-to-exceed-threshold-value-i (Easy)
 */

/**
 * Approach: Binary Search
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
        let l = 0;
        let r = nums.length;

        while (l < r) {
                const m = l + Math.floor((r - l) / 2);
                const num = nums[m];

                if (num < target) {
                        l = m + 1;
                } else if (num > target) {
                        r = m;
                } else {
                        return m;
                }
        }

        return l;
};

export { searchInsert };
