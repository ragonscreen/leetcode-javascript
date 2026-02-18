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

                if (!(stack.length && a < 0 && stack.at(-1) > 0)) {
                        stack.push(a);
                        continue;
                }

                let willAdd = false;

                while (stack.length) {
                        const top = stack.at(-1);
                        const topV = Math.abs(top);

                        if (!(a < 0 && top > 0)) {
                                willAdd = true;
                                break;
                        }

                        if (v === topV) {
                                stack.pop();
                        }

                        if (v <= topV) {
                                willAdd = false;
                                break;
                        }

                        willAdd = true;
                        stack.pop();
                }

                if (willAdd) {
                        stack.push(a);
                }
        }

        return stack;
};

export { asteroidCollision };
