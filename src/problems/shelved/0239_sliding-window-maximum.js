/**
 * 0239. Sliding Window Maximum
 * Link: https://leetcode.com/problems/sliding-window-maximum/
 * Difficulty: Hard
 * Date: 2026-02-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation:
 * Time Complexity: O()
 * Space Complexity: O()
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = (nums, k) => {};

// const maxSlidingWindow = (nums, k) => {
//         const res = [];
//         let l = 0;
//         let r = k;
//         let max = Math.max(...nums.slice(l, r));

//         while (r <= nums.length) {
//                 res.push(max);

//                 if (nums[r] === undefined) {
//                         break;
//                 }

//                 if (nums[r] > max) {
//                         max = nums[r];
//                 }

//                 if (nums[l] === max) {
//                         max = Math.max(...nums.slice(l + 1, r + 1));
//                 }

//                 l++;
//                 r++;
//         }

//         return res;
// };

// const maxSlidingWindow = (nums, k) => {
//         const res = [];
//         let l = 0;
//         let r = k;

//         while (r <= nums.length) {
//                 res.push(Math.max(...nums.slice(l++, r++)));
//         }

//         return res;
// };

export { maxSlidingWindow };
