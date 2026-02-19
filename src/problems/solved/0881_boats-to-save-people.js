/**
 * 0881. Boats to Save People
 * Link: https://leetcode.com/problems/boats-to-save-people/
 * Difficulty: Medium
 * Date: 2026-02-19
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Two Pointers
 * Time Complexity: O(n * log(n))
 * Space Complexity: O(n)
 *
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats = (people, limit) => {
        const nums = people.sort((a, b) => a - b);
        let res = 0;
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
                if (nums[l] === limit || 2 * nums[l] > limit) {
                        res += r - l + 1;
                        break;
                }

                if (nums[l] + nums[r] <= limit) {
                        l++;
                }

                res++;
                r--;
        }

        return res;
};

/**
 * Implementation: Greedy First Fit Decreasing
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 *
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats1 = (people, limit) => {
        const nums = people.sort((a, b) => b - a);
        const boats = [];

        for (const num of nums) {
                let found = false;

                for (const boat of boats) {
                        if (boat.length === 3) {
                                continue;
                        }

                        if (boat[0] + num <= limit) {
                                boat.push(num);
                                boat[0] += num;
                                found = true;
                                break;
                        }
                }

                if (!found) {
                        boats.push([num, num]);
                }
        }

        return boats.length;
};

export { numRescueBoats, numRescueBoats1 };
