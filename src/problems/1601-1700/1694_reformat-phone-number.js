/**
 * 1694. Reformat Phone Number
 *
 * Link: https://leetcode.com/problems/reformat-phone-number/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-05-09
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 *
 * Stats:
 * - Total Accepted: 49,988
 * - Total Submissions: 73,802
 * - Acceptance Rate: 67.7%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {string} number
 * @return {string}
 */
const reformatNumber = (number) => {
        const n = number.length;
        let cnt = 0;

        for (let i = 0; i < n; i++) {
                const v = number[i];
                cnt += v !== '-' && v !== ' ';
        }

        let res = '';
        let gsz = 0;
        let i = 0;

        while (cnt > 4) {
                while (i < n && gsz < 3) {
                        const v = number[i++];

                        if (v === '-' || v === ' ') {
                                continue;
                        }

                        res += v;
                        gsz++;
                }

                res += '-';
                cnt -= 3;
                gsz = 0;
        }

        while (i < n) {
                const v = number[i++];

                if (v === '-' || v === ' ') {
                        continue;
                }

                res += v;
                gsz++;

                if (gsz === 2 && cnt === 4) {
                        res += '-';
                }
        }

        return res;
};

export { reformatNumber };
