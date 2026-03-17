/**
 * 0360. Sort Transformed Array
 *
 * Link: https://leetcode.com/problems/sort-transformed-array/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-06
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - Two Pointers (topic_9)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 76,255
 * - Total Submissions: 131,498
 * - Acceptance Rate: 58.0%
 *
 * Similar Problems:
 * - squares-of-a-sorted-array (Easy)
 * - minimum-time-to-repair-cars (Medium)
 */

/**
 * Approach: Math + Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
const sortTransformedArray = (nums, a, b, c) => {
        const f = (x) => a * x ** 2 + b * x + c;
        const n = nums.length;
        let l = 0;
        let r = n - 1;
        const res = new Array(n);
        let idx = a >= 0 ? n - 1 : 0;

        while (l <= r) {
                const nl = f(nums[l]);
                const nr = f(nums[r]);

                if (a >= 0) {
                        if (nl < nr) {
                                res[idx] = nr;
                                r--;
                        } else {
                                res[idx] = nl;
                                l++;
                        }

                        idx--;
                } else {
                        if (nl < nr) {
                                res[idx] = nl;
                                l++;
                        } else {
                                res[idx] = nr;
                                r--;
                        }

                        idx++;
                }
        }

        return res;
};

/**
 * Approach: Counting Sort [TLE]
 * Time Complexity: O(n)
 * Space Complexity: O(m)
 * `n` = length of `nums`, `m` = maximum value of ax^2 + bx + c
 *
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
const sortTransformedArray1 = (nums, a, b, c) => {
        const f = (x) => a * x ** 2 + b * x + c;
        const max = 100; // from constraints
        const len = max ** 3 + max ** 2 + max;
        const buckets = new Array(len * 2 + 1);
        const n = nums.length;
        const fnums = new Array(n);

        for (let i = 0; i < nums.length; i++) {
                fnums[i] = f(nums[i]);
        }

        const idx0 = len + 1;

        for (const num of fnums) {
                const abs = Math.abs(num);
                let i = idx0;

                if (num < 0) {
                        i = idx0 - abs;
                } else if (num > 0) {
                        i = idx0 + abs;
                }

                buckets[i] ??= [];
                buckets[i].push(num);
        }

        const res = new Array(n);
        let idx = 0;

        for (let i = 0; i < buckets.length; i++) {
                let count = buckets[i]?.length;

                while (count--) {
                        res[idx++] = i - idx0;
                }
        }

        return res;
};

export { sortTransformedArray, sortTransformedArray1 };
