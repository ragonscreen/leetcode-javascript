/**
 * 0141. Linked List Cycle
 *
 * Link: https://leetcode.com/problems/linked-list-cycle/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-16
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - Linked List (topic_7)
 * - Two Pointers (topic_9)
 *
 * Stats:
 * - Total Accepted: 4,841,085
 * - Total Submissions: 8,938,006
 * - Acceptance Rate: 54.2%
 *
 * Similar Problems:
 * - happy-number (Easy)
 * - linked-list-cycle-ii (Medium)
 */

/**
 * Approach: Fast and Slow Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
        let slow = head;
        let fast = head;

        while (fast?.next) {
                slow = slow.next;
                fast = fast.next.next;

                if (slow === fast) {
                        return true;
                }
        }

        return false;
};

export { hasCycle };
