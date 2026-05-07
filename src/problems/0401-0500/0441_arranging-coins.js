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
 * Approach: Math
 * Time Complexity: O(lg n)
 * Space Complexity: O(1)
 *
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = (n) => {
        // let k be number of rows to hold n coins
        // k * (k + 1) / 2 = n
        // k^2 + k = 2n
        // k^2 + k - 2n = 0
        // (-1 + sqrt(1^2 - 4 * 1 * (-2n))) / 2 = 0
        // (-1 + sqrt(1 + 8n)) / 2 = 0
        // (-1 + sqrt(4 * (0.25 + 2n))) / 2 = 0
        // (-1 + 2 * sqrt(0.25 + 2n)) / 2 = 0
        // -0.5 + sqrt(0.25 + 2n) = 0
        // sqrt(2n + 0.25) - 0.5 = 0

        return Math.floor(Math.sqrt(2 * n + 0.25) - 0.5);
};

/**
 * Approach: Binary Search
 * Time Complexity: O(lg (2 * sqrt(n))) = O(lg sqrt(n))
 * Space Complexity: O(1)
 *
 * @param {number} n
 * @return {number}
 */
const arrangeCoins1 = (n) => {
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

export { arrangeCoins, arrangeCoins1 };
