/**
 * 0300. Longest Increasing Subsequence
 *
 * Link: https://leetcode.com/problems/longest-increasing-subsequence/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Dynamic Programming (topic_13)
 *
 * Stats:
 * - Total Accepted: 2,632,346
 * - Total Submissions: 4,432,466
 * - Acceptance Rate: 59.4%
 *
 * Similar Problems:
 * - find-the-maximum-length-of-a-good-subsequence-i (Medium)
 * - find-the-maximum-length-of-valid-subsequence-i (Medium)
 * - find-the-maximum-length-of-valid-subsequence-ii (Medium)
 * - increasing-triplet-subsequence (Medium)
 * - longest-ideal-subsequence (Medium)
 * - longest-subsequence-with-decreasing-adjacent-difference (Medium)
 * - maximum-length-of-pair-chain (Medium)
 * - minimum-ascii-delete-sum-for-two-strings (Medium)
 * - number-of-longest-increasing-subsequence (Medium)
 * - find-the-longest-valid-obstacle-course-at-each-position (Hard)
 * - find-the-maximum-length-of-a-good-subsequence-ii (Hard)
 * - longest-increasing-subsequence-ii (Hard)
 * - maximum-number-of-books-you-can-take (Hard)
 * - minimum-number-of-removals-to-make-mountain-array (Hard)
 * - minimum-operations-to-make-the-array-k-increasing (Hard)
 * - russian-doll-envelopes (Hard)
 */

/**
 * Approach: Dynamic Programming
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
        const n = nums.length;
        const dp = new Uint16Array(n);

        for (let i = 0; i < n; i++) {
                for (let j = 0; j < i; j++) {
                        if (nums[i] > nums[j]) {
                                dp[i] = Math.max(dp[i], dp[j] + 1);
                        }
                }
        }

        return Math.max(...dp) + 1;
};

export { lengthOfLIS };
