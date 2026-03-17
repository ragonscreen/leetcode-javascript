/**
 * 0018. 4Sum
 *
 * Link: https://leetcode.com/problems/4sum/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-09
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 1,629,064
 * - Total Submissions: 4,055,068
 * - Acceptance Rate: 40.2%
 *
 * Similar Problems:
 * - count-special-quadruplets (Easy)
 * - two-sum (Easy)
 * - 3sum (Medium)
 * - 4sum-ii (Medium)
 */

/**
 * Approach: Sorting + Two Pointers
 * Time Complexity: O(n^3)
 * Space Complexity: O(1) auxiliary, O(n) for sorting, O(n) total
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
        nums.sort((a, b) => a - b);
        const res = [];
        const n = nums.length;

        for (let i = 0; i < n; i++) {
                const a = nums[i];

                if (a === nums[i - 1]) {
                        continue;
                }

                for (let j = i + 1; j < n; j++) {
                        const b = nums[j];

                        if (j > i + 1 && b === nums[j - 1]) {
                                continue;
                        }

                        const _target = target - (a + b);
                        let l = j + 1;
                        let r = n - 1;

                        while (l < r) {
                                const sum = nums[l] + nums[r];

                                if (sum < _target) {
                                        l++;
                                } else if (sum > _target) {
                                        r--;
                                } else {
                                        res.push([a, b, nums[l++], nums[r--]]);

                                        while (
                                                l < r &&
                                                nums[l] === nums[l - 1]
                                        ) {
                                                l++;
                                        }

                                        while (
                                                l < r &&
                                                nums[r] === nums[r + 1]
                                        ) {
                                                r--;
                                        }
                                }
                        }
                }
        }

        return res;
};

export { fourSum };
