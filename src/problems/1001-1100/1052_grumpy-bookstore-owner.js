/**
 * 1052. Grumpy Bookstore Owner
 *
 * Link: https://leetcode.com/problems/grumpy-bookstore-owner/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-19
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 235,363
 * - Total Submissions: 367,849
 * - Acceptance Rate: 64.0%
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n + k)
 * Space Complexity: O(n)
 * `n` = length of `customers`, `k` = `minutes`
 *
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
const maxSatisfied = (customers, grumpy, minutes) => {
        const n = customers.length;
        let bestDiff = -1;
        let bestLeft = -1;
        let bestRight = -1;
        let real = 0;
        let ideal = 0;

        for (let i = 0; i < minutes; i++) {
                const val = customers[i];
                ideal += val;
                real += grumpy[i] ? 0 : val;
        }

        let diff = ideal - real;

        if (diff > bestDiff) {
                bestDiff = diff;
                bestLeft = 0;
                bestRight = minutes - 1;
        }

        let res = real;

        for (let l = 0, r = minutes; r < n; l++, r++) {
                const cr = customers[r];
                const cl = customers[l];
                const add = grumpy[r] ? 0 : cr;
                ideal += cr - cl;
                res += add;
                real += add;
                real -= grumpy[l] ? 0 : cl;
                diff = ideal - real;

                if (diff > bestDiff) {
                        bestDiff = diff;
                        bestLeft = l + 1;
                        bestRight = r;
                }
        }

        for (let i = bestLeft; i <= bestRight; i++) {
                res += grumpy[i] ? customers[i] : 0;
        }

        return res;
};

export { maxSatisfied };
