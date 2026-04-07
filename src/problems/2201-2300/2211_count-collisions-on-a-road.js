/**
 * 2211. Count Collisions on a Road
 *
 * Link: https://leetcode.com/problems/count-collisions-on-a-road/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-07
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Stack (topic_15)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 127,266
 * - Total Submissions: 219,165
 * - Acceptance Rate: 58.1%
 *
 * Similar Problems:
 * - asteroid-collision (Medium)
 * - car-fleet (Medium)
 * - last-moment-before-all-ants-fall-out-of-a-plank (Medium)
 * - car-fleet-ii (Hard)
 */

/**
 * Approach: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} directions
 * @return {number}
 */
const countCollisions = (directions) => {
        let res = 0;
        const stack = [];

        for (const d of directions) {
                let pushS = false;
                let pushSelf = true;

                if (d === 'L') {
                        const top = stack.at(-1);

                        if (top === 'S' || top === 'R') {
                                pushSelf = false;
                                res += top === 'S' ? 1 : 2;
                                pushS = true;
                                stack.pop();
                        } else {
                                pushSelf = true;
                        }
                }

                if (d === 'S' || pushS) {
                        while (stack.at(-1) === 'R') {
                                res++;
                                stack.pop();
                        }

                        stack.push('S');
                }

                if (pushSelf) {
                        stack.push(d);
                }
        }

        return res;
};

export { countCollisions };
