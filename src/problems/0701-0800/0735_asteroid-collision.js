/**
 * 0735. Asteroid Collision
 *
 * Link: https://leetcode.com/problems/asteroid-collision/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-02-18 (Updated: 2026-03-14)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Stack (topic_15)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 988,510
 * - Total Submissions: 2,088,870
 * - Acceptance Rate: 47.3%
 *
 * Similar Problems:
 * - can-place-flowers (Easy)
 * - count-collisions-on-a-road (Medium)
 * - destroying-asteroids (Medium)
 * - robot-collisions (Hard)
 */

/**
 * Approach: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
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
