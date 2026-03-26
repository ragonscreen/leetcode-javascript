/**
 * 0632. Smallest Range Covering Elements from K Lists
 *
 * Link: https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-03-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Greedy (topic_17)
 * - Sliding Window (topic_55821)
 * - Sorting (topic_61049)
 * - Heap (Priority Queue) (topic_61050)
 *
 * Stats:
 * - Total Accepted: 241,360
 * - Total Submissions: 344,280
 * - Acceptance Rate: 70.1%
 *
 * Similar Problems:
 * - minimum-window-substring (Hard)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O((n * m) + (n * k))
 * Space Complexity: O(k)
 * `n` = length of `nums`, `m` = length of `nums[i]`
 * `k` = absolute difference between the max and min number in `nums[i]`
 *
 * @param {number[][]} nums
 * @return {number[]}
 */
const smallestRange = (nums) => {
        const n = nums.length;
        let min = nums[0][0];
        let max = nums[0][0];

        for (const a of nums) {
                for (const num of a) {
                        min = Math.min(min, num);
                        max = Math.max(max, num);
                }
        }

        const size = max - min + 1;
        const arr = new Array(size);

        for (let i = 0; i < n; i++) {
                for (const num of nums[i]) {
                        const idx = num - min;
                        arr[idx] ??= [];
                        arr[idx].push(i);
                }
        }

        const map = new Map();
        let minWidth = size;
        let res = [];

        for (let l = 0, r = 0; r < arr.length; r++) {
                if (!arr[r]) {
                        continue;
                }

                for (const idx of arr[r]) {
                        map.set(idx, (map.get(idx) || 0) + 1);
                }

                while (map.size === n) {
                        while (!arr[l]) {
                                l++;
                        }

                        if (r - l < minWidth) {
                                minWidth = r - l;
                                res = [l + min, r + min];
                        }

                        for (const idx of arr[l]) {
                                const val = map.get(idx);

                                if (val === 1) {
                                        map.delete(idx);
                                } else {
                                        map.set(idx, val - 1);
                                }
                        }

                        l++;
                }
        }

        return res;
};

export { smallestRange };
