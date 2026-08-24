/**
 * 1331. Rank Transform of an Array
 *
 * Link: https://leetcode.com/problems/rank-transform-of-an-array/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-08-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Sorting (topic_61049)
 * - Mid Level (position_mid-level)
 * - Biweekly Contest 18 (contest_biweekly-contest-18)
 *
 * Stats:
 * - Total Accepted: 462,842
 * - Total Submissions: 625,644
 * - Acceptance Rate: 74.0%
 *
 * Similar Problems:
 * - find-target-indices-after-sorting-array (Easy)
 * - rank-transform-of-a-matrix (Hard)
 */

/**
 * Approach: Sorting + Binary Search
 * Time Complexity: O(n lg n)
 * Space Complexity: O(n)
 * `n` = `arr.length`
 *
 * @param {number[]} arr
 * @return {number[]}
 */
const arrayRankTransform = (arr) => {
        const n = arr.length;
        const cpy = new Int32Array(new Set(arr)).sort();
        const m = cpy.length;
        const res = new Uint32Array(n);

        for (let i = 0; i < n; i++) {
                const num = arr[i];
                let ok = 0;
                let ng = m;

                while (Math.abs(ok - ng) > 1) {
                        const mid = (ok + ng) >> 1;

                        if (cpy[mid] <= num) {
                                ok = mid;
                        } else {
                                ng = mid;
                        }
                }

                res[i] = ok + 1;
        }

        return res;
};

/**
 * Approach: Sorting
 * Time Complexity: O(n lg n)
 * Space Complexity: O(n)
 * `n` = `arr.length`
 *
 * @param {number[]} arr
 * @return {number[]}
 */
const arrayRankTransform1 = (arr) => {
        const n = arr.length;
        const cpy = [...arr].sort((a, b) => a - b);
        const rank = new Map();

        for (let i = 0, ri = 1; i < n; i++) {
                const num = cpy[i];

                if (num === cpy[i + 1]) {
                        continue;
                }

                rank.set(num, ri++);
        }

        const res = new Uint32Array(n);

        for (let i = 0; i < n; i++) {
                res[i] = rank.get(arr[i]);
        }

        return res;
};

export { arrayRankTransform, arrayRankTransform1 };
