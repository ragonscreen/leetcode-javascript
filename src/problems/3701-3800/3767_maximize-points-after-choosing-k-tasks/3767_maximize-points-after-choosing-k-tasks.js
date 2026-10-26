/**
 * 3767. Maximize Points After Choosing K Tasks
 *
 * Link: https://leetcode.com/problems/maximize-points-after-choosing-k-tasks/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-16
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 * - Heap (Priority Queue) (topic_61050)
 * - Staff (position_staff)
 * - Biweekly Contest 171 (contest_biweekly-contest-171)
 *
 * Stats:
 *
 * - Total Accepted: 18,248
 * - Total Submissions: 30,739
 * - Acceptance Rate: 59.4%
 */

/**
 * Approach: Sorting + Greedy
 * Time Complexity: O(n lg n)
 * Space Complexity: O(n)
 * `n` = `technique1.length`
 *
 * @param {number[]} technique1
 * @param {number[]} technique2
 * @param {number} k
 * @returns {number}
 */
const maxPoints = (technique1, technique2, k) => {
        const n = technique1.length;
        const vals = Uint32Array.from({ length: n }, (_, i) => i).sort(
                (a, b) => technique1[b] - technique2[b] - (technique1[a] - technique2[a]),
        );

        let res = 0;

        for (let i = 0; i < k; i++) res += technique1[vals[i]];

        for (let i = k; i < n; i++) res += Math.max(technique1[vals[i]], technique2[vals[i]]);

        return res;
};

export { maxPoints };
