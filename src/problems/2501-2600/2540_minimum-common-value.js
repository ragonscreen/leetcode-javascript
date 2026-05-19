/**
 * 2540. Minimum Common Value
 *
 * Link: https://leetcode.com/problems/minimum-common-value/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-05-19
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Two Pointers (topic_9)
 * - Binary Search (topic_11)
 * - Mid Level (position_mid-level)
 * - Biweekly Contest 96 (contest_biweekly-contest-96)
 *
 * Stats:
 * - Total Accepted: 353,479
 * - Total Submissions: 596,827
 * - Acceptance Rate: 59.2%
 *
 * Similar Problems:
 * - intersection-of-two-arrays (Easy)
 * - intersection-of-two-arrays-ii (Easy)
 *
 * Custom Details:
 * - Level: 3 (custom-level_3)
 * - Two Pointers (custom-topic_two-pointers)
 * - Two Pointers on Separate Arrays (custom-tag_two-pointers-on-separate-arrays)
 */

/**
 * Approach: Two Pointers
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 * `n` = `nums1.length`, `m` = `nums2.length`
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const getCommon = (nums1, nums2) => {
        let p = 0;
        let q = 0;

        while (p < nums1.length && q < nums2.length) {
                const a = nums1[p];
                const b = nums2[q];

                if (a === b) {
                        return a;
                }

                if (a < b) {
                        p++;
                } else {
                        q++;
                }
        }

        return -1;
};

export { getCommon };
