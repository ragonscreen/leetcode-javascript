/**
 * 1717. Maximum Score From Removing Substrings
 *
 * Link: https://leetcode.com/problems/maximum-score-from-removing-substrings/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-29
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Stack (topic_15)
 * - Greedy (topic_17)
 *
 * Stats:
 * - Total Accepted: 243,205
 * - Total Submissions: 365,662
 * - Acceptance Rate: 66.5%
 *
 * Similar Problems:
 * - count-words-obtained-after-adding-a-letter (Medium)
 */

/**
 * Approach: Stack + Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const maximumGain = (s, x, y) => {
        const s1 = [];
        let res = 0;

        for (const c of s) {
                const top = s1.at(-1);

                if (x >= y && top === 'a' && c === 'b') {
                        s1.pop();
                        res += x;
                        continue;
                }

                if (y >= x && top === 'b' && c === 'a') {
                        s1.pop();
                        res += y;
                        continue;
                }

                s1.push(c);
        }

        const s2 = [];

        for (const c of s1) {
                const top = s2.at(-1);

                if (top === 'a' && c === 'b') {
                        s2.pop();
                        res += x;
                        continue;
                }

                if (top === 'b' && c === 'a') {
                        s2.pop();
                        res += y;
                        continue;
                }

                s2.push(c);
        }

        return res;
};

export { maximumGain };
