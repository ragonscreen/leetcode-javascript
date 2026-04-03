/**
 * 0033. Search in Rotated Sorted Array
 *
 * Link: https://leetcode.com/problems/search-in-rotated-sorted-array/
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
 * - Total Accepted: 4,361,618
 * - Total Submissions: 9,841,200
 * - Acceptance Rate: 44.3%
 *
 * Similar Problems:
 * - find-minimum-in-rotated-sorted-array (Medium)
 * - pour-water-between-buckets-to-make-water-levels-equal (Medium)
 * - search-in-rotated-sorted-array-ii (Medium)
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
        const n = nums.length;
        let l = 0;
        let r = n - 1;

        while (l < r) {
                const m = l + Math.floor((r - l) / 2);

                if (nums[m] > nums[r]) {
                        l = m + 1;
                } else {
                        r = m;
                }
        }

        r += n - 1;

        while (l <= r) {
                const m = l + Math.floor((r - l) / 2);
                const num = nums[m % n];

                if (num > target) {
                        r = m - 1;
                } else if (num < target) {
                        l = m + 1;
                } else {
                        return m % n;
                }
        }

        return -1;
};

export { search };
