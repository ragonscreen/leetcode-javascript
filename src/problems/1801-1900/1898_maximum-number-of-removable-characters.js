/**
 * 1898. Maximum Number of Removable Characters
 *
 * Link: https://leetcode.com/problems/maximum-number-of-removable-characters/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-07
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - String (topic_10)
 * - Binary Search (topic_11)
 *
 * Stats:
 * - Total Accepted: 43,303
 * - Total Submissions: 91,929
 * - Acceptance Rate: 47.1%
 *
 * Similar Problems:
 * - maximum-candies-allocated-to-k-children (Medium)
 */

/**
 * Approach: Binary Search + Two Pointers
 * Time Complexity: O((n + m + k) * lg k)
 * Space Complexity: O(1)
 * `n` = length of `s`, `m` = length of `p`, `k` = length of `removable`
 *
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
const maximumRemovals = (s, p, removable) => {
        const n = s.length;
        const m = p.length;

        const check = (k) => {
                const a = [...s];

                for (let i = 0; i < k; i++) {
                        a[removable[i]] = '';
                }

                let si = 0;
                let pi = 0;

                while (pi < m && si < n) {
                        if (a[si] === p[pi]) {
                                pi++;
                        }

                        si++;
                }

                return pi === m;
        };

        let ok = 0;
        let ng = removable.length + 1;

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

export { maximumRemovals };
