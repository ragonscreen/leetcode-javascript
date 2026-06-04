/**
 * 0841. Keys and Rooms
 *
 * Link: https://leetcode.com/problems/keys-and-rooms/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-04
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Depth-First Search (topic_21)
 * - Breadth-First Search (topic_22)
 * - Graph Theory (topic_24)
 * - Staff (position_staff)
 * - Weekly Contest 86 (contest_weekly-contest-86)
 *
 * Stats:
 * - Total Accepted: 698,744
 * - Total Submissions: 921,837
 * - Acceptance Rate: 75.8%
 *
 * Similar Problems:
 * - graph-valid-tree (Medium) (Premium)
 */

/**
 * Approach: BFS
 * Time Complexity: O(n + k)
 * Space Complexity: O(n)
 * `n` = `rooms.length`, `k` = `sum(rooms[i].length)`
 *
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = (rooms) => {
        const n = rooms.length;
        const set = new Uint8Array(n);
        set[0] = 1;
        const q = [0];

        for (let qi = 0; qi < q.length; qi++) {
                const idx = q[qi];
                const room = rooms[idx];

                if (!set[idx] || room === -1) {
                        continue;
                }

                for (let j = 0; j < room.length; j++) {
                        const jdx = room[j];

                        if (rooms[jdx] === -1) {
                                continue;
                        }

                        set[jdx] = 1;
                        q.push(jdx);
                }

                rooms[idx] = -1;
        }

        for (let i = 0; i < n; i++) {
                if (rooms[i] !== -1) {
                        return false;
                }
        }

        return true;
};

export { canVisitAllRooms };
