/**
 * 3917. Count Indices With Opposite Parity
 *
 * Link: https://leetcode.com/problems/count-indices-with-opposite-parity/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-05-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Stats:
 * - Total Accepted: 24,207
 * - Total Submissions: 30,052
 * - Acceptance Rate: 80.6%
 */

/**
 * Approach: Prefix Sum
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const countOppositeParity = (nums) => {
        const n = nums.length;
        const res = new Uint8Array(n);
        let cntOdd = 0;
        let cntEven = 0;

        for (let i = n - 1; i > -1; i--) {
                if (nums[i] % 2) {
                        cntOdd++;
                        res[i] = cntEven;
                } else {
                        cntEven++;
                        res[i] = cntOdd;
                }
        }

        return res;
};

export { countOppositeParity };
