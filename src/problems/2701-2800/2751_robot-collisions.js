/**
 * 2751. Robot Collisions
 *
 * Link: https://leetcode.com/problems/robot-collisions/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-03-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Stack (topic_15)
 * - Sorting (topic_61049)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 117,930
 * - Total Submissions: 210,283
 * - Acceptance Rate: 56.1%
 *
 * Similar Problems:
 * - asteroid-collision (Medium)
 */

/**
 * Approach: Sorting + Hash Map + Stack [Optimal]
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 *
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
const survivedRobotsHealths = (positions, healths, directions) => {
        const n = positions.length;
        const map = new Map();

        for (let i = 0; i < n; i++) {
                map.set(positions[i], i);
        }

        positions.sort((a, b) => a - b);
        const stack = [];

        for (let i = 0; i < n; i++) {
                const idx = map.get(positions[i]);
                let push = true;

                while (stack.length) {
                        const top = stack.at(-1);

                        if (
                                !(
                                        directions[top] === 'R' &&
                                        directions[idx] === 'L'
                                )
                        ) {
                                break;
                        }

                        const ht = healths[top];
                        const hp = healths[idx];

                        if (ht >= hp) {
                                if (ht === hp) {
                                        stack.pop();
                                        healths[top] = 0;
                                } else {
                                        healths[top]--;
                                }

                                healths[idx] = 0;
                                push = false;
                                break;
                        }

                        stack.pop();
                        healths[top] = 0;
                        healths[idx]--;
                }

                if (push) {
                        stack.push(idx);
                }
        }

        const res = new Array(stack.length);
        let j = 0;

        for (let i = 0; i < n; i++) {
                const hp = healths[i];

                if (hp) {
                        res[j++] = hp;
                }
        }

        return res;
};

/**
 * Approach: Sorting + Stack
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 *
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
const survivedRobotsHealths1 = (positions, healths, directions) => {
        const n = positions.length;
        const line = [];

        for (let i = 0; i < n; i++) {
                line.push([healths[i], directions[i], positions[i]]);
        }

        line.sort((a, b) => a[2] - b[2]);
        const stack = [];

        for (let i = 0; i < n; i++) {
                const robot = line[i];
                let willAdd = true;

                while (stack.length) {
                        const top = stack.at(-1);

                        if (!(top[1] === 'R' && robot[1] === 'L')) {
                                break;
                        }

                        const [topHp] = top;
                        const [robotHp] = robot;

                        if (topHp >= robotHp) {
                                if (topHp === robotHp) {
                                        stack.pop();
                                } else {
                                        top[0]--;
                                }

                                willAdd = false;
                                break;
                        }

                        stack.pop();
                        robot[0]--;
                }

                if (willAdd) {
                        stack.push(robot);
                }
        }

        const obj = {};

        for (const robot of stack) {
                obj[robot[2]] = robot[0];
        }

        const res = [];
        let j = 0;

        for (let i = 0; i < n; i++) {
                const hp = obj[positions[i]];

                if (hp) {
                        res[j++] = hp;
                }
        }

        return res;
};

export { survivedRobotsHealths, survivedRobotsHealths1 };
