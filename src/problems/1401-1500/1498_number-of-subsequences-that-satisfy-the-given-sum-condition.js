/**
 * 1498. Number of Subsequences That Satisfy the Given Sum Condition
 *
 * Link: https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-22
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Binary Search (topic_11)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 250,576
 * - Total Submissions: 509,324
 * - Acceptance Rate: 49.2%
 *
 * Similar Problems:
 * - find-the-sum-of-subsequence-powers (Hard)
 * - find-the-sum-of-the-power-of-all-subsequences (Hard)
 * - minimum-operations-to-form-subsequence-with-target-sum (Hard)
 */

/**
 * Approach: Sorting + Two Pointers
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const numSubseq = (nums, target) => {
        nums.sort((a, b) => a - b);
        const n = nums.length;
        const pows = new Uint32Array(n);
        const mod = 1e9 + 7;
        pows[0] = 1;

        for (let i = 1; i < n; i++) {
                pows[i] = (pows[i - 1] * 2) % mod;
        }

        let res = 0;
        let l = 0;
        let r = n - 1;

        while (l <= r) {
                const sum = nums[l] + nums[r];

                if (sum > target) {
                        r--;
                } else {
                        res = (res + pows[r - l]) % mod;
                        l++;
                }
        }

        return res;
};

export { numSubseq };
