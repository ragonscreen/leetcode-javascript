/**
 * 0015. 3Sum
 *
 * Link: https://leetcode.com/problems/3sum/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-01-19 (Updated: 2026-03-09)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 5,746,162
 * - Total Submissions: 14,852,094
 * - Acceptance Rate: 38.7%
 *
 * Similar Problems:
 * - minimum-sum-of-mountain-triplets-i (Easy)
 * - number-of-arithmetic-triplets (Easy)
 * - two-sum (Easy)
 * - 3sum-closest (Medium)
 * - 3sum-smaller (Medium)
 * - 4sum (Medium)
 * - minimum-sum-of-mountain-triplets-ii (Medium)
 */

/**
 * Approach: Two Pointers
 * Time Complexity: O(n^2)
 * Space Complexity: O(n) for sorting, O(n + m) total
 * `n` = length of `nums`, `m` = number of triplets in `nums`
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
        nums.sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < nums.length; i++) {
                if (nums[i] > 0) {
                        break;
                }

                if (nums[i] === nums[i - 1]) {
                        continue;
                }

                const target = -nums[i];
                let l = i + 1;
                let r = nums.length - 1;

                while (l < r) {
                        const sum = nums[l] + nums[r];

                        if (sum < target) {
                                l++;
                        } else if (sum > target) {
                                r--;
                        } else {
                                res.push([nums[i], nums[l++], nums[r--]]);

                                while (l < r && nums[l] === nums[l - 1]) {
                                        l++;
                                }

                                while (l < r && nums[r] === nums[r + 1]) {
                                        r--;
                                }
                        }
                }
        }

        return res;
};

export { threeSum };
