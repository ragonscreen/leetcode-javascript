/**
 * 1351. Count Negative Numbers in a Sorted Matrix
 *
 * Link: https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Matrix (topic_61053)
 *
 * Stats:
 * - Total Accepted: 659,567
 * - Total Submissions: 828,925
 * - Acceptance Rate: 79.6%
 *
 * Similar Problems:
 * - maximum-count-of-positive-integer-and-negative-integer (Easy)
 */

/**
 * Approach: Linear Scan [Optimal]
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 * `n` = length of `grid`, `m` = length of `grid[i]`
 *
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        let res = 0;
        let j = 0;

        for (let i = n - 1; i >= 0; i--) {
                while (j < m && grid[i][j] > -1) {
                        j++;
                }

                if (j === m) {
                        return res;
                }

                res += m - j;
        }

        return res;
};

/**
 * Approach: Binary Search [Bottom-Up]
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 * `n` = length of `grid`, `m` = length of `grid[i]`
 *
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives1 = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        let res = 0;
        let l = 0;

        for (let i = n - 1; i >= 0; i--) {
                const row = grid[i];
                let r = m - 1;

                if (row[l] < 0) {
                        res += m - l;
                        continue;
                }

                while (l < r) {
                        const mid = l + Math.floor((r - l) / 2);
                        const val = row[mid];

                        if (val > -1) {
                                l = mid + 1;
                        } else {
                                r = mid;
                        }
                }

                if (row[l] < 0) {
                        res += m - l;
                } else {
                        return res;
                }
        }

        return res;
};

/**
 * Approach: Binary Search [Top-Down]
 * Time Complexity: O(n log m)
 * Space Complexity: O(1)
 * `n` = length of `grid`, `m` = length of `grid[i]`
 *
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives2 = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        let res = 0;
        let r = m - 1;

        for (let i = 0; i < n; i++) {
                const row = grid[i];
                let l = 0;

                while (l < r) {
                        const mid = l + Math.floor((r - l) / 2);
                        const val = row[mid];

                        if (val > -1) {
                                l = mid + 1;
                        } else {
                                r = mid;
                        }
                }

                if (row[r] < 0) {
                        res += m - r;

                        if (r === 0) {
                                res += (n - i - 1) * m;
                                break;
                        }
                }
        }

        return res;
};

export { countNegatives, countNegatives1, countNegatives2 };
