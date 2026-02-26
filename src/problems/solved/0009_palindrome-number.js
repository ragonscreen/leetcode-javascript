/**
 * 0009. Palindrome Number
 * Link: https://leetcode.com/problems/palindrome-number/
 * Difficulty: Easy
 * Date: 2026-02-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Math (Optimal)
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
        let rev = 0;
        let num = x;

        while (num > 0) {
                rev = rev * 10 + (num % 10);
                num = Math.floor(num / 10);
        }

        return x === rev;
};

/**
 * Implementation: Math
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome1 = (x) => {
        if (x < 0) {
                return false;
        }

        if (x === 0) {
                return true;
        }

        const digits = Math.floor(Math.log10(x)) + 1;
        let num = x;
        let rev = 0;

        for (let i = 0; i < digits; i++) {
                rev += (num % 10) * 10 ** (digits - i - 1);
                num = Math.floor(num / 10);
        }

        return x === rev;
};

/**
 * Implementation: Two Pointers
 * Time Complexity: O(log n)
 * Space Complexity: O(log n)
 *
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome2 = (x) => {
        if (x < 0) {
                return false;
        }

        const num = String(x);
        let l = 0;
        let r = num.length - 1;

        while (l < r) {
                if (num[l] !== num[r]) {
                        return false;
                }

                l++;
                r--;
        }

        return true;
};

export { isPalindrome, isPalindrome1, isPalindrome2 };
