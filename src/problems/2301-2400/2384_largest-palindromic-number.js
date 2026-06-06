/**
 * 2384. Largest Palindromic Number
 *
 * Link: https://leetcode.com/problems/largest-palindromic-number/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-06
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Greedy (topic_17)
 * - Counting (topic_61062)
 * - Senior (position_senior)
 * - Weekly Contest 307 (contest_weekly-contest-307)
 *
 * Stats:
 * - Total Accepted: 54,537
 * - Total Submissions: 146,725
 * - Acceptance Rate: 37.2%
 *
 * Similar Problems:
 * - longest-palindrome (Easy)
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `num.length`
 *
 * @param {string} num
 * @return {string}
 */
const largestPalindromic = (num) => {
        const n = num.length;
        const map = new Uint32Array(10);

        for (let i = 0; i < n; i++) {
                const d = Number(num[i]);
                map[d]++;
        }

        let res = '';
        let mxm = -1;

        for (let i = 9; i > -1; i--) {
                let cnt = map[i];

                if (cnt === 0) {
                        continue;
                }

                if (cnt % 2 === 1) {
                        cnt--;
                        mxm = Math.max(mxm, i);
                }

                cnt >>= 1;
                res += String(i).repeat(cnt);
        }

        if (res[0] === '0') {
                return String(Math.max(mxm, 0));
        }

        const back = res.split('').reverse().join('');

        if (mxm > -1) {
                res += mxm;
        }

        res += back;

        return res;
};

export { largestPalindromic };
