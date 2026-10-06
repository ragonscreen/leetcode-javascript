/**
 * 3739. Count Subarrays With Majority Element II
 *
 * Link: https://leetcode.com/problems/count-subarrays-with-majority-element-ii/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-07-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Divide and Conquer (topic_12)
 * - Segment Tree (topic_29)
 * - Merge Sort (topic_61051)
 * - Prefix Sum (topic_61068)
 * - Senior Staff (position_senior-staff)
 * - Biweekly Contest 169 (contest_biweekly-contest-169)
 *
 * Stats:
 *
 * - Total Accepted: 76,228
 * - Total Submissions: 117,601
 * - Acceptance Rate: 64.8%
 */

/**
 * Approach: Prefix Sum
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
const countMajoritySubarrays = (nums, target) => {
        const n = nums.length;
        let pre = n + 1;
        const acc = new Uint32Array(2 * pre);
        const cnt = new Uint32Array(2 * pre);
        let res = 0;
        acc[pre] = 1;
        cnt[pre] = 1;

        for (let i = 0; i < n; i++) {
                pre += nums[i] === target ? 1 : -1;
                cnt[pre]++;
                acc[pre] = acc[pre - 1] + cnt[pre];
                res += acc[pre - 1];
        }

        return res;
};

export { countMajoritySubarrays };
