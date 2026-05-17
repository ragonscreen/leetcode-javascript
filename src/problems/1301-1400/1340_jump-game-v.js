/**
 * 1340. Jump Game V
 *
 * Link: https://leetcode.com/problems/jump-game-v/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-05-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Dynamic Programming (topic_13)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 43,222
 * - Total Submissions: 66,467
 * - Acceptance Rate: 65.0%
 *
 * Similar Problems:
 * - jump-game-vii (Medium)
 * - jump-game-viii (Medium)
 */

/**
 * Approach: DFS + Memoization
 * Time Complexity: O(n * d)
 * Space Complexity: O(n)
 *
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
const maxJumps = (arr, d) => {
        const n = arr.length;
        const memo = new Uint16Array(n);

        const dfs = (i) => {
                const have = memo[i];

                if (have) {
                        return have;
                }

                const l = Math.max(0, i - d);
                const r = Math.min(n - 1, i + d);
                let max = 1;

                for (let j = i - 1; j >= l && arr[j] < arr[i]; j--) {
                        max = Math.max(max, 1 + dfs(j));
                }

                for (let j = i + 1; j <= r && arr[j] < arr[i]; j++) {
                        max = Math.max(max, 1 + dfs(j));
                }

                memo[i] = max;

                return max;
        };

        let res = 1;

        for (let i = 0; i < n; i++) {
                res = Math.max(res, dfs(i));
        }

        return res;
};

export { maxJumps };
