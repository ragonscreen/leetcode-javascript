/**
 * 388. Longest Absolute File Path
 *
 * Link: https://leetcode.com/problems/longest-absolute-file-path/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - String (topic_10)
 * - Stack (topic_15)
 * - Depth-First Search (topic_21)
 * - Junior (position_junior)
 *
 * Stats:
 *
 * - Total Accepted: 190,322
 * - Total Submissions: 381,002
 * - Acceptance Rate: 50.0%
 */

/**
 * Approach: DFS + Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `input.length`
 *
 * @param {string} input
 * @returns {number}
 */
const lengthLongestPath = (input) => {
        const dirs = input.split('\n');
        const n = dirs.length;

        const std = new Int16Array(n + 1);
        let spd = 0;
        std[spd++] = -1;

        const stl = new Int16Array(n + 1);
        let spl = 0;
        stl[spl++] = 0;

        let res = 0;

        for (let i = 0; i < n; i++) {
                const s = dirs[i];
                let depth = 0;

                while (s[depth] === '\t') depth++;

                while (depth <= std[spd - 1]) {
                        spd--;
                        spl--;
                }

                const len = stl[spl - 1] + s.length - depth;
                std[spd++] = depth;
                stl[spl++] = len;

                if (s.includes('.')) res = Math.max(res, len + depth);
        }

        return res;
};

export { lengthLongestPath };
