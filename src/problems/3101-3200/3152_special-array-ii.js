/**
 * 3152. Special Array II
 *
 * Link: https://leetcode.com/problems/special-array-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 138,449
 * - Total Submissions: 302,451
 * - Acceptance Rate: 45.8%
 */

/**
 * Approach: Prefix Sum
 * Time Complexity: O(n + q)
 * Space Complexity: O(n) auxiliary, O(n + q) total
 * `n`= length of `nums`, `q` = length of `queries`
 *
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
const isArraySpecial = (nums, queries) => {
        const n = nums.length;
        const pre = new Uint32Array(n);
        let cnt = 0;

        for (let i = 1; i < n; i++) {
                cnt += nums[i] % 2 === nums[i - 1] % 2;
                pre[i] = cnt;
        }

        const q = queries.length;
        const res = new Array(q);

        for (let i = 0; i < q; i++) {
                const [l, r] = queries[i];
                res[i] = pre[r] === pre[l];
        }

        return res;
};

export { isArraySpecial };
