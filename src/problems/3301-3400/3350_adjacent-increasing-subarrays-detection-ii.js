/**
 * 3350. Adjacent Increasing Subarrays Detection II
 *
 * Link: https://leetcode.com/problems/adjacent-increasing-subarrays-detection-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 *
 * Stats:
 * - Total Accepted: 120,353
 * - Total Submissions: 204,441
 * - Acceptance Rate: 58.9%
 */

/**
 * Approach: Greedy [Optimal]
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxIncreasingSubarrays = (nums) => {
        let res = 0;
        let prev = 0;
        let curr = 1;

        for (let i = 0; i < nums.length; i++) {
                if (nums[i] < nums[i + 1]) {
                        curr++;
                } else {
                        prev = curr;
                        curr = 1;
                }

                res = Math.max(res, Math.min(curr, prev), Math.floor(curr / 2));
        }

        return res;
};

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxIncreasingSubarrays1 = (nums) => {
        const n = nums.length;
        const lengths = new Array(n);

        for (let l = 0, r = 0; r < n; r++) {
                if (nums[r] <= nums[r - 1]) {
                        l = r;
                }

                lengths[r] = r - l + 1;
        }

        let res = 0;

        for (let l = n - 1, r = n - 1; l >= 0; l--) {
                if (nums[l] >= nums[l + 1]) {
                        r = l;
                }

                const len = r - l + 1;
                const minLen = Math.min(lengths[l - 1] ?? 0, len);
                res = Math.max(res, minLen);
        }

        return res;
};

export { maxIncreasingSubarrays, maxIncreasingSubarrays1 };
