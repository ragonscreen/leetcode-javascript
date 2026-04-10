/**
 * 2064. Minimized Maximum of Products Distributed to Any Store
 *
 * Link: https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-10
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Greedy (topic_17)
 *
 * Stats:
 * - Total Accepted: 150,740
 * - Total Submissions: 239,093
 * - Acceptance Rate: 63.0%
 *
 * Similar Problems:
 * - capacity-to-ship-packages-within-d-days (Medium)
 * - find-the-smallest-divisor-given-a-threshold (Medium)
 * - koko-eating-bananas (Medium)
 * - magnetic-force-between-two-balls (Medium)
 * - maximum-candies-allocated-to-k-children (Medium)
 * - minimum-limit-of-balls-in-a-bag (Medium)
 * - minimum-time-to-complete-trips (Medium)
 * - maximum-number-of-robots-within-budget (Hard)
 */

/**
 * Approach: Binary Search
 * Time Complexity: O(m log k)
 * Space Complexity: O(1)
 * `m` = length of `quantities`, `k` = maximum value in `quantities`
 *
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
const minimizedMaximum = (n, quantities) => {
        const isValid = (quantity) => {
                let cnt = 0;

                for (const q of quantities) {
                        cnt += Math.ceil(q / quantity);

                        if (cnt > n) {
                                return false;
                        }
                }

                return true;
        };

        let l = 0;
        let r = Math.max(...quantities);

        while (l < r) {
                const m = l + ((r - l) >> 1);

                if (isValid(m)) {
                        r = m;
                } else {
                        l = m + 1;
                }
        }

        return r;
};

export { minimizedMaximum };
