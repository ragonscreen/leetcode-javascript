/**
 * 0135. Candy
 *
 * Link: https://leetcode.com/problems/candy/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-04-16
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Greedy (topic_17)
 *
 * Stats:
 * - Total Accepted: 1,034,271
 * - Total Submissions: 2,142,404
 * - Acceptance Rate: 48.3%
 *
 * Similar Problems:
 * - check-if-grid-satisfies-conditions (Easy)
 * - minimum-number-of-operations-to-satisfy-conditions (Medium)
 * - minimize-maximum-value-in-a-grid (Hard)
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} ratings
 * @return {number}
 */
const candy = (ratings) => {
        const n = ratings.length;
        const streak = new Array(n);
        let curr = 1;

        for (let i = 0; i < n; i++) {
                curr = ratings[i] > ratings[i - 1] ? curr + 1 : 1;
                streak[i] = curr;
        }

        let res = 0;
        curr = 1;

        for (let i = n - 1; i > -1; i--) {
                curr = ratings[i] > ratings[i + 1] ? curr + 1 : 1;
                res += Math.max(streak[i], curr);
        }

        return res;
};

export { candy };
