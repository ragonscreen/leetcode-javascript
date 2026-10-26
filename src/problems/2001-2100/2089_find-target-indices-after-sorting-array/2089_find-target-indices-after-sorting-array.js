/**
 * 2089. Find Target Indices After Sorting Array
 *
 * Link: https://leetcode.com/problems/find-target-indices-after-sorting-array/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-10-19
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Sorting (topic_61049)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 269 (contest_weekly-contest-269)
 *
 * Stats:
 *
 * - Total Accepted: 438,228
 * - Total Submissions: 532,302
 * - Acceptance Rate: 82.3%
 *
 * Similar Problems:
 *
 * - find-words-containing-character (Easy)
 * - rank-transform-of-an-array (Easy)
 * - find-first-and-last-position-of-element-in-sorted-array (Medium)
 */

/**
 * Approach: Math
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
const targetIndices = (nums, target) => {
        let cntLt = 0;
        let cntEq = 0;

        for (const num of nums) {
                cntLt += num < target;
                cntEq += num === target;
        }

        return Uint8Array.from({ length: cntEq }, (_, i) => i + cntLt);
};

export { targetIndices };
