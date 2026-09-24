/**
 * 826. Most Profit Assigning Work
 *
 * Link: https://leetcode.com/problems/most-profit-assigning-work/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Binary Search (topic_11)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 * - Principal (position_principal)
 * - Weekly Contest 82 (contest_weekly-contest-82)
 *
 * Stats:
 *
 * - Total Accepted: 251,255
 * - Total Submissions: 445,754
 * - Acceptance Rate: 56.4%
 *
 * Similar Problems:
 *
 * - maximum-matching-of-players-with-trainers (Medium)
 * - successful-pairs-of-spells-and-potions (Medium)
 * - maximum-number-of-tasks-you-can-assign (Hard)
 */

/**
 * Approach: Greedy + Sorting + Prefix Sum + Binary Search
 * Time Complexity: O(n lg n + m lg n)
 * Space Complexity: O(n)
 * `n` = `difficulty.length`, `m` = `worker.length`
 *
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @returns {number}
 */
const maxProfitAssignment = (difficulty, profit, worker) => {
        const n = difficulty.length;
        const idx = Uint32Array.from({ length: n }, (_, i) => i).sort(
                (a, b) => difficulty[a] - difficulty[b],
        );

        const mxpft = new Uint32Array(n);
        mxpft[0] = profit[idx[0]];

        for (let i = 1; i < n; i++) mxpft[i] = Math.max(mxpft[i - 1], profit[idx[i]]);

        let res = 0;

        for (const w of worker) {
                if (w < difficulty[idx[0]]) continue;

                if (w >= difficulty[idx[n - 1]]) {
                        res += mxpft[n - 1];
                        continue;
                }

                let ok = 0;
                let ng = n + 1;

                while (Math.abs(ok - ng) > 1) {
                        const mid = (ok + ng) >> 1;

                        if (difficulty[idx[mid]] > w) ng = mid;
                        else ok = mid;
                }

                res += mxpft[ok];
        }

        return res;
};

/**
 * Approach: Greedy + Sorting + Prefix Sum + Two Pointers
 * Time Complexity: O(n lg n + m lg m)
 * Space Complexity: O(1) auxiliary, O(n + m) for sorting
 * `n` = `difficulty.length`, `m` = `worker.length`
 *
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @returns {number}
 */
const maxProfitAssignment1 = (difficulty, profit, worker) => {
        const n = difficulty.length;
        const idx = Uint32Array.from({ length: n }, (_, i) => i).sort(
                (a, b) => difficulty[a] - difficulty[b],
        );

        worker.sort((a, b) => a - b);
        let res = 0;
        let mxpft = 0;
        let i = 0;

        for (const w of worker) {
                while (difficulty[idx[i]] <= w) mxpft = Math.max(mxpft, profit[idx[i++]]);
                res += mxpft;
        }

        return res;
};

export { maxProfitAssignment, maxProfitAssignment1 };
