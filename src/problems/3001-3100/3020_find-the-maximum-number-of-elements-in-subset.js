/**
 * 3020. Find the Maximum Number of Elements in Subset
 *
 * Link: https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-07-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Enumeration (topic_61066)
 * - Senior (position_senior)
 * - Weekly Contest 382 (contest_weekly-contest-382)
 *
 * Stats:
 * - Total Accepted: 114,403
 * - Total Submissions: 270,521
 * - Acceptance Rate: 42.3%
 *
 * Similar Problems:
 * - longest-consecutive-sequence (Medium)
 */

/**
 * Approach: Math
 * Time Complexity: O(n log log k)
 * Space Complexity: O(n)
 * `n` = `nums.length`, `k` = `max(nums[i])`
 *
 * @param {number[]} nums
 * @return {number}
 */
const maximumLength = (nums) => {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
                const num = nums[i];
                map.set(num, (map.get(num) ?? 0) + 1);
        }

        const cntOnes = map.get(1) ?? 0;
        let res = cntOnes % 2 ? cntOnes : cntOnes - 1;
        map.delete(1);

        for (const num of map.keys()) {
                let val = num;
                let cnt = 0;

                while (map.get(val) > 1) {
                        cnt += 2;
                        val *= val;
                }

                cnt += map.has(val) ? 1 : -1;
                res = Math.max(res, cnt);
        }

        return res;
};

export { maximumLength };
