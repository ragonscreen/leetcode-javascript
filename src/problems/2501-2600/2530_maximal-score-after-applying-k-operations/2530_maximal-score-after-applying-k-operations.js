/**
 * 2530. Maximal Score After Applying K Operations
 *
 * Link: https://leetcode.com/problems/maximal-score-after-applying-k-operations/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Heap (Priority Queue) (topic_61050)
 * - Senior (position_senior)
 * - Weekly Contest 327 (contest_weekly-contest-327)
 *
 * Stats:
 *
 * - Total Accepted: 169,128
 * - Total Submissions: 263,255
 * - Acceptance Rate: 64.2%
 *
 * Similar Problems:
 *
 * - remove-stones-to-minimize-the-total (Medium)
 * - sliding-window-maximum (Hard)
 */

import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * Approach: Sorting + Greedy
 * Time Complexity: O(n lg n)
 * Space Complexity: O(n + K)
 * `n` = `nums.length`, `K` = `k`
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
const maxKelements = (nums, k) => {
        const n = nums.length;
        nums.sort((a, b) => b - a);
        const next = new Uint32Array(k);
        let res = 0;
        let ni = 0;
        let i = 0;
        let j = 0;

        while (k-- > 0) {
                const val = i < n && (j === ni || next[j] <= nums[i]) ? nums[i++] : next[j++];
                res += val;
                next[ni++] = Math.ceil(val / 3);
        }

        return res;
};

/**
 * Approach: Priority Queue
 * Time Complexity: O(n + K lg n)
 * Space Complexity: O(n)
 * `n` = `nums.length`, `K` = `k`
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
const maxKelements1 = (nums, k) => {
        const pq = new MaxPriorityQueue(null, nums);
        let res = 0;

        for (let i = 0; i < k; i++) {
                const num = pq.pop();
                res += num;
                pq.push(Math.ceil(num / 3));
        }

        return res;
};

export { maxKelements, maxKelements1 };
