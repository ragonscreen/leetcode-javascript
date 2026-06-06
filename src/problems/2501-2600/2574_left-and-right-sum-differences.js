/**
 * 2574. Left and Right Sum Differences
 *
 * Link: https://leetcode.com/problems/left-and-right-sum-differences/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-06-06
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Prefix Sum (topic_61068)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 334 (contest_weekly-contest-334)
 *
 * Stats:
 * - Total Accepted: 319,479
 * - Total Submissions: 357,411
 * - Acceptance Rate: 89.4%
 *
 * Similar Problems:
 * - find-pivot-index (Easy)
 * - find-the-distinct-difference-array (Easy)
 * - find-the-middle-index-in-array (Easy)
 * - find-the-n-th-value-after-k-seconds (Medium)
 */

/**
 * Approach: Prefix Sum
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const leftRightDifference = (nums) => {
        const n = nums.length;
        const res = new Uint32Array(n);

        for (let cntl = 0, i = 0; i < n; i++) {
                res[i] = cntl;
                cntl += nums[i];
        }

        for (let cntr = 0, i = n - 1; i > -1; i--) {
                res[i] = Math.abs(res[i] - cntr);
                cntr += nums[i];
        }

        return res;
};

export { leftRightDifference };
