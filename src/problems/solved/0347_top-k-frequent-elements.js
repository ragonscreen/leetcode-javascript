/**
 * 0347. Top K Frequent Elements
 * Link: https://leetcode.com/problems/top-k-frequent-elements/
 * Difficulty: Medium
 * Date: 2025-12-09
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Bucket Sort
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
        const counts = new Map();

        for (const num of nums) {
                counts.set(num, (counts.get(num) || 0) + 1);
        }

        const bucket = new Array(nums.length + 1).fill(null);

        for (const [num, count] of counts.entries()) {
                bucket[count] ??= [];
                bucket[count].push(num);
        }

        const res = [];

        for (let i = bucket.length - 1; i > 0 && res.length < k; i--) {
                const nums = bucket[i];

                if (nums) {
                        res.push(...nums);
                }
        }

        return res;
};

export { topKFrequent };
