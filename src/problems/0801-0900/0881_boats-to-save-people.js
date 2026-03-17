/**
 * 0881. Boats to Save People
 *
 * Link: https://leetcode.com/problems/boats-to-save-people/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-02-19 (Updated: 2026-03-17)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 555,034
 * - Total Submissions: 902,428
 * - Acceptance Rate: 61.5%
 */

/**
 * Implementation: Counting Sort + Two Pointers [Optimal]
 * Time Complexity: O(n)
 * Space Complexity: O(m)
 * `n` = length of `people`, `m` = maximum value in `people`
 *
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats = (people, limit) => {
        const maxWeight = Math.max(...people);
        const arr = new Array(maxWeight + 1);

        for (const weight of people) {
                arr[weight] = (arr[weight] || 0) + 1;
        }

        let l = 1;
        let r = arr.length - 1;
        let res = 0;

        while (l <= r) {
                while (l <= r && !arr[l]) {
                        l++;
                }

                while (l <= r && !arr[r]) {
                        r--;
                }

                if (l > r) {
                        break;
                }

                if (l + r <= limit) {
                        arr[l]--;

                        if (arr[r]) {
                                arr[r]--;
                        }

                        res++;
                } else {
                        res += arr[r];
                        arr[r] = 0;
                }
        }

        return res;
};

/**
 * Approach: Sorting + Two Pointers
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 *
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats1 = (people, limit) => {
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
const numRescueBoats2 = (people, limit) => {
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

export { numRescueBoats, numRescueBoats1, numRescueBoats2 };
