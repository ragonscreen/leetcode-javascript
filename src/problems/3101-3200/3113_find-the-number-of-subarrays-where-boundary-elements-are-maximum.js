/**
 * 3113. Find the Number of Subarrays Where Boundary Elements Are Maximum
 *
 * Link: https://leetcode.com/problems/find-the-number-of-subarrays-where-boundary-elements-are-maximum/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-04-30
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Stack (topic_15)
 * - Monotonic Stack (topic_61054)
 *
 * Stats:
 * - Total Accepted: 14,801
 * - Total Submissions: 44,623
 * - Acceptance Rate: 33.2%
 *
 * Similar Problems:
 * - count-subarrays-where-max-element-appears-at-least-k-times (Medium)
 * - number-of-subarrays-with-bounded-maximum (Medium)
 * - count-subarrays-with-fixed-bounds (Hard)
 */

/**
 * Approach: Monotonic Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const numberOfSubarrays = (nums) => {
        const stack = [];
        let res = 0;

        for (const num of nums) {
                while (stack.length && stack.at(-1)[0] < num) {
                        stack.pop();
                }

                const top = stack.at(-1);

                if (!stack.length || top[0] > num) {
                        // keep monotonically decreasing order
                        stack.push([num, 1]);
                        res++;
                } else {
                        // top[0] === num
                        // add cnt subarrays ending at this pos
                        const cnt = top[1] + 1;
                        res += cnt;
                        top[1] = cnt;
                }
        }

        return res;
};

export { numberOfSubarrays };
