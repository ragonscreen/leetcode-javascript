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
                let push = true;

                while (stack.length) {
                        const top = stack.at(-1);
                        const topV = Math.abs(top);

                        if (top < 0 || a > 0) {
                                break;
                        }

                        if (topV === v) {
                                stack.pop();
                        }

                        if (topV >= v) {
                                push = false;
                                break;
                        }

                        stack.pop();
                }

                if (push) {
                        stack.push(a);
                }
        }

        return stack;
};

export { asteroidCollision };
