/**
 * 2130. Maximum Twin Sum of a Linked List
 *
 * Link: https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Linked List (topic_7)
 * - Two Pointers (topic_9)
 * - Stack (topic_15)
 * - Senior (position_senior)
 * - Biweekly Contest 69 (contest_biweekly-contest-69)
 *
 * Stats:
 * - Total Accepted: 531,019
 * - Total Submissions: 646,998
 * - Acceptance Rate: 82.1%
 *
 * Similar Problems:
 * - middle-of-the-linked-list (Easy)
 * - palindrome-linked-list (Easy)
 * - reverse-linked-list (Easy)
 */

/**
 * Approach: Simulation [Space Optimized]
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `head.length`
 *
 * @param {ListNode} head
 * @return {number}
 */
const pairSum = (head) => {
        let slow = head;
        let fast = head;

        while (fast) {
                slow = slow.next;
                fast = fast.next.next;
        }

        let pre = null;
        let cur = slow;

        while (cur) {
                const nxt = cur.next;
                cur.next = pre;
                pre = cur;
                cur = nxt;
        }

        let res = 0;
        let l = head;
        let r = pre;

        while (r) {
                res = Math.max(res, l.val + r.val);
                l = l.next;
                r = r.next;
        }

        return res;
};

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `head.length`
 *
 * @param {ListNode} head
 * @return {number}
 */
const pairSum1 = (head) => {
        const vals = [];
        let cur = head;

        while (cur) {
                vals.push(cur.val);
                cur = cur.next;
        }

        const n = vals.length;
        let res = 0;

        for (let i = 0; i < n; i++) {
                res = Math.max(res, vals[i] + vals[n - i - 1]);
        }

        return res;
};

export { pairSum, pairSum1 };
