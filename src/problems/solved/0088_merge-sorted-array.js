/**
 * 0088. Merge Sorted Array
 * Link: https://leetcode.com/problems/merge-sorted-array/
 * Difficulty: Easy
 * Date: 2026-03-04
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation:
 * Time Complexity: O()
 * Space Complexity: O()
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
const merge = (nums1, m, nums2, n) => {
        let p = m - 1;
        let q = n - 1;
        let k = m + n - 1;

        while (p > -1 && q > -1) {
                if (nums1[p] < nums2[q]) {
                        nums1[k--] = nums2[q--];
                } else {
                        nums1[k--] = nums1[p--];
                }
        }

        while (p > -1 || q > -1) {
                nums1[k--] = nums1[p--] ?? nums2[q--];
        }
};

export { merge };
