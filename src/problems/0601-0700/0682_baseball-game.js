/**
 * 0682. Baseball Game
 *
 * Link: https://leetcode.com/problems/baseball-game/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-02-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Stack (topic_15)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 577,227
 * - Total Submissions: 720,110
 * - Acceptance Rate: 80.2%
 *
 * Similar Problems:
 * - crawler-log-folder (Easy)
 */

/**
 * Approach: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string[]} operations
 * @return {number}
 */
const calPoints = (operations) => {
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

        for (const n of stack) {
                res += n;
        }

        return res;
};

export { calPoints };
