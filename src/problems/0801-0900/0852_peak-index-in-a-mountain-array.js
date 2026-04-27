/**
 * 0852. Peak Index in a Mountain Array
 *
 * Link: https://leetcode.com/problems/peak-index-in-a-mountain-array/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-27
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 *
 * Stats:
 * - Total Accepted: 1,196,107
 * - Total Submissions: 1,789,033
 * - Acceptance Rate: 66.9%
 *
 * Similar Problems:
 * - find-peak-element (Medium)
 * - find-in-mountain-array (Hard)
 * - minimum-number-of-removals-to-make-mountain-array (Hard)
 */

/**
 * Approach: Binary Search
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * @param {number[]} arr
 * @return {number}
 */
const peakIndexInMountainArray = (arr) => {
        let l = 0;
        let r = arr.length - 1;

        while (l < r) {
                const m = (l + r) >> 1;

                if (arr[m] > arr[m + 1]) {
                        r = m;
                } else {
                        l = m + 1;
                }
        }

        return l;
};

export { peakIndexInMountainArray };
