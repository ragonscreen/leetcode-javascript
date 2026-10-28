/**
 * 1700. Number of Students Unable to Eat Lunch
 *
 * Link: https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-10-28
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Stack (topic_15)
 * - Queue (topic_34)
 * - Simulation (topic_61055)
 * - Mid Level (position_mid-level)
 * - Biweekly Contest 42 (contest_biweekly-contest-42)
 *
 * Stats:
 *
 * - Total Accepted: 415,358
 * - Total Submissions: 518,112
 * - Acceptance Rate: 80.2%
 *
 * Similar Problems:
 *
 * - time-needed-to-buy-tickets (Easy)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `students.length`
 *
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @returns {number}
 */
const countStudents = (students, sandwiches) => {
        const cnt = new Uint8Array(2);

        for (const v of students) cnt[v]++;

        let res = students.length;

        for (const v of sandwiches) {
                if (cnt[v] === 0) break;

                cnt[v]--;
                res--;
        }

        return res;
};

/**
 * Approach: Simulation
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 * `n` = `students.length`
 *
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @returns {number}
 */
const countStudents1 = (students, sandwiches) => {
        while (students.length > 0) {
                const n = students.length;

                for (let i = 0; i < n; i++) {
                        const student = students.shift();

                        if (student === sandwiches[0]) sandwiches.shift();
                        else students.push(student);
                }

                if (students.length === n) break;
        }

        return students.length;
};

export { countStudents, countStudents1 };
