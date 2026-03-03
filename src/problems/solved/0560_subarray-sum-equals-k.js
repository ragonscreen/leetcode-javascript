/**
 * 0560. Subarray Sum Equals K
 * Link: https://leetcode.com/problems/subarray-sum-equals-k/
 * Difficulty: Medium
 * Date: 2026-03-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = (nums, k) => {
        const pre = new Array(nums.length);
        let sum = 0;

        for (let i = 0; i < nums.length; i++) {
                sum += nums[i];
                pre[i] = sum;
        }

        const map = new Map();
        let res = 0;

        for (const l of pre) {
                if (l === k) {
                        res++;
                }

                res += map.get(l) || 0;
                const pair = l + k;
                map.set(pair, (map.get(pair) || 0) + 1);
        }

        return res;
};

export { subarraySum };
