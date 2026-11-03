/**
 * 23. Merge k Sorted Lists
 *
 * Link: https://leetcode.com/problems/merge-k-sorted-lists/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-04-15 (Updated: 2026-11-03)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Linked List (topic_7)
 * - Divide and Conquer (topic_12)
 * - Heap (Priority Queue) (topic_61050)
 * - Merge Sort (topic_61051)
 *
 * Stats:
 *
 * - Total Accepted: 2,959,907
 * - Total Submissions: 4,989,834
 * - Acceptance Rate: 59.3%
 *
 * Similar Problems:
 *
 * - merge-two-sorted-lists (Easy)
 * - smallest-subarrays-with-maximum-bitwise-or (Medium)
 * - ugly-number-ii (Medium)
 */

import { MinPriorityQueue } from '@datastructures-js/priority-queue';

import { ListNode } from '../../../data-structures/linked-list/LinkedListNode.js';

/**
 * Approach: Divide and Conquer
 * Time Complexity: O(m lg n)
 * Space Complexity: O(n)
 * `n` = `lists.length`, `m` = `sum(lists[i].length)`
 *
 * @param {ListNode[]} lists
 * @returns {ListNode}
 */
const mergeKLists = (lists) => {
        if (lists.length === 0) return null;

        const dummy = new ListNode();

        while (lists.length > 1) {
                const tmp = [];
                const n = lists.length;

                for (let i = 0; i < n - 1; i += 2) {
                        let l1 = lists[i];
                        let l2 = lists[i + 1];
                        let curr = dummy;

                        while (l1 && l2) {
                                if (l1.val <= l2.val) {
                                        curr.next = l1;
                                        l1 = l1.next;
                                } else {
                                        curr.next = l2;
                                        l2 = l2.next;
                                }

                                curr = curr.next;
                        }

                        curr.next = l1 || l2;
                        tmp.push(dummy.next);
                }

                if (n & 1) tmp.push(lists[n - 1]);

                lists = tmp;
        }

        return lists[0];
};

/**
 * Approach: Sorting
 * Time Complexity: O(m lg m)
 * Space Complexity: O(m)
 * `m` = `sum(lists[i].length)`
 *
 * @param {ListNode[]} lists
 * @returns {ListNode}
 */
const mergeKLists1 = (lists) => {
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
 * Time Complexity: O(n + m lg n)
 * Space Complexity: O(m)
 * `n` = `lists.length`, `m` = `sum(lists[i].length)`
 *
 * @param {ListNode[]} lists
 * @returns {ListNode}
 */
const mergeKLists2 = (lists) => {
        const pq = new MinPriorityQueue((e) => e.val);

        for (const list of lists) if (list) pq.enqueue(list);

        const dummy = new ListNode();
        let curr = dummy;

        while (pq.size()) {
                const node = pq.dequeue();
                curr.next = node;
                curr = curr.next;
                const next = node.next;

                if (next) pq.enqueue(next);
        }

        return dummy.next;
};

/**
 * Approach: Simulation
 * Time Complexity: O(n * m)
 * Space Complexity: O(1) auxiliary, O(m) total
 * `n` = `lists.length`, `m` = `sum(lists[i].length)`
 *
 * @param {ListNode[]} lists
 * @returns {ListNode}
 */
const mergeKLists3 = (lists) => {
        const n = lists.length;
        const dummy = new ListNode();
        let curr = dummy;

        while (true) {
                let mn = Number.MAX_SAFE_INTEGER;
                let mni = -1;

                for (let i = 0; i < n; i++) {
                        const list = lists[i];

                        if (list?.val < mn) {
                                mn = list.val;
                                mni = i;
                        }
                }

                if (mni === -1) break;

                curr.next = new ListNode(mn);
                curr = curr.next;
                lists[mni] = lists[mni].next;
        }

        return dummy.next;
};

export { mergeKLists, mergeKLists1, mergeKLists2, mergeKLists3 };
