/**
 * 0704. Binary Search
 *
 * Link: https://leetcode.com/problems/binary-search/
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
 * - Total Accepted: 3,834,537
 * - Total Submissions: 6,320,826
 * - Acceptance Rate: 60.7%
 *
 * Similar Problems:
 * - maximum-count-of-positive-integer-and-negative-integer (Easy)
 * - search-in-a-sorted-array-of-unknown-size (Medium)
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
const search = (nums, target) => {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
                const m = l + Math.floor((r - l) / 2);
                const num = nums[m];

                if (num < target) {
                        l = m + 1;
                } else if (num > target) {
                        r = m - 1;
                } else {
                        return m;
                }
        }

        return -1;
};

export { search };
