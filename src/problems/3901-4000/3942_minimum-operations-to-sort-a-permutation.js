/**
 * 3942. Minimum Operations to Sort a Permutation
 *
 * Link: https://leetcode.com/problems/minimum-operations-to-sort-a-permutation/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Staff (position_staff)
 * - Weekly Contest 503 (contest_weekly-contest-503)
 *
 * Stats:
 * - Total Accepted: 13,278
 * - Total Submissions: 49,846
 * - Acceptance Rate: 26.6%
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = (nums) => {
        const n = nums.length;
        let asc = 1;
        let dsc = 1;

        for (let i = 1; i < n; i++) {
                const num = nums[i];
                const pre = nums[i - 1];
                asc += num === pre + 1;
                dsc += num === pre - 1;
        }

        const nl = nums[0];
        const nr = nums.at(-1);
        asc += nl === nr + 1;
        dsc += nl === nr - 1;

        if (asc === n) {
                return nl === 0 ? 0 : Math.min(n - nl, nl + 2);
        }

        if (dsc === n) {
                return nr === 0 ? 1 : Math.min(n - nr, nr) + 1;
        }

        return -1;
};

export { minOperations };
