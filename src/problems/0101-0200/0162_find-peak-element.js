/**
 * 0162. Find Peak Element
 *
 * Link: https://leetcode.com/problems/find-peak-element/
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
 * - Total Accepted: 2,373,537
 * - Total Submissions: 5,065,247
 * - Acceptance Rate: 46.9%
 *
 * Similar Problems:
 * - count-hills-and-valleys-in-an-array (Easy)
 * - find-the-peaks (Easy)
 * - find-a-peak-element-ii (Medium)
 * - peak-index-in-a-mountain-array (Medium)
 * - pour-water-between-buckets-to-make-water-levels-equal (Medium)
 */

/**
 * Approach: Binary Search
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = (nums) => {
        const min = Number.MIN_SAFE_INTEGER;
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
                const m = l + Math.floor((r - l) / 2);
                const num = nums[m];
                const prev = nums[m - 1] ?? min;
                const next = nums[m + 1] ?? min;

                if (num > prev && num > next) {
                        return m;
                }

                if (num > prev && num < next) {
                        l = m + 1;
                } else {
                        r = m - 1;
                }
        }
};

export { findPeakElement };
