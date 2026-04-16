/**
 * 3488. Closest Equal Element Queries
 *
 * Link: https://leetcode.com/problems/closest-equal-element-queries/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-16
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Binary Search (topic_11)
 *
 * Stats:
 * - Total Accepted: 48,301
 * - Total Submissions: 110,931
 * - Acceptance Rate: 43.5%
 */

/**
 * Approach: Hash Map [Optimal]
 * Time Complexity: O(n + m)
 * Space Complexity: O(n) auxiliary, O(n + m) total
 * `n` = length of `nums`, `m` = length of `queries`
 *
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
const solveQueries = (nums, queries) => {
        const n = nums.length;
        const map = new Map();

        for (let i = 0; i < n; i++) {
                const num = nums[i];

                if (!map.has(num)) {
                        map.set(num, []);
                }

                map.get(num).push(i);
        }

        const minDists = new Array(n);

        for (const indices of map.values()) {
                const k = indices.length;

                if (k === 1) {
                        minDists[indices[0]] = -1;
                        continue;
                }

                for (let i = 0; i < k; i++) {
                        const idx = indices[i];
                        const idxR = indices[(i + 1) % k];
                        const idxL = indices[(i + k - 1) % k];
                        const distR = Math.abs(idx - idxR);
                        const distL = Math.abs(idx - idxL);

                        minDists[idx] = Math.min(
                                distR,
                                n - distR,
                                distL,
                                n - distL,
                        );
                }
        }

        const m = queries.length;
        const res = new Array(m);

        for (let i = 0; i < m; i++) {
                res[i] = minDists[queries[i]];
        }

        return res;
};

/**
 * Approach: Hash Map + Binary Search
 * Time Complexity: O(n + m log k)
 * Space Complexity: O(n) auxiliary, O(n + m) total
 * `n` = length of `nums`, `m` = length of `queries`, `k` = maximum count of occurences of each value in `nums`
 *
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
const solveQueries1 = (nums, queries) => {
        const n = nums.length;
        const map = new Map();

        for (let i = 0; i < n; i++) {
                const num = nums[i];

                if (!map.has(num)) {
                        map.set(num, []);
                }

                map.get(num).push(i);
        }

        const m = queries.length;
        const res = new Array(m);

        for (let i = 0; i < m; i++) {
                const idx = queries[i];
                const num = nums[idx];
                const indices = map.get(num);
                const k = indices.length;

                if (k === 1) {
                        res[i] = -1;
                        continue;
                }

                let l = 0;
                let r = k - 1;

                while (l < r) {
                        const mid = l + ((r - l) >> 1);

                        if (indices[mid] < idx) {
                                l = mid + 1;
                        } else {
                                r = mid;
                        }
                }

                const idxR = indices[(l + 1) % k];
                const idxL = indices[(l + k - 1) % k];
                const distR = Math.abs(idx - idxR);
                const distL = Math.abs(idx - idxL);
                res[i] = Math.min(distR, n - distR, distL, n - distL);
        }

        return res;
};

export { solveQueries, solveQueries1 };
