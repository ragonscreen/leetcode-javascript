/**
 * 0075. Sort Colors
 *
 * Link: https://leetcode.com/problems/sort-colors/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 3,675,783
 * - Total Submissions: 5,295,334
 * - Acceptance Rate: 69.4%
 *
 * Similar Problems:
 * - sort-list (Medium)
 * - wiggle-sort (Medium)
 * - wiggle-sort-ii (Medium)
 */

/**
 * Approach: Three Pointers (Dutch National Flag Algorithm)
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} nums
 * @return {void}
 */
const sortColors = (nums) => {
        for (let i = 0, l = 0, r = nums.length - 1; i <= r; i++) {
                if (nums[i] === 0) {
                        [nums[i], nums[l]] = [nums[l], nums[i]];
                        l++;
                } else if (nums[i] === 2) {
                        [nums[i], nums[r]] = [nums[r], nums[i]];
                        r--;
                        i--;
                }
        }
};

/**
 * Approach: Counting Sort
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} nums
 * @return {void}
 */
const sortColors1 = (nums) => {
        const arr = [0, 0, 0];

        for (const num of nums) {
                arr[num]++;
        }

        for (let i = 0, j = 0; i < nums.length; i++) {
                while (!arr[j]) {
                        j++;
                }

                nums[i] = j;
                arr[j]--;
        }
};

/**
 * Approach: Insertion Sort
 * Time Complexity: O(n^2)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} nums
 * @return {void}
 */
const sortColors2 = (nums) => {
        for (let i = 1; i < nums.length; i++) {
                const num = nums[i];
                let idx = i;

                while (num < nums[idx - 1]) {
                        nums[idx] = nums[--idx];
                }

                nums[idx] = num;
        }
};

export { sortColors, sortColors1, sortColors2 };
