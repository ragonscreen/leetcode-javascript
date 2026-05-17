/**
 * 1306. Jump Game III
 *
 * Link: https://leetcode.com/problems/jump-game-iii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-30
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Depth-First Search (topic_21)
 * - Breadth-First Search (topic_22)
 *
 * Stats:
 * - Total Accepted: 300,504
 * - Total Submissions: 449,653
 * - Acceptance Rate: 66.8%
 *
 * Similar Problems:
 * - jump-game (Medium)
 * - jump-game-ii (Medium)
 * - jump-game-vii (Medium)
 * - jump-game-viii (Medium)
 * - maximum-number-of-jumps-to-reach-the-last-index (Medium)
 */

/**
 * Approach: DFS
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
const canReach = (arr, start) => {
        const dfs = (i) => {
                const val = arr[i];

                if (i < 0 || i >= arr.length || val < 0) {
                        return false;
                }

                if (val === 0) {
                        return true;
                }

                arr[i] = -1;

                return dfs(i + val) || dfs(i - val);
        };

        return dfs(start);
};

/**
 * Approach: BFS
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
const canReach1 = (arr, start) => {
        const q = [start];
        let qi = 0;

        while (qi < q.length) {
                const i = q[qi++];
                const val = arr[i];

                if (val === 0) {
                        return true;
                }

                arr[i] = -1;

                for (const d of [val, -val]) {
                        const j = i + d;

                        if (j < 0 || j >= arr.length || arr[j] < 0) {
                                continue;
                        }

                        q.push(j);
                }
        }

        return false;
};

export { canReach, canReach1 };
