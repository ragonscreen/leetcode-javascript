/**
 * 2337. Move Pieces to Obtain a String
 *
 * Link: https://leetcode.com/problems/move-pieces-to-obtain-a-string/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-01
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Two Pointers (topic_9)
 * - String (topic_10)
 * - Staff (position_staff)
 * - Weekly Contest 301 (contest_weekly-contest-301)
 *
 * Stats:
 * - Total Accepted: 150,934
 * - Total Submissions: 266,498
 * - Acceptance Rate: 56.6%
 *
 * Similar Problems:
 * - valid-parentheses (Easy)
 * - swap-adjacent-in-lr-string (Medium)
 */

/**
 * Approach: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `start.length`
 *
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
const canChange = (start, target) => {
        const n = start.length;

        for (let si = 0, ti = 0; si < n || ti < n; si++, ti++) {
                while (si < n && start[si] === '_') {
                        si++;
                }

                while (ti < n && target[ti] === '_') {
                        ti++;
                }

                const ends = si === n;
                const endt = ti === n;

                if (ends || endt) {
                        return ends === endt;
                }

                const cs = start[si];
                const ct = target[ti];

                if (
                        cs !== ct ||
                        (cs === 'L' && si < ti) ||
                        (cs === 'R' && si > ti)
                ) {
                        return false;
                }
        }

        return true;
};

/**
 * Approach: Queue
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `start.length`
 *
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
const canChange1 = (start, target) => {
        const n = start.length;
        const sq = [];
        const tq = [];

        for (let i = 0; i < n; i++) {
                if (start[i] !== '_') {
                        sq.push(i);
                }

                if (target[i] !== '_') {
                        tq.push(i);
                }
        }

        if (sq.length !== tq.length) {
                return false;
        }

        for (let qi = 0; qi < sq.length; qi++) {
                const si = sq[qi];
                const ti = tq[qi];
                const cs = start[si];
                const ct = target[ti];

                if (
                        cs !== ct ||
                        (cs === 'L' && si < ti) ||
                        (cs === 'R' && si > ti)
                ) {
                        return false;
                }
        }

        return true;
};

export { canChange, canChange1 };
