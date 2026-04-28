/**
 * 3070. Count Submatrices with Top-Left Element and Sum Less Than k
 *
 * Link: https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-29
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Matrix (topic_61053)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 121,441
 * - Total Submissions: 162,327
 * - Acceptance Rate: 74.8%
 */

/**
 * Approach: Prefix Sum
 * Time Complexity: O(n * m)
 * Space Complexity: O(m)
 *
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
const countSubmatrices = (grid, k) => {
        const n = grid.length;
        const m = grid[0].length;
        const prefix = new Uint32Array(m);
        let res = 0;

        for (let y = 0; y < n; y++) {
                for (let x = 0, sum = 0; x < m; x++) {
                        prefix[x] += grid[y][x];
                        sum += prefix[x];

                        // adding further columns will never satisfy
                        if (sum > k) {
                                continue;
                        }

                        res++;
                }
        }

        return res;
};

export { countSubmatrices };
