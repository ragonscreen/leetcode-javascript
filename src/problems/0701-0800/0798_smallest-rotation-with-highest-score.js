/**
 * 0798. Smallest Rotation with Highest Score
 *
 * Link: https://leetcode.com/problems/smallest-rotation-with-highest-score/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-04-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 18,458
 * - Total Submissions: 34,477
 * - Acceptance Rate: 53.5%
 */

/**
 * Approach: Difference Array
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const bestRotation = (nums) => {
        const n = nums.length;
        const diff = new Int32Array(n);

        for (let i = 0; i < n; i++) {
                const num = nums[i];

                // will always be good / will never be good
                // useless to include in count
                if (num === 0 || num > n - 1) {
                        continue;
                }

                const l = num - i;
                const r = n - i - 1;
                diff[(n + l) % n]++;
                diff[(n + r + 1) % n]--;
        }

        let sum = 0;
        let max = 0;
        let res = 0;

        for (let i = 0; i < n; i++) {
                sum += diff[i];

                // find largest positive good rotation since we want
                // to return the smallest good negative rotation
                if (sum >= max) {
                        max = sum;
                        res = n - i;
                }
        }

        // if 0th index is max, we are already in a good rotation
        return max > diff[0] ? res : 0;
};

export { bestRotation };
