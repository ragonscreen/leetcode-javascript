/**
 * 2616. Minimize the Maximum Difference of Pairs
 *
 * Link: https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-10
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Dynamic Programming (topic_13)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 169,515
 * - Total Submissions: 333,006
 * - Acceptance Rate: 50.9%
 *
 * Similar Problems:
 * - minimum-absolute-difference (Easy)
 * - minimum-difference-between-largest-and-smallest-value-in-three-moves (Medium)
 */

/**
 * Approach: Sorting + Binary Search + Greedy
 * Time Complexity: O(n log n + n log m)
 * Space Complexity: O(1) auxiliary, O(n) for sorting
 * `n` = length of `nums`, `m` = difference between maximum and minimum value in `nums`
 *
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
const minimizeMax = (nums, p) => {
        nums.sort((a, b) => a - b);
        let l = 0;
        let r = nums.at(-1) - nums[0];

        const isValidDiff = (diff) => {
                let cnt = 0;

                for (let i = 1; i < nums.length; i++) {
                        if (nums[i] - nums[i - 1] <= diff) {
                                cnt++;
                                i++;
                        }

                        if (cnt >= p) {
                                return true;
                        }
                }

                return false;
        };

        while (l < r) {
                const m = l + Math.floor((r - l) / 2);

                if (isValidDiff(m)) {
                        r = m;
                } else {
                        l = m + 1;
                }
        }

        return r;
};

export { minimizeMax };
