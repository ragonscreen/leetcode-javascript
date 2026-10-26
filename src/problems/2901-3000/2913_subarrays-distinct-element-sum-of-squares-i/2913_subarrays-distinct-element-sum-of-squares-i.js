/**
 * 2913. Subarrays Distinct Element Sum of Squares I
 *
 * Link: https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-10-15
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Binary Indexed Tree (topic_28)
 * - Segment Tree (topic_29)
 * - Mid Level (position_mid-level)
 * - Biweekly Contest 116 (contest_biweekly-contest-116)
 *
 * Stats:
 *
 * - Total Accepted: 168,312
 * - Total Submissions: 191,329
 * - Acceptance Rate: 88.0%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @returns {number}
 */
const sumCounts = (nums) => {
        const st = new Uint8Array(101);
        const n = nums.length;
        let res = 0;

        for (let i = 0; i < n; i++) {
                st.fill(0);

                for (let j = i, cnt = 0; j < n; j++) {
                        const num = nums[j];
                        cnt += st[num] ^ 1;
                        st[num] = 1;
                        res += cnt * cnt;
                }
        }

        return res;
};

export { sumCounts };
