/**
 * 3927. Minimize Array Sum Using Divisible Replacements
 *
 * Link: https://leetcode.com/problems/minimize-array-sum-using-divisible-replacements/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Stats:
 * - Total Accepted: 17,882
 * - Total Submissions: 57,215
 * - Acceptance Rate: 31.3%
 */

/**
 * Approach: Math + Hash Map
 * Time Complexity: O(n * sqrt(n))
 * Space Complexity: O(n)
 * `n` = length of `nums`
 *
 * @param {number[]} nums
 * @return {number}
 */
const minArraySum = (nums) => {
        const n = nums.length;
        const map = new Map();

        for (let i = 0; i < n; i++) {
                map.set(nums[i], 0);
        }

        if (map.has(1)) {
                return n;
        }

        const getSmallestFactor = (num) => {
                const rt = 0 | Math.sqrt(num);
                let min = num;

                for (let a = 2; a <= rt; a++) {
                        if (num % a) {
                                continue;
                        }

                        if (map.has(a)) {
                                return a;
                        }

                        const b = num / a;

                        if (map.has(b)) {
                                min = b;
                        }
                }

                return min;
        };

        let res = 0;

        for (let i = 0; i < n; i++) {
                const num = nums[i];
                let min = map.get(num);

                if (!min) {
                        min = getSmallestFactor(num);
                        map.set(num, min);
                }

                res += min;
        }

        return res;
};

/**
 * Approach: Math
 * Time Complexity: O(n * (sqrt(n) + f))
 * Space Complexity: O(n * f)
 * `n` = length of `nums`, `f` = number of factors of `nums[i]`
 *
 * @param {number[]} nums
 * @return {number}
 */
const minArraySum1 = (nums) => {
        const getFactors = (num) => {
                const res = [];
                const rt = Math.floor(Math.sqrt(num));

                for (let i = 1; i <= rt; i++) {
                        if (num % i === 0) {
                                res.push(i);
                                res.push(num / i);
                        }
                }

                return res;
        };

        const set = new Set(nums);
        const map = new Map();
        let res = 0;

        for (let i = 0; i < nums.length; i++) {
                const num = nums[i];
                let factors = map.get(num);

                if (!factors) {
                        factors = getFactors(num);
                        map.set(num, factors);
                }

                let min = num;

                for (const k of factors) {
                        if (set.has(k)) {
                                min = Math.min(min, k);
                        }
                }

                res += min;
        }

        return res;
};

export { minArraySum, minArraySum1 };
