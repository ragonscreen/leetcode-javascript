/**
 * 3048. Earliest Second to Mark Indices I
 *
 * Link: https://leetcode.com/problems/earliest-second-to-mark-indices-i/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Staff (position_staff)
 * - Weekly Contest 386 (contest_weekly-contest-386)
 *
 * Stats:
 *
 * - Total Accepted: 11,888
 * - Total Submissions: 32,134
 * - Acceptance Rate: 37.0%
 */

/**
 * Approach: Binary Search
 * Time Complexity: O((m + n) lg m)
 * Space Complexity: O(n)
 * `n` = `nums.length`, `m` = `changeIndices.length`
 *
 * @param {number[]} nums
 * @param {number[]} changeIndices
 * @returns {number}
 */
const earliestSecondToMarkIndices = (nums, changeIndices) => {
        const n = nums.length;
        const m = changeIndices.length;
        const lastIdx = new Int32Array(n);

        const check = (t) => {
                lastIdx.fill(-1);

                for (let i = t - 1; i > -1; i--) {
                        const idx = changeIndices[i] - 1;

                        if (lastIdx[idx] === -1) {
                                lastIdx[idx] = i;
                        }
                }

                for (let i = 0; i < n; i++) {
                        if (lastIdx[i] === -1) {
                                return false;
                        }
                }

                let cnt = 0;

                for (let i = 0; i < t; i++) {
                        const idx = changeIndices[i] - 1;

                        if (i === lastIdx[idx]) {
                                const num = nums[idx];

                                if (cnt < num) {
                                        return false;
                                }

                                cnt -= num;
                        } else {
                                cnt++;
                        }
                }

                return true;
        };

        let l = 0;
        let r = m + 1;

        while (l < r) {
                const mid = (l + r) >> 1;

                if (check(mid)) {
                        r = mid;
                } else {
                        l = mid + 1;
                }
        }

        return r === m + 1 ? -1 : r;
};

export { earliestSecondToMarkIndices };
