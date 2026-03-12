/**
 * 0179. Largest Number
 * Link: https://leetcode.com/problems/largest-number/
 * Difficulty: Medium
 * Date: 2026-03-12
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Two Pointers + Sorting (Optimal)
 * Time Complexity: O(n log n * k)
 * Space Complexity: O(n) for sorting
 * `n` = length of `nums`, `k` = max digit length of number in `nums`
 *
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = (nums) => {
        const sortFn = (a, b) => {
                const _a = String(a);
                const _b = String(b);
                const lenA = _a.length;
                const lenB = _b.length;

                if (lenA === lenB) {
                        return b - a;
                }

                const long = lenA > lenB ? _a : _b;
                const short = lenA > lenB ? _b : _a;
                let wrapped = false;
                let p = 0;
                let q = 0;

                while (true) {
                        if (long[p] > short[q]) {
                                return long === _a ? -1 : 1;
                        }

                        if (long[p] < short[q]) {
                                return long === _b ? -1 : 1;
                        }

                        p++;
                        q++;

                        if (p === long.length) {
                                if (wrapped) {
                                        return 0;
                                }

                                p = 0;
                                wrapped = true;
                        }

                        if (q === short.length) {
                                q = 0;
                        }
                }
        };

        const res = nums.sort(sortFn).join('');

        return nums[0] === 0 ? '0' : res;
};

/**
 * Implementation: Sorting
 * Time Complexity: O(n log n * k)
 * Space Complexity: O(n) for sorting
 * `n` = length of `nums`, `k` = max digit length of number in `nums`
 *
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber1 = (nums) => {
        const sortFn = (a, b) => {
                const _a = String(a);
                const _b = String(b);
                const ab = _a + _b;
                const ba = _b + _a;

                return ab > ba ? -1 : 1;
        };

        const res = nums.sort(sortFn).join('');

        return nums[0] === 0 ? '0' : res;
};

export { largestNumber, largestNumber1 };
