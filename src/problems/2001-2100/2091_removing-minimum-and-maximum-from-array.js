/**
 * 2091. Removing Minimum and Maximum From Array
 *
 * Link: https://leetcode.com/problems/removing-minimum-and-maximum-from-array/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-08-31
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Staff (position_staff)
 * - Weekly Contest 269 (contest_weekly-contest-269)
 *
 * Stats:
 *
 * - Total Accepted: 179,667
 * - Total Submissions: 266,426
 * - Acceptance Rate: 67.4%
 *
 * Similar Problems:
 *
 * - maximum-points-you-can-obtain-from-cards (Medium)
 * - minimum-deletions-to-make-character-frequencies-unique (Medium)
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @returns {number}
 */
const minimumDeletions = (nums) => {
        const n = nums.length;
        let mni = 0;
        let mxi = 0;

        for (let i = 1; i < n; i++) {
                const num = nums[i];

                if (num < nums[mni]) {
                        mni = i;
                }

                if (num > nums[mxi]) {
                        mxi = i;
                }
        }

        const l = Math.min(mni, mxi);
        const r = Math.max(mni, mxi);

        return Math.min(r + 1, n - l, l + 1 + n - r);
};

export { minimumDeletions };
