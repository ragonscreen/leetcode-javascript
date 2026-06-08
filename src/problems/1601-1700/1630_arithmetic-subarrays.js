/**
 * 1630. Arithmetic Subarrays
 *
 * Link: https://leetcode.com/problems/arithmetic-subarrays/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-24 (Updated: 2026-06-08)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Sorting (topic_61049)
 * - Senior (position_senior)
 * - Weekly Contest 212 (contest_weekly-contest-212)
 *
 * Stats:
 * - Total Accepted: 158,374
 * - Total Submissions: 189,108
 * - Acceptance Rate: 83.7%
 *
 * Similar Problems:
 * - can-make-arithmetic-progression-from-sequence (Easy)
 * - arithmetic-slices (Medium)
 */

/**
 * Approach: Math
 * Time Complexity: O(n * q)
 * Space Complexity: O(1) auxiliary, O(q) total
 * `n` = `nums.length`, `q` = `l.length`
 *
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
const checkArithmeticSubarrays = (nums, l, r) => {
        const check = (li, ri) => {
                const cnt = ri - li + 1;
                let min = nums[li];
                let max = nums[li];

                for (let i = li; i <= ri; i++) {
                        const num = nums[i];
                        min = Math.min(min, num);
                        max = Math.max(max, num);
                }

                const diff = max - min;

                if (diff === 0) {
                        return true;
                }

                const diffs = new Uint8Array(cnt);
                const div = diff / (cnt - 1);

                for (let i = li; i <= ri; i++) {
                        const x = nums[i] - min;

                        if (x % div !== 0) {
                                return false;
                        }

                        const pos = x / div;

                        if (diffs[pos]) {
                                return false;
                        }

                        diffs[pos] = 1;
                }

                return true;
        };

        const q = l.length;
        const res = new Array(q);

        for (let i = 0; i < q; i++) {
                res[i] = check(l[i], r[i]);
        }

        return res;
};

export { checkArithmeticSubarrays };
