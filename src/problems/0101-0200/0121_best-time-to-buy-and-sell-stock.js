/**
 * 0121. Best Time to Buy and Sell Stock
 *
 * Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-01-22
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Dynamic Programming (topic_13)
 *
 * Stats:
 * - Total Accepted: 7,729,666
 * - Total Submissions: 13,684,290
 * - Acceptance Rate: 56.5%
 *
 * Similar Problems:
 * - maximum-difference-between-increasing-elements (Easy)
 * - best-time-to-buy-and-sell-stock-ii (Medium)
 * - best-time-to-buy-and-sell-stock-v (Medium)
 * - best-time-to-buy-and-sell-stock-with-cooldown (Medium)
 * - maximum-profit-from-trading-stocks (Medium)
 * - maximum-subarray (Medium)
 * - sum-of-beauty-in-the-array (Medium)
 * - best-time-to-buy-and-sell-stock-iii (Hard)
 * - best-time-to-buy-and-sell-stock-iv (Hard)
 */

/**
 * Approach: Dynamic Programming
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
        let maxVal = 0;
        let maxPft = 0;

        for (let i = prices.length - 1; i >= 0; i--) {
                maxVal = Math.max(prices[i], maxVal);
                maxPft = Math.max(maxPft, maxVal - prices[i]);
        }

        return maxPft;
};

/**
 * Approach: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit1 = (prices) => {
        let max = 0;
        let l = 0;
        let r = 1;

        while (r < prices.length) {
                const profit = prices[r] - prices[l];
                max = Math.max(max, profit);

                if (prices[r] < prices[l]) {
                        l = r;
                }

                r++;
        }

        return max;
};

export { maxProfit, maxProfit1 };
