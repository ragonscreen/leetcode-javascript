/**
 * 2428. Maximum Sum of an Hourglass
 *
 * Link: https://leetcode.com/problems/maximum-sum-of-an-hourglass/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-07
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Matrix (topic_61053)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 54,226
 * - Total Submissions: 71,068
 * - Acceptance Rate: 76.3%
 *
 * Similar Problems:
 * - matrix-block-sum (Medium)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n * m)
 * Space Complexity: O(1)
 *
 * @param {number[][]} grid
 * @return {number}
 */
const maxSum = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        let res = 0;

        for (let y = 0; y + 2 < n; y++) {
                let sum = 0;

                for (let i = 0; i < m; i++) {
                        const a = grid[y];
                        const b = grid[y + 1];
                        const c = grid[y + 2];
                        sum += a[i] + c[i];

                        if (i < 2) {
                                continue;
                        }

                        sum += b[i - 1];
                        res = Math.max(res, sum);
                        sum -= a[i - 2] + c[i - 2] + b[i - 1];
                }
        }

        return res;
};

/**
 * Approach: Prefix Sum
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 *
 * @param {number[][]} grid
 * @return {number}
 */
const maxSum1 = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        const pre = new Uint32Array(n * m);
        const p = (y, x) => m * y + x;

        for (let y = 0; y < n; y++) {
                let sum = 0;

                for (let x = 0; x < m; x++) {
                        const k = p(y, x);
                        sum += grid[y][x];
                        pre[k] = sum;
                }
        }

        let res = 0;

        for (let y = 0; y + 2 < n; y++) {
                let sum = 0;

                for (let x = 2; x < m; x++) {
                        const tk = p(y, x);
                        const mk = p(y + 1, x - 1);
                        const bk = p(y + 2, x);
                        sum = pre[tk] + pre[mk] - pre[mk - 1] + pre[bk];

                        if (x > 2) {
                                sum = sum - pre[tk - 3] - pre[bk - 3];
                        }

                        res = Math.max(res, sum);
                }
        }

        return res;
};

export { maxSum, maxSum1 };
