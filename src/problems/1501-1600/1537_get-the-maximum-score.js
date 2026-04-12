/**
 * 1537. Get the Maximum Score
 *
 * Link: https://leetcode.com/problems/get-the-maximum-score/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-04-12
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Dynamic Programming (topic_13)
 * - Greedy (topic_17)
 *
 * Stats:
 * - Total Accepted: 36,281
 * - Total Submissions: 88,479
 * - Acceptance Rate: 41.0%
 *
 * Similar Problems:
 * - maximum-score-of-a-node-sequence (Hard)
 */

/**
 * Approach: Greedy + Two Pointers
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 * `n` = length of `nums1`, `m` = length of `nums2`
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const maxSum = (nums1, nums2) => {
        const n = nums1.length;
        const m = nums2.length;
        let res = 0;
        let sum1 = 0;
        let sum2 = 0;
        let p = 0;
        let q = 0;

        while (p < n && q < m) {
                const x = nums1[p];
                const y = nums2[q];

                if (x < y) {
                        sum1 += x;
                        p++;
                } else if (y < x) {
                        sum2 += y;
                        q++;
                } else {
                        res += Math.max(sum1 + x, sum2 + y);
                        sum1 = 0;
                        sum2 = 0;
                        p++;
                        q++;
                }
        }

        // add remaining elements from either array
        while (p < n) {
                sum1 += nums1[p++];
        }

        while (q < m) {
                sum2 += nums2[q++];
        }

        res += Math.max(sum1, sum2);

        return res % (10 ** 9 + 7);
};

export { maxSum };
