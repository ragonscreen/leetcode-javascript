/**
 * 1590. Make Sum Divisible by P
 *
 * Link: https://leetcode.com/problems/make-sum-divisible-by-p/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Prefix Sum (topic_61068)
 * - Staff (position_staff)
 * - Biweekly Contest 35 (contest_biweekly-contest-35)
 *
 * Stats:
 *
 * - Total Accepted: 237,051
 * - Total Submissions: 556,453
 * - Acceptance Rate: 42.6%
 *
 * Similar Problems:
 *
 * - find-the-divisibility-array-of-a-string (Medium)
 * - subarray-sums-divisible-by-k (Medium)
 */

/**
 * Approach: Prefix Sum
 * Time Complexity: O(n)
 * Space Complexity: O(P)
 * `n` = `nums.length`, `P` = `p`
 *
 * At each step of iteration store the current remainder after modulo division
 * with `p`. If a pair is found in the map, we discard the previous subarray.
 * The current subarray is saved with the entry [remainder, index].
 *
 * @param {number[]} nums
 * @param {number} p
 * @returns {number}
 */
const minSubarray = (nums, p) => {
        const n = nums.length;
        const tgt = nums.reduce((t, c) => t + c, 0) % p;

        if (tgt === 0) {
                return 0;
        }

        const map = new Map([[0, -1]]);
        let res = n;

        for (let i = 0, cur = 0; i < n; i++) {
                cur = (cur + nums[i]) % p;
                const pair = (cur - tgt + p) % p;
                const j = map.get(pair);

                if (j !== undefined) {
                        res = Math.min(res, i - j);
                }

                map.set(cur, i);
        }

        return res === n ? -1 : res;
};

export { minSubarray };
