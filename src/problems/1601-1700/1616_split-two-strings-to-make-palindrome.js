/**
 * 1616. Split Two Strings to Make Palindrome
 *
 * Link: https://leetcode.com/problems/split-two-strings-to-make-palindrome/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Two Pointers (topic_9)
 * - String (topic_10)
 * - Staff (position_staff)
 * - Weekly Contest 210 (contest_weekly-contest-210)
 *
 * Stats:
 *
 * - Total Accepted: 34,758
 * - Total Submissions: 105,956
 * - Acceptance Rate: 32.8%
 */

/**
 * Approach: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * If the substrings `a[0..i]` and `b[n - 1 - i..n - 1]` (all inclusive) can form the ends of a
 * palindrome, then the middle section must also be a palindrome itself, and must come from either
 * `a` or `b`. This is because the ends each have the same length.
 *
 * @param {string} a
 * @param {string} b
 * @returns {boolean}
 */
const checkPalindromeFormation = (a, b) => {
        const n = a.length;

        const isPal = (s, l, r) => {
                while (l < r) if (s[l++] !== s[r--]) return false;

                return true;
        };

        const check = (s1, s2) => {
                let l = 0;
                let r = n - 1;

                for (; l < r; l++, r--) if (s1[l] !== s2[r]) break;

                return isPal(s1, l, r) || isPal(s2, l, r);
        };

        return check(a, b) || check(b, a);
};

/**
 * Approach: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} a
 * @param {string} b
 * @returns {boolean}
 */
const checkPalindromeFormation1 = (a, b) => {
        const n = a.length;
        const m = n >> 1;

        const check = (s1, s2, i) => {
                for (let l = 0, r = n - 1, cnt = 0; cnt < m; cnt++, l++, r--) {
                        if (r === i - 1) s2 = s1;
                        if (l === i) s1 = s2;

                        if (s1[l] !== s2[r]) return false;
                }

                return true;
        };

        let p = 0;

        for (let q = n - 1; p < m; p++, q--) {
                if (a[p] !== b[q]) {
                        if (check(a, b, p)) return true;
                        if (check(a, b, q + 1)) return true;

                        break;
                }
        }

        if (p === m) return true;

        p = 0;

        for (let q = n - 1; p < m; p++, q--) {
                if (b[p] !== a[q]) {
                        if (check(b, a, p)) return true;
                        if (check(b, a, q + 1)) return true;

                        break;
                }
        }

        return p === m;
};

export { checkPalindromeFormation, checkPalindromeFormation1 };
