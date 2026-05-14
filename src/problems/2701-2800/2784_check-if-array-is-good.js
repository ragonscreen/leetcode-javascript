/**
 * 2784. Check if Array is Good
 *
 * Link: https://leetcode.com/problems/check-if-array-is-good/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-05-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 98,746
 * - Total Submissions: 186,291
 * - Acceptance Rate: 53.0%
 */

/**
 * Approach: Cyclic Sort + Negative Marking
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const isGood = (nums) => {
        const n = nums.length;

        if (n <= 1) {
                return false;
        }

        const max = n - 1;

        for (let i = 0; i < n; i++) {
                const num = Math.abs(nums[i]);

                if (num > max) {
                        return false;
                }

                if (num < max && nums[num] < 0) {
                        return false;
                }

                nums[num] *= -1;
        }

        return nums[max] > 0;
};

/**
 * Approach: Hash Map [One Pass]
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const isGood1 = (nums) => {
        const n = nums.length;

        if (n <= 1) {
                return false;
        }

        const map = new Uint8Array(n);
        const max = n - 1;

        for (let i = 0; i < n; i++) {
                const num = nums[i];

                if (num > max) {
                        return false;
                }

                const cnt = ++map[num];

                if (num !== max && cnt !== 1) {
                        return false;
                }
        }

        return map[max] === 2;
};

/**
 * Approach: Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const isGood2 = (nums) => {
        const n = nums.length;

        if (n <= 1) {
                return false;
        }

        const map = new Uint8Array(n);

        for (let i = 0; i < n; i++) {
                map[nums[i]]++;
        }

        const max = n - 1;

        for (let i = 1; i < n; i++) {
                const cnt = map[i];

                if ((i !== max && cnt !== 1) || (i === max && cnt !== 2)) {
                        return false;
                }
        }

        return true;
};

export { isGood, isGood1, isGood2 };
