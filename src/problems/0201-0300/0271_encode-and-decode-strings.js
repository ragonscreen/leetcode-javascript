/**
 * 0271. Encode and Decode Strings
 *
 * Link: https://leetcode.com/problems/encode-and-decode-strings/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2025-12-11
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - String (topic_10)
 * - Design (topic_25)
 *
 * Stats:
 * - Total Accepted: 300,299
 * - Total Submissions: 585,585
 * - Acceptance Rate: 51.3%
 *
 * Similar Problems:
 * - count-binary-substrings (Easy)
 * - count-and-say (Medium)
 * - string-compression (Medium)
 * - serialize-and-deserialize-binary-tree (Hard)
 */

/**
 * Approach: Sliding Window
 */
class Solution {
        /**
         * Time Complexity: O(n)
         * Space Complexity: O(1)
         *
         * @param {string[]} strs
         * @returns {string}
         */

        encode(strs) {
                let res = '';

                for (const str of strs) {
                        res += `${str.length}.${str}`;
                }

                return res;
        }

        /**
         * Time Complexity: O(n)
         * Space Complexity: O(1) auxiliary, O(n) total
         *
         * @param {string} str
         * @returns {string[]}
         */
        decode(str) {
                const res = [];

                for (let r = 0; r < str.length; ) {
                        let l = r;

                        while (str[r] !== '.') {
                                r++;
                        }

                        const len = Number(str.slice(l, r));
                        l = r + 1;
                        r += len + 1;
                        res.push(str.slice(l, r));
                }

                return res;
        }
}

export { Solution };
