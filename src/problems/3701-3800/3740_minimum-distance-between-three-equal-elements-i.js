/**
 * 3740. Minimum Distance Between Three Equal Elements I
 *
 * Link: https://leetcode.com/problems/minimum-distance-between-three-equal-elements-i/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-10
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 *
 * Stats:
 * - Total Accepted: 73,132
 * - Total Submissions: 106,670
 * - Acceptance Rate: 68.6%
 */

/**
 * Approach: Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const minimumDistance = (nums) => {
        const n = nums.length;
        const mi = new Map();
        const mj = new Map();
        const max = 2 * n - 1;
        let min = max;

        for (let k = 0; k < n; k++) {
                const num = nums[k];
                const i = mi.get(num);
                const j = mj.get(num);

                if (i === undefined) {
                        mi.set(num, k);
                        continue;
                }

                if (j === undefined) {
                        mj.set(num, k);
                        continue;
                }

                const dist = 2 * (k - i);
                min = Math.min(min, dist);
                mj.set(num, k);
                mi.set(num, j);
        }

        return min === max ? -1 : min;
};

export { minimumDistance };
