/**
 * 2780. Minimum Index of a Valid Split
 *
 * Link: https://leetcode.com/problems/minimum-index-of-a-valid-split/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-23
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 149,173
 * - Total Submissions: 197,595
 * - Acceptance Rate: 75.5%
 *
 * Similar Problems:
 * - majority-element (Easy)
 * - partition-array-into-disjoint-intervals (Medium)
 */

/**
 * Approach: Boyer-Moore Majority Vote Algorithm [Optimal Space]
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const minimumIndex = (nums) => {
        // Boyer-Moore
        const n = nums.length;
        let max = 0;
        let cnt = 0;

        for (let i = 0; i < n; i++) {
                const num = nums[i];

                if (cnt === 0) {
                        max = num;
                }

                cnt += num === max ? 1 : -1;
        }

        let maxCnt = 0;

        for (let i = n - 1; i > -1; i--) {
                maxCnt += nums[i] === max;
        }

        cnt = 0;

        for (let i = 0; i < n; i++) {
                cnt += nums[i] === max;

                // multiplication instead of division for performance
                if (cnt * 2 > i + 1 && (maxCnt - cnt) * 2 > n - i - 1) {
                        return i;
                }
        }

        return -1;
};

/**
 * Approach: Boyer-Moore Majority Vote Algorithm + Prefix Sum
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const minimumIndex1 = (nums) => {
        // Boyer-Moore
        const n = nums.length;
        let max = 0;
        let cnt = 0;

        for (let i = 0; i < n; i++) {
                const num = nums[i];

                if (cnt === 0) {
                        max = num;
                }

                cnt += num === max ? 1 : -1;
        }

        const right = new Uint32Array(n);
        cnt = 0;

        for (let i = n - 1; i > -1; i--) {
                cnt += nums[i] === max;
                right[i] = cnt;
        }

        cnt = 0;

        for (let i = 0; i < n; i++) {
                cnt += nums[i] === max;

                // multiplication instead of division for performance
                if (cnt * 2 > i + 1 && right[i + 1] * 2 > n - i - 1) {
                        return i;
                }
        }

        return -1;
};

export { minimumIndex, minimumIndex1 };
