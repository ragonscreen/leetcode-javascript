/**
 * 2042. Check if Numbers Are Ascending in a Sentence
 *
 * Link: https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-12
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 *
 * Stats:
 * - Total Accepted: 86,065
 * - Total Submissions: 117,849
 * - Acceptance Rate: 73.0%
 *
 * Similar Problems:
 * - check-if-all-as-appears-before-all-bs (Easy)
 * - sorting-the-sentence (Easy)
 * - string-to-integer-atoi (Medium)
 */

/**
 * Approach: Simulation [Optimal Time]
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {boolean}
 */
const areNumbersAscending = (s) => {
        const arr = s.split(' ');
        let prev = 0;

        for (const c of arr) {
                const v = Number(c);

                if (!Number.isInteger(v)) {
                        continue;
                }

                if (v <= prev) {
                        return false;
                }

                prev = v;
        }

        return true;
};

/**
 * Approach: Two Pointers [Optimal Space]
 * Time Complexity: O(n)
 * Space Complexity: O(m)
 * `n` = length of `s`, `m` = length of longest number in `s`
 *
 * @param {string} s
 * @return {boolean}
 */
const areNumbersAscending1 = (s) => {
        const n = s.length;
        let prev = 0;

        for (let l = 0, r = 0; r < n; r++) {
                const c = s[r];

                if (!(c >= '0' && c <= '9')) {
                        continue;
                }

                l = r;

                while (r < n && s[r] !== ' ') {
                        r++;
                }

                const num = Number(s.slice(l, r));

                if (num <= prev) {
                        return false;
                }

                prev = num;
        }

        return true;
};

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {boolean}
 */
// biome-ignore format: one-liner
const areNumbersAscending2 = (s) => Boolean(s.split(' ').filter(Number).reduce((t, c) => t === false || Number(c) <= t ? false : Number(c), 0));

export { areNumbersAscending, areNumbersAscending1, areNumbersAscending2 };
