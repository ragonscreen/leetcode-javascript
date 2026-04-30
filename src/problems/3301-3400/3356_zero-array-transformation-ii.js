/**
 * 3356. Zero Array Transformation II
 *
 * Link: https://leetcode.com/problems/zero-array-transformation-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-01
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Binary Search (topic_11)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 133,694
 * - Total Submissions: 306,774
 * - Acceptance Rate: 43.6%
 *
 * Similar Problems:
 * - corporate-flight-bookings (Medium)
 * - minimum-moves-to-make-array-complementary (Medium)
 * - zero-array-transformation-iv (Medium)
 */

/**
 * Approach: Difference Array + Greedy + Sweep Line
 * Time Complexity: O(n + q)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
const minZeroArray = (nums, queries) => {
        const n = nums.length;
        const q = queries.length;
        const diffs = new Int32Array(n);
        let qi = 0;
        let cnt = 0;

        for (let i = 0; i < n; i++) {
                // if we get stuck process next queries
                // otherwise keep sweeping
                while (nums[i] + cnt + diffs[i] > 0) {
                        if (qi === q) {
                                return -1;
                        }

                        const [l, r, val] = queries[qi++];

                        if (r < i) {
                                continue;
                        }

                        diffs[Math.max(l, i)] -= val;
                        diffs[r + 1] += val;
                }

                cnt += diffs[i];
        }

        return qi;
};

/**
 * Approach: Binary Search + Difference Array
 * Time Complexity: O(log q (n + q))
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
const minZeroArray1 = (nums, queries) => {
        const n = nums.length;
        const q = queries.length;

        const check = (len) => {
                const diffs = new Int32Array(n);

                for (let i = 0; i < Math.min(len, q); i++) {
                        const [l, r, val] = queries[i];
                        diffs[l] -= val;
                        diffs[r + 1] += val;
                }

                let pre = 0;

                for (let i = 0; i < n; i++) {
                        pre += diffs[i];

                        if (nums[i] + pre > 0) {
                                return false;
                        }
                }

                return true;
        };

        let ok = q + 1;
        let ng = -1;

        while (Math.abs(ok - ng) > 1) {
                const m = (ok + ng) >> 1;

                if (check(m)) {
                        ok = m;
                } else {
                        ng = m;
                }
        }

        return ok < q + 1 ? ok : -1;
};

export { minZeroArray, minZeroArray1 };
