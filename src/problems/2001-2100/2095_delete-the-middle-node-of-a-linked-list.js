/**
 * 2095. Delete the Middle Node of a Linked List
 *
 * Link: https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-15
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Linked List (topic_7)
 * - Two Pointers (topic_9)
 * - Senior (position_senior)
 * - Weekly Contest 270 (contest_weekly-contest-270)
 *
 * Stats:
 * - Total Accepted: 1,059,299
 * - Total Submissions: 1,750,115
 * - Acceptance Rate: 60.5%
 *
 * Similar Problems:
 * - middle-of-the-linked-list (Easy)
 * - remove-linked-list-elements (Easy)
 * - remove-nth-node-from-end-of-list (Medium)
 * - reorder-list (Medium)
 */

/**
 * Approach: Fast and Slow Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `head.length`
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteMiddle = (head) => {
        if (!head.next) {
                return null;
        }

        let pre = null;
        let slow = head;
        let fast = head;

        while (fast?.next) {
                pre = slow;
                slow = slow.next;
                fast = fast.next.next;
        }

        pre.next = slow.next;

        return head;
};

export { deleteMiddle };
