/**
 * 2134. Minimum Swaps to Group All 1's Together II
 *
 * Link: https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-18
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 177,146
 * - Total Submissions: 269,910
 * - Acceptance Rate: 65.6%
 *
 * Similar Problems:
 * - minimum-swaps-to-group-all-1s-together (Medium)
 * - time-needed-to-rearrange-a-binary-string (Medium)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const minSwaps = (nums) => {
        const n = nums.length;
        let count = 0;

        for (let i = 0; i < n; i++) {
                count += nums[i];
        }

        if (!count) {
                return 0;
        }

        let res = n;
        let have = 0;

        for (let l = 0, r = 0; l < n; r = (r + 1) % n) {
                const len = r >= l ? r - l + 1 : n - l + r + 1;
                have += nums[r];

                if (len < count) {
                        continue;
                }

                const swaps = len - have;
                res = Math.min(res, swaps);
                have -= nums[l++];
        }

        return res;
};

export { minSwaps };
