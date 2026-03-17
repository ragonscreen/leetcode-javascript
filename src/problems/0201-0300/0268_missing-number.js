/**
 * 0268. Missing Number
 *
 * Link: https://leetcode.com/problems/missing-number/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-03-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Math (topic_8)
 * - Binary Search (topic_11)
 * - Bit Manipulation (topic_19)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 3,789,664
 * - Total Submissions: 5,282,474
 * - Acceptance Rate: 71.7%
 *
 * Similar Problems:
 * - find-the-largest-almost-missing-integer (Easy)
 * - single-number (Easy)
 * - find-the-duplicate-number (Medium)
 * - find-unique-binary-string (Medium)
 * - couples-holding-hands (Hard)
 * - first-missing-positive (Hard)
 */

/**
 * Approach: Bit Manipulation [Optimal]
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
        let expectedXor = 0;

        for (let i = 1; i <= nums.length; i++) {
                expectedXor ^= i;
        }

        let xor = 0;

        for (const num of nums) {
                xor ^= num;
        }

        return expectedXor ^ xor;
};

/**
 * Approach: Math [Optimal]
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber1 = (nums) => {
        const n = nums.length;
        const expectedSum = (n * (n + 1)) / 2;
        let sum = 0;

        for (const num of nums) {
                sum += num;
        }

        return expectedSum - sum;
};

/**
 * Approach: Cyclic Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber2 = (nums) => {
        for (const n of nums) {
                let v = n;

                while (v < nums.length && nums[v] >= 0) {
                        const t = nums[v];
                        nums[v] = -1;
                        v = t;
                }
        }

        for (let i = 0; i < nums.length; i++) {
                if (nums[i] >= 0) {
                        return i;
                }
        }

        return nums.length;
};

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber3 = (nums) => {
        const arr = new Array(nums.length + 1);

        for (const n of nums) {
                arr[n] = true;
        }

        for (let i = 0; i < arr.length; i++) {
                if (!arr[i]) {
                        return i;
                }
        }
};

export { missingNumber, missingNumber1, missingNumber2, missingNumber3 };
