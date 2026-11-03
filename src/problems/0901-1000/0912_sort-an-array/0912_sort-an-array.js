/**
 * 912. Sort an Array
 *
 * Link: https://leetcode.com/problems/sort-an-array/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-04 (Updated: 2026-11-03)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Divide and Conquer (topic_12)
 * - Sorting (topic_61049)
 * - Heap (Priority Queue) (topic_61050)
 * - Merge Sort (topic_61051)
 * - Bucket Sort (topic_61060)
 * - Radix Sort (topic_61061)
 * - Counting Sort (topic_61072)
 *
 * Stats:
 *
 * - Total Accepted: 1,125,575
 * - Total Submissions: 2,013,332
 * - Acceptance Rate: 55.9%
 */

/**
 * Approach: Counting Sort
 * Time Complexity: O(n + K)
 * Space Complexity: O(K) auxiliary, O(n + K) total
 * `n` = `nums.length`, `K` = `max(nums[i]) - min(nums[i])`
 *
 * @param {number[]} nums
 * @returns {number[]}
 */
const sortArray = (nums) => {
        const n = nums.length;
        let mx = nums[0];
        let mn = nums[0];

        for (let i = 1; i < n; i++) {
                const v = nums[i];

                if (v > mx) mx = v;
                else if (v < mn) mn = v;
        }

        const k = mx - mn + 1;
        const b = new Uint32Array(k);

        for (let i = 0; i < n; i++) b[nums[i] - mn]++;

        const res = new Int32Array(n);

        for (let v = 0, ri = 0; v < k; v++) {
                let cnt = b[v];

                while (cnt--) res[ri++] = v + mn;
        }

        return res;
};

/**
 * Approach: Merge Sort
 * Time Complexity: O(n lg n)
 * Space Complexity: O(n)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @returns {number[]}
 */
const sortArray1 = (nums) => {
        const n = nums.length;
        const arr = Int32Array.from(nums);
        const buf = new Int32Array(n);

        const merge = (l, m, r) => {
                let bi = 0;
                let p = l;
                let q = m + 1;

                while (p <= m && q <= r) buf[bi++] = arr[p] <= arr[q] ? arr[p++] : arr[q++];
                while (p <= m) buf[bi++] = arr[p++];
                while (q <= r) buf[bi++] = arr[q++];

                bi = 0;

                for (let i = l; i <= r; i++, bi++) arr[i] = buf[bi];
        };

        const mergeSort = (l, r) => {
                if (l >= r) return;

                const m = (l + r) >> 1;
                mergeSort(l, m);
                mergeSort(m + 1, r);
                merge(l, m, r);
        };

        mergeSort(0, n - 1);

        return arr;
};

/**
 * Approach: Insertion Sort [TLE]
 * Time Complexity: O(n^2)
 * Space Complexity: O(1) auxiliary, O(n) total
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @returns {number[]}
 */
const sortArray2 = (nums) => {
        for (let i = 1; i < nums.length; i++) {
                const v = nums[i];
                let j = i - 1;

                while (j > -1 && nums[j] > v) nums[j + 1] = nums[j--];

                nums[j + 1] = v;
        }

        return nums;
};

export { sortArray, sortArray1, sortArray2 };
