/**
 * 0229. Majority Element II
 * Link: https://leetcode.com/problems/majority-element-ii/
 * Difficulty: Medium
 * Date: 2026-02-05
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation:
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = (nums) => {
        const set = new Set();
        const min = Math.floor(nums.length / 3);
        let frq = 0;
        let val = 0;

        for (const num of nums) {
                if (set.has(num)) {
                        continue;
                }

                if (frq === 0) {
                        val = num;
                        frq++;
                } else if (num === val) {
                        frq++;
                } else {
                        frq--;
                }

                if (frq > min) {
                        set.add(num);
                        frq = 0;
                        val = 0;
                }
        }

        return [...set];
};

// const majorityElement = (nums) => {
//         const set = new Set();
//         const min = Math.floor(nums.length / 3);
//         let frq = 0;
//         let val = 0;

//         for (const num of nums) {
//                 if (frq === 0) {
//                         val = num;
//                         frq++;

//                         if (frq > min) {
//                                 set.add(num);
//                         }
//                 } else if (num === val) {
//                         frq++;

//                         if (frq > min) {
//                                 set.add(num);
//                         }
//                 } else {
//                         frq--;
//                 }
//         }

//         return [...set];
// };

/**
 * Implementation: Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement1 = (nums) => {
        const set = new Set();
        const map = {};

        for (const num of nums) {
                const frq = (map[num] || 0) + 1;
                map[num] = frq;

                if (frq > Math.floor(nums.length / 3)) {
                        set.add(num);
                }
        }

        return [...set];
};

export { majorityElement, majorityElement1 };
