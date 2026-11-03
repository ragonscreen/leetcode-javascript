/**
 * 88. Merge Sorted Array
 *
 * Link: https://leetcode.com/problems/merge-sorted-array/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-03-04 (Updated: 2026-11-03)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Sorting (topic_61049)
 *
 * Stats:
 *
 * - Total Accepted: 5,530,931
 * - Total Submissions: 10,145,847
 * - Acceptance Rate: 54.5%
 *
 * Similar Problems:
 *
 * - merge-two-sorted-lists (Easy)
 * - squares-of-a-sorted-array (Easy)
 * - interval-list-intersections (Medium)
 * - take-k-of-each-character-from-left-and-right (Medium)
 */

/**
 * Approach: Two Pointers
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 * `N` = `m`
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @returns {void}
 */
const merge = (nums1, m, nums2, n) => {
        let p = m - 1;
        let q = n - 1;
        let i = m + n - 1;

        while (p > -1 && q > -1) nums1[i--] = nums1[p] > nums2[q] ? nums1[p--] : nums2[q--];
        while (p > -1) nums1[i--] = nums1[p--];
        while (q > -1) nums1[i--] = nums2[q--];
};

export { merge };
