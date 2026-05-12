/**
 * 1665. Minimum Initial Energy to Finish Tasks
 *
 * Link: https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-05-13
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 90,899
 * - Total Submissions: 119,370
 * - Acceptance Rate: 76.1%
 */

/**
 * Approach: Sorting + Greedy
 * Time Complexity: O(n log n)
 * Space Complexity: O(1) auxiliary, O(n) for sorting
 *
 * @param {number[][]} tasks
 * @return {number}
 */
const minimumEffort = (tasks) => {
        // we want to save the most amount of energy possible after each task
        // the biggest energy wasters are the tasks that leave the most
        // amount of energy on the table after they are done
        // we want to do the energy wasters first because the leftover energy
        // can be used towards the next task
        // if we leave the energy wasters for the end, we will end up with
        // the largest possible energy surplus
        // therefore to leave the minimum possible energy surplus, we do the
        // energy wasters first
        tasks.sort((a, b) => b[1] - b[0] - (a[1] - a[0]));
        let res = 0;
        let energy = 0;

        for (let i = 0; i < tasks.length; i++) {
                const [cost, req] = tasks[i];

                if (energy < req) {
                        res += req - energy;
                        energy = req;
                }

                energy -= cost;
        }

        return res;
};

export { minimumEffort };
