/**
 * 0658. Find K Closest Elements
 *
 * Link: https://leetcode.com/problems/find-k-closest-elements/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Binary Search (topic_11)
 * - Sliding Window (topic_55821)
 * - Sorting (topic_61049)
 * - Heap (Priority Queue) (topic_61050)
 *
 * Stats:
 * - Total Accepted: 808,692
 * - Total Submissions: 1,631,840
 * - Acceptance Rate: 49.6%
 *
 * Similar Problems:
 * - find-closest-number-to-zero (Easy)
 * - guess-number-higher-or-lower (Easy)
 * - guess-number-higher-or-lower-ii (Medium)
 * - find-k-th-smallest-pair-distance (Hard)
 */

/**
 * Approach: Binary Search + Sliding Window [Optimal]
 * Time Complexity: O(log(n - k) + k)
 * Space Complexity: O(1) auxiliary, O(k) total
 *
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findClosestElements = (arr, k, x) => {
        let l = 0;
        let r = arr.length - k;

        while (l < r) {
                const m = l + Math.floor((r - l) / 2);

                if (arr[m + k] - x < x - arr[m]) {
                        l = m + 1;
                } else {
                        r = m;
                }
        }

        return arr.slice(l, l + k);
};

/**
 * Approach: Binary Search + Two Pointers
 * Time Complexity: O(log n + k)
 * Space Complexity: O(1) auxiliary, O(k) total
 *
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findClosestElements1 = (arr, k, x) => {
        const n = arr.length;
        let l = 0;
        let r = n - 1;

        while (l < r) {
                const m = l + Math.floor((r - l) / 2);
                const val = arr[m];

                if (val < x) {
                        l = m + 1;
                } else {
                        r = m;
                }
        }

        const idx =
                Math.abs(arr[l - 1] - x) <= Math.abs(arr[l] - x) ? l - 1 : l;
        let count = 1;
        l = idx;
        r = idx;

        while (count < k) {
                count++;

                if (l > 0 && r < n - 1) {
                        const prevDiff = Math.abs(arr[l - 1] - x);
                        const nextDiff = Math.abs(arr[r + 1] - x);

                        if (prevDiff <= nextDiff) {
                                l--;
                        } else {
                                r++;
                        }
                } else if (l > 0) {
                        l--;
                } else {
                        r++;
                }
        }

        return arr.slice(l, r + 1);
};

export { findClosestElements, findClosestElements1 };
