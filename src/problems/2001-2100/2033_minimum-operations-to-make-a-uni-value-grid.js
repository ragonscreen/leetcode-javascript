/**
 * 2033. Minimum Operations to Make a Uni-Value Grid
 *
 * Link: https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-28
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - Sorting (topic_61049)
 * - Matrix (topic_61053)
 *
 * Stats:
 * - Total Accepted: 179,520
 * - Total Submissions: 259,459
 * - Acceptance Rate: 69.2%
 *
 * Similar Problems:
 * - minimum-moves-to-equal-array-elements-ii (Medium)
 */

/**
 * Approach: Sorting + Greedy
 * Time Complexity: O(n * m * log (n * m))
 * Space Complexity: O(n * m)
 *
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
const minOperations = (grid, x) => {
        const n = grid.length;
        const m = grid[0].length;
        const sz = n * m;
        const nums = new Uint32Array(sz);
        const rem = grid[0][0] % x;
        let idx = 0;

        for (let i = 0; i < n; i++) {
                for (let j = 0; j < m; j++) {
                        const c = grid[i][j];

                        if (c % x !== rem) {
                                return -1;
                        }

                        nums[idx++] = c;
                }
        }

        nums.sort();
        const mid = nums[(sz - 1) >> 1];
        let res = 0;

        for (let i = 0; i < sz; i++) {
                res += Math.abs(mid - nums[i]) / x;
        }

        return res;
};

export { minOperations };
