/**
 * 1524. Number of Sub-arrays With Odd Sum
 *
 * Link: https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - Dynamic Programming (topic_13)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 175,797
 * - Total Submissions: 315,454
 * - Acceptance Rate: 55.7%
 *
 * Similar Problems:
 * - subsequence-of-size-k-with-the-largest-even-sum (Medium)
 */

/**
 * Approach: Prefix Sum
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} arr
 * @return {number}
 */
const numOfSubarrays = (arr) => {
        const n = arr.length;
        let res = 0;
        let prefix = 0;
        let prefixesOdd = 0;
        let prefixesEven = 1;

        for (let i = 0; i < n; i++) {
                prefix += arr[i];

                if (prefix % 2) {
                        res += prefixesEven;
                        prefixesOdd++;
                } else {
                        res += prefixesOdd;
                        prefixesEven++;
                }

                res %= 10 ** 9 + 7;
        }

        return res;
};

export { numOfSubarrays };
