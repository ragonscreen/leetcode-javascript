/**
 * 0015. 3Sum
 * Link: https://leetcode.com/problems/3sum/
 * Difficulty: Medium
 * Date: 2026-01-19
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Two Pointers
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
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
