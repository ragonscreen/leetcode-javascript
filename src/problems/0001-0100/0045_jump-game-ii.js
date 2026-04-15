/**
 * 0045. Jump Game II
 *
 * Link: https://leetcode.com/problems/jump-game-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-16
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Dynamic Programming (topic_13)
 * - Greedy (topic_17)
 *
 * Stats:
 * - Total Accepted: 2,115,589
 * - Total Submissions: 4,954,067
 * - Acceptance Rate: 42.7%
 *
 * Similar Problems:
 * - jump-game (Medium)
 * - jump-game-iii (Medium)
 * - jump-game-vii (Medium)
 * - jump-game-viii (Medium)
 * - maximum-number-of-jumps-to-reach-the-last-index (Medium)
 * - visit-array-positions-to-maximize-score (Medium)
 * - minimum-number-of-visited-cells-in-a-grid (Hard)
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums) => {
        const n = nums.length;

        if (n <= 1) {
                return 0;
        }

        let res = 1;
        let i = 0;

        while (nums[i]) {
                if (i + nums[i] >= n - 1) {
                        return res;
                }

                let max = -1;
                let next = -1;

                for (let j = i + 1; j <= i + nums[i]; j++) {
                        if (nums[j] === 0) {
                                continue;
                        }

                        const finalIdx = j + nums[j];

                        if (finalIdx >= max) {
                                max = finalIdx;
                                next = j;
                        }
                }

                i = next;
                res++;
        }

        return -1;
};

export { jump };
