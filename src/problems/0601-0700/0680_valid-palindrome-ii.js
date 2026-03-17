/**
 * 0680. Valid Palindrome II
 *
 * Link: https://leetcode.com/problems/valid-palindrome-ii/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-03-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Two Pointers (topic_9)
 * - String (topic_10)
 * - Greedy (topic_17)
 *
 * Stats:
 * - Total Accepted: 1,121,724
 * - Total Submissions: 2,546,638
 * - Acceptance Rate: 44.0%
 *
 * Similar Problems:
 * - valid-palindrome (Easy)
 * - valid-palindrome-iv (Medium)
 * - valid-palindrome-iii (Hard)
 */

/**
 * Approach: Recursion + Two Pointers
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
