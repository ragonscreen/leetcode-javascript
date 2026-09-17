/**
 * 1477. Find Two Non-overlapping Sub-arrays Each With Target Sum
 *
 * Link: https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Binary Search (topic_11)
 * - Dynamic Programming (topic_13)
 * - Sliding Window (topic_55821)
 * - Staff (position_staff)
 * - Biweekly Contest 28 (contest_biweekly-contest-28)
 *
 * Stats:
 *
 * - Total Accepted: 115,299
 * - Total Submissions: 243,808
 * - Acceptance Rate: 47.3%
 *
 * Similar Problems:
 *
 * - find-subarrays-with-equal-sum (Easy)
 */

/**
 * Approach: Sliding Window + Dynamic Programming
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `arr.length`
 *
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */
const minSumOfLengths = (arr, target) => {
        const n = arr.length;
        const INF = n + 1;
        const dp = new Uint32Array(n + 1).fill(INF);
        let res = INF;

        for (let l = 0, r = 0, sum = 0; r < n; r++) {
                sum += arr[r];

                while (sum > target) sum -= arr[l++];

                dp[r + 1] = dp[r];

                if (sum === target) {
                        const len = r - l + 1;
                        res = Math.min(res, len + dp[l]);
                        dp[r + 1] = Math.min(dp[r], len);
                }
        }

        return res === INF ? -1 : res;
};

/**
 * Approach: Sliding Window + Prefix Sum + Dynamic Programming
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `arr.length`
 *
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */
const minSumOfLengths1 = (arr, target) => {
        const n = arr.length;
        const INF = n + 1;
        const lens = new Uint32Array(n).fill(INF);

        for (let l = 0, r = 0, sum = 0; r < n; r++) {
                sum += arr[r];

                while (sum > target) sum -= arr[l++];

                if (sum === target) {
                        lens[r] = r - l + 1;
                        sum -= arr[l++];
                }
        }

        const mnl = new Uint32Array(n);
        mnl[0] = lens[0];

        for (let i = 1; i < n; i++) mnl[i] = Math.min(lens[i], mnl[i - 1]);

        let res = INF;

        for (let i = n - 1; i > -1; i--) {
                const j = i - lens[i];

                if (j > -1) res = Math.min(res, lens[i] + mnl[j]);
        }

        return res === INF ? -1 : res;
};

export { minSumOfLengths, minSumOfLengths1 };
