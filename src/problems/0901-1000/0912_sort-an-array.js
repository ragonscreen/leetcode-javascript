/**
 * 0912. Sort an Array
 *
 * Link: https://leetcode.com/problems/sort-an-array/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-04
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
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
 * - Total Accepted: 1,125,575
 * - Total Submissions: 2,013,332
 * - Acceptance Rate: 55.9%
 */

/**
 * Approach: Counting Sort
 * Time Complexity: O(n + d)
 * Space Complexity: O(d) auxiliary, O(n + d) total
 * `n` = length of `nums`, `d` = difference between maximum and minimum value in `nums`
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = (nums) => {
        const n = nums.length;
        let max = nums[0];
        let min = nums[0];

        for (let i = 1; i < n; i++) {
                const num = nums[i];
                max = Math.max(max, num);
                min = Math.min(min, num);
        }

        const d = max - min + 1;
        const buckets = new Uint32Array(d);

        for (let i = 0; i < n; i++) {
                buckets[nums[i] - min]++;
        }

        const res = new Int32Array(n);

        for (let i = 0, j = 0; i < d; i++) {
                let cnt = buckets[i];

                while (cnt) {
                        res[j++] = i + min;
                        cnt--;
                }
        }

        return res;
};

/**
 * Approach: Merge Sort
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray1 = (nums) => {
        const merge = (A, l, m, r) => {
                const L = A.slice(l, m + 1);
                const R = A.slice(m + 1, r + 1);
                const nl = L.length;
                const nr = R.length;
                let p = 0;
                let q = 0;
                let i = l;

                while (p < nl && q < nr) {
                        if (L[p] <= R[q]) {
                                A[i++] = L[p++];
                        } else {
                                A[i++] = R[q++];
                        }
                }

                while (p < nl) {
                        A[i++] = L[p++];
                }

                while (q < nr) {
                        A[i++] = R[q++];
                }
        };

        const mergeSort = (A, l, r) => {
                if (l >= r) {
                        return;
                }

                const m = Math.floor((l + r) / 2);
                mergeSort(A, l, m);
                mergeSort(A, m + 1, r);
                merge(A, l, m, r);
        };

        mergeSort(nums, 0, nums.length - 1);

        return nums;
};

/**
 * Approach: Insertion Sort [TLE]
 * Time Complexity: O(n^2)
 * Space Complexity: O(1) auxiliary, O(n)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray2 = (nums) => {
        for (let i = 1; i < nums.length; i++) {
                const num = nums[i];
                let j = i - 1;

                while (j > -1 && nums[j] > num) {
                        nums[j + 1] = nums[j--];
                }

                nums[j + 1] = num;
        }

        return nums;
};

export { sortArray, sortArray1, sortArray2 };
