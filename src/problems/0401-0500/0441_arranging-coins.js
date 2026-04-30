/**
 * 0441. Arranging Coins
 *
 * Link: https://leetcode.com/problems/arranging-coins/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-30
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - Binary Search (topic_11)
 *
 * Stats:
 * - Total Accepted: 622,736
 * - Total Submissions: 1,292,989
 * - Acceptance Rate: 48.2%
 */

/**
 * Approach: Binary Search
 * Time Complexity: O(log (2 * sqrt(n))) = O(log sqrt(n))
 * Space Complexity: O(1)
 *
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = (n) => {
        let ok = 1;
        let ng = Math.floor(Math.sqrt(2 * n)) + 1;

        while (ng - ok > 1) {
                const k = ok + ((ng - ok) >> 1);
                const cnt = (k * (k + 1)) / 2;

                if (cnt <= n) {
                        ok = k;
                } else {
                        ng = k;
                }
        }

        return ok;
};

export { arrangeCoins };
