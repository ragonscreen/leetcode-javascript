/**
 * 0229. Majority Element II
 * Link: https://leetcode.com/problems/majority-element-ii/
 * Difficulty: Medium
 * Date: 2026-03-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Misra-Gries Summary (Optimal Space)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = (nums) => {
        const map = new Map();

        for (const num of nums) {
                const frq = map.get(num);

                if (frq) {
                        map.set(num, frq + 1);
                } else if (map.size < 2) {
                        map.set(num, 1);
                } else {
                        for (const [key, val] of map) {
                                const newFrq = val - 1;

                                if (newFrq !== 0) {
                                        map.set(key, newFrq);
                                } else {
                                        map.delete(key);
                                }
                        }
                }
        }

        const candidates = [...map.keys()];
        const cnt = [0, 0];

        for (const num of nums) {
                if (num === candidates[0]) {
                        cnt[0]++;
                }

                if (num === candidates[1]) {
                        cnt[1]++;
                }
        }

        const res = [];
        const min = Math.floor(nums.length / 3);

        for (let i = 0; i < 2; i++) {
                if (cnt[i] > min) {
                        res.push(candidates[i]);
                }
        }

        return res;
};

/**
 * Implementation: Hash Set (Optimal Time)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement1 = (nums) => {
        const set = new Set();
        const map = new Map();
        const min = Math.floor(nums.length / 3);

        for (const num of nums) {
                const frq = (map.get(num) || 0) + 1;
                map.set(num, frq);

                if (frq > min) {
                        set.add(num);
                }
        }

        return [...set];
};

export { majorityElement, majorityElement1 };
