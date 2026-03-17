/**
 * 1944. Number of Visible People in a Queue
 *
 * Link: https://leetcode.com/problems/number-of-visible-people-in-a-queue/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-03-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Stack (topic_15)
 * - Monotonic Stack (topic_61054)
 *
 * Stats:
 * - Total Accepted: 121,455
 * - Total Submissions: 167,155
 * - Acceptance Rate: 72.7%
 *
 * Similar Problems:
 * - buildings-with-an-ocean-view (Medium)
 * - number-of-people-that-can-be-seen-in-a-grid (Medium)
 * - sum-of-subarray-ranges (Medium)
 * - find-building-where-alice-and-bob-can-meet (Hard)
 * - sum-of-total-strength-of-wizards (Hard)
 */

/**
 * Approach: Monotonic Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} heights
 * @return {number[]}
 */
const canSeePersonsCount = (heights) => {
        const n = heights.length;
        const res = new Array(n).fill(0);
        const stack = [0];

        for (let i = 1; i < n; i++) {
                const height = heights[i];

                while (stack.length && heights[stack.at(-1)] < height) {
                        res[stack.pop()]++;
                }

                if (stack.length) {
                        res[stack.at(-1)]++;
                }

                stack.push(i);
        }

        return res;
};

export { canSeePersonsCount };
