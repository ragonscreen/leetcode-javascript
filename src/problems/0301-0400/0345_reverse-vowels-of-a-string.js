/**
 * 0345. Reverse Vowels of a String
 *
 * Link: https://leetcode.com/problems/reverse-vowels-of-a-string/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-02-06
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Two Pointers (topic_9)
 * - String (topic_10)
 *
 * Stats:
 * - Total Accepted: 1,554,019
 * - Total Submissions: 2,555,561
 * - Acceptance Rate: 60.8%
 *
 * Similar Problems:
 * - faulty-keyboard (Easy)
 * - remove-vowels-from-a-string (Easy)
 * - reverse-string (Easy)
 * - sort-vowels-in-a-string (Medium)
 */

/**
 * Approach: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
        const set = new Set('aeiouAEIOU');
        const a = [...s];
        let l = 0;
        let r = a.length - 1;

        while (l < r) {
                while (l < r && !set.has(a[l])) {
                        l++;
                }

                while (l < r && !set.has(a[r])) {
                        r--;
                }

                [a[l], a[r]] = [a[r], a[l]];
                l++;
                r--;
        }

        return a.join('');
};

export { reverseVowels };
