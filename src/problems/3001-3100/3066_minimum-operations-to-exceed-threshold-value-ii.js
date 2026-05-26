/**
 * 3066. Minimum Operations to Exceed Threshold Value II
 *
 * Link: https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-21
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Heap (Priority Queue) (topic_61050)
 * - Simulation (topic_61055)
 * - Senior (position_senior)
 * - Biweekly Contest 125 (contest_biweekly-contest-125)
 *
 * Stats:
 * - Total Accepted: 190,687
 * - Total Submissions: 416,074
 * - Acceptance Rate: 45.8%
 *
 * Similar Problems:
 * - minimum-operations-to-halve-array-sum (Medium)
 */

import { MinPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * Approach: Priority Queue
 * Time Complexity: O(n lg n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minOperations = (nums, k) => {
        const minq = new MinPriorityQueue(null, nums);
        let res = 0;

        while (minq.front() < k) {
                const x = minq.dequeue();
                const y = minq.dequeue();
                minq.enqueue(x * 2 + y);
                res++;
        }

        return res;
};

export { minOperations };
