/**
 * 1011. Capacity To Ship Packages Within D Days
 *
 * Link: https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 *
 * Stats:
 * - Total Accepted: 752,707
 * - Total Submissions: 1,021,347
 * - Acceptance Rate: 73.7%
 *
 * Similar Problems:
 * - cutting-ribbons (Medium)
 * - maximum-bags-with-full-capacity-of-rocks (Medium)
 * - minimized-maximum-of-products-distributed-to-any-store (Medium)
 * - divide-chocolate (Hard)
 * - minimum-total-distance-traveled (Hard)
 * - split-array-largest-sum (Hard)
 */

/**
 * Approach: Binary Search
 * Time Complexity: O(n log (j - k))
 * Space Complexity: O(1)
 * `n` = length of `weights`, `j` = sum of all values in `weights`, `k` = maximum value in `weights`
 *
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
const shipWithinDays = (weights, days) => {
        const check = (size) => {
                let count = 1;
                let curr = 0;

                for (const w of weights) {
                        if (curr + w > size) {
                                curr = 0;
                                count++;
                        }

                        if (count > days) {
                                return false;
                        }

                        curr += w;
                }

                return true;
        };

        let l = 0;
        let r = 0;

        for (const w of weights) {
                l = Math.max(l, w);
                r += w;
        }

        while (l < r) {
                const m = l + Math.floor((r - l) / 2);
                const isValid = check(m);

                if (isValid) {
                        r = m;
                } else {
                        l = m + 1;
                }
        }

        return r;
};

export { shipWithinDays };
