/**
 * 556. Next Greater Element III
 *
 * Link: https://leetcode.com/problems/next-greater-element-iii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Math (topic_8)
 * - Two Pointers (topic_9)
 * - String (topic_10)
 * - Principal (position_principal)
 *
 * Stats:
 *
 * - Total Accepted: 220,003
 * - Total Submissions: 617,241
 * - Acceptance Rate: 35.6%
 *
 * Similar Problems:
 *
 * - next-greater-element-i (Easy)
 * - next-greater-element-ii (Medium)
 * - next-palindrome-using-same-digits (Hard) (Premium)
 */

/**
 * Approach: Math
 * Time Complexity: O(log^2 N)
 * Space Complexity: O(log N)
 * `N` = `n`
 *
 * @param {number} n
 * @returns {number}
 */
const nextGreaterElement = (n) => {
        const MX = 2_147_483_647;
        const s = String(n);
        const l = s.length;
        let i = l - 2;

        while (i > -1 && s[i] >= s[i + 1]) i--;

        if (i === -1) return -1;

        const v = s[i];
        let j = -1;

        for (let k = i + 1, mn = 10; k < l; k++) {
                const d = s[k];

                if (d > v && d < mn) {
                        mn = d;
                        j = k;
                }
        }

        const rem = new Array(l - i - 1);

        for (let k = i, ri = 0; k < l; k++) if (k !== j) rem[ri++] = s[k];

        const num = Number(s.slice(0, i) + s[j] + rem.sort().join(''));

        return num > MX ? -1 : num;
};

export { nextGreaterElement };
