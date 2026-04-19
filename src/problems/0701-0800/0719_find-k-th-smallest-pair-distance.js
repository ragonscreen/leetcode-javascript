/**
 * 0719. Find K-th Smallest Pair Distance
 *
 * Link: https://leetcode.com/problems/find-k-th-smallest-pair-distance/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-04-19
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Binary Search (topic_11)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 212,489
 * - Total Submissions: 457,181
 * - Acceptance Rate: 46.5%
 *
 * Similar Problems:
 * - find-k-closest-elements (Medium)
 * - find-k-pairs-with-smallest-sums (Medium)
 * - k-th-smallest-prime-fraction (Medium)
 * - kth-smallest-element-in-a-sorted-matrix (Medium)
 * - maximize-score-of-numbers-in-ranges (Medium)
 * - find-the-median-of-the-uniqueness-array (Hard)
 * - kth-smallest-number-in-multiplication-table (Hard)
 */

/**
 * Approach: Binary Search + Sliding Window [Optimal]
 * Time Complexity: O(n log n + n log d)
 * Space Complexity: O(1) auxiliary, O(n) for sorting
 * `n` = length of `nums`, `d` = difference between maximum and minimum value in `nums`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const smallestDistancePair = (nums, k) => {
        nums.sort((a, b) => a - b);
        const n = nums.length;

        const check = (target) => {
                let count = 0;

                for (let l = 0, r = 1; r < n; r++) {
                        while (l < r && nums[r] - nums[l] > target) {
                                l++;
                        }

                        count += r - l;

                        if (count >= k) {
                                return true;
                        }
                }

                return false;
        };

        let ok = nums.at(-1) - nums[0];
        let ng = -1;

        while (Math.abs(ok - ng) > 1) {
                const m = (ok + ng) >> 1;

                if (check(m)) {
                        ok = m;
                } else {
                        ng = m;
                }
        }

        return ok;
};

/**
 * Approach: Binary Search
 * Time Complexity: O(n log n + n log n log d)
 * Space Complexity: O(1) auxiliary, O(n) for sorting
 * `n` = length of `nums`, `d` = difference between maximum and minimum value in `nums`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const smallestDistancePair1 = (nums, k) => {
        nums.sort((a, b) => a - b);
        const n = nums.length;

        const check = (target) => {
                let count = 0;
                let l = 1;

                for (let i = 0; i < n; i++) {
                        let r = n;

                        while (l < r) {
                                const m = l + ((r - l) >> 1);

                                if (nums[m] - nums[i] <= target) {
                                        l = m + 1;
                                } else {
                                        r = m;
                                }
                        }

                        if (nums[l - 1] - nums[i] <= target) {
                                count += l - 1 - i;
                        }

                        if (count >= k) {
                                return true;
                        }
                }

                return false;
        };

        let ok = nums.at(-1) - nums[0];
        let ng = -1;

        while (Math.abs(ok - ng) > 1) {
                const m = (ok + ng) >> 1;

                if (check(m)) {
                        ok = m;
                } else {
                        ng = m;
                }
        }

        return ok;
};

export { smallestDistancePair, smallestDistancePair1 };
