/**
 * 2833. Furthest Point From Origin
 *
 * Link: https://leetcode.com/problems/furthest-point-from-origin/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Counting (topic_61062)
 *
 * Stats:
 * - Total Accepted: 63,163
 * - Total Submissions: 96,119
 * - Acceptance Rate: 65.7%
 *
 * Similar Problems:
 * - robot-return-to-origin (Easy)
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} moves
 * @return {number}
 */
const furthestDistanceFromOrigin = (moves) => {
        let pos = 0;
        let cnt = 0;

        for (const m of moves) {
                if (m === 'L') {
                        pos--;
                } else if (m === 'R') {
                        pos++;
                } else {
                        cnt++;
                }
        }

        return Math.abs(pos) + cnt;
};

export { furthestDistanceFromOrigin };
