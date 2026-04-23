/**
 * 2615. Sum of Distances
 *
 * Link: https://leetcode.com/problems/sum-of-distances/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-23
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 56,875
 * - Total Submissions: 135,688
 * - Acceptance Rate: 41.9%
 *
 * Similar Problems:
 * - remove-duplicates-from-sorted-array (Easy)
 * - find-all-duplicates-in-an-array (Medium)
 * - minimum-operations-to-make-all-array-elements-equal (Medium)
 */

/**
 * Approach: Hash Map + Prefix Sum
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const distance = (nums) => {
        const n = nums.length;
        const res = new Float64Array(n);
        const idxMapL = new Map();
        const cntMapL = new Map();
        const preMapL = new Map();
        const idxMapR = new Map();
        const cntMapR = new Map();
        const preMapR = new Map();

        for (let l = 0; l < n; l++) {
                const nl = nums[l];
                const cntL = cntMapL.get(nl) || 0;
                const idxL = idxMapL.get(nl) || 0;
                const preL = preMapL.get(nl) || 0;
                const newPreL = preL + cntL * (l - idxL);
                res[l] += newPreL;
                cntMapL.set(nl, cntL + 1);
                idxMapL.set(nl, l);
                preMapL.set(nl, newPreL);

                const r = n - l - 1;
                const nr = nums[r];
                const cntR = cntMapR.get(nr) || 0;
                const idxR = idxMapR.get(nr) || 0;
                const preR = preMapR.get(nr) || 0;
                const newPreR = preR + cntR * (idxR - r);
                res[r] += newPreR;
                cntMapR.set(nr, cntR + 1);
                idxMapR.set(nr, r);
                preMapR.set(nr, newPreR);
        }

        return res;
};

export { distance };
