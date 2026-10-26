/**
 * 1953. Maximum Number of Weeks for Which You Can Work
 *
 * Link: https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Senior (position_senior)
 * - Weekly Contest 252 (contest_weekly-contest-252)
 *
 * Stats:
 *
 * - Total Accepted: 32,788
 * - Total Submissions: 76,405
 * - Acceptance Rate: 42.9%
 *
 * Similar Problems:
 *
 * - task-scheduler (Medium)
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `milestones.length`
 *
 * We can complete all milestones for every project, iff the number of milestones in the project
 * with the largest number of milestones is less than or equal to the sum of the number of
 * milestones of all other projects. If this is not the case, then we can complete twice the
 * combined milestone sum of all but the largest project (one from the largest and one from any
 * other project at each step), and finally one more from the largest project.
 *
 * @param {number[]} milestones
 * @returns {number}
 */
const numberOfWeeks = (milestones) => {
        const n = milestones.length;
        let tot = milestones[0];
        let mx = milestones[0];

        for (let i = 1; i < n; i++) {
                const num = milestones[i];
                tot += num;
                mx = Math.max(mx, num);
        }

        const rem = tot - mx;

        return mx > rem ? 2 * rem + 1 : tot;
};

export { numberOfWeeks };
