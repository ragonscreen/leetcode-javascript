/**
 * 0122. Best Time to Buy and Sell Stock II
 * Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * Difficulty: Medium
 * Date: 2026-03-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Greedy
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
