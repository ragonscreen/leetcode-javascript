/**
 * 2483. Minimum Penalty for a Shop
 *
 * Link: https://leetcode.com/problems/minimum-penalty-for-a-shop/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-23
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 234,637
 * - Total Submissions: 329,413
 * - Acceptance Rate: 71.2%
 *
 * Similar Problems:
 * - grid-game (Medium)
 * - minimum-amount-of-damage-dealt-to-bob (Hard)
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} customers
 * @return {number}
 */
const bestClosingTime = (customers) => {
        let max = 0;
        let maxI = 0;
        let cnt = 0;

        for (let i = 0; i < customers.length; i++) {
                cnt += customers[i] === 'Y' ? 1 : -1;

                if (cnt > max) {
                        max = cnt;
                        maxI = i + 1;
                }
        }

        return maxI;
};

export { bestClosingTime };
