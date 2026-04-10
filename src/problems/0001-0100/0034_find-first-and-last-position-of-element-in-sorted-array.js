/**
 * 0034. Find First and Last Position of Element in Sorted Array
 *
 * Link: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-10
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 *
 * Stats:
 * - Total Accepted: 3,269,451
 * - Total Submissions: 6,719,707
 * - Acceptance Rate: 48.7%
 *
 * Similar Problems:
 * - find-target-indices-after-sorting-array (Easy)
 * - first-bad-version (Easy)
 * - plates-between-candles (Medium)
 */

/**
 * Approach: Binary Search
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
        const n = nums.length;
        let l = 0;
        let r = n - 1;

        while (l < r) {
                const m = l + ((r - l) >> 1);

                if (nums[m] < target) {
                        l = m + 1;
                } else {
                        r = m;
                }
        }

        const x = nums[l] === target ? l : -1;

        if (x === -1) {
                return [-1, -1];
        }

        r = n;

        while (l < r) {
                const m = l + ((r - l) >> 1);

                if (nums[m] <= target) {
                        l = m + 1;
                } else {
                        r = m;
                }
        }

        return [x, l - 1];
};

export { searchRange };
