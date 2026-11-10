/**
 * 1385. Find the Distance Value Between Two Arrays
 *
 * Link: https://leetcode.com/problems/find-the-distance-value-between-two-arrays/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-11-10
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Binary Search (topic_11)
 * - Sorting (topic_61049)
 * - Mid Level (position_mid-level)
 * - Biweekly Contest 22 (contest_biweekly-contest-22)
 *
 * Stats:
 *
 * - Total Accepted: 271,540
 * - Total Submissions: 345,754
 * - Acceptance Rate: 78.5%
 */

/**
 * Approach: Sorting + Binary Search
 * Time Complexity: O((m + n) lg m)
 * Space Complexity: O(1) auxiliary, O(m) total
 * `n` = `arr1.length`, `m` = `arr2.length`
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @returns {number}
 */
const findTheDistanceValue = (arr1, arr2, d) => {
        const m = arr2.length;
        arr2.sort((a, b) => a - b);
        let res = arr1.length;

        for (const v of arr1) {
                let l = -1;
                let r = m;

                while (r - l > 1) {
                        const mid = (l + r) >> 1;

                        if (arr2[mid] < v) l = mid;
                        else r = mid;
                }

                res -= v - arr2[l] <= d || arr2[l + 1] - v <= d;
        }

        return res;
};

export { findTheDistanceValue };
