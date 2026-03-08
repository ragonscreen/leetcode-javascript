/**
 * 0268. Missing Number
 * Link: https://leetcode.com/problems/missing-number/
 * Difficulty: Easy
 * Date: 2026-03-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Bit Manipulation (Optimal)
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
 * Implementation: Math (Optimal)
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
 * Implementation: Cyclic Simulation
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
 * Implementation: Simulation
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
