/**
 * 0239. Sliding Window Maximum
 *
 * Link: https://leetcode.com/problems/sliding-window-maximum/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-02-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Queue (topic_34)
 * - Sliding Window (topic_55821)
 * - Heap (Priority Queue) (topic_61050)
 * - Monotonic Queue (topic_61071)
 *
 * Stats:
 * - Total Accepted: 1,622,072
 * - Total Submissions: 3,343,119
 * - Acceptance Rate: 48.5%
 *
 * Similar Problems:
 * - jump-game-vi (Medium)
 * - longest-substring-with-at-most-two-distinct-characters (Medium)
 * - maximal-score-after-applying-k-operations (Medium)
 * - maximum-tastiness-of-candy-basket (Medium)
 * - min-stack (Medium)
 * - maximum-number-of-robots-within-budget (Hard)
 * - minimum-window-substring (Hard)
 * - paint-house-ii (Hard)
 */

/**
 * NOTES:
 * Use Heap/Monotonic Queue?
 *
 *
 *
 * Approach:
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
