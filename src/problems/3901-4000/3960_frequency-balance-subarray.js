/**
 * 3960. Frequency Balance Subarray
 *
 * Link: https://leetcode.com/problems/frequency-balance-subarray/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Weekly Contest 506 (contest_weekly-contest-506)
 *
 * Stats:
 * - Total Accepted: 10,539
 * - Total Submissions: 46,686
 * - Acceptance Rate: 22.6%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const getLength = (nums) => {
        const n = nums.length;
        let res = 1;

        for (let i = 0; i < n; i++) {
                const frq = new Map();
                const frc = new Map();
                let mxf = 0;

                for (let j = i; j < n; j++) {
                        const val = nums[j];
                        const fOld = frq.get(val) ?? 0;
                        const fNew = fOld + 1;
                        mxf = Math.max(mxf, fNew);
                        frq.set(val, fNew);
                        frc.set(fNew, (frc.get(fNew) ?? 0) + 1);

                        if (fOld > 0) {
                                const cntOld = frc.get(fOld) - 1;

                                if (cntOld === 0) {
                                        frc.delete(fOld);
                                } else {
                                        frc.set(fOld, cntOld);
                                }
                        }

                        if (
                                frq.size === 1 ||
                                (frc.size === 2 && frc.has(mxf / 2))
                        ) {
                                res = Math.max(res, j - i + 1);
                        }
                }
        }

        return res;
};

export { getLength };
