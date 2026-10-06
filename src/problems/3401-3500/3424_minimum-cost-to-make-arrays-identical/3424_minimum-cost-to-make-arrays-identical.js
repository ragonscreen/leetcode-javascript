/**
 * 3424. Minimum Cost to Make Arrays Identical
 *
 * Link: https://leetcode.com/problems/minimum-cost-to-make-arrays-identical/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 * - Senior (position_senior)
 * - Biweekly Contest 148 (contest_biweekly-contest-148)
 *
 * Stats:
 *
 * - Total Accepted: 26,062
 * - Total Submissions: 68,138
 * - Acceptance Rate: 38.2%
 */

/**
 * Approach: Greedy + Sorting
 * Time Complexity: O(n lg n)
 * Space Complexity: O(1) auxiliary, O(n) for sorting
 * `n` = `arr.length`
 *
 * The key point is that operation 1 allows us to divide the array into any
 * number of parts. This means that we can divide the array into `n` parts and
 * rearrange them as we please, only incurring the cost `k` once.
 *
 * @param {number[]} arr
 * @param {number[]} brr
 * @param {number} k
 * @returns {number}
 */
const minCost = (arr, brr, k) => {
        const n = arr.length;
        let res1 = 0;

        for (let i = 0; i < n; i++) {
                res1 += Math.abs(arr[i] - brr[i]);
        }

        arr.sort((a, b) => a - b);
        brr.sort((a, b) => a - b);
        let res2 = k;

        for (let i = 0; i < n; i++) {
                res2 += Math.abs(arr[i] - brr[i]);
        }

        return Math.min(res1, res2);
};

export { minCost };
