/**
 * 1738. Find Kth Largest XOR Coordinate Value
 *
 * Link: https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-10
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Divide and Conquer (topic_12)
 * - Bit Manipulation (topic_19)
 * - Sorting (topic_61049)
 * - Heap (Priority Queue) (topic_61050)
 * - Matrix (topic_61053)
 * - Prefix Sum (topic_61068)
 * - Quickselect (topic_61069)
 * - Staff (position_staff)
 * - Weekly Contest 225 (contest_weekly-contest-225)
 *
 * Stats:
 *
 * - Total Accepted: 32,217
 * - Total Submissions: 49,782
 * - Acceptance Rate: 64.7%
 */

/**
 * Approach: Prefix Sum + Sorting
 * Time Complexity: O(n * m * lg (n * m))
 * Space Complexity: O(n * m)
 * `n` = `matrix.length`, `m` = `matrix[0].length`
 *
 * @param {number[][]} matrix
 * @param {number} k
 * @returns {number}
 */
const kthLargestValue = (matrix, k) => {
        const n = matrix.length;
        const m = matrix[0].length;
        const sz = n * m;
        const p = new Uint32Array(m);
        const xors = new Uint32Array(sz);

        for (let y = 0, xi = 0; y < n; y++) {
                for (let x = 0, rxor = 0; x < m; x++) {
                        rxor ^= matrix[y][x];
                        p[x] ^= rxor;
                        xors[xi++] = p[x];
                }
        }

        return xors.sort()[sz - k];
};

export { kthLargestValue };
