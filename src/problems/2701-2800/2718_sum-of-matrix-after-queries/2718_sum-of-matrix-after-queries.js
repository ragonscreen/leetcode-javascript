/**
 * 2718. Sum of Matrix After Queries
 *
 * Link: https://leetcode.com/problems/sum-of-matrix-after-queries/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-16
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Staff (position_staff)
 * - Weekly Contest 348 (contest_weekly-contest-348)
 *
 * Stats:
 *
 * - Total Accepted: 26,329
 * - Total Submissions: 82,892
 * - Acceptance Rate: 31.8%
 *
 * Similar Problems:
 *
 * - range-addition-ii (Easy)
 * - range-sum-query-2d-mutable (Medium) (Premium)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(q)
 * Space Complexity: O(N)
 * `N` = `n`, `q` = `queries.length`
 *
 * @param {number} n
 * @param {number[][]} queries
 * @returns {number}
 */
const matrixSumQueries = (n, queries) => {
        const q = queries.length;
        const stRows = new Uint8Array(n);
        const stCols = new Uint8Array(n);
        let cntRows = 0;
        let cntCols = 0;
        let res = 0;

        for (let qi = q - 1; qi > -1; qi--) {
                const [t, i, v] = queries[qi];

                if (t === 0) {
                        if (stRows[i]) continue;

                        stRows[i] = 1;
                        cntRows++;
                        res += v * (n - cntCols);
                } else {
                        if (stCols[i]) continue;

                        stCols[i] = 1;
                        cntCols++;
                        res += v * (n - cntRows);
                }
        }

        return res;
};

export { matrixSumQueries };
