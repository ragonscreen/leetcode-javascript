/**
 * 1415. The k-th Lexicographical String of All Happy Strings of Length n
 *
 * Link: https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-20
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Backtracking (topic_14)
 * - Staff (position_staff)
 * - Biweekly Contest 24 (contest_biweekly-contest-24)
 *
 * Stats:
 * - Total Accepted: 276,299
 * - Total Submissions: 317,174
 * - Acceptance Rate: 87.1%
 */

/**
 * Approach: Math + Enumeration
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 * `N` = `n`
 *
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getHappyString = (n, k) => {
        let rem = 2 ** (n - 1);

        if (k > 3 * rem) {
                return '';
        }

        const chars = ['a', 'b', 'c'];
        let lastGrp = 4;
        let res = '';

        while (rem >= 1) {
                let grp = Math.ceil(k / rem);
                k = k % rem || rem;

                if (grp >= lastGrp) {
                        grp++;
                }

                lastGrp = grp;
                res += chars[grp - 1];
                rem /= 2;
        }

        return res;
};

export { getHappyString };
