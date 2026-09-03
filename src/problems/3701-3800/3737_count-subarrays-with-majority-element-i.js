/**
 * 3737. Count Subarrays With Majority Element I
 *
 * Link: https://leetcode.com/problems/count-subarrays-with-majority-element-i/
 * Category: Algorithms
 * Difficulty: Medium
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
 * - Counting (topic_61062)
 * - Prefix Sum (topic_61068)
 * - Senior (position_senior)
 * - Biweekly Contest 169 (contest_biweekly-contest-169)
 *
 * Stats:
 *
 * - Total Accepted: 136,424
 * - Total Submissions: 180,272
 * - Acceptance Rate: 75.7%
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

/**
 * Approach: Sliding Window
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
const countMajoritySubarrays1 = (nums, target) => {
        const n = nums.length;
        let res = 0;

        for (let k = 1; k <= n; k++) {
                let cnt = 0;

                for (let l = 0, r = 0; r < n; r++) {
                        const sz = r - l + 1;
                        cnt += nums[r] === target;

                        if (sz === k) {
                                res += cnt * 2 > sz;
                                cnt -= nums[l++] === target;
                        }
                }
        }

        return res;
};

export { countMajoritySubarrays, countMajoritySubarrays1 };
