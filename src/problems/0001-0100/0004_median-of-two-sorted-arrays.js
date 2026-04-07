/**
 * 0004. Median of Two Sorted Arrays
 *
 * Link: https://leetcode.com/problems/median-of-two-sorted-arrays/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-04-07
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Divide and Conquer (topic_12)
 *
 * Stats:
 * - Total Accepted: 4,172,571
 * - Total Submissions: 9,020,619
 * - Acceptance Rate: 46.3%
 *
 * Similar Problems:
 * - median-of-a-row-wise-sorted-matrix (Medium)
 */

/**
 * Approach: Two Pointers
 * Time Complexity: O((m + n) / 2)
 * Space Complexity: O(1)
 * `m` = length of `nums`, `n` = length of `nums2`
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
        const lastIdx = nums1.length + nums2.length - 1;
        const mi = Math.floor(lastIdx / 2);
        const mj = Math.ceil(lastIdx / 2);
        const equal = mi === mj;
        let found = 0;
        let p = 0;
        let q = 0;
        let m1;
        let m2;

        while (m1 === undefined || m2 === undefined) {
                if (p + q === mi) {
                        found = 1;
                }

                if (p + q === mj) {
                        found = 2;
                }

                let val;

                if (nums1[p] <= nums2[q] || nums2[q] === undefined) {
                        val = nums1[p++];
                } else {
                        val = nums2[q++];
                }

                if (found === 1 || equal) {
                        m1 = val;
                }

                if (found === 2) {
                        m2 = val;
                }
        }

        return (m1 + m2) / 2;
};

export { findMedianSortedArrays };
