/**
 * 0154. Find Minimum in Rotated Sorted Array II
 *
 * Link: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-04-11
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 *
 * Stats:
 * - Total Accepted: 611,763
 * - Total Submissions: 1,365,620
 * - Acceptance Rate: 44.8%
 *
 * Similar Problems:
 * - find-minimum-in-rotated-sorted-array (Medium)
 */

/**
 * Approach: Binary Search
 * Time Complexity: O(log n) average, O(n) worst
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {
        let l = 0;
        let r = nums.length - 1;

        while (l < r) {
                const m = l + ((r - l) >> 1);
                const nm = nums[m];
                const nl = nums[l];
                const nr = nums[r];

                if (nm === nl && nm === nr) {
                        l++;
                        r--;
                } else if (nm > nr) {
                        l = m + 1;
                } else {
                        r = m;
                }
        }

        return nums[r];
};

export { findMin };
