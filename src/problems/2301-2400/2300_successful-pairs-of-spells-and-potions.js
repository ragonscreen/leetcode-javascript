/**
 * 2300. Successful Pairs of Spells and Potions
 *
 * Link: https://leetcode.com/problems/successful-pairs-of-spells-and-potions/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-04
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Binary Search (topic_11)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 382,783
 * - Total Submissions: 772,865
 * - Acceptance Rate: 49.5%
 *
 * Similar Problems:
 * - longest-subsequence-with-limited-sum (Easy)
 * - maximum-matching-of-players-with-trainers (Medium)
 * - most-profit-assigning-work (Medium)
 */

/**
 * Approach: Counting Sort
 * Time Complexity: O(n + m)
 * Space Complexity: O(m + k)
 * `n` = lengh of `potions`, `m` = length of `spells`, `k` = maximum value in `potions`
 *
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
const successfulPairs = (spells, potions, success) => {
        const maxPotion = Math.max(...potions);
        const arr = new Array(maxPotion + 1).fill(0);

        for (const potion of potions) {
                arr[potion]++;
        }

        let prefix = 0;

        for (let i = maxPotion; i >= 0; i--) {
                prefix += arr[i];
                arr[i] = prefix;
        }

        const m = spells.length;
        const res = new Array(m);

        for (let i = 0; i < m; i++) {
                const min = Math.ceil(success / spells[i]);
                res[i] = arr[min] ?? 0;
        }

        return res;
};

/**
 * Approach: Binary Search
 * Time Complexity: O(m log n)
 * Space Complexity: O(m)
 * `n` = lengh of `potions`, `m` = length of `spells`
 *
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
const successfulPairs1 = (spells, potions, success) => {
        potions.sort((a, b) => a - b);
        const n = potions.length;
        const s = spells.length;
        const res = new Array(s);

        for (let i = 0; i < s; i++) {
                let l = 0;
                let r = n;

                while (l < r) {
                        const m = l + Math.floor((r - l) / 2);
                        const val = spells[i] * potions[m];

                        if (val < success) {
                                l = m + 1;
                        } else {
                                r = m;
                        }
                }

                res[i] = n - l;
        }

        return res;
};

export { successfulPairs, successfulPairs1 };
