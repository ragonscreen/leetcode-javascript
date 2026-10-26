/**
 * 3551. Minimum Swaps to Sort by Digit Sum
 *
 * Link: https://leetcode.com/problems/minimum-swaps-to-sort-by-digit-sum/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Sorting (topic_61049)
 * - Senior (position_senior)
 * - Weekly Contest 450 (contest_weekly-contest-450)
 *
 * Stats:
 *
 * - Total Accepted: 110,780
 * - Total Submissions: 164,865
 * - Acceptance Rate: 67.2%
 */

/**
 * Approach: Sorting
 * Time Complexity: O(n log K + n lg n)
 * Space Complexity: O(n)
 * `n` = `nums.length`, `K` = `max(nums[i])`
 *
 * @param {number[]} nums
 * @returns {number}
 */
const minSwaps = (nums) => {
        const n = nums.length;
        const sums = new Uint8Array(n);

        for (let i = 0; i < n; i++) {
                let sum = 0;
                let num = nums[i];

                while (num > 0) {
                        sum += num % 10;
                        num = 0 | (num / 10);
                }

                sums[i] = sum;
        }

        const idx = Uint32Array.from({ length: n }, (_, i) => i).sort(
                (i, j) => sums[i] - sums[j] || nums[i] - nums[j],
        );
        const vis = new Uint8Array(n);
        let cnt = 0;

        for (let i = 0; i < n; i++) {
                if (vis[i]) continue;

                vis[i] = 1;
                cnt++;
                let j = idx[i];

                while (j !== i) {
                        vis[j] = 1;
                        j = idx[j];
                }
        }

        return n - cnt;
};

export { minSwaps };
