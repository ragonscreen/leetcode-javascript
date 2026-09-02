/**
 * 1031. Maximum Sum of Two Non-Overlapping Subarrays
 *
 * Link: https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Dynamic Programming (topic_13)
 * - Sliding Window (topic_55821)
 * - Senior Staff (position_senior-staff)
 * - Weekly Contest 133 (contest_weekly-contest-133)
 *
 * Stats:
 * - Total Accepted: 89,979
 * - Total Submissions: 146,446
 * - Acceptance Rate: 61.4%
 */

/**
 * Approach: Sliding Window + Dynamic Programming
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
const maxSumTwoNoOverlap = (nums, firstLen, secondLen) => {
        const sw = (len1, len2) => {
                let lsum = 0;

                for (let i = 0; i < len1; i++) {
                        lsum += nums[i];
                }

                let rsum = 0;

                for (let i = len1; i < len1 + len2; i++) {
                        rsum += nums[i];
                }

                let mxLeft = lsum;
                let mxTot = lsum + rsum;

                for (
                        let l = 1, r = len1, i = len1 + 1, j = len1 + len2;
                        j < nums.length;
                        l++, r++, i++, j++
                ) {
                        lsum = lsum + nums[r] - nums[l - 1];
                        mxLeft = Math.max(mxLeft, lsum);

                        rsum = rsum + nums[j] - nums[i - 1];
                        mxTot = Math.max(mxTot, mxLeft + rsum);
                }

                return mxTot;
        };

        return Math.max(sw(firstLen, secondLen), sw(secondLen, firstLen));
};

/**
 * Approach: Prefix Sum + Sliding Window + Dynamic Programming
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
const maxSumTwoNoOverlap1 = (nums, firstLen, secondLen) => {
        const n = nums.length;
        const p = new Uint32Array(n + 1);

        for (let i = 0; i < n; i++) {
                p[i + 1] = p[i] + nums[i];
        }

        const sw = (len1, len2) => {
                let mxTot = -1;
                let mxLeft = -1;

                for (
                        let l = 0, r = len1 - 1, i = len1, j = len1 + len2 - 1;
                        j < n;
                        l++, r++, i++, j++
                ) {
                        const lsum = p[r + 1] - p[l];
                        mxLeft = Math.max(mxLeft, lsum);

                        const rsum = p[j + 1] - p[i];
                        mxTot = Math.max(mxTot, mxLeft + rsum);
                }

                return mxTot;
        };

        return Math.max(sw(firstLen, secondLen), sw(secondLen, firstLen));
};

/**
 * Approach: Prefix Sum
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
const maxSumTwoNoOverlap2 = (nums, firstLen, secondLen) => {
        const n = nums.length;
        const p = new Uint32Array(n + 1);

        for (let i = 0; i < n; i++) {
                p[i + 1] = p[i] + nums[i];
        }

        let res = 0;

        for (let l = 0, r = firstLen - 1; r < n; l++, r++) {
                const sum1 = p[r + 1] - p[l];

                for (let i = 0, j = secondLen - 1; j < l; i++, j++) {
                        const sum2 = p[j + 1] - p[i];
                        res = Math.max(res, sum1 + sum2);
                }

                for (let i = r + 1, j = i + secondLen - 1; j < n; i++, j++) {
                        const sum2 = p[j + 1] - p[i];
                        res = Math.max(res, sum1 + sum2);
                }
        }

        return res;
};

export { maxSumTwoNoOverlap, maxSumTwoNoOverlap1, maxSumTwoNoOverlap2 };
