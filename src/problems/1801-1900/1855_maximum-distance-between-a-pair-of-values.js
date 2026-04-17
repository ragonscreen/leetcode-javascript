/**
 * 1855. Maximum Distance Between a Pair of Values
 *
 * Link: https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-18
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Binary Search (topic_11)
 *
 * Stats:
 * - Total Accepted: 62,704
 * - Total Submissions: 115,509
 * - Acceptance Rate: 54.3%
 *
 * Similar Problems:
 * - two-furthest-houses-with-different-colors (Easy)
 */

/**
 * Approach: Two Pointers [Optimal]
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const maxDistance = (nums1, nums2) => {
        let res = 0;

        for (let l = 0, r = 0; l < nums1.length; ) {
                if (nums2[r] >= nums1[l]) {
                        r++;
                } else {
                        res = Math.max(res, r - l - 1);
                        l++;
                }
        }

        return res;
};

/**
 * Approach: Binary Search
 * Time Complexity: O(n log m)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const maxDistance1 = (nums1, nums2) => {
        const n = nums1.length;
        const m = nums2.length;
        let res = 0;
        let l = 0;

        for (let i = 0; i < n; i++) {
                const num = nums1[i];
                let r = m;

                while (l < r) {
                        const mid = l + ((r - l) >> 1);

                        if (nums2[mid] >= num) {
                                l = mid + 1;
                        } else {
                                r = mid;
                        }
                }

                if (nums2[l - 1] >= num) {
                        res = Math.max(res, l - 1 - i);
                }
        }

        return res;
};

export { maxDistance, maxDistance1 };
