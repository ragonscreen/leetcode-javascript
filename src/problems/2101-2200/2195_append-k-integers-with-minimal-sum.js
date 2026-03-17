/**
 * 2195. Append K Integers With Minimal Sum
 *
 * Link: https://leetcode.com/problems/append-k-integers-with-minimal-sum/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-09
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 41,796
 * - Total Submissions: 155,506
 * - Acceptance Rate: 26.9%
 *
 * Similar Problems:
 * - find-all-numbers-disappeared-in-an-array (Easy)
 * - kth-missing-positive-number (Easy)
 * - maximum-number-of-integers-to-choose-from-a-range-i (Medium)
 * - maximum-number-of-integers-to-choose-from-a-range-ii (Medium)
 * - remove-k-digits (Medium)
 */

/**
 * Approach: Greedy + Hash Set + Math [Optimal]
 * Time Complexity: O(n + k)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimalKSum = (nums, k) => {
        const set = new Set(nums);
        let sum = (k * (k + 1)) / 2;
        let cur = k + 1;

        for (const num of set) {
                while (set.has(cur)) {
                        cur++;
                }

                if (num <= k) {
                        sum = sum - num + cur;
                        set.add(cur++);
                }
        }

        return sum;
};

/**
 * Approach: Sorting [TLE]
 * Time Complexity: O(n log n)
 * Space Complexity: O(n) for sorting
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimalKSum1 = (nums, k) => {
        nums.sort((a, b) => a - b);
        let sum = 0;
        let cur = 1;
        let _k = k;

        for (let i = 0; i < nums.length; i++) {
                const num = nums[i];

                if (num === nums[i - 1]) {
                        continue;
                }

                while (cur !== num && _k) {
                        sum += cur;
                        cur++;
                        _k--;
                }

                if (cur === num) {
                        cur++;
                }
        }

        while (_k--) {
                sum += cur;
                cur++;
        }

        return sum;
};

/**
 * Approach: Hash Set [TLE]
 * Time Complexity: O(k)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimalKSum2 = (nums, k) => {
        const set = new Set(nums);
        let sum = 0;
        let num = 1;
        let _k = k;

        while (_k) {
                if (set.has(num)) {
                        num++;
                } else {
                        sum += num;
                        num++;
                        _k--;
                }
        }

        return sum;
};

/**
 * Approach: Counting Sort [TLE]
 * Time Complexity: O(n)
 * Space Complexity: O(m)
 * `n` = length of `nums`, `m` = maximum number in `nums`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimalKSum3 = (nums, k) => {
        let max = 0;

        for (const num of nums) {
                max = Math.max(max, num);
        }

        const arr = new Array(max + 1);

        for (const num of nums) {
                arr[num] = true;
        }

        let sum = 0;
        let idx = 1;
        let _k = k;

        while (_k) {
                if (arr[idx]) {
                        idx++;
                        continue;
                }

                sum += idx;
                idx++;
                _k--;
        }

        return sum;
};

export { minimalKSum, minimalKSum1, minimalKSum2, minimalKSum3 };
