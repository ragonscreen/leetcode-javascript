/**
 * 0081. Search in Rotated Sorted Array II
 *
 * Link: https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
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
 * - Total Accepted: 1,215,670
 * - Total Submissions: 3,049,231
 * - Acceptance Rate: 39.9%
 *
 * Similar Problems:
 * - search-in-rotated-sorted-array (Medium)
 */

/**
 * Approach: Binary Search
 * Time Complexity: O(log n) average, O(n) worst
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
const search = (nums, target) => {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
                const m = l + Math.floor((r - l) / 2);
                const nm = nums[m];
                const nl = nums[l];
                const nr = nums[r];

                if (nm === target) {
                        return true;
                }

                if (nm === nl && nm === nr) {
                        l++;
                        r--;
                } else if (nm >= nl) {
                        if (target < nm && target >= nl) {
                                r = m - 1;
                        } else {
                                l = m + 1;
                        }
                } else {
                        if (target > nm && target <= nr) {
                                l = m + 1;
                        } else {
                                r = m - 1;
                        }
                }
        }

        return false;
};

export { search };
