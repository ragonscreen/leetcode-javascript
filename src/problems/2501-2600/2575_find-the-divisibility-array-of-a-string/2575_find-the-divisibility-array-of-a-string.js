/**
 * 2575. Find the Divisibility Array of a String
 *
 * Link: https://leetcode.com/problems/find-the-divisibility-array-of-a-string/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-10
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Math (topic_8)
 * - String (topic_10)
 * - Senior (position_senior)
 * - Weekly Contest 334 (contest_weekly-contest-334)
 *
 * Stats:
 *
 * - Total Accepted: 42,235
 * - Total Submissions: 114,369
 * - Acceptance Rate: 36.9%
 *
 * Similar Problems:
 *
 * - make-sum-divisible-by-p (Medium)
 * - subarray-sums-divisible-by-k (Medium)
 */

/**
 * Approach: Math
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 * `n` = `word.length`
 *
 * With each digit `d`, the number `k` becomes `10k + d`. To find the remainder of `10k + d` divided
 * by `m`, we can simply take the previous remainder, i.e. `k mod m`, multiply it by `10 mod m` and
 * add `d mod m`. Thus, `k mod m * 10 mod m + d mod m = (k * 10 + d) mod m`. `k mod m` is the same
 * as `(k mod m) mod m`. Thus, at each step we can use the previous remainder instead of `k`.
 * Therefore, `rem_i = (rem_(i - 1) * 10 + d) mod m`.
 *
 * @param {string} word
 * @param {number} m
 * @returns {number[]}
 */
const divisibilityArray = (word, m) => {
        const n = word.length;
        const res = new Uint8Array(n);

        if (m === 1) return res.fill(1);
        if (m === 2) return res.map((_, i) => (word[i] & 1) === 0);
        if (m === 5) return res.map((_, i) => word[i] === '0' || word[i] === '5');
        if (m === 10) return res.map((_, i) => word[i] === '0');

        if (m === 3) {
                for (let i = 0, sum = 0; i < n; i++) {
                        sum += Number(word[i]);
                        res[i] = sum % 3 === 0;
                }

                return res;
        }

        for (let i = 0, rem = 0; i < n; i++) {
                const d = Number(word[i]);
                rem = (10 * rem + d) % m;
                res[i] = !rem;
        }

        return res;
};

export { divisibilityArray };
