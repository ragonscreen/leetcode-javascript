/**
 * 0055. Jump Game
 *
 * Link: https://leetcode.com/problems/jump-game/
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
 * - Total Accepted: 3,158,356
 * - Total Submissions: 7,755,842
 * - Acceptance Rate: 40.7%
 *
 * Similar Problems:
 * - jump-game-ii (Medium)
 * - jump-game-iii (Medium)
 * - jump-game-vii (Medium)
 * - jump-game-viii (Medium)
 * - largest-element-in-an-array-after-merge-operations (Medium)
 * - minimum-number-of-visited-cells-in-a-grid (Hard)
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
        const n = nums.length;

        if (n <= 1) {
                return true;
        }

        let i = 0;

        while (nums[i]) {
                if (i + nums[i] >= n - 1) {
                        return true;
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
        }

        return false;
};

export { canJump };
