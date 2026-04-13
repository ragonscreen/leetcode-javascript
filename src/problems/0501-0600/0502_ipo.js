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

import {
        MaxPriorityQueue,
        PriorityQueue,
} from '@datastructures-js/priority-queue';

/**
 * Approach: Priority Queue [Optimal]
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
        const projects = Array.from({ length: n }, (_, i) => i);
        projects.sort((a, b) => capital[a] - capital[b]);
        const pq = new MaxPriorityQueue();
        let res = w;
        let idx = 0;
        let count = 0;

        while (count < k) {
                while (capital[projects[idx]] <= res) {
                        pq.enqueue(profits[projects[idx++]]);
                }

                if (pq.isEmpty()) {
                        return res;
                }

                res += pq.dequeue();
                count++;
        }

        return res;
};

/**
 * Approach: Priority Queue [One Queue]
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
const findMaximizedCapital1 = (k, w, profits, capital) => {
        const n = profits.length;
        const projects = new Array(n);

        for (let i = 0; i < n; i++) {
                projects[i] = [profits[i], capital[i]];
        }

        projects.sort((a, b) => a[1] - b[1]);
        const pq = new MaxPriorityQueue();
        let res = w;
        let idx = 0;
        let count = 0;

        while (count < k) {
                while (projects[idx]?.[1] <= res) {
                        pq.enqueue(projects[idx++][0]);
                }

                if (pq.isEmpty()) {
                        return res;
                }

                res += pq.dequeue();
                count++;
        }

        return res;
};

/**
 * Approach: Priority Queue [Two Queues]
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
const findMaximizedCapital2 = (k, w, profits, capital) => {
        const n = profits.length;
        const projects = new Array(n);

        for (let i = 0; i < n; i++) {
                projects[i] = [profits[i], capital[i]];
        }

        const pqc = new PriorityQueue((a, b) => a[1] - b[1], projects);
        const pqp = new PriorityQueue((a, b) => b[0] - a[0]);
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

export { findMaximizedCapital, findMaximizedCapital1, findMaximizedCapital2 };
