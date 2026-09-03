/**
 * 628. Maximum Product of Three Numbers
 *
 * Link: https://leetcode.com/problems/maximum-product-of-three-numbers/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-07-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Math (topic_8)
 * - Sorting (topic_61049)
 * - Mid Level (position_mid-level)
 *
 * Stats:
 *
 * - Total Accepted: 517,376
 * - Total Submissions: 1,121,259
 * - Acceptance Rate: 46.1%
 *
 * Similar Problems:
 *
 * - maximum-product-of-three-elements-after-one-replacement (Medium)
 * - maximum-product-subarray (Medium)
 */

/**
 * Approach: Math + Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @returns {number}
 */
const maximumProduct = (nums) => {
        const n = nums.length;

        if (n === 3) {
                return nums[0] * nums[1] * nums[2];
        }

        const NINF = Number.MIN_SAFE_INTEGER;
        let cntNeg = 0;
        let cntPos = 0;
        let mnNeg1 = 1;
        let mnNeg2 = 1;
        let mxNeg1 = NINF;
        let mxNeg2 = NINF;
        let mxNeg3 = NINF;
        let mxPos1 = -1;
        let mxPos2 = -1;
        let mxPos3 = -1;

        for (let i = 0; i < n; i++) {
                const num = nums[i];

                if (num < 0) {
                        cntNeg++;

                        // smallest two negatives
                        if (num < mnNeg1) {
                                mnNeg2 = mnNeg1;
                                mnNeg1 = num;
                        } else if (num < mnNeg2) {
                                mnNeg2 = num;
                        }

                        // largest three negatives
                        if (num > mxNeg1) {
                                mxNeg3 = mxNeg2;
                                mxNeg2 = mxNeg1;
                                mxNeg1 = num;
                        } else if (num > mxNeg2) {
                                mxNeg3 = mxNeg2;
                                mxNeg2 = num;
                        } else if (num > mxNeg3) {
                                mxNeg3 = num;
                        }
                }

                if (num > 0) {
                        cntPos++;

                        // largest three positives
                        if (num > mxPos1) {
                                mxPos3 = mxPos2;
                                mxPos2 = mxPos1;
                                mxPos1 = num;
                        } else if (num > mxPos2) {
                                mxPos3 = mxPos2;
                                mxPos2 = num;
                        } else if (num > mxPos3) {
                                mxPos3 = num;
                        }
                }
        }

        const cntNz = cntPos + cntNeg;
        const cntZ = n - cntNz;

        // not enough non-zero numbers / zero greedy construction possible
        if (cntNz < 3 || (cntNeg === 1 && cntPos === 2) || (cntPos === 0 && cntZ >= 1)) {
                return 0;
        }

        // must choose three negatives
        if (cntPos === 0) {
                return mxNeg1 * mxNeg2 * mxNeg3;
        }

        // must choose three positives
        if (cntNeg <= 1) {
                return mxPos1 * mxPos2 * mxPos3;
        }

        const negMult = mnNeg2 * mnNeg1;
        const posMult = mxPos3 * mxPos2;

        return Math.max(negMult, posMult) * mxPos1;
};

export { maximumProduct };
