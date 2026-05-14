/**
 * 2770. Maximum Number of Jumps to Reach the Last Index
 *
 * Link: https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Dynamic Programming (topic_13)
 *
 * Stats:
 * - Total Accepted: 106,991
 * - Total Submissions: 210,624
 * - Acceptance Rate: 50.8%
 *
 * Similar Problems:
 * - jump-game-ii (Medium)
 * - jump-game-iii (Medium)
 * - jump-game-vii (Medium)
 * - minimum-jumps-to-reach-home (Medium)
 * - frog-jump (Hard)
 * - jump-game-iv (Hard)
 */

/**
 * Approach: Dynamic Programming
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const maximumJumps = (nums, target) => {
        const n = nums.length;
        const dp = new Int32Array(n).fill(-n - 1);
        dp[0] = 0;

        for (let i = 1; i < n; i++) {
                for (let j = 0; j < i; j++) {
                        if (Math.abs(nums[j] - nums[i]) <= target) {
                                dp[i] = Math.max(dp[i], dp[j] + 1);
                        }
                }
        }

        return Math.max(-1, dp[n - 1]);
};

export { maximumJumps };
