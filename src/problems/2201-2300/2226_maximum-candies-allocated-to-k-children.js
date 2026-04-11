/**
 * 2226. Maximum Candies Allocated to K Children
 *
 * Link: https://leetcode.com/problems/maximum-candies-allocated-to-k-children/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-11
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 *
 * Stats:
 * - Total Accepted: 205,474
 * - Total Submissions: 411,908
 * - Acceptance Rate: 49.9%
 *
 * Similar Problems:
 * - koko-eating-bananas (Medium)
 * - maximize-happiness-of-selected-children (Medium)
 * - maximum-number-of-removable-characters (Medium)
 * - minimize-maximum-of-array (Medium)
 * - minimized-maximum-of-products-distributed-to-any-store (Medium)
 * - minimum-limit-of-balls-in-a-bag (Medium)
 * - minimum-speed-to-arrive-on-time (Medium)
 * - minimum-time-to-complete-trips (Medium)
 */

/**
 * Approach: Binary Search
 * Time Complexity: O(n log m)
 * Space Complexity: O(1)
 * `n` = length of `candies`, `m` = maximum value in `candies`
 *
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
const maximumCandies = (candies, k) => {
        const isValid = (val) => {
                let count = 0;

                for (const candy of candies) {
                        count += Math.floor(candy / val);

                        if (count >= k) {
                                return true;
                        }
                }

                return false;
        };

        let l = 0;
        let r = Math.max(...candies);

        while (l < r) {
                const m = l + ((r - l) >> 1);

                if (isValid(m + 1)) {
                        l = m + 1;
                } else {
                        r = m;
                }
        }

        return l;
};

export { maximumCandies };
