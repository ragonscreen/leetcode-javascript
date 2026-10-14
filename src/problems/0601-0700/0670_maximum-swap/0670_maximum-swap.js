/**
 * 670. Maximum Swap
 *
 * Link: https://leetcode.com/problems/maximum-swap/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-11
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Math (topic_8)
 * - Greedy (topic_17)
 * - Principal (position_principal)
 *
 * Stats:
 *
 * - Total Accepted: 525,222
 * - Total Submissions: 1,007,595
 * - Acceptance Rate: 52.1%
 *
 * Similar Problems:
 *
 * - create-maximum-number (Hard)
 */

/**
 * Approach: Greedy + Prefix Sum
 * Time Complexity: O(log N)
 * Space Complexity: O(log N)
 * `N` = `num`
 *
 * @param {number} num
 * @returns {number}
 */
const maximumSwap = (num) => {
        const s = [...String(num)];
        const n = s.length;
        const p = new Uint8Array(n);
        let mx = s[n - 1];

        for (let i = n - 1; i > -1; i--) {
                mx = Math.max(s[i], mx);
                p[i] = mx;
        }

        let i = 0;

        while (s[i] >= p[i]) i++;

        if (i === n) return num;

        const val = String(p[i]);
        let j = n - 1;

        while (s[j] !== val) j--;

        [s[i], s[j]] = [s[j], s[i]];

        return Number(s.join(''));
};

export { maximumSwap };
