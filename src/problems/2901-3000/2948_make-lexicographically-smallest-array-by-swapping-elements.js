/**
 * 2948. Make Lexicographically Smallest Array by Swapping Elements
 *
 * Link: https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-01
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Union-Find (topic_23)
 * - Sorting (topic_61049)
 * - Staff (position_staff)
 * - Weekly Contest 373 (contest_weekly-contest-373)
 *
 * Stats:
 * - Total Accepted: 175,900
 * - Total Submissions: 264,567
 * - Acceptance Rate: 66.5%
 *
 * Similar Problems:
 * - minimize-hamming-distance-after-swap-operations (Medium)
 * - smallest-string-with-swaps (Medium)
 */

/**
 * Approach: Sorting
 * Time Complexity: O(n lg n)
 * Space Complexity: O(n)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
const lexicographicallySmallestArray = (nums, limit) => {
        const n = nums.length;
        const pairs = new Array(n);

        for (let i = 0; i < n; i++) {
                pairs[i] = [i, nums[i]];
        }

        pairs.sort((a, b) => a[1] - b[1]);
        const groups = [[pairs[0]]];

        for (let i = 1; i < n; i++) {
                if (pairs[i][1] - pairs[i - 1][1] > limit) {
                        groups.push([]);
                }

                groups.at(-1).push(pairs[i]);
        }

        const res = new Uint32Array(n);

        for (const group of groups) {
                const m = group.length;
                const idxs = new Uint32Array(m);

                for (let i = 0; i < m; i++) {
                        idxs[i] = group[i][0];
                }

                idxs.sort();

                for (let i = 0; i < m; i++) {
                        res[idxs[i]] = group[i][1];
                }
        }

        return res;
};

export { lexicographicallySmallestArray };
