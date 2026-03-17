/**
 * 2149. Rearrange Array Elements by Sign
 *
 * Link: https://leetcode.com/problems/rearrange-array-elements-by-sign/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-13
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 823,605
 * - Total Submissions: 973,986
 * - Acceptance Rate: 84.6%
 *
 * Similar Problems:
 * - largest-number-after-digit-swaps-by-parity (Easy)
 * - sort-array-by-parity-ii (Easy)
 * - partition-array-according-to-given-pivot (Medium)
 * - wiggle-subsequence (Medium)
 */

/**
 * Approach: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const rearrangeArray = (nums) => {
        const res = new Array(nums.length);
        let idxPos = 0;
        let idxNeg = 1;

        for (const num of nums) {
                if (num > 0) {
                        res[idxPos] = num;
                        idxPos += 2;
                } else {
                        res[idxNeg] = num;
                        idxNeg += 2;
                }
        }

        return res;
};

export { rearrangeArray };
