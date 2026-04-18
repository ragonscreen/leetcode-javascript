/**
 * 1962. Remove Stones to Minimize the Total
 *
 * Link: https://leetcode.com/problems/remove-stones-to-minimize-the-total/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-19
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Heap (Priority Queue) (topic_61050)
 *
 * Stats:
 * - Total Accepted: 150,289
 * - Total Submissions: 228,963
 * - Acceptance Rate: 65.6%
 *
 * Similar Problems:
 * - take-gifts-from-the-richest-pile (Easy)
 * - maximal-score-after-applying-k-operations (Medium)
 * - minimum-operations-to-halve-array-sum (Medium)
 */

import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * Approach: Greedy + Counting Sort
 * Time Complexity: O(n + m)
 * Space Complexity: O(n + m)
 * `n` = length of `piles`, `m` = maximum value of `piles[i]`
 *
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
const minStoneSum = (piles, k) => {
        let sum = 0;
        let max = 0;

        for (const pile of piles) {
                sum += pile;
                max = Math.max(max, pile);
        }

        const bucket = new Uint32Array(max + 1).fill(0);

        for (const pile of piles) {
                bucket[pile]++;
        }

        let count = 0;

        for (let i = max; i > -1; ) {
                if (!bucket[i]) {
                        i--;
                        continue;
                }

                const j = Math.ceil(i / 2);
                bucket[i]--;
                bucket[j]++;
                sum = sum - i + j;
                count++;

                // i === j if we are stuck on the same index
                // and unable to proceed further
                if (count === k || i === j) {
                        return sum;
                }
        }
};

/**
 * Approach: Greedy + Priority Queue
 * Time Complexity: O(n + k log n)
 * Space Complexity: O(n)
 *
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
const minStoneSum1 = (piles, k) => {
        let sum = 0;

        for (const pile of piles) {
                sum += pile;
        }

        const maxq = new MaxPriorityQueue(null, piles);

        for (let i = 0; i < k; i++) {
                const num = maxq.dequeue();
                const val = Math.ceil(num / 2);
                maxq.enqueue(val);
                sum = sum - num + val;
        }

        return sum;
};

export { minStoneSum, minStoneSum1 };
