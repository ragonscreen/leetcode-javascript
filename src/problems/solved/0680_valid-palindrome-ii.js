/**
 * 0680. Valid Palindrome II
 * Link: https://leetcode.com/problems/valid-palindrome-ii/
 * Difficulty: Easy
 * Date: 2026-03-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Two Pointers + Recursion
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = (s) => {
        const rec = (v, removed = true) => {
                let l = 0;
                let r = v.length - 1;

                while (l < r) {
                        if (v[l] === v[r]) {
                                l++;
                                r--;
                                continue;
                        }

                        if (removed) {
                                return false;
                        }

                        return rec(v.slice(l, r)) || rec(v.slice(l + 1, r + 1));
                }

                return true;
        };

        return rec(s, false);
};

export { validPalindrome };
