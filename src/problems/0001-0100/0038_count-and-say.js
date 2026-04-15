/**
 * 0038. Count and Say
 *
 * Link: https://leetcode.com/problems/count-and-say/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-16
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 *
 * Stats:
 * - Total Accepted: 1,405,179
 * - Total Submissions: 2,242,196
 * - Acceptance Rate: 62.7%
 *
 * Similar Problems:
 * - encode-and-decode-strings (Medium)
 * - string-compression (Medium)
 */

/**
 * Approach: Sliding Window + Iteration
 * Time Complexity: O(n * k)
 * Space Complexity: O(n * k)
 * `n` = `n`, `k` = length of rle string for each iteration
 *
 * @param {number} n
 * @return {string}
 */
const countAndSay = (n) => {
        const rle = (s) => {
                let res = '';

                for (let l = 0, r = 0; r <= s.length; r++) {
                        if (s[r] !== s[l]) {
                                res += `${r - l}${s[l]}`;
                                l = r;
                        }
                }

                return res;
        };

        let res = '1';
        let count = 1;

        while (count++ < n) {
                res = rle(res);
        }

        return res;
};

/**
 * Approach: Sliding Window + Recursion
 * Time Complexity: O(n * k)
 * Space Complexity: O(n * k)
 * `n` = `n`, `k` = length of rle string for each iteration
 *
 * @param {number} n
 * @return {string}
 */
const countAndSay1 = (n) => {
        const rle = (s) => {
                let res = '';

                for (let l = 0, r = 0; r <= s.length; r++) {
                        if (s[r] !== s[l]) {
                                res += `${r - l}${s[l]}`;
                                l = r;
                        }
                }

                return res;
        };

        const rec = (v) => (v === 1 ? '1' : rle(rec(v - 1)));

        return rec(n);
};

export { countAndSay, countAndSay1 };
