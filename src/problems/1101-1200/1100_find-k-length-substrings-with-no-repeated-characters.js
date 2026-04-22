/**
 * 1100. Find K-Length Substrings With No Repeated Characters
 *
 * Link: https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-22
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 56,330
 * - Total Submissions: 73,645
 * - Acceptance Rate: 76.5%
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(m) [O(26) = O(1)]
 * `n` = length of `s`, `m` = number of unique characters in `s`
 *
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const numKLenSubstrNoRepeats = (s, k) => {
        const map = new Map();
        let res = 0;

        for (let l = 0, r = 0; r < s.length; r++) {
                const cr = s[r];
                map.set(cr, (map.get(cr) || 0) + 1);

                if (r - l + 1 < k) {
                        continue;
                }

                if (map.size === k) {
                        res = Math.max(res, r - l + 1);
                }

                const cl = s[l];
                const vl = map.get(cl);

                if (vl === 1) {
                        map.delete(cl);
                } else {
                        map.set(cl, vl - 1);
                }
        }

        return res;
};

export { numKLenSubstrNoRepeats };
