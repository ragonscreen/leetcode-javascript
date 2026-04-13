/**
 * 2563. Count the Number of Fair Pairs
 *
 * Link: https://leetcode.com/problems/count-the-number-of-fair-pairs/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-13
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Binary Search (topic_11)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 238,320
 * - Total Submissions: 452,448
 * - Acceptance Rate: 52.7%
 *
 * Similar Problems:
 * - count-number-of-pairs-with-absolute-difference-k (Easy)
 * - count-pairs-whose-sum-is-less-than-target (Easy)
 * - finding-pairs-with-a-certain-sum (Medium)
 * - count-of-range-sum (Hard)
 */

/**
 * Approach: Sorting + Binary Search
 * Time Complexity: O(n log n)
 * Space Complexity: O(1) auxiliary, O(n) for sorting
 *
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
const countFairPairs = (nums, lower, upper) => {
        const n = nums.length;
        nums.sort((a, b) => a - b);

        const lb = (num, i) => {
                let l = i;
                let r = n - 1;

                while (l < r) {
                        const m = (l + r) >>> 1;

                        if (num + nums[m] < lower) {
                                l = m + 1;
                        } else {
                                r = m;
                        }
                }

                return num + nums[l] >= lower ? l : -1;
        };

        const ub = (num, i) => {
                let l = i;
                let r = n;

                while (l < r) {
                        const m = (l + r) >>> 1;

                        if (num + nums[m] <= upper) {
                                l = m + 1;
                        } else {
                                r = m;
                        }
                }

                return num + nums[l - 1] <= upper ? l - 1 : -1;
        };

        let res = 0;

        for (let i = 0; i < n; i++) {
                const num = nums[i];
                const p = lb(num, i + 1);
                const q = ub(num, i + 1);

                if (p !== -1 && q !== -1) {
                        res += q - p + 1;
                }
        }

        return res;
};

export { countFairPairs };
