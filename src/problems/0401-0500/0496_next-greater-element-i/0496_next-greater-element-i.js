/**
 * 496. Next Greater Element I
 *
 * Link: https://leetcode.com/problems/next-greater-element-i/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-09-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Stack (topic_15)
 * - Monotonic Stack (topic_61054)
 * - Mid Level (position_mid-level)
 *
 * Stats:
 *
 * - Total Accepted: 1,627,966
 * - Total Submissions: 2,117,687
 * - Acceptance Rate: 76.9%
 *
 * Similar Problems:
 *
 * - smallest-missing-integer-greater-than-sequential-prefix-sum (Easy)
 * - daily-temperatures (Medium)
 * - next-greater-element-ii (Medium)
 * - next-greater-element-iii (Medium)
 * - remove-nodes-from-linked-list (Medium)
 * - sum-of-subarray-ranges (Medium)
 * - next-greater-element-iv (Hard)
 * - sum-of-total-strength-of-wizards (Hard)
 */

/**
 * Approach: Monotonic Stack
 * Time Complexity: O(n + m)
 * Space Complexity: O(m + K) auxiliary, O(n + m + K) total
 * `n` = `nums1.length`, `m` = `nums2.length`, `K` = `max(nums2[i])`
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
const nextGreaterElement = (nums1, nums2) => {
        const m = nums2.length;
        const mp = new Int16Array(Math.max(...nums2) + 1).fill(-1);
        const st = new Uint16Array(m);
        let sp = 0;

        for (let i = 0; i < m; i++) {
                const num = nums2[i];

                while (sp > 0 && num > st[sp - 1]) mp[st[--sp]] = num;

                st[sp++] = num;
        }

        return Int16Array.from(nums1, (e) => mp[e]);
};

export { nextGreaterElement };
