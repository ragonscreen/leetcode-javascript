/**
 * 1497. Check If Array Pairs Are Divisible by k
 *
 * Link: https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-07
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Counting (topic_61062)
 *
 * Stats:
 * - Total Accepted: 208,765
 * - Total Submissions: 452,199
 * - Acceptance Rate: 46.2%
 *
 * Similar Problems:
 * - count-pairs-that-form-a-complete-day-i (Easy)
 * - count-pairs-that-form-a-complete-day-ii (Medium)
 * - count-array-pairs-divisible-by-k (Hard)
 * - minimum-deletions-to-make-array-divisible (Hard)
 */

/**
 * Approach: Hash Map
 * Time Complexity: O(n + K / 2) = O(n + K)
 * Space Complexity: O(K)
 * `n` = length of `arr`, `K` = `k`
 *
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
const canArrange = (arr, k) => {
        const map = new Uint32Array(k);

        for (let i = 0; i < arr.length; i++) {
                const num = arr[i];
                const rem = ((num % k) + k) % k;
                map[rem]++;
        }

        if (map[0] % 2) {
                return false;
        }

        for (let i = 1; i <= k >> 1; i++) {
                if (map[i] !== map[k - i]) {
                        return false;
                }
        }

        return true;
};

/**
 * Approach: Hash Map
 * Time Complexity: O(n + K)
 * Space Complexity: O(K)
 * `n` = length of `arr`, `K` = `k`
 *
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
const canArrange1 = (arr, k) => {
        const map = new Uint32Array(k);

        for (let i = 0; i < arr.length; i++) {
                const num = arr[i];
                const rem = ((num % k) + k) % k; // handle negatives
                const mer = (k - rem) % k; // mod k to handle zero rem

                if (map[mer]) {
                        map[mer]--;
                        continue;
                }

                map[rem]++;
        }

        for (let i = 0; i < k; i++) {
                if (map[i]) {
                        return false;
                }
        }

        return true;
};

export { canArrange, canArrange1 };
