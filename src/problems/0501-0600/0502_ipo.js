/**
 * 0502. IPO
 *
 * Link: https://leetcode.com/problems/ipo/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-04-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 * - Heap (Priority Queue) (topic_61050)
 *
 * Stats:
 * - Total Accepted: 314,154
 * - Total Submissions: 587,987
 * - Acceptance Rate: 53.4%
 *
 * Similar Problems:
 * - maximum-subsequence-score (Medium)
 * - maximum-elegance-of-a-k-length-subsequence (Hard)
 */

import { PriorityQueue as PQ } from '@datastructures-js/priority-queue';

/**
 * Approach: Priority Queue
 * Time Complexity: O(n + n log n)
 * Space Complexity: O(n)
 * `n` = length of `profits`
 *
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
const findMaximizedCapital = (k, w, profits, capital) => {
        const n = profits.length;
        const projects = new Array(n);

        for (let i = 0; i < n; i++) {
                projects[i] = [profits[i], capital[i]];
        }

        const pqc = new PQ((a, b) => a[1] - b[1], projects);
        const pqp = new PQ((a, b) => b[0] - a[0]);
        let res = w;
        let count = 0;

        while (count < k) {
                while (pqc.front()?.[1] <= res) {
                        pqp.enqueue(pqc.dequeue());
                }

                if (pqp.isEmpty()) {
                        return res;
                }

                res += pqp.dequeue()[0];
                count++;
        }

        return res;
};

export { findMaximizedCapital };
