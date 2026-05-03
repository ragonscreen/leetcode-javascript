/**
 * 3919. Minimum Cost to Move Between Indices
 *
 * Link: https://leetcode.com/problems/minimum-cost-to-move-between-indices/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Stats:
 * - Total Accepted: 8,920
 * - Total Submissions: 18,523
 * - Acceptance Rate: 48.2%
 */

/**
 * Approach: Prefix Sum + Greedy
 * Time Complexity: O(n + q)
 * Space Complexity: O(n) auxiliary, O(n + q) total
 *
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
const minCost = (nums, queries) => {
        const n = nums.length;
        const preL = new Uint32Array(n);
        let cnt = 0;

        // construct left chains by walking from right
        for (let i = n - 1; i > 0; i--) {
                const num = nums[i];
                const diffL = num - nums[i - 1];
                const diffR = nums[i + 1] - num;

                if (i === n - 1 || diffL <= diffR) {
                        cnt++;
                } else {
                        cnt += diffL;
                }

                preL[i - 1] = cnt;
        }

        const preR = new Uint32Array(n);
        cnt = 0;

        // construct right chains by walking from left
        for (let i = 0; i < n - 1; i++) {
                const num = nums[i];
                const diffL = num - nums[i - 1];
                const diffR = nums[i + 1] - num;

                if (i === 0 || diffR < diffL) {
                        cnt++;
                } else {
                        cnt += diffR;
                }

                preR[i + 1] = cnt;
        }

        const q = queries.length;
        const res = new Uint32Array(q);

        for (let i = 0; i < q; i++) {
                const [from, to] = queries[i];
                // no need to check minimum because
                // jump cost will always be >= walk cost
                res[i] =
                        from < to
                                ? preR[to] - preR[from]
                                : preL[to] - preL[from];
        }

        return res;
};

export { minCost };
