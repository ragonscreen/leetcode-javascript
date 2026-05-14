/**
 * 3925. Concatenate Array With Reverse
 *
 * Link: https://leetcode.com/problems/concatenate-array-with-reverse/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-05-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Stats:
 * - Total Accepted: 35,504
 * - Total Submissions: 38,604
 * - Acceptance Rate: 92.0%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const concatWithReverse = (nums) => {
        const n = nums.length;
        const nn = 2 * n;
        const res = new Uint8Array(nn);

        for (let l = 0; l < n; l++) {
                const r = nn - l - 1;
                const num = nums[l];
                res[l] = num;
                res[r] = num;
        }

        return res;
};

export { concatWithReverse };
