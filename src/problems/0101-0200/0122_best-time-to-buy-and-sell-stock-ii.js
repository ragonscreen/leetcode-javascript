/**
 * 0122. Best Time to Buy and Sell Stock II
 *
 * Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Dynamic Programming (topic_13)
 * - Greedy (topic_17)
 *
 * Stats:
 * - Total Accepted: 2,960,020
 * - Total Submissions: 4,179,340
 * - Acceptance Rate: 70.8%
 *
 * Similar Problems:
 * - best-time-to-buy-and-sell-stock (Easy)
 * - best-time-to-buy-and-sell-stock-with-cooldown (Medium)
 * - best-time-to-buy-and-sell-stock-with-transaction-fee (Medium)
 * - maximum-profit-from-trading-stocks (Medium)
 * - best-time-to-buy-and-sell-stock-iii (Hard)
 * - best-time-to-buy-and-sell-stock-iv (Hard)
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
        let res = 0;

        for (let i = 0; i < prices.length - 1; i++) {
                const profit = prices[i + 1] - prices[i];

                if (profit > 0) {
                        res += profit;
                }
        }

        return res;
};

export { maxProfit };
