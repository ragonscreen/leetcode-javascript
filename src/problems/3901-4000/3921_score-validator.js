/**
 * 3921. Score Validator
 *
 * Link: https://leetcode.com/problems/score-validator/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-05-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Stats:
 * - Total Accepted: 29,004
 * - Total Submissions: 39,724
 * - Acceptance Rate: 73.0%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string[]} events
 * @return {number[]}
 */
const scoreValidator = (events) => {
        let scr = 0;
        let cnt = 0;

        for (const e of events) {
                if (e === 'W') {
                        cnt++;
                } else if (e === 'WD' || e === 'NB') {
                        scr++;
                } else {
                        scr += Number(e);
                }

                if (cnt === 10) {
                        break;
                }
        }

        return [scr, cnt];
};

export { scoreValidator };
