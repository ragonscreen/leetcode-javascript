/**
 * 2934. Minimum Operations to Maximize Last Elements in Arrays
 *
 * Link: https://leetcode.com/problems/minimum-operations-to-maximize-last-elements-in-arrays/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-16
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Enumeration (topic_61066)
 * - Senior (position_senior)
 * - Weekly Contest 371 (contest_weekly-contest-371)
 *
 * Stats:
 *
 * - Total Accepted: 15,885
 * - Total Submissions: 36,340
 * - Acceptance Rate: 43.7%
 *
 * Similar Problems:
 *
 * - minimum-swaps-to-make-sequences-increasing (Hard)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `nums1.length`
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number}
 */
const minOperations = (nums1, nums2) => {
        const n = nums1.length;

        const count = (mx1, mx2) => {
                let cnt = 0;
                let idx = 0;

                for (; idx < n - 1; idx++) {
                        const num1 = nums1[idx];
                        const num2 = nums2[idx];

                        if (num1 <= mx1 && num2 <= mx2) continue; // no swap req
                        if (num1 > mx2 || num2 > mx1) break; // no swap possible

                        cnt++; // swap
                }

                return idx === n - 1 ? cnt : -1;
        };

        const v1 = nums1[n - 1];
        const v2 = nums2[n - 1];
        const cnt1 = count(v1, v2);
        const cnt2 = count(v2, v1) + 1; // +1 to include n - 1th swap

        // either both cases are invalid or neither are
        //   so checking for -1 on one of the counts is enough
        return cnt1 === -1 ? -1 : Math.min(cnt1, cnt2);
};

export { minOperations };
