/**
 * 3932. Count K-th Roots in a Range
 *
 * Link: https://leetcode.com/problems/count-k-th-roots-in-a-range/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-17 (Updated: 2026-06-04)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Senior (position_senior)
 * - Weekly Contest 502 (contest_weekly-contest-502)
 *
 * Stats:
 * - Total Accepted: 17,169
 * - Total Submissions: 80,657
 * - Acceptance Rate: 21.3%
 */

/**
 * Approach: Math
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {number} l
 * @param {number} r
 * @param {number} k
 * @return {number}
 */
const countKthRoots = (l, r, k) => {
        const d = Number.EPSILON;
        const cntl = Math.ceil(l ** (1 / k) - d);
        const cntr = Math.floor(r ** (1 / k) + d);

        return Math.max(0, cntr - cntl + 1);
};

/**
 * Approach: Math
 * Time Complexity: O(R^(1 / K))
 * Space Complexity: O(1)
 * `R` = `r`, `K` = `k`
 *
 * @param {number} l
 * @param {number} r
 * @param {number} k
 * @return {number}
 */
const countKthRoots1 = (l, r, k) => {
        if (k === 1) {
                return r - l + 1;
        }

        let res = 0;
        let i = 0;

        while (true) {
                const v = i ** k;

                if (v > r) {
                        break;
                }

                if (v >= l) {
                        res++;
                }

                i++;
        }

        return res;
};

/**
 * Approach: Binary Search
 * Time Complexity: O(lg L + lg R)
 * Space Complexity: O(1)
 * `L` = `l`, `R` = `r`
 *
 * @param {number} l
 * @param {number} r
 * @param {number} k
 * @return {number}
 */
const countKthRoots2 = (l, r, k) => {
        const kthRoot = (num) => {
                if (num === 0) {
                        return 0;
                }

                if (k === 1) {
                        return num;
                }

                let ok = 1;
                let ng = num + 1;

                while (Math.abs(ok - ng) > 1) {
                        const mid = (ok + ng) >> 1;
                        const val = mid ** k;

                        if (val <= num) {
                                ok = mid;
                        } else {
                                ng = mid;
                        }
                }

                return ok;
        };

        const a = kthRoot(l);
        const b = kthRoot(r);
        let res = b - a + 1;

        if (a ** k < l) {
                res--;
        }

        return res;
};

export { countKthRoots, countKthRoots1, countKthRoots2 };
