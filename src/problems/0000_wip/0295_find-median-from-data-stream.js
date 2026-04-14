/**
 * 0295. Find Median from Data Stream
 *
 * Link: https://leetcode.com/problems/find-median-from-data-stream/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-04-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Two Pointers (topic_9)
 * - Design (topic_25)
 * - Sorting (topic_61049)
 * - Heap (Priority Queue) (topic_61050)
 * - Data Stream (topic_61063)
 *
 * Stats:
 * - Total Accepted: 1,204,082
 * - Total Submissions: 2,215,378
 * - Acceptance Rate: 54.4%
 *
 * Similar Problems:
 * - minimum-operations-to-make-median-of-array-equal-to-k (Medium)
 * - minimum-operations-to-make-subarray-elements-equal (Medium)
 * - finding-mk-average (Hard)
 * - minimum-operations-to-make-elements-within-k-subarrays-equal (Hard)
 * - sequentially-ordinal-rank-tracker (Hard)
 * - sliding-window-median (Hard)
 */

import { MinPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * Approach: Priority Queue [TLE]
 *
 * check how adding elemets affects idx of median
 */
class MedianFinder {
        /**
         * Time Complexity: O(1)
         * Space Complexity: O(n)
         */
        constructor() {
                this.pq = new MinPriorityQueue();
        }

        /**
         * Time Complexity: O(log n)
         * Space Complexity: O(1)
         * `n` = size of `pq`
         *
         * @param {number} num
         * @return {void}
         */
        addNum(num) {
                this.pq.enqueue(num);
        }

        /**
         * Time Complexity: O(n)
         * Space Complexity: O(1)
         *
         * @return {number}
         */
        findMedian() {
                const size = this.pq.size();
                const arr = this.pq.toArray();
                const r = Math.floor(size / 2);

                return size % 2 ? arr[r] : (arr[r] + arr[r - 1]) / 2;
        }
}

export { MedianFinder };
