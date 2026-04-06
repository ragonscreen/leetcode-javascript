/**
 * 0410. Split Array Largest Sum
 *
 * Link: https://leetcode.com/problems/split-array-largest-sum/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-04-06
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Dynamic Programming (topic_13)
 * - Greedy (topic_17)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 622,192
 * - Total Submissions: 1,034,490
 * - Acceptance Rate: 60.1%
 *
 * Similar Problems:
 * - distribute-elements-into-two-arrays-i (Easy)
 * - capacity-to-ship-packages-within-d-days (Medium)
 * - fair-distribution-of-cookies (Medium)
 * - number-of-ways-to-split-array (Medium)
 * - subsequence-of-size-k-with-the-largest-even-sum (Medium)
 * - distribute-elements-into-two-arrays-ii (Hard)
 * - divide-chocolate (Hard)
 * - maximum-total-beauty-of-the-gardens (Hard)
 * - minimum-cost-to-split-an-array (Hard)
 */

/**
 * Approach: Binary Search
 * Time Complexity: O(n log (j - k))
 * Space Complexity: O(1)
 * `n` = length of `nums`, `j` = sum of all values in `nums`, `k` = maximum value in `nums`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const splitArray = (nums, k) => {
        const isValidSplit = (total) => {
                let count = 1;
                let sum = 0;

                for (const num of nums) {
                        if (sum + num > total) {
                                sum = 0;
                                count++;
                        }

                        if (count > k) {
                                return false;
                        }

                        sum += num;
                }

                return true;
        };

        let l = 0;
        let r = 0;

        for (const num of nums) {
                l = Math.max(l, num);
                r += num;
        }

        while (l < r) {
                const m = l + Math.floor((r - l) / 2);

                if (isValidSplit(m)) {
                        r = m;
                } else {
                        l = m + 1;
                }
        }

        return l;
};

export { splitArray };
