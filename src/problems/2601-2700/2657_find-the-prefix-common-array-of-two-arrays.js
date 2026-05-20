/**
 * 2657. Find the Prefix Common Array of Two Arrays
 *
 * Link: https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-20
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Bit Manipulation (topic_19)
 * - Senior (position_senior)
 * - Biweekly Contest 103 (contest_biweekly-contest-103)
 *
 * Stats:
 * - Total Accepted: 275,079
 * - Total Submissions: 314,078
 * - Acceptance Rate: 87.6%
 *
 * Custom Details:
 * - Level 3 (custom-level_3)
 * - Simulation (custom-topic_simulation)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `A.length`
 *
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const findThePrefixCommonArray = (A, B) => {
        const n = A.length;
        const set = new Uint8Array(n + 1);
        const res = new Uint8Array(n);

        for (let i = 0, cnt = 0; i < n; i++) {
                const a = A[i];
                const b = B[i];
                cnt += set[a];
                set[a] = 1;
                cnt += set[b];
                set[b] = 1;
                res[i] = cnt;
        }

        return res;
};

export { findThePrefixCommonArray };
