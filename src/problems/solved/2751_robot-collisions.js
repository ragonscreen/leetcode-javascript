/** biome-ignore-all lint/complexity/noExcessiveLinesPerFunction: lengthy solution */

/**
 * 2751. Robot Collisions
 * Link: https://leetcode.com/problems/robot-collisions/
 * Difficulty: Hard
 * Date: 2026-03-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Hash Map + Sorting + Stack (Optimal)
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
                const robot = positions[i];
                const idx = map.get(robot);
                let willAdd = true;

                while (stack.length) {
                        const topIdx = map.get(stack.at(-1));

                        if (
                                !(
                                        directions[topIdx] === 'R' &&
                                        directions[idx] === 'L'
                                )
                        ) {
                                break;
                        }

                        const topHp = healths[topIdx];
                        const robotHp = healths[idx];

                        if (topHp >= robotHp) {
                                if (topHp === robotHp) {
                                        healths[topIdx] = 0;
                                        healths[idx] = 0;
                                        stack.pop();
                                } else {
                                        healths[topIdx]--;
                                        healths[idx] = 0;
                                }

                                willAdd = false;
                                break;
                        }

                        stack.pop();
                        healths[topIdx] = 0;
                        healths[idx]--;
                }

                if (willAdd) {
                        stack.push(robot);
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
 * Implementation: Sorting + Stack
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
