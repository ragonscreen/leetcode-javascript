/**
 * 0142. Linked List Cycle II
 *
 * Link: https://leetcode.com/problems/linked-list-cycle-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-15
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - Linked List (topic_7)
 * - Two Pointers (topic_9)
 *
 * Stats:
 * - Total Accepted: 2,022,453
 * - Total Submissions: 3,495,125
 * - Acceptance Rate: 57.9%
 *
 * Similar Problems:
 * - linked-list-cycle (Easy)
 * - find-the-duplicate-number (Medium)
 */

/**
 * Approach: Fast and Slow Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = (head) => {
        let hasCycle = false;
        let slow = head;
        let fast = head;

        while (fast?.next) {
                slow = slow.next;
                fast = fast.next.next;

                if (fast === slow) {
                        hasCycle = true;
                        break;
                }
        }

        if (!hasCycle) {
                return null;
        }

        let find = head;

        while (slow !== find) {
                slow = slow.next;
                find = find.next;
        }

        return find;
};

export { detectCycle };
