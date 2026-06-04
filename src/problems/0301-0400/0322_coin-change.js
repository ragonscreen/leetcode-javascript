/**
 * 0322. Coin Change
 *
 * Link: https://leetcode.com/problems/coin-change/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-04
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Dynamic Programming (topic_13)
 * - Breadth-First Search (topic_22)
 *
 * Stats:
 * - Total Accepted: 2,887,017
 * - Total Submissions: 5,954,086
 * - Acceptance Rate: 48.5%
 *
 * Similar Problems:
 * - minimum-number-of-operations-to-convert-time (Easy)
 * - inverse-coin-change (Medium)
 * - length-of-the-longest-subsequence-that-sums-to-target (Medium)
 * - minimum-cost-for-tickets (Medium)
 * - minimum-number-of-coins-to-be-added (Medium)
 * - most-expensive-item-that-can-not-be-bought (Medium) (Premium)
 * - count-of-sub-multisets-with-bounded-sum (Hard)
 * - maximum-value-of-k-coins-from-piles (Hard)
 * - minimum-cost-to-split-an-array (Hard)
 */

/**
 * Approach: BFS
 * Time Complexity: O(N * K)
 * Space Complexity: O(K)
 * `N` = `coins.length`, `K` = `amount`
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
        if (amount === 0) {
                return 0;
        }

        const v = new Uint8Array(amount + 1);
        v[amount] = 1;
        let q = [amount];
        let res = 1;

        while (q.length) {
                const q2 = [];

                for (let qi = 0; qi < q.length; qi++) {
                        const num = q[qi];

                        for (let j = 0; j < coins.length; j++) {
                                const nxt = num - coins[j];

                                if (nxt === 0) {
                                        return res;
                                }

                                if (nxt < 0 || v[nxt]) {
                                        continue;
                                }

                                q2.push(nxt);
                                v[nxt] = 1;
                        }
                }

                q = q2;
                res++;
        }

        return -1;
};

export { coinChange };
