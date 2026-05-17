/**
 * 3932. Count K-th Roots in a Range
 *
 * Link: https://leetcode.com/problems/count-k-th-roots-in-a-range/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Stats:
 * - Total Accepted: 17,169
 * - Total Submissions: 80,657
 * - Acceptance Rate: 21.3%
 */

/**
 * Approach: Binary Search
 * Time Complexity: O(lg l + lg r)
 * Space Complexity: O(1)
 *
 * @param {number} l
 * @param {number} r
 * @param {number} k
 * @return {number}
 */
const countKthRoots = (l, r, k) => {
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

export { countKthRoots };
