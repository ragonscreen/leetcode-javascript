/**
 * 3937. Minimum Operations to Make Array Modulo Alternating I
 *
 * Link: https://leetcode.com/problems/minimum-operations-to-make-array-modulo-alternating-i/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Senior (position_senior)
 * - Biweekly Contest 183 (contest_biweekly-contest-183)
 *
 * Stats:
 * - Total Accepted: 19,067
 * - Total Submissions: 40,712
 * - Acceptance Rate: 46.8%
 *
 * Similar Problems:
 * - minimum-operations-to-make-array-modulo-alternating-ii (Hard) (Premium)
 */

/**
 * Approach: Math [II]
 * Time Complexity: O(n * K)
 * Space Complexity: O(K)
 * `n` = `nums.length`, `K` = `k`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minOperations = (nums, k) => {
        const n = nums.length;

        if (n === 1) {
                return 0;
        }

        const cnt1 = new Uint16Array(k);
        const cnt2 = new Uint16Array(k);

        for (let rem = 0; rem < k; rem++) {
                let res1 = 0;
                let res2 = 0;

                for (let i = 0; i < n; i++) {
                        const mod = nums[i] % k;
                        const dist = Math.abs(rem - mod);
                        const min = Math.min(dist, k - dist);

                        if (i % 2 === 0) {
                                res1 += min;
                        } else {
                                res2 += min;
                        }
                }

                cnt1[rem] = res1;
                cnt2[rem] = res2;
        }

        const INF = Number.MAX_SAFE_INTEGER;
        let mn1 = INF;
        let mn2 = INF;
        let mnx = -1;

        for (let x = 0; x < k; x++) {
                const num = cnt1[x];

                if (num < mn1) {
                        mn2 = mn1;
                        mn1 = num;
                        mnx = x;
                } else if (num < mn2) {
                        mn2 = num;
                }
        }

        let res = INF;

        for (let y = 0; y < k; y++) {
                const best = y === mnx ? mn2 : mn1;
                res = Math.min(res, best + cnt2[y]);
        }

        return res;
};

/**
 * Approach: Math [I]
 * Time Complexity: O(n * K^2)
 * Space Complexity: O(1)
 * `n` = `nums.length`, `K` = `k`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minOperations1 = (nums, k) => {
        let res = Number.MAX_SAFE_INTEGER;

        for (let x = 0; x <= k - 1; x++) {
                for (let y = 0; y <= k - 1; y++) {
                        if (y === x) {
                                continue;
                        }

                        let sum = 0;

                        for (let i = 0; i < nums.length; i++) {
                                const rem = nums[i] % k;
                                const dist = Math.abs(
                                        i % 2 ? x - rem : y - rem,
                                );
                                sum += Math.min(dist, k - dist);
                        }

                        res = Math.min(res, sum);
                }
        }

        return res;
};

export { minOperations, minOperations1 };
