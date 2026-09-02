/**
 * 2208. Minimum Operations to Halve Array Sum
 *
 * Link: https://leetcode.com/problems/minimum-operations-to-halve-array-sum/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Heap (Priority Queue) (topic_61050)
 * - Staff (position_staff)
 * - Biweekly Contest 74 (contest_biweekly-contest-74)
 *
 * Stats:
 * - Total Accepted: 57,163
 * - Total Submissions: 113,227
 * - Acceptance Rate: 50.5%
 *
 * Similar Problems:
 * - minimum-operations-to-exceed-threshold-value-ii (Medium)
 * - remove-stones-to-minimize-the-total (Medium)
 */

import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * Approach: Greedy + Priority Queue
 * Time Complexity: O(n lg n)
 * Space Complexity: O(n)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @return {number}
 */
const halveArray = (nums) => {
        const req = nums.reduce((t, c) => t + c, 0) / 2;
        const mxq = new MaxPriorityQueue(null, nums);
        let res = 0;
        let cur = 0;

        while (cur < req) {
                const val = mxq.pop() / 2;
                cur += val;
                mxq.push(val);
                res++;
        }

        return res;
};

export { halveArray };
