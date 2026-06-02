/**
 * 0334. Increasing Triplet Subsequence
 *
 * Link: https://leetcode.com/problems/increasing-triplet-subsequence/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Greedy (topic_17)
 *
 * Stats:
 * - Total Accepted: 936,186
 * - Total Submissions: 2,377,010
 * - Acceptance Rate: 39.4%
 *
 * Similar Problems:
 * - count-special-quadruplets (Easy)
 * - longest-increasing-subsequence (Medium)
 * - count-good-triplets-in-an-array (Hard)
 * - count-increasing-quadruplets (Hard)
 */

/**
 * Approach: Greedy [Space Optimized]
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = (nums) => {
        const INF = Number.MAX_SAFE_INTEGER;
        let m1 = nums[0];
        let m2 = INF;
        let m3 = INF;

        for (let i = 0; i < nums.length; i++) {
                const num = nums[i];
                m1 = Math.min(m1, num);

                if (num < m2 && num > m1) {
                        m2 = num;
                }

                if (num < m3 && num > m2) {
                        m3 = num;
                }
        }

        return m3 < INF;
};

/**
 * Approach: Greedy [II]
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet1 = (nums) => {
        const INF = Number.MAX_SAFE_INTEGER;
        const n = nums.length;
        const mns = new Float64Array(n);
        let mn = nums[0];

        for (let i = 0; i < n; i++) {
                mn = Math.min(mn, nums[i]);
                mns[i] = mn;
        }

        mn = INF;

        for (let i = 0; i < n; i++) {
                const num = nums[i];

                if (num < mn && num > mns[i]) {
                        mn = num;
                }

                mns[i] = mn;
        }

        mn = INF;

        for (let i = 0; i < n; i++) {
                const num = nums[i];

                if (num < mn && num > mns[i]) {
                        mn = num;
                }

                mns[i] = mn;
        }

        return mns[n - 1] < INF;
};

/**
 * Approach: Greedy [I]
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet2 = (nums) => {
        const INF = Number.MAX_SAFE_INTEGER;
        const n = nums.length;
        const mns1 = new Float64Array(n);
        const mns2 = new Float64Array(n);
        const mns3 = new Float64Array(n);
        let mn = nums[0];

        for (let i = 0; i < n; i++) {
                mn = Math.min(mn, nums[i]);
                mns1[i] = mn;
        }

        mn = INF;

        for (let i = 0; i < n; i++) {
                const num = nums[i];

                if (num < mn && num > mns1[i]) {
                        mn = num;
                }

                mns2[i] = mn;
        }

        mn = INF;

        for (let i = 0; i < n; i++) {
                const num = nums[i];

                if (num < mn && num > mns2[i]) {
                        mn = num;
                }

                mns3[i] = mn;
        }

        return mns3[n - 1] < INF;
};

export { increasingTriplet, increasingTriplet1, increasingTriplet2 };
