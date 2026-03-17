/**
 * 0125. Valid Palindrome
 *
 * Link: https://leetcode.com/problems/valid-palindrome/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-01-15
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Two Pointers (topic_9)
 * - String (topic_10)
 *
 * Stats:
 * - Total Accepted: 5,246,222
 * - Total Submissions: 9,918,627
 * - Acceptance Rate: 52.9%
 *
 * Similar Problems:
 * - find-first-palindromic-string-in-the-array (Easy)
 * - palindrome-linked-list (Easy)
 * - valid-palindrome-ii (Easy)
 * - maximum-palindromes-after-operations (Medium)
 * - maximum-product-of-the-length-of-two-palindromic-subsequences (Medium)
 * - valid-palindrome-iv (Medium)
 */

/**
 * Approach: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
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
