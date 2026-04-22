/**
 * 0668. Kth Smallest Number in Multiplication Table
 *
 * Link: https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-04-23
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - Binary Search (topic_11)
 *
 * Stats:
 * - Total Accepted: 85,035
 * - Total Submissions: 157,409
 * - Acceptance Rate: 54.0%
 *
 * Similar Problems:
 * - k-th-smallest-prime-fraction (Medium)
 * - kth-smallest-element-in-a-sorted-matrix (Medium)
 * - find-k-th-smallest-pair-distance (Hard)
 * - kth-smallest-amount-with-single-denomination-combination (Hard)
 * - minimum-time-to-eat-all-grains (Hard)
 */

/**
 * Approach: Binary Search + Sliding Window
 * Time Complexity: O((m + n) log (m * n))
 * Space Complexity: O(1)
 *
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const findKthNumber = (m, n, k) => {
        const check = (num) => {
                let cnt = 0;

                for (let i = 1, j = n; i <= m; i++) {
                        while (i * j > num && j > 0) {
                                j--;
                        }

                        cnt += j;

                        if (cnt >= k) {
                                return true;
                        }
                }

                return false;
        };

        let ok = m * n;
        let ng = 0;

        while (Math.abs(ok - ng) > 1) {
                const mid = (ok + ng) >> 1;

                if (check(mid)) {
                        ok = mid;
                } else {
                        ng = mid;
                }
        }

        return ok;
};

export { findKthNumber };
