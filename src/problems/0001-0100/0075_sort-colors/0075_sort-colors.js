/**
 * 75. Sort Colors
 *
 * Link: https://leetcode.com/problems/sort-colors/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Sorting (topic_61049)
 *
 * Stats:
 *
 * - Total Accepted: 3,675,783
 * - Total Submissions: 5,295,334
 * - Acceptance Rate: 69.4%
 *
 * Similar Problems:
 *
 * - sort-list (Medium)
 * - wiggle-sort (Medium)
 * - wiggle-sort-ii (Medium)
 */

/**
 * Approach: Three Pointers (Dutch National Flag Algorithm)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @returns {void}
 */
const sortColors = (nums) => {
        // oxlint-disable-next-line no-return-assign
        const swap = (i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

        for (let i = 0, l = 0, r = nums.length - 1; i <= r; i++) {
                const v = nums[i];

                if (v < 1) swap(l++, i);
                else if (v > 1) swap(r--, i--);
        }
};

/**
 * Approach: Counting Sort
 * Time Complexity: O(n)
 * Space Complexity: O(k)
 * `n` = `nums.length`, `k` = `max(nums[i])`
 *
 * @param {number[]} nums
 * @returns {void}
 */
const sortColors1 = (nums) => {
        const frq = [0, 0, 0];

        for (const v of nums) frq[v]++;

        for (let v = 0, ri = 0; v < frq.length; v++)
                for (let j = 0; j < frq[v]; j++) nums[ri++] = v;
};

export { sortColors, sortColors1 };
