/**
 * 2161. Partition Array According to Given Pivot
 *
 * Link: https://leetcode.com/problems/partition-array-according-to-given-pivot/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-23
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 312,379
 * - Total Submissions: 347,980
 * - Acceptance Rate: 89.8%
 *
 * Similar Problems:
 * - partition-list (Medium)
 * - rearrange-array-elements-by-sign (Medium)
 */

/**
 * Approach: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
const pivotArray = (nums, pivot) => {
        const n = nums.length;
        const res = new Int32Array(n);
        let p = 0;
        let q = n - 1;

        for (let l = 0, r = n - 1; l < n; l++, r--) {
                const nl = nums[l];
                const nr = nums[r];

                if (nl < pivot) {
                        res[p++] = nl;
                }

                if (nr > pivot) {
                        res[q--] = nr;
                }
        }

        while (p <= q) {
                res[p++] = pivot;
        }

        return res;
};

export { pivotArray };
