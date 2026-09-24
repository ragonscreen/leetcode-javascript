/**
 * 1759. Count Number of Homogenous Substrings
 *
 * Link: https://leetcode.com/problems/count-number-of-homogenous-substrings/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Math (topic_8)
 * - String (topic_10)
 * - Senior (position_senior)
 * - Weekly Contest 228 (contest_weekly-contest-228)
 *
 * Stats:
 *
 * - Total Accepted: 136,292
 * - Total Submissions: 237,829
 * - Acceptance Rate: 57.3%
 *
 * Similar Problems:
 *
 * - consecutive-characters (Easy)
 * - count-the-number-of-good-subarrays (Medium)
 * - number-of-substrings-with-only-1s (Medium)
 * - sum-of-subarray-ranges (Medium)
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @returns {number}
 */
const countHomogenous = (s) => {
        const MOD = 1e9 + 7;
        let res = 0;

        for (let i = 1, cnt = 1; i <= s.length; i++) {
                cnt = s[i] === s[i - 1] ? cnt + 1 : 1;
                res = (res + cnt) % MOD;
        }

        return res;
};

/**
 * Approach: Greedy + Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @returns {number}
 */
const countHomogenous1 = (s) => {
        const MOD = 1e9 + 7;
        let res = 0;

        for (let l = 0, r = 0; r <= s.length; r++) {
                if (s[l] === s[r]) continue;

                const len = r - l;
                res = (res + (len * (len + 1)) / 2) % MOD;
                l = r;
        }

        return res;
};

export { countHomogenous, countHomogenous1 };
