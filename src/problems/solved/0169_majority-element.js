/**
 * 0169. Majority Element
 * Link: https://leetcode.com/problems/majority-element/
 * Difficulty: Easy
 * Date: 2026-02-05
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Randomisation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
        while (true) {
                const val = nums[Math.floor(Math.random() * nums.length)];
                let frq = 0;

                for (const num of nums) {
                        if (num === val) {
                                frq++;
                        }
                }

                if (frq > Math.floor(nums.length / 2)) {
                        return val;
                }
        }
};

/**
 * Implementation: Boyer-Moore majority vote algorithm
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement1 = (nums) => {
        let frq = 0;
        let res = 0;

        for (const n of nums) {
                if (frq === 0) {
                        res = n;
                        frq++;
                } else if (n === res) {
                        frq++;
                } else {
                        frq--;
                }
        }

        return res;
};

/**
 * Implementation: Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement2 = (nums) => {
        const map = {};
        let res = 0;
        let max = 0;

        for (const num of nums) {
                const frq = (map[num] || 0) + 1;
                map[num] = frq;

                if (frq > max) {
                        res = num;
                        max = frq;
                }
        }

        return res;
};

export { majorityElement, majorityElement1, majorityElement2 };
