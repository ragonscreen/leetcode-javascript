/**
 * 2645. Minimum Additions to Make Valid String
 *
 * Link: https://leetcode.com/problems/minimum-additions-to-make-valid-string/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - String (topic_10)
 * - Dynamic Programming (topic_13)
 * - Stack (topic_15)
 * - Greedy (topic_17)
 * - Staff (position_staff)
 * - Weekly Contest 341 (contest_weekly-contest-341)
 *
 * Stats:
 *
 * - Total Accepted: 40,013
 * - Total Submissions: 77,830
 * - Acceptance Rate: 51.4%
 *
 * Similar Problems:
 *
 * - merge-strings-alternately (Easy)
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `word.length`
 *
 * @param {string} word
 * @returns {number}
 */
const addMinimum = (word) => {
        const x = 'abc';
        let res = 0;

        for (let p = 0, q = 0; p < word.length; p++) {
                const c = word[p];
                const d = x[q];

                if (c === d) {
                        q = (q + 1) % 3;
                        continue;
                }

                if (d === 'a') {
                        if (c === 'b') {
                                res++;
                                q = 2;
                        } else {
                                res += 2;
                                q = 0;
                        }
                } else if (d === 'b') {
                        if (c === 'a') {
                                res += 2;
                                q = 1;
                        } else {
                                res++;
                                q = 0;
                        }
                } else {
                        if (c === 'a') {
                                res++;
                                q = 1;
                        } else {
                                res += 2;
                                q = 2;
                        }
                }
        }

        res += 2 - x.indexOf(word.at(-1));

        return res;
};

/**
 * Approach: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `word.length`
 *
 * @param {string} word
 * @returns {number}
 */
const addMinimum1 = (word) => {
        const x = 'abc';
        let res = 0;

        for (let p = 0, q = 0; p < word.length; p++, q = (q + 1) % 3) {
                if (word[p] !== x[q]) {
                        res++;
                        p--;
                }
        }

        const r = word.at(-1);

        if (r === 'a') {
                res += 2;
        } else if (r === 'b') {
                res++;
        }

        return res;
};

export { addMinimum, addMinimum1 };
