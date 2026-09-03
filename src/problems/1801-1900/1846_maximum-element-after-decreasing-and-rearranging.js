/**
 * 1846. Maximum Element After Decreasing and Rearranging
 *
 * Link: https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-07-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 * - Staff (position_staff)
 * - Biweekly Contest 51 (contest_biweekly-contest-51)
 *
 * Stats:
 *
 * - Total Accepted: 225,085
 * - Total Submissions: 325,471
 * - Acceptance Rate: 69.2%
 */

/**
 * Approach: Sorting
 * Time Complexity: O(n lg n)
 * Space Complexity: O(1) auxiliary, O(n) for sorting
 * `n` = `arr.length`
 *
 * @param {number[]} arr
 * @returns {number}
 */
const maximumElementAfterDecrementingAndRearranging = (arr) => {
        arr.sort((a, b) => a - b);
        let cur = 0;

        for (let i = 0; i < arr.length; i++) {
                const num = arr[i];

                if (num < cur) {
                        break;
                }

                if (num === cur) {
                        continue;
                }

                cur++;
        }

        return cur;
};

export { maximumElementAfterDecrementingAndRearranging };
