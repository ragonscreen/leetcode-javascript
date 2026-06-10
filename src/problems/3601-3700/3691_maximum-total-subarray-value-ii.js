/**
 * 3691. Maximum Total Subarray Value II
 *
 * Link: https://leetcode.com/problems/maximum-total-subarray-value-ii/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-06-11
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Segment Tree (topic_29)
 * - Heap (Priority Queue) (topic_61050)
 * - Principal (position_principal)
 * - Weekly Contest 468 (contest_weekly-contest-468)
 *
 * Stats:
 * - Total Accepted: 68,026
 * - Total Submissions: 164,935
 * - Acceptance Rate: 41.2%
 */

import { PriorityQueue } from '@datastructures-js/priority-queue';

/**
 * Approach: Sparse Table + Priority Queue
 * Time Complexity: O((n + K) * lg n)
 * Space Complexity: O(n * lg n)
 * `n` = `nums.length`, `K` = `k`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxTotalValue = (nums, k) => {
        const n = nums.length;
        const log2 = 32 - Math.clz32(n);
        const mns = Array.from({ length: log2 }, () => new Uint32Array(n));
        const mxs = Array.from({ length: log2 }, () => new Uint32Array(n));

        for (let i = 0; i < n; i++) {
                const num = nums[i];
                mns[0][i] = num;
                mxs[0][i] = num;
        }

        for (let j = 1; j < log2; j++) {
                for (let i = 0; i + (1 << j) - 1 < n; i++) {
                        mns[j][i] = Math.min(
                                mns[j - 1][i],
                                mns[j - 1][i + (1 << (j - 1))],
                        );

                        mxs[j][i] = Math.max(
                                mxs[j - 1][i],
                                mxs[j - 1][i + (1 << (j - 1))],
                        );
                }
        }

        const qry = (l, r) => {
                const lg = 31 - Math.clz32(r - l + 1);
                const mx = Math.max(mxs[lg][l], mxs[lg][r - (1 << lg) + 1]);
                const mn = Math.min(mns[lg][l], mns[lg][r - (1 << lg) + 1]);

                return mx - mn;
        };

        const pq = new PriorityQueue((a, b) => b[0] - a[0]);

        for (let l = 0; l < n; l++) {
                const r = n - 1;
                pq.enqueue([qry(l, r), l, r]);
        }

        let res = 0;

        while (k) {
                const [v, l, r] = pq.dequeue();
                res += v;

                if (r > l) {
                        pq.enqueue([qry(l, r - 1), l, r - 1]);
                }

                k--;
        }

        return res;
};

export { maxTotalValue };
