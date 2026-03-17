/**
 * 0844. Backspace String Compare
 *
 * Link: https://leetcode.com/problems/backspace-string-compare/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-02-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Two Pointers (topic_9)
 * - String (topic_10)
 * - Stack (topic_15)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 1,034,543
 * - Total Submissions: 2,077,477
 * - Acceptance Rate: 49.8%
 *
 * Similar Problems:
 * - crawler-log-folder (Easy)
 * - removing-stars-from-a-string (Medium)
 */

/**
 * Approach: Simulation + Two Pointers
 * Time Complexity: O(max(n, m))
 * Space Complexity: O(1)
 * `n` = length of `s`, `m` = length of `t`
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = (s, t) => {
        let p = s.length - 1;
        let q = t.length - 1;
        let bs = 0;
        let bt = 0;

        while (p >= 0 || q >= 0) {
                const cs = s[p];
                const ct = t[q];

                if (cs === '#') {
                        p--;
                        bs++;
                        continue;
                }

                if (ct === '#') {
                        q--;
                        bt++;
                        continue;
                }

                if (bs) {
                        p--;
                        bs--;
                        continue;
                }

                if (bt) {
                        q--;
                        bt--;
                        continue;
                }

                if (cs !== ct) {
                        return false;
                }

                p--;
                q--;
        }

        return true;
};

export { backspaceCompare };
