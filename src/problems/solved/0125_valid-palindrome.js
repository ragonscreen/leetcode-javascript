/**
 * 0125. Valid Palindrome
 * Link: https://leetcode.com/problems/valid-palindrome/
 * Difficulty: Easy
 * Date: 2026-01-15
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
                while (l < r && !isAlpha(s[l])) {
                        l++;
                }

                while (l < r && !isAlpha(s[r])) {
                        r--;
                }

                if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                        return false;
                }

                l++;
                r--;
        }

        return true;
};

const isAlpha = (c) => {
        const v = c.charCodeAt();

        return (v > 47 && v < 58) || (v > 64 && v < 91) || (v > 96 && v < 123);
};

export { isPalindrome };
