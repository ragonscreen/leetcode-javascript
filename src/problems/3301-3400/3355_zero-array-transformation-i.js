/**
 * 3355. Zero Array Transformation I
 *
 * Link: https://leetcode.com/problems/zero-array-transformation-i/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-01
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 156,119
 * - Total Submissions: 286,574
 * - Acceptance Rate: 54.5%
 *
 * Similar Problems:
 * - zero-array-transformation-iv (Medium)
 */

/**
 * Approach: Difference Array
 * Time Complexity: O(n + q)
 * Space Complexity: O(n)
 * `n` = length of `nums`, `q` = length of `queries`
 *
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
const isZeroArray = (nums, queries) => {
        const n = nums.length;
        const diffs = new Int32Array(n);

        for (const [l, r] of queries) {
                diffs[l]--;
                diffs[r + 1]++;
        }

        let pre = 0;

        for (let i = 0; i < n; i++) {
                pre += diffs[i];

                if (nums[i] + pre > 0) {
                        return false;
                }
        }

        return true;
};

export { isZeroArray };
