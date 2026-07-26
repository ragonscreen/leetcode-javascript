/**
 * 1358. Number of Substrings Containing All Three Characters
 *
 * Link: https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-09
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 447,899
 * - Total Submissions: 608,372
 * - Acceptance Rate: 73.6%
 *
 * Similar Problems:
 * - vowels-of-all-substrings (Medium)
 * - count-complete-substrings (Hard)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {number}
 */
const numberOfSubstrings = (s) => {
        let res = 0;
        let ai = -1;
        let bi = -1;
        let ci = -1;

        for (let i = 0; i < s.length; i++) {
                const c = s[i];

                if (c === 'a') {
                        ai = i;
                } else if (c === 'b') {
                        bi = i;
                } else {
                        ci = i;
                }

                if (ai > -1 && bi > -1 && ci > -1) {
                        res += Math.min(ai, bi, ci) + 1;
                }
        }

        return res;
};

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {number}
 */
const numberOfSubstrings1 = (s) => {
        const map = { a: 0, b: 0, c: 0 };
        let res = 0;

        for (let l = 0, r = 0; r < s.length; r++) {
                map[s[r]]++;

                if (map.a && map.b && map.c) {
                        while (map[s[l]] > 1) {
                                map[s[l]]--;
                                l++;
                        }

                        res += l + 1;
                }
        }

        return res;
};

export { numberOfSubstrings, numberOfSubstrings1 };
