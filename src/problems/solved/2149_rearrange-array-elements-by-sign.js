/**
 * 2149. Rearrange Array Elements by Sign
 * Link: https://leetcode.com/problems/rearrange-array-elements-by-sign/
 * Difficulty: Medium
 * Date: 2026-03-13
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const rearrangeArray = (nums) => {
        const res = new Array(nums.length);
        let idxPos = 0;
        let idxNeg = 1;

        for (const num of nums) {
                if (num > 0) {
                        res[idxPos] = num;
                        idxPos += 2;
                } else {
                        res[idxNeg] = num;
                        idxNeg += 2;
                }
        }

        return res;
};

export { rearrangeArray };
