/**
 * 3936. Minimum Swaps to Move Zeros to End
 *
 * Link: https://leetcode.com/problems/minimum-swaps-to-move-zeros-to-end/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-05-22
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Mid Level (position_mid-level)
 * - Biweekly Contest 183 (contest_biweekly-contest-183)
 *
 * Stats:
 * - Total Accepted: 31,636
 * - Total Submissions: 52,015
 * - Acceptance Rate: 60.8%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @return {number}
 */
const minimumSwaps = (nums) => {
        const n = nums.length;

        if (n === 1) {
                return 0;
        }

        let cnt = 0;

        for (let i = 0; i < n; i++) {
                cnt += nums[i] === 0;
        }

        if (cnt === 0) {
                return 0;
        }

        let res = 0;

        for (let i = n - 1; cnt > 0; i--, cnt--) {
                res += nums[i] !== 0;
        }

        return res;
};

export { minimumSwaps };
