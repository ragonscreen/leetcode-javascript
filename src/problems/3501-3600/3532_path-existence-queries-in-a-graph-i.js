/**
 * 3532. Path Existence Queries in a Graph I
 *
 * Link: https://leetcode.com/problems/path-existence-queries-in-a-graph-i/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-07-09
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Binary Search (topic_11)
 * - Union-Find (topic_23)
 * - Graph Theory (topic_24)
 * - Senior (position_senior)
 * - Weekly Contest 447 (contest_weekly-contest-447)
 *
 * Stats:
 * - Total Accepted: 117,794
 * - Total Submissions: 167,638
 * - Acceptance Rate: 70.3%
 */

/**
 * Approach: Prefix Sum
 * Time Complexity: O(N + q)
 * Space Complexity: O(N + q)
 * `N` = `n`, `q` = `queries.length`
 *
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 */
const pathExistenceQueries = (n, nums, maxDiff, queries) => {
        const p = new Uint32Array(n);

        for (let i = 1; i < n; i++) {
                p[i] = p[i - 1] + (nums[i] - nums[i - 1] > maxDiff);
        }

        const q = queries.length;
        const res = new Array(q);

        for (let qi = 0; qi < q; qi++) {
                const [u, v] = queries[qi];
                res[qi] = p[u] === p[v];
        }

        return res;
};

export { pathExistenceQueries };
