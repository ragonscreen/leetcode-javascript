/**
 * 1674. Minimum Moves to Make Array Complementary
 *
 * Link: https://leetcode.com/problems/minimum-moves-to-make-array-complementary/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-13
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 31,814
 * - Total Submissions: 56,170
 * - Acceptance Rate: 56.6%
 *
 * Similar Problems:
 * - zero-array-transformation-ii (Medium)
 * - zero-array-transformation-iii (Medium)
 */

/**
 * Approach: Difference Array
 * Time Complexity: O(n + K)
 * Space Complexity: O(K)
 * `n` = length of `nums`, `K` = `limit`
 *
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
const minMoves = (nums, limit) => {
        const n = nums.length;
        const mid = n / 2;
        const diff = new Int32Array(2 * limit + 2);

        for (let i = 0; i < mid; i++) {
                const a = nums[i];
                const b = nums[n - i - 1];
                const min = Math.min(a, b) + 1;
                const max = Math.max(a, b) + limit;
                const sum = a + b;
                // find range where cntEdits is 1
                // outside this range cntEdits is 2
                diff[min]--;
                diff[max + 1]++;
                // if sum is target, cntEdits is 0
                diff[sum]--;
                diff[sum + 1]++;
        }

        let res = n;

        for (let i = 0, pre = n; i < diff.length; i++) {
                pre += diff[i];
                res = Math.min(res, pre);
        }

        return res;
};

export { minMoves };
