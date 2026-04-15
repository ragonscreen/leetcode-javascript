/**
 * 0023. Merge k Sorted Lists
 *
 * Link: https://leetcode.com/problems/merge-k-sorted-lists/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-04-15
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Linked List (topic_7)
 * - Divide and Conquer (topic_12)
 * - Heap (Priority Queue) (topic_61050)
 * - Merge Sort (topic_61051)
 *
 * Stats:
 * - Total Accepted: 2,959,907
 * - Total Submissions: 4,989,834
 * - Acceptance Rate: 59.3%
 *
 * Similar Problems:
 * - merge-two-sorted-lists (Easy)
 * - smallest-subarrays-with-maximum-bitwise-or (Medium)
 * - ugly-number-ii (Medium)
 */

import { MinPriorityQueue } from '@datastructures-js/priority-queue';
import { ListNode } from '../../data-structures/linked-list/LinkedListNode.js';

/**
 * Approach: Sorting
 * Time Complexity: O(n + k log k)
 * Space Complexity: O(1) auxiliary, O(k) total
 * `k` = total number of nodes across all lists in `lists`
 *
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = (lists) => {
        const nodes = [];

        for (let list of lists) {
                while (list) {
                        nodes.push(list.val);
                        list = list.next;
                }
        }

        nodes.sort((a, b) => a - b);
        const res = new ListNode();
        let curr = res;

        for (const node of nodes) {
                curr.next = new ListNode(node);
                curr = curr.next;
        }

        return res.next;
};

/**
 * Approach: Priority Queue
 * Time Complexity: O(n + k log n)
 * Space Complexity: O(1) auxiliary, O(n) total
 * `n` = length of `lists`, `k` = total number of nodes across all lists in `lists`
 *
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists1 = (lists) => {
        const pq = new MinPriorityQueue((e) => e.val);

        for (const list of lists) {
                if (list) {
                        pq.enqueue(list);
                }
        }

        const res = new ListNode();
        let curr = res;

        while (pq.size()) {
                const node = pq.dequeue();
                curr.next = node;
                curr = curr.next;
                const next = node.next;

                if (next) {
                        pq.enqueue(next);
                }
        }

        return res.next;
};

/**
 * Approach: Iteration
 * Time Complexity: O(n * k)
 * Space Complexity: O(1) auxiliary, O(n * k) total
 * `n` = length of `lists`, `k` = total number of nodes across all lists in `lists`
 *
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists2 = (lists) => {
        const res = new ListNode();
        let curr = res;

        while (true) {
                let min = Number.MAX_SAFE_INTEGER;
                let minI;

                for (let i = 0; i < lists.length; i++) {
                        const list = lists[i];

                        if (list?.val < min) {
                                min = list.val;
                                minI = i;
                        }
                }

                if (minI === undefined) {
                        break;
                }

                curr.next = new ListNode(min);
                curr = curr.next;
                lists[minI] = lists[minI].next;
        }

        return res.next;
};

export { mergeKLists, mergeKLists1, mergeKLists2 };
