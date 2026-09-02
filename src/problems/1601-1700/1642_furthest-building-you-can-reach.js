/**
 * 1642. Furthest Building You Can Reach
 *
 * Link: https://leetcode.com/problems/furthest-building-you-can-reach/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Heap (Priority Queue) (topic_61050)
 * - Staff (position_staff)
 * - Weekly Contest 213 (contest_weekly-contest-213)
 *
 * Stats:
 * - Total Accepted: 280,213
 * - Total Submissions: 548,134
 * - Acceptance Rate: 51.1%
 *
 * Similar Problems:
 * - make-the-prefix-sum-non-negative (Medium) (Premium)
 * - find-building-where-alice-and-bob-can-meet (Hard)
 */

import { MinPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * Approach: Priority Queue
 * Time Complexity: O(n lg n)
 * Space Complexity: O(n)
 * `n` = `heights.length`
 *
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
const furthestBuilding = (heights, bricks, ladders) => {
        const n = heights.length;
        const mnq = new MinPriorityQueue();

        for (let i = 0, bricksUsed = 0; i < n - 1; i++) {
                const ha = heights[i];
                const hb = heights[i + 1];
                const diff = hb - ha;

                if (diff <= 0) {
                        continue;
                }

                mnq.enqueue(diff);

                if (mnq.size() > ladders) {
                        bricksUsed += mnq.dequeue();
                }

                if (bricksUsed > bricks) {
                        return i;
                }
        }

        return n - 1;
};

export { furthestBuilding };
