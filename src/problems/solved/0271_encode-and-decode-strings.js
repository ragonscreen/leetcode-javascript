/**
 * 0271. Encode and Decode Strings
 * Link: https://leetcode.com/problems/encode-and-decode-strings/
 * Difficulty: Medium
 * Date: 2025-12-11
 * Author: ragonscreen
 */

/**
 * Implementation: Encoding & Decoding
 * Time Complexity: O(m)
 * Space Complexity: O(m)
 * m === sum of lengths of all strings in `strs`
 */
class Solution {
        /**
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

export default Solution;
