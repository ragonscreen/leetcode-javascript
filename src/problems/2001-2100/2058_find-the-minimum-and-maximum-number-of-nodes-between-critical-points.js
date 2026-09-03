/**
 * 2058. Find the Minimum and Maximum Number of Nodes Between Critical Points
 *
 * Link:
 * https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/
 * Category: Algorithms Difficulty: Medium Date: 2026-08-31 Author: ragonscreen
 * (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Linked List (topic_7)
 * - Senior (position_senior)
 * - Weekly Contest 265 (contest_weekly-contest-265)
 *
 * Stats:
 *
 * - Total Accepted: 265,252
 * - Total Submissions: 371,594
 * - Acceptance Rate: 71.4%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `head.length`
 *
 * @param {ListNode} head
 * @returns {number[]}
 */
const nodesBetweenCriticalPoints = (head) => {
        const INF = Number.MAX_SAFE_INTEGER;
        let pre = null;
        let cur = head;
        let i = 0;
        let first = -1;
        let last = -1;
        let mn = INF;

        while (cur) {
                const val = cur.val;
                const nxt = cur.next;
                const pv = pre?.val;
                const nv = nxt?.val;

                if ((val < pv && val < nv) || (val > pv && val > nv)) {
                        if (first < 0) {
                                first = i;
                        } else {
                                mn = Math.min(mn, i - last);
                        }

                        last = i;
                }

                pre = cur;
                cur = nxt;
                i++;
        }

        return mn === INF ? [-1, -1] : [mn, last - first];
};

export { nodesBetweenCriticalPoints };
