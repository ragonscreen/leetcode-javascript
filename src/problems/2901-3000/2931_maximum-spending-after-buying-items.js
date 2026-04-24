/**
 * 2931. Maximum Spending After Buying Items
 *
 * Link: https://leetcode.com/problems/maximum-spending-after-buying-items/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-04-25
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 * - Heap (Priority Queue) (topic_61050)
 * - Matrix (topic_61053)
 *
 * Stats:
 * - Total Accepted: 15,884
 * - Total Submissions: 25,995
 * - Acceptance Rate: 61.1%
 *
 * Similar Problems:
 * - maximum-points-you-can-obtain-from-cards (Medium)
 * - maximum-score-from-performing-multiplication-operations (Hard)
 */

/**
 * Approach: Hash Set + Greedy
 * Time Complexity: O(n * m * m)
 * Space Complexity: O(n)
 * `n` = length of `values`, `m` = length of `values[i]`
 *
 * @param {number[][]} values
 * @return {number}
 */
const maxSpending = (values) => {
        const n = values.length;
        const m = values[0].length;
        const sz = n * m;
        const set = new Array(n).fill(m - 1);

        let res = 0;

        for (let d = 1; d <= sz; d++) {
                let min = 1e9;
                let minI = -1;

                for (let i = 0; i < n; i++) {
                        const j = set[i];

                        if (j < 0) {
                                continue;
                        }

                        const val = values[i][j];

                        if (val < min) {
                                min = val;
                                minI = i;
                        }
                }

                res += d * min;
                set[minI]--;
        }

        return res;
};

/**
 * Approach: Sorting + Greedy
 * Time Complexity: O(n * m log (n * m))
 * Space Complexity: O(n * m)
 * `n` = length of `values`, `m` = length of `values[i]`
 *
 * @param {number[][]} values
 * @return {number}
 */
const maxSpending1 = (values) => {
        const n = values.length;
        const m = values[0].length;
        const sz = n * m;
        const vals = new Array(sz);
        let idx = 0;

        for (let i = 0; i < n; i++) {
                for (let j = 0; j < m; j++) {
                        vals[idx++] = values[i][j];
                }
        }

        vals.sort((a, b) => a - b);

        let res = 0;

        for (let i = 0; i < sz; i++) {
                res += vals[i] * (i + 1);
        }

        return res;
};

export { maxSpending, maxSpending1 };
