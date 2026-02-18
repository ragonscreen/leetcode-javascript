/**
 * 0735. Asteroid Collision
 * Link: https://leetcode.com/problems/asteroid-collision/
 * Difficulty: Medium
 * Date: 2026-02-18
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = (asteroids) => {
        const stack = [];

        for (const a of asteroids) {
                const v = Math.abs(a);
                const s = Math.sign(a);
                const topS = Math.sign(stack.at(-1));

                if (!stack.length || s === topS || (s === 1 && topS === -1)) {
                        stack.push(a);
                        continue;
                }

                let willAdd = false;

                while (stack.length) {
                        const curTop = stack.at(-1);
                        const curTopS = Math.sign(curTop);
                        const curTopV = Math.abs(curTop);

                        if (s === -1 && curTopS === 1) {
                                if (v === curTopV) {
                                        stack.pop();
                                        willAdd = false;
                                        break;
                                }

                                if (v < curTopV) {
                                        willAdd = false;
                                        break;
                                }

                                if (v > curTopV) {
                                        willAdd = true;
                                        stack.pop();
                                }
                        } else {
                                stack.push(a);
                                willAdd = false;
                                break;
                        }
                }

                if (willAdd) {
                        stack.push(a);
                }
        }

        return stack;
};

export { asteroidCollision };
