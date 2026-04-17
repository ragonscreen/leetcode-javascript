/**
 * 1151. Minimum Swaps to Group All 1's Together
 *
 * Link: https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/
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
 * - Total Accepted: 88,641
 * - Total Submissions: 144,797
 * - Acceptance Rate: 61.2%
 *
 * Similar Problems:
 * - minimum-swaps-to-group-all-1s-together-ii (Medium)
 * - time-needed-to-rearrange-a-binary-string (Medium)
 * - minimum-adjacent-swaps-for-k-consecutive-ones (Hard)
 * - minimum-moves-to-pick-k-ones (Hard)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} data
 * @return {number}
 */
const minSwaps = (nums) => {
        const n = nums.length;
        let count = 0;

        for (let i = 0; i < n; i++) {
                count += nums[i];
        }

        let res = n;
        let have = 0;

        for (let l = 0, r = 0; r < n; r++) {
                const len = r - l + 1;
                have += nums[r];

                if (len < count) {
                        continue;
                }

                res = Math.min(res, count - have);
                have -= nums[l++];
        }

        return res;
};

export { minSwaps };
