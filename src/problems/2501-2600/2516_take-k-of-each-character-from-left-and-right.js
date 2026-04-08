/**
 * 2516. Take K of Each Character From Left and Right
 *
 * Link: https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 114,771
 * - Total Submissions: 223,097
 * - Acceptance Rate: 51.4%
 *
 * Similar Problems:
 * - defuse-the-bomb (Easy)
 * - merge-sorted-array (Easy)
 * - reorder-list (Medium)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const takeCharacters = (s, k) => {
        const key = [0, 0, 0];
        const a = 'a'.charCodeAt();

        for (const c of s) {
                key[c.charCodeAt() - a]++;
        }

        for (let i = 0; i < key.length; i++) {
                if (key[i] < k) {
                        return -1;
                }

                key[i] -= k;
        }

        const curr = [0, 0, 0];
        let maxLen = 0;

        for (let l = 0, r = 0; r < s.length; r++) {
                const v = s.charCodeAt(r) - a;
                curr[v]++;

                while (curr[v] > key[v]) {
                        curr[s.charCodeAt(l) - a]--;
                        l++;
                }

                maxLen = Math.max(maxLen, r - l + 1);
        }

        return s.length - maxLen;
};

export { takeCharacters };
