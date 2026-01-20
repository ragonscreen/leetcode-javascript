/**
 * 0015. 3Sum
 * Link: https://leetcode.com/problems/3sum/
 * Difficulty: Medium
 * Date: 2026-01-19
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Two Pointers
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
        const res = [];
        const n = [...nums].sort((a, b) => a - b);

        for (let i = 0; i < n.length; i++) {
                if (n[i] > 0) {
                        break;
                }

                if (n[i] === n[i - 1]) {
                        continue;
                }

                const t = -n[i];
                let l = i + 1;
                let r = n.length - 1;

                while (l < r) {
                        const v = n[l] + n[r];

                        if (v === t) {
                                res.push([n[i], n[l], n[r]]);

                                while (n[l] === n[l + 1]) {
                                        l++;
                                }

                                l++;
                                r--;
                        } else if (v < t) {
                                l++;
                        } else {
                                r--;
                        }
                }
        }

        return res;
};

export default threeSum;
