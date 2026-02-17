/**
 * 0844. Backspace String Compare
 * Link: https://leetcode.com/problems/backspace-string-compare/
 * Difficulty: Easy
 * Date: 2026-02-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation:
 * Time Complexity: O(Max(n, m))
 * Space Complexity: O(1)
 * `n` = length of `s`; `m` = length of `t`
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
