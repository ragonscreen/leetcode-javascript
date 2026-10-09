/**
 * 682. Baseball Game
 *
 * Link: https://leetcode.com/problems/baseball-game/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-02-17 (Updated: 2026-10-09)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Stack (topic_15)
 * - Simulation (topic_61055)
 *
 * Stats:
 *
 * - Total Accepted: 577,227
 * - Total Submissions: 720,110
 * - Acceptance Rate: 80.2%
 *
 * Similar Problems:
 *
 * - crawler-log-folder (Easy)
 */

/**
 * Approach: Stack [II]
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `operations.length`
 *
 * @param {string[]} operations
 * @returns {number}
 */
const calPoints = (operations) => {
        const n = operations.length;
        const st = new Int32Array(n);
        let sp = 0;

        for (const op of operations) {
                if (op === '+') {
                        st[sp] = st[sp - 1] + st[sp - 2];
                        sp++;
                } else if (op === 'D') {
                        st[sp] = st[sp - 1] * 2;
                        sp++;
                } else if (op === 'C') {
                        sp--;
                } else {
                        st[sp++] = Number(op);
                }
        }

        let res = 0;

        for (let i = 0; i < sp; i++) res += st[i];

        return res;
};

/**
 * Approach: Stack [I]
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `operations.length`
 *
 * @param {string[]} operations
 * @returns {number}
 */
const calPoints1 = (operations) => {
        const stack = [];

        for (const op of operations) {
                switch (op) {
                        case '+':
                                stack.push(stack.at(-1) + stack.at(-2));
                                break;
                        case 'D':
                                stack.push(stack.at(-1) * 2);
                                break;
                        case 'C':
                                stack.pop();
                                break;
                        default:
                                stack.push(Number(op));
                                break;
                }
        }

        let res = 0;

        for (const n of stack) res += n;

        return res;
};

export { calPoints, calPoints1 };
