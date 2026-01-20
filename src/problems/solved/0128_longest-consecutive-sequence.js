/**
 * 0128. Longest Consecutive Sequence
 * Link: https://leetcode.com/problems/longest-consecutive-sequence/
 * Difficulty: Medium
 * Date: 2025-12-16
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Hash Set
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
        const set = new Set(nums);
        let max = 0;

        for (const n of set) {
                if (set.has(n - 1)) {
                        continue;
                }

                let len = 1;

                while (set.has(n + len)) {
                        len++;
                }

                if (len > max) {
                        max = len;
                }
        }

        return max;
};

export default longestConsecutive;
